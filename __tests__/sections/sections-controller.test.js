const request = require('supertest');
const express = require('express');
const sectionController = require('../../api/sections/sections-conroller'); 
const sectionModel = require('../../api/sections/sections-model'); 
const db = require('../../data/db-config'); 

// Create a new express application for testing
const app = express()

// Middleware to parse JSON
app.use(express.json())

// Set up the route to use your controller
app.get('/api/sections', sectionController.getAllSections)

describe('Sections Controller', () => {
    // Cleanup after tests
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
    });

    // Test for error handling in the controller
    test('GET /api/sections should return 500 if there is an error', async () => {
        // Mock the getSections method to throw an error
        jest.spyOn(sectionModel, 'getSections').mockImplementationOnce(() => {
            throw new Error('Database Error')
        })

        const response = await request(app).get('/api/sections')

        expect(response.status).toBe(500)
        expect(response.body.error).toBe('Failed to retrieve sections');

        // Restore the original implementation
        sectionModel.getSections.mockRestore()
    })
})
