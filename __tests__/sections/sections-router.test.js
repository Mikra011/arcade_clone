const request = require('supertest');
const express = require('express');
const sectionsRouter = require('../../api/sections/sections-router'); 
const sectionModel = require('../../api/sections/sections-model'); 
const db = require('../../data/db-config')


// Create a new express application for testing
const app = express()

// Middleware to parse JSON
app.use(express.json())

// Use the sections router
app.use('/api/sections', sectionsRouter)

describe('Sections Router', () => {
    afterAll(async () => {
        await db.destroy() // Ensure the database connection is closed
    })

    // Test for successful retrieval of sections
    test('GET /api/sections should retrieve all sections', async () => {
        const response = await request(app).get('/api/sections')

        expect(response.status).toBe(200)
        expect(response.body).toBeDefined()
        expect(Array.isArray(response.body)).toBe(true)
        expect(response.body).toHaveLength(5)
    })
})
