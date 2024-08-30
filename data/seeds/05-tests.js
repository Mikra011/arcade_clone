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
    

]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('tests', tests, batchSize)
}