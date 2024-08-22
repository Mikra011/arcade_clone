const test_inputs = [
    { test_id: 1, input_name: 'param1', input_value: '1', },
    { test_id: 1, input_name: 'param2', input_value: '2', },
    { test_id: 2, input_name: 'param1', input_value: '0', },
    { test_id: 2, input_name: 'param2', input_value: '1000', },
    { test_id: 3, input_name: 'param1', input_value: '2', },
    { test_id: 3, input_name: 'param2', input_value: '-39', },
    { test_id: 4, input_name: 'param1', input_value: '99', },
    { test_id: 4, input_name: 'param2', input_value: '100', },
    { test_id: 5, input_name: 'param1', input_value: '-100', },
    { test_id: 5, input_name: 'param2', input_value: '100', },
    { test_id: 6, input_name: 'param1', input_value: '-1000', },
    { test_id: 6, input_name: 'param2', input_value: '-1000', },

    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
    // { test_id: 1, input_name: param1, input_value: , },
    // { test_id: 1, input_name: param2, input_value: , },
]


exports.seed = async function (knex) {
    await knex('test_inputs').insert(test_inputs)
}