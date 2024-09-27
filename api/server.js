const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const authenticate = require('./auth/auth-middleware')

const sectionsRouter = require('./sections/sections-router')
const topicsRouter = require('./topics/topics-router')
const challengesRouter = require('./challenges/challenges-router')
const authRouter = require('./auth/auth-router')
const progressRouter = require('./progress/progress-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

// public
server.use('/api/sections', sectionsRouter)
server.use('/api/auth', authRouter)

// protected
server.use('/api/topics', authenticate, topicsRouter)
server.use('/api/challenges', authenticate, challengesRouter)
server.use('/api/progress', authenticate, progressRouter)

server.use("*", (req, res) => {
    res.json({ api: "works" })
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = server