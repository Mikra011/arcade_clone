const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const { authenticate, validateUser } = require('./auth/auth-middleware')

const sectionsRouter = require('./sections/sections-router')
const topicsRouter = require('./topics/topics-router')
const challengesRouter = require('./challenges/challenges-router')
const authRouter = require('./auth/auth-router')
const progressRouter = require('./progress/progress-router')
const usersRouter = require('./users/users-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// public
server.use('/api/sections', sectionsRouter)
server.use('/api/auth', validateUser, authRouter)

// protected
server.use('/api/topics', authenticate, topicsRouter)
server.use('/api/challenges', authenticate, challengesRouter)
server.use('/api/progress', authenticate, progressRouter)
server.use('/api/users', authenticate, usersRouter)

server.use("*", (req, res) => {
    res.json({ api: "works" })
})

server.use((err, req, res, next) => {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'
    res.status(status).json({
        message: message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    })
})

module.exports = server