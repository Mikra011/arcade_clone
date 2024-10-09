const sectionModel = require('../../api/sections/sections-model');
const db = require('../../data/db-config');

describe('Sections Model', () => {
    afterAll(async () => {
        await db.destroy() // Ensure the database connection is closed
    })

    // Test to retrieve all sections
    test('should retrieve all sections', async () => {
        const sections = await sectionModel.getSections()
        expect(sections).toBeDefined()
        expect(Array.isArray(sections)).toBe(true)
        expect(sections).toHaveLength(5)
    })

    // Test to ensure proper error handling
    test('should throw an error when querying an invalid column', async () => {
        // Simulate an invalid query by selecting an incorrect column (e.g., sections.name)
        const invalidQuery = async () => {
            return db('sections').select('sections.name') // 'sections.name' does not exist
        }

        // Expect the invalid query to throw an error
        await expect(invalidQuery()).rejects.toThrow()
    })
})
