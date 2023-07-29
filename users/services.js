const { sequelize } = require('../models')
const { Op } = require('sequelize')
const bcrypt = require('bcrypt')
const User = sequelize.models.User
// const User = require('../models/User112')

module.exports = {
  getUsers: async () => {
    const users = await User.findAll({
      attributes: [['firstName', 'prenom'], 'lastName', 'email', 'password'],
    })
    // console.log(user[0].email)
    return users
  },
  createUser: async (firstName, lastName, email, password) => {
    console.log('10')
    try {
      const user = await sequelize.models.User.build({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      })
      //   console.log(11)
      //   // const user = new User({firstName:firstName, lastName:lastName, email:email, password:password})

      //   // console.log(user instanceof User)
      //   // console.log(user.email)
      user.save()

      return user
    } catch (sequelizeError) {
      console.log(sequelizeError)
    }
  },
  getUser: async (id) => {
    //   return 'these are all users'
    const user = await User.findAll({
      attributes: ['firstName', 'lastName', 'email'],
      where: {
        id: {
          [Op.eq]: 2,
        },
      },
    })
    // console.log(user[0].email)
    return user
  },
  login: async (email, password) => {
    return await User.findOne({
      where: {
        email: {
          [Op.eq]: email,
        },
      },
    })
      .then((result) => {
        if(result && result.password && bcrypt.compareSync(password, result.password)){
            // console.log(result.toJSON())
            return result.toJSON()
        }else{
            return 'not match'
        }
      })
      .catch((err) => {
        console.log('error:' + err)
      })
  },
  edit: async (id,user) => {
    return await User.findOne({
      where: {
        id: {
          [Op.eq]: id,
        },
      },
    })
      .then((result) => {
        if(result && result.email){
            result.firstName = user.firstName
            result.lastName = user.lastName

            result.save()
            return 'succes'
        }else{
            return 'not match'
        }
      })
      .catch((err) => {
        console.log('error:' + err)
      })
  },
}
