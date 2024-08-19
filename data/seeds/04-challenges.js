const challenges = [
    {
        topic_id: 1,
        order_index: 1,
        challenge_name: 'add',
        description: 'Write a function that returns the sum of two numbers. Example: For param1 = 1 and param2 = 2, the output should be solution(param1, param2) = 3. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] integer param1 Guaranteed constraints: -1000 ≤ param1 ≤ 1000. [input] integer param2 Guaranteed constraints: -1000 ≤ param2 ≤ 1000. [output] integer The sum of the two inputs.'
    },
    {
        topic_id: 1,
        order_index: 2,
        challenge_name: 'centuryFromYear',
        description: 'Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc. Example: For year = 1905, the output should be solution(year) = 20; For year = 1700, the output should be solution(year) = 17. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] integer year A positive integer, designating the year. Guaranteed constraints: 1 ≤ year ≤ 2005. [output] integer The number of the century the year is in.'
    },
    {
        topic_id: 1,
        order_index: 3,
        challenge_name: 'checkPalindrome',
        description: 'Given the string, check if it is a palindrome. Example: For inputString = "aabaa", the output should be solution(inputString) = true; For inputString = "abac", the output should be solution(inputString) = false; For inputString = "a", the output should be solution(inputString) = true. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] string inputString A non-empty string consisting of lowercase characters. Guaranteed constraints: 1 ≤ inputString.length ≤ 105. [output] boolean true if inputString is a palindrome, false otherwise.'
    },
    {
        topic_id: 2,
        order_index: 4,
        challenge_name: 'adjacentElementsProduct',
        description: 'Given an array of integers, find the pair of adjacent elements that has the largest product and return that product. Example: For inputArray = [3, 6, -2, -5, 7, 3], the output should be solution(inputArray) = 21. 7 and 3 produce the largest product. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer inputArray An array of integers containing at least two elements. Guaranteed constraints: 2 ≤ inputArray.length ≤ 10, -1000 ≤ inputArray[i] ≤ 1000. [output] integer The largest product of adjacent elements.'
    },
    {
        topic_id: 2,
        order_index: 5,
        challenge_name: 'shapeArea',
        description: 'Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n. A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n-1-interesting polygon and appending 1-interesting polygons to its rim, side by side. Example: For n = 2, the output should be solution(n) = 5; For n = 3, the output should be solution(n) = 13. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] integer n Guaranteed constraints: 1 ≤ n < 10^4. [output] integer The area of the n-interesting polygon.'
    },
    {
        topic_id: 2,
        order_index: 6,
        challenge_name: 'Make Array Consecutive 2',
        description: 'Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed. Example: For statues = [6, 2, 3, 8], the output should be solution(statues) = 3. Ratiorg needs statues of sizes 4, 5, and 7. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer statues An array of distinct non-negative integers. Guaranteed constraints: 1 ≤ statues.length ≤ 10, 0 ≤ statues[i] ≤ 20. [output] integer The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.'
    },
    {
        topic_id: 2,
        order_index: 7,
        challenge_name: 'almostIncreasingSequence',
        description: 'Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array. Note: sequence a0, a1, ..., an is considered to be strictly increasing if a0 < a1 < ... < an. A sequence containing only one element is also considered to be strictly increasing. Example: For sequence = [1, 3, 2, 1], the output should be solution(sequence) = false. There is no one element in this array that can be removed in order to get a strictly increasing sequence. For sequence = [1, 3, 2], the output should be solution(sequence) = true. You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternatively, you can remove 2 to get the strictly increasing sequence [1, 3]. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer sequence Guaranteed constraints: 2 ≤ sequence.length ≤ 10^5, -10^5 ≤ sequence[i] ≤ 10^5. [output] boolean Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.'
    },
    {
        topic_id: 2,
        order_index: 8,
        challenge_name: 'matrixElementsSum',
        description: "After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumor that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms or any of the rooms below any of the free rooms. Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (i.e., add up all the values that don't appear below a 0). Example: For matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]] the output should be solution(matrix) = 9. There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9. For matrix = [[1, 1, 1, 0], [0, 5, 0, 1], [2, 1, 3, 10]] the output should be solution(matrix) = 9. Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.array.integer matrix A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted. Guaranteed constraints: 1 ≤ matrix.length ≤ 5, 1 ≤ matrix[i].length ≤ 5, 0 ≤ matrix[i][j] ≤ 10. [output] integer The total price of all the rooms that are suitable for the CodeBots to live in."
    },
    {
        topic_id: 3,
        order_index: 9,
        challenge_name: 'All Longest Strings',
        description: 'Given an array of strings, return another array containing all of its longest strings. Example: For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be solution(inputArray) = ["aba", "vcd", "aba"]. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.string inputArray A non-empty array. Guaranteed constraints: 1 ≤ inputArray.length ≤ 10, 1 ≤ inputArray[i].length ≤ 10. [output] array.string Array of the longest strings, stored in the same order as in the inputArray.'
    },
    {
        topic_id: 3,
        order_index: 10,
        challenge_name: 'commonCharacterCount',
        description: 'Given two strings, find the number of common characters between them. Example: For s1 = "aabcc" and s2 = "adcaa", the output should be solution(s1, s2) = 3. Strings have 3 common characters - 2 "a"s and 1 "c". Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] string s1 A string consisting of lowercase English letters. Guaranteed constraints: 1 ≤ s1.length < 15. [input] string s2 A string consisting of lowercase English letters. Guaranteed constraints: 1 ≤ s2.length < 15.'
    },
    {
        topic_id: 3,
        order_index: 11,
        challenge_name: 'isLucky',
        description: 'Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half. Example: For n = 1230, the output should be solution(n) = true; For n = 239017, the output should be solution(n) = false. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] integer n A ticket number represented as a positive integer with an even number of digits. Guaranteed constraints: 10 ≤ n < 10^6. [output] boolean true if n is a lucky ticket number, false otherwise.'
    },
    {
        topic_id: 3,
        order_index: 12,
        challenge_name: 'Sort by Height',
        description: 'Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in non-descending order without moving the trees. People can be very tall! Example: For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer a If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position. Guaranteed constraints: 1 ≤ a.length ≤ 1000, -1 ≤ a[i] ≤ 1000. [output] array.integer Sorted array a with all the trees untouched.'
    },
    {
        topic_id: 3,
        order_index: 13,
        challenge_name: 'reverseInParentheses',
        description: 'Write a function that reverses characters in (possibly nested) parentheses in the input string. Input strings will always be well-formed with matching ()s. Example: For inputString = "(bar)", the output should be solution(inputString) = "rab"; For inputString = "foo(bar)baz", the output should be solution(inputString) = "foorabbaz"; For inputString = "foo(bar)baz(blim)", the output should be solution(inputString) = "foorabbazmilb"; For inputString = "foo(bar(baz))blim", the output should be solution(inputString) = "foobazrabblim". Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim". Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] string inputString A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all parentheses in inputString form a regular bracket sequence. Guaranteed constraints: 0 ≤ inputString.length ≤ 50. [output] string Return inputString, with all the characters that were in parentheses reversed.' 
    },
    {
        topic_id: 4,
        order_index: 14,
        challenge_name: 'alternatingSums',
        description: 'Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on. You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete. Example: For a = [50, 60, 60, 45, 70], the output should be solution(a) = [180, 105]. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer a Guaranteed constraints: 1 ≤ a.length ≤ 10^5, 45 ≤ a[i] ≤ 100. [output] array.integer'
    },
    {
        topic_id: 4,
        order_index: 15,
        challenge_name: 'Add Border',
        description: 'Given a rectangular matrix of characters, add a border of asterisks (*) to it. Example: For picture = ["abc", "ded"], the output should be solution(picture) = ["", "abc", "ded", ""]. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.string picture A non-empty array of non-empty equal-length strings. Guaranteed constraints: 1 ≤ picture.length ≤ 100, 1 ≤ picture[i].length ≤ 100. [output] array.string The same matrix of characters, framed with a border of asterisks of width 1.'
    },
    {
        topic_id: 4,
        order_index: 16,
        challenge_name: 'Are Similar?',
        description: "Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays. Given two arrays a and b, check whether they are similar. Example: For a = [1, 2, 3] and b = [1, 2, 3], the output should be solution(a, b) = true. The arrays are equal, no need to swap any elements. For a = [1, 2, 3] and b = [2, 1, 3], the output should be solution(a, b) = true. We can obtain b from a by swapping 2 and 1 in b. For a = [1, 2, 2] and b = [2, 1, 1], the output should be solution(a, b) = false. Any swap of any two elements either in a or in b won't make a and b equal. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer a Array of integers. Guaranteed constraints: 3 ≤ a.length ≤ 10^5, 1 ≤ a[i] ≤ 1000. [input] array.integer b Array of integers of the same length as a. Guaranteed constraints: b.length = a.length, 1 ≤ b[i] ≤ 1000. [output] boolean true if a and b are similar, false otherwise."
    },
    {
        topic_id: 4,
        order_index: 17,
        challenge_name: 'arrayChange',
        description: "You are given an array of integers. On each move you are allowed to increase exactly one of its elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input. Example: For inputArray = [1, 1, 1], the output should be solution(inputArray) = 3. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer inputArray Guaranteed constraints: 3 ≤ inputArray.length ≤ 10^5, -10^5 ≤ inputArray[i] ≤ 10^5. [output] integer The minimal number of moves needed to obtain a strictly increasing sequence from inputArray. It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type."
    },
    {
        topic_id: 4,
        order_index: 18,
        challenge_name: 'palindromeRearranging',
        description: 'Given a string, find out if its characters can be rearranged to form a palindrome. Example: For inputString = "aabb", the output should be solution(inputString) = true. We can rearrange "aabb" to make "abba", which is a palindrome. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] string inputString A string consisting of lowercase English letters. Guaranteed constraints: 1 ≤ inputString.length ≤ 50. [output] boolean true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.'
    },
    {
        topic_id: 5,
        order_index: 19,
        challenge_name: 'areEquallyStrong',
        description: "Call two arms equally strong if the heaviest weights they each are able to lift are equal. Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms. Given your and your friend's arms' lifting capabilities find out if you two are equally strong. Example: For yourLeft = 10, yourRight = 15, friendsLeft = 15, and friendsRight = 10, the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = true; For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 10, the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = true; For yourLeft = 15, yourRight = 10, friendsLeft = 15, and friendsRight = 9, the output should be solution(yourLeft, yourRight, friendsLeft, friendsRight) = false. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] integer yourLeft A non-negative integer representing the heaviest weight you can lift with your left arm. Guaranteed constraints: 0 ≤ yourLeft ≤ 20. [input] integer yourRight A non-negative integer representing the heaviest weight you can lift with your right arm. Guaranteed constraints: 0 ≤ yourRight ≤ 20. [input] integer friendsLeft A non-negative integer representing the heaviest weight your friend can lift with his or her left arm. Guaranteed constraints: 0 ≤ friendsLeft ≤ 20. [input] integer friendsRight A non-negative integer representing the heaviest weight your friend can lift with his or her right arm. Guaranteed constraints: 0 ≤ friendsRight ≤ 20. [output] boolean true if you and your friend are equally strong, false otherwise."
    },
    {
        topic_id: 5,
        order_index: 20,
        challenge_name: 'arrayMaximalAdjacentDifference',
        description: 'Given an array of integers, find the maximal absolute difference between any two of its adjacent elements. Example: For inputArray = [2, 4, 1, 0], the output should be solution(inputArray) = 3. Input/Output [execution time limit] 4 seconds (js) [memory limit] 1 GB [input] array.integer inputArray Guaranteed constraints: 3 ≤ inputArray.length ≤ 10, -15 ≤ inputArray[i] ≤ 15. [output] integer The maximal absolute difference.'
    },
    {
        topic_id: 5,
        order_index: 21,
        challenge_name: 'isIPv4Address',
        description: ''
    },
    {
        topic_id: 5,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },
    {
        topic_id: 1,
        order_index: ,
        challenge_name: ,
        
        description: 
    },

]

exports.seed = async function (knex) {
    await knex('challenges').insert(challenges)
}