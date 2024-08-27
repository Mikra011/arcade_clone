const test_inputs = [
    // Into 
    // - add
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

    // centuryFromYear
    { test_id: 7, input_name: 'year', input_value: '1905', },
    { test_id: 8, input_name: 'year', input_value: '1700', },
    { test_id: 9, input_name: 'year', input_value: '1988', },
    { test_id: 10, input_name: 'year', input_value: '2000', },
    { test_id: 11, input_name: 'year', input_value: '2001', },
    { test_id: 12, input_name: 'year', input_value: '200', },
    { test_id: 13, input_name: 'year', input_value: '374', },
    { test_id: 14, input_name: 'year', input_value: '45', },
    { test_id: 15, input_name: 'year', input_value: '8', },

    // checkPalindrome
    { test_id: 16, input_name: 'inputString', input_value: 'aabaa', },
    { test_id: 17, input_name: 'inputString', input_value: 'abac', },
    { test_id: 18, input_name: 'inputString', input_value: 'a', },
    { test_id: 19, input_name: 'inputString', input_value: 'az', },
    { test_id: 20, input_name: 'inputString', input_value: 'abacaba', },
    { test_id: 21, input_name: 'inputString', input_value: 'z', },
    { test_id: 22, input_name: 'inputString', input_value: 'aaabaaaa', },
    { test_id: 23, input_name: 'inputString', input_value: 'zzzazzazz', },
    { test_id: 24, input_name: 'inputString', input_value: 'hlbeeykoqqqqokyeeblh', },
    { test_id: 25, input_name: 'inputString', input_value: 'hlbeeykoqqqokyeeblh', },

    // adjacentElementsProduct
    { test_id: 26, input_name: 'inputArray', input_value: '[3, 6, -2, -5, 7, 3]', },
    { test_id: 27, input_name: 'inputArray', input_value: '[-1, -2]', },
    { test_id: 28, input_name: 'inputArray', input_value: '[5, 1, 2, 3, 1, 4]', },
    { test_id: 29, input_name: 'inputArray', input_value: '[1, 2, 3, 0]', },
    { test_id: 30, input_name: 'inputArray', input_value: '[9, 5, 10, 2, 24, -1, -48]', },
    { test_id: 31, input_name: 'inputArray', input_value: '[5, 6, -4, 2, 3, 2, -23]', },
    { test_id: 32, input_name: 'inputArray', input_value: '[4, 1, 2, 3, 1, 5]', },
    { test_id: 33, input_name: 'inputArray', input_value: '[-23, 4, -3, 8, -12]', },
    { test_id: 34, input_name: 'inputArray', input_value: '[1, 0, 1, 0, 1000]', },



    // { test_id: 16, input_name: '', input_value: '', },
    // { test_id: 17, input_name: '', input_value: '', },
    // { test_id: 18, input_name: '', input_value: '', },
    // { test_id: 19, input_name: '', input_value: '', },
    // { test_id: 20, input_name: '', input_value: '', },
    // { test_id: 21, input_name: '', input_value: '', },
    // { test_id: 22, input_name: '', input_value: '', },
    // { test_id: 23, input_name: '', input_value: '', },
    // { test_id: 24, input_name: '', input_value: '', },
    // { test_id: 25, input_name: '', input_value: '', },
    
]


exports.seed = async function (knex) {
    await knex('test_inputs').insert(test_inputs)
}