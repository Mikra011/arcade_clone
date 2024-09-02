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

    // isBeautifulString
    {
        "test_id": 352,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "bbbaacdafe"
    },
    {
        "test_id": 353,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aabbb"
    },
    {
        "test_id": 354,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "bbc"
    },
    {
        "test_id": 355,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "bbbaa"
    },
    {
        "test_id": 356,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdefghijklmnopqrstuvwxyzz"
    },
    {
        "test_id": 357,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdefghijklmnopqrstuvwxyz"
    },
    {
        "test_id": 358,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdefghijklmnopqrstuvwxyzqwertuiopasdfghjklxcvbnm"
    },
    {
        "test_id": 359,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "fyudhrygiuhdfeis"
    },
    {
        "test_id": 360,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "zaa"
    },
    {
        "test_id": 361,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "zyy"
    },

    // Find Email Domain
    {
        "test_id": 362,
        "input_type": "string",
        "input_name": "address",
        "input_value": "prettyandsimple@example.com"
    },
    {
        "test_id": 363,
        "input_type": "string",
        "input_name": "address",
        "input_value": "fully-qualified-domain@codesignal.com"
    },
    {
        "test_id": 364,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\" \"@space.com"
    },
    {
        "test_id": 365,
        "input_type": "string",
        "input_name": "address",
        "input_value": "someaddress@yandex.ru"
    },
    {
        "test_id": 366,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\" \"@xample.org"
    },
    {
        "test_id": 367,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\"much.more unusual\"@yahoo.com"
    },
    {
        "test_id": 368,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\"very.unusual.@.unusual.com\"@usual.com"
    },
    {
        "test_id": 369,
        "input_type": "string",
        "input_name": "address",
        "input_value": "admin@mailserver2.ru"
    },
    {
        "test_id": 370,
        "input_type": "string",
        "input_name": "address",
        "input_value": "example-indeed@strange-example.com"
    },
    {
        "test_id": 371,
        "input_type": "string",
        "input_name": "address",
        "input_value": "very.common@gmail.com"
    },

    // buildPalindrome
    {
        "test_id": 372,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abcdc"
    },
    {
        "test_id": 373,
        "input_type": "string",
        "input_name": "st",
        "input_value": "ababab"
    },
    {
        "test_id": 374,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abba"
    },
    {
        "test_id": 375,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abaa"
    },
    {
        "test_id": 376,
        "input_type": "string",
        "input_name": "st",
        "input_value": "aaaaba"
    },
    {
        "test_id": 377,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abc"
    },
    {
        "test_id": 378,
        "input_type": "string",
        "input_name": "st",
        "input_value": "kebab"
    },
    {
        "test_id": 379,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abccba"
    },
    {
        "test_id": 380,
        "input_type": "string",
        "input_name": "st",
        "input_value": "abcabc"
    },
    {
        "test_id": 381,
        "input_type": "string",
        "input_name": "st",
        "input_value": "cbdbedffcg"
    },
    {
        "test_id": 382,
        "input_type": "string",
        "input_name": "st",
        "input_value": "euotmn"
    },

    // Elections Winners
    {
        "test_id": 383,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[2, 3, 5, 2]"
    },
    {
        "test_id": 383,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 384,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 3, 3, 1, 1]"
    },
    {
        "test_id": 384,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 385,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[5, 1, 3, 4, 1]"
    },
    {
        "test_id": 385,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 386,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 1, 1, 1]"
    },
    {
        "test_id": 386,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1"
    },
    {
        "test_id": 387,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 1, 1, 1]"
    },
    {
        "test_id": 387,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 388,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[3, 1, 1, 3, 1]"
    },
    {
        "test_id": 388,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },

    // Is MAC48 Address?
    {
        "test_id": 389,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "00-1B-63-84-45-E6"
    },
    {
        "test_id": 390,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "Z1-1B-63-84-45-E6"
    },
    {
        "test_id": 391,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "not a MAC-48 address"
    },
    {
        "test_id": 392,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "FF-FF-FF-FF-FF-FF"
    },
    {
        "test_id": 393,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "00-00-00-00-00-00"
    },
    {
        "test_id": 394,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "G0-00-00-00-00-00"
    },
    {
        "test_id": 395,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "02-03-04-05-06-07-"
    },
    {
        "test_id": 396,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "12-34-56-78-9A-BC"
    },
    {
        "test_id": 397,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "FF-FF-AB-CD-EA-BC"
    },
    {
        "test_id": 398,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "12-34-56-78-9A-BG"
    },

    // isDigit
    {
        "test_id": 399,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "0"
    },
    {
        "test_id": 400,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "-"
    },
    {
        "test_id": 401,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "O"
    },
    {
        "test_id": 402,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "1"
    },
    {
        "test_id": 403,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "2"
    },
    {
        "test_id": 404,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "!"
    },
    {
        "test_id": 405,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "@"
    },
    {
        "test_id": 406,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "+"
    },
    {
        "test_id": 407,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "6"
    },
    {
        "test_id": 408,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "("
    },
    {
        "test_id": 409,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": ")"
    },

    // lineEncoding
    {
        "test_id": 410,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aabbbc"
    },
    {
        "test_id": 411,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abbcabb"
    },
    {
        "test_id": 412,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abcd"
    },
    {
        "test_id": 413,
        "input_type": "string",
        "input_name": "s",
        "input_value": "zzzz"
    },
    {
        "test_id": 414,
        "input_type": "string",
        "input_name": "s",
        "input_value": "wwwwwwwawwwwwww"
    },
    {
        "test_id": 415,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ccccccccccccccc"
    },
    {
        "test_id": 416,
        "input_type": "string",
        "input_name": "s",
        "input_value": "qwertyuioplkjhg"
    },
    {
        "test_id": 417,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ssiiggkooo"
    },
    {
        "test_id": 418,
        "input_type": "string",
        "input_name": "s",
        "input_value": "adfaaa"
    },
    {
        "test_id": 419,
        "input_type": "string",
        "input_name": "s",
        "input_value": "bbjaadlkjdl"
    },

    // chessKnight
    {
        "test_id": 420,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "a1"
    },
    {
        "test_id": 421,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "c2"
    },
    {
        "test_id": 422,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "d4"
    },
    {
        "test_id": 423,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "g6"
    },
    {
        "test_id": 424,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "a3"
    },
    {
        "test_id": 425,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "b7"
    },
    {
        "test_id": 426,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "h8"
    },
    {
        "test_id": 427,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "h6"
    },
    {
        "test_id": 428,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "g8"
    },
    {
        "test_id": 429,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "a5"
    },

    // deleteDigit
    {
        "test_id": 430,
        "input_type": "number",
        "input_name": "n",
        "input_value": "152"
    },
    {
        "test_id": 431,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1001"
    },
    {
        "test_id": 432,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 433,
        "input_type": "number",
        "input_name": "n",
        "input_value": "222219"
    },
    {
        "test_id": 434,
        "input_type": "number",
        "input_name": "n",
        "input_value": "109"
    },
    {
        "test_id": 435,
        "input_type": "number",
        "input_name": "n",
        "input_value": "222250"
    },
    {
        "test_id": 436,
        "input_type": "number",
        "input_name": "n",
        "input_value": "44435"
    },
    {
        "test_id": 437,
        "input_type": "number",
        "input_name": "n",
        "input_value": "12"
    },
    {
        "test_id": 438,
        "input_type": "number",
        "input_name": "n",
        "input_value": "218616"
    },
    {
        "test_id": 439,
        "input_type": "number",
        "input_name": "n",
        "input_value": "861452"
    },

    // longestWord
    {
        "test_id": 440,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Ready, steady, go!"
    },
    {
        "test_id": 441,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Ready[[[, steady, go!"
    },
    {
        "test_id": 442,
        "input_type": "string",
        "input_name": "text",
        "input_value": "ABCd"
    },
    {
        "test_id": 443,
        "input_type": "string",
        "input_name": "text",
        "input_value": "To be or not to be"
    },
    {
        "test_id": 444,
        "input_type": "string",
        "input_name": "text",
        "input_value": "You are the best!!!!!!!!!!!! CodeFighter ever!"
    },

    // Valid Time
    {
        "test_id": 445,
        "input_type": "string",
        "input_name": "time",
        "input_value": "13:58"
    },
    {
        "test_id": 446,
        "input_type": "string",
        "input_name": "time",
        "input_value": "25:51"
    },
    {
        "test_id": 447,
        "input_type": "string",
        "input_name": "time",
        "input_value": "02:76"
    },
    {
        "test_id": 448,
        "input_type": "string",
        "input_name": "time",
        "input_value": "24:00"
    },
    {
        "test_id": 449,
        "input_type": "string",
        "input_name": "time",
        "input_value": "02:61"
    },
    {
        "test_id": 450,
        "input_type": "string",
        "input_name": "time",
        "input_value": "27:00"
    },
    {
        "test_id": 451,
        "input_type": "string",
        "input_name": "time",
        "input_value": "19:66"
    },
    {
        "test_id": 452,
        "input_type": "string",
        "input_name": "time",
        "input_value": "12:31"
    },
    {
        "test_id": 453,
        "input_type": "string",
        "input_name": "time",
        "input_value": "25:73"
    },
    {
        "test_id": 454,
        "input_type": "string",
        "input_name": "time",
        "input_value": "09:56"
    },
    {
        "test_id": 455,
        "input_type": "string",
        "input_name": "time",
        "input_value": "03:29"
    },

    // sumUpNumbers
    {
        "test_id": 456,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "2 apples, 12 oranges"
    },
    {
        "test_id": 457,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "123450"
    },
    {
        "test_id": 458,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "Your payment method is invalid"
    },
    {
        "test_id": 459,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "no digits at all"
    },
    {
        "test_id": 460,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "there are some (12) digits 5566 in this 770 string 239"
    },
    {
        "test_id": 461,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "42+781"
    },
    {
        "test_id": 462,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abc abc 4 abc 0 abc"
    },
    {
        "test_id": 463,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdefghijklmnopqrstuvwxyz1AbCdEfGhIjKlMnOpqrstuvwxyz23,74 -"
    },

    // Different Squares
    {
        "test_id": 464,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1,2,1],[2,2,2],[2,2,2],[1,2,3],[2,2,1]]"
    },
    {
        "test_id": 465,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9]]"
    },
    {
        "test_id": 466,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3]]"
    },
    {
        "test_id": 467,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3,4,5,6,7,8,9]]"
    },
    {
        "test_id": 468,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3],[4],[5],[6],[7]]"
    },
    {
        "test_id": 469,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[2,5,3,4,3,1,3,2],[4,5,4,1,2,4,1,3],[1,1,2,1,4,1,1,5],[1,3,4,2,3,4,2,4],[1,5,5,2,1,3,1,1],[1,2,3,3,5,1,2,4],[3,1,4,4,4,1,5,5],[5,1,3,3,1,5,3,5],[5,4,4,3,5,4,4,4]]"
    },
    {
        "test_id": 470,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1,1,1,1,1,1,2,2,2,3,3,3,9,9,9,2,3,9]]"
    },

    // digitsProduct
    {
        "test_id": 471,
        "input_type": "number",
        "input_name": "product",
        "input_value": "12"
    },
    {
        "test_id": 472,
        "input_type": "number",
        "input_name": "product",
        "input_value": "19"
    },
    {
        "test_id": 473,
        "input_type": "number",
        "input_name": "product",
        "input_value": "450"
    },
    {
        "test_id": 474,
        "input_type": "number",
        "input_name": "product",
        "input_value": "0"
    },
    {
        "test_id": 475,
        "input_type": "number",
        "input_name": "product",
        "input_value": "13"
    },
    {
        "test_id": 476,
        "input_type": "number",
        "input_name": "product",
        "input_value": "1"
    },
    {
        "test_id": 477,
        "input_type": "number",
        "input_name": "product",
        "input_value": "243"
    },
    {
        "test_id": 478,
        "input_type": "number",
        "input_name": "product",
        "input_value": "576"
    },
    {
        "test_id": 479,
        "input_type": "number",
        "input_name": "product",
        "input_value": "360"
    },

    // File Naming
    {
        "test_id": 480,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["doc","doc","image","doc(1)","doc"]'
    },
    {
        "test_id": 481,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["a(1)","a(6)","a","a","a","a","a","a","a","a","a","a"]'
    },
    {
        "test_id": 482,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["dd","dd(1)","dd(2)","dd","dd(1)","dd(1)(2)","dd(1)(1)","dd","dd(1)"]'
    },
    {
        "test_id": 483,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["name","name","name(1)","name(3)","name(2)","name(2)"]'
    },
    {
        "test_id": 484,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '[]'
    },

    // messageFromBinaryCode
    {
        "test_id": 485,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010010000110010101101100011011000110111100100001"
    },
    {
        "test_id": 486,
        "input_type": "string",
        "input_name": "code",
        "input_value": "01001101011000010111100100100000011101000110100001100101001000000100011001101111011100100110001101100101001000000110001001100101001000000111011101101001011101000110100000100000011110010110111101110101"
    },
    {
        "test_id": 487,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010110010110111101110101001000000110100001100001011001000010000001101101011001010010000001100001011101000010000001100000011010000110010101101100011011000110111100101110"
    },
    {
        "test_id": 488,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010001010110110001100101011011010110010101101110011101000110000101110010011110010010110000100000011011010111100100100000011001000110010101100001011100100010000001010111011000010111010001110011011011110110111000100001"
    },
    {
        "test_id": 489,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010011000110111101110110011001010010000001000110011011110111001000100000010000010110110001101100001011000010000001001000011000010111010001110010011001010110010000100000010001100110111101110010001000000100111001101111011011100110010100101110"
    },
    {
        "test_id": 490,
        "input_type": "string",
        "input_name": "code",
        "input_value": "0100001101101000011000010110111001100111011001010010000001110100011010000110010100100000011101110110111101110010011011000110010000100000011000100111100100100000011000100110010101101001011011100110011100100000011110010110111101110101011100100111001101100101011011000110011000101110"
    },
    {
        "test_id": 491,
        "input_type": "string",
        "input_name": "code",
        "input_value": "01000101011101100110010101110010011110010010000001101101011011110110110101100101011011100111010000100000011010010111001100100000011000010010000001100110011100100110010101110011011010000010000001100010011001010110011101101001011011100110111001101001011011100110011100101110"
    },
    {
        "test_id": 492,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010011100110010101110110011001010111001000100000011100100110010101100111011100100110010101110100001000000110000101101110011110010111010001101000011010010110111001100111001000000111010001101000011000010111010000100000011011010110000101100100011001010010000001111001011011110111010100100000011100110110110101101001011011000110010100101110"
    },
    {
        "test_id": 493,
        "input_type": "string",
        "input_name": "code",
        "input_value": "010001000110100101100101001000000111011101101001011101000110100000100000011011010110010101101101011011110111001001101001011001010111001100101100001000000110111001101111011101000010000001100100011100100110010101100001011011010111001100101110"
    },
    {
        "test_id": 494,
        "input_type": "string",
        "input_name": "code",
        "input_value": "0100000101110011011100000110100101110010011001010010000001110100011011110010000001101001011011100111001101110000011010010111001001100101001000000110001001100101011001100110111101110010011001010010000001110111011001010010000001100101011110000111000001101001011100100110010100101110"
    },

    // spiralNumbers
    {
        "test_id": 495,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 496,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 497,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 498,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 499,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },

    // Sudoku
    {
        "test_id": 500,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,3,2,5,4,6,9,8,7],[4,6,5,8,7,9,3,2,1],[7,9,8,2,1,3,6,5,4],[9,2,1,4,3,5,8,7,6],[3,5,4,7,6,8,2,1,9],[6,8,7,1,9,2,5,4,3],[5,7,6,9,8,1,4,3,2],[2,4,3,6,5,7,1,9,8],[8,1,9,3,2,4,7,6,5]]"
    },
    {
        "test_id": 501,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,3,4,2,5,6,9,8,7],[4,6,8,5,7,9,3,2,1],[7,9,2,8,1,3,6,5,4],[9,2,3,1,4,5,8,7,6],[3,5,7,4,6,8,2,1,9],[6,8,1,7,9,2,5,4,3],[5,7,6,9,8,1,4,3,2],[2,4,5,6,3,7,1,9,8],[8,1,9,3,2,4,7,6,5]]"
    },
    {
        "test_id": 502,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9]]"
    },
    {
        "test_id": 503,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[8,3,6,5,3,6,7,2,9],[4,2,5,8,7,9,3,8,1],[7,9,1,2,1,4,6,5,4],[9,2,1,4,3,5,8,7,6],[3,5,4,7,6,8,2,1,9],[6,8,7,1,9,2,5,4,3],[5,7,6,9,8,1,4,3,2],[2,4,3,6,5,7,1,9,8],[8,1,9,3,2,4,7,6,5]]"
    },
    {
        "test_id": 504,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,3,2,5,4,6,9,8,7],[4,6,5,8,7,9,3,2,1],[7,9,8,2,1,3,6,5,4],[9,2,1,4,3,5,8,7,6],[3,5,4,7,6,8,2,1,9],[6,8,7,1,9,2,5,4,3],[5,4,6,9,8,1,4,3,2],[2,7,3,6,5,7,1,9,8],[8,1,9,3,2,4,7,6,5]]"
    },
    {
        "test_id": 505,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,2,3,4,5,6,7,8,9],[4,6,5,8,7,9,3,2,1],[7,9,8,2,1,3,6,5,4],[1,2,3,4,5,6,7,8,9],[4,6,5,8,7,9,3,2,1],[7,9,8,2,1,3,6,5,4],[1,2,3,4,5,6,7,8,9],[4,6,5,8,7,9,3,2,1],[7,9,8,2,1,3,6,5,4]]"
    },
    {
        "test_id": 506,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,9,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,7,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]"
    },
    {
        "test_id": 507,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5],[5,5,5,5,5,5,5,5,5]]"
    },
    {
        "test_id": 508,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5,3,4,6,7,8,9,1,2],[6,7,2,3,9,5,3,4,8],[1,9,8,1,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,8,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]"
    },
    {
        "test_id": 509,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5,3,4,6,7,8,9,1,2],[6,7,2,1,9,5,3,4,8],[1,9,8,3,4,2,5,6,7],[8,5,9,7,6,1,4,2,3],[4,2,6,8,5,3,7,9,1],[7,1,3,9,2,4,8,5,6],[9,6,1,5,3,7,2,8,4],[2,5,7,4,1,9,6,3,5],[3,4,5,2,8,6,1,7,9]]"
    },
    {
        "test_id": 510,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1,2,3,4,5,6,7,8,9],[4,5,6,7,8,9,1,2,3],[7,8,9,1,2,3,4,5,6],[2,3,4,5,6,7,8,9,1],[3,4,5,6,7,8,9,1,2],[5,6,7,8,9,1,2,3,4],[6,7,8,9,1,2,3,4,5],[8,9,1,2,3,4,5,6,7],[9,1,2,3,4,5,6,7,8]]"
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
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////
    ////////// THE CORE /////////////////////////////////////////////////// THE CORE /////////////////////////////////////////

    // Add Two Digits
    {
        "test_id": 511,
        "input_type": "number",
        "input_name": "n",
        "input_value": "29"
    },
    {
        "test_id": 512,
        "input_type": "number",
        "input_name": "n",
        "input_value": "48"
    },
    {
        "test_id": 513,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 514,
        "input_type": "number",
        "input_name": "n",
        "input_value": "25"
    },
    {
        "test_id": 515,
        "input_type": "number",
        "input_name": "n",
        "input_value": "52"
    },
    {
        "test_id": 516,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99"
    },
    {
        "test_id": 517,
        "input_type": "number",
        "input_name": "n",
        "input_value": "44"
    },
    {
        "test_id": 518,
        "input_type": "number",
        "input_name": "n",
        "input_value": "50"
    },
    {
        "test_id": 519,
        "input_type": "number",
        "input_name": "n",
        "input_value": "39"
    },
    {
        "test_id": 520,
        "input_type": "number",
        "input_name": "n",
        "input_value": "26"
    },

    // Largest Number
    {
        "test_id": 521,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 522,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 523,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 524,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 525,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },

    // Candies
    {
        "test_id": 526,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 526,
        "input_type": "number",
        "input_name": "m",
        "input_value": "10"
    },
    {
        "test_id": 527,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 527,
        "input_type": "number",
        "input_name": "m",
        "input_value": "2"
    },
    {
        "test_id": 528,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 528,
        "input_type": "number",
        "input_name": "m",
        "input_value": "5"
    },
    {
        "test_id": 529,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 529,
        "input_type": "number",
        "input_name": "m",
        "input_value": "4"
    },
    {
        "test_id": 530,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 530,
        "input_type": "number",
        "input_name": "m",
        "input_value": "15"
    },
    {
        "test_id": 531,
        "input_type": "number",
        "input_name": "n",
        "input_value": "9"
    },
    {
        "test_id": 531,
        "input_type": "number",
        "input_name": "m",
        "input_value": "100"
    },
    {
        "test_id": 532,
        "input_type": "number",
        "input_name": "n",
        "input_value": "8"
    },
    {
        "test_id": 532,
        "input_type": "number",
        "input_name": "m",
        "input_value": "2"
    },
    {
        "test_id": 533,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 533,
        "input_type": "number",
        "input_name": "m",
        "input_value": "3"
    },
    {
        "test_id": 534,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 534,
        "input_type": "number",
        "input_name": "m",
        "input_value": "10"
    },
    {
        "test_id": 535,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 535,
        "input_type": "number",
        "input_name": "m",
        "input_value": "23"
    },

    // Seats in Theater
    {
        "test_id": 536,
        "input_type": "number",
        "input_name": "nCols",
        "input_value": "16"
    },
    {
        "test_id": 536,
        "input_type": "number",
        "input_name": "nRows",
        "input_value": "11"
    },
    {
        "test_id": 536,
        "input_type": "number",
        "input_name": "col",
        "input_value": "5"
    },
    {
        "test_id": 536,
        "input_type": "number",
        "input_name": "row",
        "input_value": "3"
    },
    {
        "test_id": 537,
        "input_type": "number",
        "input_name": "nCols",
        "input_value": "1"
    },
    {
        "test_id": 537,
        "input_type": "number",
        "input_name": "nRows",
        "input_value": "1"
    },
    {
        "test_id": 537,
        "input_type": "number",
        "input_name": "col",
        "input_value": "1"
    },
    {
        "test_id": 537,
        "input_type": "number",
        "input_name": "row",
        "input_value": "1"
    },
    {
        "test_id": 538,
        "input_type": "number",
        "input_name": "nCols",
        "input_value": "13"
    },
    {
        "test_id": 538,
        "input_type": "number",
        "input_name": "nRows",
        "input_value": "6"
    },
    {
        "test_id": 538,
        "input_type": "number",
        "input_name": "col",
        "input_value": "8"
    },
    {
        "test_id": 538,
        "input_type": "number",
        "input_name": "row",
        "input_value": "3"
    },
    {
        "test_id": 539,
        "input_type": "number",
        "input_name": "nCols",
        "input_value": "60"
    },
    {
        "test_id": 539,
        "input_type": "number",
        "input_name": "nRows",
        "input_value": "100"
    },
    {
        "test_id": 539,
        "input_type": "number",
        "input_name": "col",
        "input_value": "60"
    },
    {
        "test_id": 539,
        "input_type": "number",
        "input_name": "row",
        "input_value": "1"
    },
    {
        "test_id": 540,
        "input_type": "number",
        "input_name": "nCols",
        "input_value": "1000"
    },
    {
        "test_id": 540,
        "input_type": "number",
        "input_name": "nRows",
        "input_value": "1000"
    },
    {
        "test_id": 540,
        "input_type": "number",
        "input_name": "col",
        "input_value": "1000"
    },
    {
        "test_id": 540,
        "input_type": "number",
        "input_name": "row",
        "input_value": "1000"
    },

    // Max Multiple
    {
        "test_id": 541,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "3"
    },
    {
        "test_id": 541,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "10"
    },
    {
        "test_id": 542,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "2"
    },
    {
        "test_id": 542,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "7"
    },
    {
        "test_id": 543,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "10"
    },
    {
        "test_id": 543,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "50"
    },
    {
        "test_id": 544,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "7"
    },
    {
        "test_id": 544,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "100"
    },
    {
        "test_id": 545,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "7"
    },
    {
        "test_id": 545,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "20"
    },
    {
        "test_id": 546,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "5"
    },
    {
        "test_id": 546,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "13"
    },
    {
        "test_id": 547,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "8"
    },
    {
        "test_id": 547,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "88"
    },
    {
        "test_id": 548,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "10"
    },
    {
        "test_id": 548,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "100"
    },
    {
        "test_id": 549,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "2"
    },
    {
        "test_id": 549,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "5"
    },
    {
        "test_id": 550,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "3"
    },
    {
        "test_id": 550,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "5"
    },
    {
        "test_id": 551,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "9"
    },
    {
        "test_id": 551,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "11"
    },
    {
        "test_id": 552,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "8"
    },
    {
        "test_id": 552,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "15"
    },
    {
        "test_id": 553,
        "input_type": "number",
        "input_name": "divisor",
        "input_value": "9"
    },
    {
        "test_id": 553,
        "input_type": "number",
        "input_name": "bound",
        "input_value": "60"
    },

    // Circle of Numbers
    {
        "test_id": 554,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 554,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "2"
    },
    {
        "test_id": 555,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 555,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "7"
    },
    {
        "test_id": 556,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 556,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "1"
    },
    {
        "test_id": 557,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 557,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "3"
    },
    {
        "test_id": 558,
        "input_type": "number",
        "input_name": "n",
        "input_value": "18"
    },
    {
        "test_id": 558,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "6"
    },
    {
        "test_id": 559,
        "input_type": "number",
        "input_name": "n",
        "input_value": "12"
    },
    {
        "test_id": 559,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "10"
    },
    {
        "test_id": 560,
        "input_type": "number",
        "input_name": "n",
        "input_value": "18"
    },
    {
        "test_id": 560,
        "input_type": "number",
        "input_name": "firstNumber",
        "input_value": "5"
    },

    // Late Ride
    {
        "test_id": 561,
        "input_type": "number",
        "input_name": "n",
        "input_value": "240"
    },
    {
        "test_id": 562,
        "input_type": "number",
        "input_name": "n",
        "input_value": "808"
    },
    {
        "test_id": 563,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1439"
    },
    {
        "test_id": 564,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 565,
        "input_type": "number",
        "input_name": "n",
        "input_value": "23"
    },
    {
        "test_id": 566,
        "input_type": "number",
        "input_name": "n",
        "input_value": "8"
    },

    // Phone Call
    {
        "test_id": 567,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "3"
    },
    {
        "test_id": 567,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "1"
    },
    {
        "test_id": 567,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "2"
    },
    {
        "test_id": 567,
        "input_type": "number",
        "input_name": "s",
        "input_value": "20"
    },
    {
        "test_id": 568,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "2"
    },
    {
        "test_id": 568,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "2"
    },
    {
        "test_id": 568,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "1"
    },
    {
        "test_id": 568,
        "input_type": "number",
        "input_name": "s",
        "input_value": "2"
    },
    {
        "test_id": 569,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "10"
    },
    {
        "test_id": 569,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "1"
    },
    {
        "test_id": 569,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "2"
    },
    {
        "test_id": 569,
        "input_type": "number",
        "input_name": "s",
        "input_value": "22"
    },
    {
        "test_id": 570,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "2"
    },
    {
        "test_id": 570,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "2"
    },
    {
        "test_id": 570,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "1"
    },
    {
        "test_id": 570,
        "input_type": "number",
        "input_name": "s",
        "input_value": "24"
    },
    {
        "test_id": 571,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "1"
    },
    {
        "test_id": 571,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "2"
    },
    {
        "test_id": 571,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "1"
    },
    {
        "test_id": 571,
        "input_type": "number",
        "input_name": "s",
        "input_value": "6"
    },
    {
        "test_id": 572,
        "input_type": "number",
        "input_name": "min1",
        "input_value": "10"
    },
    {
        "test_id": 572,
        "input_type": "number",
        "input_name": "min2_10",
        "input_value": "10"
    },
    {
        "test_id": 572,
        "input_type": "number",
        "input_name": "min11",
        "input_value": "10"
    },
    {
        "test_id": 572,
        "input_type": "number",
        "input_name": "s",
        "input_value": "8"
    },

    // Reach Next Level
    {
        "test_id": 573,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "10"
    },
    {
        "test_id": 573,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "15"
    },
    {
        "test_id": 573,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "5"
    },
    {
        "test_id": 574,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "10"
    },
    {
        "test_id": 574,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "15"
    },
    {
        "test_id": 574,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "4"
    },
    {
        "test_id": 575,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "3"
    },
    {
        "test_id": 575,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "6"
    },
    {
        "test_id": 575,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "4"
    },
    {
        "test_id": 576,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "84"
    },
    {
        "test_id": 576,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "135"
    },
    {
        "test_id": 576,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "36"
    },
    {
        "test_id": 577,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "74"
    },
    {
        "test_id": 577,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "170"
    },
    {
        "test_id": 577,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "58"
    },
    {
        "test_id": 578,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "80"
    },
    {
        "test_id": 578,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "199"
    },
    {
        "test_id": 578,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "15"
    },
    {
        "test_id": 579,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "97"
    },
    {
        "test_id": 579,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "57"
    },
    {
        "test_id": 579,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "7"
    },
    {
        "test_id": 580,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "235"
    },
    {
        "test_id": 580,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "293"
    },
    {
        "test_id": 580,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "4"
    },
    {
        "test_id": 581,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "222"
    },
    {
        "test_id": 581,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "137"
    },
    {
        "test_id": 581,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "58"
    },
    {
        "test_id": 582,
        "input_type": "number",
        "input_name": "experience",
        "input_value": "16"
    },
    {
        "test_id": 582,
        "input_type": "number",
        "input_name": "threshold",
        "input_value": "23"
    },
    {
        "test_id": 582,
        "input_type": "number",
        "input_name": "reward",
        "input_value": "16"
    },

    // Knapsack Light
    {
        "test_id": 583,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 583,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 583,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "6"
    },
    {
        "test_id": 583,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 583,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "8"
    },
    {
        "test_id": 584,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 584,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 584,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "6"
    },
    {
        "test_id": 584,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 584,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "9"
    },
    {
        "test_id": 585,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "5"
    },
    {
        "test_id": 585,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "3"
    },
    {
        "test_id": 585,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "7"
    },
    {
        "test_id": 585,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 585,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "6"
    },
    {
        "test_id": 586,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "10"
    },
    {
        "test_id": 586,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "2"
    },
    {
        "test_id": 586,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "11"
    },
    {
        "test_id": 586,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "3"
    },
    {
        "test_id": 586,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "1"
    },
    {
        "test_id": 587,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "15"
    },
    {
        "test_id": 587,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "2"
    },
    {
        "test_id": 587,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "20"
    },
    {
        "test_id": 587,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "3"
    },
    {
        "test_id": 587,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "2"
    },
    {
        "test_id": 588,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "2"
    },
    {
        "test_id": 588,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 588,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 588,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 588,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "5"
    },
    {
        "test_id": 589,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "4"
    },
    {
        "test_id": 589,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "3"
    },
    {
        "test_id": 589,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 589,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "4"
    },
    {
        "test_id": 589,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "4"
    },
    {
        "test_id": 590,
        "input_type": "number",
        "input_name": "value1",
        "input_value": "3"
    },
    {
        "test_id": 590,
        "input_type": "number",
        "input_name": "weight1",
        "input_value": "5"
    },
    {
        "test_id": 590,
        "input_type": "number",
        "input_name": "value2",
        "input_value": "3"
    },
    {
        "test_id": 590,
        "input_type": "number",
        "input_name": "weight2",
        "input_value": "8"
    },
    {
        "test_id": 590,
        "input_type": "number",
        "input_name": "maxW",
        "input_value": "10"
    },

    // Extra Number
    {
        "test_id": 591,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 591,
        "input_type": "number",
        "input_name": "b",
        "input_value": "7"
    },
    {
        "test_id": 591,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },
    {
        "test_id": 592,
        "input_type": "number",
        "input_name": "a",
        "input_value": "3"
    },
    {
        "test_id": 592,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 592,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },
    {
        "test_id": 593,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 593,
        "input_type": "number",
        "input_name": "b",
        "input_value": "5"
    },
    {
        "test_id": 593,
        "input_type": "number",
        "input_name": "c",
        "input_value": "1"
    },
    {
        "test_id": 594,
        "input_type": "number",
        "input_name": "a",
        "input_value": "500000000"
    },
    {
        "test_id": 594,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 594,
        "input_type": "number",
        "input_name": "c",
        "input_value": "500000000"
    },
    {
        "test_id": 595,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 595,
        "input_type": "number",
        "input_name": "b",
        "input_value": "5"
    },
    {
        "test_id": 595,
        "input_type": "number",
        "input_name": "c",
        "input_value": "1"
    },
    {
        "test_id": 596,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 596,
        "input_type": "number",
        "input_name": "b",
        "input_value": "5"
    },
    {
        "test_id": 596,
        "input_type": "number",
        "input_name": "c",
        "input_value": "3"
    },
    {
        "test_id": 597,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 597,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 597,
        "input_type": "number",
        "input_name": "c",
        "input_value": "1"
    },
    {
        "test_id": 598,
        "input_type": "number",
        "input_name": "a",
        "input_value": "4000000"
    },
    {
        "test_id": 598,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3000000"
    },
    {
        "test_id": 598,
        "input_type": "number",
        "input_name": "c",
        "input_value": "4000000"
    },
    {
        "test_id": 599,
        "input_type": "number",
        "input_name": "a",
        "input_value": "548442737"
    },
    {
        "test_id": 599,
        "input_type": "number",
        "input_name": "b",
        "input_value": "82231042"
    },
    {
        "test_id": 599,
        "input_type": "number",
        "input_name": "c",
        "input_value": "548442737"
    },
    {
        "test_id": 600,
        "input_type": "number",
        "input_name": "a",
        "input_value": "469992838"
    },
    {
        "test_id": 600,
        "input_type": "number",
        "input_name": "b",
        "input_value": "66019520"
    },
    {
        "test_id": 600,
        "input_type": "number",
        "input_name": "c",
        "input_value": "66019520"
    },

    // Is Infinite Process?
    {
        "test_id": 601,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 601,
        "input_type": "number",
        "input_name": "b",
        "input_value": "6"
    },
    {
        "test_id": 602,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 602,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 603,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 603,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },
    {
        "test_id": 604,
        "input_type": "number",
        "input_name": "a",
        "input_value": "0"
    },
    {
        "test_id": 604,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 605,
        "input_type": "number",
        "input_name": "a",
        "input_value": "3"
    },
    {
        "test_id": 605,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 606,
        "input_type": "number",
        "input_name": "a",
        "input_value": "10"
    },
    {
        "test_id": 606,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },
    {
        "test_id": 607,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 607,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },
    {
        "test_id": 608,
        "input_type": "number",
        "input_name": "a",
        "input_value": "6"
    },
    {
        "test_id": 608,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },
    {
        "test_id": 609,
        "input_type": "number",
        "input_name": "a",
        "input_value": "10"
    },
    {
        "test_id": 609,
        "input_type": "number",
        "input_name": "b",
        "input_value": "0"
    },
    {
        "test_id": 610,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 610,
        "input_type": "number",
        "input_name": "b",
        "input_value": "5"
    },

    // Arithmetic Expression
    {
        "test_id": 611,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 611,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 611,
        "input_type": "number",
        "input_name": "c",
        "input_value": "5"
    },
    {
        "test_id": 612,
        "input_type": "number",
        "input_name": "a",
        "input_value": "8"
    },
    {
        "test_id": 612,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 612,
        "input_type": "number",
        "input_name": "c",
        "input_value": "4"
    },
    {
        "test_id": 613,
        "input_type": "number",
        "input_name": "a",
        "input_value": "8"
    },
    {
        "test_id": 613,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 613,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },
    {
        "test_id": 614,
        "input_type": "number",
        "input_name": "a",
        "input_value": "6"
    },
    {
        "test_id": 614,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 614,
        "input_type": "number",
        "input_name": "c",
        "input_value": "3"
    },
    {
        "test_id": 615,
        "input_type": "number",
        "input_name": "a",
        "input_value": "18"
    },
    {
        "test_id": 615,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 615,
        "input_type": "number",
        "input_name": "c",
        "input_value": "9"
    },
    {
        "test_id": 616,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 616,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 616,
        "input_type": "number",
        "input_name": "c",
        "input_value": "6"
    },
    {
        "test_id": 617,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 617,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 617,
        "input_type": "number",
        "input_name": "c",
        "input_value": "0"
    },
    {
        "test_id": 618,
        "input_type": "number",
        "input_name": "a",
        "input_value": "10"
    },
    {
        "test_id": 618,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 618,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },
    {
        "test_id": 619,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },
    {
        "test_id": 619,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 619,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },
    {
        "test_id": 620,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 620,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 620,
        "input_type": "number",
        "input_name": "c",
        "input_value": "1"
    },
    {
        "test_id": 621,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 621,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 621,
        "input_type": "number",
        "input_name": "c",
        "input_value": "2"
    },

    // Tennis Set
    {
        "test_id": 622,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "3"
    },
    {
        "test_id": 622,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "6"
    },
    {
        "test_id": 623,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "8"
    },
    {
        "test_id": 623,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "5"
    },
    {
        "test_id": 624,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "6"
    },
    {
        "test_id": 624,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "5"
    },
    {
        "test_id": 625,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "7"
    },
    {
        "test_id": 625,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "7"
    },
    {
        "test_id": 626,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "6"
    },
    {
        "test_id": 626,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "4"
    },
    {
        "test_id": 627,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "7"
    },
    {
        "test_id": 627,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "5"
    },
    {
        "test_id": 628,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "7"
    },
    {
        "test_id": 628,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "2"
    },
    {
        "test_id": 629,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "7"
    },
    {
        "test_id": 629,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "6"
    },
    {
        "test_id": 630,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "4"
    },
    {
        "test_id": 630,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "10"
    },
    {
        "test_id": 631,
        "input_type": "number",
        "input_name": "score1",
        "input_value": "0"
    },
    {
        "test_id": 631,
        "input_type": "number",
        "input_name": "score2",
        "input_value": "0"
    },

    // Will You?
    {
        "test_id": 632,
        "input_type": "boolean",
        "input_name": "young",
        "input_value": "true"
    },
    {
        "test_id": 632,
        "input_type": "boolean",
        "input_name": "beautiful",
        "input_value": "true"
    },
    {
        "test_id": 632,
        "input_type": "boolean",
        "input_name": "loved",
        "input_value": "true"
    },
    {
        "test_id": 633,
        "input_type": "boolean",
        "input_name": "young",
        "input_value": "true"
    },
    {
        "test_id": 633,
        "input_type": "boolean",
        "input_name": "beautiful",
        "input_value": "false"
    },
    {
        "test_id": 633,
        "input_type": "boolean",
        "input_name": "loved",
        "input_value": "true"
    },
    {
        "test_id": 634,
        "input_type": "boolean",
        "input_name": "young",
        "input_value": "false"
    },
    {
        "test_id": 634,
        "input_type": "boolean",
        "input_name": "beautiful",
        "input_value": "false"
    },
    {
        "test_id": 634,
        "input_type": "boolean",
        "input_name": "loved",
        "input_value": "false"
    },
    {
        "test_id": 635,
        "input_type": "boolean",
        "input_name": "young",
        "input_value": "false"
    },
    {
        "test_id": 635,
        "input_type": "boolean",
        "input_name": "beautiful",
        "input_value": "false"
    },
    {
        "test_id": 635,
        "input_type": "boolean",
        "input_name": "loved",
        "input_value": "true"
    },

    // Metro Card
    {
        "test_id": 636,
        "input_type": "number",
        "input_name": "lastNumberOfDays",
        "input_value": "30"
    },
    {
        "test_id": 637,
        "input_type": "number",
        "input_name": "lastNumberOfDays",
        "input_value": "31"
    },

    // Kill K-th Bit
    {
        "test_id": 638,
        "input_type": "number",
        "input_name": "n",
        "input_value": "37"
    },
    {
        "test_id": 638,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 639,
        "input_type": "number",
        "input_name": "n",
        "input_value": "37"
    },
    {
        "test_id": 639,
        "input_type": "number",
        "input_name": "k",
        "input_value": "4"
    },
    {
        "test_id": 640,
        "input_type": "number",
        "input_name": "n",
        "input_value": "37"
    },
    {
        "test_id": 640,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 641,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 641,
        "input_type": "number",
        "input_name": "k",
        "input_value": "4"
    },
    {
        "test_id": 642,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2147483647"
    },
    {
        "test_id": 642,
        "input_type": "number",
        "input_name": "k",
        "input_value": "16"
    },
    {
        "test_id": 643,
        "input_type": "number",
        "input_name": "n",
        "input_value": "374823748"
    },
    {
        "test_id": 643,
        "input_type": "number",
        "input_name": "k",
        "input_value": "13"
    },
    {
        "test_id": 644,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2734827"
    },
    {
        "test_id": 644,
        "input_type": "number",
        "input_name": "k",
        "input_value": "4"
    },
    {
        "test_id": 645,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1084197039"
    },
    {
        "test_id": 645,
        "input_type": "number",
        "input_name": "k",
        "input_value": "15"
    },
    {
        "test_id": 646,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1160825071"
    },
    {
        "test_id": 646,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 647,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2039063284"
    },
    {
        "test_id": 647,
        "input_type": "number",
        "input_name": "k",
        "input_value": "4"
    },

    // Array Packing
    {
        "test_id": 648,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[24, 85, 0]"
    },
    {
        "test_id": 649,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[23, 45, 39]"
    },
    {
        "test_id": 650,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 4, 8]"
    },
    {
        "test_id": 651,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[5]"
    },
    {
        "test_id": 652,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[187, 99, 42, 43]"
    },

    // Range Bit Count
    {
        "test_id": 653,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 653,
        "input_type": "number",
        "input_name": "b",
        "input_value": "7"
    },
    {
        "test_id": 654,
        "input_type": "number",
        "input_name": "a",
        "input_value": "0"
    },
    {
        "test_id": 654,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 655,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 655,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },
    {
        "test_id": 656,
        "input_type": "number",
        "input_name": "a",
        "input_value": "8"
    },
    {
        "test_id": 656,
        "input_type": "number",
        "input_name": "b",
        "input_value": "9"
    },
    {
        "test_id": 657,
        "input_type": "number",
        "input_name": "a",
        "input_value": "9"
    },
    {
        "test_id": 657,
        "input_type": "number",
        "input_name": "b",
        "input_value": "10"
    },

    // Mirror Bits
    {
        "test_id": 658,
        "input_type": "number",
        "input_name": "a",
        "input_value": "97"
    },
    {
        "test_id": 659,
        "input_type": "number",
        "input_name": "a",
        "input_value": "8"
    },
    {
        "test_id": 660,
        "input_type": "number",
        "input_name": "a",
        "input_value": "123"
    },
    {
        "test_id": 661,
        "input_type": "number",
        "input_name": "a",
        "input_value": "86782"
    },
    {
        "test_id": 662,
        "input_type": "number",
        "input_name": "a",
        "input_value": "5"
    },

    // Second-Rightmost Zero Bit
    {
        "test_id": 663,
        "input_type": "number",
        "input_name": "n",
        "input_value": "37"
    },
    {
        "test_id": 664,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1073741824"
    },
    {
        "test_id": 665,
        "input_type": "number",
        "input_name": "n",
        "input_value": "83748"
    },
    {
        "test_id": 666,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 667,
        "input_type": "number",
        "input_name": "n",
        "input_value": "728782938"
    },

    // Swap Adjacent Bits
    {
        "test_id": 668,
        "input_type": "number",
        "input_name": "n",
        "input_value": "13"
    },
    {
        "test_id": 669,
        "input_type": "number",
        "input_name": "n",
        "input_value": "74"
    },
    {
        "test_id": 670,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1073741823"
    },
    {
        "test_id": 671,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 672,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 673,
        "input_type": "number",
        "input_name": "n",
        "input_value": "83748"
    },

    // Different Rightmost Bit
    {
        "test_id": 674,
        "input_type": "number",
        "input_name": "n",
        "input_value": "11"
    },
    {
        "test_id": 674,
        "input_type": "number",
        "input_name": "m",
        "input_value": "13"
    },
    {
        "test_id": 675,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 675,
        "input_type": "number",
        "input_name": "m",
        "input_value": "23"
    },
    {
        "test_id": 676,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 676,
        "input_type": "number",
        "input_name": "m",
        "input_value": "0"
    },
    {
        "test_id": 677,
        "input_type": "number",
        "input_name": "n",
        "input_value": "64"
    },
    {
        "test_id": 677,
        "input_type": "number",
        "input_name": "m",
        "input_value": "65"
    },
    {
        "test_id": 678,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1073741823"
    },
    {
        "test_id": 678,
        "input_type": "number",
        "input_name": "m",
        "input_value": "1071513599"
    },
    {
        "test_id": 679,
        "input_type": "number",
        "input_name": "n",
        "input_value": "42"
    },
    {
        "test_id": 679,
        "input_type": "number",
        "input_name": "m",
        "input_value": "22"
    },

    // Equal Pair of Bits
    {
        "test_id": 680,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 680,
        "input_type": "number",
        "input_name": "m",
        "input_value": "11"
    },
    {
        "test_id": 681,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 681,
        "input_type": "number",
        "input_name": "m",
        "input_value": "0"
    },
    {
        "test_id": 682,
        "input_type": "number",
        "input_name": "n",
        "input_value": "28"
    },
    {
        "test_id": 682,
        "input_type": "number",
        "input_name": "m",
        "input_value": "27"
    },
    {
        "test_id": 683,
        "input_type": "number",
        "input_name": "n",
        "input_value": "895"
    },
    {
        "test_id": 683,
        "input_type": "number",
        "input_name": "m",
        "input_value": "928"
    },
    {
        "test_id": 684,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1073741824"
    },
    {
        "test_id": 684,
        "input_type": "number",
        "input_name": "m",
        "input_value": "1006895103"
    },

    // Least Factorial
    {
        "test_id": 685,
        "input_type": "number",
        "input_name": "n",
        "input_value": "17"
    },
    {
        "test_id": 686,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 687,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 688,
        "input_type": "number",
        "input_name": "n",
        "input_value": "25"
    },
    {
        "test_id": 689,
        "input_type": "number",
        "input_name": "n",
        "input_value": "18"
    },
    {
        "test_id": 690,
        "input_type": "number",
        "input_name": "n",
        "input_value": "109"
    },
    {
        "test_id": 691,
        "input_type": "number",
        "input_name": "n",
        "input_value": "106"
    },
    {
        "test_id": 692,
        "input_type": "number",
        "input_name": "n",
        "input_value": "11"
    },
    {
        "test_id": 693,
        "input_type": "number",
        "input_name": "n",
        "input_value": "55"
    },
    {
        "test_id": 694,
        "input_type": "number",
        "input_name": "n",
        "input_value": "24"
    },

    // Count Sum of Two Representations 2
    {
        "test_id": 695,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 695,
        "input_type": "number",
        "input_name": "l",
        "input_value": "2"
    },
    {
        "test_id": 695,
        "input_type": "number",
        "input_name": "r",
        "input_value": "4"
    },
    {
        "test_id": 696,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 696,
        "input_type": "number",
        "input_name": "l",
        "input_value": "3"
    },
    {
        "test_id": 696,
        "input_type": "number",
        "input_name": "r",
        "input_value": "3"
    },
    {
        "test_id": 697,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 697,
        "input_type": "number",
        "input_name": "l",
        "input_value": "9"
    },
    {
        "test_id": 697,
        "input_type": "number",
        "input_name": "r",
        "input_value": "11"
    },
    {
        "test_id": 698,
        "input_type": "number",
        "input_name": "n",
        "input_value": "24"
    },
    {
        "test_id": 698,
        "input_type": "number",
        "input_name": "l",
        "input_value": "8"
    },
    {
        "test_id": 698,
        "input_type": "number",
        "input_name": "r",
        "input_value": "16"
    },
    {
        "test_id": 699,
        "input_type": "number",
        "input_name": "n",
        "input_value": "24"
    },
    {
        "test_id": 699,
        "input_type": "number",
        "input_name": "l",
        "input_value": "12"
    },
    {
        "test_id": 699,
        "input_type": "number",
        "input_name": "r",
        "input_value": "12"
    },
    {
        "test_id": 700,
        "input_type": "number",
        "input_name": "n",
        "input_value": "93"
    },
    {
        "test_id": 700,
        "input_type": "number",
        "input_name": "l",
        "input_value": "24"
    },
    {
        "test_id": 700,
        "input_type": "number",
        "input_name": "r",
        "input_value": "58"
    },

    // Magical Well
    {
        "test_id": 701,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 701,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 701,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 702,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 702,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 702,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 703,
        "input_type": "number",
        "input_name": "a",
        "input_value": "6"
    },
    {
        "test_id": 703,
        "input_type": "number",
        "input_name": "b",
        "input_value": "5"
    },
    {
        "test_id": 703,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 704,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1601"
    },
    {
        "test_id": 704,
        "input_type": "number",
        "input_name": "b",
        "input_value": "337"
    },
    {
        "test_id": 704,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 705,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1891"
    },
    {
        "test_id": 705,
        "input_type": "number",
        "input_name": "b",
        "input_value": "352"
    },
    {
        "test_id": 705,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 706,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1936"
    },
    {
        "test_id": 706,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1835"
    },
    {
        "test_id": 706,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 707,
        "input_type": "number",
        "input_name": "a",
        "input_value": "957"
    },
    {
        "test_id": 707,
        "input_type": "number",
        "input_name": "b",
        "input_value": "57"
    },
    {
        "test_id": 707,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 708,
        "input_type": "number",
        "input_name": "a",
        "input_value": "687"
    },
    {
        "test_id": 708,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1337"
    },
    {
        "test_id": 708,
        "input_type": "number",
        "input_name": "n",
        "input_value": "0"
    },
    {
        "test_id": 709,
        "input_type": "number",
        "input_name": "a",
        "input_value": "491"
    },
    {
        "test_id": 709,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1552"
    },
    {
        "test_id": 709,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 710,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1275"
    },
    {
        "test_id": 710,
        "input_type": "number",
        "input_name": "b",
        "input_value": "362"
    },
    {
        "test_id": 710,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },

    // Lineup 
    {
        "test_id": 711,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "LLARL"
    },
    {
        "test_id": 712,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "RLR"
    },
    {
        "test_id": 713,
        "input_type": "string",
        "input_name": "commands",
        "input_value": ""
    },
    {
        "test_id": 714,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "L"
    },
    {
        "test_id": 715,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "A"
    },
    {
        "test_id": 716,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "AAAAAAAAAAAAAAA"
    },
    {
        "test_id": 717,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "RRRRRRRRRRLLLLLLLLLRRRRLLLLLLLLLL"
    },
    {
        "test_id": 718,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "AALAAALARAR"
    },

    // Addition Without Carrying
    {
        "test_id": 719,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "456"
    },
    {
        "test_id": 719,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "1734"
    },
    {
        "test_id": 720,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "99999"
    },
    {
        "test_id": 720,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "0"
    },
    {
        "test_id": 721,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "999"
    },
    {
        "test_id": 721,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "999"
    },
    {
        "test_id": 722,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "0"
    },
    {
        "test_id": 722,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "0"
    },
    {
        "test_id": 723,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "54321"
    },
    {
        "test_id": 723,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "54321"
    },
    {
        "test_id": 724,
        "input_type": "number",
        "input_name": "param1",
        "input_value": "54321"
    },
    {
        "test_id": 724,
        "input_type": "number",
        "input_name": "param2",
        "input_value": "56789"
    },

    // Apple Boxes
    {
        "test_id": 725,
        "input_type": "number",
        "input_name": "k",
        "input_value": "5"
    },
    {
        "test_id": 726,
        "input_type": "number",
        "input_name": "k",
        "input_value": "15"
    },
    {
        "test_id": 727,
        "input_type": "number",
        "input_name": "k",
        "input_value": "36"
    },
    {
        "test_id": 728,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1"
    },
    {
        "test_id": 729,
        "input_type": "number",
        "input_name": "k",
        "input_value": "14"
    },
    {
        "test_id": 730,
        "input_type": "number",
        "input_name": "k",
        "input_value": "12"
    },
    {
        "test_id": 731,
        "input_type": "number",
        "input_name": "k",
        "input_value": "9"
    },
    {
        "test_id": 732,
        "input_type": "number",
        "input_name": "k",
        "input_value": "40"
    },
    {
        "test_id": 733,
        "input_type": "number",
        "input_name": "k",
        "input_value": "37"
    },

    // Increase Number Roundness
    {
        "test_id": 734,
        "input_type": "number",
        "input_name": "n",
        "input_value": "902200100"
    },
    {
        "test_id": 735,
        "input_type": "number",
        "input_name": "n",
        "input_value": "11000"
    },
    {
        "test_id": 736,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99080"
    },
    {
        "test_id": 737,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1022220"
    },
    {
        "test_id": 738,
        "input_type": "number",
        "input_name": "n",
        "input_value": "106611"
    },
    {
        "test_id": 739,
        "input_type": "number",
        "input_name": "n",
        "input_value": "234230"
    },
    {
        "test_id": 740,
        "input_type": "number",
        "input_name": "n",
        "input_value": "888"
    },
    {
        "test_id": 741,
        "input_type": "number",
        "input_name": "n",
        "input_value": "100"
    },
    {
        "test_id": 742,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1000000000"
    },
    {
        "test_id": 743,
        "input_type": "number",
        "input_name": "n",
        "input_value": "103456789"
    },

    // Rounders
    {
        "test_id": 744,
        "input_type": "number",
        "input_name": "n",
        "input_value": "15"
    },
    {
        "test_id": 745,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1234"
    },
    {
        "test_id": 746,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1445"
    },
    {
        "test_id": 747,
        "input_type": "number",
        "input_name": "n",
        "input_value": "14"
    },
    {
        "test_id": 748,
        "input_type": "number",
        "input_name": "n",
        "input_value": "10"
    },
    {
        "test_id": 749,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7001"
    },
    {
        "test_id": 750,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99"
    },

    // Candles
    {
        "test_id": 751,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "5"
    },
    {
        "test_id": 751,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "2"
    },
    {
        "test_id": 752,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "1"
    },
    {
        "test_id": 752,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "2"
    },
    {
        "test_id": 753,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "3"
    },
    {
        "test_id": 753,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "3"
    },
    {
        "test_id": 754,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "11"
    },
    {
        "test_id": 754,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "3"
    },
    {
        "test_id": 755,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "15"
    },
    {
        "test_id": 755,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "5"
    },
    {
        "test_id": 756,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "14"
    },
    {
        "test_id": 756,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "3"
    },
    {
        "test_id": 757,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "12"
    },
    {
        "test_id": 757,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "2"
    },
    {
        "test_id": 758,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "6"
    },
    {
        "test_id": 758,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "4"
    },
    {
        "test_id": 759,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "13"
    },
    {
        "test_id": 759,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "5"
    },
    {
        "test_id": 760,
        "input_type": "number",
        "input_name": "candlesNumber",
        "input_value": "2"
    },
    {
        "test_id": 760,
        "input_type": "number",
        "input_name": "makeNew",
        "input_value": "3"
    },

    // Count Black Cells
    {
        "test_id": 761,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 761,
        "input_type": "number",
        "input_name": "m",
        "input_value": "4"
    },
    {
        "test_id": 762,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 762,
        "input_type": "number",
        "input_name": "m",
        "input_value": "3"
    },
    {
        "test_id": 763,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 763,
        "input_type": "number",
        "input_name": "m",
        "input_value": "5"
    },
    {
        "test_id": 764,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 764,
        "input_type": "number",
        "input_name": "m",
        "input_value": "1"
    },
    {
        "test_id": 765,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 765,
        "input_type": "number",
        "input_name": "m",
        "input_value": "2"
    },
    {
        "test_id": 766,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 766,
        "input_type": "number",
        "input_name": "m",
        "input_value": "3"
    },
    {
        "test_id": 767,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 767,
        "input_type": "number",
        "input_name": "m",
        "input_value": "239"
    },
    {
        "test_id": 768,
        "input_type": "number",
        "input_name": "n",
        "input_value": "33"
    },
    {
        "test_id": 768,
        "input_type": "number",
        "input_name": "m",
        "input_value": "44"
    },
    {
        "test_id": 769,
        "input_type": "number",
        "input_name": "n",
        "input_value": "16"
    },
    {
        "test_id": 769,
        "input_type": "number",
        "input_name": "m",
        "input_value": "8"
    },
    {
        "test_id": 770,
        "input_type": "number",
        "input_name": "n",
        "input_value": "66666"
    },
    {
        "test_id": 770,
        "input_type": "number",
        "input_name": "m",
        "input_value": "88888"
    },

    // Create Array
    {
        "test_id": 771,
        "input_type": "number",
        "input_name": "size",
        "input_value": "4"
    },
    {
        "test_id": 772,
        "input_type": "number",
        "input_name": "size",
        "input_value": "2"
    },
    {
        "test_id": 773,
        "input_type": "number",
        "input_name": "size",
        "input_value": "1"
    },
    {
        "test_id": 774,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 775,
        "input_type": "number",
        "input_name": "size",
        "input_value": "49"
    },

    // Array Replace
    {
        "test_id": 776,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "1"
    },
    {
        "test_id": 776,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "3"
    },
    {
        "test_id": 776,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1]"
    },
    {
        "test_id": 777,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 777,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "0"
    },
    {
        "test_id": 777,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 3, 4, 5]"
    },
    {
        "test_id": 778,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "1"
    },
    {
        "test_id": 778,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "10"
    },
    {
        "test_id": 778,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1, 1]"
    },
    {
        "test_id": 779,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "2"
    },
    {
        "test_id": 779,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "1"
    },
    {
        "test_id": 779,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1]"
    },
    {
        "test_id": 780,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "2"
    },
    {
        "test_id": 780,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "2"
    },
    {
        "test_id": 780,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 1, 2, 1]"
    },
    {
        "test_id": 781,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 781,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },
    {
        "test_id": 781,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[3, 1]"
    },
    {
        "test_id": 782,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "0"
    },
    {
        "test_id": 782,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },
    {
        "test_id": 782,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[10, 10]"
    },
    {
        "test_id": 783,
        "input_type": "number",
        "input_name": "elemToReplace",
        "input_value": "3"
    },
    {
        "test_id": 783,
        "input_type": "number",
        "input_name": "substitutionElem",
        "input_value": "9"
    },
    {
        "test_id": 783,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 1]"
    },

    // First Reverse Try
    {
        "test_id": 784,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[1, 2, 3, 4, 5]"
    },
    {
        "test_id": 785,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[]"
    },
    {
        "test_id": 786,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[239]"
    },
    {
        "test_id": 787,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[23, 54, 12, 3, 4, 56, 23, 12, 5, 324]"
    },
    {
        "test_id": 788,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-1, 1]"
    },
    {
        "test_id": 789,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[88, -101, -310, 818, 747, -888, -183, -687, -723, 188, -611, 677, -597, 293, -295, -162, -265, 368, 346, 81, -831, 198, -94, 685, -434, -241, -566, -397, 501, -183, 366, -669, 96, -592, 358, 598, 444, -929, 769, -361, -754, 218, -464, 332, 893, 422, -192, -287, -850, 543]"
    },

    // Concatenate Arrays
    {
        "test_id": 790,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 2, 1]"
    },
    {
        "test_id": 790,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[10, 11]"
    },
    {
        "test_id": 791,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2]"
    },
    {
        "test_id": 791,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[3, 1, 2]"
    },
    {
        "test_id": 792,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1]"
    },
    {
        "test_id": 792,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[]"
    },
    {
        "test_id": 793,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 10, 3, 9, 5, 11, 11]"
    },
    {
        "test_id": 793,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[4, 8, 1, 13, 3, 1, 14]"
    },
    {
        "test_id": 794,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[9, 6, 6, 9, 8, 14]"
    },
    {
        "test_id": 794,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[3, 2, 2, 5, 3, 11, 12, 9, 7, 7]"
    },

    // Remove Array Part
    {
        "test_id": 795,
        "input_type": "number",
        "input_name": "l",
        "input_value": "2"
    },
    {
        "test_id": 795,
        "input_type": "number",
        "input_name": "r",
        "input_value": "4"
    },
    {
        "test_id": 795,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 3, 2, 3, 4, 5]"
    },
    {
        "test_id": 796,
        "input_type": "number",
        "input_name": "l",
        "input_value": "0"
    },
    {
        "test_id": 796,
        "input_type": "number",
        "input_name": "r",
        "input_value": "2"
    },
    {
        "test_id": 796,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[2, 4, 10, 1]"
    },
    {
        "test_id": 797,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 797,
        "input_type": "number",
        "input_name": "r",
        "input_value": "1"
    },
    {
        "test_id": 797,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[5, 3, 2, 3, 4]"
    },
    {
        "test_id": 798,
        "input_type": "number",
        "input_name": "l",
        "input_value": "0"
    },
    {
        "test_id": 798,
        "input_type": "number",
        "input_name": "r",
        "input_value": "1"
    },
    {
        "test_id": 798,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 799,
        "input_type": "number",
        "input_name": "l",
        "input_value": "3"
    },
    {
        "test_id": 799,
        "input_type": "number",
        "input_name": "r",
        "input_value": "3"
    },
    {
        "test_id": 799,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[0, -2, 5, 6]"
    },
    {
        "test_id": 800,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 800,
        "input_type": "number",
        "input_name": "r",
        "input_value": "3"
    },
    {
        "test_id": 800,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[4, 3, 2, 1, 3, 4, 5]"
    },
    {
        "test_id": 801,
        "input_type": "number",
        "input_name": "l",
        "input_value": "19"
    },
    {
        "test_id": 801,
        "input_type": "number",
        "input_name": "r",
        "input_value": "98"
    },
    {
        "test_id": 801,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[24, -40, -30, 30, 80, -94, 18, -56, -31, -68, -94, 67, -28, -2, -10, -83, -41, 43, -27, 0, -39, -83, -76, -59, -32, 87, -31, -55, -35, 20, 67, -78, -32, -90, 72, 15, -59, 4, 69, -82, 2, 96, -99, -78, 93, -68, -39, 68, 49, -9, -49, 77, 81, -55, -16, -9, -11, 80, 29, -6, 90, 83, 16, 68, -62, -73, -5, -86, 0, -48, 88, -35, 87, 12, 92, 12, 46, 57, 71, 91, -55, -62, -24, -78, -40, 30, -97, 64, -9, 40, 93, -67, -26, 53, -81, -7, -16, 14, -70, 88]"
    },
    {
        "test_id": 802,
        "input_type": "number",
        "input_name": "l",
        "input_value": "0"
    },
    {
        "test_id": 802,
        "input_type": "number",
        "input_name": "r",
        "input_value": "99"
    },
    {
        "test_id": 802,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[66, -94, -83, -39, -27, 50, 58, 58, -68, -85, 55, -21, 83, -89, 52, -80, 17, -89, -56, 90, 75, 23, -74, -91, 93, -36, 90, 97, 52, 8, 0, -88, -5, -34, 55, 88, 96, -29, 30, -51, -69, 57, 85, -86, -47, 85, 77, 62, 55, 11, -4, 85, 32, 96, 69, 80, 78, -79, 70, 79, 77, 98, 85, 94, -34, 21, 5, 19, 85, 54, 50, 6, 31, -100, 74, -32, 35, 38, 59, 43, 89, 89, -60, 36, 46, 78, 43, 53, 84, -76, -24, -53, -5, 91, 100, 65, 23, 87, 20, 5]"
    },

    // Is Smooth?
    {
        "test_id": 803,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[7, 2, 2, 5, 10, 7]"
    },
    {
        "test_id": 804,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-5, -5, 10]"
    },
    {
        "test_id": 805,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[4, 2]"
    },
    {
        "test_id": 806,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[45, 23, 12, 33, 12, 453, -234, -45]"
    },
    {
        "test_id": 807,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-12, 34, 40, -5, -12, 4, 0, 0, -12]"
    },
    {
        "test_id": 808,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[9, 0, 15, 9]"
    },
    {
        "test_id": 809,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-6, 6, -6]"
    },
    {
        "test_id": 810,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[26, 26, -17]"
    },
    {
        "test_id": 811,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-7, 5, 5, 10]"
    },
    {
        "test_id": 812,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[3, 4, 5]"
    },
    {
        "test_id": 813,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-5, 3, -1, 9]"
    },

    // Replace Middle
    {
        "test_id": 814,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[7, 2, 2, 5, 10, 7]"
    },
    {
        "test_id": 815,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-5, -5, 10]"
    },
    {
        "test_id": 816,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[45, 23, 12, 33, 12, 453, -234, -45]"
    },
    {
        "test_id": 817,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[2, 8]"
    },
    {
        "test_id": 818,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-12, 34, 40, -5, -12, 4, 0, 0, -12]"
    },
    {
        "test_id": 819,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[9, 0, 15, 9]"
    },
    {
        "test_id": 820,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-6, 6, -6]"
    },
    {
        "test_id": 821,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[26, 26, -17]"
    },
    {
        "test_id": 822,
        "input_type": "arrayOfIntegers",
        "input_name": "arr",
        "input_value": "[-7, 5, 5, 10]"
    },

    // Make Array Consecutive 2
    {
        "test_id": 823,
        "input_type": "arrayOfIntegers",
        "input_name": "statues",
        "input_value": "[6, 2, 3, 8]"
    },
    {
        "test_id": 824,
        "input_type": "arrayOfIntegers",
        "input_name": "statues",
        "input_value": "[0, 3]"
    },
    {
        "test_id": 825,
        "input_type": "arrayOfIntegers",
        "input_name": "statues",
        "input_value": "[5, 4, 6]"
    },
    {
        "test_id": 826,
        "input_type": "arrayOfIntegers",
        "input_name": "statues",
        "input_value": "[6, 3]"
    },
    {
        "test_id": 827,
        "input_type": "arrayOfIntegers",
        "input_name": "statues",
        "input_value": "[1]"
    },

    // Is Power?
    {
        "test_id": 828,
        "input_type": "number",
        "input_name": "n",
        "input_value": "125"
    },
    {
        "test_id": 829,
        "input_type": "number",
        "input_name": "n",
        "input_value": "72"
    },
    {
        "test_id": 830,
        "input_type": "number",
        "input_name": "n",
        "input_value": "100"
    },
    {
        "test_id": 831,
        "input_type": "number",
        "input_name": "n",
        "input_value": "11"
    },
    {
        "test_id": 832,
        "input_type": "number",
        "input_name": "n",
        "input_value": "324"
    },
    {
        "test_id": 833,
        "input_type": "number",
        "input_name": "n",
        "input_value": "256"
    },
    {
        "test_id": 834,
        "input_type": "number",
        "input_name": "n",
        "input_value": "119"
    },
    {
        "test_id": 835,
        "input_type": "number",
        "input_name": "n",
        "input_value": "400"
    },
    {
        "test_id": 836,
        "input_type": "number",
        "input_name": "n",
        "input_value": "350"
    },
    {
        "test_id": 837,
        "input_type": "number",
        "input_name": "n",
        "input_value": "361"
    },

    // Is Sum of Consecutive 2
    {
        "test_id": 838,
        "input_type": "number",
        "input_name": "n",
        "input_value": "9"
    },
    {
        "test_id": 839,
        "input_type": "number",
        "input_name": "n",
        "input_value": "8"
    },
    {
        "test_id": 840,
        "input_type": "number",
        "input_name": "n",
        "input_value": "15"
    },
    {
        "test_id": 841,
        "input_type": "number",
        "input_name": "n",
        "input_value": "24"
    },
    {
        "test_id": 842,
        "input_type": "number",
        "input_name": "n",
        "input_value": "13"
    },
    {
        "test_id": 843,
        "input_type": "number",
        "input_name": "n",
        "input_value": "25"
    },
    {
        "test_id": 844,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99"
    },

    // Square Digits Sequence
    {
        "test_id": 845,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "16"
    },
    {
        "test_id": 846,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "103"
    },
    {
        "test_id": 847,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "1"
    },
    {
        "test_id": 848,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "13"
    },
    {
        "test_id": 849,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "89"
    },
    {
        "test_id": 850,
        "input_type": "number",
        "input_name": "a0",
        "input_value": "612"
    },

    // Pages Numbering With Ink
    {
        "test_id": 851,
        "input_type": "number",
        "input_name": "current",
        "input_value": "1"
    },
    {
        "test_id": 851,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "5"
    },
    {
        "test_id": 852,
        "input_type": "number",
        "input_name": "current",
        "input_value": "21"
    },
    {
        "test_id": 852,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "5"
    },
    {
        "test_id": 853,
        "input_type": "number",
        "input_name": "current",
        "input_value": "8"
    },
    {
        "test_id": 853,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "4"
    },
    {
        "test_id": 854,
        "input_type": "number",
        "input_name": "current",
        "input_value": "21"
    },
    {
        "test_id": 854,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "6"
    },
    {
        "test_id": 855,
        "input_type": "number",
        "input_name": "current",
        "input_value": "10"
    },
    {
        "test_id": 855,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "3"
    },
    {
        "test_id": 856,
        "input_type": "number",
        "input_name": "current",
        "input_value": "76"
    },
    {
        "test_id": 856,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "250"
    },
    {
        "test_id": 857,
        "input_type": "number",
        "input_name": "current",
        "input_value": "80"
    },
    {
        "test_id": 857,
        "input_type": "number",
        "input_name": "numberOfDigits",
        "input_value": "1000"
    },

    // Comfortable Numbers
    {
        "test_id": 858,
        "input_type": "number",
        "input_name": "l",
        "input_value": "10"
    },
    {
        "test_id": 858,
        "input_type": "number",
        "input_name": "r",
        "input_value": "12"
    },
    {
        "test_id": 859,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 859,
        "input_type": "number",
        "input_name": "r",
        "input_value": "9"
    },
    {
        "test_id": 860,
        "input_type": "number",
        "input_name": "l",
        "input_value": "13"
    },
    {
        "test_id": 860,
        "input_type": "number",
        "input_name": "r",
        "input_value": "13"
    },
    {
        "test_id": 861,
        "input_type": "number",
        "input_name": "l",
        "input_value": "12"
    },
    {
        "test_id": 861,
        "input_type": "number",
        "input_name": "r",
        "input_value": "108"
    },
    {
        "test_id": 862,
        "input_type": "number",
        "input_name": "l",
        "input_value": "239"
    },
    {
        "test_id": 862,
        "input_type": "number",
        "input_name": "r",
        "input_value": "777"
    },
    {
        "test_id": 863,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 863,
        "input_type": "number",
        "input_name": "r",
        "input_value": "1000"
    },

    // Weak Numbers
    {
        "test_id": 864,
        "input_type": "number",
        "input_name": "n",
        "input_value": "9"
    },
    {
        "test_id": 865,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 866,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 867,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 868,
        "input_type": "number",
        "input_name": "n",
        "input_value": "500"
    },
    {
        "test_id": 869,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },

    // Rectangle Rotation
    {
        "test_id": 870,
        "input_type": "number",
        "input_name": "a",
        "input_value": "6"
    },
    {
        "test_id": 870,
        "input_type": "number",
        "input_name": "b",
        "input_value": "4"
    },
    {
        "test_id": 871,
        "input_type": "number",
        "input_name": "a",
        "input_value": "30"
    },
    {
        "test_id": 871,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 872,
        "input_type": "number",
        "input_name": "a",
        "input_value": "8"
    },
    {
        "test_id": 872,
        "input_type": "number",
        "input_name": "b",
        "input_value": "6"
    },
    {
        "test_id": 873,
        "input_type": "number",
        "input_name": "a",
        "input_value": "16"
    },
    {
        "test_id": 873,
        "input_type": "number",
        "input_name": "b",
        "input_value": "20"
    },
    {
        "test_id": 874,
        "input_type": "number",
        "input_name": "a",
        "input_value": "20"
    },
    {
        "test_id": 874,
        "input_type": "number",
        "input_name": "b",
        "input_value": "32"
    },
    {
        "test_id": 875,
        "input_type": "number",
        "input_name": "a",
        "input_value": "30"
    },
    {
        "test_id": 875,
        "input_type": "number",
        "input_name": "b",
        "input_value": "26"
    },
    {
        "test_id": 876,
        "input_type": "number",
        "input_name": "a",
        "input_value": "50"
    },
    {
        "test_id": 876,
        "input_type": "number",
        "input_name": "b",
        "input_value": "4"
    },
    {
        "test_id": 877,
        "input_type": "number",
        "input_name": "a",
        "input_value": "2"
    },
    {
        "test_id": 877,
        "input_type": "number",
        "input_name": "b",
        "input_value": "2"
    },
    {
        "test_id": 878,
        "input_type": "number",
        "input_name": "a",
        "input_value": "50"
    },
    {
        "test_id": 878,
        "input_type": "number",
        "input_name": "b",
        "input_value": "50"
    },
    {
        "test_id": 879,
        "input_type": "number",
        "input_name": "a",
        "input_value": "38"
    },
    {
        "test_id": 879,
        "input_type": "number",
        "input_name": "b",
        "input_value": "42"
    },

    // Crossword Formation
    {
        "test_id": 880,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["crossword","square","formation","something"]'
    },
    {
        "test_id": 881,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["anaesthetist","thatch","ethnics","sabulous"]'
    },
    {
        "test_id": 882,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["eternal","texas","chainsaw","massacre"]'
    },
    {
        "test_id": 883,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["africa","america","australia","antarctica"]'
    },
    {
        "test_id": 884,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["phenomenon","remuneration","particularly","pronunciation"]'
    },
    {
        "test_id": 885,
        "input_type": "arrayOfStrings",
        "input_name": "words",
        "input_value": '["onomatopoeia","philosophical","provocatively","thesaurus"]'
    },

    // Enclose In Brackets
    {
        "test_id": 886,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abacaba"
    },
    {
        "test_id": 887,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdef"
    },
    {
        "test_id": 888,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aaad"
    },
    {
        "test_id": 889,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "if"
    },
    {
        "test_id": 890,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "it"
    },
    {
        "test_id": 891,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "doesnt"
    },
    {
        "test_id": 892,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "challenge"
    },
    {
        "test_id": 893,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "you"
    },
    {
        "test_id": 894,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "itt"
    },
    {
        "test_id": 895,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "wont"
    },

    // Proper Noun Correction
    {
        "test_id": 896,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "pARiS"
    },
    {
        "test_id": 897,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "John"
    },
    {
        "test_id": 898,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "mary"
    },
    {
        "test_id": 899,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "a"
    },
    {
        "test_id": 900,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "B"
    },
    {
        "test_id": 901,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "yFZMlGvUQP"
    },
    {
        "test_id": 902,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "HQQrrDxuqe"
    },
    {
        "test_id": 903,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "atDh"
    },
    {
        "test_id": 904,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "pJHSYVAZB"
    },
    {
        "test_id": 905,
        "input_type": "string",
        "input_name": "noun",
        "input_value": "dKrqO"
    },

    // Is Tandem Repeat?
    {
        "test_id": 906,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "tandemtandem"
    },
    {
        "test_id": 907,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "qqq"
    },
    {
        "test_id": 908,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "2w2ww"
    },
    {
        "test_id": 909,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "hophey"
    },
    {
        "test_id": 910,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "CodeSignalCodeSignal"
    },
    {
        "test_id": 911,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "interestinterest"
    },
    {
        "test_id": 912,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aa"
    },
    {
        "test_id": 913,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "ab"
    },
    {
        "test_id": 914,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "stringString"
    },
    {
        "test_id": 915,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "truetruetrue"
    },

    // Is Case-Insensitive Palindrome?
    {
        "test_id": 916,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "AaBaa"
    },
    {
        "test_id": 917,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abac"
    },
    {
        "test_id": 918,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aBACaba"
    },
    {
        "test_id": 919,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "opOP"
    },
    {
        "test_id": 920,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "ZZzzazZzz"
    },
    {
        "test_id": 921,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "zzzzazzzz"
    },
    {
        "test_id": 922,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "ZZzzabzZzz"
    },
    {
        "test_id": 923,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcdcbA"
    },
    {
        "test_id": 924,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abracabra"
    },
    {
        "test_id": 925,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abcd"
    },

    // Find Email Domain
    {
        "test_id": 926,
        "input_type": "string",
        "input_name": "address",
        "input_value": "prettyandsimple@example.com"
    },
    {
        "test_id": 927,
        "input_type": "string",
        "input_name": "address",
        "input_value": "fully-qualified-domain@codesignal.com"
    },
    {
        "test_id": 928,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\" \"@space.com"
    },
    {
        "test_id": 929,
        "input_type": "string",
        "input_name": "address",
        "input_value": "someaddress@yandex.ru"
    },
    {
        "test_id": 930,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\" \"@xample.org"
    },
    {
        "test_id": 931,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\"much.more unusual\"@yahoo.com"
    },
    {
        "test_id": 932,
        "input_type": "string",
        "input_name": "address",
        "input_value": "\"very.unusual.@.unusual.com\"@usual.com"
    },
    {
        "test_id": 933,
        "input_type": "string",
        "input_name": "address",
        "input_value": "admin@mailserver2.ru"
    },
    {
        "test_id": 934,
        "input_type": "string",
        "input_name": "address",
        "input_value": "example-indeed@strange-example.com"
    },
    {
        "test_id": 935,
        "input_type": "string",
        "input_name": "address",
        "input_value": "very.common@gmail.com"
    },

    // HTML End Tag By Start Tag
    {
        "test_id": 936,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<button type='button' disabled>"
    },
    {
        "test_id": 937,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<i>"
    },
    {
        "test_id": 938,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<div id='my_area' class='data' title='This is a test for title on Div tag'>"
    },
    {
        "test_id": 939,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<html>"
    },
    {
        "test_id": 940,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<TABLE border='1'>"
    },
    {
        "test_id": 941,
        "input_type": "string",
        "input_name": "startTag",
        "input_value": "<li class='test'>"
    },

    // Is MAC48 Address?
    {
        "test_id": 942,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "00-1B-63-84-45-E6"
    },
    {
        "test_id": 943,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "Z1-1B-63-84-45-E6"
    },
    {
        "test_id": 944,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "not a MAC-48 address"
    },
    {
        "test_id": 945,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "FF-FF-FF-FF-FF-FF"
    },
    {
        "test_id": 946,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "00-00-00-00-00-00"
    },
    {
        "test_id": 947,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "G0-00-00-00-00-00"
    },
    {
        "test_id": 948,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "02-03-04-05-06-07-"
    },
    {
        "test_id": 949,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "12-34-56-78-9A-BC"
    },
    {
        "test_id": 950,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "FF-FF-AB-CD-EA-BC"
    },
    {
        "test_id": 951,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "12-34-56-78-9A-BG"
    },

    // Is Unstable Pair?
    {
        "test_id": 952,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "aa"
    },
    {
        "test_id": 952,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "AAB"
    },
    {
        "test_id": 953,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "A"
    },
    {
        "test_id": 953,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "z"
    },
    {
        "test_id": 954,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "yyyyyy"
    },
    {
        "test_id": 954,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "Azzzzzzzzz"
    },
    {
        "test_id": 955,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "mehOu"
    },
    {
        "test_id": 955,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "mehau"
    },
    {
        "test_id": 956,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "aaZ"
    },
    {
        "test_id": 956,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "AAzz"
    },
    {
        "test_id": 957,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "fdsAs"
    },
    {
        "test_id": 957,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "dzdw"
    },
    {
        "test_id": 958,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "aaad"
    },
    {
        "test_id": 958,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "aaAdd"
    },
    {
        "test_id": 959,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "zzzzzAa123"
    },
    {
        "test_id": 959,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "zzzzza"
    },
    {
        "test_id": 960,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "123za"
    },
    {
        "test_id": 960,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "123Z"
    },
    {
        "test_id": 961,
        "input_type": "string",
        "input_name": "filename1",
        "input_value": "qwerTyu123"
    },
    {
        "test_id": 961,
        "input_type": "string",
        "input_name": "filename2",
        "input_value": "qwertyu"
    },

    // Strings Construction
    {
        "test_id": 962,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abc"
    },
    {
        "test_id": 962,
        "input_type": "string",
        "input_name": "b",
        "input_value": "abccba"
    },
    {
        "test_id": 963,
        "input_type": "string",
        "input_name": "a",
        "input_value": "ab"
    },
    {
        "test_id": 963,
        "input_type": "string",
        "input_name": "b",
        "input_value": "abcbcb"
    },
    {
        "test_id": 964,
        "input_type": "string",
        "input_name": "a",
        "input_value": "ab"
    },
    {
        "test_id": 964,
        "input_type": "string",
        "input_name": "b",
        "input_value": "abccba"
    },
    {
        "test_id": 965,
        "input_type": "string",
        "input_name": "a",
        "input_value": "b"
    },
    {
        "test_id": 965,
        "input_type": "string",
        "input_name": "b",
        "input_value": "abccba"
    },
    {
        "test_id": 966,
        "input_type": "string",
        "input_name": "a",
        "input_value": "c"
    },
    {
        "test_id": 966,
        "input_type": "string",
        "input_name": "b",
        "input_value": "abccbac"
    },
    {
        "test_id": 967,
        "input_type": "string",
        "input_name": "a",
        "input_value": "z"
    },
    {
        "test_id": 967,
        "input_type": "string",
        "input_name": "b",
        "input_value": "z"
    },
    {
        "test_id": 968,
        "input_type": "string",
        "input_name": "a",
        "input_value": "z"
    },
    {
        "test_id": 968,
        "input_type": "string",
        "input_name": "b",
        "input_value": "y"
    },
    {
        "test_id": 969,
        "input_type": "string",
        "input_name": "a",
        "input_value": "za"
    },
    {
        "test_id": 969,
        "input_type": "string",
        "input_name": "b",
        "input_value": "bzc"
    },
    {
        "test_id": 970,
        "input_type": "string",
        "input_name": "a",
        "input_value": "hnccv"
    },
    {
        "test_id": 970,
        "input_type": "string",
        "input_name": "b",
        "input_value": "hncvohcjhdfnhonxddcocjncchnvohchnjohcvnhjdhihsn"
    },
    {
        "test_id": 971,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abc"
    },
    {
        "test_id": 971,
        "input_type": "string",
        "input_name": "b",
        "input_value": "def"
    },
    {
        "test_id": 972,
        "input_type": "string",
        "input_name": "a",
        "input_value": "zzz"
    },
    {
        "test_id": 972,
        "input_type": "string",
        "input_name": "b",
        "input_value": "zzzzzzzzzzz"
    },
    {
        "test_id": 973,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abcabcabc"
    },
    {
        "test_id": 973,
        "input_type": "string",
        "input_name": "b",
        "input_value": "aaaaaaaaaaabbbbbbbbbbcccccccccc"
    },
    {
        "test_id": 974,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abc"
    },
    {
        "test_id": 974,
        "input_type": "string",
        "input_name": "b",
        "input_value": "xyz"
    },
    {
        "test_id": 975,
        "input_type": "string",
        "input_name": "a",
        "input_value": "zbc"
    },
    {
        "test_id": 975,
        "input_type": "string",
        "input_name": "b",
        "input_value": "ydlblksdjccdddb"
    },
    {
        "test_id": 976,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abdd"
    },
    {
        "test_id": 976,
        "input_type": "string",
        "input_name": "b",
        "input_value": "adadapqrtsmnckgljj"
    },
    {
        "test_id": 977,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abcde"
    },
    {
        "test_id": 977,
        "input_type": "string",
        "input_name": "b",
        "input_value": "edbcaacbdebcedaadbecadbceecabddbaecabecdcdabeabcde"
    },
    {
        "test_id": 978,
        "input_type": "string",
        "input_name": "a",
        "input_value": "abcde"
    },
    {
        "test_id": 978,
        "input_type": "string",
        "input_name": "b",
        "input_value": "edbcaaclpebcekbadbecadbcefcabddbaecaaaaacdakrabcde"
    },
    {
        "test_id": 979,
        "input_type": "string",
        "input_name": "a",
        "input_value": "zkz"
    },
    {
        "test_id": 979,
        "input_type": "string",
        "input_name": "b",
        "input_value": "zpaskazgazkazggaaksiokkzzzzaaazzpkuazzzgzkzabrgzzq"
    },
    {
        "test_id": 980,
        "input_type": "string",
        "input_name": "a",
        "input_value": "ggagagagga"
    },
    {
        "test_id": 980,
        "input_type": "string",
        "input_name": "b",
        "input_value": "gga"
    },
    {
        "test_id": 981,
        "input_type": "string",
        "input_name": "a",
        "input_value": "pqrsttt"
    },
    {
        "test_id": 981,
        "input_type": "string",
        "input_name": "b",
        "input_value": "parfkajfraqrakjssattertjeqsqaptatdptdstasreraqprtt"
    },
    {
        "test_id": 982,
        "input_type": "string",
        "input_name": "a",
        "input_value": "azgtpzzgab"
    },
    {
        "test_id": 982,
        "input_type": "string",
        "input_name": "b",
        "input_value": "taagzajfrqrakjzztgzgzazstppatdptdblgaasreraqprtt"
    },

    // Is Substitution Cipher?
    {
        "test_id": 983,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aacb"
    },
    {
        "test_id": 983,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "aabc"
    },
    {
        "test_id": 984,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aa"
    },
    {
        "test_id": 984,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "bc"
    },
    {
        "test_id": 985,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aaxxaaz"
    },
    {
        "test_id": 985,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "aazzaay"
    },
    {
        "test_id": 986,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aaxyaa"
    },
    {
        "test_id": 986,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "aazzaa"
    },
    {
        "test_id": 987,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aabc"
    },
    {
        "test_id": 987,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "aacb"
    },
    {
        "test_id": 988,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "dccd"
    },
    {
        "test_id": 988,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "zzxx"
    },
    {
        "test_id": 989,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "ddcc"
    },
    {
        "test_id": 989,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "zzxx"
    },
    {
        "test_id": 990,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aaaabbbbcc"
    },
    {
        "test_id": 990,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "cccccccccc"
    },
    {
        "test_id": 991,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "abcdefg"
    },
    {
        "test_id": 991,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "hijklmn"
    },
    {
        "test_id": 992,
        "input_type": "string",
        "input_name": "string1",
        "input_value": "aaabbbccc"
    },
    {
        "test_id": 992,
        "input_type": "string",
        "input_name": "string2",
        "input_value": "aaabbbccc"
    },

    // Create Anagram
    {
        "test_id": 993,
        "input_type": "string",
        "input_name": "s",
        "input_value": "AABAA"
    },
    {
        "test_id": 993,
        "input_type": "string",
        "input_name": "t",
        "input_value": "BBAAA"
    },
    {
        "test_id": 994,
        "input_type": "string",
        "input_name": "s",
        "input_value": "OVGHK"
    },
    {
        "test_id": 994,
        "input_type": "string",
        "input_name": "t",
        "input_value": "RPGUC"
    },
    {
        "test_id": 995,
        "input_type": "string",
        "input_name": "s",
        "input_value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB"
    },
    {
        "test_id": 995,
        "input_type": "string",
        "input_name": "t",
        "input_value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC"
    },
    {
        "test_id": 996,
        "input_type": "string",
        "input_name": "s",
        "input_value": "HDFFVR"
    },
    {
        "test_id": 996,
        "input_type": "string",
        "input_name": "t",
        "input_value": "FEDDEE"
    },
    {
        "test_id": 997,
        "input_type": "string",
        "input_name": "s",
        "input_value": "AABCDS"
    },
    {
        "test_id": 997,
        "input_type": "string",
        "input_name": "t",
        "input_value": "BASEAE"
    },
    {
        "test_id": 998,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZY"
    },
    {
        "test_id": 998,
        "input_type": "string",
        "input_name": "t",
        "input_value": "YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYZ"
    },
    {
        "test_id": 999,
        "input_type": "string",
        "input_name": "s",
        "input_value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    {
        "test_id": 999,
        "input_type": "string",
        "input_name": "t",
        "input_value": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"
    },
    {
        "test_id": 1000,
        "input_type": "string",
        "input_name": "s",
        "input_value": "AAAAAA"
    },
    {
        "test_id": 1000,
        "input_type": "string",
        "input_name": "t",
        "input_value": "AAAAAA"
    },
    {
        "test_id": 1001,
        "input_type": "string",
        "input_name": "s",
        "input_value": "KJDMDLEEKALIJB"
    },
    {
        "test_id": 1001,
        "input_type": "string",
        "input_name": "t",
        "input_value": "AFDJGDCGHMIGHB"
    },
    {
        "test_id": 1002,
        "input_type": "string",
        "input_name": "s",
        "input_value": "BBAAABCBCAABB"
    },
    {
        "test_id": 1002,
        "input_type": "string",
        "input_name": "t",
        "input_value": "BBBCCCBABBACA"
    },

    // Construct Square
    {
        "test_id": 1003,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ab"
    },
    {
        "test_id": 1004,
        "input_type": "string",
        "input_name": "s",
        "input_value": "zzz"
    },
    {
        "test_id": 1005,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aba"
    },
    {
        "test_id": 1006,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abcbbb"
    },
    {
        "test_id": 1007,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abc"
    },
    {
        "test_id": 1008,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aaaabbcde"
    },

    // Numbers Grouping
    {
        "test_id": 1009,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[10000, 20000, 30000, 40000, 50000, 60000, 10000, 120000, 150000, 200000, 300000, 1000000, 10000000, 100000000, 10000000]"
    },
    {
        "test_id": 1010,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[10000]"
    },
    {
        "test_id": 1011,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[10000, 1]"
    },
    {
        "test_id": 1012,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[685400881, 696804468, 696804942, 803902442, 976412678, 976414920, 47763597, 803900633, 233144924, 47764349, 233149077, 214990733, 214994039, 280528089, 280524347, 685401797]"
    },
    {
        "test_id": 1013,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[598589004, 92986320, 520103781, 808743817, 635098665, 95244159, 808747008, 867017063, 635092226, 867013865, 92989995, 520100093, 95245838, 84897101, 598583113, 84893918]"
    },
    {
        "test_id": 1014,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1000000000, 999990000, 999980000, 999970000, 999960000, 999950000, 999940000, 999930000, 999920000, 999910000]"
    },
    {
        "test_id": 1015,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[102382103, 21039898, 39823, 433, 30928398, 40283209, 23234, 342534, 98473483, 498398424, 9384984, 9839239]"
    },

    // Different Squares
    {
        "test_id": 1016,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1,2,1],[2,2,2],[2,2,2],[1,2,3],[2,2,1]]"
    },
    {
        "test_id": 1017,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9],[9,9,9,9,9]]"
    },
    {
        "test_id": 1018,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3]]"
    },
    {
        "test_id": 1019,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3,4,5,6,7,8,9]]"
    },
    {
        "test_id": 1020,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3],[4],[5],[6],[7]]"
    },
    {
        "test_id": 1021,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[2,5,3,4,3,1,3,2],[4,5,4,1,2,4,1,3],[1,1,2,1,4,1,1,5],[1,3,4,2,3,4,2,4],[1,5,5,2,1,3,1,1],[1,2,3,3,5,1,2,4],[3,1,4,4,4,1,5,5],[5,1,3,3,1,5,3,5],[5,4,4,3,5,4,4,4]]"
    },
    {
        "test_id": 1022,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1,1,1,1,1,1,2,2,2,3,3,3,9,9,9,2,3,9]]"
    },

    // Most Frequent Digit Sum
    {
        "test_id": 1023,
        "input_type": "number",
        "input_name": "n",
        "input_value": "88"
    },
    {
        "test_id": 1024,
        "input_type": "number",
        "input_name": "n",
        "input_value": "8"
    },
    {
        "test_id": 1025,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1026,
        "input_type": "number",
        "input_name": "n",
        "input_value": "17"
    },
    {
        "test_id": 1027,
        "input_type": "number",
        "input_name": "n",
        "input_value": "239"
    },
    {
        "test_id": 1028,
        "input_type": "number",
        "input_name": "n",
        "input_value": "994"
    },
    {
        "test_id": 1029,
        "input_type": "number",
        "input_name": "n",
        "input_value": "99999"
    },

    // Number of Clans
    {
        "test_id": 1030,
        "input_type": "number",
        "input_name": "k",
        "input_value": "6"
    },
    {
        "test_id": 1030,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[2, 3]"
    },
    {
        "test_id": 1031,
        "input_type": "number",
        "input_name": "k",
        "input_value": "6"
    },
    {
        "test_id": 1031,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[2, 3, 4]"
    },
    {
        "test_id": 1032,
        "input_type": "number",
        "input_name": "k",
        "input_value": "10"
    },
    {
        "test_id": 1032,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[1, 3]"
    },
    {
        "test_id": 1033,
        "input_type": "number",
        "input_name": "k",
        "input_value": "10"
    },
    {
        "test_id": 1033,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[6, 2, 2, 8, 9, 2, 2, 2, 2]"
    },
    {
        "test_id": 1034,
        "input_type": "number",
        "input_name": "k",
        "input_value": "9"
    },
    {
        "test_id": 1034,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[2, 5]"
    },
    {
        "test_id": 1035,
        "input_type": "number",
        "input_name": "k",
        "input_value": "8"
    },
    {
        "test_id": 1035,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[1, 2, 3]"
    },
    {
        "test_id": 1036,
        "input_type": "number",
        "input_name": "k",
        "input_value": "5"
    },
    {
        "test_id": 1036,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[5, 6]"
    },
    {
        "test_id": 1037,
        "input_type": "number",
        "input_name": "k",
        "input_value": "5"
    },
    {
        "test_id": 1037,
        "input_type": "arrayOfIntegers",
        "input_name": "divisors",
        "input_value": "[7, 1, 3, 4, 4]"
    },

    // House Numbers Sum
    {
        "test_id": 1038,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[5, 1, 2, 3, 0, 1, 5, 0, 2]"
    },
    {
        "test_id": 1039,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[4, 2, 1, 6, 0]"
    },
    {
        "test_id": 1040,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[4, 1, 2, 3, 0, 10, 2]"
    },
    {
        "test_id": 1041,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[0, 1, 2, 3, 0]"
    },
    {
        "test_id": 1042,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[5, 1, 1, 3, 0, 1, 5, 0, 2]"
    },
    {
        "test_id": 1043,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[10, 10, 10, 10, 10, 10, 10, 10, 10, 0]"
    },
    {
        "test_id": 1044,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[10, 10, 10, 10, 10, 10, 10, 10, 0, 10]"
    },

    // All Longest Strings
    {
        "test_id": 1045,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aba","aa","ad","vcd","aba"]'
    },
    {
        "test_id": 1046,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aa"]'
    },
    {
        "test_id": 1047,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc","eeee","abcd","dcd"]'
    },
    {
        "test_id": 1048,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["a","abc","cbd","zzzzzz","a","abcdef","asasa","aaaaaa"]'
    },
    {
        "test_id": 1049,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["enyky","benyky","yely","varennyky"]'
    },
    {
        "test_id": 1050,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abacaba","abacab","abac","xxxxxx"]'
    },
    {
        "test_id": 1051,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["young","yooooooung","hot","or","not","come","on","fire","water","watermelon"]'
    },
    {
        "test_id": 1052,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["onsfnib","aokbcwthc","jrfcw"]'
    },
    {
        "test_id": 1053,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["lbgwyqkry"]'
    },
    {
        "test_id": 1054,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["i"]'
    },

    // House of Cats
    {
        "test_id": 1055,
        "input_type": "number",
        "input_name": "legs",
        "input_value": "6"
    },
    {
        "test_id": 1056,
        "input_type": "number",
        "input_name": "legs",
        "input_value": "2"
    },
    {
        "test_id": 1057,
        "input_type": "number",
        "input_name": "legs",
        "input_value": "8"
    },
    {
        "test_id": 1058,
        "input_type": "number",
        "input_name": "legs",
        "input_value": "4"
    },
    {
        "test_id": 1059,
        "input_type": "number",
        "input_name": "legs",
        "input_value": "44"
    },

    // Alphabet Subsequence
    {
        "test_id": 1060,
        "input_type": "string",
        "input_name": "s",
        "input_value": "effg"
    },
    {
        "test_id": 1061,
        "input_type": "string",
        "input_name": "s",
        "input_value": "cdce"
    },
    {
        "test_id": 1062,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ace"
    },
    {
        "test_id": 1063,
        "input_type": "string",
        "input_name": "s",
        "input_value": "bxz"
    },
    {
        "test_id": 1064,
        "input_type": "string",
        "input_name": "s",
        "input_value": "cdefghijkxyzz"
    },
    {
        "test_id": 1065,
        "input_type": "string",
        "input_name": "s",
        "input_value": "qa"
    },
    {
        "test_id": 1066,
        "input_type": "string",
        "input_name": "s",
        "input_value": "fkyz"
    },
    {
        "test_id": 1067,
        "input_type": "string",
        "input_name": "s",
        "input_value": "xz"
    },
    {
        "test_id": 1068,
        "input_type": "string",
        "input_name": "s",
        "input_value": "pfyz"
    },
    {
        "test_id": 1069,
        "input_type": "string",
        "input_name": "s",
        "input_value": "fz"
    },

    // Minimal Number of Coins
    {
        "test_id": 1070,
        "input_type": "number",
        "input_name": "price",
        "input_value": "28"
    },
    {
        "test_id": 1070,
        "input_type": "arrayOfIntegers",
        "input_name": "coins",
        "input_value": "[1, 2, 10]"
    },
    {
        "test_id": 1071,
        "input_type": "number",
        "input_name": "price",
        "input_value": "239"
    },
    {
        "test_id": 1071,
        "input_type": "arrayOfIntegers",
        "input_name": "coins",
        "input_value": "[1, 5, 10, 100]"
    },
    {
        "test_id": 1072,
        "input_type": "number",
        "input_name": "price",
        "input_value": "8"
    },
    {
        "test_id": 1072,
        "input_type": "arrayOfIntegers",
        "input_name": "coins",
        "input_value": "[1]"
    },
    {
        "test_id": 1073,
        "input_type": "number",
        "input_name": "price",
        "input_value": "150"
    },
    {
        "test_id": 1073,
        "input_type": "arrayOfIntegers",
        "input_name": "coins",
        "input_value": "[1, 2, 20, 60, 120]"
    },
    {
        "test_id": 1074,
        "input_type": "number",
        "input_name": "price",
        "input_value": "45"
    },
    {
        "test_id": 1074,
        "input_type": "arrayOfIntegers",
        "input_name": "coins",
        "input_value": "[1, 3, 6, 30]"
    },

    // Add Border
    {
        "test_id": 1075,
        "input_type": "arrayOfStrings",
        "input_name": "picture",
        "input_value": '["abc","ded"]'
    },
    {
        "test_id": 1076,
        "input_type": "arrayOfStrings",
        "input_name": "picture",
        "input_value": '["a"]'
    },
    {
        "test_id": 1077,
        "input_type": "arrayOfStrings",
        "input_name": "picture",
        "input_value": '["aa","**","zz"]'
    },
    {
        "test_id": 1078,
        "input_type": "arrayOfStrings",
        "input_name": "picture",
        "input_value": '["abcde","fghij","klmno","pqrst","uvwxy"]'
    },
    {
        "test_id": 1079,
        "input_type": "arrayOfStrings",
        "input_name": "picture",
        "input_value": '["wzy**"]'
    },

    // Switch Lights
    {
        "test_id": 1080,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 1, 1, 1]"
    },
    {
        "test_id": 1081,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[0, 0]"
    },
    {
        "test_id": 1082,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 0, 0, 1, 0, 1, 0, 1]"
    },
    {
        "test_id": 1083,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1]"
    },
    {
        "test_id": 1084,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 0, 0, 1]"
    },
    {
        "test_id": 1085,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 1, 0, 1, 1, 1]"
    },
    {
        "test_id": 1086,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1]"
    },
    {
        "test_id": 1087,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[0, 0, 0, 0, 0, 0]"
    },
    {
        "test_id": 1088,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1]"
    },

    // Timed Reading
    {
        "test_id": 1089,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "4"
    },
    {
        "test_id": 1089,
        "input_type": "string",
        "input_name": "text",
        "input_value": "The Fox asked the stork, 'How is the soup?'"
    },
    {
        "test_id": 1090,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "1"
    },
    {
        "test_id": 1090,
        "input_type": "string",
        "input_name": "text",
        "input_value": "..."
    },
    {
        "test_id": 1091,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "3"
    },
    {
        "test_id": 1091,
        "input_type": "string",
        "input_name": "text",
        "input_value": "This play was good for us."
    },
    {
        "test_id": 1092,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "3"
    },
    {
        "test_id": 1092,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Suddenly he stopped, and glanced up at the houses"
    },
    {
        "test_id": 1093,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "6"
    },
    {
        "test_id": 1093,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Zebras evolved among the Old World horses within the last four million years."
    },
    {
        "test_id": 1094,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "5"
    },
    {
        "test_id": 1094,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Although zebra species may have overlapping ranges, they do not interbreed."
    },
    {
        "test_id": 1095,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "1"
    },
    {
        "test_id": 1095,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Oh!"
    },
    {
        "test_id": 1096,
        "input_type": "number",
        "input_name": "maxLength",
        "input_value": "5"
    },
    {
        "test_id": 1096,
        "input_type": "string",
        "input_name": "text",
        "input_value": "Now and then, however, he is horribly thoughtless, and seems to take a real delight in giving me pain."
    },

    // Elections Winners
    {
        "test_id": 1097,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3"
    },
    {
        "test_id": 1097,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[2, 3, 5, 2]"
    },
    {
        "test_id": 1098,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 1098,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 3, 3, 1, 1]"
    },
    {
        "test_id": 1099,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 1099,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[5, 1, 3, 4, 1]"
    },
    {
        "test_id": 1100,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1"
    },
    {
        "test_id": 1100,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 1, 1, 1]"
    },
    {
        "test_id": 1101,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 1101,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[1, 1, 1, 1]"
    },
    {
        "test_id": 1102,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 1102,
        "input_type": "arrayOfIntegers",
        "input_name": "votes",
        "input_value": "[3, 1, 1, 3, 1]"
    },

    // Integer to String of Fixed Width
    {
        "test_id": 1103,
        "input_type": "number",
        "input_name": "number",
        "input_value": "1234"
    },
    {
        "test_id": 1103,
        "input_type": "number",
        "input_name": "width",
        "input_value": "2"
    },
    {
        "test_id": 1104,
        "input_type": "number",
        "input_name": "number",
        "input_value": "1234"
    },
    {
        "test_id": 1104,
        "input_type": "number",
        "input_name": "width",
        "input_value": "4"
    },
    {
        "test_id": 1105,
        "input_type": "number",
        "input_name": "number",
        "input_value": "1234"
    },
    {
        "test_id": 1105,
        "input_type": "number",
        "input_name": "width",
        "input_value": "5"
    },
    {
        "test_id": 1106,
        "input_type": "number",
        "input_name": "number",
        "input_value": "0"
    },
    {
        "test_id": 1106,
        "input_type": "number",
        "input_name": "width",
        "input_value": "1"
    },
    {
        "test_id": 1107,
        "input_type": "number",
        "input_name": "number",
        "input_value": "89"
    },
    {
        "test_id": 1107,
        "input_type": "number",
        "input_name": "width",
        "input_value": "4"
    },
    {
        "test_id": 1108,
        "input_type": "number",
        "input_name": "number",
        "input_value": "23456"
    },
    {
        "test_id": 1108,
        "input_type": "number",
        "input_name": "width",
        "input_value": "4"
    },
    {
        "test_id": 1109,
        "input_type": "number",
        "input_name": "number",
        "input_value": "899"
    },
    {
        "test_id": 1109,
        "input_type": "number",
        "input_name": "width",
        "input_value": "3"
    },

    // Are Similar?
    {
        "test_id": 1110,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 3]"
    },
    {
        "test_id": 1110,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[2, 1, 3]"
    },
    {
        "test_id": 1111,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 2]"
    },
    {
        "test_id": 1111,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[2, 1, 1]"
    },
    {
        "test_id": 1112,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 1, 2]"
    },
    {
        "test_id": 1112,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[2, 2, 1, 1]"
    },
    {
        "test_id": 1113,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 1, 2, 2, 1]"
    },
    {
        "test_id": 1113,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[2, 2, 1, 1, 2, 1]"
    },
    {
        "test_id": 1114,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 1, 4]"
    },
    {
        "test_id": 1114,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[1, 2, 3]"
    },
    {
        "test_id": 1115,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 3]"
    },
    {
        "test_id": 1115,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[1, 10, 2]"
    },
    {
        "test_id": 1116,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 3, 1]"
    },
    {
        "test_id": 1116,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[1, 3, 2]"
    },
    {
        "test_id": 1117,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 3, 9]"
    },
    {
        "test_id": 1117,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[10, 3, 2]"
    },
    {
        "test_id": 1118,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[832, 998, 148, 570, 533, 561, 894, 147, 455, 279]"
    },
    {
        "test_id": 1118,
        "input_type": "arrayOfIntegers",
        "input_name": "b",
        "input_value": "[832, 570, 148, 998, 533, 561, 455, 147, 894, 279]"
    },

    // Ada Number
    {
        "test_id": 1119,
        "input_type": "string",
        "input_name": "line",
        "input_value": "123_456_789"
    },
    {
        "test_id": 1120,
        "input_type": "string",
        "input_name": "line",
        "input_value": "16#123abc#"
    },
    {
        "test_id": 1121,
        "input_type": "string",
        "input_name": "line",
        "input_value": "10#123abc#"
    },
    {
        "test_id": 1122,
        "input_type": "string",
        "input_name": "line",
        "input_value": "10#10#123ABC#"
    },
    {
        "test_id": 1123,
        "input_type": "string",
        "input_name": "line",
        "input_value": "10#0#"
    },
    {
        "test_id": 1124,
        "input_type": "string",
        "input_name": "line",
        "input_value": "10##"
    },
    {
        "test_id": 1125,
        "input_type": "string",
        "input_name": "line",
        "input_value": "16#1234567890ABCDEFabcdef#"
    },
    {
        "test_id": 1126,
        "input_type": "string",
        "input_name": "line",
        "input_value": "1600#"
    },
    {
        "test_id": 1127,
        "input_type": "string",
        "input_name": "line",
        "input_value": "7#???#"
    },
    {
        "test_id": 1128,
        "input_type": "string",
        "input_name": "line",
        "input_value": "4#4#"
    },
    {
        "test_id": 1129,
        "input_type": "string",
        "input_name": "line",
        "input_value": "3454235ab534"
    },
    {
        "test_id": 1130,
        "input_type": "string",
        "input_name": "line",
        "input_value": "1#0#"
    },
    {
        "test_id": 1131,
        "input_type": "string",
        "input_name": "line",
        "input_value": "1_#0_#"
    },
    {
        "test_id": 1132,
        "input_type": "string",
        "input_name": "line",
        "input_value": "17#ac#"
    },
    {
        "test_id": 1133,
        "input_type": "string",
        "input_name": "line",
        "input_value": "2#10110#"
    },
    {
        "test_id": 1134,
        "input_type": "string",
        "input_name": "line",
        "input_value": "2#10110"
    },
    {
        "test_id": 1135,
        "input_type": "string",
        "input_name": "line",
        "input_value": "#2#10110"
    },
    {
        "test_id": 1136,
        "input_type": "string",
        "input_name": "line",
        "input_value": "#2#10110#"
    },
    {
        "test_id": 1137,
        "input_type": "string",
        "input_name": "line",
        "input_value": "9##"
    },

    // Three Split
    {
        "test_id": 1138,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[0, -1, 0, -1, 0, -1]"
    },
    {
        "test_id": 1139,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1, 0, -1, 0, -1, 0]"
    },
    {
        "test_id": 1140,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1, 1, -1, 1, -1, 1, -1, 1]"
    },
    {
        "test_id": 1141,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[7, 8, 2, 25, -9, 12, 12]"
    },
    {
        "test_id": 1142,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[0, 0, 0, 0, 0]"
    },

    // 





]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('test_inputs', test_inputs, batchSize)
}