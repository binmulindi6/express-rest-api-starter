const controllers = require('./controllers.js')
const router = require('express').Router()

//gets
router.get('/', controllers.getUsers)
router.post('/create', controllers.createUser)
router.get('/:id', controllers.getUser)
router.post('/login', controllers.login)

module.exports = router
