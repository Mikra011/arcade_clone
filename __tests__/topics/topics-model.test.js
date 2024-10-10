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
          
        // it('should mark the next available challenge correctly', async () => {
        //     const sectionName = 'validSection' // Use a valid section name from your seed
        //     const userId = 3 // Assume user 3 has completed only one challenge

        //     const topics = await topicModel.getTopicsBySection(sectionName, userId)

        //     let foundAvailableChallenge = false

        //     topics.forEach(topic => {
        //         topic.challenges.forEach(challenge => {
        //             if (!challenge.completed) {
        //                 if (!foundAvailableChallenge) {
        //                     expect(challenge.available).toBe(true) // The first incomplete challenge should be available
        //                     foundAvailableChallenge = true
        //                 } else {
        //                     expect(challenge.available).toBe(false) // All subsequent challenges should be locked
        //                 }
        //             }
        //         })
        //     })
        // })

        // it('should mark topics as completed when all challenges are done', async () => {
        //     const sectionName = 'validSection' // Use a valid section name from your seed
        //     const userId = 4 // Assume user 4 has completed all challenges in one topic

        //     const topics = await topicModel.getTopicsBySection(sectionName, userId)

        //     topics.forEach(topic => {
        //         if (topic.challenges.every(challenge => challenge.completed)) {
        //             expect(topic.completed).toBe(true) // Topic should be marked as completed
        //         } else {
        //             expect(topic.completed).toBe(false) // Otherwise, it should not be marked as completed
        //         }
        //     })
        // })

        // it('should handle users with no progress in a section', async () => {
        //     const sectionName = 'validSection' // Use a valid section name
        //     const userId = 5 // Assume user 5 has no progress

        //     const topics = await topicModel.getTopicsBySection(sectionName, userId)

        //     topics.forEach(topic => {
        //         let firstChallengeAvailable = false

        //         topic.challenges.forEach((challenge, index) => {
        //             if (index === 0) {
        //                 // First challenge should be available if no progress
        //                 expect(challenge.available).toBe(true)
        //                 firstChallengeAvailable = true
        //             } else {
        //                 // All other challenges should be locked
        //                 expect(challenge.available).toBe(false)
        //             }

        //             // No challenges should be completed
        //             expect(challenge.completed).toBe(0)
        //         })

        //         // Only the first challenge should be available, rest should be locked
        //         expect(firstChallengeAvailable).toBe(true)
        //     })
        // })
    
    })
})
