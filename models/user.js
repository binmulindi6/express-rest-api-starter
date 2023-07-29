'use strict'
const { Model } = require('sequelize')
const bcrypt = require('bcrypt')
const saltRounds = 10
// const {sequelize} = require('./index')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      firstName: { type: DataTypes.STRING, allowNull: false },
      lastName: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        // validate: {
        //   // isEmail: {
        //   //   msg: 'this must be an email'
        //   // }
        // },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          // Storing passwords in plaintext in the database is terrible.
          // Hashing the value with an appropriate cryptographic hash function is better.
          // const hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
          this.setDataValue('password', bcrypt.hashSync(value, saltRounds))
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    },
  )
  return User
}
