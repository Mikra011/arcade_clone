const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const sectionsRouter = require('./sections/sections-router')
const topicsRouter = require('./topics/topics-router')
const challengesRouter = require('./challenges/challenges-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/sections', sectionsRouter)
server.use('/api/topics', topicsRouter)
server.use('/api/challenges', challengesRouter)

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