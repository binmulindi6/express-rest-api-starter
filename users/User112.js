const { Sequelize, DataTypes, Model } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const sequelize = require('../config/db')

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email: {
    type: DataTypes.STRING,
    allowNull : false
  },
  password: {
    type: DataTypes.STRING,
    allowNull : false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  paranoid : true,
  modelName: 'User' // We need to choose the model name,
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true

module.exports = User