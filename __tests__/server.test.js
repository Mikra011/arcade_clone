const request = require('supertest');
const server = require('../api/server');
const db = require('../data/db-config'); // Adjust this path to your db-config file

describe('Sections endpoints', () => {
  // Clean up after all tests
  afterAll(async () => {
    await db.destroy() // Ensure the database connection is closed
  })

  // Test to verify that the environment is set to testing
  test('environment is testing', () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
  
  it('GET /api/sections should return 200 and a JSON array', async () => {
    const response = await request(server).get('/api/sections')

    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toContain('application/json')
    expect(Array.isArray(response.body)).toBe(true)
  })

  it('GET /random-url should return a 200 and confirmation that API works', async () => {
    const response = await request(server).get('/random-url')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ api: 'works' })
  })
})
