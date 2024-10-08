const db = require('../../data/db-config');

const getChallengeById = async (id) => {
    const challenge = await db('challenges as c')
        .select('c.challenge_name', 'c.description')
        .where('c.id', id)
        .first()

    if (!challenge) {
        return null
    }

    const tests = await db('tests as t')
        .select('t.id as test_id', 't.expected_output', 'is_complex', 't.is_sample')
        .where('t.challenge_id', id)
        .orderBy([
            { column: 't.is_sample', order: 'desc' },  // true (1) values first
            { column: 't.order_index', order: 'asc' }  // then order by order_index
        ])

    const testsWithInputs = await Promise.all(tests.map(async (test) => {
        const inputs = await db('test_inputs as ti')
            .select('ti.input_name', 'ti.input_value', 'ti.input_type')
            .where('ti.test_id', test.test_id)

        return {
            ...test,
            inputs
        }
    }))

    return {
        challenge_name: challenge.challenge_name,
        description: challenge.description,
        tests: testsWithInputs
    }
}

module.exports = {
    getChallengeById
}