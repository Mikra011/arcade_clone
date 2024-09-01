const tests = [
    // Into 
    // - add
    { challenge_id: 1, order_index: 1, expected_output: '3', is_complex: false, is_sample: true },
    { challenge_id: 1, order_index: 2, expected_output: '1000', is_complex: false, is_sample: true },
    { challenge_id: 1, order_index: 3, expected_output: '-37', is_complex: false, is_sample: true },
    { challenge_id: 1, order_index: 4, expected_output: '199', is_complex: false, is_sample: true },
    { challenge_id: 1, order_index: 5, expected_output: '0', is_complex: false, is_sample: true },
    { challenge_id: 1, order_index: 6, expected_output: '-2000', is_complex: false, is_sample: true },

    // centuryFromYear
    { challenge_id: 2, order_index: 1, expected_output: '20', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 2, expected_output: '17', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 3, expected_output: '20', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 4, expected_output: '20', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 5, expected_output: '21', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 6, expected_output: '2', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 7, expected_output: '4', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 8, expected_output: '1', is_complex: false, is_sample: true },
    { challenge_id: 2, order_index: 9, expected_output: '1', is_complex: false, is_sample: true },

    // checkPalindrome
    { challenge_id: 3, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 2, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 3, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 4, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 5, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 6, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 7, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 8, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 9, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 3, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },

    // adjacentElementsProduct
    { challenge_id: 4, order_index: 1, expected_output: '21', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 2, expected_output: '2', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 3, expected_output: '6', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 4, expected_output: '6', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 5, expected_output: '50', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 6, expected_output: '30', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 7, expected_output: '6', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 8, expected_output: '-12', is_complex: false, is_sample: true },
    { challenge_id: 4, order_index: 9, expected_output: '0', is_complex: false, is_sample: true },


    // shapeArea
    { challenge_id: 5, order_index: 1, expected_output: '5', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 2, expected_output: '13', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 3, expected_output: '1', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 4, expected_output: '41', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 5, expected_output: '97986001', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 6, expected_output: '127984001', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 7, expected_output: '199940005', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 8, expected_output: '199900013', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 9, expected_output: '161946005', is_complex: false, is_sample: true },
    { challenge_id: 5, order_index: 10, expected_output: '19801', is_complex: false, is_sample: true },

    // Make Array Consecutive 2
    { challenge_id: 6, order_index: 1, expected_output: '3', is_complex: false, is_sample: true },
    { challenge_id: 6, order_index: 2, expected_output: '2', is_complex: false, is_sample: true },
    { challenge_id: 6, order_index: 3, expected_output: '0', is_complex: false, is_sample: true },
    { challenge_id: 6, order_index: 4, expected_output: '2', is_complex: false, is_sample: true },
    { challenge_id: 6, order_index: 5, expected_output: '0', is_complex: false, is_sample: true },

    // almostIncreasingSequence
    { challenge_id: 7, order_index: 1, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 2, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 3, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 4, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 5, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 6, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 7, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 8, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 9, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 10, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 11, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 12, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 13, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 14, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 15, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 16, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 17, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 18, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 7, order_index: 19, expected_output: 'true', is_complex: false, is_sample: true },

    // matrixElementsSum
    { challenge_id: 8, order_index: 1, expected_output: '9', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 2, expected_output: '9', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 3, expected_output: '18', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 4, expected_output: '0', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 5, expected_output: '5', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 6, expected_output: '6', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 7, expected_output: '15', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 8, expected_output: '17', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 9, expected_output: '15', is_complex: false, is_sample: true },
    { challenge_id: 8, order_index: 10, expected_output: '1', is_complex: false, is_sample: true },

    // All Longest Strings
    { challenge_id: 9, order_index: 1, expected_output: '["aba", "vcd", "aba"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 2, expected_output: '["aa"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 3, expected_output: '["eeee", "abcd"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 4, expected_output: '["zzzzzz", "abcdef", "aaaaaa"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 5, expected_output: '["varennyky"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 6, expected_output: '["abacaba"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 7, expected_output: '["yooooooung", "watermelon"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 8, expected_output: '["aokbcwthc"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 9, expected_output: '["lbgwyqkry"]', is_complex: true, is_sample: true },
    { challenge_id: 9, order_index: 10, expected_output: '["i"]', is_complex: true, is_sample: true },

    // commonCharacterCount
    { challenge_id: 10, order_index: 1, expected_output: '3', is_complex: false, is_sample: true },
    { challenge_id: 10, order_index: 2, expected_output: '4', is_complex: false, is_sample: true },
    { challenge_id: 10, order_index: 3, expected_output: '3', is_complex: false, is_sample: true },
    { challenge_id: 10, order_index: 4, expected_output: '0', is_complex: false, is_sample: true },
    { challenge_id: 10, order_index: 5, expected_output: '1', is_complex: false, is_sample: true },

    // isLucky
    { challenge_id: 11, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 2, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 3, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 4, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 5, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 6, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 7, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 8, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 9, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 11, order_index: 10, expected_output: 'true', is_complex: false, is_sample: true },

    // Sort by Height
    { challenge_id: 12, order_index: 1, expected_output: '[-1, 150, 160, 170, -1, -1, 180, 190]', is_complex: true, is_sample: true },
    { challenge_id: 12, order_index: 2, expected_output: '[-1, -1, -1, -1, -1]', is_complex: true, is_sample: true },
    { challenge_id: 12, order_index: 3, expected_output: '[-1]', is_complex: true, is_sample: true },
    { challenge_id: 12, order_index: 4, expected_output: '[2, 2, 4, 9, 11, 16]', is_complex: true, is_sample: true },
    { challenge_id: 12, order_index: 5, expected_output: '[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]', is_complex: true, is_sample: true },
    { challenge_id: 12, order_index: 6, expected_output: '[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]', is_complex: true, is_sample: true },

    // reverseInParentheses
    { challenge_id: 13, order_index: 1, expected_output: 'rab', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 2, expected_output: 'foorabbaz', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 3, expected_output: 'foorabbazmilb', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 4, expected_output: 'foobazrabblim', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 5, expected_output: '', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 6, expected_output: '', is_complex: false, is_sample: true },
    { challenge_id: 13, order_index: 7, expected_output: 'cbadgfe', is_complex: false, is_sample: true },

    // alternatingSums
    { challenge_id: 14, order_index: 1, expected_output: '[180, 105]', is_complex: true, is_sample: true },
    { challenge_id: 14, order_index: 2, expected_output: '[100, 50]', is_complex: true, is_sample: true },
    { challenge_id: 14, order_index: 3, expected_output: '[80, 0]', is_complex: true, is_sample: true },
    { challenge_id: 14, order_index: 4, expected_output: '[150, 150]', is_complex: true, is_sample: true },
    { challenge_id: 14, order_index: 5, expected_output: '[150, 151]', is_complex: true, is_sample: true },

    // Add Border
    { challenge_id: 15, order_index: 1, expected_output: '["*****", "*abc*", "*ded*", "*****"]', is_complex: true, is_sample: true },
    { challenge_id: 15, order_index: 2, expected_output: '["***", "*a*", "***"]', is_complex: true, is_sample: true },
    { challenge_id: 15, order_index: 3, expected_output: '["****", "*aa*", "****", "*zz*", "****"]', is_complex: true, is_sample: true },
    { challenge_id: 15, order_index: 4, expected_output: '["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"]', is_complex: true, is_sample: true },
    { challenge_id: 15, order_index: 5, expected_output: '["*******", "*wzy***", "*******"]', is_complex: true, is_sample: true },

    // Are Similar?
    { challenge_id: 16, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 2, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 3, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 4, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 5, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 6, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 7, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 8, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 9, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 16, order_index: 10, expected_output: 'false', is_complex: false, is_sample: true },

    // arrayChange
    { challenge_id: 17, order_index: 1, expected_output: '3', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 2, expected_output: '5', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 3, expected_output: '12', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 4, expected_output: '13', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 5, expected_output: '25559', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 6, expected_output: '89510', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 7, expected_output: '2020705', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 8, expected_output: '737073', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 9, expected_output: '2199614', is_complex: false, is_sample: true },
    { challenge_id: 17, order_index: 10, expected_output: '7097995', is_complex: false, is_sample: true },

    // palindromeRearranging
    { challenge_id: 18, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 2, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 3, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 4, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 5, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 6, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 7, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 8, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 9, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 18, order_index: 10, expected_output: 'false', is_complex: false, is_sample: true },

    // areEquallyStrong
    { challenge_id: 19, order_index: 1, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 2, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 3, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 4, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 5, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 6, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 7, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 8, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 9, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 10, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 11, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 12, expected_output: 'false', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 13, expected_output: 'true', is_complex: false, is_sample: true },
    { challenge_id: 19, order_index: 14, expected_output: 'true', is_complex: false, is_sample: true },

    /// I GOT BORED PROCESS IS AUTOMATED FROM HERE ///

    // arrayMaximalAdjacentDifference
    {
        "challenge_id": 20,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 3,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 20,
        "order_index": 7,
        "expected_output": "30",
        "is_complex": false,
        "is_sample": true
    },

    // isIPv4Address
    {
        "challenge_id": 21,
        "order_index": 1,
        "expected_output": 'true',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 2,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 3,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 4,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 5,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 6,
        "expected_output": 'true',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 7,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 8,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 9,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 10,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 11,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 12,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 13,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 14,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 15,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 16,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 17,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 18,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 19,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 20,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 21,
        "order_index": 21,
        "expected_output": 'false',
        "is_complex": false,
        "is_sample": true
    },

    // avoidObstacles
    {
        "challenge_id": 22,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 22,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 22,
        "order_index": 3,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 22,
        "order_index": 4,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 22,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 22,
        "order_index": 6,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    // Box Blur
    {
        "challenge_id": 23,
        "order_index": 1,
        "expected_output": "[[1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 23,
        "order_index": 2,
        "expected_output": "[[28]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 23,
        "order_index": 3,
        "expected_output": "[[40,30]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 23,
        "order_index": 4,
        "expected_output": "[[5,4],  [4,4]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 23,
        "order_index": 5,
        "expected_output": "[[39,30,26,25,31],  [34,37,35,32,32],  [38,41,44,46,42],  [22,24,31,39,45],  [37,34,36,47,59]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 23,
        "order_index": 6,
        "expected_output": "[[82,73,48,25,31],  [77,80,57,32,32],  [81,106,88,68,42],  [44,96,103,89,45],  [59,113,137,126,80]]",
        "is_complex": true,
        "is_sample": true
    },

    // Minesweeper
    {
        "challenge_id": 24,
        "order_index": 1,
        "expected_output": "[[1,2,1],  [2,1,1],  [1,1,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 24,
        "order_index": 2,
        "expected_output": "[[0,0,0],  [0,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 24,
        "order_index": 3,
        "expected_output": "[[0,2,2,1],  [3,4,3,3],  [1,2,3,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 24,
        "order_index": 4,
        "expected_output": "[[3,5,3],  [5,8,5],  [3,5,3]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 24,
        "order_index": 5,
        "expected_output": "[[3,3,3,2],  [2,4,5,2],  [2,3,2,2]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 24,
        "order_index": 6,
        "expected_output": "[[1,2],  [2,3],  [2,1],  [1,1],  [0,0]]",
        "is_complex": true,
        "is_sample": true
    },

    // Array Replace
    {
        "challenge_id": 25,
        "order_index": 1,
        "expected_output": "[3, 2, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 2,
        "expected_output": "[1, 2, 0, 4, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 3,
        "expected_output": "[10, 10, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 4,
        "expected_output": "[1, 1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 5,
        "expected_output": "[1, 2, 1, 2, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 6,
        "expected_output": "[9, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 7,
        "expected_output": "[10, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 25,
        "order_index": 8,
        "expected_output": "[2, 1]",
        "is_complex": true,
        "is_sample": true
    },

    // evenDigitsOnly
    {
        "challenge_id": 26,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 26,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // variableName
    {
        "challenge_id": 27,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 27,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // alphabeticShift
    {
        "challenge_id": 28,
        "order_index": 1,
        "expected_output": "dsbaz",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 28,
        "order_index": 2,
        "expected_output": "a",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 28,
        "order_index": 3,
        "expected_output": "bbbbcccdde",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 28,
        "order_index": 4,
        "expected_output": "gvaaz",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 28,
        "order_index": 5,
        "expected_output": "dpeftjhobm",
        "is_complex": false,
        "is_sample": true
    },

    // chessBoardCellColor
    {
        "challenge_id": 29,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 29,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Circle of Numbers
    {
        "challenge_id": 30,
        "order_index": 1,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 30,
        "order_index": 7,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },

    // depositProfit
    {
        "challenge_id": 31,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 31,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 31,
        "order_index": 3,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 31,
        "order_index": 4,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 31,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // absoluteValuesSumMinimization
    {
        "challenge_id": 32,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 4,
        "expected_output": "23",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 6,
        "expected_output": "-4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 7,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 32,
        "order_index": 8,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // stringsRearrangement
    {
        "challenge_id": 33,
        "order_index": 1,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 33,
        "order_index": 11,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },


    // extractEachKth
    {
        "challenge_id": 34,
        "order_index": 1,
        "expected_output": "[1, 2, 4, 5, 7, 8, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 34,
        "order_index": 2,
        "expected_output": "[]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 34,
        "order_index": 3,
        "expected_output": "[1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 34,
        "order_index": 4,
        "expected_output": "[1, 2, 1, 2, 1, 2, 1, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 34,
        "order_index": 5,
        "expected_output": "[2, 6, 10]",
        "is_complex": true,
        "is_sample": true
    },

    // firstDigit
    {
        "challenge_id": 35,
        "order_index": 1,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 35,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 35,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 35,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 35,
        "order_index": 5,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 35,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // differentSymbolsNaive
    {
        "challenge_id": 36,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 36,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 36,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 36,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 36,
        "order_index": 5,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },

    // arrayMaxConsecutiveSum
    {
        "challenge_id": 37,
        "order_index": 1,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 37,
        "order_index": 2,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 37,
        "order_index": 3,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 37,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 37,
        "order_index": 5,
        "expected_output": "13",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 37,
        "order_index": 6,
        "expected_output": "14232",
        "is_complex": false,
        "is_sample": true
    },

    // growingPlant
    {
        "challenge_id": 38,
        "order_index": 1,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 38,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 38,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 38,
        "order_index": 4,
        "expected_output": "110",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 38,
        "order_index": 5,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },

    // Knapsack Light
    {
        "challenge_id": 39,
        "order_index": 1,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 2,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 3,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 7,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 39,
        "order_index": 8,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },

    // longestDigitsPrefix
    {
        "challenge_id": 40,
        "order_index": 1,
        "expected_output": "123",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 40,
        "order_index": 2,
        "expected_output": "0123456789",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 40,
        "order_index": 3,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 40,
        "order_index": 4,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 40,
        "order_index": 5,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 40,
        "order_index": 6,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },

    // digitDegree
    {
        "challenge_id": 41,
        "order_index": 1,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 7,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 8,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 9,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 41,
        "order_index": 10,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Bishop and Pawn
    {
        "challenge_id": 42,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 42,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // isBeautifulString
    {
        "challenge_id": 43,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 43,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Find Email Domain
    {
        "challenge_id": 44,
        "order_index": 1,
        "expected_output": "example.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 2,
        "expected_output": "codesignal.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 3,
        "expected_output": "space.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 4,
        "expected_output": "yandex.ru",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 5,
        "expected_output": "xample.org",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 6,
        "expected_output": "yahoo.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 7,
        "expected_output": "usual.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 8,
        "expected_output": "mailserver2.ru",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 9,
        "expected_output": "strange-example.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 44,
        "order_index": 10,
        "expected_output": "gmail.com",
        "is_complex": false,
        "is_sample": true
    },

    // buildPalindrome
    {
        "challenge_id": 45,
        "order_index": 1,
        "expected_output": "abcdcba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 2,
        "expected_output": "abababa",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 3,
        "expected_output": "abba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 4,
        "expected_output": "abaaba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 5,
        "expected_output": "aaaabaaaa",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 6,
        "expected_output": "abcba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 7,
        "expected_output": "kebabek",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 8,
        "expected_output": "abccba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 9,
        "expected_output": "abcabcbacba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 10,
        "expected_output": "cbdbedffcgcffdebdbc",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 45,
        "order_index": 11,
        "expected_output": "euotmnmtoue",
        "is_complex": false,
        "is_sample": true
    },

    // Elections Winners
    {
        "challenge_id": 46,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 46,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 46,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 46,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 46,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 46,
        "order_index": 6,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },

    // Is MAC48 Address?
    {
        "challenge_id": 47,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 47,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // isDigit
    {
        "challenge_id": 48,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 48,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // lineEncoding
    {
        "challenge_id": 49,
        "order_index": 1,
        "expected_output": "2a3bc",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 2,
        "expected_output": "a2bca2b",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 3,
        "expected_output": "abcd",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 4,
        "expected_output": "4z",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 5,
        "expected_output": "7wa7w",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 6,
        "expected_output": "15c",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 7,
        "expected_output": "qwertyuioplkjhg",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 8,
        "expected_output": "2s2i2gk3o",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 9,
        "expected_output": "adf3a",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 49,
        "order_index": 10,
        "expected_output": "2bj2adlkjdl",
        "is_complex": false,
        "is_sample": true
    },

    // chessKnight
    {
        "challenge_id": 50,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 2,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 3,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 4,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 7,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 8,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 9,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 50,
        "order_index": 10,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // deleteDigit
    {
        "challenge_id": 51,
        "order_index": 1,
        "expected_output": "52",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 2,
        "expected_output": "101",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 4,
        "expected_output": "22229",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 5,
        "expected_output": "19",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 6,
        "expected_output": "22250",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 7,
        "expected_output": "4445",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 8,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 9,
        "expected_output": "28616",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 51,
        "order_index": 10,
        "expected_output": "86452",
        "is_complex": false,
        "is_sample": true
    },

    // longestWord
    {
        "challenge_id": 52,
        "order_index": 1,
        "expected_output": "steady",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 52,
        "order_index": 2,
        "expected_output": "steady",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 52,
        "order_index": 3,
        "expected_output": "ABCd",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 52,
        "order_index": 4,
        "expected_output": "not",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 52,
        "order_index": 5,
        "expected_output": "CodeFighter",
        "is_complex": false,
        "is_sample": true
    },

    // Valid Time
    {
        "challenge_id": 53,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 53,
        "order_index": 11,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // sumUpNumbers
    {
        "challenge_id": 54,
        "order_index": 1,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 2,
        "expected_output": "123450",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 5,
        "expected_output": "6587",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 6,
        "expected_output": "823",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 7,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 54,
        "order_index": 8,
        "expected_output": "98",
        "is_complex": false,
        "is_sample": true
    },

    // Different Squares
    {
        "challenge_id": 55,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 6,
        "expected_output": "54",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 55,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // digitsProduct
    {
        "challenge_id": 56,
        "order_index": 1,
        "expected_output": "26",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 2,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 3,
        "expected_output": "2559",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 4,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 5,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 6,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 7,
        "expected_output": "399",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 8,
        "expected_output": "889",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 56,
        "order_index": 9,
        "expected_output": "589",
        "is_complex": false,
        "is_sample": true
    },

    // File Naming
    {
        "challenge_id": 57,
        "order_index": 1,
        "expected_output": '["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 57,
        "order_index": 2,
        "expected_output": '["a(1)", "a(6)", "a", "a(2)", "a(3)", "a(4)", "a(5)", "a(7)", "a(8)", "a(9)", "a(10)", "a(11)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 57,
        "order_index": 3,
        "expected_output": '["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 57,
        "order_index": 4,
        "expected_output": '["name", "name(1)", "name(1)(1)", "name(3)", "name(2)", "name(2)(1)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 57,
        "order_index": 5,
        "expected_output": '[]',
        "is_complex": true,
        "is_sample": true
    },

    // messageFromBinaryCode

    {
        "challenge_id": 58,
        "order_index": 1,
        "expected_output": "Hello!",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 2,
        "expected_output": "May the Force be with you",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 3,
        "expected_output": "You had me at `hello.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 4,
        "expected_output": "Elementary, my dear Watson!",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 5,
        "expected_output": "Love For All, Hatred For None.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 6,
        "expected_output": "Change the world by being yourself.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 7,
        "expected_output": "Every moment is a fresh beginning.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 8,
        "expected_output": "Never regret anything that made you smile.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 9,
        "expected_output": "Die with memories, not dreams.",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 58,
        "order_index": 10,
        "expected_output": "Aspire to inspire before we expire.",
        "is_complex": false,
        "is_sample": true
    },

    // spiralNumbers
    {
        "challenge_id": 59,
        "order_index": 1,
        "expected_output": "[[1,2,3],  [8,9,4],  [7,6,5]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 59,
        "order_index": 2,
        "expected_output": "[[1,2,3,4,5],  [16,17,18,19,6],  [15,24,25,20,7],  [14,23,22,21,8],  [13,12,11,10,9]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 59,
        "order_index": 3,
        "expected_output": "[[1,2,3,4,5,6],  [20,21,22,23,24,7],  [19,32,33,34,25,8],  [18,31,36,35,26,9],  [17,30,29,28,27,10],  [16,15,14,13,12,11]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 59,
        "order_index": 4,
        "expected_output": "[[1,2,3,4,5,6,7],  [24,25,26,27,28,29,8],  [23,40,41,42,43,30,9],  [22,39,48,49,44,31,10],  [21,38,47,46,45,32,11],  [20,37,36,35,34,33,12],  [19,18,17,16,15,14,13]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 59,
        "order_index": 5,
        "expected_output": "[[1,2,3,4,5,6,7,8,9,10],  [36,37,38,39,40,41,42,43,44,11],  [35,64,65,66,67,68,69,70,45,12],  [34,63,84,85,86,87,88,71,46,13],  [33,62,83,96,97,98,89,72,47,14],  [32,61,82,95,100,99,90,73,48,15],  [31,60,81,94,93,92,91,74,49,16],  [30,59,80,79,78,77,76,75,50,17],  [29,58,57,56,55,54,53,52,51,18],  [28,27,26,25,24,23,22,21,20,19]]",
        "is_complex": true,
        "is_sample": true
    },

    // Sudoku
    {
        "challenge_id": 60,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 60,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////

    // Add Two Digits
    {
        "challenge_id": 61,
        "order_index": 1,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 2,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 4,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 5,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 6,
        "expected_output": "18",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 7,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 8,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 9,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 61,
        "order_index": 10,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },

    // Largest Number
    {
        "challenge_id": 62,
        "order_index": 1,
        "expected_output": "99",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 62,
        "order_index": 2,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 62,
        "order_index": 3,
        "expected_output": "9999999",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 62,
        "order_index": 4,
        "expected_output": "9999",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 62,
        "order_index": 5,
        "expected_output": "999",
        "is_complex": false,
        "is_sample": true
    },

    // Candies
    {
        "challenge_id": 63,
        "order_index": 1,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 5,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 6,
        "expected_output": "99",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 8,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 9,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 63,
        "order_index": 10,
        "expected_output": "21",
        "is_complex": false,
        "is_sample": true
    },

    // Seats in Theater
    {
        "challenge_id": 64,
        "order_index": 1,
        "expected_output": "96",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 64,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 64,
        "order_index": 3,
        "expected_output": "18",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 64,
        "order_index": 4,
        "expected_output": "99",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 64,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Max Multiple
    {
        "challenge_id": 65,
        "order_index": 1,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 2,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 3,
        "expected_output": "50",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 4,
        "expected_output": "98",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 5,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 6,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 7,
        "expected_output": "88",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 8,
        "expected_output": "100",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 9,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 10,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 11,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 12,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 65,
        "order_index": 13,
        "expected_output": "54",
        "is_complex": false,
        "is_sample": true
    },

    // Circle of Numbers
    {
        "challenge_id": 66,
        "order_index": 1,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 66,
        "order_index": 7,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },

    // Late Ride
    {
        "challenge_id": 67,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 67,
        "order_index": 2,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 67,
        "order_index": 3,
        "expected_output": "19",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 67,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 67,
        "order_index": 5,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 67,
        "order_index": 6,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },

    // Phone Call
    {
        "challenge_id": 68,
        "order_index": 1,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 68,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 68,
        "order_index": 3,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 68,
        "order_index": 4,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 68,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 68,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Reach Next Level
    {
        "challenge_id": 69,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 69,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Knapsack Light
    {
        "challenge_id": 70,
        "order_index": 1,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 2,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 3,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 7,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 70,
        "order_index": 8,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },

    // Extra Number
    {
        "challenge_id": 71,
        "order_index": 1,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 2,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 5,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 7,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 8,
        "expected_output": "3000000",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 9,
        "expected_output": "82231042",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 71,
        "order_index": 10,
        "expected_output": "469992838",
        "is_complex": false,
        "is_sample": true
    },

    // Is Infinite Process?
    {
        "challenge_id": 72,
        "order_index": 1,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 72,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Arithmetic Expression
    {
        "challenge_id": 73,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 73,
        "order_index": 11,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Tennis Set
    {
        "challenge_id": 74,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 74,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Will You?
    {
        "challenge_id": 75,
        "order_index": 1,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 75,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 75,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 75,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Metro Card
    {
        "challenge_id": 76,
        "order_index": 1,
        "expected_output": "[31]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 76,
        "order_index": 2,
        "expected_output": "[28, 30, 31]",
        "is_complex": true,
        "is_sample": true
    },

    // Kill K-th Bit
    {
        "challenge_id": 77,
        "order_index": 1,
        "expected_output": "33",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 2,
        "expected_output": "37",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 3,
        "expected_output": "37",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 5,
        "expected_output": "2147450879",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 6,
        "expected_output": "374819652",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 7,
        "expected_output": "2734819",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 8,
        "expected_output": "1084197039",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 9,
        "expected_output": "1160825067",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 77,
        "order_index": 10,
        "expected_output": "2039063284",
        "is_complex": false,
        "is_sample": true
    },

    // Array Packing
    {
        "challenge_id": 78,
        "order_index": 1,
        "expected_output": "21784",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 78,
        "order_index": 2,
        "expected_output": "2567447",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 78,
        "order_index": 3,
        "expected_output": "134480385",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 78,
        "order_index": 4,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 78,
        "order_index": 5,
        "expected_output": "724198331",
        "is_complex": false,
        "is_sample": true
    },

    // Range Bit Count
    {
        "challenge_id": 79,
        "order_index": 1,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 79,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 79,
        "order_index": 3,
        "expected_output": "17",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 79,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 79,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Mirror Bits
    {
        "challenge_id": 80,
        "order_index": 1,
        "expected_output": "67",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 80,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 80,
        "order_index": 3,
        "expected_output": "111",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 80,
        "order_index": 4,
        "expected_output": "65173",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 80,
        "order_index": 5,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },

    // Second-Rightmost Zero Bit
    {
        "challenge_id": 81,
        "order_index": 1,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 81,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 81,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 81,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 81,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Swap Adjacent Bits
    {
        "challenge_id": 82,
        "order_index": 1,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 82,
        "order_index": 2,
        "expected_output": "133",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 82,
        "order_index": 3,
        "expected_output": "1073741823",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 82,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 82,
        "order_index": 5,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 82,
        "order_index": 6,
        "expected_output": "166680",
        "is_complex": false,
        "is_sample": true
    },

    // Different Rightmost Bit
    {
        "challenge_id": 83,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 83,
        "order_index": 2,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 83,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 83,
        "order_index": 4,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 83,
        "order_index": 5,
        "expected_output": "131072",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 83,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Equal Pair of Bits
    {
        "challenge_id": 84,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 84,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 84,
        "order_index": 3,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 84,
        "order_index": 4,
        "expected_output": "32",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 84,
        "order_index": 5,
        "expected_output": "262144",
        "is_complex": false,
        "is_sample": true
    },

    // 




]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('tests', tests, batchSize)
}