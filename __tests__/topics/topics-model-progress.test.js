const db = require('../../data/db-config');
const { getTopicsBySection } = require('../../api/topics/topics-model');

jest.mock('../../data/db-config'); // Mock the db module

describe('1: getTopicsBySection', () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clear mocks after each test
    });

    it('should return an empty array if sectionName does not exist', async () => {
        // Mock an empty response from db when the section doesn't exist
        db.mockImplementation((tableName) => {
            switch (tableName) {
                case 'topics':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([]), // No topics found
                    };
                case 'user_progress':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        andWhere: jest.fn().mockResolvedValue([]), // No progress for invalid section
                    };
                case 'challenges':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([]), // No challenges for non-existing topics
                    };
            }
        });

        const sectionName = 'intro'; // Invalid section name
        const userId = 1;

        const topics = await getTopicsBySection(sectionName, userId);

        expect(topics).toEqual([]); // Should return an empty array
    });

    it('should mark the first challenge available if no challenges are completed', async () => {
        // Mock db response for a valid section "intro" with no completed challenges
        db.mockImplementation((tableName) => {
            switch (tableName) {
                case 'topics':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, topic_name: 'Topic 1', order_index: 1 }
                        ])
                    };
                case 'user_progress':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        andWhere: jest.fn().mockResolvedValue([]), // No challenges completed
                    };
                case 'challenges':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, challenge_name: 'Challenge 1', order_index: 1 },
                            { id: 2, challenge_name: 'Challenge 2', order_index: 2 }
                        ])
                    };
            }
        });

        const sectionName = 'intros'; // Valid section name
        const userId = 1;

        const topics = await getTopicsBySection(sectionName, userId);

        expect(topics.length).toBe(1); // One topic found
        expect(topics[0].challenges.length).toBe(2); // Two challenges in this topic
        expect(topics[0].challenges[0].available).toBe(true); // First challenge should be available
        expect(topics[0].challenges[1].available).toBe(false); // Second challenge should be locked
    });

    it('should mark the next challenge available after the last completed one', async () => {
        // Mock db response with one challenge completed
        db.mockImplementation((tableName) => {
            switch (tableName) {
                case 'topics':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, topic_name: 'Topic 1', order_index: 1 }
                        ])
                    };
                case 'user_progress':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        andWhere: jest.fn().mockResolvedValue([
                            { challenge_id: 1 } // First challenge is completed
                        ])
                    };
                case 'challenges':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, challenge_name: 'Challenge 1', order_index: 1 },
                            { id: 2, challenge_name: 'Challenge 2', order_index: 2 },
                            { id: 3, challenge_name: 'Challenge 3', order_index: 3 }
                        ])
                    };
            }
        });

        const sectionName = 'intro'; // Valid section name
        const userId = 1;

        const topics = await getTopicsBySection(sectionName, userId);

        expect(topics.length).toBe(1);  // One topic found
        expect(topics[0].challenges.length).toBe(3);  // Three challenges in the topic
        expect(topics[0].challenges[0].available).toBe(false);  // First challenge is completed, not available
        expect(topics[0].challenges[1].available).toBe(true);   // Second challenge should be available
        expect(topics[0].challenges[2].available).toBe(false);  // Third challenge should be locked
    });

    it('should mark all challenges as locked if all are completed', async () => {
        // Mock db response where all challenges are completed
        db.mockImplementation((tableName) => {
            switch (tableName) {
                case 'topics':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, topic_name: 'Topic 1', order_index: 1 }
                        ])
                    };
                case 'user_progress':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        andWhere: jest.fn().mockResolvedValue([
                            { challenge_id: 1 },  // First challenge completed
                            { challenge_id: 2 },  // Second challenge completed
                            { challenge_id: 3 }   // Third challenge completed
                        ])
                    };
                case 'challenges':
                    return {
                        select: jest.fn().mockReturnThis(),
                        where: jest.fn().mockReturnThis(),
                        orderBy: jest.fn().mockResolvedValue([
                            { id: 1, challenge_name: 'Challenge 1', order_index: 1 },
                            { id: 2, challenge_name: 'Challenge 2', order_index: 2 },
                            { id: 3, challenge_name: 'Challenge 3', order_index: 3 }
                        ])
                    };
            }
        });

        const sectionName = 'intro'; // Valid section name
        const userId = 1;

        const topics = await getTopicsBySection(sectionName, userId);

        expect(topics.length).toBe(1);  // One topic found
        expect(topics[0].challenges.length).toBe(3);  // Three challenges in the topic

        topics[0].challenges.forEach((challenge) => {
            expect(challenge.available).toBe(false);  // All challenges should be locked since all are completed
        });
    });
});
