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

    // Least Factorial
    {
        "challenge_id": 85,
        "order_index": 1,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 3,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 4,
        "expected_output": "120",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 5,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 6,
        "expected_output": "120",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 7,
        "expected_output": "120",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 8,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 9,
        "expected_output": "120",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 85,
        "order_index": 10,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },

    // Count Sum of Two Representations 2
    {
        "challenge_id": 86,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 86,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 86,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 86,
        "order_index": 4,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 86,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 86,
        "order_index": 6,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },

    // Magical Well
    {
        "challenge_id": 87,
        "order_index": 1,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 3,
        "expected_output": "128",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 6,
        "expected_output": "17800540",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 7,
        "expected_output": "110113",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 8,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 9,
        "expected_output": "3060400",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 87,
        "order_index": 10,
        "expected_output": "924738",
        "is_complex": false,
        "is_sample": true
    },

    // Lineup
    {
        "challenge_id": 88,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 6,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 7,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 88,
        "order_index": 8,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },

    // Addition Without Carrying
    {
        "challenge_id": 89,
        "order_index": 1,
        "expected_output": "1180",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 89,
        "order_index": 2,
        "expected_output": "99999",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 89,
        "order_index": 3,
        "expected_output": "888",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 89,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 89,
        "order_index": 5,
        "expected_output": "8642",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 89,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Apple Boxes
    {
        "challenge_id": 90,
        "order_index": 1,
        "expected_output": "-15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 2,
        "expected_output": "-120",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 3,
        "expected_output": "666",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 4,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 5,
        "expected_output": "105",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 6,
        "expected_output": "78",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 7,
        "expected_output": "-45",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 8,
        "expected_output": "820",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 90,
        "order_index": 9,
        "expected_output": "-703",
        "is_complex": false,
        "is_sample": true
    },

    // Increase Number Roundness
    {
        "challenge_id": 91,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 91,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Rounders
    {
        "challenge_id": 92,
        "order_index": 1,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 2,
        "expected_output": "1000",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 3,
        "expected_output": "2000",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 4,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 5,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 6,
        "expected_output": "7000",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 92,
        "order_index": 7,
        "expected_output": "100",
        "is_complex": false,
        "is_sample": true
    },

    // Candles 
    {
        "challenge_id": 93,
        "order_index": 1,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 3,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 4,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 5,
        "expected_output": "18",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 6,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 7,
        "expected_output": "23",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 8,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 9,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 93,
        "order_index": 10,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },

    // Count Black Cells
    {
        "challenge_id": 94,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 2,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 3,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 4,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 5,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 7,
        "expected_output": "239",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 8,
        "expected_output": "86",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 9,
        "expected_output": "30",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 94,
        "order_index": 10,
        "expected_output": "177774",
        "is_complex": false,
        "is_sample": true
    },

    // Create Array
    {
        "challenge_id": 95,
        "order_index": 1,
        "expected_output": "[1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 95,
        "order_index": 2,
        "expected_output": "[1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 95,
        "order_index": 3,
        "expected_output": "[1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 95,
        "order_index": 4,
        "expected_output": "[1, 1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 95,
        "order_index": 5,
        "expected_output": "[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },

    // Array Replace
    {
        "challenge_id": 96,
        "order_index": 1,
        "expected_output": "[3, 2, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 2,
        "expected_output": "[1, 2, 0, 4, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 3,
        "expected_output": "[10, 10, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 4,
        "expected_output": "[1, 1, 1, 1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 5,
        "expected_output": "[1, 2, 1, 2, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 6,
        "expected_output": "[9, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 7,
        "expected_output": "[10, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 96,
        "order_index": 8,
        "expected_output": "[2, 1]",
        "is_complex": true,
        "is_sample": true
    },

    // First Reverse Try
    {
        "challenge_id": 97,
        "order_index": 1,
        "expected_output": "[5, 2, 3, 4, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 97,
        "order_index": 2,
        "expected_output": "[]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 97,
        "order_index": 3,
        "expected_output": "[239]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 97,
        "order_index": 4,
        "expected_output": "[324, 54, 12, 3, 4, 56, 23, 12, 5, 23]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 97,
        "order_index": 5,
        "expected_output": "[1, -1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 97,
        "order_index": 6,
        "expected_output": "[543, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293, -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397, 501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218, -464, 332, 893, 422, -192, -287, -850, 88]",
        "is_complex": true,
        "is_sample": true
    },

    // Concatenate Arrays
    {
        "challenge_id": 98,
        "order_index": 1,
        "expected_output": "[2, 2, 1, 10, 11]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 98,
        "order_index": 2,
        "expected_output": "[1, 2, 3, 1, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 98,
        "order_index": 3,
        "expected_output": "[1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 98,
        "order_index": 4,
        "expected_output": "[2, 10, 3, 9, 5, 11, 11, 4, 8, 1, 13, 3, 1, 14]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 98,
        "order_index": 5,
        "expected_output": "[9, 6, 6, 9, 8, 14, 3, 2, 2, 5, 3, 11, 12, 9, 7, 7]",
        "is_complex": true,
        "is_sample": true
    },

    // Remove Array Part
    {
        "challenge_id": 99,
        "order_index": 1,
        "expected_output": "[2, 3, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 2,
        "expected_output": "[1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 3,
        "expected_output": "[5, 2, 3, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 4,
        "expected_output": "[]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 5,
        "expected_output": "[0, -2, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 6,
        "expected_output": "[4, 3, 4, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 7,
        "expected_output": "[24, -40, -30, 30, 80, -94, 18, -56, -31, -68, -94, 67, -28, -2, -10, -83, -41, 43, -27, 88]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 99,
        "order_index": 8,
        "expected_output": "[]",
        "is_complex": true,
        "is_sample": true
    },

    // Is Smooth?
    {
        "challenge_id": 100,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 100,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Replace Middle
    {
        "challenge_id": 101,
        "order_index": 1,
        "expected_output": "[7, 2, 7, 10, 7]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 2,
        "expected_output": "[-5, -5, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 3,
        "expected_output": "[45, 23, 12, 45, 453, -234, -45]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 4,
        "expected_output": "[10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 5,
        "expected_output": "[-12, 34, 40, -5, -12, 4, 0, 0, -12]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 6,
        "expected_output": "[9, 15, 9]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 7,
        "expected_output": "[-6, 6, -6]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 8,
        "expected_output": "[26, 26, -17]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 101,
        "order_index": 9,
        "expected_output": "[-7, 10, 10]",
        "is_complex": true,
        "is_sample": true
    },

    // Make Array Consecutive 2
    {
        "challenge_id": 102,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 102,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 102,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 102,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 102,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Is Power?
    {
        "challenge_id": 103,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 103,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Is Sum of Consecutive 2
    {
        "challenge_id": 104,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 4,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 6,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 104,
        "order_index": 7,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },

    // Square Digits Sequence
    {
        "challenge_id": 105,
        "order_index": 1,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 105,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 105,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 105,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 105,
        "order_index": 5,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 105,
        "order_index": 6,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },

    // Pages Numbering With Ink
    {
        "challenge_id": 106,
        "order_index": 1,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 2,
        "expected_output": "22",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 3,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 4,
        "expected_output": "23",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 5,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 6,
        "expected_output": "166",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 106,
        "order_index": 7,
        "expected_output": "419",
        "is_complex": false,
        "is_sample": true
    },

    // Comfortable Numbers
    {
        "challenge_id": 107,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 107,
        "order_index": 2,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 107,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 107,
        "order_index": 4,
        "expected_output": "707",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 107,
        "order_index": 5,
        "expected_output": "6166",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 107,
        "order_index": 6,
        "expected_output": "11435",
        "is_complex": false,
        "is_sample": true
    },

    // Weak Numbers
    {
        "challenge_id": 108,
        "order_index": 1,
        "expected_output": "[2, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 108,
        "order_index": 2,
        "expected_output": "[0, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 108,
        "order_index": 3,
        "expected_output": "[0, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 108,
        "order_index": 4,
        "expected_output": "[2, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 108,
        "order_index": 5,
        "expected_output": "[403, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 108,
        "order_index": 6,
        "expected_output": "[0, 4]",
        "is_complex": true,
        "is_sample": true
    },

    // Rectangle Rotation
    {
        "challenge_id": 109,
        "order_index": 1,
        "expected_output": "23",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 2,
        "expected_output": "65",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 3,
        "expected_output": "49",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 4,
        "expected_output": "333",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 5,
        "expected_output": "653",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 6,
        "expected_output": "795",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 7,
        "expected_output": "177",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 8,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 9,
        "expected_output": "2521",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 109,
        "order_index": 10,
        "expected_output": "1563",
        "is_complex": false,
        "is_sample": true
    },

    // Crossword Formation
    {
        "challenge_id": 110,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 110,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 110,
        "order_index": 3,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 110,
        "order_index": 4,
        "expected_output": "62",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 110,
        "order_index": 5,
        "expected_output": "62",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 110,
        "order_index": 6,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },

    // Enclose In Brackets
    {
        "challenge_id": 111,
        "order_index": 1,
        "expected_output": "(abacaba)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 2,
        "expected_output": "(abcdef)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 3,
        "expected_output": "(aaad)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 4,
        "expected_output": "(if)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 5,
        "expected_output": "(it)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 6,
        "expected_output": "(doesnt)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 7,
        "expected_output": "(challenge)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 8,
        "expected_output": "(you)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 9,
        "expected_output": "(itt)",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 111,
        "order_index": 10,
        "expected_output": "(wont)",
        "is_complex": false,
        "is_sample": true
    },

    // Proper Noun Correction
    {
        "challenge_id": 112,
        "order_index": 1,
        "expected_output": "Paris",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 2,
        "expected_output": "John",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 3,
        "expected_output": "Mary",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 4,
        "expected_output": "A",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 5,
        "expected_output": "B",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 6,
        "expected_output": "Yfzmlgvuqp",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 7,
        "expected_output": "Hqqrrdxuqe",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 8,
        "expected_output": "Atdh",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 9,
        "expected_output": "Pjhsyvazb",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 112,
        "order_index": 10,
        "expected_output": "Dkrqo",
        "is_complex": false,
        "is_sample": true
    },

    // Is Tandem Repeat?
    {
        "challenge_id": 113,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 113,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Is Case-Insensitive Palindrome?
    {
        "challenge_id": 114,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 114,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Find Email Domain
    {
        "challenge_id": 115,
        "order_index": 1,
        "expected_output": "example.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 2,
        "expected_output": "codesignal.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 3,
        "expected_output": "space.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 4,
        "expected_output": "yandex.ru",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 5,
        "expected_output": "xample.org",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 6,
        "expected_output": "yahoo.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 7,
        "expected_output": "usual.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 8,
        "expected_output": "mailserver2.ru",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 9,
        "expected_output": "strange-example.com",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 115,
        "order_index": 10,
        "expected_output": "gmail.com",
        "is_complex": false,
        "is_sample": true
    },

    // HTML End Tag By Start Tag
    {
        "challenge_id": 116,
        "order_index": 1,
        "expected_output": "</button>",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 116,
        "order_index": 2,
        "expected_output": "</i>",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 116,
        "order_index": 3,
        "expected_output": "</div>",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 116,
        "order_index": 4,
        "expected_output": "</html>",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 116,
        "order_index": 5,
        "expected_output": "</TABLE>",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 116,
        "order_index": 6,
        "expected_output": "</li>",
        "is_complex": false,
        "is_sample": true
    },

    // Is MAC48 Address?
    {
        "challenge_id": 117,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 117,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Is Unstable Pair?
    {
        "challenge_id": 118,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 118,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Strings Construction
    {
        "challenge_id": 119,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 6,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 8,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 9,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 10,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 11,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 12,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 13,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 14,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 15,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 16,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 17,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 18,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 19,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 20,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 119,
        "order_index": 21,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Is Substitution Cipher?
    {
        "challenge_id": 120,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 120,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Create Anagram
    {
        "challenge_id": 121,
        "order_index": 1,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 5,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 6,
        "expected_output": "31",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 8,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 9,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 121,
        "order_index": 10,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },

    // Construct Square
    {
        "challenge_id": 122,
        "order_index": 1,
        "expected_output": "81",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 122,
        "order_index": 2,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 122,
        "order_index": 3,
        "expected_output": "900",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 122,
        "order_index": 4,
        "expected_output": "810000",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 122,
        "order_index": 5,
        "expected_output": "961",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 122,
        "order_index": 6,
        "expected_output": "999950884",
        "is_complex": false,
        "is_sample": true
    },

    // Numbers Grouping
    {
        "challenge_id": 123,
        "order_index": 1,
        "expected_output": "28",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 4,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 5,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 6,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 123,
        "order_index": 7,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },

    // Different Squares
    {
        "challenge_id": 124,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 6,
        "expected_output": "54",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 124,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Most Frequent Digit Sum
    {
        "challenge_id": 125,
        "order_index": 1,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 2,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 4,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 5,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 6,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 125,
        "order_index": 7,
        "expected_output": "18",
        "is_complex": false,
        "is_sample": true
    },

    // Number of Clans
    {
        "challenge_id": 126,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 2,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 4,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 6,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 7,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 126,
        "order_index": 8,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },

    // House Numbers Sum
    {
        "challenge_id": 127,
        "order_index": 1,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 2,
        "expected_output": "13",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 3,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 5,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 6,
        "expected_output": "90",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 127,
        "order_index": 7,
        "expected_output": "80",
        "is_complex": false,
        "is_sample": true
    },

    // All Longest Strings
    {
        "challenge_id": 128,
        "order_index": 1,
        "expected_output": '["aba", "vcd", "aba"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 2,
        "expected_output": '["aa"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 3,
        "expected_output": '["eeee", "abcd"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 4,
        "expected_output": '["zzzzzz", "abcdef", "aaaaaa"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 5,
        "expected_output": '["varennyky"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 6,
        "expected_output": '["abacaba"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 7,
        "expected_output": '["yooooooung", "watermelon"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 8,
        "expected_output": '["aokbcwthc"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 9,
        "expected_output": '["lbgwyqkry"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 128,
        "order_index": 10,
        "expected_output": '["i"]',
        "is_complex": true,
        "is_sample": true
    },

    // House of Cats
    {
        "challenge_id": 129,
        "order_index": 1,
        "expected_output": "[1, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 129,
        "order_index": 2,
        "expected_output": "[1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 129,
        "order_index": 3,
        "expected_output": "[0, 2, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 129,
        "order_index": 4,
        "expected_output": "[0, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 129,
        "order_index": 5,
        "expected_output": "[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22]",
        "is_complex": true,
        "is_sample": true
    },

    // Alphabet Subsequence
    {
        "challenge_id": 130,
        "order_index": 1,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 130,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Minimal Number of Coins
    {
        "challenge_id": 131,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 131,
        "order_index": 2,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 131,
        "order_index": 3,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 131,
        "order_index": 4,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 131,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Add Border
    {
        "challenge_id": 132,
        "order_index": 1,
        "expected_output": '["*****", "*abc*", "*ded*", "*****"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 132,
        "order_index": 2,
        "expected_output": '["***", "*a*", "***"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 132,
        "order_index": 3,
        "expected_output": '["****", "*aa*", "****", "*zz*", "****"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 132,
        "order_index": 4,
        "expected_output": '["*******", "*abcde*", "*fghij*", "*klmno*", "*pqrst*", "*uvwxy*", "*******"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 132,
        "order_index": 5,
        "expected_output": '["*******", "*wzy***", "*******"]',
        "is_complex": true,
        "is_sample": true
    },

    // Switch Lights
    {
        "challenge_id": 133,
        "order_index": 1,
        "expected_output": "[0, 1, 0, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 2,
        "expected_output": "[0, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 3,
        "expected_output": "[1, 1, 1, 0, 0, 1, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 4,
        "expected_output": "[1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 5,
        "expected_output": "[0, 1, 1, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 6,
        "expected_output": "[1, 0, 1, 1, 0, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 7,
        "expected_output": "[1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 8,
        "expected_output": "[0, 0, 0, 0, 0, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 133,
        "order_index": 9,
        "expected_output": "[0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]",
        "is_complex": true,
        "is_sample": true
    },

    // Timed Reading
    {
        "challenge_id": 134,
        "order_index": 1,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 4,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 5,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 6,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 134,
        "order_index": 8,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },

    // Elections Winners
    {
        "challenge_id": 135,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 135,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 135,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 135,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 135,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 135,
        "order_index": 6,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },

    // Integer to String of Fixed Width
    {
        "challenge_id": 136,
        "order_index": 1,
        "expected_output": "34",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 2,
        "expected_output": "1234",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 3,
        "expected_output": "01234",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 5,
        "expected_output": "0089",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 6,
        "expected_output": "3456",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 136,
        "order_index": 7,
        "expected_output": "899",
        "is_complex": false,
        "is_sample": true
    },

    // Are Similar?
    {
        "challenge_id": 137,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 137,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Ada Number
    {
        "challenge_id": 138,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 12,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 13,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 14,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 15,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 16,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 17,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 18,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 138,
        "order_index": 19,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Three Split
    {
        "challenge_id": 139,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 139,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 139,
        "order_index": 3,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 139,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 139,
        "order_index": 5,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },

    // Character Parity
    {
        "challenge_id": 140,
        "order_index": 1,
        "expected_output": "odd",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 2,
        "expected_output": "even",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 3,
        "expected_output": "not a digit",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 4,
        "expected_output": "odd",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 5,
        "expected_output": "even",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 6,
        "expected_output": "odd",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 140,
        "order_index": 7,
        "expected_output": "odd",
        "is_complex": false,
        "is_sample": true
    },

    // Reflect String
    {
        "challenge_id": 141,
        "order_index": 1,
        "expected_output": "mznv",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 141,
        "order_index": 2,
        "expected_output": "zyba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 141,
        "order_index": 3,
        "expected_output": "mmmmm",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 141,
        "order_index": 4,
        "expected_output": "kji",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 141,
        "order_index": 5,
        "expected_output": "xlwvhrtmzo",
        "is_complex": false,
        "is_sample": true
    },

    // New Numeral System
    {
        "challenge_id": 142,
        "order_index": 1,
        "expected_output": '["A + G", "B + F", "C + E", "D + D"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 2,
        "expected_output": '["A + A"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 3,
        "expected_output": '["A + D", "B + C"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 4,
        "expected_output": '["A + E", "B + D", "C + C"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 5,
        "expected_output": '["A + F", "B + E", "C + D"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 6,
        "expected_output": '["A + I", "B + H", "C + G", "D + F", "E + E"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 7,
        "expected_output": '["A + K", "B + J", "C + I", "D + H", "E + G", "F + F"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 8,
        "expected_output": '["A + L", "B + K", "C + J", "D + I", "E + H", "F + G"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 9,
        "expected_output": '["A + O", "B + N", "C + M", "D + L", "E + K", "F + J", "G + I", "H + H"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 10,
        "expected_output": '["A + P", "B + O", "C + N", "D + M", "E + L", "F + K", "G + J", "H + I"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 11,
        "expected_output": '["A + S", "B + R", "C + Q", "D + P", "E + O", "F + N", "G + M", "H + L", "I + K", "J + J"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 12,
        "expected_output": '["A + T", "B + S", "C + R", "D + Q", "E + P", "F + O", "G + N", "H + M", "I + L", "J + K"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 142,
        "order_index": 13,
        "expected_output": '["A + W", "B + V", "C + U", "D + T", "E + S", "F + R", "G + Q", "H + P", "I + O", "J + N", "K + M", "L + L"]',
        "is_complex": true,
        "is_sample": true
    },

    // Cipher 26
    {
        "challenge_id": 143,
        "order_index": 1,
        "expected_output": "thisisencryptedmessage",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 143,
        "order_index": 2,
        "expected_output": "itsasecrettoeverybody",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 143,
        "order_index": 3,
        "expected_output": "fourtytwo",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 143,
        "order_index": 4,
        "expected_output": "thereisnospoon",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 143,
        "order_index": 5,
        "expected_output": "abcdefghijklmnopqrstuvwxyz",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 143,
        "order_index": 6,
        "expected_output": "z",
        "is_complex": false,
        "is_sample": true
    },

    // Stolen Lunch
    {
        "challenge_id": 144,
        "order_index": 1,
        "expected_output": "you'll never guess it: 2390",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 144,
        "order_index": 2,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 144,
        "order_index": 3,
        "expected_output": "abcdefghij",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 144,
        "order_index": 4,
        "expected_output": "9876543210",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 144,
        "order_index": 5,
        "expected_output": "you won't know!!",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 144,
        "order_index": 6,
        "expected_output": "9ust gd93hd som4 r0n3om not4 9k735id 3sicd t70t you, 359cdi 3s5di l8ttl4 on4?, w8ll 019kdi sid    sk3ud cjn4v4r 64t!",
        "is_complex": false,
        "is_sample": true
    },

    // Higher Version
    {
        "challenge_id": 145,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 145,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Decipher
    {
        "challenge_id": 146,
        "order_index": 1,
        "expected_output": "easy",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 2,
        "expected_output": "b",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 3,
        "expected_output": "z",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 4,
        "expected_output": "zba",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 5,
        "expected_output": "abcdefghijklmnopqrstuvwxyza",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 6,
        "expected_output": "fasjlflajshfbakjsbdfaksdfb",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 146,
        "order_index": 7,
        "expected_output": "powqelmdaklsopwqejkanfnjfhrairra",
        "is_complex": false,
        "is_sample": true
    },

    // Alphanumeric Less
    {
        "challenge_id": 147,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 12,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 13,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 147,
        "order_index": 14,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Array Conversion
    {
        "challenge_id": 148,
        "order_index": 1,
        "expected_output": "186",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 2,
        "expected_output": "64",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 3,
        "expected_output": "60",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 4,
        "expected_output": "100",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 5,
        "expected_output": "99",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 6,
        "expected_output": "100",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 148,
        "order_index": 7,
        "expected_output": "-22511",
        "is_complex": false,
        "is_sample": true
    },

    // Array Previous Less
    {
        "challenge_id": 149,
        "order_index": 1,
        "expected_output": "[-1, 3, -1, 2, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 149,
        "order_index": 2,
        "expected_output": "[-1, -1, -1, 1, 3, 4, 4, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 149,
        "order_index": 3,
        "expected_output": "[-1, -1, -1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 149,
        "order_index": 4,
        "expected_output": "[-1, 100, 101]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 149,
        "order_index": 5,
        "expected_output": "[-1, -1, 7, -1, 3, 3, -1, 2, 5, 6, 6]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 149,
        "order_index": 6,
        "expected_output": "[-1, 68, 68, 101, 101]",
        "is_complex": true,
        "is_sample": true
    },

    // Pair of Shoes
    {
        "challenge_id": 150,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 12,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 13,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 14,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 15,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 150,
        "order_index": 16,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Combs
    {
        "challenge_id": 151,
        "order_index": 1,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 151,
        "order_index": 2,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 151,
        "order_index": 3,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 151,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 151,
        "order_index": 5,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },

    // Strings Crossover
    {
        "challenge_id": 152,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 152,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 152,
        "order_index": 3,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 152,
        "order_index": 4,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 152,
        "order_index": 5,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 152,
        "order_index": 6,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Cyclic String
    {
        "challenge_id": 153,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 4,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 5,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 7,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 8,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 153,
        "order_index": 9,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Beautiful Text
    {
        "challenge_id": 154,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 154,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Runners Meetings
    {
        "challenge_id": 155,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 155,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 155,
        "order_index": 3,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 155,
        "order_index": 4,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 155,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 155,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },

    // Christmas Tree
    {
        "challenge_id": 156,
        "order_index": 1,
        "expected_output": '["    *", "    *", "   ***", "  *****", " *******", "*********", "   ***"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 156,
        "order_index": 2,
        "expected_output": '["      *", "      *", "     ***", "    *****", "   *******", "  *********", " ***********", "   *******", "  *********", " ***********", "*************", "    *****", "    *****"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 156,
        "order_index": 3,
        "expected_output": '["            *", "            *", "           ***", "          *****", "         *******", "        *********", "       ***********", "      *************", "     ***************", "    *****************", "   *******************", "         *******", "        *********", "       ***********", "      *************", "     ***************", "    *****************", "   *******************", "  *********************", "        *********", "       ***********", "      *************", "     ***************", "    *****************", "   *******************", "  *********************", " ***********************", "       ***********", "      *************", "     ***************", "    *****************", "   *******************", "  *********************", " ***********************", "*************************", "        *********", "        *********", "        *********", "        *********"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 156,
        "order_index": 4,
        "expected_output": '["             *", "             *", "            ***", "           *****", "          *******", "         *********", "        ***********", "       *************", "          *******", "         *********", "        ***********", "       *************", "      ***************", "         *********", "        ***********", "       *************", "      ***************", "     *****************", "        ***********", "       *************", "      ***************", "     *****************", "    *******************", "       *************", "      ***************", "     *****************", "    *******************", "   *********************", "      ***************", "     *****************", "    *******************", "   *********************", "  ***********************", "     *****************", "    *******************", "   *********************", "  ***********************", " *************************", "    *******************", "   *********************", "  ***********************", " *************************", "***************************", "           *****", "           *****", "           *****", "           *****", "           *****", "           *****", "           *****", "           *****"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 156,
        "order_index": 5,
        "expected_output": '["      *", "      *", "     ***", "    *****", "   *******", "  *********", "   *******", "  *********", " ***********", "  *********", " ***********", "*************", "     ***", "     ***", "     ***"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 156,
        "order_index": 6,
        "expected_output": '["          *", "          *", "         ***", "        *****", "       *******", "      *********", "     ***********", "    *************", "   ***************", "       *******", "      *********", "     ***********", "    *************", "   ***************", "  *****************", "      *********", "     ***********", "    *************", "   ***************", "  *****************", " *******************", "     ***********", "    *************", "   ***************", "  *****************", " *******************", "*********************", "       *******", "       *******", "       *******", "       *******"]',
        "is_complex": true,
        "is_sample": true
    },

    // File Naming
    {
        "challenge_id": 157,
        "order_index": 1,
        "expected_output": '["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 157,
        "order_index": 2,
        "expected_output": '["a(1)", "a(6)", "a", "a(2)", "a(3)", "a(4)", "a(5)", "a(7)", "a(8)", "a(9)", "a(10)", "a(11)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 157,
        "order_index": 3,
        "expected_output": '["dd", "dd(1)", "dd(2)", "dd(3)", "dd(1)(1)", "dd(1)(2)", "dd(1)(1)(1)", "dd(4)", "dd(1)(3)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 157,
        "order_index": 5,
        "expected_output": '["name", "name(1)", "name(1)(1)", "name(3)", "name(2)", "name(2)(1)"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 157,
        "order_index": 6,
        "expected_output": '[]',
        "is_complex": true,
        "is_sample": true
    },

    // Extract Matrix Column
    {
        "challenge_id": 158,
        "order_index": 1,
        "expected_output": "[1, 0, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 158,
        "order_index": 2,
        "expected_output": "[1, 0, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 158,
        "order_index": 3,
        "expected_output": "[1, 5, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 158,
        "order_index": 4,
        "expected_output": "[1, 5, 1, 100]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 158,
        "order_index": 5,
        "expected_output": "[5, 0, 10]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 158,
        "order_index": 6,
        "expected_output": "[0]",
        "is_complex": true,
        "is_sample": true
    },

    // Are Isomorphic?
    {
        "challenge_id": 159,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 159,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Reverse On Diagonals
    {
        "challenge_id": 160,
        "order_index": 1,
        "expected_output": "[[9,2,7],  [4,5,6],  [3,8,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 160,
        "order_index": 2,
        "expected_output": "[[239]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 160,
        "order_index": 3,
        "expected_output": "[[1000,100],  [10,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 160,
        "order_index": 4,
        "expected_output": "[[291,455,32,2],  [102,53,21,981],  [309,298,988,64],  [103,22,35,43]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 160,
        "order_index": 5,
        "expected_output": "[[43,1000,139,248,972,93],  [98,837,398,128,109,654],  [33,498,764,54,764,43],  [329,12,543,132,666,213],  [928,762,489,71,1,332],  [584,298,42,53,76,34]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 160,
        "order_index": 6,
        "expected_output": "[[2,2],  [1,1]]",
        "is_complex": true,
        "is_sample": true
    },

    // Swap Diagonals
    {
        "challenge_id": 161,
        "order_index": 1,
        "expected_output": "[[3,2,1],  [4,5,6],  [9,8,7]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 161,
        "order_index": 2,
        "expected_output": "[[239]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 161,
        "order_index": 3,
        "expected_output": "[[10,1],  [1000,100]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 161,
        "order_index": 4,
        "expected_output": "[[103,455,32,43],  [102,298,988,981],  [309,53,21,64],  [291,22,35,2]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 161,
        "order_index": 5,
        "expected_output": "[[584,1000,139,248,972,34],  [98,762,398,128,1,654],  [33,498,543,132,764,43],  [329,12,764,54,666,213],  [928,837,489,71,109,332],  [43,298,42,53,76,93]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 161,
        "order_index": 6,
        "expected_output": "[[2,1],  [2,1]]",
        "is_complex": true,
        "is_sample": true
    },

    // Crossing Sum
    {
        "challenge_id": 162,
        "order_index": 1,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 2,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 3,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 4,
        "expected_output": "100",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 5,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 6,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 162,
        "order_index": 7,
        "expected_output": "21",
        "is_complex": false,
        "is_sample": true
    },

    // Draw Rectangle
    {
        "challenge_id": 163,
        "order_index": 1,
        "expected_output": '[["a","a","a","a","a","a","a","a"], ["a","*","-","-","*","a","a","a"], ["a","|","a","a","|","a","a","a"], ["b","*","-","-","*","b","b","b"], ["b","b","b","b","b","b","b","b"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 163,
        "order_index": 2,
        "expected_output": '[["*","*","a","a","a","a","a","a"], ["*","*","a","a","a","a","a","a"], ["a","a","a","a","a","a","a","a"], ["b","b","b","b","b","b","b","b"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 163,
        "order_index": 3,
        "expected_output": '[["a","a","a","a","a","a","a","a"], ["a","a","a","a","a","a","a","a"], ["*","-","-","-","-","-","-","*"], ["*","-","-","-","-","-","-","*"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 163,
        "order_index": 4,
        "expected_output": '[["*","-","*"], ["|","a","|"], ["|","a","|"], ["*","-","*"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 163,
        "order_index": 5,
        "expected_output": '[["#","#"], ["*","*"], ["*","*"], ["b","b"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 163,
        "order_index": 6,
        "expected_output": '[["*","*"], ["|","|"], ["|","|"], ["*","*"]]',
        "is_complex": true,
        "is_sample": true
    },

    // Volleyball Positions
    {
        "challenge_id": 164,
        "order_index": 1,
        "expected_output": '[["empty","Player1","empty"], ["Player2","empty","Player3"], ["empty","Player4","empty"], ["Player5","empty","Player6"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 2,
        "expected_output": '[["empty","Alice","empty"], ["Bob","empty","Charlie"], ["empty","Dave","empty"], ["Eve","empty","Frank"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 3,
        "expected_output": '[["empty","5","empty"], ["4","empty","player3"], ["empty","player","empty"], ["42","empty","player3"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 4,
        "expected_output": '[["empty","player3","empty"], ["player8","empty","player"], ["empty","4","empty"], ["5","empty","42"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 5,
        "expected_output": '[["empty","5","empty"], ["4","empty","player8"], ["empty","player","empty"], ["42","empty","player3"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 6,
        "expected_output": '[["empty","Charlie","empty"], ["Alice","empty","Frank"], ["empty","Eve","empty"], ["Bob","empty","Dave"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 7,
        "expected_output": '[["empty","1","empty"], ["?","empty","!"], ["empty",".","empty"], ["3","empty","2"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 8,
        "expected_output": '[["empty","","empty"], ["","empty",""], ["empty","","empty"], ["","empty","!!!"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 9,
        "expected_output": '[["empty","Alice","empty"], ["Bob","empty","Charlie"], ["empty","Dave","empty"], ["Eve","empty","Frank"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 164,
        "order_index": 10,
        "expected_output": '[["empty","f","empty"], ["c","empty","d"], ["empty","b","empty"], ["a","empty","e"]]',
        "is_complex": true,
        "is_sample": true
    },

    // Star Rotation
    {
        "challenge_id": 165,
        "order_index": 1,
        "expected_output": "[[8,0,0,1,0,0,2],  [0,8,0,1,0,2,0],  [0,0,8,1,2,0,0],  [7,7,7,9,3,3,3],  [0,0,6,5,4,0,0],  [0,6,0,5,0,4,0],  [6,0,0,5,0,0,4]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 165,
        "order_index": 2,
        "expected_output": "[[1,0,0,2,0,0,0],  [0,1,0,2,3,3,3],  [0,0,1,2,0,0,0],  [8,8,8,9,4,4,4],  [0,0,7,6,5,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 165,
        "order_index": 3,
        "expected_output": "[[1,0,0,2,0,0,3],  [0,1,0,2,0,3,0],  [0,0,2,3,4,0,0],  [8,8,1,9,5,4,4],  [0,0,8,7,6,0,0],  [0,7,0,6,0,5,0],  [7,0,0,6,0,0,5]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 165,
        "order_index": 4,
        "expected_output": "[[0,99,8],  [5,4,3],  [3,0,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 165,
        "order_index": 5,
        "expected_output": "[[8,16,32],  [0,99,8],  [5,4,3],  [3,0,1],  [42,56,64]]",
        "is_complex": true,
        "is_sample": true
    },

    // Sudoku
    {
        "challenge_id": 166,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 166,
        "order_index": 11,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Minesweeper
    {
        "challenge_id": 167,
        "order_index": 1,
        "expected_output": "[[1,2,1],  [2,1,1],  [1,1,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 167,
        "order_index": 2,
        "expected_output": "[[0,0,0],  [0,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 167,
        "order_index": 3,
        "expected_output": "[[0,2,2,1],  [3,4,3,3],  [1,2,3,1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 167,
        "order_index": 4,
        "expected_output": "[[3,5,3],  [5,8,5],  [3,5,3]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 167,
        "order_index": 5,
        "expected_output": "[[3,3,3,2],  [2,4,5,2],  [2,3,2,2]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 167,
        "order_index": 6,
        "expected_output": "[[1,2],  [2,3],  [2,1],  [1,1],  [0,0]]",
        "is_complex": true,
        "is_sample": true
    },


    // Box Blur
    {
        "challenge_id": 168,
        "order_index": 1,
        "expected_output": "[[1]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 168,
        "order_index": 2,
        "expected_output": "[[28]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 168,
        "order_index": 3,
        "expected_output": "[[40,30]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 168,
        "order_index": 4,
        "expected_output": "[[5,4],  [4,4]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 168,
        "order_index": 5,
        "expected_output": "[[39,30,26,25,31],  [34,37,35,32,32],  [38,41,44,46,42],  [22,24,31,39,45],  [37,34,36,47,59]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 168,
        "order_index": 6,
        "expected_output": "[[82,73,48,25,31],  [77,80,57,32,32],  [81,106,88,68,42],  [44,96,103,89,45],  [59,113,137,126,80]]",
        "is_complex": true,
        "is_sample": true
    },

    // Contours Shifting
    {
        "challenge_id": 169,
        "order_index": 1,
        "expected_output": "[[5,1,2,3],  [9,7,11,4],  [13,6,15,8],  [17,10,14,12],  [18,19,20,16]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 2,
        "expected_output": "[[245,238,239,240,241,242,243,244]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 3,
        "expected_output": "[[245],  [238],  [239],  [240],  [241],  [242],  [243],  [244]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 4,
        "expected_output": "[[4,1,2],  [7,8,3],  [10,5,6],  [11,12,9]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 5,
        "expected_output": "[[6,1,2,3,4],  [11,8,9,14,5],  [16,7,12,13,10],  [17,18,19,20,15]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 6,
        "expected_output": "[[6,1,2,3,4],  [11,8,9,7,5],  [12,13,14,15,10]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 7,
        "expected_output": "[[6,1,2],  [11,12,3],  [16,17,8],  [21,22,13],  [24,7,18],  [25,26,23]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 169,
        "order_index": 8,
        "expected_output": "[[239]]",
        "is_complex": true,
        "is_sample": true
    },

    // Polygon Perimeter
    {
        "challenge_id": 170,
        "order_index": 1,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 2,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 3,
        "expected_output": "14",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 4,
        "expected_output": "12",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 5,
        "expected_output": "22",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 6,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 7,
        "expected_output": "24",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 8,
        "expected_output": "22",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 9,
        "expected_output": "32",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 170,
        "order_index": 10,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },

    // Gravitation
    {
        "challenge_id": 171,
        "order_index": 1,
        "expected_output": "[1, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 2,
        "expected_output": "[1, 2, 3, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 3,
        "expected_output": "[0, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 4,
        "expected_output": "[1, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 5,
        "expected_output": "[3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 6,
        "expected_output": "[2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 171,
        "order_index": 7,
        "expected_output": "[5]",
        "is_complex": true,
        "is_sample": true
    },

    // Is Information Consistent?
    {
        "challenge_id": 172,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 172,
        "order_index": 10,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },

    // Correct Nonogram
    {
        "challenge_id": 173,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 173,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 173,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 173,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 173,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 173,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Shuffled Array
    {
        "challenge_id": 174,
        "order_index": 1,
        "expected_output": "[1, 2, 3, 6]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 174,
        "order_index": 2,
        "expected_output": "[-5, -3, 2, 7]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 174,
        "order_index": 3,
        "expected_output": "[-1, -1, 2, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 174,
        "order_index": 4,
        "expected_output": "[-3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 174,
        "order_index": 5,
        "expected_output": "[-90, -85, -67, -37, 11, 37, 37, 56, 80, 90]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 174,
        "order_index": 6,
        "expected_output": "[-65, -52, -39, 18, 65]",
        "is_complex": true,
        "is_sample": true
    },

    // Sort by Height
    {
        "challenge_id": 175,
        "order_index": 1,
        "expected_output": "[-1, 150, 160, 170, -1, -1, 180, 190]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 175,
        "order_index": 2,
        "expected_output": "[-1, -1, -1, -1, -1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 175,
        "order_index": 3,
        "expected_output": "[-1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 175,
        "order_index": 4,
        "expected_output": "[2, 2, 4, 9, 11, 16]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 175,
        "order_index": 5,
        "expected_output": "[1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 175,
        "order_index": 6,
        "expected_output": "[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]",
        "is_complex": true,
        "is_sample": true
    },

    // Sort By Length
    {
        "challenge_id": 176,
        "order_index": 1,
        "expected_output": '["", "a", "zz", "abc", "aaa"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 176,
        "order_index": 2,
        "expected_output": '["", "zz", "bb", "cc", "ccc"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 176,
        "order_index": 3,
        "expected_output": '["e", "abc", "abcd"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 176,
        "order_index": 4,
        "expected_output": '["a", "c", "a", "a"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 176,
        "order_index": 5,
        "expected_output": '["", "hx", "rl", "wd", "sqrg", "thitl", "kncor", "ondyxds", "sadhxirg", "hqtchyxku"]',
        "is_complex": true,
        "is_sample": true
    },

    // Boxes Packing
    {
        "challenge_id": 177,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 11,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 12,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 177,
        "order_index": 13,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Maximum Sum
    {
        "challenge_id": 178,
        "order_index": 1,
        "expected_output": "62",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 178,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 178,
        "order_index": 3,
        "expected_output": "28",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 178,
        "order_index": 4,
        "expected_output": "33",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 178,
        "order_index": 5,
        "expected_output": "162",
        "is_complex": false,
        "is_sample": true
    },

    // Rows Rearranging
    {
        "challenge_id": 179,
        "order_index": 1,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 2,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 4,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 179,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Digit Difference Sort
    {
        "challenge_id": 180,
        "order_index": 1,
        "expected_output": "[7, 887, 23, 243, 152]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 180,
        "order_index": 2,
        "expected_output": "[]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 180,
        "order_index": 3,
        "expected_output": "[9, 34, 343, 332, 132, 798, 626, 95, 462, 724, 561, 339, 292, 592, 218, 970]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 180,
        "order_index": 4,
        "expected_output": "[8, 77, 7, 7, 8, 56, 32, 87, 76, 13, 69, 85, 63, 95, 95, 48, 26, 61, 72, 28, 17, 82, 60, 60, 18]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 180,
        "order_index": 5,
        "expected_output": "[131, 97, 13, 364, 624, 403, 846, 743, 215, 440, 949, 427, 836, 682, 711, 714, 892, 118, 618, 720, 80, 408, 850, 419, 804]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 180,
        "order_index": 6,
        "expected_output": "[1, 97897, 12213, 243, 213, 424, 213, 54234, 52433, 99487, 81892, 12398, 1308, 13098]",
        "is_complex": true,
        "is_sample": true
    },

    // Unique Digit Products
    {
        "challenge_id": 181,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 181,
        "order_index": 2,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 181,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 181,
        "order_index": 4,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 181,
        "order_index": 5,
        "expected_output": "10",
        "is_complex": false,
        "is_sample": true
    },

    // Bishop and Pawn
    {
        "challenge_id": 182,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 182,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Chess Knight Moves
    {
        "challenge_id": 183,
        "order_index": 1,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 2,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 3,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 4,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 6,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 7,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 8,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 183,
        "order_index": 9,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },

    // Bishop Diagonal
    {
        "challenge_id": 184,
        "order_index": 1,
        "expected_output": '["c8", "h3"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 184,
        "order_index": 2,
        "expected_output": '["b5", "d8"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 184,
        "order_index": 3,
        "expected_output": '["a1", "h8"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 184,
        "order_index": 4,
        "expected_output": '["e1", "h4"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 184,
        "order_index": 5,
        "expected_output": '["a3", "f8"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 184,
        "order_index": 6,
        "expected_output": '["a1", "h1"]',
        "is_complex": true,
        "is_sample": true
    },

    // Whose Turn?
    {
        "challenge_id": 185,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 185,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Chess Bishop Dream
    {
        "challenge_id": 186,
        "order_index": 1,
        "expected_output": "[0, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 2,
        "expected_output": "[0, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 3,
        "expected_output": "[1, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 4,
        "expected_output": "[0, 0]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 5,
        "expected_output": "[0, 2]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 6,
        "expected_output": "[4, 17]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 186,
        "order_index": 7,
        "expected_output": "[10, 2]",
        "is_complex": true,
        "is_sample": true
    },

    // Chess Triangle
    {
        "challenge_id": 187,
        "order_index": 1,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 187,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 187,
        "order_index": 3,
        "expected_output": "48",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 187,
        "order_index": 4,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 187,
        "order_index": 5,
        "expected_output": "40",
        "is_complex": false,
        "is_sample": true
    },

    // Amazon Checkmate
    {
        "challenge_id": 188,
        "order_index": 1,
        "expected_output": "[5, 21, 0, 29]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 2,
        "expected_output": "[0, 29, 1, 29]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 3,
        "expected_output": "[1, 32, 1, 23]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 4,
        "expected_output": "[6, 11, 0, 38]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 5,
        "expected_output": "[0, 10, 0, 45]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 6,
        "expected_output": "[4, 28, 1, 21]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 7,
        "expected_output": "[9, 21, 0, 24]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 8,
        "expected_output": "[4, 18, 0, 32]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 188,
        "order_index": 9,
        "expected_output": "[0, 18, 0, 36]",
        "is_complex": true,
        "is_sample": true
    },

    // Pawn Race
    {
        "challenge_id": 189,
        "order_index": 1,
        "expected_output": "draw",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 2,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 3,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 4,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 5,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 6,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 7,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 8,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 9,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 10,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 11,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 12,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 13,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 14,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 15,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 16,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 17,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 18,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 19,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 20,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 21,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 22,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 23,
        "expected_output": "white",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 24,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 189,
        "order_index": 25,
        "expected_output": "black",
        "is_complex": false,
        "is_sample": true
    },

    // Valid Time
    {
        "challenge_id": 190,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 190,
        "order_index": 11,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Video Part
    {
        "challenge_id": 191,
        "order_index": 1,
        "expected_output": "[1, 3]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 2,
        "expected_output": "[1, 1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 3,
        "expected_output": "[7, 30]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 4,
        "expected_output": "[2, 5]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 5,
        "expected_output": "[1, 600]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 6,
        "expected_output": "[1597, 2163]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 191,
        "order_index": 7,
        "expected_output": "[6119, 7200]",
        "is_complex": true,
        "is_sample": true
    },

    // Day of Week
    {
        "challenge_id": 192,
        "order_index": 1,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 192,
        "order_index": 2,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 192,
        "order_index": 3,
        "expected_output": "28",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 192,
        "order_index": 4,
        "expected_output": "11",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 192,
        "order_index": 5,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 192,
        "order_index": 6,
        "expected_output": "40",
        "is_complex": false,
        "is_sample": true
    },

    // Curious Clock
    {
        "challenge_id": 193,
        "order_index": 1,
        "expected_output": "2016-08-24 11:20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 193,
        "order_index": 2,
        "expected_output": "2016-08-26 22:39",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 193,
        "order_index": 3,
        "expected_output": "2014-03-26 00:48",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 193,
        "order_index": 4,
        "expected_output": "2016-02-26 02:21",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 193,
        "order_index": 5,
        "expected_output": "1974-07-06 22:04",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 193,
        "order_index": 6,
        "expected_output": "1986-07-25 00:01",
        "is_complex": false,
        "is_sample": true
    },

    // New Year Celebrations
    {
        "challenge_id": 194,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 2,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 4,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 5,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 6,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 7,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 8,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 9,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 194,
        "order_index": 10,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },

    // Regular Months
    {
        "challenge_id": 195,
        "order_index": 1,
        "expected_output": "08-2016",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 195,
        "order_index": 2,
        "expected_output": "11-2027",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 195,
        "order_index": 3,
        "expected_output": "02-2100",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 195,
        "order_index": 4,
        "expected_output": "06-1970",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 195,
        "order_index": 5,
        "expected_output": "09-2025",
        "is_complex": false,
        "is_sample": true
    },

    // Missed Classes
    {
        "challenge_id": 196,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 3,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 4,
        "expected_output": "13",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 5,
        "expected_output": "30",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 7,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 8,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 9,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 196,
        "order_index": 10,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Holiday
    {
        "challenge_id": 197,
        "order_index": 1,
        "expected_output": "16",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 2,
        "expected_output": "-1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 4,
        "expected_output": "8",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 5,
        "expected_output": "15",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 6,
        "expected_output": "20",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 7,
        "expected_output": "18",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 8,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 197,
        "order_index": 9,
        "expected_output": "29",
        "is_complex": false,
        "is_sample": true
    },

    // Is Sentence Correct?
    {
        "challenge_id": 198,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 3,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 198,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    //  Replace All Digits RegExp
    {
        "challenge_id": 199,
        "order_index": 1,
        "expected_output": "There are ## points",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 199,
        "order_index": 2,
        "expected_output": "###ss###",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 199,
        "order_index": 3,
        "expected_output": "_Aas ##",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 199,
        "order_index": 4,
        "expected_output": "no digits here",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 199,
        "order_index": 5,
        "expected_output": "aa_####mehce#d",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 199,
        "order_index": 6,
        "expected_output": "v z gv#zyx eu mu",
        "is_complex": false,
        "is_sample": true
    },

    // Swap Adjacent Words
    {
        "challenge_id": 200,
        "order_index": 1,
        "expected_output": "On CodeFight",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 200,
        "order_index": 2,
        "expected_output": "are How today you guys",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 200,
        "order_index": 3,
        "expected_output": "IAmALongStringWithNoWhiteSpaceCharacters",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 200,
        "order_index": 4,
        "expected_output": "b A D C F e h g j I",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 200,
        "order_index": 5,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },

    // N-th Number
    {
        "challenge_id": 201,
        "order_index": 1,
        "expected_output": "233",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 201,
        "order_index": 2,
        "expected_output": "4328",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 201,
        "order_index": 3,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 201,
        "order_index": 4,
        "expected_output": "404",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 201,
        "order_index": 5,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 201,
        "order_index": 6,
        "expected_output": "584511290939644184700867021026771007612398051168360441323",
        "is_complex": false,
        "is_sample": true
    },

    // Is Subsequence?
    {
        "challenge_id": 202,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 5,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 6,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 7,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 8,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 9,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 202,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Eye Rhyme
    {
        "challenge_id": 203,
        "order_index": 1,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 2,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 3,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 4,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 5,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 6,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 7,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 8,
        "expected_output": "false",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 9,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 203,
        "order_index": 10,
        "expected_output": "true",
        "is_complex": false,
        "is_sample": true
    },

    // Program Translation
    {
        "challenge_id": 204,
        "order_index": 1,
        "expected_output": "function add($n, $m) {\\t  return $n + $m;\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 2,
        "expected_output": "function findSum($a, $cnt) {\\t  var a0 = $a;\\t  for (var _cnt = 0, _cnt < $cnt; _cnt++)\\t    a0 += _cnt;\\t  return a0;\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 3,
        "expected_output": "function doNothing($uselessVar) {\\t  return $uselessVar;\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 4,
        "expected_output": "function addToVariable($variable) {\\t  variable_which_should_be_increased = 14;\\t  variable_which_should_be_increased += $variable;\\t  return variable_which_should_be_increased;\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 5,
        "expected_output": "function replaceThemAll($rep, $laceT, $hemAll, ornot) {\\t  var tmp = $rep;\\t  $rep = $laceT;\\t  $laceT = $hemAll;\\t  $hemAll = tmp;\\t  return [$rep, $laceT, $hemAll]\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 6,
        "expected_output": "function returnSecond($fu_,$_re5,$NOO) {\\t  return $_re5;\\t}",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 204,
        "order_index": 7,
        "expected_output": "function getLength(k, $m) {\\t  return $m.length;\\t}",
        "is_complex": false,
        "is_sample": true
    },

    // Repetition Encryption
    {
        "challenge_id": 205,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 2,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 3,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 5,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 7,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 205,
        "order_index": 8,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Bugs and Bugfixes
    {
        "challenge_id": 206,
        "order_index": 1,
        "expected_output": "43",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 206,
        "order_index": 2,
        "expected_output": "46",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 206,
        "order_index": 3,
        "expected_output": "5",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 206,
        "order_index": 4,
        "expected_output": "7",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 206,
        "order_index": 5,
        "expected_output": "38",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 206,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // LRC to SubRip
    {
        "challenge_id": 207,
        "order_index": 1,
        "expected_output": '["1", "00:00:12,000 --> 00:00:17,200", "Happy birthday dear coder,", "", "2", "00:00:17,200 --> 00:00:20,000", "Happy birthday to you!"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 207,
        "order_index": 2,
        "expected_output": '["1", "00:00:04,420 --> 00:00:08,460", "jingle bells, jingle bells, jingle all the way!", "", "2", "00:00:08,460 --> 00:00:12,830", "Oh what fun it is to ride in a one horse open sleigh.", "", "3", "00:00:12,830 --> 00:00:17,450", "jingle bells, jingle bells, jingle all the way!", "", "4", "00:00:17,450 --> 00:00:21,890", "Oh what fun it is to ride in a one horse open sleigh.", "", "5", "00:00:21,890 --> 00:24:00,000", "jingle bells, jingle bells, jingle all the way!"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 207,
        "order_index": 3,
        "expected_output": '["1", "01:35:19,550 --> 01:35:23,310", "i hear babies cryin,", "", "2", "01:35:23,310 --> 01:35:26,050", "i watch them grow", "", "3", "01:35:26,050 --> 01:35:29,180", "theyll learn much more", "", "4", "01:35:29,180 --> 01:35:33,100", "than ill ever know", "", "5", "01:35:33,100 --> 01:35:38,440", "and i think to myself,", "", "6", "01:35:38,440 --> 02:23:44,000", "what a wonderful world"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 207,
        "order_index": 4,
        "expected_output": '["1", "00:12:24,800 --> 00:14:26,460", "make it the cutest", "", "2", "00:14:26,460 --> 00:17:28,960", "that ive ever seen", "", "3", "00:17:28,960 --> 00:21:30,360", "give hm the lips", "", "4", "00:21:30,360 --> 00:35:33,030", "like roses in clover", "", "5", "00:35:33,030 --> 00:46:34,420", "then tell him that", "", "6", "00:46:34,420 --> 00:57:36,680", "his lone some nights are over", "", "7", "00:57:36,680 --> 01:07:38,710", "Mr.sandman", "", "8", "01:07:38,710 --> 01:37:40,990", "i am so along", "", "9", "01:37:40,990 --> 01:39:42,630", "dont have nobody", "", "10", "01:39:42,630 --> 02:59:59,000", "to call my own"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 207,
        "order_index": 5,
        "expected_output": '["1", "00:12:51,100 --> 00:16:57,100", "Hello tacher tell me whats my lesson", "", "2", "00:16:57,100 --> 00:24:00,360", "Look right through me,", "", "3", "00:24:00,360 --> 00:27:04,570", "look right through me", "", "4", "00:27:04,570 --> 00:34:08,160", "And I find it kind of funny", "", "5", "00:34:08,160 --> 00:46:10,420", "I find it kind of sad", "", "6", "00:46:10,420 --> 00:57:13,700", "The dream in which Im dying", "", "7", "00:57:13,700 --> 01:08:16,470", "Are the best Ive ever had", "", "8", "01:08:16,470 --> 01:13:19,470", "I find it hard to tell you", "", "9", "01:13:19,470 --> 01:26:22,560", "Cos I find it hard to take", "", "10", "01:26:22,560 --> 01:32:25,910", "When people run in circles", "", "11", "01:32:25,910 --> 02:34:36,000", "Its a very very"]',
        "is_complex": true,
        "is_sample": true
    },

    // HTML Table
    {
        "challenge_id": 208,
        "order_index": 1,
        "expected_output": "TWO",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 2,
        "expected_output": "No such cell",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 3,
        "expected_output": "9Z",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 4,
        "expected_output": "mhPuzp82Mm",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 5,
        "expected_output": "zl0LizILrm",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 6,
        "expected_output": "No such cell",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 208,
        "order_index": 7,
        "expected_output": "No such cell",
        "is_complex": false,
        "is_sample": true
    },

    // Chess Notation
    {
        "challenge_id": 209,
        "order_index": 1,
        "expected_output": "RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 2,
        "expected_output": "RP4pr/NP4pn/BP4pb/QP4pq/KP4pk/BP4pb/NP4pn/RP4pr",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 3,
        "expected_output": "RP2q1p1/1P4p1/1PN1p2k/Q3Ppnr/1B1Pp1b1/1PN2np1/RP1bB1p1/KP4pr",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 4,
        "expected_output": "bqQnBBRr/b1Bp1NNN/Nn1RB2B/Br1rB2N/NnkBp1Bn/3r1BN1/2QpKrbn/1rRbb1pR",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 5,
        "expected_output": "QqQBnpnb/1k1n3N/n1n2bn1/1n1nQPQ1/2NB1Rnn/nR1RNP1r/2bnrrnp/Q2Bbb2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 6,
        "expected_output": "PpqQNKbP/1b1B2qk/Ppn1B1Bp/R1R1bnkR/1RNkk1bn/NbnNP1bN/pNBQ3n/2Bk2kB",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 7,
        "expected_output": "rrnnkqBN/pb1N4/3bpp2/BbN2N2/1RPbPP1r/1n1bQbNr/2KrQ1RB/p3K3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 8,
        "expected_output": "rNBbrNnK/1BnK1K2/R1pBQb1R/KRKr3n/QnKN1r1r/1NrBb2k/NN1r1Q2/2B2q2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 9,
        "expected_output": "rQkNRnPp/1QbPnb2/P2nrK1r/np2rnqK/1pBBBbqB/nn1Nk1rR/B1B1b2k/2B1K1pK",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 209,
        "order_index": 10,
        "expected_output": "bKBnNpPk/P1r2qN1/1pR1nNk1/1BBnbBq1/RKNKr1NK/1R2kQ1R/1RPB1p1B/1Rkpq2k",
        "is_complex": false,
        "is_sample": true
    },

    // Cells Joining
    {
        "challenge_id": 210,
        "order_index": 1,
        "expected_output": '["+----+--+-----+----+", "|abcd|56|!@#$%|qwer|", "|1234|78|^&=()|tyui|", "+----+--+-----+----+", "|zxcv 90|77777|stop|", "|       +-----+----+", "|asdf ~~|ghjkl|100$|", "+-------+-----+----+"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 210,
        "order_index": 2,
        "expected_output": '["+-----+-----+--------+-----------+--------+", "|fwdaw|dddd |42      |pretty long|table   |", "+-----+-----+--------+-----------+--------+", "|is   |long |ffffffff|ff         |border  |", "+-----+-----+--------+-----------+--------+", "|     |     |        |           |        |", "|     |     |        |           |        |", "+-----+-----+--------+-----------+--------+", "|empty cells are      best        there is|", "+-----------------------------------------+"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 210,
        "order_index": 3,
        "expected_output": '["+-----------------------------------------------------------------------------+", "|1 1          3       4          5 ggg                                        |", "|                                                                             |", "|    11 23 44   55555   abc defg                                              |", "|                                                                             |", "|                                  #$%#                                       |", "|                                                                             |", "|                                  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|", "|                                                                             |", "|* * 42               0 =)                                                    |", "+-----------------------------------------------------------------------------+"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 210,
        "order_index": 4,
        "expected_output": '["+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "|1|1|  |  |  |3|     |4|   |    |5|ggg                                        |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |11|23|44| |55555| |abc|defg| |                                           |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |  |  |  | |     | |   |    | |#$%#                                       |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |  |  |  | |     | |   |    | |!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "|*|*|42|  |  | |      0 =)      | |                                           |", "+-+-+--+--+--+-+                +-+-------------------------------------------+", "| | |  |  |  | |                | |#$%#                                       |", "| | |  |  |  | |  *          dd | |#$%#                                       |", "| | |  |  |  | |                | |#$%#                                       |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "|1|1|  |  |  |3|     |4|   |    |5|ggg                                        |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |11|23|44| |55555| |abc|defg| |                                           |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |  |  |  | |     | |   |    | |#$%#                                       |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "| | |  |  |  | |     | |   |    | |!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+", "|*|*|42|  |  | |     |0|=) |    | |                                           |", "+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+"]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 210,
        "order_index": 5,
        "expected_output": '["+-+-------------------------------+-------------------------------------------+", "|1|1          3       4          5|ggg                                        |", "+-+-------------------------------+-------------------------------------------+"]',
        "is_complex": true,
        "is_sample": true
    },

    // First Operation Character
    {
        "challenge_id": 211,
        "order_index": 1,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 2,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 3,
        "expected_output": "28",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 4,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 5,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 6,
        "expected_output": "17",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 211,
        "order_index": 7,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },

    // Count Elements
    {
        "challenge_id": 212,
        "order_index": 1,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 2,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 4,
        "expected_output": "4",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 5,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 6,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 7,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 8,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 9,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 10,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 11,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 12,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 212,
        "order_index": 13,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Tree Bottom
    {
        "challenge_id": 213,
        "order_index": 1,
        "expected_output": "[5, 11, 4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 2,
        "expected_output": "[1]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 3,
        "expected_output": "[1000]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 4,
        "expected_output": "[985]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 5,
        "expected_output": "[4]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 6,
        "expected_output": "[8, 9, 10, 11, 12, 13, 14, 15]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 213,
        "order_index": 7,
        "expected_output": "[34]",
        "is_complex": true,
        "is_sample": true
    },

    // Befunge-93
    {
        "challenge_id": 214,
        "order_index": 1,
        "expected_output": "1 4 9 16 25 36 49 64 81 100 ",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 214,
        "order_index": 2,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 214,
        "order_index": 3,
        "expected_output": "",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 214,
        "order_index": 4,
        "expected_output": "2 ",
        "is_complex": false,
        "is_sample": true
    },

    // Pipes Game
    {
        "challenge_id": 215,
        "order_index": 1,
        "expected_output": "19",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 2,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 3,
        "expected_output": "9",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 4,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 7,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 8,
        "expected_output": "-48",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 9,
        "expected_output": "43",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 10,
        "expected_output": "40",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 215,
        "order_index": 11,
        "expected_output": "-12",
        "is_complex": false,
        "is_sample": true
    },

    // Game 2048
    {
        "challenge_id": 216,
        "order_index": 1,
        "expected_output": "[[0,0,0,0],  [0,0,0,4],  [0,0,2,4],  [0,0,8,8]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 2,
        "expected_output": "[[0,0,0,0],  [0,0,0,0],  [0,0,4,4],  [0,0,8,4]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 3,
        "expected_output": "[[4,0,0,0],  [4,4,0,0],  [2,8,8,0],  [2,4,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 4,
        "expected_output": "[[0,0,0,0],  [0,0,0,0],  [0,0,4,0],  [0,0,8,8]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 5,
        "expected_output": "[[0,0,0,0],  [0,0,0,0],  [0,0,0,8],  [0,0,8,4]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 6,
        "expected_output": "[[2,4,8,16],  [256,128,64,32],  [512,1024,2048,4096],  [65536,32768,16384,8192]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 7,
        "expected_output": "[[4,4,0,0],  [8,2,0,0],  [8,0,0,0],  [0,0,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 8,
        "expected_output": "[[0,0,0,8],  [0,0,8,2],  [0,0,0,8],  [0,0,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 9,
        "expected_output": "[[0,0,0,0],  [0,0,0,0],  [8,0,0,0],  [8,4,0,0]]",
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 216,
        "order_index": 10,
        "expected_output": "[[0,0,0,0],  [0,0,0,0],  [0,0,0,0],  [16,4,0,0]]",
        "is_complex": true,
        "is_sample": true
    },

    // Snake Game
    {
        "challenge_id": 217,
        "order_index": 1,
        "expected_output": '[[".",".",".","."], ["X","X","X","."], [".",".",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 2,
        "expected_output": '[[".",".","X","X","."], [".",".","X","X","."], [".",".",".","X","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 3,
        "expected_output": '[[".",".",".",".","."], ["<","*","*",".","."], [".",".","*",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 4,
        "expected_output": '[[".",".","."], [".",".","."], [".",".","."], [".",".","."], [".",".","."], ["X","X","X"], ["X",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 5,
        "expected_output": '[[".",".",".",".",".",".",".",".","."], ["X","X","X","X","X","X","X",".","."], [".",".",".",".",".",".","X",".","."], [".",".",".",".","X","X","X",".","."], [".",".",".",".",".",".",".",".","."], [".",".",".",".",".",".",".",".","."], [".",".",".",".",".",".",".",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 6,
        "expected_output": '[[".",".",".",".",".",".",".",".","."], [".",".","*","*","*","*",".",".","."], [".",".","*","*",".",".",".",".","."], [".",".",".","*","*",".",".",".","."], [".",".",".",".","*",".",".",".","."], [".",".",".",".","*",".",".",".","."], [".",".",".",".","v",".",".",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 7,
        "expected_output": '[[".",".",".",".",".",".",".",".","."], [".",".","X","X","X","X",".",".","."], [".",".","X","X",".","X",".",".","."], [".",".",".",".","X","X",".",".","."], [".",".",".",".","X",".",".",".","."], [".",".",".",".","X","X","X",".","."], [".",".",".",".",".",".",".",".","."]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 217,
        "order_index": 8,
        "expected_output": '[[".",".",".",".",".",".",".",".","^"], [".",".",".",".",".",".",".",".","*"], [".",".",".",".",".",".",".",".","*"], [".",".",".",".",".",".",".",".","*"], [".",".",".",".",".",".",".",".","*"], [".",".",".",".",".",".",".",".","*"], [".",".",".",".",".",".",".",".","."]]',
        "is_complex": true,
        "is_sample": true
    },

    // Tetris Game
    {
        "challenge_id": 218,
        "order_index": 1,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 218,
        "order_index": 2,
        "expected_output": "2",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 218,
        "order_index": 3,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 218,
        "order_index": 4,
        "expected_output": "3",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 218,
        "order_index": 5,
        "expected_output": "1",
        "is_complex": false,
        "is_sample": true
    },

    // Pyraminx Puzzle
    {
        "challenge_id": 219,
        "order_index": 1,
        "expected_output": '[["Y","Y","Y","Y","R","R","R","R","G"], ["G","R","O","O","O","G","G","G","G"], ["Y","O","Y","G","O","O","G","G","Y"], ["R","O","O","R","O","Y","Y","R","R"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 219,
        "order_index": 2,
        "expected_output": '[["R","R","R","R","R","R","R","R","R"], ["G","G","G","G","G","G","G","G","G"], ["Y","Y","Y","Y","Y","Y","Y","Y","Y"], ["O","O","O","O","O","O","O","O","O"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 219,
        "order_index": 3,
        "expected_output": '[["Y","O","R","G","G","G","G","G","G"], ["G","O","G","Y","O","O","Y","Y","Y"], ["R","G","R","R","O","Y","Y","Y","Y"], ["R","R","R","R","O","O","O","O","R"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 219,
        "order_index": 4,
        "expected_output": '[["R","R","R","G","R","R","G","G","G"], ["G","O","G","G","O","O","O","G","G"], ["Y","Y","Y","Y","Y","Y","Y","Y","Y"], ["R","R","R","R","O","O","O","O","O"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 219,
        "order_index": 5,
        "expected_output": '[["A","A","A","A","A","A","A","A","A"], ["B","B","B","B","B","B","B","B","B"], ["C","C","C","C","C","C","C","C","C"], ["D","D","D","D","D","D","D","D","D"]]',
        "is_complex": true,
        "is_sample": true
    },

    // Lines Game
    {
        "challenge_id": 220,
        "order_index": 1,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 220,
        "order_index": 2,
        "expected_output": "17",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 220,
        "order_index": 3,
        "expected_output": "6",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 220,
        "order_index": 4,
        "expected_output": "36",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 220,
        "order_index": 5,
        "expected_output": "17",
        "is_complex": false,
        "is_sample": true
    },
    {
        "challenge_id": 220,
        "order_index": 6,
        "expected_output": "0",
        "is_complex": false,
        "is_sample": true
    },

    // Fractal
    {
        "challenge_id": 221,
        "order_index": 1,
        "expected_output": '[[" ","_"," "], [" ","_","|"]]',
        "is_complex": true,
        "is_sample": true
    },
    {
        "challenge_id": 221,
        "order_index": 2,
        "expected_output": '[[" ","_"," "," "," ","_"," "], [" ","_","|"," ","|","_"," "], ["|"," "," ","_"," "," ","|"], ["|","_","|"," ","|","_","|"]]',
        "is_complex": true,
        "is_sample": true
    },

    // 

]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('tests', tests, batchSize)
}