const tests = [
    { challenge_id: 1, order_index: 1, expected_output: '3', is_sample: true },
    { challenge_id: 1, order_index: 2, expected_output: '1000', is_sample: true },
    { challenge_id: 1, order_index: 3, expected_output: '-37', is_sample: true },
    { challenge_id: 1, order_index: 4, expected_output: '199', is_sample: true },
    { challenge_id: 1, order_index: 5, expected_output: '0', is_sample: true },
    { challenge_id: 1, order_index: 6, expected_output: '-2000', is_sample: true },

    // { challenge_id: , order_index: , expected_output: , is_sample: true },
    // { challenge_id: , order_index: , expected_output: , is_sample: true },
]


exports.seed = async function (knex) {
    await knex('tests').insert(tests)
}