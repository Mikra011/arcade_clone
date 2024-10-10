const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/db-config');
const jwt = require('jsonwebtoken');
const config = require('../../api/config/config');
const { JWT_SECRET } = config;

describe('Topics Router', () => {
    beforeAll(async () => {
        token = jwt.sign({ id: 1, username: 'testuser' }, JWT_SECRET)
    })

    afterAll(async () => {
        await db.destroy()
    })

    describe('GET /api/topics/:sectionName', () => {
        it('should return topics for the given section name', async () => {
            const res = await request(server)
                .get('/api/topics/intro')
                .set('Authorization', token)

            expect(res.status).toBe(200)
            expect(res.body).toBeDefined()
            expect(Array.isArray(res.body)).toBe(true)
        })

        it('should return a 404 if no topics found for the section', async () => {
            const res = await request(server)
                .get('/api/topics/invalidSection')
                .set('Authorization', token)

            expect(res.status).toBe(404)
            expect(res.body.message).toBe('No topics found for this section')
        })

        it('should return a 401 if no token is provided', async () => {
            const res = await request(server).get('/api/topics/sectionName')

            expect(res.status).toBe(401)
            expect(res.body.message).toBe('wat? no token?')
        })
    })
})
