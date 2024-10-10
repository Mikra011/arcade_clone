const request = require('supertest')
const server = require('../../api/server')
const db = require('../../data/db-config')

describe('Auth Routes', () => {
  beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
    await db.seed.run()
  })

  afterAll(async () => {
    await db.destroy() // Close the database connection after all tests
  })

  describe('POST /api/auth/register', () => {
    it('should register a new user and return a success message', async () => {
      const newUser = { username: 'testuser', password: 'password123', email: 'test@test.com' }

      const res = await request(server)
        .post('/api/auth/register')
        .send(newUser)

      expect(res.status).toBe(201)
      expect(res.body.message).toBe('Great to have you, testuser')
    })

    it('should return an error if missing username or password', async () => {
      const incompleteUser = { username: 'testuser' }

      const res = await request(server)
        .post('/api/auth/register')
        .send(incompleteUser)

      expect(res.status).toBe(500)
      expect(res.body.message).toBeDefined()
    })
  })

  describe('POST /api/auth/login', () => {
    it('should login an existing user and return a token', async () => {
      const credentials = { username: 'testuser', password: 'password123' }

      const res = await request(server)
        .post('/api/auth/login')
        .send(credentials)


      expect(res.status).toBe(200)
      expect(res.body.message).toBe('Welcome back testuser...')
      expect(res.body.token).toBeDefined()
    })

    it('should return a 401 for invalid credentials', async () => {
      const invalidCredentials = { username: 'wronguser', password: 'wrongpassword' }

      const res = await request(server)
        .post('/api/auth/login')
        .send(invalidCredentials)

      expect(res.status).toBe(401)
      expect(res.body.message).toBe('Invalid Credentials')
    })
  })
})
