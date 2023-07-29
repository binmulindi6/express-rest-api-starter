const express = require('express')
// const sequelize = require('./config/db')
const users = require('./users/routes')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use('/users', users)
// app.use('/api/orders', orders)
// sequelize.connect()

module.exports = app
