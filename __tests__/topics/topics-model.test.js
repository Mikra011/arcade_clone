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
        
        it('should have only one available challenge across all topics in a section', async () => {
            const sectionName = 'intro'
            const userId = 1
    
            const topics = await topicModel.getTopicsBySection(sectionName, userId)
    
            // Flatten all challenges from all topics into one array
            const allChallenges = topics.reduce((acc, topic) => {
                return acc.concat(topic.challenges)
            }, [])
    
            // Filter for available challenges across all topics
            const availableChallenges = allChallenges.filter(challenge => challenge.available)
    
            // There should be only one available challenge across the section
            expect(availableChallenges.length).toBe(1)
        })
    
        it('should have the first uncompleted challenge in the section available', async () => {
            const sectionName = 'intro'
            const userId = 1 
    
            const topics = await topicModel.getTopicsBySection(sectionName, userId)
    
            // Find the first uncompleted challenge
            const allChallenges = topics.reduce((acc, topic) => {
                return acc.concat(topic.challenges)
            }, [])
    
            const firstUncompletedChallenge = allChallenges.find(challenge => !challenge.completed)
    
            // The first uncompleted challenge should be marked as available
            expect(firstUncompletedChallenge.available).toBe(true)
    
            // Ensure no other challenge before it is available
            const indexOfFirstUncompleted = allChallenges.indexOf(firstUncompletedChallenge)
            for (let i = 0; i < indexOfFirstUncompleted; i++) {
                expect(allChallenges[i].available).toBe(false)
            }
        })
    
        it('should have the next challenge available after the last completed one', async () => {
            const sectionName = 'intro'
            const userId = 1
    
            const topics = await topicModel.getTopicsBySection(sectionName, userId)
            expect(topics.length).toBeGreaterThan(0)
    
            // Flatten all challenges from all topics into one array
            const allChallenges = topics.reduce((acc, topic) => {
                return acc.concat(topic.challenges)
            }, [])
    
            // Find the last completed challenge
            const lastCompletedChallengeIndex = allChallenges.map(challenge => challenge.completed)
                .lastIndexOf(1)
    
            // The next challenge after the last completed should be available
            if (lastCompletedChallengeIndex >= 0 && lastCompletedChallengeIndex < allChallenges.length - 1) {
                const nextChallenge = allChallenges[lastCompletedChallengeIndex + 1]
                expect(nextChallenge.available).toBe(true)
            }
    
            // Ensure that challenges before the last completed one are not available
            for (let i = 0; i < lastCompletedChallengeIndex; i++) {
                expect(allChallenges[i].available).toBe(false)
            }
        })
    
    })
})
