const test_inputs = [
    // Into 
    // add
    { test_id: 1, input_type: 'number', input_name: 'param1', input_value: '1', },
    { test_id: 1, input_type: 'number', input_name: 'param2', input_value: '2', },
    { test_id: 2, input_type: 'number', input_name: 'param1', input_value: '0', },
    { test_id: 2, input_type: 'number', input_name: 'param2', input_value: '1000', },
    { test_id: 3, input_type: 'number', input_name: 'param1', input_value: '2', },
    { test_id: 3, input_type: 'number', input_name: 'param2', input_value: '-39', },
    { test_id: 4, input_type: 'number', input_name: 'param1', input_value: '99', },
    { test_id: 4, input_type: 'number', input_name: 'param2', input_value: '100', },
    { test_id: 5, input_type: 'number', input_name: 'param1', input_value: '-100', },
    { test_id: 5, input_type: 'number', input_name: 'param2', input_value: '100', },
    { test_id: 6, input_type: 'number', input_name: 'param1', input_value: '-1000', },
    { test_id: 6, input_type: 'number', input_name: 'param2', input_value: '-1000', },

    // centuryFromYear
    { test_id: 7, input_type: 'number', input_name: 'year', input_value: '1905', },
    { test_id: 8, input_type: 'number', input_name: 'year', input_value: '1700', },
    { test_id: 9, input_type: 'number', input_name: 'year', input_value: '1988', },
    { test_id: 10, input_type: 'number', input_name: 'year', input_value: '2000', },
    { test_id: 11, input_type: 'number', input_name: 'year', input_value: '2001', },
    { test_id: 12, input_type: 'number', input_name: 'year', input_value: '200', },
    { test_id: 13, input_type: 'number', input_name: 'year', input_value: '374', },
    { test_id: 14, input_type: 'number', input_name: 'year', input_value: '45', },
    { test_id: 15, input_type: 'number', input_name: 'year', input_value: '8', },

    // checkPalindrome
    { test_id: 16, input_type: 'string', input_name: 'inputString', input_value: 'aabaa', },
    { test_id: 17, input_type: 'string', input_name: 'inputString', input_value: 'abac', },
    { test_id: 18, input_type: 'string', input_name: 'inputString', input_value: 'a', },
    { test_id: 19, input_type: 'string', input_name: 'inputString', input_value: 'az', },
    { test_id: 20, input_type: 'string', input_name: 'inputString', input_value: 'abacaba', },
    { test_id: 21, input_type: 'string', input_name: 'inputString', input_value: 'z', },
    { test_id: 22, input_type: 'string', input_name: 'inputString', input_value: 'aaabaaaa', },
    { test_id: 23, input_type: 'string', input_name: 'inputString', input_value: 'zzzazzazz', },
    { test_id: 24, input_type: 'string', input_name: 'inputString', input_value: 'hlbeeykoqqqqokyeeblh', },
    { test_id: 25, input_type: 'string', input_name: 'inputString', input_value: 'hlbeeykoqqqokyeeblh', },

    // adjacentElementsProduct
    { test_id: 26, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[3, 6, -2, -5, 7, 3]', },
    { test_id: 27, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-1, -2]', },
    { test_id: 28, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[5, 1, 2, 3, 1, 4]', },
    { test_id: 29, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[1, 2, 3, 0]', },
    { test_id: 30, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[9, 5, 10, 2, 24, -1, -48]', },
    { test_id: 31, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[5, 6, -4, 2, 3, 2, -23]', },
    { test_id: 32, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[4, 1, 2, 3, 1, 5]', },
    { test_id: 33, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-23, 4, -3, 8, -12]', },
    { test_id: 34, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[1, 0, 1, 0, 1000]', },

    // shapeArea
    { test_id: 35, input_type: 'number', input_name: 'n', input_value: '2', },
    { test_id: 36, input_type: 'number', input_name: 'n', input_value: '3', },
    { test_id: 37, input_type: 'number', input_name: 'n', input_value: '1', },
    { test_id: 38, input_type: 'number', input_name: 'n', input_value: '5', },
    { test_id: 39, input_type: 'number', input_name: 'n', input_value: '7000', },
    { test_id: 40, input_type: 'number', input_name: 'n', input_value: '8000', },
    { test_id: 41, input_type: 'number', input_name: 'n', input_value: '9999', },
    { test_id: 42, input_type: 'number', input_name: 'n', input_value: '9998', },
    { test_id: 43, input_type: 'number', input_name: 'n', input_value: '8999', },
    { test_id: 44, input_type: 'number', input_name: 'n', input_value: '100', },

    // Make Array Consecutive 2
    { test_id: 45, input_type: 'arrayOfIntegers', input_name: 'statues', input_value: '[6, 2, 3, 8]', },
    { test_id: 46, input_type: 'arrayOfIntegers', input_name: 'statues', input_value: '[0, 3]', },
    { test_id: 47, input_type: 'arrayOfIntegers', input_name: 'statues', input_value: '[5, 4, 6]', },
    { test_id: 48, input_type: 'arrayOfIntegers', input_name: 'statues', input_value: '[6, 3]', },
    { test_id: 49, input_type: 'arrayOfIntegers', input_name: 'statues', input_value: '[1]', },

    // almostIncreasingSequence
    { test_id: 50, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 3, 2, 1]', },
    { test_id: 51, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 3, 2]', },
    { test_id: 52, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 1, 2]', },
    { test_id: 53, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[3, 6, 5, 8, 10, 20, 15]', },
    { test_id: 54, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 1, 2, 3, 4, 4]', },
    { test_id: 55, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 4, 10, 4, 2]', },
    { test_id: 56, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[10, 1, 2, 3, 4, 5]', },
    { test_id: 57, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 1, 1, 2, 3]', },
    { test_id: 58, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[0, -2, 5, 6]', },
    { test_id: 59, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 3, 4, 5, 3, 5, 6]', },
    { test_id: 60, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[40, 50, 60, 10, 20, 30]', },
    { test_id: 61, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 1]', },
    { test_id: 62, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 5, 3, 5]', },
    { test_id: 63, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 5, 5, 5]', },
    { test_id: 64, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[10, 1, 2, 3, 4, 5, 6, 1]', },
    { test_id: 65, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 3, 4, 3, 6]', },
    { test_id: 66, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[1, 2, 3, 4, 99, 5, 6]', },
    { test_id: 67, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[123, -17, -5, 1, 2, 3, 12, 43, 45]', },
    { test_id: 68, input_type: 'arrayOfIntegers', input_name: 'sequence', input_value: '[3, 5, 67, 98, 3]', },

    // matrixElementsSum
    { test_id: 69, input_type: 'matrix', input_name: 'matrix', input_value: `[[0,1,1,2], [0,5,0,0], [2,0,3,3]]`, },
    { test_id: 70, input_type: 'matrix', input_name: 'matrix', input_value: `[[1,1,1,0], [0,5,0,1], [2,1,3,10]]`, },
    { test_id: 71, input_type: 'matrix', input_name: 'matrix', input_value: `[[1,1,1], [2,2,2], [3,3,3]]`, },
    { test_id: 72, input_type: 'matrix', input_name: 'matrix', input_value: `[[0]]`, },
    { test_id: 73, input_type: 'matrix', input_name: 'matrix', input_value: `[[1,0,3], [0,2,1], [1,2,0]]`, },
    { test_id: 74, input_type: 'matrix', input_name: 'matrix', input_value: `[[1], [5], [0], [2]]`, },
    { test_id: 75, input_type: 'matrix', input_name: 'matrix', input_value: `[[1,2,3,4,5]]`, },
    { test_id: 76, input_type: 'matrix', input_name: 'matrix', input_value: `[[2], [5], [10]]`, },
    { test_id: 77, input_type: 'matrix', input_name: 'matrix', input_value: `[[4,0,1], [10,7,0], [0,0,0], [9,1,2]]`, },
    { test_id: 78, input_type: 'matrix', input_name: 'matrix', input_value: `[[1]]`, },

    // All Longest Strings
    { test_id: 79, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["aba", "aa", "ad", "vcd", "aba"]', },
    { test_id: 80, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["aa"]', },
    { test_id: 81, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["abc", "eeee", "abcd", "dcd"]', },
    { test_id: 82, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]', },
    { test_id: 83, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["enyky", "benyky", "yely", "varennyky"]', },
    { test_id: 84, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["abacaba", "abacab", "abac", "xxxxxx"]', },
    { test_id: 85, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["young", "yooooooung", "hot", "or", "not", "come", "on", "fire", "water", "watermelon"]', },
    { test_id: 86, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["onsfnib", "aokbcwthc", "jrfcw"]', },
    { test_id: 87, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["lbgwyqkry"]', },
    { test_id: 88, input_type: 'arrayOfStrings', input_name: 'inputArray', input_value: '["i"]', },

    // commonCharacterCount
    { test_id: 89, input_type: 'string', input_name: 's1', input_value: 'aabcc', },
    { test_id: 89, input_type: 'string', input_name: 's2', input_value: 'adcaa', },
    { test_id: 90, input_type: 'string', input_name: 's1', input_value: 'zzzz', },
    { test_id: 90, input_type: 'string', input_name: 's2', input_value: 'zzzzzzz', },
    { test_id: 91, input_type: 'string', input_name: 's1', input_value: 'abca', },
    { test_id: 91, input_type: 'string', input_name: 's2', input_value: 'xyzbac', },
    { test_id: 92, input_type: 'string', input_name: 's1', input_value: 'a', },
    { test_id: 92, input_type: 'string', input_name: 's2', input_value: 'b', },
    { test_id: 93, input_type: 'string', input_name: 's1', input_value: 'a', },
    { test_id: 93, input_type: 'string', input_name: 's2', input_value: 'aaa', },

    // isLucky
    { test_id: 94, input_type: 'number', input_name: 'n', input_value: '1230', },
    { test_id: 95, input_type: 'number', input_name: 'n', input_value: '239017', },
    { test_id: 96, input_type: 'number', input_name: 'n', input_value: '134008', },
    { test_id: 97, input_type: 'number', input_name: 'n', input_value: '10', },
    { test_id: 98, input_type: 'number', input_name: 'n', input_value: '11', },
    { test_id: 99, input_type: 'number', input_name: 'n', input_value: '1010', },
    { test_id: 100, input_type: 'number', input_name: 'n', input_value: '261534', },
    { test_id: 101, input_type: 'number', input_name: 'n', input_value: '100000', },
    { test_id: 102, input_type: 'number', input_name: 'n', input_value: '999999', },
    { test_id: 103, input_type: 'number', input_name: 'n', input_value: '123321', },

    // Sort by Height
    { test_id: 104, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[-1, 150, 190, 170, -1, -1, 160, 180]', },
    { test_id: 105, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[-1, -1, -1, -1, -1]', },
    { test_id: 106, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[-1]', },
    { test_id: 107, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[4, 2, 9, 11, 2, 16]', },
    { test_id: 108, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]', },
    { test_id: 109, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]', },

    // reverseInParentheses
    { test_id: 110, input_type: 'string', input_name: 'inputString', input_value: '(bar)', },
    { test_id: 111, input_type: 'string', input_name: 'inputString', input_value: 'foo(bar)baz', },
    { test_id: 112, input_type: 'string', input_name: 'inputString', input_value: 'foo(bar)baz(blim)', },
    { test_id: 113, input_type: 'string', input_name: 'inputString', input_value: 'foo(bar(baz))blim', },
    { test_id: 114, input_type: 'string', input_name: 'inputString', input_value: '', },
    { test_id: 115, input_type: 'string', input_name: 'inputString', input_value: '()', },
    { test_id: 116, input_type: 'string', input_name: 'inputString', input_value: '(abc)d(efg)', },

    // alternatingSums
    { test_id: 117, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[50, 60, 60, 45, 70]', },
    { test_id: 118, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[100, 50]', },
    { test_id: 119, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[80]', },
    { test_id: 120, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[100, 50, 50, 100]', },
    { test_id: 121, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[100, 51, 50, 100]', },

    // Add Border
    { test_id: 122, input_type: 'arrayOfStrings', input_name: 'picture', input_value: '["abc", "ded"]', },
    { test_id: 123, input_type: 'arrayOfStrings', input_name: 'picture', input_value: '["a"]', },
    { test_id: 124, input_type: 'arrayOfStrings', input_name: 'picture', input_value: '["aa", "**", "zz"]', },
    { test_id: 125, input_type: 'arrayOfStrings', input_name: 'picture', input_value: '["abcde", "fghij", "klmno", "pqrst", "uvwxy"]', },
    { test_id: 126, input_type: 'arrayOfStrings', input_name: 'picture', input_value: '["wzy**"]', },

    // Are Similar?
    { test_id: 127, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 3]', },
    { test_id: 127, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[1, 2, 3]', },
    { test_id: 128, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 3]', },
    { test_id: 128, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[2, 1, 3]', },
    { test_id: 129, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 2]', },
    { test_id: 129, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[2, 1, 1]', },
    { test_id: 130, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 1, 2]', },
    { test_id: 130, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[2, 2, 1, 1]', },
    { test_id: 131, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 1, 2, 2, 1]', },
    { test_id: 131, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[2, 2, 1, 1, 2, 1]', },
    { test_id: 132, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 1, 4]', },
    { test_id: 132, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[1, 2, 3]', },
    { test_id: 133, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[1, 2, 3]', },
    { test_id: 133, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[1, 10, 2]', },
    { test_id: 134, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[2, 3, 1]', },
    { test_id: 134, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[1, 3, 2]', },
    { test_id: 135, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[2, 3, 9]', },
    { test_id: 135, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[10, 3, 2]', },
    { test_id: 136, input_type: 'arrayOfIntegers', input_name: 'a', input_value: '[832, 998, 148, 570, 533, 561, 894, 147, 455, 279]', },
    { test_id: 136, input_type: 'arrayOfIntegers', input_name: 'b', input_value: '[832, 570, 148, 998, 533, 561, 455, 147, 894, 279]', },

    // arrayChange
    { test_id: 137, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[1, 1, 1]', },
    { test_id: 138, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-1000, 0, -2, 0]', },
    { test_id: 139, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[2, 1, 10, 1]', },
    { test_id: 140, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]', },
    { test_id: 141, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[3122, -645, 2616, 13213, -8069]', },
    { test_id: 142, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-787, -773, -93, 867, -28, 118, 372, 255, 355, 598, -179, -752, 794, 961, -84, 296, -714, 14, 666, -265, -905, 942, -691, -379, -698, -650, 637, 523, 709, -674, 574, -239, 805, -434, 597, -677, 664, 384, 726, -389, -387, 772, -603, 685, 249, 446, -631, 454, 983, 867, -158, 932, -440, 891, -12, 400, -916, 503, 185, -802, -255, 207, -952, -506, -689, 425, 747, -907, -30, 102, 553, 981, -664, 75, -957, -42, 99, -750, -277, 686, -884, -972, 470, 32, 439, 163, 887, 895, -555, -654, 793, 333, 143, 73, 181, -512, -915, -68, 542, 799]', },
    { test_id: 143, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-28943, -29728, -24726, -15090, -2555, -9551, -11025, 36442, -23240, -46093, 48516, 44580, -21573, 39172, -38017, -19354, -13460, 38212, -35646, -22288, 36832, -33115, 39055, -15935, -19300, -10419, -18548, 21742, -32032, 27988, -45323, 27454, -5683, -14209, -4168, 51188, 45552, 9899, 49241, -25939, -8344, -25788, 6808, 6931, 6145, -30802, -518, -42362]', },
    { test_id: 144, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[9796, 1283, -2825, 3870, -6727, -8616, -10191, -7727, 7074, 1580, -4583, 162, 2980, -3861, 9452, 8145, 1222, -1125, 5142, -5657, -974, -986, -9627, 5244, 8866, 3336, -9946, -5271, 10582, 3013, 8030, 4471, -3420, 9496, -3533, -8030, 10007, 2549, -8195, 7119, 302, -5322, -3537, 209, -8134, -9176, 6336, -1771, 9851, 3644, 9629, -2603, 3988, 10579, 2221, 1101, 1465, 5002, -6203, -8864, 596, 6005, 4554, 8526, 2178, -5447, -232, -9734, 7402, -3984, -7161, -2139, -3181, 10445, 4535, 6926, 7156]', },
    { test_id: 145, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[-24875, -6401, 58256, 44456, 2244, -25333, -42389, -5975, 7650, -46343, -62011, -55366, 7802, -37699, 15461, 13309, -58664, 54557, 56324, -34397, -33024, -21934, -18861, -23196, 56542, -63986, 59833, -45610, -16948, 399, -7405, 54701, -57348, -32627, 65534, 615]', },
    { test_id: 146, input_type: 'arrayOfIntegers', input_name: 'inputArray', input_value: '[22121, 42080, -51776, -28528, 39895, -50842, 25463, 46187, -29518, 42293, -25615, -47412, 24945, -2630, -12717, -23773, -47824, -7768, -23620, -30270, -51644, 42829, 27609, -40734, 2142, 20285, 29665, -36557, -24074, -11996, 30511, 17104, 4360, -41163, 6814, 959, 26613, -15121, -17355, 28424, -11305, 33175, -8585, 23649, -18428, 16770, 14095, 38766, -22425, -45139, -5836, -28668, -15123, -35450, 41353, 11103, -29233, -51990, -14958, 45944, 20841, -34149, 34720, -51760, 23519, -46257, 40985, -32615, -43378, 14243, -24731, 1311, -4236, -24885, 41713, -45195, -14683, 47765, 26904, -51741, 38051, 13429, 38189, -45812, -52474, 14936, 6582, -26313, 4692, 12313, -37502, -40673, 5799, 23264, 33617, -50938, 26268, -25548, -22353, -15175, -21568, 18656, 19208, 20674, 41228, -42538, -45085, -32356, -39901, -39585, -50690, 2859, -4079, 29823, 28849, -2142, -16613, 23378, 36363, 31780, -40379, 7489, -13324, -22377, 35661, -27141, -42727, 10122, -40385, -19765, 33913, -10504, -4715, -18190, 41430, -19134, 32646, 25839, 783, 32941, -25142]', },

    // palindromeRearranging
    { test_id: 147, input_type: 'string', input_name: 'inputString', input_value: 'aabb', },
    { test_id: 148, input_type: 'string', input_name: 'inputString', input_value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc', },
    { test_id: 149, input_type: 'string', input_name: 'inputString', input_value: 'abbcabb', },
    { test_id: 150, input_type: 'string', input_name: 'inputString', input_value: 'zyyzzzzz', },
    { test_id: 151, input_type: 'string', input_name: 'inputString', input_value: 'z', },
    { test_id: 152, input_type: 'string', input_name: 'inputString', input_value: 'zaa', },
    { test_id: 153, input_type: 'string', input_name: 'inputString', input_value: 'abca', },
    { test_id: 154, input_type: 'string', input_name: 'inputString', input_value: 'abcad', },
    { test_id: 155, input_type: 'string', input_name: 'inputString', input_value: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa', },
    { test_id: 156, input_type: 'string', input_name: 'inputString', input_value: 'abdhuierf', },

    // areEquallyStrong
    { test_id: 157, input_type: 'number', input_name: 'yourLeft', input_value: '10', },
    { test_id: 158, input_type: 'number', input_name: 'yourLeft', input_value: '15', },
    { test_id: 159, input_type: 'number', input_name: 'yourLeft', input_value: '15', },
    { test_id: 160, input_type: 'number', input_name: 'yourLeft', input_value: '10', },
    { test_id: 161, input_type: 'number', input_name: 'yourLeft', input_value: '10', },
    { test_id: 162, input_type: 'number', input_name: 'yourLeft', input_value: '10', },
    { test_id: 163, input_type: 'number', input_name: 'yourLeft', input_value: '5', },
    { test_id: 164, input_type: 'number', input_name: 'yourLeft', input_value: '20', },
    { test_id: 165, input_type: 'number', input_name: 'yourLeft', input_value: '5', },
    { test_id: 166, input_type: 'number', input_name: 'yourLeft', input_value: '1', },
    { test_id: 167, input_type: 'number', input_name: 'yourLeft', input_value: '5', },
    { test_id: 168, input_type: 'number', input_name: 'yourLeft', input_value: '10', },
    { test_id: 169, input_type: 'number', input_name: 'yourLeft', input_value: '1', },
    { test_id: 170, input_type: 'number', input_name: 'yourLeft', input_value: '0', },

    { test_id: 157, input_type: 'number', input_name: 'yourRight', input_value: '15', },
    { test_id: 158, input_type: 'number', input_name: 'yourRight', input_value: '10', },
    { test_id: 159, input_type: 'number', input_name: 'yourRight', input_value: '10', },
    { test_id: 160, input_type: 'number', input_name: 'yourRight', input_value: '5', },
    { test_id: 161, input_type: 'number', input_name: 'yourRight', input_value: '15', },
    { test_id: 162, input_type: 'number', input_name: 'yourRight', input_value: '20', },
    { test_id: 163, input_type: 'number', input_name: 'yourRight', input_value: '20', },
    { test_id: 164, input_type: 'number', input_name: 'yourRight', input_value: '15', },
    { test_id: 165, input_type: 'number', input_name: 'yourRight', input_value: '10', },
    { test_id: 166, input_type: 'number', input_name: 'yourRight', input_value: '10', },
    { test_id: 167, input_type: 'number', input_name: 'yourRight', input_value: '5', },
    { test_id: 168, input_type: 'number', input_name: 'yourRight', input_value: '5', },
    { test_id: 169, input_type: 'number', input_name: 'yourRight', input_value: '1', },
    { test_id: 170, input_type: 'number', input_name: 'yourRight', input_value: '10', },

    { test_id: 157, input_type: 'number', input_name: 'friendsLeft', input_value: '15', },
    { test_id: 158, input_type: 'number', input_name: 'friendsLeft', input_value: '15', },
    { test_id: 159, input_type: 'number', input_name: 'friendsLeft', input_value: '15', },
    { test_id: 160, input_type: 'number', input_name: 'friendsLeft', input_value: '5', },
    { test_id: 161, input_type: 'number', input_name: 'friendsLeft', input_value: '5', },
    { test_id: 162, input_type: 'number', input_name: 'friendsLeft', input_value: '10', },
    { test_id: 163, input_type: 'number', input_name: 'friendsLeft', input_value: '20', },
    { test_id: 164, input_type: 'number', input_name: 'friendsLeft', input_value: '5', },
    { test_id: 165, input_type: 'number', input_name: 'friendsLeft', input_value: '5', },
    { test_id: 166, input_type: 'number', input_name: 'friendsLeft', input_value: '10', },
    { test_id: 167, input_type: 'number', input_name: 'friendsLeft', input_value: '10', },
    { test_id: 168, input_type: 'number', input_name: 'friendsLeft', input_value: '10', },
    { test_id: 169, input_type: 'number', input_name: 'friendsLeft', input_value: '1', },
    { test_id: 170, input_type: 'number', input_name: 'friendsLeft', input_value: '10', },

    { test_id: 157, input_type: 'number', input_name: 'friendsRight', input_value: '10', },
    { test_id: 158, input_type: 'number', input_name: 'friendsRight', input_value: '10', },
    { test_id: 159, input_type: 'number', input_name: 'friendsRight', input_value: '9', },
    { test_id: 160, input_type: 'number', input_name: 'friendsRight', input_value: '10', },
    { test_id: 161, input_type: 'number', input_name: 'friendsRight', input_value: '20', },
    { test_id: 162, input_type: 'number', input_name: 'friendsRight', input_value: '20', },
    { test_id: 163, input_type: 'number', input_name: 'friendsRight', input_value: '5', },
    { test_id: 164, input_type: 'number', input_name: 'friendsRight', input_value: '20', },
    { test_id: 165, input_type: 'number', input_name: 'friendsRight', input_value: '10', },
    { test_id: 166, input_type: 'number', input_name: 'friendsRight', input_value: '0', },
    { test_id: 167, input_type: 'number', input_name: 'friendsRight', input_value: '10', },
    { test_id: 168, input_type: 'number', input_name: 'friendsRight', input_value: '6', },
    { test_id: 169, input_type: 'number', input_name: 'friendsRight', input_value: '1', },
    { test_id: 170, input_type: 'number', input_name: 'friendsRight', input_value: '0', },

    /// I GOT BORED PROCESS IS AUTOMATED FROM HERE ///

    // arrayMaximalAdjacentDifference
    {
        "test_id": 171,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 4, 1, 0]"
    },
    {
        "test_id": 172,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1, 1, 1]"
    },
    {
        "test_id": 173,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[-1, 4, 10, 3, -2]"
    },
    {
        "test_id": 174,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[10, 11, 13]"
    },
    {
        "test_id": 175,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[-2, -2, -2, -2, -2]"
    },
    {
        "test_id": 176,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[-1, 1, -3, -4]"
    },
    {
        "test_id": 177,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[-14, 15, -15]"
    },

    // isIPv4Address
    {
        "test_id": 178,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "172.16.254.1"
    },
    {
        "test_id": 179,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "172.316.254.1"
    },
    {
        "test_id": 180,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": ".254.255.0"
    },
    {
        "test_id": 181,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1.1.1.1a"
    },
    {
        "test_id": 182,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1"
    },
    {
        "test_id": 183,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0.254.255.0"
    },
    {
        "test_id": 184,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1.23.256.255."
    },
    {
        "test_id": 185,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1.23.256.."
    },
    {
        "test_id": 186,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0..1.0"
    },
    {
        "test_id": 187,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "64.233.161.00"
    },
    {
        "test_id": 188,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "64.00.161.131"
    },
    {
        "test_id": 189,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "01.233.161.131"
    },
    {
        "test_id": 190,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "35..36.9.9.0"
    },
    {
        "test_id": 191,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1.1.1.1.1"
    },
    {
        "test_id": 192,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1.256.1.1"
    },
    {
        "test_id": 193,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "a0.1.1.1"
    },
    {
        "test_id": 194,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0.1.1.256"
    },
    {
        "test_id": 195,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "129380129831213981.255.255.255"
    },
    {
        "test_id": 196,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "255.255.255.255abcdekjhf"
    },
    {
        "test_id": 197,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "7283728"
    },
    {
        "test_id": 198,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0..1.0.0"
    },

    // avoidObstacles
    {
        "test_id": 199,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[5, 3, 6, 7, 9]"
    },
    {
        "test_id": 200,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 3]"
    },
    {
        "test_id": 201,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 4, 10, 6, 2]"
    },
    {
        "test_id": 202,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1000, 999]"
    },
    {
        "test_id": 203,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[19, 32, 11, 23]"
    },
    {
        "test_id": 204,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[5, 8, 9, 13, 14]"
    },

    // Box Blur
    {
        "test_id": 205,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[1, 1, 1],  [1, 7, 1],  [1, 1, 1]]"
    },
    {
        "test_id": 206,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[0, 18, 9],  [27, 9, 0],  [81, 63, 45]]"
    },
    {
        "test_id": 207,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9],  [27, 54, 9, 0],  [81, 63, 72, 45]]"
    },
    {
        "test_id": 208,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[7, 4, 0, 1],  [5, 6, 2, 2],  [6, 10, 7, 8],  [1, 4, 2, 0]]"
    },
    {
        "test_id": 209,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9, 9, 45, 27],  [27, 0, 54, 9, 0, 63, 90],  [81, 63, 72, 45, 18, 27, 0],  [0, 0, 9, 81, 27, 18, 45],  [45, 45, 27, 27, 90, 81, 72],  [45, 18, 9, 0, 9, 18, 45],  [27, 81, 36, 63, 63, 72, 81]]"
    },
    {
        "test_id": 210,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9, 9, 45, 27],  [27, 0, 254, 9, 0, 63, 90],  [81, 255, 72, 45, 18, 27, 0],  [0, 0, 9, 81, 27, 18, 45],  [45, 45, 227, 227, 90, 81, 72],  [45, 18, 9, 255, 9, 18, 45],  [27, 81, 36, 127, 255, 72, 81]]"
    },

    // Minesweeper
    {
        "test_id": 211,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false, false],  [false, true, false],  [false, false, false]]"
    },
    {
        "test_id": 212,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, false],  [false, false, false]]"
    },
    {
        "test_id": 213,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false, false, true],  [false, false, true, false],  [true, true, false, true]]"
    },
    {
        "test_id": 214,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, true, true],  [true, true, true],  [true, true, true]]"
    },
    {
        "test_id": 215,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, true, true, false],  [true, true, false, true],  [false, false, true, false]]"
    },
    {
        "test_id": 216,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false],  [true, false],  [false, true],  [false, false],  [false, false]]"
    },

    // Array Replace
    {
        "test_id": 217,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1]"
    },
    {
        "test_id": 217,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "1"
    },
    {
        "test_id": 217,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "3"
    },
    {
        "test_id": 218,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 3, 4, 5]"
    },
    {
        "test_id": 218,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 218,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "0"
    },
    {
        "test_id": 219,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1, 1]"
    },
    {
        "test_id": 219,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "1"
    },
    {
        "test_id": 219,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "10"
    },
    {
        "test_id": 220,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1]"
    },
    {
        "test_id": 220,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "2"
    },
    {
        "test_id": 220,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "1"
    },
    {
        "test_id": 221,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1]"
    },
    {
        "test_id": 221,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "2"
    },
    {
        "test_id": 221,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "2"
    },
    {
        "test_id": 222,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[3, 1]"
    },
    {
        "test_id": 222,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 222,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },
    {
        "test_id": 223,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[10, 10]"
    },
    {
        "test_id": 223,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "0"
    },
    {
        "test_id": 223,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },
    {
        "test_id": 224,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 1]"
    },
    {
        "test_id": 224,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 224,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },

    // evenDigitsOnly
    {
        "test_id": 225,
        "input_type": "number",
        "input_name": "n",
        "input_value": "248622"
    },
    {
        "test_id": 226,
        "input_type": "number",
        "input_name": "n",
        "input_value": "642386"
    },
    {
        "test_id": 227,
        "input_type": "number",
        "input_name": "n",
        "input_value": "248842"
    },
    {
        "test_id": 228,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 229,
        "input_type": "number",
        "input_name": "n",
        "input_value": "8"
    },
    {
        "test_id": 230,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2462487"
    },
    {
        "test_id": 231,
        "input_type": "number",
        "input_name": "n",
        "input_value": "468402800"
    },
    {
        "test_id": 232,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2468428"
    },
    {
        "test_id": 233,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5468428"
    },
    {
        "test_id": 234,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7468428"
    },

    // variableName
    {
        "test_id": 235,
        "input_type": "string",
        "input_name": "name",
        "input_value": "var_1__Int"
    },
    {
        "test_id": 236,
        "input_type": "string",
        "input_name": "name",
        "input_value": "qq-q"
    },
    {
        "test_id": 237,
        "input_type": "string",
        "input_name": "name",
        "input_value": "2w2"
    },
    {
        "test_id": 238,
        "input_type": "string",
        "input_name": "name",
        "input_value": " variable"
    },
    {
        "test_id": 239,
        "input_type": "string",
        "input_name": "name",
        "input_value": "va[riable0"
    },
    {
        "test_id": 240,
        "input_type": "string",
        "input_name": "name",
        "input_value": "variable0"
    },
    {
        "test_id": 241,
        "input_type": "string",
        "input_name": "name",
        "input_value": "a"
    },
    {
        "test_id": 242,
        "input_type": "string",
        "input_name": "name",
        "input_value": "_Aas_23"
    },
    {
        "test_id": 243,
        "input_type": "string",
        "input_name": "name",
        "input_value": "a a_2"
    },
    {
        "test_id": 244,
        "input_type": "string",
        "input_name": "name",
        "input_value": "0ss"
    },

    // alphabeticShift
    {
        "test_id": 245,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "crazy"
    },
    {
        "test_id": 246,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "z"
    },
    {
        "test_id": 247,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aaaabbbccd"
    },
    {
        "test_id": 248,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "fuzzy"
    },
    {
        "test_id": 249,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "codesignal"
    },

    // chessBoardCellColor
    {
        "test_id": 250,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "A1"
    },
    {
        "test_id": 250,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "C3"
    },
    {
        "test_id": 251,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "A1"
    },
    {
        "test_id": 251,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "H3"
    },
    {
        "test_id": 252,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "A1"
    },
    {
        "test_id": 252,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "A2"
    },
    {
        "test_id": 253,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "A1"
    },
    {
        "test_id": 253,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "B2"
    },
    {
        "test_id": 254,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "B3"
    },
    {
        "test_id": 254,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "H8"
    },
    {
        "test_id": 255,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "C3"
    },
    {
        "test_id": 255,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "B5"
    },
    {
        "test_id": 256,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "G5"
    },
    {
        "test_id": 256,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "E7"
    },
    {
        "test_id": 257,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "C8"
    },
    {
        "test_id": 257,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "H8"
    },
    {
        "test_id": 258,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "D2"
    },
    {
        "test_id": 258,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "D2"
    },
    {
        "test_id": 259,
        "input_type": "string",
        "input_name": "cell1",
        "input_value": "A2"
    },
    {
        "test_id": 259,
        "input_type": "string",
        "input_name": "cell2",
        "input_value": "A5"
    },

    // Circle of Numbers
    {
        "test_id": 260,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 260,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "2"
    },
    {
        "test_id": 261,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 261,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "7"
    },
    {
        "test_id": 262,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 262,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "1"
    },
    {
        "test_id": 263,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 263,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "3"
    },
    {
        "test_id": 264,
        "input_type": "number",
        "input_name": "n",
        "input_value": "18"
    },
    {
        "test_id": 264,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "6"
    },
    {
        "test_id": 265,
        "input_type": "number",
        "input_name": "n",
        "input_value": "12"
    },
    {
        "test_id": 265,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "10"
    },
    {
        "test_id": 266,
        "input_type": "number",
        "input_name": "n",
        "input_value": "18"
    },
    {
        "test_id": 266,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "5"
    },

    // depositProfit
    {
        "test_id": 267,
        "input_type": "number",
        "input_name": "deposit",
        "input_value": "100"
    },
    {
        "test_id": 267,
        "input_type": "number",
        "input_name": "rate",
        "input_value": "20"
    },
    {
        "test_id": 267,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "170"
    },
    {
        "test_id": 268,
        "input_type": "number",
        "input_name": "deposit",
        "input_value": "100"
    },
    {
        "test_id": 268,
        "input_type": "number",
        "input_name": "rate",
        "input_value": "1"
    },
    {
        "test_id": 268,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "101"
    },
    {
        "test_id": 269,
        "input_type": "number",
        "input_name": "deposit",
        "input_value": "1"
    },
    {
        "test_id": 269,
        "input_type": "number",
        "input_name": "rate",
        "input_value": "100"
    },
    {
        "test_id": 269,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "64"
    },
    {
        "test_id": 270,
        "input_type": "number",
        "input_name": "deposit",
        "input_value": "20"
    },
    {
        "test_id": 270,
        "input_type": "number",
        "input_name": "rate",
        "input_value": "20"
    },
    {
        "test_id": 270,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "50"
    },
    {
        "test_id": 271,
        "input_type": "number",
        "input_name": "deposit",
        "input_value": "50"
    },
    {
        "test_id": 271,
        "input_type": "number",
        "input_name": "rate",
        "input_value": "25"
    },
    {
        "test_id": 271,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "100"
    },

    // absoluteValuesSumMinimization
    {
        "test_id": 272,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 4, 7]"
    },
    {
        "test_id": 273,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 3]"
    },
    {
        "test_id": 274,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 3, 4]"
    },
    {
        "test_id": 275,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[23]"
    },
    {
        "test_id": 276,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-10, -10, -10, -10, -10, -9, -9, -9, -8, -8, -7, -6, -5, -4, -3, -2, -1, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]"
    },
    {
        "test_id": 277,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-4, -1]"
    },
    {
        "test_id": 278,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[0, 7, 9]"
    },
    {
        "test_id": 279,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1000000, -10000, -10000, -1000, -100, -10, -1, 0, 1, 10, 100, 1000, 10000, 100000, 1000000]"
    },

    // stringsRearrangement
    {
        "test_id": 280,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aba", "bbb", "bab"]'
    },
    {
        "test_id": 281,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["ab", "bb", "aa"]'
    },
    {
        "test_id": 282,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["q", "q"]'
    },
    {
        "test_id": 283,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["zzzzab", "zzzzbb", "zzzzaa"]'
    },
    {
        "test_id": 284,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["ab", "ad", "ef", "eg"]'
    },
    {
        "test_id": 285,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc", "bef", "bcc", "bec", "bbc", "bdc"]'
    },
    {
        "test_id": 286,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc", "abx", "axx", "abc"]'
    },
    {
        "test_id": 287,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc", "abx", "axx", "abx", "abc"]'
    },
    {
        "test_id": 288,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["f", "g", "a", "h"]'
    },
    {
        "test_id": 289,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["ff", "gf", "af", "ar", "hf"]'
    },
    {
        "test_id": 290,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["a", "b", "c"]'
    },


    // extractEachKth
    {
        "test_id": 291,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
    },
    {
        "test_id": 291,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 292,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1, 1, 1, 1]"
    },
    {
        "test_id": 292,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1"
    },
    {
        "test_id": 293,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1, 2, 1, 2]"
    },
    {
        "test_id": 293,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 294,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1, 2, 1, 2]"
    },
    {
        "test_id": 294,
        "input_type": "number",
        "input_name": "k",
        "input_value": "10"
    },
    {
        "test_id": 295,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 4, 6, 8, 10]"
    },
    {
        "test_id": 295,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },

    // firstDigit
    {
        "test_id": 296,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "var_1__Int"
    },
    {
        "test_id": 297,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "q2q-q"
    },
    {
        "test_id": 298,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0ss"
    },
    {
        "test_id": 299,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "_Aas_23"
    },
    {
        "test_id": 300,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "a a_933"
    },
    {
        "test_id": 301,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "ok0"
    },

    // differentSymbolsNaive
    {
        "test_id": 302,
        "input_type": "string",
        "input_name": "s",
        "input_value": "cabca"
    },
    {
        "test_id": 303,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aba"
    },
    {
        "test_id": 304,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ccccccccccc"
    },
    {
        "test_id": 305,
        "input_type": "string",
        "input_name": "s",
        "input_value": "bcaba"
    },
    {
        "test_id": 306,
        "input_type": "string",
        "input_name": "s",
        "input_value": "codesignal"
    },

    // arrayMaxConsecutiveSum
    {
        "test_id": 307,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 3, 5, 1, 6]"
    },
    {
        "test_id": 307,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 308,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 4, 10, 1]"
    },
    {
        "test_id": 308,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 309,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 3, 2, 4]"
    },
    {
        "test_id": 309,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 310,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[3, 2, 1, 1]"
    },
    {
        "test_id": 310,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1"
    },
    {
        "test_id": 311,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 3, 4, 2, 4, 2, 4]"
    },
    {
        "test_id": 311,
        "input_type": "number",
        "input_name": "k",
        "input_value": "4"
    },
    {
        "test_id": 312,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[963, 741, 22, 851, 399, 382, 190, 247, 494, 452, 891, 532, 795, 920, 465, 831, 344, 391, 582, 897, 763, 951, 735, 806, 320, 702, 200, 59, 870, 345, 695, 321, 817, 83, 416, 36, 914, 335, 117, 985, 690, 303, 875, 556, 292, 309, 496, 791, 509, 360, 235, 784, 607, 341]"
    },
    {
        "test_id": 312,
        "input_type": "number",
        "input_name": "k",
        "input_value": "23"
    },

    // growingPlant
    {
        "test_id": 313,
        "input_type": "number",
        "input_name": "upSpeed",
        "input_value": "100"
    },
    {
        "test_id": 313,
        "input_type": "number",
        "input_name": "downSpeed",
        "input_value": "10"
    },
    {
        "test_id": 313,
        "input_type": "number",
        "input_name": "desiredHeight",
        "input_value": "910"
    },
    {
        "test_id": 314,
        "input_type": "number",
        "input_name": "upSpeed",
        "input_value": "10"
    },
    {
        "test_id": 314,
        "input_type": "number",
        "input_name": "downSpeed",
        "input_value": "9"
    },
    {
        "test_id": 314,
        "input_type": "number",
        "input_name": "desiredHeight",
        "input_value": "4"
    },
    {
        "test_id": 315,
        "input_type": "number",
        "input_name": "upSpeed",
        "input_value": "5"
    },
    {
        "test_id": 315,
        "input_type": "number",
        "input_name": "downSpeed",
        "input_value": "2"
    },
    {
        "test_id": 315,
        "input_type": "number",
        "input_name": "desiredHeight",
        "input_value": "7"
    },
    {
        "test_id": 316,
        "input_type": "number",
        "input_name": "upSpeed",
        "input_value": "7"
    },
    {
        "test_id": 316,
        "input_type": "number",
        "input_name": "downSpeed",
        "input_value": "3"
    },
    {
        "test_id": 316,
        "input_type": "number",
        "input_name": "desiredHeight",
        "input_value": "443"
    },
    {
        "test_id": 317,
        "input_type": "number",
        "input_name": "upSpeed",
        "input_value": "6"
    },
    {
        "test_id": 317,
        "input_type": "number",
        "input_name": "downSpeed",
        "input_value": "5"
    },
    {
        "test_id": 317,
        "input_type": "number",
        "input_name": "desiredHeight",
        "input_value": "10"
    },

    // Knapsack Light
    {
        "test_id": 318,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 318,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 318,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "6"
    },
    {
        "test_id": 318,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 318,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "8"
    },
    {
        "test_id": 319,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 319,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 319,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "6"
    },
    {
        "test_id": 319,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 319,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "9"
    },
    {
        "test_id": 320,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "5"
    },
    {
        "test_id": 320,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "3"
    },
    {
        "test_id": 320,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "7"
    },
    {
        "test_id": 320,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 320,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "6"
    },
    {
        "test_id": 321,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 321,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "2"
    },
    {
        "test_id": 321,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "11"
    },
    {
        "test_id": 321,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "3"
    },
    {
        "test_id": 321,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "1"
    },
    {
        "test_id": 322,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "15"
    },
    {
        "test_id": 322,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "2"
    },
    {
        "test_id": 322,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "20"
    },
    {
        "test_id": 322,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "3"
    },
    {
        "test_id": 322,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "2"
    },
    {
        "test_id": 323,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "2"
    },
    {
        "test_id": 323,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 323,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 323,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 323,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "5"
    },
    {
        "test_id": 324,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "4"
    },
    {
        "test_id": 324,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "3"
    },
    {
        "test_id": 324,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 324,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 324,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "4"
    },
    {
        "test_id": 325,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "3"
    },
    {
        "test_id": 325,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 325,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 325,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "8"
    },
    {
        "test_id": 325,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "10"
    },

    // longestDigitsPrefix
    {
        "test_id": 326,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "123aa1"
    },
    {
        "test_id": 327,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "0123456789"
    },
    {
        "test_id": 328,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "  3) always check for whitespaces"
    },
    {
        "test_id": 329,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "12abc34"
    },
    {
        "test_id": 330,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "the output is 42"
    },
    {
        "test_id": 331,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aaaaaaa"
    },

    // digitDegree
    {
        "test_id": 332,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 333,
        "input_type": "number",
        "input_name": "n",
        "input_value": "100"
    },
    {
        "test_id": 334,
        "input_type": "number",
        "input_name": "n",
        "input_value": "91"
    },
    {
        "test_id": 335,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99"
    },
    {
        "test_id": 336,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1000000000"
    },
    {
        "test_id": 337,
        "input_type": "number",
        "input_name": "n",
        "input_value": "9"
    },
    {
        "test_id": 338,
        "input_type": "number",
        "input_name": "n",
        "input_value": "73"
    },
    {
        "test_id": 339,
        "input_type": "number",
        "input_name": "n",
        "input_value": "877"
    },
    {
        "test_id": 340,
        "input_type": "number",
        "input_name": "n",
        "input_value": "777773"
    },
    {
        "test_id": 341,
        "input_type": "number",
        "input_name": "n",
        "input_value": "304"
    },

    // Bishop and Pawn
    {
        "test_id": 342,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 342,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "c3"
    },
    {
        "test_id": 343,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "h1"
    },
    {
        "test_id": 343,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h3"
    },
    {
        "test_id": 344,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a5"
    },
    {
        "test_id": 344,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "c3"
    },
    {
        "test_id": 345,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "g1"
    },
    {
        "test_id": 345,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "f3"
    },
    {
        "test_id": 346,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e7"
    },
    {
        "test_id": 346,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "d6"
    },
    {
        "test_id": 347,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e7"
    },
    {
        "test_id": 347,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a3"
    },
    {
        "test_id": 348,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e3"
    },
    {
        "test_id": 348,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a7"
    },
    {
        "test_id": 349,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 349,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h8"
    },
    {
        "test_id": 350,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 350,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h7"
    },
    {
        "test_id": 351,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "h1"
    },
    {
        "test_id": 351,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a8"
    },

    //


]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('test_inputs', test_inputs, batchSize)
}