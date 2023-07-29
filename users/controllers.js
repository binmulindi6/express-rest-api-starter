const { getUsers, createUser, getUser, login } = require('./services')

module.exports = {
  getUsers: async (req, res) => {
    try {
      // const id = req.params.id
      // const product = await getProduct(id)
      // res.json(product)

      // console.log('getUsers')
      const data = await getUsers()
      res.send(data)
    } catch (err) {
      res.status(500).send(err)
    }
  },
  createUser: async (req, res) => {
    try {
      // console.log(req.body);
      const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      }
      // console.log(data)

      const user = await createUser(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
      )
      user.email ? res.send('succes') : res.status(500).send('error')
    } catch (err) {
      // console.log('err')
      res.status(500).send(err)
    }
  },
  getUser: async (req, res) => {
    try {
      console.log(req.params.id)
      const data = await getUser(req.params.id)
      res.send(data)
    } catch (error) {
      res.status(500).send(error)
    }
  },
  login: async (req, res) => {
    try {
      // console.log(req.params.id)
      const user = await login(req.body.email, req.body.password)
        .then((data) => {
		console.log(data)
          res.send(data)
        })
        .catch((err) => {
          res.status(500).send(err)
        })

		return user
    } catch (error) {
      res.status(500).send(error)
    }
  },
}
