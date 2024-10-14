const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
const User = require('../users/users-model.js')

const config = require('../config/config.js')
const { BCRYPT_ROUNDS, JWT_SECRET } = config

router.post('/register', (req, res, next) => {
  let user = req.body

  // Hash the password
  const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS)
  user.password = hash

  User.add(user)
    .then(saved => {
      res.status(201).json({ message: `Great to have you, ${saved.username}` })
    })
    .catch(err => {
      // Check for unique constraint violation
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ message: 'Username already exists' })
      }
      next(err) // For other errors, let the default error handler handle it
    })
})

router.post('/login', (req, res, next) => {
  let { username, password } = req.body

  User.findBy({ username })
    .then(([user]) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = buildToken(user)
        res.status(200).json({ message: `Welcome back ${user.username}...`, token })
      } else {
        next({ status: 401, message: 'Invalid Credentials' })
      }
    })
    .catch(next)
})

function buildToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

module.exports = router
