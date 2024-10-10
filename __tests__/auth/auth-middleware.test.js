const request = require('supertest');
const server = require('../../api/server');
const db = require('../../data/db-config');
const jwt = require('jsonwebtoken');
const config = require('../../api/config/config');
const { JWT_SECRET } = config;

describe('Auth Middleware', () => {
    let token

    beforeAll(async () => {
        await db.migrate.rollback()
        await db.migrate.latest()
        await db.seed.run()

        // Create a valid token for testing
        token = jwt.sign({ id: 1, username: 'testuser' }, JWT_SECRET)
    })

    afterAll(async () => {
        await db.destroy()
    })

    it('should allow access with a valid token', async () => {
        const res = await request(server)
            .get('/api/topics')
            .set('Authorization', token)

        expect(res.status).toBe(200)
    })

    it('should deny access without a token', async () => {
        const res = await request(server)
            .get('/api/topics')

        expect(res.status).toBe(401)
        expect(res.body.message).toBe('wat? no token?')
    })

    it('should deny access with an invalid token', async () => {
        const res = await request(server)
            .get('/api/topics')
            .set('Authorization', 'invalid.token.here')

        expect(res.status).toBe(401)
        expect(res.body.message).toContain('token bad')
    })
})
