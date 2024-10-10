const { getTopicsBySection } = require('../../api/topics/topics-controller');
const topicModel = require('../../api/topics/topics-model');

describe('Topics Controller', () => {
    const mockResponse = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };

    const mockRequest = (params = {}, decodedJwt = { id: 1 }) => ({
        params,
        decodedJwt,
    });

    it('should return topics for the given section', async () => {
        const req = mockRequest({ sectionName: 'sectionName' });
        const res = mockResponse();
        const mockTopics = { id: 1, topic_name: 'Test Topic' }

        topicModel.getTopicsBySection = jest.fn().mockResolvedValue(mockTopics);

        await getTopicsBySection(req, res);

        expect(topicModel.getTopicsBySection).toHaveBeenCalledWith('sectionName', 1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(mockTopics);
    });

    it('should return a 404 if no topics are found', async () => {
        const req = mockRequest({ sectionName: 'sectionName' });
        const res = mockResponse();
        topicModel.getTopicsBySection = jest.fn().mockResolvedValue([]);

        await getTopicsBySection(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.json).toHaveBeenCalledWith({ message: 'No topics found for this section' });
    });

    it('should return a 500 if an error occurs', async () => {
        const req = mockRequest({ sectionName: 'sectionName' });
        const res = mockResponse();
        topicModel.getTopicsBySection = jest.fn().mockRejectedValue(new Error('Some error'));

        await getTopicsBySection(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ error: 'Failed to retrieve topics' });
    });
});
