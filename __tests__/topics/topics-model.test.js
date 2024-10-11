const db = require('../../data/db-config');
const topicModel = require('../../api/topics/topics-model');

describe('Topics Model', () => {
    beforeAll(async () => {
        await db.migrate.rollback()
        await db.migrate.latest()
        await db.seed.run()
    })

    afterAll(async () => {
        await db.destroy() // Close the database connection after tests
    })

    describe('getTopicsBySection', () => {
        it('should retrieve topics for a valid section and user ID', async () => {
            const sectionName = 'intro'
            const userId = 1

            const topics = await topicModel.getTopicsBySection(sectionName, userId)

            expect(topics).toBeDefined()
            expect(Array.isArray(topics)).toBe(true)

            expect(topics.length).toBeGreaterThan(0)
            topics.forEach(topic => {
                expect(topic).toHaveProperty('topic_name')
                expect(topic).toHaveProperty('challenges')
                expect(Array.isArray(topic.challenges)).toBe(true)
            })
        })


        it('should return an empty array if no topics found', async () => {
            const sectionName = 'intros'
            const userId = 1

            const topics = await topicModel.getTopicsBySection(sectionName, userId)

            expect(topics).toEqual([]) // Should return an empty array
        })
    })

    describe('getTopicsBySection - user progress', () => {

        it('should have only one available topic at a time', async () => {
            const userId = 1
            const topics = await topicModel.getTopicsBySection('intro', userId)
        
            // Filter for available topics
            const availableTopics = topics.filter(topic => topic.available)
        
            // Expect only one topic to be available at any time
            expect(availableTopics.length).toBeLessThanOrEqual(1)
        })

        it('should have only one available challenge at a time per topic', async () => {
            const sectionName = 'intro'
            const userId = 1
        
            const topics = await topicModel.getTopicsBySection(sectionName, userId)
        
            // Ensure there are topics retrieved
            expect(topics.length).toBeGreaterThan(0)
        
            topics.forEach(topic => {
                // Ensure that challenges exist for the topic
                expect(topic.challenges).toBeDefined()
                expect(topic.challenges.length).toBeGreaterThan(0)
        
                // Filter for available challenges within the topic
                const availableChallenges = topic.challenges.filter(challenge => challenge.available)

                // Expect only one challenge to be available at any time
                expect(availableChallenges.length).toBeLessThanOrEqual(1)
            })
        })   
    
    
    })
})
