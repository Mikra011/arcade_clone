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

    // Character Parity
    {
        "test_id": 1143,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "5"
    },
    {
        "test_id": 1144,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "8"
    },
    {
        "test_id": 1145,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "q"
    },
    {
        "test_id": 1146,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "1"
    },
    {
        "test_id": 1147,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "2"
    },
    {
        "test_id": 1148,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "7"
    },
    {
        "test_id": 1149,
        "input_type": "string",
        "input_name": "symbol",
        "input_value": "9"
    },

    // Reflect String
    {
        "test_id": 1150,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "name"
    },
    {
        "test_id": 1151,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abyz"
    },
    {
        "test_id": 1152,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "nnnnn"
    },
    {
        "test_id": 1153,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "pqr"
    },
    {
        "test_id": 1154,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "codesignal"
    },

    // New Numeral System
    {
        "test_id": 1155,
        "input_type": "string",
        "input_name": "number",
        "input_value": "G"
    },
    {
        "test_id": 1156,
        "input_type": "string",
        "input_name": "number",
        "input_value": "A"
    },
    {
        "test_id": 1157,
        "input_type": "string",
        "input_name": "number",
        "input_value": "D"
    },
    {
        "test_id": 1158,
        "input_type": "string",
        "input_name": "number",
        "input_value": "E"
    },
    {
        "test_id": 1159,
        "input_type": "string",
        "input_name": "number",
        "input_value": "F"
    },
    {
        "test_id": 1160,
        "input_type": "string",
        "input_name": "number",
        "input_value": "I"
    },
    {
        "test_id": 1161,
        "input_type": "string",
        "input_name": "number",
        "input_value": "K"
    },
    {
        "test_id": 1162,
        "input_type": "string",
        "input_name": "number",
        "input_value": "L"
    },
    {
        "test_id": 1163,
        "input_type": "string",
        "input_name": "number",
        "input_value": "O"
    },
    {
        "test_id": 1164,
        "input_type": "string",
        "input_name": "number",
        "input_value": "P"
    },
    {
        "test_id": 1165,
        "input_type": "string",
        "input_name": "number",
        "input_value": "S"
    },
    {
        "test_id": 1166,
        "input_type": "string",
        "input_name": "number",
        "input_value": "T"
    },
    {
        "test_id": 1167,
        "input_type": "string",
        "input_name": "number",
        "input_value": "W"
    },

    // Cipher 26
    {
        "test_id": 1168,
        "input_type": "string",
        "input_name": "message",
        "input_value": "taiaiaertkixquxjnfxxdh"
    },
    {
        "test_id": 1169,
        "input_type": "string",
        "input_name": "message",
        "input_value": "ibttlprimfymqlpgeftwu"
    },
    {
        "test_id": 1170,
        "input_type": "string",
        "input_name": "message",
        "input_value": "ftnexvoky"
    },
    {
        "test_id": 1171,
        "input_type": "string",
        "input_name": "message",
        "input_value": "taevzhzmashvjw"
    },
    {
        "test_id": 1172,
        "input_type": "string",
        "input_name": "message",
        "input_value": "abdgkpvcktdoanbqgxpicxtqon"
    },
    {
        "test_id": 1173,
        "input_type": "string",
        "input_name": "message",
        "input_value": "z"
    },

    // Stolen Lunch
    {
        "test_id": 1174,
        "input_type": "string",
        "input_name": "note",
        "input_value": "you'll n4v4r 6u4ss 8t: cdja"
    },
    {
        "test_id": 1175,
        "input_type": "string",
        "input_name": "note",
        "input_value": ""
    },
    {
        "test_id": 1176,
        "input_type": "string",
        "input_name": "note",
        "input_value": "0123456789"
    },
    {
        "test_id": 1177,
        "input_type": "string",
        "input_name": "note",
        "input_value": "jihgfedcba"
    },
    {
        "test_id": 1178,
        "input_type": "string",
        "input_name": "note",
        "input_value": "you won't know!!"
    },
    {
        "test_id": 1179,
        "input_type": "string",
        "input_name": "note",
        "input_value": "just 63jd73 some random note jkhdf83 ds823 that you, dfj238 dsf38 little one?, will abjk38 s83    skdu3 29never get!"
    },

    // Higher Version
    {
        "test_id": 1180,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.2.2"
    },
    {
        "test_id": 1180,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.2.0"
    },
    {
        "test_id": 1181,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.0.5"
    },
    {
        "test_id": 1181,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.1.0"
    },
    {
        "test_id": 1182,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.1.0"
    },
    {
        "test_id": 1182,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.1.5"
    },
    {
        "test_id": 1183,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "10"
    },
    {
        "test_id": 1183,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "9"
    },
    {
        "test_id": 1184,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.0.10"
    },
    {
        "test_id": 1184,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.1.5"
    },
    {
        "test_id": 1185,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "5"
    },
    {
        "test_id": 1185,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1"
    },
    {
        "test_id": 1186,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.1.10"
    },
    {
        "test_id": 1186,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.2.0"
    },
    {
        "test_id": 1187,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.2.2"
    },
    {
        "test_id": 1187,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.2.10"
    },
    {
        "test_id": 1188,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "1.10.2"
    },
    {
        "test_id": 1188,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "1.2.10"
    },
    {
        "test_id": 1189,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "0"
    },
    {
        "test_id": 1189,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "0"
    },
    {
        "test_id": 1190,
        "input_type": "string",
        "input_name": "ver1",
        "input_value": "4.3.22.1"
    },
    {
        "test_id": 1190,
        "input_type": "string",
        "input_name": "ver2",
        "input_value": "4.3.22.1"
    },

    // Decipher
    {
        "test_id": 1191,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "10197115121"
    },
    {
        "test_id": 1192,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "98"
    },
    {
        "test_id": 1193,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "122"
    },
    {
        "test_id": 1194,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "1229897"
    },
    {
        "test_id": 1195,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "97989910010110210310410510610710810911011111211311411511611711811912012112297"
    },
    {
        "test_id": 1196,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "10297115106108102108971061151041029897107106115981001029710711510010298"
    },
    {
        "test_id": 1197,
        "input_type": "string",
        "input_name": "cipher",
        "input_value": "11211111911310110810910097107108115111112119113101106107971101021101061021041149710511411497"
    },

    // Alphanumeric Less
    {
        "test_id": 1198,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "a"
    },
    {
        "test_id": 1198,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "a1"
    },
    {
        "test_id": 1199,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "ab"
    },
    {
        "test_id": 1199,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "a1"
    },
    {
        "test_id": 1200,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "b"
    },
    {
        "test_id": 1200,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "a1"
    },
    {
        "test_id": 1201,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "x11y012"
    },
    {
        "test_id": 1201,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "x011y13"
    },
    {
        "test_id": 1202,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "ab123"
    },
    {
        "test_id": 1202,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "ab34z"
    },
    {
        "test_id": 1203,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "0000"
    },
    {
        "test_id": 1203,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "000"
    },
    {
        "test_id": 1204,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "10"
    },
    {
        "test_id": 1204,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "01"
    },
    {
        "test_id": 1205,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "ab000144"
    },
    {
        "test_id": 1205,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "ab144"
    },
    {
        "test_id": 1206,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "ab"
    },
    {
        "test_id": 1206,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "a"
    },
    {
        "test_id": 1207,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "000"
    },
    {
        "test_id": 1207,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "0000"
    },
    {
        "test_id": 1208,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "abc123"
    },
    {
        "test_id": 1208,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "abc123"
    },
    {
        "test_id": 1209,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "zza1233"
    },
    {
        "test_id": 1209,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "zza1234"
    },
    {
        "test_id": 1210,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "zzz1"
    },
    {
        "test_id": 1210,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "zzz1"
    },
    {
        "test_id": 1211,
        "input_type": "string",
        "input_name": "s1",
        "input_value": "00"
    },
    {
        "test_id": 1211,
        "input_type": "string",
        "input_name": "s2",
        "input_value": "a2"
    },

    // Array Conversion
    {
        "test_id": 1212,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 2, 3, 4, 5, 6, 7, 8]"
    },
    {
        "test_id": 1213,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]"
    },
    {
        "test_id": 1214,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[3, 3, 5, 5]"
    },
    {
        "test_id": 1215,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[-1, 1, 2, 3, 5, 5, 3, 7]"
    },
    {
        "test_id": 1216,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[99]"
    },
    {
        "test_id": 1217,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[99, 1]"
    },
    {
        "test_id": 1218,
        "input_type": "arrayOfIntegers",
        "input_name": "inputArray",
        "input_value": "[34, 60, -9, -67, -100, -27, 100, 21]"
    },

    // Array Previous Less
    {
        "test_id": 1219,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[3, 5, 2, 4, 5]"
    },
    {
        "test_id": 1220,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[2, 2, 1, 3, 4, 5, 5, 3]"
    },
    {
        "test_id": 1221,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[3, 2, 1]"
    },
    {
        "test_id": 1222,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[100, 101, 102]"
    },
    {
        "test_id": 1223,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[7, 7, 8, 3, 4, 4, 2, 5, 6, 7, 7]"
    },
    {
        "test_id": 1224,
        "input_type": "arrayOfIntegers",
        "input_name": "items",
        "input_value": "[68, 135, 101, 170, 125]"
    },

    // Pair of Shoes
    {
        "test_id": 1225,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 21],  [1, 23],  [1, 21],  [0, 23]]"
    },
    {
        "test_id": 1226,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 21],  [1, 23],  [1, 21],  [1, 23]]"
    },
    {
        "test_id": 1227,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 23],  [1, 21],  [1, 23],  [0, 21],  [1, 22],  [0, 22]]"
    },
    {
        "test_id": 1228,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 23],  [1, 21],  [1, 23],  [0, 21]]"
    },
    {
        "test_id": 1229,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 41],  [1, 40],  [1, 45],  [0, 42],  [0, 42],  [0, 42]]"
    },
    {
        "test_id": 1230,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 2],  [0, 2],  [1, 1],  [0, 1],  [1, 2],  [0, 1]]"
    },
    {
        "test_id": 1231,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 100],  [1, 1],  [1, 100],  [0, 1]]"
    },
    {
        "test_id": 1232,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 23]]"
    },
    {
        "test_id": 1233,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 23],  [1, 23]]"
    },
    {
        "test_id": 1234,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 23],  [1, 22]]"
    },
    {
        "test_id": 1235,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 1],  [1, 1],  [1, 3],  [0, 2],  [0, 2],  [0, 1]]"
    },
    {
        "test_id": 1236,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 23],  [0, 22]]"
    },
    {
        "test_id": 1237,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 25],  [0, 100],  [1, 1],  [1, 1],  [0, 25],  [0, 1],  [0, 100],  [1, 1],  [1, 100],  [0, 25],  [0, 1],  [0, 100],  [1, 25],  [0, 1]]"
    },
    {
        "test_id": 1238,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[1, 25],  [0, 100],  [1, 1],  [1, 1],  [0, 25],  [0, 1],  [0, 100],  [1, 1],  [1, 100],  [0, 25],  [0, 1],  [1, 1],  [0, 100],  [1, 25],  [0, 1]]"
    },
    {
        "test_id": 1239,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100]]"
    },
    {
        "test_id": 1240,
        "input_type": "matrix",
        "input_name": "shoes",
        "input_value": "[[0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [0, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100],  [1, 100]]"
    },

    // Combs
    {
        "test_id": 1241,
        "input_type": "string",
        "input_name": "comb1",
        "input_value": "*..*"
    },
    {
        "test_id": 1241,
        "input_type": "string",
        "input_name": "comb2",
        "input_value": "*.*"
    },
    {
        "test_id": 1242,
        "input_type": "string",
        "input_name": "comb1",
        "input_value": "*...*"
    },
    {
        "test_id": 1242,
        "input_type": "string",
        "input_name": "comb2",
        "input_value": "*.*"
    },
    {
        "test_id": 1243,
        "input_type": "string",
        "input_name": "comb1",
        "input_value": "*..*.*"
    },
    {
        "test_id": 1243,
        "input_type": "string",
        "input_name": "comb2",
        "input_value": "*.***"
    },
    {
        "test_id": 1244,
        "input_type": "string",
        "input_name": "comb1",
        "input_value": "*.*"
    },
    {
        "test_id": 1244,
        "input_type": "string",
        "input_name": "comb2",
        "input_value": "*.*"
    },
    {
        "test_id": 1245,
        "input_type": "string",
        "input_name": "comb1",
        "input_value": "*.**"
    },
    {
        "test_id": 1245,
        "input_type": "string",
        "input_name": "comb2",
        "input_value": "*.*"
    },

    // Strings Crossover
    {
        "test_id": 1246,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc","aaa","aba","bab"]'
    },
    {
        "test_id": 1247,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aacccc","bbcccc"]'
    },
    {
        "test_id": 1248,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["a","b","c","d","e"]'
    },
    {
        "test_id": 1249,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aa","ab","ba"]'
    },
    {
        "test_id": 1250,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["a","b","c","d","e"]'
    },
    {
        "test_id": 1251,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["aaa","aaa"]'
    },
    {
        "test_id": 1246,
        "input_type": "string",
        "input_name": "result",
        "input_value": "bbb"
    },
    {
        "test_id": 1247,
        "input_type": "string",
        "input_name": "result",
        "input_value": "abdddd"
    },
    {
        "test_id": 1248,
        "input_type": "string",
        "input_name": "result",
        "input_value": "c"
    },
    {
        "test_id": 1249,
        "input_type": "string",
        "input_name": "result",
        "input_value": "bb"
    },
    {
        "test_id": 1250,
        "input_type": "string",
        "input_name": "result",
        "input_value": "f"
    },
    {
        "test_id": 1251,
        "input_type": "string",
        "input_name": "result",
        "input_value": "aaa"
    },

    // Cyclic String,
    {
        "test_id": 1252,
        "input_type": "string",
        "input_name": "s",
        "input_value": "cabca"
    },
    {
        "test_id": 1253,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aba"
    },
    {
        "test_id": 1254,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ccccccccccc"
    },
    {
        "test_id": 1255,
        "input_type": "string",
        "input_name": "s",
        "input_value": "bcaba"
    },
    {
        "test_id": 1256,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abacabaabacab"
    },
    {
        "test_id": 1257,
        "input_type": "string",
        "input_name": "s",
        "input_value": "aab"
    },
    {
        "test_id": 1258,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abaaba"
    },
    {
        "test_id": 1259,
        "input_type": "string",
        "input_name": "s",
        "input_value": "zazazaza"
    },
    {
        "test_id": 1260,
        "input_type": "string",
        "input_name": "s",
        "input_value": "abbaab"
    },

    // Beautiful Text
    {
        "test_id": 1261,
        "input_type": "number",
        "input_name": "l",
        "input_value": "5"
    },
    {
        "test_id": 1261,
        "input_type": "number",
        "input_name": "r",
        "input_value": "15"
    },
    {
        "test_id": 1261,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "Look at this example of a correct text"
    },
    {
        "test_id": 1262,
        "input_type": "number",
        "input_name": "l",
        "input_value": "4"
    },
    {
        "test_id": 1262,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1262,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "abc def ghi"
    },
    {
        "test_id": 1263,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 1263,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1263,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "a a a a a a a a"
    },
    {
        "test_id": 1264,
        "input_type": "number",
        "input_name": "l",
        "input_value": "1"
    },
    {
        "test_id": 1264,
        "input_type": "number",
        "input_name": "r",
        "input_value": "5"
    },
    {
        "test_id": 1264,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "ab cd fg xyz"
    },
    {
        "test_id": 1265,
        "input_type": "number",
        "input_name": "l",
        "input_value": "6"
    },
    {
        "test_id": 1265,
        "input_type": "number",
        "input_name": "r",
        "input_value": "11"
    },
    {
        "test_id": 1265,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aa aa aaaaa aaaaa aaaaa"
    },
    {
        "test_id": 1266,
        "input_type": "number",
        "input_name": "l",
        "input_value": "5"
    },
    {
        "test_id": 1266,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1266,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aa aa aaaaa aaaaa aaaaa"
    },
    {
        "test_id": 1267,
        "input_type": "number",
        "input_name": "l",
        "input_value": "6"
    },
    {
        "test_id": 1267,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1267,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aa aa aaaaa aaaaa aaaaa"
    },
    {
        "test_id": 1268,
        "input_type": "number",
        "input_name": "l",
        "input_value": "3"
    },
    {
        "test_id": 1268,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1268,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "aaa aaaaaaa"
    },
    {
        "test_id": 1269,
        "input_type": "number",
        "input_name": "l",
        "input_value": "4"
    },
    {
        "test_id": 1269,
        "input_type": "number",
        "input_name": "r",
        "input_value": "10"
    },
    {
        "test_id": 1269,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "dht skq dkg"
    },
    {
        "test_id": 1270,
        "input_type": "number",
        "input_name": "l",
        "input_value": "3"
    },
    {
        "test_id": 1270,
        "input_type": "number",
        "input_name": "r",
        "input_value": "7"
    },
    {
        "test_id": 1270,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "skspv iakqh ygzwz ntkmi xqhpj"
    },
    {
        "test_id": 1271,
        "input_type": "number",
        "input_name": "l",
        "input_value": "8"
    },
    {
        "test_id": 1271,
        "input_type": "number",
        "input_name": "r",
        "input_value": "9"
    },
    {
        "test_id": 1271,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "skspv iakqh ygzwz ntkmi xqhpj"
    },

    // Runners Meetings
    {
        "test_id": 1272,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[1, 4, 2]"
    },
    {
        "test_id": 1272,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[27, 18, 24]"
    },
    {
        "test_id": 1273,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[1, 4, 2]"
    },
    {
        "test_id": 1273,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[5, 6, 2]"
    },
    {
        "test_id": 1274,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[1, 2, 3]"
    },
    {
        "test_id": 1274,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[1, 1, 1]"
    },
    {
        "test_id": 1275,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[1, 1000]"
    },
    {
        "test_id": 1275,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[23, 22]"
    },
    {
        "test_id": 1276,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[-2, 0, 2, 4]"
    },
    {
        "test_id": 1276,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[6, 5, 4, 3]"
    },
    {
        "test_id": 1277,
        "input_type": "arrayOfIntegers",
        "input_name": "startPosition",
        "input_value": "[-2, 0, 2, 4]"
    },
    {
        "test_id": 1277,
        "input_type": "arrayOfIntegers",
        "input_name": "speed",
        "input_value": "[6, 5, 4, 2]"
    },

    // Christmas Tree
    {
        "test_id": 1278,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "1"
    },
    {
        "test_id": 1278,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "3"
    },
    {
        "test_id": 1279,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "2"
    },
    {
        "test_id": 1279,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "4"
    },
    {
        "test_id": 1280,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "4"
    },
    {
        "test_id": 1280,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "8"
    },
    {
        "test_id": 1281,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "8"
    },
    {
        "test_id": 1281,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "5"
    },
    {
        "test_id": 1282,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "3"
    },
    {
        "test_id": 1282,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "3"
    },
    {
        "test_id": 1283,
        "input_type": "number",
        "input_name": "levelNum",
        "input_value": "4"
    },
    {
        "test_id": 1283,
        "input_type": "number",
        "input_name": "levelHeight",
        "input_value": "6"
    },

    // File Naming
    {
        "test_id": 1284,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["doc","doc","image","doc(1)","doc"]'
    },
    {
        "test_id": 1285,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["a(1)","a(6)","a","a","a","a","a","a","a","a","a","a"]'
    },
    {
        "test_id": 1286,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["dd","dd(1)","dd(2)","dd","dd(1)","dd(1)(2)","dd(1)(1)","dd","dd(1)"]'
    },
    {
        "test_id": 1287,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '["name","name","name(1)","name(3)","name(2)","name(2)"]'
    },
    {
        "test_id": 1288,
        "input_type": "arrayOfStrings",
        "input_name": "names",
        "input_value": '[]'
    },

    // Extract Matrix Column
    {
        "test_id": 1289,
        "input_type": "number",
        "input_name": "column",
        "input_value": "2"
    },
    {
        "test_id": 1289,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]]"
    },
    {
        "test_id": 1290,
        "input_type": "number",
        "input_name": "column",
        "input_value": "2"
    },
    {
        "test_id": 1290,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1, 1], [0, 5, 0], [2, 1, 3]]"
    },
    {
        "test_id": 1291,
        "input_type": "number",
        "input_name": "column",
        "input_value": "0"
    },
    {
        "test_id": 1291,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1], [5, 0], [2, 3]]"
    },
    {
        "test_id": 1292,
        "input_type": "number",
        "input_name": "column",
        "input_value": "1"
    },
    {
        "test_id": 1292,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1, 1], [0, 5, 0], [2, 1, 3], [10, 100, 300]]"
    },
    {
        "test_id": 1293,
        "input_type": "number",
        "input_name": "column",
        "input_value": "3"
    },
    {
        "test_id": 1293,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[0, 1, 1, 5], [5, 0, 0, 0], [2, 1, 0, 10]]"
    },
    {
        "test_id": 1294,
        "input_type": "number",
        "input_name": "column",
        "input_value": "0"
    },
    {
        "test_id": 1294,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[0]]"
    },

    // Are Isomorphic?
    {
        "test_id": 1295,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[1, 1, 1], [0, 0]]"
    },
    {
        "test_id": 1295,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[2, 1, 1], [2, 1]]"
    },
    {
        "test_id": 1296,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[2], []]"
    },
    {
        "test_id": 1296,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[2]]"
    },
    {
        "test_id": 1297,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[2], [1], [3, 5]]"
    },
    {
        "test_id": 1297,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[], [1], [1, 6]]"
    },
    {
        "test_id": 1298,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[1, 1, 1], [0, 0]]"
    },
    {
        "test_id": 1298,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[2, 1, 3], [2, 0], []]"
    },
    {
        "test_id": 1299,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[], [1]]"
    },
    {
        "test_id": 1299,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[], [6, 2, 5]]"
    },
    {
        "test_id": 1300,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[1, 3, 4], []]"
    },
    {
        "test_id": 1300,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[2, 1, 2], []]"
    },
    {
        "test_id": 1301,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[]]"
    },
    {
        "test_id": 1301,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[]]"
    },
    {
        "test_id": 1302,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[2], [1], [3, 50, 33]]"
    },
    {
        "test_id": 1302,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[], [1], [1, 6, 32]]"
    },
    {
        "test_id": 1303,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[6], [3, 5, 2, 4]]"
    },
    {
        "test_id": 1303,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[34], [6, 2, 5]]"
    },
    {
        "test_id": 1304,
        "input_type": "matrix",
        "input_name": "array1",
        "input_value": "[[6], [3, 5, 2, 4]]"
    },
    {
        "test_id": 1304,
        "input_type": "matrix",
        "input_name": "array2",
        "input_value": "[[34], [6, 2, 5, 4], [1, 2, 3]]"
    },

    // Reverse On Diagonals
    {
        "test_id": 1305,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    },
    {
        "test_id": 1306,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[239]]"
    },
    {
        "test_id": 1307,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 10], [100, 1000]]"
    },
    {
        "test_id": 1308,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[43, 455, 32, 103], [102, 988, 298, 981], [309, 21, 53, 64], [2, 22, 35, 291]]"
    },
    {
        "test_id": 1309,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[34, 1000, 139, 248, 972, 584], [98, 1, 398, 128, 762, 654], [33, 498, 132, 543, 764, 43], [329, 12, 54, 764, 666, 213], [928, 109, 489, 71, 837, 332], [93, 298, 42, 53, 76, 43]]"
    },
    {
        "test_id": 1310,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1], [2, 2]]"
    },

    // Swap Diagonals
    {
        "test_id": 1311,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]"
    },
    {
        "test_id": 1312,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[239]]"
    },
    {
        "test_id": 1313,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 10], [100, 1000]]"
    },
    {
        "test_id": 1314,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[43, 455, 32, 103], [102, 988, 298, 981], [309, 21, 53, 64], [2, 22, 35, 291]]"
    },
    {
        "test_id": 1315,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[34, 1000, 139, 248, 972, 584], [98, 1, 398, 128, 762, 654], [33, 498, 132, 543, 764, 43], [329, 12, 54, 764, 666, 213], [928, 109, 489, 71, 837, 332], [93, 298, 42, 53, 76, 43]]"
    },
    {
        "test_id": 1316,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2], [1, 2]]"
    },

    // Crossing Sum
    {
        "test_id": 1317,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 1317,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 1317,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1, 1, 1], [2, 2, 2, 2], [3, 3, 3, 3]]"
    },
    {
        "test_id": 1318,
        "input_type": "number",
        "input_name": "a",
        "input_value": "0"
    },
    {
        "test_id": 1318,
        "input_type": "number",
        "input_name": "b",
        "input_value": "0"
    },
    {
        "test_id": 1318,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1], [1, 1]]"
    },
    {
        "test_id": 1319,
        "input_type": "number",
        "input_name": "a",
        "input_value": "3"
    },
    {
        "test_id": 1319,
        "input_type": "number",
        "input_name": "b",
        "input_value": "0"
    },
    {
        "test_id": 1319,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 1], [3, 3], [1, 1], [2, 2]]"
    },
    {
        "test_id": 1320,
        "input_type": "number",
        "input_name": "a",
        "input_value": "0"
    },
    {
        "test_id": 1320,
        "input_type": "number",
        "input_name": "b",
        "input_value": "0"
    },
    {
        "test_id": 1320,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[100]]"
    },
    {
        "test_id": 1321,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 1321,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 1321,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2], [3, 4]]"
    },
    {
        "test_id": 1322,
        "input_type": "number",
        "input_name": "a",
        "input_value": "0"
    },
    {
        "test_id": 1322,
        "input_type": "number",
        "input_name": "b",
        "input_value": "3"
    },
    {
        "test_id": 1322,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3, 4]]"
    },
    {
        "test_id": 1323,
        "input_type": "number",
        "input_name": "a",
        "input_value": "1"
    },
    {
        "test_id": 1323,
        "input_type": "number",
        "input_name": "b",
        "input_value": "1"
    },
    {
        "test_id": 1323,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3, 4, 5], [1, 2, 2, 2, 2], [1, 2, 2, 2, 2], [1, 2, 2, 2, 2], [1, 2, 2, 2, 2], [1, 2, 2, 2, 2], [1, 2, 2, 2, 2]]"
    },

    // Draw Rectangle
    {
        "test_id": 1324,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["b","b","b","b","b","b","b","b"],["b","b","b","b","b","b","b","b"]]'
    },
    {
        "test_id": 1325,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["b","b","b","b","b","b","b","b"]]'
    },
    {
        "test_id": 1326,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["a","a","a","a","a","a","a","a"],["b","b","b","b","b","b","b","b"]]'
    },
    {
        "test_id": 1327,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["a","a","a"],["a","a","a"],["a","a","a"],["b","b","b"]]'
    },
    {
        "test_id": 1328,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["#","#"],["a","a"],["a","a"],["b","b"]]'
    },
    {
        "test_id": 1329,
        "input_type": "matrix",
        "input_name": "canvas",
        "input_value": '[["1","2"],["4","3"],["5","6"],["8","7"]]'
    },
    {
        "test_id": 1324,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[1, 1, 4, 3]"
    },
    {
        "test_id": 1325,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[0, 0, 1, 1]"
    },
    {
        "test_id": 1326,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[0, 2, 7, 3]"
    },
    {
        "test_id": 1327,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[0, 0, 2, 3]"
    },
    {
        "test_id": 1328,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[0, 1, 1, 2]"
    },
    {
        "test_id": 1329,
        "input_type": "arrayOfIntegers",
        "input_name": "rectangle",
        "input_value": "[0, 0, 1, 3]"
    },

    // Volleyball Positions
    {
        "test_id": 1330,
        "input_type": "number",
        "input_name": "k",
        "input_value": "2"
    },
    {
        "test_id": 1331,
        "input_type": "number",
        "input_name": "k",
        "input_value": "6"
    },
    {
        "test_id": 1332,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1000000"
    },
    {
        "test_id": 1333,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 1334,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1000000000"
    },
    {
        "test_id": 1335,
        "input_type": "number",
        "input_name": "k",
        "input_value": "7"
    },
    {
        "test_id": 1336,
        "input_type": "number",
        "input_name": "k",
        "input_value": "666"
    },
    {
        "test_id": 1337,
        "input_type": "number",
        "input_name": "k",
        "input_value": "541"
    },
    {
        "test_id": 1338,
        "input_type": "number",
        "input_name": "k",
        "input_value": "0"
    },
    {
        "test_id": 1339,
        "input_type": "number",
        "input_name": "k",
        "input_value": "3220832"
    },
    {
        "test_id": 1330,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","Player5","empty"],["Player4","empty","Player2"],["empty","Player3","empty"],["Player6","empty","Player1"]]'
    },
    {
        "test_id": 1331,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","Alice","empty"],["Bob","empty","Charlie"],["empty","Dave","empty"],["Eve","empty","Frank"]]'
    },
    {
        "test_id": 1332,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","player3","empty"],["player3","empty","player"],["empty","4","empty"],["5","empty","42"]]'
    },
    {
        "test_id": 1333,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","player3","empty"],["player8","empty","player"],["empty","4","empty"],["5","empty","42"]]'
    },
    {
        "test_id": 1334,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","player3","empty"],["player8","empty","player"],["empty","4","empty"],["5","empty","42"]]'
    },
    {
        "test_id": 1335,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","Alice","empty"],["Bob","empty","Charlie"],["empty","Dave","empty"],["Eve","empty","Frank"]]'
    },
    {
        "test_id": 1336,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","1","empty"],["?","empty","!"],["empty",".","empty"],["3","empty","2"]]'
    },
    {
        "test_id": 1337,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","","empty"],["","empty",""],["empty","!!!","empty"],["","empty",""]]'
    },
    {
        "test_id": 1338,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","Alice","empty"],["Bob","empty","Charlie"],["empty","Dave","empty"],["Eve","empty","Frank"]]'
    },
    {
        "test_id": 1339,
        "input_type": "matrix",
        "input_name": "formation",
        "input_value": '[["empty","a","empty"],["b","empty","c"],["empty","d","empty"],["e","empty","f"]]'
    },

    // Star Rotation
    {
        "test_id": 1340,
        "input_type": "number",
        "input_name": "width",
        "input_value": "7"
    },
    {
        "test_id": 1340,
        "input_type": "number",
        "input_name": "t",
        "input_value": "1"
    },
    {
        "test_id": 1340,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 0, 0, 2, 0, 0, 3], [0, 1, 0, 2, 0, 3, 0], [0, 0, 1, 2, 3, 0, 0], [8, 8, 8, 9, 4, 4, 4], [0, 0, 7, 6, 5, 0, 0], [0, 7, 0, 6, 0, 5, 0], [7, 0, 0, 6, 0, 0, 5]]"
    },
    {
        "test_id": 1340,
        "input_type": "arrayOfIntegers",
        "input_name": "center",
        "input_value": "[3, 3]"
    },
    {
        "test_id": 1341,
        "input_type": "number",
        "input_name": "width",
        "input_value": "3"
    },
    {
        "test_id": 1341,
        "input_type": "number",
        "input_name": "t",
        "input_value": "81"
    },
    {
        "test_id": 1341,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 0, 0, 2, 0, 0, 3], [0, 1, 0, 2, 0, 3, 0], [0, 0, 1, 2, 3, 0, 0], [8, 8, 8, 9, 4, 4, 4], [0, 0, 7, 6, 5, 0, 0]]"
    },
    {
        "test_id": 1341,
        "input_type": "arrayOfIntegers",
        "input_name": "center",
        "input_value": "[1, 5]"
    },
    {
        "test_id": 1342,
        "input_type": "number",
        "input_name": "width",
        "input_value": "3"
    },
    {
        "test_id": 1342,
        "input_type": "number",
        "input_name": "t",
        "input_value": "15"
    },
    {
        "test_id": 1342,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 0, 0, 2, 0, 0, 3], [0, 1, 0, 2, 0, 3, 0], [0, 0, 1, 2, 3, 0, 0], [8, 8, 8, 9, 4, 4, 4], [0, 0, 7, 6, 5, 0, 0], [0, 7, 0, 6, 0, 5, 0], [7, 0, 0, 6, 0, 0, 5]]"
    },
    {
        "test_id": 1342,
        "input_type": "arrayOfIntegers",
        "input_name": "center",
        "input_value": "[3, 3]"
    },
    {
        "test_id": 1343,
        "input_type": "number",
        "input_name": "width",
        "input_value": "3"
    },
    {
        "test_id": 1343,
        "input_type": "number",
        "input_name": "t",
        "input_value": "4"
    },
    {
        "test_id": 1343,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 0, 3], [3, 4, 5], [8, 99, 0]]"
    },
    {
        "test_id": 1343,
        "input_type": "arrayOfIntegers",
        "input_name": "center",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1344,
        "input_type": "number",
        "input_name": "width",
        "input_value": "3"
    },
    {
        "test_id": 1344,
        "input_type": "number",
        "input_name": "t",
        "input_value": "12"
    },
    {
        "test_id": 1344,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[8, 16, 32], [1, 0, 3], [3, 4, 5], [8, 99, 0], [42, 56, 64]]"
    },
    {
        "test_id": 1344,
        "input_type": "arrayOfIntegers",
        "input_name": "center",
        "input_value": "[2, 1]"
    },

    // Sudoku
    {
        "test_id": 1345,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 3, 2, 5, 4, 6, 9, 8, 7], [4, 6, 5, 8, 7, 9, 3, 2, 1], [7, 9, 8, 2, 1, 3, 6, 5, 4], [9, 2, 1, 4, 3, 5, 8, 7, 6], [3, 5, 4, 7, 6, 8, 2, 1, 9], [6, 8, 7, 1, 9, 2, 5, 4, 3], [5, 7, 6, 9, 8, 1, 4, 3, 2], [2, 4, 3, 6, 5, 7, 1, 9, 8], [8, 1, 9, 3, 2, 4, 7, 6, 5]]"
    },
    {
        "test_id": 1346,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 3, 4, 2, 5, 6, 9, 8, 7], [4, 6, 8, 5, 7, 9, 3, 2, 1], [7, 9, 2, 8, 1, 3, 6, 5, 4], [9, 2, 3, 1, 4, 5, 8, 7, 6], [3, 5, 7, 4, 6, 8, 2, 1, 9], [6, 8, 1, 7, 9, 2, 5, 4, 3], [5, 7, 6, 9, 8, 1, 4, 3, 2], [2, 4, 5, 6, 3, 7, 1, 9, 8], [8, 1, 9, 3, 2, 4, 7, 6, 5]]"
    },
    {
        "test_id": 1347,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]]"
    },
    {
        "test_id": 1348,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[8, 3, 6, 5, 3, 6, 7, 2, 9], [4, 2, 5, 8, 7, 9, 3, 8, 1], [7, 9, 1, 2, 1, 4, 6, 5, 4], [9, 2, 1, 4, 3, 5, 8, 7, 6], [3, 5, 4, 7, 6, 8, 2, 1, 9], [6, 8, 7, 1, 9, 2, 5, 4, 3], [5, 7, 6, 9, 8, 1, 4, 3, 2], [2, 4, 3, 6, 5, 7, 1, 9, 8], [8, 1, 9, 3, 2, 4, 7, 6, 5]]"
    },
    {
        "test_id": 1349,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 3, 2, 5, 4, 6, 9, 8, 7], [4, 6, 5, 8, 7, 9, 3, 2, 1], [7, 9, 8, 2, 1, 3, 6, 5, 4], [9, 2, 1, 4, 3, 5, 8, 7, 6], [3, 5, 4, 7, 6, 8, 2, 1, 9], [6, 8, 7, 1, 9, 2, 5, 4, 3], [5, 4, 6, 9, 8, 1, 4, 3, 2], [2, 7, 3, 6, 5, 7, 1, 9, 8], [8, 1, 9, 3, 2, 4, 7, 6, 5]]"
    },
    {
        "test_id": 1350,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 6, 5, 8, 7, 9, 3, 2, 1], [7, 9, 8, 2, 1, 3, 6, 5, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 6, 5, 8, 7, 9, 3, 2, 1], [7, 9, 8, 2, 1, 3, 6, 5, 4], [1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 6, 5, 8, 7, 9, 3, 2, 1], [7, 9, 8, 2, 1, 3, 6, 5, 4]]"
    },
    {
        "test_id": 1351,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 9, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 7, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]]"
    },
    {
        "test_id": 1352,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5], [5, 5, 5, 5, 5, 5, 5, 5, 5]]"
    },
    {
        "test_id": 1353,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 3, 9, 5, 3, 4, 8], [1, 9, 8, 1, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]]"
    },
    {
        "test_id": 1354,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7], [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6], [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 5, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]]"
    },
    {
        "test_id": 1355,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[1, 2, 3, 4, 5, 6, 7, 8, 9], [4, 5, 6, 7, 8, 9, 1, 2, 3], [7, 8, 9, 1, 2, 3, 4, 5, 6], [2, 3, 4, 5, 6, 7, 8, 9, 1], [3, 4, 5, 6, 7, 8, 9, 1, 2], [5, 6, 7, 8, 9, 1, 2, 3, 4], [6, 7, 8, 9, 1, 2, 3, 4, 5], [8, 9, 1, 2, 3, 4, 5, 6, 7], [9, 1, 2, 3, 4, 5, 6, 7, 8]]"
    },

    // Minesweeper
    {
        "test_id": 1356,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false, false],  [false, true, false],  [false, false, false]]"
    },
    {
        "test_id": 1357,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, false],  [false, false, false]]"
    },
    {
        "test_id": 1358,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false, false, true],  [false, false, true, false],  [true, true, false, true]]"
    },
    {
        "test_id": 1359,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, true, true],  [true, true, true],  [true, true, true]]"
    },
    {
        "test_id": 1360,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, true, true, false],  [true, true, false, true],  [false, false, true, false]]"
    },
    {
        "test_id": 1361,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, false],  [true, false],  [false, true],  [false, false],  [false, false]]"
    },

    // Box Blur
    {
        "test_id": 1362,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[1, 1, 1],  [1, 7, 1],  [1, 1, 1]]"
    },
    {
        "test_id": 1363,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[0, 18, 9],  [27, 9, 0],  [81, 63, 45]]"
    },
    {
        "test_id": 1364,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9],  [27, 54, 9, 0],  [81, 63, 72, 45]]"
    },
    {
        "test_id": 1365,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[7, 4, 0, 1],  [5, 6, 2, 2],  [6, 10, 7, 8],  [1, 4, 2, 0]]"
    },
    {
        "test_id": 1366,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9, 9, 45, 27],  [27, 0, 54, 9, 0, 63, 90],  [81, 63, 72, 45, 18, 27, 0],  [0, 0, 9, 81, 27, 18, 45],  [45, 45, 27, 27, 90, 81, 72],  [45, 18, 9, 0, 9, 18, 45],  [27, 81, 36, 63, 63, 72, 81]]"
    },
    {
        "test_id": 1367,
        "input_type": "matrix",
        "input_name": "image",
        "input_value": "[[36, 0, 18, 9, 9, 45, 27],  [27, 0, 254, 9, 0, 63, 90],  [81, 255, 72, 45, 18, 27, 0],  [0, 0, 9, 81, 27, 18, 45],  [45, 45, 227, 227, 90, 81, 72],  [45, 18, 9, 255, 9, 18, 45],  [27, 81, 36, 127, 255, 72, 81]]"
    },

    // Contours Shifting
    {
        "test_id": 1368,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]]"
    },
    {
        "test_id": 1369,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[238, 239, 240, 241, 242, 243, 244, 245]]"
    },
    {
        "test_id": 1370,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[238], [239], [240], [241], [242], [243], [244], [245]]"
    },
    {
        "test_id": 1371,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]"
    },
    {
        "test_id": 1372,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20]]"
    },
    {
        "test_id": 1373,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15]]"
    },
    {
        "test_id": 1374,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 2, 3], [6, 7, 8], [11, 12, 13], [16, 17, 18], [21, 22, 23], [24, 25, 26]]"
    },
    {
        "test_id": 1375,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[239]]"
    },

    // Polygon Perimeter
    {
        "test_id": 1376,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, true, true],  [true, true, false],  [true, false, false]]"
    },
    {
        "test_id": 1377,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, true, true],  [true, false, true],  [true, true, true]]"
    },
    {
        "test_id": 1378,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[true, true, true, true, true],  [true, true, true, true, true]]"
    },
    {
        "test_id": 1379,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, true, true],  [true, true, false],  [true, true, false]]"
    },
    {
        "test_id": 1380,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, true, false],  [false, true, true, true],  [true, true, false, true],  [true, false, true, true]]"
    },
    {
        "test_id": 1381,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, true, false, false],  [false, true, true, true, true],  [true, true, false, true, true],  [true, false, true, true, true]]"
    },
    {
        "test_id": 1382,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, false, false, false],  [false, true, true, true, true],  [true, true, false, false, true],  [true, false, true, true, true]]"
    },
    {
        "test_id": 1383,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, true, false, false],  [false, true, true, true, false],  [true, true, false, true, true],  [false, false, true, true, false]]"
    },
    {
        "test_id": 1384,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, true, true, true],  [false, true, true, false, true],  [false, true, false, true, true],  [true, true, false, true, false],  [true, false, true, true, false]]"
    },
    {
        "test_id": 1385,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[false, false, false],  [false, true, false],  [false, false, false]]"
    },

    // Gravitation
    {
        "test_id": 1386,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["#..##",".##.#",".#.##","....."]'
    },
    {
        "test_id": 1387,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["#..##",".##.#",".#.##","..##."]'
    },
    {
        "test_id": 1388,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["##","..","..",".."]'
    },
    {
        "test_id": 1389,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["#..#.",".##..",".#...",".#..."]'
    },
    {
        "test_id": 1390,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["#....",".#..#","..#..","...#."]'
    },
    {
        "test_id": 1391,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["#.#..",".####","#.#..","....."]'
    },
    {
        "test_id": 1392,
        "input_type": "arrayOfStrings",
        "input_name": "rows",
        "input_value": '["######","......","......",".....#"]'
    },

    // Is Information Consistent?
    {
        "test_id": 1393,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 1, 0, 1], [-1, 1, 0, 0], [-1, 0, 0, 1]]"
    },
    {
        "test_id": 1394,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[1, 0], [-1, 0], [1, 1], [1, 1]]"
    },
    {
        "test_id": 1395,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[1, -1, 0, 1], [1, -1, 0, -1]]"
    },
    {
        "test_id": 1396,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0, -1], [-1, 1, -1], [-1, 1, 0], [0, 1, 0]]"
    },
    {
        "test_id": 1397,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0, -1, 1, 1, 0, 0, 1, -1, 0], [-1, 1, -1, 1, 0, 1, -1, 1, 1, 0]]"
    },
    {
        "test_id": 1398,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0], [-1, 1]]"
    },
    {
        "test_id": 1399,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0, -1, 0], [-1, 1, 1, -1], [-1, 0, 0, 0], [0, 1, 0, -1]]"
    },
    {
        "test_id": 1400,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0], [0, 0]]"
    },
    {
        "test_id": 1401,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[-1, -1], [-1, 1]]"
    },
    {
        "test_id": 1402,
        "input_type": "matrix",
        "input_name": "evidences",
        "input_value": "[[0, 0, -1], [-1, 1, 1], [0, 1, 0], [0, 1, 0]]"
    },

    // Correct Nonogram
    {
        "test_id": 1403,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","-","-","-"],["-","-","-","2","2","1","-","1"],["-","-","-","2","1","1","3","3"],["-","3","1","#","#","#",".","#"],["-","-","2","#","#",".",".","."],["-","-","2",".",".",".","#","#"],["-","1","2","#",".",".","#","#"],["-","-","5","#","#","#","#","#"]]'
    },
    {
        "test_id": 1404,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","-","-","-"],["-","-","-","-","-","1","-","-"],["-","-","-","3","3","2","5","5"],["-","-","3",".",".",".","#","#"],["-","2","2","#","#","#","#","#"],["-","-","5","#","#","#","#","#"],["-","-","5","#","#","#","#","#"],["-","-","2",".",".",".","#","#"]]'
    },
    {
        "test_id": 1405,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","1","-","-"],["-","-","-","-","-","1","-","1"],["-","-","-","1","2","1","5","1"],["-","-","3","#","#","#",".","."],["-","2","1",".","#","#",".","#"],["-","-","3",".",".","#","#","#"],["-","-","2",".",".","#","#","."],["-","-","2",".",".","#","#","."]]'
    },
    {
        "test_id": 1406,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","-"],["-","-","-","5","4","5","4","5"],["-","1","3","#","#","#",".","#"],["-","-","5","#","#","#","#","#"],["-","-","5","#","#","#","#","#"],["-","-","5","#","#","#","#","#"],["-","3","1","#",".","#","#","#"]]'
    },
    {
        "test_id": 1407,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","-","-","-"],["-","-","-","-","-","-","-","2"],["-","-","-","2","2","2","4","1"],["-","-","-",".",".",".",".","."],["-","-","2",".",".",".","#","#"],["-","-","3",".",".","#","#","#"],["-","-","4","#","#","#","#","."],["-","2","2",".","#","#","#","#"]]'
    },
    {
        "test_id": 1408,
        "input_type": "matrix",
        "input_name": "nonogramField",
        "input_value": '[["-","-","-","-","-","-","-","-"],["-","-","-","-","1","-","-","-"],["-","-","-","1","3","1","2","1"],["-","-","1",".","#",".",".","."],["-","-","-",".",".",".",".","."],["-","-","1",".","#",".",".","."],["-","1","2",".","#",".","#","#"],["-","-","4","#","#","#","#","."]]'
    },
    {
        "test_id": 1403,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 1404,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 1405,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 1406,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 1407,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },
    {
        "test_id": 1408,
        "input_type": "number",
        "input_name": "size",
        "input_value": "5"
    },


    // Shuffled Array
    {
        "test_id": 1409,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[1, 12, 3, 6, 2]"
    },
    {
        "test_id": 1410,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[1, -3, -5, 7, 2]"
    },
    {
        "test_id": 1411,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[2, -1, 2, 2, -1]"
    },
    {
        "test_id": 1412,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[-3, -3]"
    },
    {
        "test_id": 1413,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[37, 11, -37, -85, -67, 32, 90, -90, 56, 80, 37]"
    },
    {
        "test_id": 1414,
        "input_type": "arrayOfIntegers",
        "input_name": "shuffled",
        "input_value": "[18, -73, -39, 65, -65, -52]"
    },

    // Sort by Height
    {
        "test_id": 1415,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1, 150, 190, 170, -1, -1, 160, 180]"
    },
    {
        "test_id": 1416,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1, -1, -1, -1, -1]"
    },
    {
        "test_id": 1417,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[-1]"
    },
    {
        "test_id": 1418,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[4, 2, 9, 11, 2, 16]"
    },
    {
        "test_id": 1419,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 1]"
    },
    {
        "test_id": 1420,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]"
    },

    // Sort By Length
    {
        "test_id": 1421,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc","","aaa","a","zz"]'
    },
    {
        "test_id": 1422,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["zz","","bb","ccc","cc"]'
    },
    {
        "test_id": 1423,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["abc","e","abcd"]'
    },
    {
        "test_id": 1424,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["a","c","a","a"]'
    },
    {
        "test_id": 1425,
        "input_type": "arrayOfStrings",
        "input_name": "inputArray",
        "input_value": '["thitl","","sadhxirg","hx","ondyxds","kncor","sqrg","hqtchyxku","rl","wd"]'
    },

    // Boxes Packing
    {
        "test_id": 1426,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[1, 3, 2]"
    },
    {
        "test_id": 1426,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[1, 3, 2]"
    },
    {
        "test_id": 1426,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[1, 3, 2]"
    },
    {
        "test_id": 1427,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1427,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1427,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1428,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[3, 1, 2]"
    },
    {
        "test_id": 1428,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[3, 1, 2]"
    },
    {
        "test_id": 1428,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[3, 2, 1]"
    },
    {
        "test_id": 1429,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[2]"
    },
    {
        "test_id": 1429,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[3]"
    },
    {
        "test_id": 1429,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[4]"
    },
    {
        "test_id": 1430,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[5, 7, 4, 1, 2]"
    },
    {
        "test_id": 1430,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[4, 10, 3, 1, 4]"
    },
    {
        "test_id": 1430,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[6, 5, 5, 1, 2]"
    },
    {
        "test_id": 1431,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[6, 4]"
    },
    {
        "test_id": 1431,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[5, 3]"
    },
    {
        "test_id": 1431,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[4, 5]"
    },
    {
        "test_id": 1432,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[6, 3]"
    },
    {
        "test_id": 1432,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[5, 4]"
    },
    {
        "test_id": 1432,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[4, 5]"
    },
    {
        "test_id": 1433,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[6, 3]"
    },
    {
        "test_id": 1433,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[5, 5]"
    },
    {
        "test_id": 1433,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[4, 4]"
    },
    {
        "test_id": 1434,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[883, 807]"
    },
    {
        "test_id": 1434,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[772, 887]"
    },
    {
        "test_id": 1434,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[950, 957]"
    },
    {
        "test_id": 1435,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[6, 5]"
    },
    {
        "test_id": 1435,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[5, 3]"
    },
    {
        "test_id": 1435,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[4, 4]"
    },
    {
        "test_id": 1436,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[4, 10, 3, 1, 4]"
    },
    {
        "test_id": 1436,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[5, 7, 4, 1, 2]"
    },
    {
        "test_id": 1436,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[6, 5, 5, 1, 2]"
    },
    {
        "test_id": 1437,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[10, 8, 6, 4, 1]"
    },
    {
        "test_id": 1437,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[7, 7, 6, 3, 2]"
    },
    {
        "test_id": 1437,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[9, 6, 3, 2, 1]"
    },
    {
        "test_id": 1438,
        "input_type": "arrayOfIntegers",
        "input_name": "length",
        "input_value": "[9980, 9984, 9981]"
    },
    {
        "test_id": 1438,
        "input_type": "arrayOfIntegers",
        "input_name": "width",
        "input_value": "[9980, 9984, 9983]"
    },
    {
        "test_id": 1438,
        "input_type": "arrayOfIntegers",
        "input_name": "height",
        "input_value": "[9981, 9984, 9982]"
    },

    // Maximum Sum
    {
        "test_id": 1439,
        "input_type": "matrix",
        "input_name": "q",
        "input_value": "[[1, 3], [1, 4], [0, 2]]"
    },
    {
        "test_id": 1439,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[9, 7, 2, 4, 4]"
    },
    {
        "test_id": 1440,
        "input_type": "matrix",
        "input_name": "q",
        "input_value": "[[0, 1]]"
    },
    {
        "test_id": 1440,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 1, 2]"
    },
    {
        "test_id": 1441,
        "input_type": "matrix",
        "input_name": "q",
        "input_value": "[[0, 0], [0, 1], [1, 2], [0, 2]]"
    },
    {
        "test_id": 1441,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[5, 3, 2]"
    },
    {
        "test_id": 1442,
        "input_type": "matrix",
        "input_name": "q",
        "input_value": "[[0, 4], [1, 2], [1, 2]]"
    },
    {
        "test_id": 1442,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[5, 2, 4, 1, 3]"
    },
    {
        "test_id": 1443,
        "input_type": "matrix",
        "input_name": "q",
        "input_value": "[[1, 6], [2, 4], [3, 6], [0, 7], [3, 6], [4, 4], [5, 6], [5, 6], [0, 1], [3, 4]]"
    },
    {
        "test_id": 1443,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[4, 2, 1, 6, 5, 7, 2, 4]"
    },

    // Rows Rearranging
    {
        "test_id": 1444,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[2, 7, 1], [0, 2, 0], [1, 3, 1]]"
    },
    {
        "test_id": 1445,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[6, 4], [2, 2], [4, 3]]"
    },
    {
        "test_id": 1446,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[0, 1], [1, 2], [2, 3], [-1, 4]]"
    },
    {
        "test_id": 1447,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[2, 2, 2], [1, 1, 1]]"
    },
    {
        "test_id": 1448,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[1, 3, 1], [0, 2, 0], [1, 7, 2]]"
    },
    {
        "test_id": 1449,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[3, 34, 2, 5, 2], [2, 34, 5, 2, 1]]"
    },
    {
        "test_id": 1450,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[0], [1], [2], [-1]]"
    },
    {
        "test_id": 1451,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[293, -294, -108, 284, -127, 133, 93], [-247, -45, 33, -51, 12, -85, -295], [-272, 275, 285, 157, 175, 261, 163], [74, -89, -67, 106, -207, 47, 147], [-5, -56, -248, 166, -55, 166, 212], [-50, -63, 155, -217, 230, -298, -61], [-66, 181, 233, -175, 64, -69, -76]]"
    },
    {
        "test_id": 1452,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[-186, 169, 47, 28, 275, 67, -118, -9, 162], [-296, 269, -261, 54, 253, 213, 300, -52, -124], [175, -205, -217, -114, -170, 266, 230, -38, -138], [-298, 295, 124, -277, -279, -243, -218, -206, 148], [12, 8, -221, -190, -175, -299, 244, -169, -66], [36, 294, 229, -144, 218, 19, -166, 169, 264]]"
    },
    {
        "test_id": 1453,
        "input_type": "matrix",
        "input_name": "matrix",
        "input_value": "[[22, 149, -107, 159, -158, 295]]"
    },

    // Digit Difference Sort
    {
        "test_id": 1454,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[152, 23, 7, 887, 243]"
    },
    {
        "test_id": 1455,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[]"
    },
    {
        "test_id": 1456,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[561, 798, 132, 339, 218, 724, 462, 332, 9, 343, 592, 34, 95, 292, 626, 970]"
    },
    {
        "test_id": 1457,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[8, 76, 7, 26, 7, 60, 87, 77, 72, 61, 13, 60, 8, 32, 48, 63, 82, 56, 17, 18, 28, 85, 95, 69, 95]"
    },
    {
        "test_id": 1458,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[714, 13, 804, 419, 97, 850, 440, 215, 836, 408, 743, 131, 364, 846, 80, 403, 720, 618, 118, 892, 711, 682, 427, 949, 624]"
    },
    {
        "test_id": 1459,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[13098, 1308, 12398, 52433, 213, 424, 213, 243, 12213, 54234, 99487, 81892, 1, 97897]"
    },

    // Unique Digit Products
    {
        "test_id": 1460,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[2, 8, 121, 42, 222, 23]"
    },
    {
        "test_id": 1461,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[239]"
    },
    {
        "test_id": 1462,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[100, 101, 111]"
    },
    {
        "test_id": 1463,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[100, 23, 42, 239, 22339, 9999999, 456, 78, 228, 1488]"
    },
    {
        "test_id": 1464,
        "input_type": "arrayOfIntegers",
        "input_name": "a",
        "input_value": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]"
    },

    // Bishop and Pawn
    {
        "test_id": 1465,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 1465,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "c3"
    },
    {
        "test_id": 1466,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "h1"
    },
    {
        "test_id": 1466,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h3"
    },
    {
        "test_id": 1467,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a5"
    },
    {
        "test_id": 1467,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "c3"
    },
    {
        "test_id": 1468,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "g1"
    },
    {
        "test_id": 1468,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "f3"
    },
    {
        "test_id": 1469,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e7"
    },
    {
        "test_id": 1469,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "d6"
    },
    {
        "test_id": 1470,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e7"
    },
    {
        "test_id": 1470,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a3"
    },
    {
        "test_id": 1471,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "e3"
    },
    {
        "test_id": 1471,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a7"
    },
    {
        "test_id": 1472,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 1472,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h8"
    },
    {
        "test_id": 1473,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "a1"
    },
    {
        "test_id": 1473,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "h7"
    },
    {
        "test_id": 1474,
        "input_type": "string",
        "input_name": "bishop",
        "input_value": "h1"
    },
    {
        "test_id": 1474,
        "input_type": "string",
        "input_name": "pawn",
        "input_value": "a8"
    },

    // Chess Knight Moves
    {
        "test_id": 1475,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "a1"
    },
    {
        "test_id": 1476,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "c2"
    },
    {
        "test_id": 1477,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "h8"
    },
    {
        "test_id": 1478,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "d5"
    },
    {
        "test_id": 1479,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "a2"
    },
    {
        "test_id": 1480,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "h7"
    },
    {
        "test_id": 1481,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "h6"
    },
    {
        "test_id": 1482,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "b2"
    },
    {
        "test_id": 1483,
        "input_type": "string",
        "input_name": "cell",
        "input_value": "f4"
    },

    // Bishop Diagonal
    {
        "test_id": 1484,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "d7"
    },
    {
        "test_id": 1484,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "f5"
    },
    {
        "test_id": 1485,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "d8"
    },
    {
        "test_id": 1485,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "b5"
    },
    {
        "test_id": 1486,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "a1"
    },
    {
        "test_id": 1486,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "h8"
    },
    {
        "test_id": 1487,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "g3"
    },
    {
        "test_id": 1487,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "e1"
    },
    {
        "test_id": 1488,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "b4"
    },
    {
        "test_id": 1488,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "e7"
    },
    {
        "test_id": 1489,
        "input_type": "string",
        "input_name": "bishop1",
        "input_value": "h1"
    },
    {
        "test_id": 1489,
        "input_type": "string",
        "input_name": "bishop2",
        "input_value": "a1"
    },

    // Whose Turn?
    {
        "test_id": 1490,
        "input_type": "string",
        "input_name": "p",
        "input_value": "b1;g1;b8;g8"
    },
    {
        "test_id": 1491,
        "input_type": "string",
        "input_name": "p",
        "input_value": "c3;g1;b8;g8"
    },
    {
        "test_id": 1492,
        "input_type": "string",
        "input_name": "p",
        "input_value": "g1;g2;g3;g4"
    },
    {
        "test_id": 1493,
        "input_type": "string",
        "input_name": "p",
        "input_value": "f8;h1;f3;c2"
    },
    {
        "test_id": 1494,
        "input_type": "string",
        "input_name": "p",
        "input_value": "a5;d3;c4;h3"
    },
    {
        "test_id": 1495,
        "input_type": "string",
        "input_name": "p",
        "input_value": "f8;g1;h2;h5"
    },
    {
        "test_id": 1496,
        "input_type": "string",
        "input_name": "p",
        "input_value": "a6;g1;a5;a4"
    },
    {
        "test_id": 1497,
        "input_type": "string",
        "input_name": "p",
        "input_value": "g5;h1;a2;h5"
    },
    {
        "test_id": 1498,
        "input_type": "string",
        "input_name": "p",
        "input_value": "e1;f7;f8;b4"
    },
    {
        "test_id": 1499,
        "input_type": "string",
        "input_name": "p",
        "input_value": "g2;d7;h5;h1"
    },

    // Chess Bishop Dream
    {
        "test_id": 1500,
        "input_type": "number",
        "input_name": "k",
        "input_value": "13"
    },
    {
        "test_id": 1500,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[3, 7]"
    },
    {
        "test_id": 1500,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[1, 2]"
    },
    {
        "test_id": 1500,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[-1, 1]"
    },
    {
        "test_id": 1501,
        "input_type": "number",
        "input_name": "k",
        "input_value": "6"
    },
    {
        "test_id": 1501,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[1, 2]"
    },
    {
        "test_id": 1501,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[0, 0]"
    },
    {
        "test_id": 1501,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1502,
        "input_type": "number",
        "input_name": "k",
        "input_value": "12"
    },
    {
        "test_id": 1502,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[2, 2]"
    },
    {
        "test_id": 1502,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[1, 0]"
    },
    {
        "test_id": 1502,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1503,
        "input_type": "number",
        "input_name": "k",
        "input_value": "1000000000"
    },
    {
        "test_id": 1503,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[1, 1]"
    },
    {
        "test_id": 1503,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[0, 0]"
    },
    {
        "test_id": 1503,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[1, -1]"
    },
    {
        "test_id": 1504,
        "input_type": "number",
        "input_name": "k",
        "input_value": "41"
    },
    {
        "test_id": 1504,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[2, 3]"
    },
    {
        "test_id": 1504,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[1, 2]"
    },
    {
        "test_id": 1504,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[-1, -1]"
    },
    {
        "test_id": 1505,
        "input_type": "number",
        "input_name": "k",
        "input_value": "239239"
    },
    {
        "test_id": 1505,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[17, 19]"
    },
    {
        "test_id": 1505,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[14, 8]"
    },
    {
        "test_id": 1505,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[1, -1]"
    },
    {
        "test_id": 1506,
        "input_type": "number",
        "input_name": "k",
        "input_value": "239239239"
    },
    {
        "test_id": 1506,
        "input_type": "arrayOfIntegers",
        "input_name": "boardSize",
        "input_value": "[17, 19]"
    },
    {
        "test_id": 1506,
        "input_type": "arrayOfIntegers",
        "input_name": "initPosition",
        "input_value": "[16, 18]"
    },
    {
        "test_id": 1506,
        "input_type": "arrayOfIntegers",
        "input_name": "initDirection",
        "input_value": "[1, 1]"
    },

    // Chess Triangle
    {
        "test_id": 1507,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 1507,
        "input_type": "number",
        "input_name": "m",
        "input_value": "3"
    },
    {
        "test_id": 1508,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1508,
        "input_type": "number",
        "input_name": "m",
        "input_value": "30"
    },
    {
        "test_id": 1509,
        "input_type": "number",
        "input_name": "n",
        "input_value": "3"
    },
    {
        "test_id": 1509,
        "input_type": "number",
        "input_name": "m",
        "input_value": "3"
    },
    {
        "test_id": 1510,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },
    {
        "test_id": 1510,
        "input_type": "number",
        "input_name": "m",
        "input_value": "2"
    },
    {
        "test_id": 1511,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 1511,
        "input_type": "number",
        "input_name": "m",
        "input_value": "2"
    },

    // Amazon Checkmate
    {
        "test_id": 1512,
        "input_type": "string",
        "input_name": "king",
        "input_value": "d3"
    },
    {
        "test_id": 1512,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "e4"
    },
    {
        "test_id": 1513,
        "input_type": "string",
        "input_name": "king",
        "input_value": "a1"
    },
    {
        "test_id": 1513,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "g5"
    },
    {
        "test_id": 1514,
        "input_type": "string",
        "input_name": "king",
        "input_value": "a3"
    },
    {
        "test_id": 1514,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "e4"
    },
    {
        "test_id": 1515,
        "input_type": "string",
        "input_name": "king",
        "input_value": "f3"
    },
    {
        "test_id": 1515,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "f2"
    },
    {
        "test_id": 1516,
        "input_type": "string",
        "input_name": "king",
        "input_value": "b7"
    },
    {
        "test_id": 1516,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "a8"
    },
    {
        "test_id": 1517,
        "input_type": "string",
        "input_name": "king",
        "input_value": "f7"
    },
    {
        "test_id": 1517,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "d3"
    },
    {
        "test_id": 1518,
        "input_type": "string",
        "input_name": "king",
        "input_value": "g2"
    },
    {
        "test_id": 1518,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "c3"
    },
    {
        "test_id": 1519,
        "input_type": "string",
        "input_name": "king",
        "input_value": "f3"
    },
    {
        "test_id": 1519,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "c1"
    },
    {
        "test_id": 1520,
        "input_type": "string",
        "input_name": "king",
        "input_value": "d4"
    },
    {
        "test_id": 1520,
        "input_type": "string",
        "input_name": "amazon",
        "input_value": "h8"
    },

    // Pawn Race
    {
        "test_id": 1521,
        "input_type": "string",
        "input_name": "white",
        "input_value": "e2"
    },
    {
        "test_id": 1521,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e7"
    },
    {
        "test_id": 1521,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1522,
        "input_type": "string",
        "input_name": "white",
        "input_value": "e3"
    },
    {
        "test_id": 1522,
        "input_type": "string",
        "input_name": "black",
        "input_value": "d7"
    },
    {
        "test_id": 1522,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1523,
        "input_type": "string",
        "input_name": "white",
        "input_value": "a7"
    },
    {
        "test_id": 1523,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h2"
    },
    {
        "test_id": 1523,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1524,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c5"
    },
    {
        "test_id": 1524,
        "input_type": "string",
        "input_name": "black",
        "input_value": "b7"
    },
    {
        "test_id": 1524,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1525,
        "input_type": "string",
        "input_name": "white",
        "input_value": "g2"
    },
    {
        "test_id": 1525,
        "input_type": "string",
        "input_name": "black",
        "input_value": "a3"
    },
    {
        "test_id": 1525,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1526,
        "input_type": "string",
        "input_name": "white",
        "input_value": "h4"
    },
    {
        "test_id": 1526,
        "input_type": "string",
        "input_name": "black",
        "input_value": "g7"
    },
    {
        "test_id": 1526,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1527,
        "input_type": "string",
        "input_name": "white",
        "input_value": "f2"
    },
    {
        "test_id": 1527,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h6"
    },
    {
        "test_id": 1527,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1528,
        "input_type": "string",
        "input_name": "white",
        "input_value": "d3"
    },
    {
        "test_id": 1528,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h2"
    },
    {
        "test_id": 1528,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1529,
        "input_type": "string",
        "input_name": "white",
        "input_value": "a3"
    },
    {
        "test_id": 1529,
        "input_type": "string",
        "input_name": "black",
        "input_value": "d5"
    },
    {
        "test_id": 1529,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1530,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c3"
    },
    {
        "test_id": 1530,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e7"
    },
    {
        "test_id": 1530,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1531,
        "input_type": "string",
        "input_name": "white",
        "input_value": "g4"
    },
    {
        "test_id": 1531,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e4"
    },
    {
        "test_id": 1531,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1532,
        "input_type": "string",
        "input_name": "white",
        "input_value": "f4"
    },
    {
        "test_id": 1532,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h6"
    },
    {
        "test_id": 1532,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1533,
        "input_type": "string",
        "input_name": "white",
        "input_value": "b5"
    },
    {
        "test_id": 1533,
        "input_type": "string",
        "input_name": "black",
        "input_value": "f3"
    },
    {
        "test_id": 1533,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1534,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c5"
    },
    {
        "test_id": 1534,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e5"
    },
    {
        "test_id": 1534,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1535,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c6"
    },
    {
        "test_id": 1535,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e2"
    },
    {
        "test_id": 1535,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1536,
        "input_type": "string",
        "input_name": "white",
        "input_value": "f6"
    },
    {
        "test_id": 1536,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h4"
    },
    {
        "test_id": 1536,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1537,
        "input_type": "string",
        "input_name": "white",
        "input_value": "e3"
    },
    {
        "test_id": 1537,
        "input_type": "string",
        "input_name": "black",
        "input_value": "f4"
    },
    {
        "test_id": 1537,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1538,
        "input_type": "string",
        "input_name": "white",
        "input_value": "a6"
    },
    {
        "test_id": 1538,
        "input_type": "string",
        "input_name": "black",
        "input_value": "f7"
    },
    {
        "test_id": 1538,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1539,
        "input_type": "string",
        "input_name": "white",
        "input_value": "e7"
    },
    {
        "test_id": 1539,
        "input_type": "string",
        "input_name": "black",
        "input_value": "h3"
    },
    {
        "test_id": 1539,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1540,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c7"
    },
    {
        "test_id": 1540,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e6"
    },
    {
        "test_id": 1540,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1541,
        "input_type": "string",
        "input_name": "white",
        "input_value": "g2"
    },
    {
        "test_id": 1541,
        "input_type": "string",
        "input_name": "black",
        "input_value": "f2"
    },
    {
        "test_id": 1541,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1542,
        "input_type": "string",
        "input_name": "white",
        "input_value": "f2"
    },
    {
        "test_id": 1542,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e5"
    },
    {
        "test_id": 1542,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1543,
        "input_type": "string",
        "input_name": "white",
        "input_value": "c2"
    },
    {
        "test_id": 1543,
        "input_type": "string",
        "input_name": "black",
        "input_value": "d7"
    },
    {
        "test_id": 1543,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },
    {
        "test_id": 1544,
        "input_type": "string",
        "input_name": "white",
        "input_value": "d4"
    },
    {
        "test_id": 1544,
        "input_type": "string",
        "input_name": "black",
        "input_value": "e3"
    },
    {
        "test_id": 1544,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "w"
    },
    {
        "test_id": 1545,
        "input_type": "string",
        "input_name": "white",
        "input_value": "h3"
    },
    {
        "test_id": 1545,
        "input_type": "string",
        "input_name": "black",
        "input_value": "g6"
    },
    {
        "test_id": 1545,
        "input_type": "string",
        "input_name": "toMove",
        "input_value": "b"
    },

    // Valid Time
    {
        "test_id": 1546,
        "input_type": "string",
        "input_name": "time",
        "input_value": "13:58"
    },
    {
        "test_id": 1547,
        "input_type": "string",
        "input_name": "time",
        "input_value": "25:51"
    },
    {
        "test_id": 1548,
        "input_type": "string",
        "input_name": "time",
        "input_value": "02:76"
    },
    {
        "test_id": 1549,
        "input_type": "string",
        "input_name": "time",
        "input_value": "24:00"
    },
    {
        "test_id": 1550,
        "input_type": "string",
        "input_name": "time",
        "input_value": "02:61"
    },
    {
        "test_id": 1551,
        "input_type": "string",
        "input_name": "time",
        "input_value": "27:00"
    },
    {
        "test_id": 1552,
        "input_type": "string",
        "input_name": "time",
        "input_value": "19:66"
    },
    {
        "test_id": 1553,
        "input_type": "string",
        "input_name": "time",
        "input_value": "12:31"
    },
    {
        "test_id": 1554,
        "input_type": "string",
        "input_name": "time",
        "input_value": "25:73"
    },
    {
        "test_id": 1555,
        "input_type": "string",
        "input_name": "time",
        "input_value": "09:56"
    },
    {
        "test_id": 1556,
        "input_type": "string",
        "input_name": "time",
        "input_value": "03:29"
    },

    // Video Part
    {
        "test_id": 1557,
        "input_type": "string",
        "input_name": "part",
        "input_value": "02:20:00"
    },
    {
        "test_id": 1557,
        "input_type": "string",
        "input_name": "total",
        "input_value": "07:00:00"
    },
    {
        "test_id": 1558,
        "input_type": "string",
        "input_name": "part",
        "input_value": "25:26:20"
    },
    {
        "test_id": 1558,
        "input_type": "string",
        "input_name": "total",
        "input_value": "25:26:20"
    },
    {
        "test_id": 1559,
        "input_type": "string",
        "input_name": "part",
        "input_value": "00:02:20"
    },
    {
        "test_id": 1559,
        "input_type": "string",
        "input_name": "total",
        "input_value": "00:10:00"
    },
    {
        "test_id": 1560,
        "input_type": "string",
        "input_name": "part",
        "input_value": "08:08:08"
    },
    {
        "test_id": 1560,
        "input_type": "string",
        "input_name": "total",
        "input_value": "20:20:20"
    },
    {
        "test_id": 1561,
        "input_type": "string",
        "input_name": "part",
        "input_value": "00:00:07"
    },
    {
        "test_id": 1561,
        "input_type": "string",
        "input_name": "total",
        "input_value": "01:10:00"
    },
    {
        "test_id": 1562,
        "input_type": "string",
        "input_name": "part",
        "input_value": "07:32:29"
    },
    {
        "test_id": 1562,
        "input_type": "string",
        "input_name": "total",
        "input_value": "10:12:51"
    },
    {
        "test_id": 1563,
        "input_type": "string",
        "input_name": "part",
        "input_value": "01:41:59"
    },
    {
        "test_id": 1563,
        "input_type": "string",
        "input_name": "total",
        "input_value": "02:00:00"
    },

    // Day of Week
    {
        "test_id": 1564,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "02-01-2016"
    },
    {
        "test_id": 1565,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "01-01-1900"
    },
    {
        "test_id": 1566,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "02-29-2016"
    },
    {
        "test_id": 1567,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "01-16-2027"
    },
    {
        "test_id": 1568,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "10-12-2000"
    },
    {
        "test_id": 1569,
        "input_type": "string",
        "input_name": "birthdayDate",
        "input_value": "02-29-2072"
    },

    // Curious Clock
    {
        "test_id": 1570,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "2016-08-26 22:40"
    },
    {
        "test_id": 1570,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "2016-08-29 10:00"
    },
    {
        "test_id": 1571,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "2016-08-26 22:40"
    },
    {
        "test_id": 1571,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "2016-08-26 22:41"
    },
    {
        "test_id": 1572,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "2015-01-14 09:12"
    },
    {
        "test_id": 1572,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "2015-11-04 17:36"
    },
    {
        "test_id": 1573,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "2016-02-28 12:21"
    },
    {
        "test_id": 1573,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "2016-03-01 22:21"
    },
    {
        "test_id": 1574,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "1995-05-30 13:48"
    },
    {
        "test_id": 1574,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "2016-04-22 05:32"
    },
    {
        "test_id": 1575,
        "input_type": "string",
        "input_name": "someTime",
        "input_value": "1992-09-29 00:00"
    },
    {
        "test_id": 1575,
        "input_type": "string",
        "input_name": "leavingTime",
        "input_value": "1998-12-04 23:59"
    },

    // New Year Celebrations
    {
        "test_id": 1576,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "23:35"
    },
    {
        "test_id": 1576,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[60, 90, 140]"
    },
    {
        "test_id": 1577,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "00:00"
    },
    {
        "test_id": 1577,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[60, 120, 180, 250]"
    },
    {
        "test_id": 1578,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "13:36"
    },
    {
        "test_id": 1578,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[23, 33, 45, 56, 66, 88]"
    },
    {
        "test_id": 1579,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "22:50"
    },
    {
        "test_id": 1579,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[]"
    },
    {
        "test_id": 1580,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "20:18"
    },
    {
        "test_id": 1580,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[222, 342]"
    },
    {
        "test_id": 1581,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "12:05"
    },
    {
        "test_id": 1581,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[1, 109, 113, 344, 345, 478, 545, 565, 809, 814, 838, 883, 971, 1007, 1029, 1053, 1133, 1271, 1314, 1500]"
    },
    {
        "test_id": 1582,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "17:10"
    },
    {
        "test_id": 1582,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[150, 160, 293, 589, 614, 716, 760, 776, 781, 911, 1040, 1438]"
    },
    {
        "test_id": 1583,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "18:15"
    },
    {
        "test_id": 1583,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[117, 241, 364, 375, 545, 1317]"
    },
    {
        "test_id": 1584,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "19:44"
    },
    {
        "test_id": 1584,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[545, 1320]"
    },
    {
        "test_id": 1585,
        "input_type": "string",
        "input_name": "takeOffTime",
        "input_value": "21:13"
    },
    {
        "test_id": 1585,
        "input_type": "arrayOfIntegers",
        "input_name": "minutes",
        "input_value": "[52, 257, 323, 515, 579, 600, 703, 707, 1127, 1298]"
    },

    // Regular Months
    {
        "test_id": 1586,
        "input_type": "string",
        "input_name": "currMonth",
        "input_value": "02-2016"
    },
    {
        "test_id": 1587,
        "input_type": "string",
        "input_name": "currMonth",
        "input_value": "05-2027"
    },
    {
        "test_id": 1588,
        "input_type": "string",
        "input_name": "currMonth",
        "input_value": "09-2099"
    },
    {
        "test_id": 1589,
        "input_type": "string",
        "input_name": "currMonth",
        "input_value": "01-1970"
    },
    {
        "test_id": 1590,
        "input_type": "string",
        "input_name": "currMonth",
        "input_value": "07-2024"
    },

    // Missed Classes
    {
        "test_id": 1591,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": "[2, 3]"
    },
    {
        "test_id": 1591,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["11-04","02-22","02-23","03-07","03-08","05-09"]'
    },
    {
        "test_id": 1592,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[]'
    },
    {
        "test_id": 1592,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '[]'
    },
    {
        "test_id": 1593,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[1, 4, 7]'
    },
    {
        "test_id": 1593,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["10-28","05-03","10-02","05-07","05-25","09-04","10-30","03-03","09-02","11-08"]'
    },
    {
        "test_id": 1594,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[1, 4, 6, 7]'
    },
    {
        "test_id": 1594,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["03-17","04-03","03-08","09-18","05-28","02-14","10-20","01-02","01-22","10-04","02-02","10-07","09-30","05-20","05-23","09-22","01-12","05-02","10-21","03-20"]'
    },
    {
        "test_id": 1595,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[1, 2 , 3 , 4 , 5 , 6 , 7]'
    },
    {
        "test_id": 1595,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["01-20","02-09","01-25","09-01","05-30","12-24","09-05","10-15","09-25","10-23","10-10","05-29","02-05","11-19","04-28","02-17","05-04","01-26","05-31","03-19","12-31","09-26","05-19","05-14","09-03","05-21","02-08","11-09","09-09","04-21"]'
    },
    {
        "test_id": 1596,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[]'
    },
    {
        "test_id": 1596,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '[]'
    },
    {
        "test_id": 1597,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[1, 2, 3]'
    },
    {
        "test_id": 1597,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["10-28","05-26","09-24","11-28","09-17","03-29","09-08","05-13","10-23","11-29","04-26","10-27","09-26","09-09","12-07"]'
    },
    {
        "test_id": 1598,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[1, 2, 3, 5]'
    },
    {
        "test_id": 1598,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["11-12","09-10","11-10","05-12","05-03","03-04","02-14","12-25","09-24","11-17","09-22","09-14","12-04","01-24","03-24","05-26","09-01","11-20","04-30","03-20","10-04","11-21","01-14","05-11","12-03","11-01"]'
    },
    {
        "test_id": 1599,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[2, 3]'
    },
    {
        "test_id": 1599,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '["11-04","02-22","02-23","03-07","03-08","05-09"]'
    },
    {
        "test_id": 1600,
        "input_type": "arrayOfIntegers",
        "input_name": "daysOfTheWeek",
        "input_value": '[]'
    },
    {
        "test_id": 1600,
        "input_type": "arrayOfStrings",
        "input_name": "holidays",
        "input_value": '[]'
    },
    {
        "test_id": 1591,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2015"
    },
    {
        "test_id": 1592,
        "input_type": "number",
        "input_name": "year",
        "input_value": "1900"
    },
    {
        "test_id": 1593,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2100"
    },
    {
        "test_id": 1594,
        "input_type": "number",
        "input_name": "year",
        "input_value": "1956"
    },
    {
        "test_id": 1595,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2067"
    },
    {
        "test_id": 1596,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2000"
    },
    {
        "test_id": 1597,
        "input_type": "number",
        "input_name": "year",
        "input_value": "1995"
    },
    {
        "test_id": 1598,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2045"
    },
    {
        "test_id": 1599,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2014"
    },
    {
        "test_id": 1600,
        "input_type": "number",
        "input_name": "year",
        "input_value": "2100"
    },

    // Holiday
    {
        "test_id": 1601,
        "input_type": "number",
        "input_name": "x",
        "input_value": "3"
    },
    {
        "test_id": 1601,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2016"
    },
    {
        "test_id": 1601,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Wednesday"
    },
    {
        "test_id": 1601,
        "input_type": "string",
        "input_name": "month",
        "input_value": "November"
    },
    {
        "test_id": 1602,
        "input_type": "number",
        "input_name": "x",
        "input_value": "5"
    },
    {
        "test_id": 1602,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2016"
    },
    {
        "test_id": 1602,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1602,
        "input_type": "string",
        "input_name": "month",
        "input_value": "November"
    },
    {
        "test_id": 1603,
        "input_type": "number",
        "input_name": "x",
        "input_value": "1"
    },
    {
        "test_id": 1603,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2015"
    },
    {
        "test_id": 1603,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1603,
        "input_type": "string",
        "input_name": "month",
        "input_value": "January"
    },
    {
        "test_id": 1604,
        "input_type": "number",
        "input_name": "x",
        "input_value": "2"
    },
    {
        "test_id": 1604,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2015"
    },
    {
        "test_id": 1604,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1604,
        "input_type": "string",
        "input_name": "month",
        "input_value": "January"
    },
    {
        "test_id": 1605,
        "input_type": "number",
        "input_name": "x",
        "input_value": "3"
    },
    {
        "test_id": 1605,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2015"
    },
    {
        "test_id": 1605,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1605,
        "input_type": "string",
        "input_name": "month",
        "input_value": "January"
    },
    {
        "test_id": 1606,
        "input_type": "number",
        "input_name": "x",
        "input_value": "3"
    },
    {
        "test_id": 1606,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2101"
    },
    {
        "test_id": 1606,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1606,
        "input_type": "string",
        "input_name": "month",
        "input_value": "January"
    },
    {
        "test_id": 1607,
        "input_type": "number",
        "input_name": "x",
        "input_value": "3"
    },
    {
        "test_id": 1607,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2401"
    },
    {
        "test_id": 1607,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1607,
        "input_type": "string",
        "input_name": "month",
        "input_value": "January"
    },
    {
        "test_id": 1608,
        "input_type": "number",
        "input_name": "x",
        "input_value": "2"
    },
    {
        "test_id": 1608,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2500"
    },
    {
        "test_id": 1608,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Thursday"
    },
    {
        "test_id": 1608,
        "input_type": "string",
        "input_name": "month",
        "input_value": "December"
    },
    {
        "test_id": 1609,
        "input_type": "number",
        "input_name": "x",
        "input_value": "5"
    },
    {
        "test_id": 1609,
        "input_type": "number",
        "input_name": "yearNumber",
        "input_value": "2016"
    },
    {
        "test_id": 1609,
        "input_type": "string",
        "input_name": "weekDay",
        "input_value": "Monday"
    },
    {
        "test_id": 1609,
        "input_type": "string",
        "input_name": "month",
        "input_value": "February"
    },

    // Is Sentence Correct?
    {
        "test_id": 1610,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "This is an example of *correct* sentence."
    },
    {
        "test_id": 1611,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "!this sentence is TOTALLY incorrecT"
    },
    {
        "test_id": 1612,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "Almost correct sentence"
    },
    {
        "test_id": 1613,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "Something is !wrong! here."
    },
    {
        "test_id": 1614,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "Time to roll!!!"
    },
    {
        "test_id": 1615,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "This one is okay though, isn't it?"
    },
    {
        "test_id": 1616,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "this sentence, I'm afraid, is a bit incorrect."
    },
    {
        "test_id": 1617,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "I'm glad this sentence is correct, my friends."
    },
    {
        "test_id": 1618,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "CodeSignal is lame!!!"
    },
    {
        "test_id": 1619,
        "input_type": "string",
        "input_name": "sentence",
        "input_value": "No way, CodeSignal is awesome!"
    },

    // Replace All Digits RegExp
    {
        "test_id": 1620,
        "input_type": "string",
        "input_name": "input",
        "input_value": "There are 12 points"
    },
    {
        "test_id": 1621,
        "input_type": "string",
        "input_name": "input",
        "input_value": "012ss210"
    },
    {
        "test_id": 1622,
        "input_type": "string",
        "input_name": "input",
        "input_value": "_Aas 23"
    },
    {
        "test_id": 1623,
        "input_type": "string",
        "input_name": "input",
        "input_value": "no digits here"
    },
    {
        "test_id": 1624,
        "input_type": "string",
        "input_name": "input",
        "input_value": "aa_0239mehce3d"
    },
    {
        "test_id": 1625,
        "input_type": "string",
        "input_name": "input",
        "input_value": "v z gv4zyx eu mu"
    },

    // Swap Adjacent Words
    {
        "test_id": 1626,
        "input_type": "string",
        "input_name": "s",
        "input_value": "CodeFight On"
    },
    {
        "test_id": 1627,
        "input_type": "string",
        "input_name": "s",
        "input_value": "How are you today guys"
    },
    {
        "test_id": 1628,
        "input_type": "string",
        "input_name": "s",
        "input_value": "IAmALongStringWithNoWhiteSpaceCharacters"
    },
    {
        "test_id": 1629,
        "input_type": "string",
        "input_name": "s",
        "input_value": "A b C D e F g h I j"
    },
    {
        "test_id": 1630,
        "input_type": "string",
        "input_name": "s",
        "input_value": ""
    },

    // N-th Number
    {
        "test_id": 1631,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 1631,
        "input_type": "string",
        "input_name": "s",
        "input_value": "8one 003number 201numbers li-000233le number444"
    },
    {
        "test_id": 1632,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 1632,
        "input_type": "string",
        "input_name": "s",
        "input_value": "some023020 num ber 033 02103 32 meh peh beh 4328"
    },
    {
        "test_id": 1633,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1633,
        "input_type": "string",
        "input_name": "s",
        "input_value": "007 is an awesome agent"
    },
    {
        "test_id": 1634,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1634,
        "input_type": "string",
        "input_name": "s",
        "input_value": "Everyone hates error 404"
    },
    {
        "test_id": 1635,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 1635,
        "input_type": "string",
        "input_name": "s",
        "input_value": "LaS003920tP3rEt4t04Yte0023s3t"
    },
    {
        "test_id": 1636,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 1636,
        "input_type": "string",
        "input_name": "s",
        "input_value": "=_aaYiM*}&0077|D))ztIV00012432748730156644204805614898523099655216oio0854102350044141_|YDL0584511290939644184700867021026771007612398051168360441323oIc:G*0204864749576405915~wqgN0037594999439741539584332{F&wjxiLy-mE"
    },

    // Is Subsequence?
    {
        "test_id": 1637,
        "input_type": "string",
        "input_name": "t",
        "input_value": "CodeSignal"
    },
    {
        "test_id": 1637,
        "input_type": "string",
        "input_name": "s",
        "input_value": "CoSi"
    },
    {
        "test_id": 1638,
        "input_type": "string",
        "input_name": "t",
        "input_value": "CodeSignal"
    },
    {
        "test_id": 1638,
        "input_type": "string",
        "input_name": "s",
        "input_value": "cosi"
    },
    {
        "test_id": 1639,
        "input_type": "string",
        "input_name": "t",
        "input_value": "somestring"
    },
    {
        "test_id": 1639,
        "input_type": "string",
        "input_name": "s",
        "input_value": ""
    },
    {
        "test_id": 1640,
        "input_type": "string",
        "input_name": "t",
        "input_value": "penny"
    },
    {
        "test_id": 1640,
        "input_type": "string",
        "input_name": "s",
        "input_value": "longsenselessstringwithpennyinside"
    },
    {
        "test_id": 1641,
        "input_type": "string",
        "input_name": "t",
        "input_value": "parliament"
    },
    {
        "test_id": 1641,
        "input_type": "string",
        "input_name": "s",
        "input_value": "partialmen"
    },
    {
        "test_id": 1642,
        "input_type": "string",
        "input_name": "t",
        "input_value": ""
    },
    {
        "test_id": 1642,
        "input_type": "string",
        "input_name": "s",
        "input_value": ""
    },
    {
        "test_id": 1643,
        "input_type": "string",
        "input_name": "t",
        "input_value": ""
    },
    {
        "test_id": 1643,
        "input_type": "string",
        "input_name": "s",
        "input_value": "hoho"
    },
    {
        "test_id": 1644,
        "input_type": "string",
        "input_name": "t",
        "input_value": "he sd.f dsk e8.sd??l**23, 23,f.s++83+"
    },
    {
        "test_id": 1644,
        "input_type": "string",
        "input_name": "s",
        "input_value": "h  8.?*3+"
    },
    {
        "test_id": 1645,
        "input_type": "string",
        "input_name": "t",
        "input_value": "abc"
    },
    {
        "test_id": 1645,
        "input_type": "string",
        "input_name": "s",
        "input_value": "d"
    },
    {
        "test_id": 1646,
        "input_type": "string",
        "input_name": "t",
        "input_value": "abcd"
    },
    {
        "test_id": 1646,
        "input_type": "string",
        "input_name": "s",
        "input_value": "ad"
    },

    // Eye Rhyme
    {
        "test_id": 1647,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "cough\\tbough"
    },
    {
        "test_id": 1648,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "CodeFig!ht\\tWith all your might"
    },
    {
        "test_id": 1649,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "quod erat demonstrandum\\tand that, ladies and gentlemen, is the end of my memorandum"
    },
    {
        "test_id": 1650,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "yup\\tyes"
    },
    {
        "test_id": 1651,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "hey\\they"
    },
    {
        "test_id": 1652,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "E = MC<sup>2</sup>\\twhich in turn equals sup"
    },
    {
        "test_id": 1653,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "Isn't it correct?!\\tIt definitely is! Does it mean that we've just obtained a full set?!"
    },
    {
        "test_id": 1654,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "Nothing can go wrong here :)\\tHehehehe:)"
    },
    {
        "test_id": 1655,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "!1?/\\tsldkjfl3 sldjf 1?/"
    },
    {
        "test_id": 1656,
        "input_type": "string",
        "input_name": "pairOfLines",
        "input_value": "simple\\tpimple"
    },

    // Program Translation
    {
        "test_id": 1657,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["n","m"]'
    },
    {
        "test_id": 1658,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["a","cnt"]'
    },
    {
        "test_id": 1659,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["uselessVar"]'
    },
    {
        "test_id": 1660,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["variable"]'
    },
    {
        "test_id": 1661,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["rep","laceT","hemAll"]'
    },
    {
        "test_id": 1662,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["fu_","_re5","NOO"]'
    },
    {
        "test_id": 1663,
        "input_type": "arrayOfStrings",
        "input_name": "args",
        "input_value": '["m"]'
    },
    {
        "test_id": 1657,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function add($n, m) {\\t  return n + $m;\\t}"
    },
    {
        "test_id": 1658,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function findSum(a, $cnt) {\\t  var a0 = $a;\\t  for (var _cnt = 0, _cnt < cnt; _cnt++)\\t    a0 += _cnt;\\t  return a0;\\t}"
    },
    {
        "test_id": 1659,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function doNothing($uselessVar) {\\t  return $uselessVar;\\t}"
    },
    {
        "test_id": 1660,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function addToVariable(variable) {\\t  variable_which_should_be_increased = 14;\\t  variable_which_should_be_increased += variable;\\t  return variable_which_should_be_increased;\\t}"
    },
    {
        "test_id": 1661,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function replaceThemAll(rep, laceT, hemAll, ornot) {\\t  var tmp = rep;\\t  rep = laceT;\\t  laceT = hemAll;\\t  hemAll = tmp;\\t  return [rep, laceT, hemAll]\\t}"
    },
    {
        "test_id": 1662,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function returnSecond(fu_,_re5,NOO) {\\t  return _re5;\\t}"
    },
    {
        "test_id": 1663,
        "input_type": "string",
        "input_name": "code",
        "input_value": "function getLength(k, m) {\\t  return m.length;\\t}"
    },

    // Repetition Encryption
    {
        "test_id": 1664,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "Hi, hi Jane! I'm so. So glad to to finally be able to write - WRITE!! - to you!"
    },
    {
        "test_id": 1665,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "Yo-yo, how's s it going going for ya? Ya is okay, okay'nt ya?"
    },
    {
        "test_id": 1666,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "Hi Jane, how are you doing today?"
    },
    {
        "test_id": 1667,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "My friend, friend of mine, I am really-really happy for you! You are amazing, please write me back when you can."
    },
    {
        "test_id": 1668,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "Everything is fine, fine perfectly here. Here I have fun (fun all the day!) days. Although I miss you, so please please, Jane, write, write me whenever you can! Can you do that? That is the only (!!ONLY!!) thing I ask from you, you sunshine."
    },
    {
        "test_id": 1669,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "Do not notify me about this in the future"
    },
    {
        "test_id": 1670,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "ho-ho--he-he"
    },
    {
        "test_id": 1671,
        "input_type": "string",
        "input_name": "letter",
        "input_value": "WeLl wElL"
    },

    // Bugs and Bugfixes
    {
        "test_id": 1672,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "Roll d6-3 and 4d4+3 to pick a weapon, and finish the boss with 3d7!"
    },
    {
        "test_id": 1673,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "d6-almost 01d4+2 12d01-3 5d5-00 a valid formula"
    },
    {
        "test_id": 1674,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "meh4d2-3D3"
    },
    {
        "test_id": 1675,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "ad3+4, 44b-6, 5daa"
    },
    {
        "test_id": 1676,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "4d6-L1d20-10 did4n't expect that"
    },
    {
        "test_id": 1677,
        "input_type": "string",
        "input_name": "rules",
        "input_value": "nothing here"
    },

    // LRC to SubRip
    {
        "test_id": 1678,
        "input_type": "string",
        "input_name": "songLength",
        "input_value": "00:00:20"
    },
    {
        "test_id": 1679,
        "input_type": "string",
        "input_name": "songLength",
        "input_value": "00:24:00"
    },
    {
        "test_id": 1680,
        "input_type": "string",
        "input_name": "songLength",
        "input_value": "02:23:44"
    },
    {
        "test_id": 1681,
        "input_type": "string",
        "input_name": "songLength",
        "input_value": "02:59:59"
    },
    {
        "test_id": 1682,
        "input_type": "string",
        "input_name": "songLength",
        "input_value": "02:34:36"
    },
    {
        "test_id": 1678,
        "input_type": "arrayOfStrings",
        "input_name": "lrcLyrics",
        "input_value": '["[00:12.00] Happy birthday dear coder,", "[00:17.20] Happy birthday to you!"]'
    },
    {
        "test_id": 1679,
        "input_type": "arrayOfStrings",
        "input_name": "lrcLyrics",
        "input_value": '["[00:04.42] jingle bells, jingle bells, jingle all the way!", "[00:08.46] Oh what fun it is to ride in a one horse open sleigh.", "[00:12.83] jingle bells, jingle bells, jingle all the way!", "[00:17.45] Oh what fun it is to ride in a one horse open sleigh.", "[00:21.89] jingle bells, jingle bells, jingle all the way!"]'
    },
    {
        "test_id": 1680,
        "input_type": "arrayOfStrings",
        "input_name": "lrcLyrics",
        "input_value": '["[95:19.55] i hear babies cryin,", "[95:23.31] i watch them grow", "[95:26.05] theyll learn much more", "[95:29.18] than ill ever know", "[95:33.10] and i think to myself,", "[95:38.44] what a wonderful world"]'
    },
    {
        "test_id": 1681,
        "input_type": "arrayOfStrings",
        "input_name": "lrcLyrics",
        "input_value": '["[12:24.80] make it the cutest", "[14:26.46] that ive ever seen", "[17:28.96] give hm the lips", "[21:30.36] like roses in clover", "[35:33.03] then tell him that", "[46:34.42] his lone some nights are over", "[57:36.68] Mr.sandman", "[67:38.71] i am so along", "[97:40.99] dont have nobody", "[99:42.63] to call my own"]'
    },
    {
        "test_id": 1682,
        "input_type": "arrayOfStrings",
        "input_name": "lrcLyrics",
        "input_value": '["[12:51.10] Hello tacher tell me whats my lesson", "[16:57.10] Look right through me,", "[24:00.36] look right through me", "[27:04.57] And I find it kind of funny", "[34:08.16] I find it kind of sad", "[46:10.42] The dream in which Im dying", "[57:13.70] Are the best Ive ever had", "[68:16.47] I find it hard to tell you", "[73:19.47] Cos I find it hard to take", "[86:22.56] When people run in circles", "[92:25.91] Its a very very"]'
    },

    // HTML Table
    {
        "test_id": 1683,
        "input_type": "number",
        "input_name": "row",
        "input_value": "0"
    },
    {
        "test_id": 1683,
        "input_type": "number",
        "input_name": "column",
        "input_value": "1"
    },
    {
        "test_id": 1683,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>1</td><td>TWO</td></tr><tr><td>three</td><td>FoUr4</td></tr></table>"
    },
    {
        "test_id": 1684,
        "input_type": "number",
        "input_name": "row",
        "input_value": "1"
    },
    {
        "test_id": 1684,
        "input_type": "number",
        "input_name": "column",
        "input_value": "0"
    },
    {
        "test_id": 1684,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>1</td><td>TWO</td></tr></table>"
    },
    {
        "test_id": 1685,
        "input_type": "number",
        "input_name": "row",
        "input_value": "1"
    },
    {
        "test_id": 1685,
        "input_type": "number",
        "input_name": "column",
        "input_value": "1"
    },
    {
        "test_id": 1685,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>7BusWMJ</td><td>D</td><td>5QPh9o</td></tr><tr><td>4Z</td><td>9Z</td><td>okc3</td></tr><tr><td>7mV88j</td><td>K358zV8</td><td>Y2vE</td></tr></table>"
    },
    {
        "test_id": 1686,
        "input_type": "number",
        "input_name": "row",
        "input_value": "0"
    },
    {
        "test_id": 1686,
        "input_type": "number",
        "input_name": "column",
        "input_value": "0"
    },
    {
        "test_id": 1686,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>mhPuzp82Mm</td><td>dQijA9O</td><td>x</td><td>2p1GX2lTrM</td></tr><tr><td>4hcQ</td><td>a046</td><td>8bQ7</td><td>Nmdt</td></tr><tr><td>jjC</td><td>zJ5SY05n</td><td>XQxJ</td><td>4yIXC8</td></tr></table>"
    },
    {
        "test_id": 1687,
        "input_type": "number",
        "input_name": "row",
        "input_value": "5"
    },
    {
        "test_id": 1687,
        "input_type": "number",
        "input_name": "column",
        "input_value": "4"
    },
    {
        "test_id": 1687,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>jQu9ABs8l</td><td>9alQS</td><td>6j</td><td>x0C</td><td>VJwINu0wjE</td></tr><tr><td>52K</td><td>w5P</td><td>K0HTHBB</td><td>76H</td><td>2Up4kl</td></tr><tr><td>d7J9bn7lx</td><td>unJT</td><td>mdICgjl</td><td>v0</td><td>LKvS1LbYBo</td></tr><tr><td>eld9</td><td>O</td><td>Yqe184E9</td><td>b45QX0313A</td><td>4M02</td></tr><tr><td>6XKiOf96</td><td>wb7</td><td>HW5535kri</td><td>81U</td><td>V64O2502a</td></tr><tr><td>o8</td><td>col7G7g</td><td>y92s3R</td><td>q1</td><td>zl0LizILrm</td></tr></table>"
    },
    {
        "test_id": 1688,
        "input_type": "number",
        "input_name": "row",
        "input_value": "9"
    },
    {
        "test_id": 1688,
        "input_type": "number",
        "input_name": "column",
        "input_value": "10"
    },
    {
        "test_id": 1688,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><td>1</td><td>040S713</td><td>2974b</td><td>Pp4Y9</td><td>UWvp2Sq6Sd</td><td>997r6De</td><td>Bh</td><td>TBy</td><td>Ss6C</td><td>8c</td></tr><tr><td>2</td><td>R81hX704</td><td>89b6a6</td><td>jwk0b</td><td>JC80xBvW</td><td>Ka</td><td>7</td><td>E3Lx</td><td>0wg1</td><td>4HCs</td></tr><tr><td>C6d2</td><td>o2N9Twup6</td><td>Pa42t</td><td>88T0itrA</td><td>DtAmM23</td><td>09Fseat</td><td>Qd5j8Cg</td><td>N20GvC8sk2</td><td>Eqq</td><td>Dq2XnGa0</td></tr><tr><td>Kd</td><td>SO4cZHM</td><td>x</td><td>ie3lbmsvx</td><td>23jWU</td><td>3UjEeT9h</td><td>Es9K7q5</td><td>ij58GnGEuk</td><td>5</td><td>bx0</td></tr><tr><td>aNXo91iG78</td><td>6M</td><td>6J9Lf8b5</td><td>MbQ1HRGtDH</td><td>5skjIH</td><td>P7z2SQnlX2</td><td>6ng</td><td>gAvz4dtCH</td><td>78NN98d</td><td>F8zy4SHXA1</td></tr><tr><td>khAM1</td><td>TIJ</td><td>gA034V</td><td>Cg95</td><td>62</td><td>6N371</td><td>1IN1I</td><td>b</td><td>PafB8Bnf</td><td>6jah</td></tr><tr><td>A4q</td><td>KWvhoy76Z</td><td>WLRK</td><td>0u</td><td>AC6H</td><td>JXM8WxO</td><td>0riDU6</td><td>1</td><td>BX327aD0</td><td>j2WDGTiIL</td></tr><tr><td>eCfoZ7</td><td>h96JOr3</td><td>93gC</td><td>jZT1ZShL3</td><td>NP3</td><td>T6a3KG</td><td>pN</td><td>3jVF</td><td>PZ4P</td><td>3bQk4TKe</td></tr><tr><td>6</td><td>z</td><td>VN</td><td>1PlI5T5</td><td>m5P</td><td>N</td><td>6Rz4CAC31r</td><td>7A732yr74</td><td>60</td><td>669N5t</td></tr><tr><td>ugT9</td><td>BM9</td><td>x6wi</td><td>NLMrzA9</td><td>Y61Dd8MF</td><td>45G9Nq15uS</td><td>VcDP</td><td>A</td><td>z</td><td>08HL8EXL5S</td></tr></table>"
    },
    {
        "test_id": 1689,
        "input_type": "number",
        "input_name": "row",
        "input_value": "0"
    },
    {
        "test_id": 1689,
        "input_type": "number",
        "input_name": "column",
        "input_value": "6"
    },
    {
        "test_id": 1689,
        "input_type": "string",
        "input_name": "table",
        "input_value": "<table><tr><th>CIRCUMFERENCE</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr><tr><td>BITS</td><td>3</td><td>4</td><td>8</td><td>10</td><td>12</td><td>15</td></tr></table>"
    },

    // Chess Notation
    {
        "test_id": 1690,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"
    },
    {
        "test_id": 1691,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    },
    {
        "test_id": 1692,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "2kr3r/pp1nbppp/3p1n2/q1pPp1B1/4P1b1/2N2N2/PPP1BPPP/R2Q2RK"
    },
    {
        "test_id": 1693,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "rNBNn1nR/RN2BNbp/BN3Br1/B1BBp1Kb/npRrBrpb/QB2k1QR/q1nrn2r/bbNBN3"
    },
    {
        "test_id": 1694,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "bN2nrp1/n1nQn1n1/p1bPRPrb/n2Q1Nrb/Bn1nBRnB/Q1n1N1b1/qk1n1R2/Q1n2n1Q"
    },
    {
        "test_id": 1695,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "PkpRnNnB/bqBkbb1k/K2n4/N1BbkP2/QB2kNQk/q1nRNnBB/pbp1RbN1/P1PR1Np1"
    },
    {
        "test_id": 1696,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "N3rrB1/B4NR1/q1pNPb2/k1p1PQQK/nNb1bbr1/n2NP1K1/rb1bRn2/rp1B3p"
    },
    {
        "test_id": 1697,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "K1Rnrk11/n7/NKb1r1Qq/r1Q2b2/bKBrNBr1/BnpKKr1B/NB1RnNN1/r1RKQ1N1"
    },
    {
        "test_id": 1698,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "p1rKBRkK/P2qqr1p/nbKnb12/RnrrBkbK/NPn1BN2/kb2B1BB/QQ1ppn2/r1Pn1nB1"
    },
    {
        "test_id": 1699,
        "input_type": "string",
        "input_name": "notation",
        "input_value": "k3KRBk/PNkqN12/pqNB1Qp1/N1nbrk1q/n2nK1Bp/BrRBN1Pk/K1pBKRRR/bP2R21"
    },

    // Cells Joining
    {
        "test_id": 1700,
        "input_type": "arrayOfStrings",
        "input_name": "table",
        "input_value": '["+----+--+-----+----+","|abcd|56|!@#$%|qwer|","|1234|78|^&=()|tyui|","+----+--+-----+----+","|zxcv|90|77777|stop|","+----+--+-----+----+","|asdf|~~|ghjkl|100$|","+----+--+-----+----+"]'
    },
    {
        "test_id": 1701,
        "input_type": "arrayOfStrings",
        "input_name": "table",
        "input_value": '["+-----+-----+--------+-----------+--------+","|fwdaw|dddd|42|prettylong|table|","+-----+-----+--------+-----------+--------+","|is|long|ffffffff|ff|border|","+-----+-----+--------+-----------+--------+","||||||","||||||","+-----+-----+--------+-----------+--------+","|empty|cells|are|best|thereis|","+-----+-----+--------+-----------+--------+"]'
    },
    {
        "test_id": 1702,
        "input_type": "arrayOfStrings",
        "input_name": "table",
        "input_value": '["+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|1|1||||3||4|||5|ggg|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|||11|23|44||55555||abc|defg|||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||#$%#|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|*|*|42|||||0|=)||||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+"]'
    },
    {
        "test_id": 1703,
        "input_type": "arrayOfStrings",
        "input_name": "table",
        "input_value": '["+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|1|1||||3||4|||5|ggg|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|||11|23|44||55555||abc|defg|||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||#$%#|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|*|*|42|||||0|=)||||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||#$%#|","|||||||*|||dd||#$%#|","||||||||||||#$%#|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|1|1||||3||4|||5|ggg|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|||11|23|44||55555||abc|defg|||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||#$%#|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","||||||||||||!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|*|*|42|||||0|=)||||","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+"]'
    },
    {
        "test_id": 1704,
        "input_type": "arrayOfStrings",
        "input_name": "table",
        "input_value": '["+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+","|1|1||||3||4|||5|ggg|","+-+-+--+--+--+-+-----+-+---+----+-+-------------------------------------------+"]'
    },
    {
        "test_id": 1700,
        "input_type": "matrix",
        "input_name": "coords",
        "input_value": "[[2, 0], [1, 1]]"
    },
    {
        "test_id": 1701,
        "input_type": "matrix",
        "input_name": "coords",
        "input_value": "[[3, 0], [3, 4]]"
    },
    {
        "test_id": 1702,
        "input_type": "matrix",
        "input_name": "coords",
        "input_value": "[[4, 0], [0, 11]]"
    },
    {
        "test_id": 1703,
        "input_type": "matrix",
        "input_name": "coords",
        "input_value": "[[5, 6], [4, 9]]"
    },
    {
        "test_id": 1704,
        "input_type": "matrix",
        "input_name": "coords",
        "input_value": "[[0, 1], [0, 10]]"
    },

    // First Operation Character
    {
        "test_id": 1705,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "(2 + 2) * 2"
    },
    {
        "test_id": 1706,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "2 + 2 * 2"
    },
    {
        "test_id": 1707,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "((2 + 2) * 2) * 3 + (2 + (2 * 2))"
    },
    {
        "test_id": 1708,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "2+((22+2222)+(2222+222))"
    },
    {
        "test_id": 1709,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "2 + 3 * 45 * 56 + 198 + 10938 * 102938 + 5"
    },
    {
        "test_id": 1710,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "1022224552222222 * 3"
    },
    {
        "test_id": 1711,
        "input_type": "string",
        "input_name": "expr",
        "input_value": "4 * 3 + 2"
    },

    // Count Elements
    {
        "test_id": 1712,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "[[0, 20], [33, 99]]"
    },
    {
        "test_id": 1713,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '[ \"one\", 2, \"three\" ]'
    },
    {
        "test_id": 1714,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "true"
    },
    {
        "test_id": 1715,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "[[1, 2, [3]], 4]"
    },
    {
        "test_id": 1716,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '[\"oh, no! kind, of, tricky\", \"test, case\"]'
    },
    {
        "test_id": 1717,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '\"try this!, [1, 2, 3, 32], false\"'
    },
    {
        "test_id": 1718,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '\"a,,,,,,,,,,,,,,asdf\"'
    },
    {
        "test_id": 1719,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "1023456789"
    },
    {
        "test_id": 1720,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '[\"ZZZ]zero\"]'
    },
    {
        "test_id": 1721,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '[true,\"false\", true, [2], false, false]'
    },
    {
        "test_id": 1722,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "[]"
    },
    {
        "test_id": 1723,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": '[\"[   -45,   95]   \", [ 87,  -655]]'
    },
    {
        "test_id": 1724,
        "input_type": "string",
        "input_name": "inputString",
        "input_value": "111"
    },

    // Tree Bottom
    {
        "test_id": 1725,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))"
    },
    {
        "test_id": 1726,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(1 () ())"
    },
    {
        "test_id": 1727,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(1000 () ())"
    },
    {
        "test_id": 1728,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(413 (683 () ()) (355 (913 (985 () ()) ()) ()))"
    },
    {
        "test_id": 1729,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(65 (88 (45 (4 () ()) ()) ()) (1000000000 () ()))"
    },
    {
        "test_id": 1730,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(1 (2 (4 (8 () ()) (9 () ())) (5 (10 () ()) (11 () ()))) (3 (6 (12 () ()) (13 () ())) (7 (14 () ()) (15 () ()))))"
    },
    {
        "test_id": 1731,
        "input_type": "string",
        "input_name": "tree",
        "input_value": "(1 () (2 () (3 () (5 () (8 () (13 () (21 () (34 () ()))))))))"
    },

    // Befunge-93
    {
        "test_id": 1732,
        "input_type": "arrayOfStrings",
        "input_name": "program",
        "input_value": '["1+:::*.9`#@_"]'
    },
    {
        "test_id": 1733,
        "input_type": "arrayOfStrings",
        "input_name": "program",
        "input_value": '["@"]'
    },
    {
        "test_id": 1734,
        "input_type": "arrayOfStrings",
        "input_name": "program",
        "input_value": '["v>v>", "v^v^", "v^v^", "v^v^", ">^>^"]'
    },
    {
        "test_id": 1735,
        "input_type": "arrayOfStrings",
        "input_name": "program",
        "input_value": '["94/.@"]'
    },

    // Pipes Game
    {
        "test_id": 1736,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["a224C22300000","0001643722B00","0b27275100000","00c7256500000","0006A45000000"]'
    },
    {
        "test_id": 1737,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["a000","000A"]'
    },
    {
        "test_id": 1738,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["a727272777A"]'
    },
    {
        "test_id": 1739,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["a","7","1","7","7","1","1","A"]'
    },
    {
        "test_id": 1740,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["A0000b0000","0000000000","0000000000","0000a00000","0000000000","0c00000000","01000000B0","0C00000000"]'
    },
    {
        "test_id": 1741,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["0000000000","0000000000","0000000000","0000000000","0000000000","0000000000","0000000000","0000000000"]'
    },
    {
        "test_id": 1742,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["0020400040","1203300300","7340000000","2040100000","7000500700","0000200000","0002303000","0000000600"]'
    },
    {
        "test_id": 1743,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["0002270003777z24","3a40052001000101","1064000001000101","1006774001032501","1000001001010001","1010001001064035","6227206A0622Z250"]'
    },
    {
        "test_id": 1744,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["00p2400003777z24","1a406P0001000101","1064000001000101","1006774001032501","1000001001010001","1000001001064035","6227276A0622Z250"]'
    },
    {
        "test_id": 1745,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["3277222400000000","1000032A40000000","1000010110000000","1Q2227277q000000","1000010110000000","1000062a50000000","6222222500000000"]'
    },
    {
        "test_id": 1746,
        "input_type": "arrayOfStrings",
        "input_name": "state",
        "input_value": '["3222222400000000","1000032A40000000","1000010110000000","72q227277Q000000","1000010110000000","1000062a50000000","6222222500000000"]'
    },

    // Game 2048
    {
        "test_id": 1747,
        "input_type": "string",
        "input_name": "path",
        "input_value": "RR"
    },
    {
        "test_id": 1747,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 0], [0, 0, 2, 2], [0, 0, 2, 4], [2, 2, 4, 8]]"
    },
    {
        "test_id": 1748,
        "input_type": "string",
        "input_name": "path",
        "input_value": "D"
    },
    {
        "test_id": 1748,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 2], [0, 0, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1749,
        "input_type": "string",
        "input_name": "path",
        "input_value": "L"
    },
    {
        "test_id": 1749,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 2, 2, 0], [0, 4, 2, 2], [2, 4, 4, 8], [2, 4, 0, 0]]"
    },
    {
        "test_id": 1750,
        "input_type": "string",
        "input_name": "path",
        "input_value": "DD"
    },
    {
        "test_id": 1750,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 2], [0, 0, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1751,
        "input_type": "string",
        "input_name": "path",
        "input_value": "DRRD"
    },
    {
        "test_id": 1751,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 2], [0, 0, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1752,
        "input_type": "string",
        "input_name": "path",
        "input_value": "URLD"
    },
    {
        "test_id": 1752,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[2, 4, 8, 16], [256, 128, 64, 32], [512, 1024, 2048, 4096], [65536, 32768, 16384, 8192]]"
    },
    {
        "test_id": 1753,
        "input_type": "string",
        "input_name": "path",
        "input_value": "LLU"
    },
    {
        "test_id": 1753,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 2, 0, 2], [0, 4, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1754,
        "input_type": "string",
        "input_name": "path",
        "input_value": "LLUR"
    },
    {
        "test_id": 1754,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 2, 0, 2], [0, 4, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1755,
        "input_type": "string",
        "input_name": "path",
        "input_value": "DRRL"
    },
    {
        "test_id": 1755,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 2], [0, 0, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },
    {
        "test_id": 1756,
        "input_type": "string",
        "input_name": "path",
        "input_value": "DRRLLD"
    },
    {
        "test_id": 1756,
        "input_type": "matrix",
        "input_name": "grid",
        "input_value": "[[0, 0, 0, 2], [0, 0, 4, 2], [0, 0, 4, 2], [0, 0, 4, 2]]"
    },

    // Snake Game
    {
        "test_id": 1757,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "FFFFFRFFRRLLF"
    },
    {
        "test_id": 1758,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "RFRF"
    },
    {
        "test_id": 1759,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "FRFFRFFRFLFF"
    },
    {
        "test_id": 1760,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "RFRFFLFLFFRFRFFLFLFFRFRFFLFF"
    },
    {
        "test_id": 1761,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "FFFFFRFFRRLLF"
    },
    {
        "test_id": 1762,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "LFLFRFLFRFFF"
    },
    {
        "test_id": 1763,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "LFLFLFFFF"
    },
    {
        "test_id": 1764,
        "input_type": "string",
        "input_name": "commands",
        "input_value": "LFLFFFLFFFFFFLFFFFFFLFFFFFFFFLFFFFFF"
    },
    {
        "test_id": 1757,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".",".","."],[".",".","<","*"],[".",".",".","*"]]'
    },
    {
        "test_id": 1758,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".","^",".","."],[".",".","*","*","."],[".",".",".","*","*"]]'
    },
    {
        "test_id": 1759,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".","*",">","."],[".","*","*",".","."],[".",".",".",".","."]]'
    },
    {
        "test_id": 1760,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[["*","*",">"],["*",".","."],[".",".","."],[".",".","."],[".",".","."],[".",".","."],[".",".","."]]'
    },
    {
        "test_id": 1761,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".",".",".",".",".",".",".","."],[".",".","<","*","*","*","*",".","."],[".",".",".",".",".",".","*",".","."],[".",".",".",".","*","*","*",".","."],[".",".",".",".","*",".",".",".","."],[".",".",".",".","*",".",".",".","."],[".",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1762,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".",".",".",".",".",".",".","."],[".",".","<","*","*","*","*",".","."],[".",".",".",".",".",".","*",".","."],[".",".",".",".","*","*","*",".","."],[".",".",".",".","*",".",".",".","."],[".",".",".",".","*",".",".",".","."],[".",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1763,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".",".",".",".",".",".",".","."],[".",".","<","*","*","*",".",".","."],[".",".",".",".",".","*",".",".","."],[".",".",".",".","*","*",".",".","."],[".",".",".",".","*",".","*","*","."],[".",".",".",".","*","*","*",".","."],[".",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1764,
        "input_type": "matrix",
        "input_name": "gameBoard",
        "input_value": '[[".",".",".",".",".",".",".",".","."],[".",".","*","*","*","*",".",".","."],[".",".",".",".",".","*",".",".","."],[".",".",".",".",".","v",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]'
    },

    // Tetris Game
    {
        "test_id": 1765,
        "input_type": "matrix",
        "input_name": "pieces",
        "input_value": '[[[".","#","."],["#","#","#"]], [["#",".","."],["#","#","#"]], [["#","#","."],[".","#","#"]], [["#","#","#","#"]], [["#","#","#","#"]], [["#","#"],["#","#"]]]'
    },
    {
        "test_id": 1766,
        "input_type": "matrix",
        "input_name": "pieces",
        "input_value": '[[["#","#"],["#","#"]], [["#","#"],["#","#"]], [["#","#"],["#","#"]], [["#","#"],["#","#"]], [["#","#"],["#","#"]], [["#","#"],["#","#"]]]'
    },
    {
        "test_id": 1767,
        "input_type": "matrix",
        "input_name": "pieces",
        "input_value": '[[["#","#","#","#"]], [["#","#","#","#"]], [["#","#"],["#","#"]]]'
    },
    {
        "test_id": 1768,
        "input_type": "matrix",
        "input_name": "pieces",
        "input_value": '[[[".","#","#"],["#","#","."]], [[".","#","."],["#","#","#"]], [["#","#","."],[".","#","#"]], [[".","#","."],["#","#","#"]], [["#","#","#","#"]], [["#",".","."],["#","#","#"]], [["#","#"],["#","#"]], [["#","#","#"],[".",".","#"]], [[".","#","#"],["#","#","."]], [[".","#","."],["#","#","#"]], [["#","#","."],[".","#","#"]], [[".","#","."],["#","#","#"]], [["#","#","#","#"]], [["#",".","."],["#","#","#"]], [["#","#"],["#","#"]], [["#","#","#"],[".",".","#"]]]'
    },
    {
        "test_id": 1769,
        "input_type": "matrix",
        "input_name": "pieces",
        "input_value": '[[[".","#","."],["#","#","#"]], [[".",".","#"],["#","#","#"]], [["#","#","."],[".","#","#"]], [[".","#","."],["#","#","#"]], [[".",".","#"],["#","#","#"]], [["#","#","."],[".","#","#"]]]'
    },

    // Pyraminx Puzzle
    {
        "test_id": 1770,
        "input_type": "arrayOfStrings",
        "input_name": "faceColors",
        "input_value": '["R","G","Y","O"]'
    },
    {
        "test_id": 1770,
        "input_type": "arrayOfStrings",
        "input_name": "moves",
        "input_value": `["B","b'","u'","R"]`
    },
    {
        "test_id": 1771,
        "input_type": "arrayOfStrings",
        "input_name": "faceColors",
        "input_value": '["R","G","Y","O"]'
    },
    {
        "test_id": 1771,
        "input_type": "arrayOfStrings",
        "input_name": "moves",
        "input_value": `["l","l'"]`
    },
    {
        "test_id": 1772,
        "input_type": "arrayOfStrings",
        "input_name": "faceColors",
        "input_value": '["R","G","Y","O"]'
    },
    {
        "test_id": 1772,
        "input_type": "arrayOfStrings",
        "input_name": "moves",
        "input_value": `["l","l'","u","R","U'","L","R'","u'","l'","L'","r"]`
    },
    {
        "test_id": 1773,
        "input_type": "arrayOfStrings",
        "input_name": "faceColors",
        "input_value": '["R","G","Y","O"]'
    },
    {
        "test_id": 1773,
        "input_type": "arrayOfStrings",
        "input_name": "moves",
        "input_value": '["r"]'
    },
    {
        "test_id": 1774,
        "input_type": "arrayOfStrings",
        "input_name": "faceColors",
        "input_value": '["A","B","C","D"]'
    },
    {
        "test_id": 1774,
        "input_type": "arrayOfStrings",
        "input_name": "moves",
        "input_value": `["l","l'","r'","r","u","U","u'","R'","L","R","L'","B'","U'","b","B","b'"]`
    },

    // Lines Game
    {
        "test_id": 1775,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[[".","G",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","V","."],[".","O",".",".","O",".",".",".","."],[".",".",".",".","O",".",".",".","."],[".",".",".",".",".",".",".",".","O"],[".",".",".",".","O",".",".",".","."],[".",".",".",".",".",".",".",".","."],["R",".",".",".",".",".",".","B","R"],[".",".","C",".",".",".",".","Y","O"]]'
    },
    {
        "test_id": 1775,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[4,8],[2,1],[4,4],[6,4],[4,8],[1,2],[1,4],[4,8],[6,4]]'
    },
    {
        "test_id": 1775,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[[1,2],[8,5],[8,6],[1,1],[1,8],[7,4]]'
    },
    {
        "test_id": 1775,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '["R","V","C","G","Y","O"]'
    },
    {
        "test_id": 1776,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".","O",".","O",".","O",".","."],[".",".",".","O","O","O",".",".","."],[".",".",".",".",".",".",".",".","O"],[".",".",".","O","O","O",".",".","."],[".",".","O",".","O",".","O",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1776,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[4,8],[4,4]]'
    },
    {
        "test_id": 1776,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[]'
    },
    {
        "test_id": 1776,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '[]'
    },
    {
        "test_id": 1777,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[["O",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".","O","."],[".",".",".",".",".",".","O",".","."],[".",".",".",".",".","O",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".","O",".",".",".",".","."],[".",".","O",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1777,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[0,0],[4,4]]'
    },
    {
        "test_id": 1777,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[]'
    },
    {
        "test_id": 1777,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '[]'
    },
    {
        "test_id": 1778,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[["V",".",".",".","O",".",".",".","O"],["V","O",".",".","O",".",".","O","V"],["V",".","O",".","O",".","O",".","."],["V",".",".","O","O","O",".",".","."],[".",".",".",".",".",".",".",".","O"],["V",".",".","O","O","O",".",".","."],["V",".","O",".","O",".","O",".","."],["V","O",".",".","O",".",".","O","."],["V",".",".",".","O",".",".",".","O"]]'
    },
    {
        "test_id": 1778,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[4,8],[4,4],[1,8],[4,0]]'
    },
    {
        "test_id": 1778,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[]'
    },
    {
        "test_id": 1778,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '[]'
    },
    {
        "test_id": 1779,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[["V",".",".",".",".",".",".",".","."],["V",".",".",".",".",".",".",".","V"],["V",".","O",".","O",".","O",".","."],["V",".",".","O","O","O",".",".","."],[".","V","V","V",".",".",".",".","O"],["V",".",".","O","O","O",".",".","."],["V",".","O",".","O",".","O",".","."],["V",".",".",".",".",".",".",".","."],["V",".",".",".",".",".",".",".","."]]'
    },
    {
        "test_id": 1779,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[4,8],[4,4],[1,8],[4,0]]'
    },
    {
        "test_id": 1779,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[]'
    },
    {
        "test_id": 1779,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '[]'
    },
    {
        "test_id": 1780,
        "input_type": "matrix",
        "input_name": "field",
        "input_value": '[["V",".",".",".","O",".",".",".","O"],["V","O",".",".","O",".",".","O","V"],["V",".","O",".","O",".","O",".","."],["V",".",".","O","O","O",".",".","."],[".",".",".",".",".",".",".",".","C"],["V",".",".","O","O","O",".",".","."],["V",".","O",".","O",".","O",".","."],["V","O",".",".","O",".",".","O","."],["V",".",".",".","O",".",".",".","O"]]'
    },
    {
        "test_id": 1780,
        "input_type": "matrix",
        "input_name": "clicks",
        "input_value": '[[4,8],[4,4],[1,8],[4,0]]'
    },
    {
        "test_id": 1780,
        "input_type": "matrix",
        "input_name": "newBallsCoordinates",
        "input_value": '[[0,1],[0,2],[0,3]]'
    },
    {
        "test_id": 1780,
        "input_type": "arrayOfStrings",
        "input_name": "newBalls",
        "input_value": '["R","R","R"]'
    },

    // Fractal
    {
        "test_id": 1781,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1782,
        "input_type": "number",
        "input_name": "n",
        "input_value": "2"
    },


    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////
    ////////// Graphs /////////////////////////////////////////////////// Graphs /////////////////////////////////////////


    // New Road System
    {
        "test_id": 1783,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false, false],  [false, false, true, false],  [true, false, false, true],  [false, false, true, false]]"
    },
    {
        "test_id": 1784,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false, false, false, false, false],  [true, false, false, false, false, false, false],  [false, false, false, true, false, false, false],  [false, false, true, false, false, false, false],  [false, false, false, false, false, false, true],  [false, false, false, false, true, false, false],  [false, false, false, false, false, true, false]]"
    },
    {
        "test_id": 1785,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false],  [false, false, false],  [true, false, false]]"
    },
    {
        "test_id": 1786,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, false, false, false],  [false, false, false, false],  [false, false, false, false],  [false, false, false, false]]"
    },
    {
        "test_id": 1787,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false]]"
    },
    {
        "test_id": 1788,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, true, true, false],  [true, false, true, true, true],  [true, true, false, true, false],  [true, true, true, false, true],  [true, true, true, true, false]]"
    },
    {
        "test_id": 1789,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, true, true, true],  [true, false, true, true, true],  [true, true, false, true, true],  [true, true, true, false, true],  [true, true, true, true, false]]"
    },
    {
        "test_id": 1790,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false, true, true],  [false, false, false, false, true],  [true, false, false, true, true],  [true, true, true, false, false],  [true, true, true, false, false]]"
    },
    {
        "test_id": 1791,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, true, false, true],  [true, false, false, true, false],  [false, true, false, true, false],  [true, true, true, false, true],  [true, true, false, false, false]]"
    },
    {
        "test_id": 1792,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false, true, true],  [true, false, true, true, true],  [false, false, false, false, true],  [false, false, true, false, true],  [true, false, true, true, false]]"
    },
    {
        "test_id": 1793,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, false, false, false, true, true, false, true, false, true],  [false, false, true, false, false, false, true, false, false, true],  [false, false, false, true, false, false, false, true, false, true],  [false, true, false, false, true, false, false, true, false, false],  [false, true, false, true, false, false, false, true, false, false],  [true, true, true, true, true, false, true, false, true, true],  [false, false, true, true, true, true, false, false, false, true],  [true, true, true, false, false, false, false, false, false, false],  [false, false, false, true, false, true, true, true, false, false],  [false, true, true, true, true, false, true, false, true, false]]"
    },

    // Roads Building
    {
        "test_id": 1794,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "4"
    },
    {
        "test_id": 1794,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[0, 1], [1, 2], [2, 0]]"
    },
    {
        "test_id": 1795,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "1"
    },
    {
        "test_id": 1795,
        "input_type": "arrayOfIntegers",
        "input_name": "roads",
        "input_value": "[]"
    },
    {
        "test_id": 1796,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "9"
    },
    {
        "test_id": 1796,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[5, 8], [6, 0], [0, 5], [4, 1], [0, 1], [7, 0], [6, 8], [7, 3], [2, 6], [0, 2], [0, 3], [8, 7], [5, 4], [8, 4], [8, 2], [7, 1], [4, 6], [5, 6], [4, 2], [4, 7], [2, 7], [3, 6], [8, 0], [1, 6], [3, 2], [3, 4], [4, 0], [6, 7], [5, 7]]"
    },
    {
        "test_id": 1797,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "7"
    },
    {
        "test_id": 1797,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[3, 1], [1, 6], [2, 5], [4, 2], [2, 0], [0, 1], [3, 5], [5, 1], [5, 4], [6, 3], [1, 2], [2, 6], [6, 0], [6, 5], [4, 3], [2, 3], [4, 6], [5, 0]]"
    },
    {
        "test_id": 1798,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "6"
    },
    {
        "test_id": 1798,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[1, 2], [0, 2], [1, 4], [4, 2], [3, 5], [1, 0], [5, 0], [3, 1], [0, 4], [5, 1], [3, 2], [3, 0], [2, 5]]"
    },
    {
        "test_id": 1799,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "11"
    },
    {
        "test_id": 1799,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[0, 2], [0, 9], [3, 8], [8, 10], [7, 8], [7, 6], [2, 9], [8, 4], [7, 0], [6, 10], [5, 6], [7, 10], [9, 8], [2, 7], [3, 2], [6, 8], [5, 4], [1, 9], [10, 5], [9, 5], [8, 5], [1, 8], [5, 3], [7, 1], [4, 2], [8, 0], [10, 3], [4, 6], [9, 7], [3, 1], [9, 3], [1, 10], [8, 2], [7, 4], [0, 6], [0, 5], [10, 9], [10, 0], [4, 9], [5, 7], [0, 1], [6, 1]]"
    },
    {
        "test_id": 1800,
        "input_type": "number",
        "input_name": "cities",
        "input_value": "7"
    },
    {
        "test_id": 1800,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[5, 3], [4, 0], [0, 1], [6, 5], [3, 4], [0, 3], [2, 0], [2, 1], [2, 6], [5, 1], [3, 2], [0, 5], [1, 3], [1, 4], [6, 3]]"
    },

    // Efficient Road Network
    {
        "test_id": 1801,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 1801,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[3, 0], [0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]"
    },
    {
        "test_id": 1802,
        "input_type": "number",
        "input_name": "n",
        "input_value": "6"
    },
    {
        "test_id": 1802,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]"
    },
    {
        "test_id": 1803,
        "input_type": "number",
        "input_name": "n",
        "input_value": "1"
    },
    {
        "test_id": 1803,
        "input_type": "arrayOfIntegers",
        "input_name": "roads",
        "input_value": "[]"
    },
    {
        "test_id": 1804,
        "input_type": "number",
        "input_name": "n",
        "input_value": "5"
    },
    {
        "test_id": 1804,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[0, 1], [0, 2], [3, 4]]"
    },
    {
        "test_id": 1805,
        "input_type": "number",
        "input_name": "n",
        "input_value": "12"
    },
    {
        "test_id": 1805,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[8, 9], [0, 11], [5, 3], [11, 6], [5, 7], [7, 6], [6, 4], [10, 8], [11, 2], [1, 9], [7, 3], [7, 8], [11, 8], [1, 11], [4, 9], [6, 2], [4, 3], [3, 2], [0, 7], [10, 4], [10, 0]]"
    },
    {
        "test_id": 1806,
        "input_type": "number",
        "input_name": "n",
        "input_value": "4"
    },
    {
        "test_id": 1806,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[3, 0], [3, 2], [2, 1], [0, 1], [2, 0]]"
    },
    {
        "test_id": 1807,
        "input_type": "number",
        "input_name": "n",
        "input_value": "7"
    },
    {
        "test_id": 1807,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[1, 0], [0, 2], [2, 4], [3, 0], [5, 6], [5, 4], [5, 0], [0, 4], [5, 2]]"
    },
    {
        "test_id": 1808,
        "input_type": "number",
        "input_name": "n",
        "input_value": "13"
    },
    {
        "test_id": 1808,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[11, 0], [6, 7], [2, 11], [2, 0], [10, 2], [7, 4], [5, 7], [8, 1], [8, 10], [12, 3], [2, 12], [5, 6], [8, 7], [0, 3], [3, 1], [0, 4], [0, 10], [6, 1], [7, 11], [9, 10], [10, 6], [3, 11], [8, 3], [12, 7], [12, 5], [4, 11], [3, 10], [1, 4], [5, 1], [3, 9], [8, 6], [1, 12], [8, 2], [0, 6], [5, 8], [8, 12], [12, 4], [1, 7], [5, 3], [7, 3], [11, 9], [10, 1], [4, 2], [1, 0]]"
    },
    {
        "test_id": 1809,
        "input_type": "number",
        "input_name": "n",
        "input_value": "13"
    },
    {
        "test_id": 1809,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[1, 8], [10, 4], [1, 3], [6, 4], [10, 11], [8, 9], [4, 12], [4, 5], [12, 0], [3, 10], [1, 6], [0, 9], [3, 6], [4, 1], [8, 4], [3, 8], [2, 3], [9, 12], [3, 0], [11, 1], [7, 8], [5, 10], [8, 12], [5, 2], [8, 11], [11, 12], [10, 1], [12, 2], [7, 10], [9, 6], [2, 8], [12, 6], [11, 9], [11, 5], [7, 0], [2, 4], [5, 0], [7, 2], [2, 9], [7, 11], [2, 0], [2, 1], [7, 4], [10, 0], [4, 11], [10, 9], [6, 10], [5, 12]]"
    },
    {
        "test_id": 1810,
        "input_type": "number",
        "input_name": "n",
        "input_value": "14"
    },
    {
        "test_id": 1810,
        "input_type": "matrix",
        "input_name": "roads",
        "input_value": "[[11, 7], [13, 5], [8, 10], [4, 5], [0, 9], [2, 5], [11, 9], [11, 2], [12, 11], [5, 7], [8, 0], [4, 11], [3, 4], [3, 12], [8, 6], [6, 12], [0, 5], [12, 4], [8, 7], [10, 5], [1, 11], [12, 10], [1, 5], [7, 3], [9, 4], [12, 1], [10, 2], [0, 6], [10, 6], [3, 1], [2, 3], [3, 0], [13, 4], [0, 4], [1, 8], [7, 6], [3, 13], [2, 4], [2, 1], [3, 5], [1, 13], [10, 3], [6, 9], [10, 11]]"
    },

    // Financial Crisis
    {
        "test_id": 1811,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, true, false],  [true, false, true, false],  [true, true, false, true],  [false, false, true, false]]"
    },
    {
        "test_id": 1812,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false]]"
    },
    {
        "test_id": 1813,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false,true], [true,false]]"
    },
    {
        "test_id": 1814,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, true, false],  [true, false, false],  [false, false, false]]"
    },
    {
        "test_id": 1815,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, false, true],  [false, false, false],  [true, false, false]]"
    },
    {
        "test_id": 1816,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, false, true, true],  [false, false, false, false],  [true, false, false, true],  [true, false, true, false]]"
    },
    {
        "test_id": 1817,
        "input_type": "matrix",
        "input_name": "roadRegister",
        "input_value": "[[false, false, true, true, true],  [false, false, false, true, false],  [true, false, false, true, false],  [true, true, true, false, false],  [true, false, false, false, false]]"
    },

    // 


]


exports.seed = async function (knex) {
    const batchSize = 100; // Adjust the batch size if necessary
    await knex.batchInsert('test_inputs', test_inputs, batchSize)
}