const tests = [
    // Into 
    // - add
    { challenge_id: 1, order_index: 1, expected_output: '3', is_sample: true },
    { challenge_id: 1, order_index: 2, expected_output: '1000', is_sample: true },
    { challenge_id: 1, order_index: 3, expected_output: '-37', is_sample: true },
    { challenge_id: 1, order_index: 4, expected_output: '199', is_sample: true },
    { challenge_id: 1, order_index: 5, expected_output: '0', is_sample: true },
    { challenge_id: 1, order_index: 6, expected_output: '-2000', is_sample: true },

    // centuryFromYear
    { challenge_id: 2, order_index: 1, expected_output: '20', is_sample: true },
    { challenge_id: 2, order_index: 2, expected_output: '17', is_sample: true },
    { challenge_id: 2, order_index: 3, expected_output: '20', is_sample: true },
    { challenge_id: 2, order_index: 4, expected_output: '20', is_sample: true },
    { challenge_id: 2, order_index: 5, expected_output: '21', is_sample: true },
    { challenge_id: 2, order_index: 6, expected_output: '2', is_sample: true },
    { challenge_id: 2, order_index: 7, expected_output: '4', is_sample: true },
    { challenge_id: 2, order_index: 8, expected_output: '1', is_sample: true },
    { challenge_id: 2, order_index: 9, expected_output: '1', is_sample: true },

    // checkPalindrome
    { challenge_id: 3, order_index: 1, expected_output: 'true', is_sample: true },
    { challenge_id: 3, order_index: 2, expected_output: 'false', is_sample: true },
    { challenge_id: 3, order_index: 3, expected_output: 'true', is_sample: true },
    { challenge_id: 3, order_index: 4, expected_output: 'false', is_sample: true },
    { challenge_id: 3, order_index: 5, expected_output: 'true', is_sample: true },
    { challenge_id: 3, order_index: 6, expected_output: 'true', is_sample: true },
    { challenge_id: 3, order_index: 7, expected_output: 'false', is_sample: true },
    { challenge_id: 3, order_index: 8, expected_output: 'false', is_sample: true },
    { challenge_id: 3, order_index: 9, expected_output: 'true', is_sample: true },
    { challenge_id: 3, order_index: 1, expected_output: 'true', is_sample: true },

    // adjacentElementsProduct
    { challenge_id: 4, order_index: 1, expected_output: '21', is_sample: true },
    { challenge_id: 4, order_index: 2, expected_output: '2', is_sample: true },
    { challenge_id: 4, order_index: 3, expected_output: '6', is_sample: true },
    { challenge_id: 4, order_index: 4, expected_output: '6', is_sample: true },
    { challenge_id: 4, order_index: 5, expected_output: '50', is_sample: true },
    { challenge_id: 4, order_index: 6, expected_output: '30', is_sample: true },
    { challenge_id: 4, order_index: 7, expected_output: '6', is_sample: true },
    { challenge_id: 4, order_index: 8, expected_output: '-12', is_sample: true },
    { challenge_id: 4, order_index: 9, expected_output: '0', is_sample: true },



    // { challenge_id: 3, order_index: 1, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 2, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 3, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 4, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 5, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 6, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 7, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 8, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 9, expected_output: '', is_sample: true },
    // { challenge_id: 3, order_index: 1, expected_output: '', is_sample: true },

]


exports.seed = async function (knex) {
    await knex('tests').insert(tests)
}