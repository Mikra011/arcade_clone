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
        description: 'An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.Given a string, find out if it satisfies the IPv4 address naming rules.ExampleFor inputString = "172.16.254.1", the output should besolution(inputString) = true;For inputString = "172.316.254.1", the output should besolution(inputString) = false.316 is not in range [0, 255].For inputString = ".254.255.0", the output should besolution(inputString) = false.There is no first number.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringA string consisting of digits, full stops and lowercase English letters.Guaranteed constraints:1 ≤ inputString.length ≤ 30.[output] booleantrue if inputString satisfies the IPv4 address naming rules, false otherwise.'
    },
    {
        topic_id: 5,
        order_index: 22,
        challenge_name: 'avoidObstacles',
        description: 'You are given an array of integers representing coordinates of obstacles situated on a straight line.Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.Find the minimal length of the jump enough to avoid all the obstacles.ExampleFor inputArray = [5, 3, 6, 7, 9], the output should besolution(inputArray) = 4.Check out the image below for better understanding:Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer inputArrayNon-empty array of positive integers.Guaranteed constraints:2 ≤ inputArray.length ≤ 1000,1 ≤ inputArray[i] ≤ 1000.[output] integerThe desired length.'
    },
    {
        topic_id: 5,
        order_index: 23,
        challenge_name: 'Box Blur',
        description: "Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 x 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.Return the blurred image as an integer, with the fractions rounded down.ExampleForimage = [[1, 1, 1],[1, 7, 1],[1, 1, 1]]the output should be solution(image) = [[1]].To get the value of the middle pixel in the input 3 x 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.Forimage = [[7, 4, 0, 1],[5, 6, 2, 2],[6, 10, 7, 8],[1, 4, 2, 0]]the output should besolution(image) = [[5, 4],[4, 4]]There are four 3 x 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.array.integer imageAn image, stored as a rectangular matrix of non-negative integers.Guaranteed constraints:3 ≤ image.length ≤ 100,3 ≤ image[0].length ≤ 100,0 ≤ image[i][j] ≤ 255.[output] array.array.integerA blurred image represented as integers, obtained through the process in the description."
    },
    {
        topic_id: 5,
        order_index: 24,
        challenge_name: 'Minesweeper',
        description: "In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.ExampleFormatrix = [[true, false, false],[false, true, false],[false, false, false]]the output should besolution(matrix) = [[1, 2, 1],[2, 1, 1],[1, 1, 1]]Check out the image below for better understanding:Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.array.boolean matrixA non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.Guaranteed constraints:2 ≤ matrix.length ≤ 100,2 ≤ matrix[0].length ≤ 100.[output] array.array.integerRectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner."
    },
    {
        topic_id: 6,
        order_index: 25,
        challenge_name: 'Array Replace',
        description: 'Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.ExampleFor inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should besolution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer inputArrayGuaranteed constraints:0 ≤ inputArray.length ≤ 104,0 ≤ inputArray[i] ≤ 109.[input] integer elemToReplaceGuaranteed constraints:0 ≤ elemToReplace ≤ 109.[input] integer substitutionElemGuaranteed constraints:0 ≤ substitutionElem ≤ 109.[output] array.integer'
    },
    {
        topic_id: 6,
        order_index: 26,
        challenge_name: 'evenDigitsOnly',        
        description: 'Check if all digits of the given integer are even.ExampleFor n = 248622, the output should besolution(n) = true;For n = 642386, the output should besolution(n) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer nGuaranteed constraints:1 ≤ n ≤ 109.[output] booleantrue if all digits of n are even, false otherwise.'
    },
    {
        topic_id: 6,
        order_index: 27,
        challenge_name: 'variableName',      
        description: 'Correct variable names consist only of English letters, digits and underscores and they can not start with a digit.Check if the given string is a correct variable name.ExampleFor name = "var_1__Int", the output should besolution(name) = true;For name = "qq-q", the output should besolution(name) = false;For name = "2w2", the output should besolution(name) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string nameGuaranteed constraints:1 ≤ name.length ≤ 10.[output] booleantrue if name is a correct variable name, false otherwise.'
    },
    {
        topic_id: 6,
        order_index: 28,
        challenge_name: 'alphabeticShift',        
        description: 'Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).ExampleFor inputString = "crazy", the output should be solution(inputString) = "dsbaz".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringA non-empty string consisting of lowercase English characters.Guaranteed constraints:1 ≤ inputString.length ≤ 1000.[output] stringThe resulting string after replacing each of its characters.'
    },
    {
        topic_id: 6,
        order_index: 29,
        challenge_name: 'chessBoardCellColor',        
        description: 'Given two cells on the standard chess board, determine whether they have the same color or not.ExampleFor cell1 = "A1" and cell2 = "C3", the output should besolution(cell1, cell2) = true.For cell1 = "A1" and cell2 = "H3", the output should besolution(cell1, cell2) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string cell1Guaranteed constraints:cell1.length = 2,A ≤ cell1[0] ≤ H,1 ≤ cell1[1] ≤ 8.[input] string cell2Guaranteed constraints:cell2.length = 2,A ≤ cell2[0] ≤ H,1 ≤ cell2[1] ≤ 8.[output] booleantrue if both cells have the same color, false otherwise.'
    },
    {
        topic_id: 7,
        order_index: 30,
        challenge_name: 'Circle of Numbers',        
        description: 'Consider integer numbers from 0 to n - 1 written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and n - 1 are neighboring, too).Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber.ExampleFor n = 10 and firstNumber = 2, the output should besolution(n, firstNumber) = 7.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer nA positive even integer.Guaranteed constraints:4 ≤ n ≤ 20.[input] integer firstNumberGuaranteed constraints:0 ≤ firstNumber ≤ n - 1.[output] integer'
    },
    {
        topic_id: 7,
        order_index: 31,
        challenge_name: 'depositProfit',        
        description: "You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.ExampleFor deposit = 100, rate = 20, and threshold = 170, the output should besolution(deposit, rate, threshold) = 3.Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:year 0: 100;year 1: 120;year 2: 144;year 3: 172.8.Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer depositThe initial deposit, guaranteed to be a positive integer.Guaranteed constraints:1 ≤ deposit ≤ 100.[input] integer rateThe rate of increase. Each year the balance increases by the rate percent of the current sum.Guaranteed constraints:1 ≤ rate ≤ 100.[input] integer thresholdThe target balance.Guaranteed constraints:deposit < threshold ≤ 200.[output] integerThe number of years it would take to hit the threshold."
    },
    {
        topic_id: 7,
        order_index: 32,
        challenge_name: 'absoluteValuesSumMinimization',       
        description: 'Given a sorted array of integers a, your task is to determine which element of a is closest to all other values of a. In other words, find the element x in a, which minimizes the following sum:abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)(where abs denotes the absolute value)If there are several possible answers, output the smallest one.ExampleFor a = [2, 4, 7], the output should be solution(a) = 4.for x = 2, the value will be abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7.for x = 4, the value will be abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5.for x = 7, the value will be abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8.The lowest possible value is when x = 4, so the answer is 4.For a = [2, 3], the output should be solution(a) = 2.for x = 2, the value will be abs(2 - 2) + abs(3 - 2) = 1.for x = 3, the value will be abs(2 - 3) + abs(3 - 3) = 1.Because there is a tie, the smallest x between x = 2 and x = 3 is the answer.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer aA non-empty array of integers, sorted in ascending order.Guaranteed constraints:1 ≤ a.length ≤ 1000,-106 ≤ a[i] ≤ 106.[output] integerAn integer representing the element from a that minimizes the sum of its absolute differences with all other elements.'
    },
    {
        topic_id: 7,
        order_index: 33,
        challenge_name: 'stringsRearrangement',        
        description: "Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return true if it's possible, and false if not.Note: You're only rearranging the order of the strings, not the order of the letters within the strings!ExampleFor inputArray = ['aba', 'bbb', 'bab'], the output should besolution(inputArray) = false.There are 6 possible arrangements for these strings:['aba', 'bbb', 'bab']['aba', 'bab', 'bbb']['bbb', 'aba', 'bab']['bbb', 'bab', 'aba']['bab', 'bbb', 'aba']['bab', 'aba', 'bbb']None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.For inputArray = ['ab', 'bb', 'aa'], the output should besolution(inputArray) = true.It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (eg: 'aa', 'ab', 'bb' or 'bb', 'ab', 'aa'), so return true.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.string inputArrayA non-empty array of strings of lowercase letters.Guaranteed constraints:2 ≤ inputArray.length ≤ 10,1 ≤ inputArray[i].length ≤ 15.[output] booleanReturn true if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character (false otherwise)."
    },
    {
        topic_id: 8,
        order_index: 34,
        challenge_name: 'extractEachKth',        
        description: 'Given array of integers, remove each kth element from it.ExampleFor inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] and k = 3, the output should besolution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10].Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer inputArrayGuaranteed constraints:5 ≤ inputArray.length ≤ 15,-20 ≤ inputArray[i] ≤ 20.[input] integer kGuaranteed constraints:1 ≤ k ≤ 10.[output] array.integerinputArray without elements k - 1, 2k - 1, 3k - 1 etc.'
    },
    {
        topic_id: 8,
        order_index: 35,
        challenge_name: 'firstDigit',        
        description: 'Find the leftmost digit that occurs in a given string.ExampleFor inputString = "var_1__Int", the output should besolution(inputString) = "1";For inputString = "q2q-q", the output should besolution(inputString) = "2";For inputString = "0ss", the output should besolution(inputString) = "0".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringA string containing at least one digit.Guaranteed constraints:3 ≤ inputString.length ≤ 10.[output] char'
    },
    {
        topic_id: 8,
        order_index: 36,
        challenge_name: 'differentSymbolsNaive',        
        description: 'Given a string, find the number of different characters in it.ExampleFor s = "cabca", the output should besolution(s) = 3.There are 3 different characters a, b and c.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string sA string of lowercase English letters.Guaranteed constraints:3 ≤ s.length ≤ 1000.[output] integer'
    },
    {
        topic_id: 8,
        order_index: 37,
        challenge_name: 'arrayMaxConsecutiveSum',        
        description: 'Given array of integers, find the maximal possible sum of some of its k consecutive elements.ExampleFor inputArray = [2, 3, 5, 1, 6] and k = 2, the output should besolution(inputArray, k) = 8.All possible sums of 2 consecutive elements are:2 + 3 = 5;3 + 5 = 8;5 + 1 = 6;1 + 6 = 7.Thus, the answer is 8.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer inputArrayArray of positive integers.Guaranteed constraints:3 ≤ inputArray.length ≤ 105,1 ≤ inputArray[i] ≤ 1000.[input] integer kAn integer (not greater than the length of inputArray).Guaranteed constraints:1 ≤ k ≤ inputArray.length.[output] integerThe maximal possible sum.'
    },
    {
        topic_id: 9,
        order_index: 38,
        challenge_name: 'growingPlant',       
        description: "Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer upSpeed. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by downSpeed.Since you grew the plant from a seed, it started at height 0 initially. Given an integer desiredHeight, your task is to find how many days it'll take for the plant to reach this height.ExampleFor upSpeed = 100, downSpeed = 10, and desiredHeight = 910, the output should besolution(upSpeed, downSpeed, desiredHeight) = 10.#	Day	Night1	100	902	190	1803	280	2704	370	3605	460	4506	550	5407	640	6308	730	7209	820	81010	910	900The plant first reaches a height of 910 on day 10.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer upSpeedA positive integer representing the daily growth of the plant.Guaranteed constraints:3 ≤ upSpeed ≤ 100.[input] integer downSpeedA positive integer representing the nightly decline of the plant.Guaranteed constraints:2 ≤ downSpeed < upSpeed.[input] integer desiredHeightA positive integer representing the goal height.Guaranteed constraints:4 ≤ desiredHeight ≤ 1000.[output] integerThe number of days that it will take for the plant to reach / pass desiredHeight."
    },
    {
        topic_id: 9,
        order_index: 39,
        challenge_name: 'Knapsack Light',        
        description: "You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.ExampleFor value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should besolution(value1, weight1, value2, weight2, maxW) = 10.You can only carry the first item.For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 9, the output should besolution(value1, weight1, value2, weight2, maxW) = 16.You're strong enough to take both of the items with you.For value1 = 5, weight1 = 3, value2 = 7, weight2 = 4, and maxW = 6, the output should besolution(value1, weight1, value2, weight2, maxW) = 7.You can't take both items, but you can take any of them.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer value1Guaranteed constraints:2 ≤ value1 ≤ 20.[input] integer weight1Guaranteed constraints:2 ≤ weight1 ≤ 10.[input] integer value2Guaranteed constraints:2 ≤ value2 ≤ 20.[input] integer weight2Guaranteed constraints:2 ≤ weight2 ≤ 10.[input] integer maxWGuaranteed constraints:1 ≤ maxW ≤ 20.[output] integer"
    },
    {
        topic_id: 9,
        order_index: 40,
        challenge_name: 'longestDigitsPrefix',        
        description: 'Given a string, output its longest prefix which contains only digits.ExampleFor inputString = "123aa1", the output should besolution(inputString) = "123".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringGuaranteed constraints:3 ≤ inputString.length ≤ 100.[output] string'
    },
    {
        topic_id: 9,
        order_index: 41,
        challenge_name: 'digitDegree',       
        description: "Let's define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.Given an integer, find its digit degree.ExampleFor n = 5, the output should besolution(n) = 0;For n = 100, the output should besolution(n) = 1.1 + 0 + 0 = 1.For n = 91, the output should besolution(n) = 2.9 + 1 = 10 -> 1 + 0 = 1.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer nGuaranteed constraints:5 ≤ n ≤ 109.[output] integer"
    },
    {
        topic_id: 9,
        order_index: 42,
        challenge_name: 'Bishop and Pawn',       
        description: "Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:ExampleFor bishop = 'a1' and pawn = 'c3', the output should besolution(bishop, pawn) = true.For bishop = 'h1' and pawn = 'h3', the output should besolution(bishop, pawn) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string bishopCoordinates of the white bishop in the chess notation.Guaranteed constraints:bishop.length = 2,'a' ≤ bishop[0] ≤ 'h',1 ≤ bishop[1] ≤ 8.[input] string pawnCoordinates of the black pawn in the same notation.Guaranteed constraints:pawn.length = 2,'a' ≤ pawn[0] ≤ 'h',1 ≤ pawn[1] ≤ 8.[output] booleantrue if the bishop can capture the pawn, false otherwise."
    },
    {
        topic_id: 10,
        order_index: 43,
        challenge_name: 'isBeautifulString',        
        description: "A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc. Note that letter a has no previous letter.Given a string, check whether it is beautiful.ExampleFor inputString = 'bbbaacdafe', the output should be solution(inputString) = true.This string contains 3 as, 3 bs, 1 c, 1 d, 1 e, and 1 f (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.For inputString = 'aabbb', the output should be solution(inputString) = false.Since there are more bs than as, this string is not beautiful.For inputString = 'bbc', the output should be solution(inputString) = false.Although there are more bs than cs, this string is not beautiful because there are no as, so therefore there are more bs than as.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringA string of lowercase English letters.Guaranteed constraints:3 ≤ inputString.length ≤ 50.[output] booleanReturn true if the string is beautiful, false otherwise."
    },
    {
        topic_id: 10,
        order_index: 44,
        challenge_name: 'Find Email Domain',        
        description: 'An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.Given a valid email address, find its domain part.ExampleFor address = "prettyandsimple@example.com", the output should besolution(address) = "example.com";For address = "fully-qualified-domain@codesignal.com", the output should besolution(address) = "codesignal.com".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string addressGuaranteed constraints:10 ≤ address.length ≤ 50.[output] string'
    },
    {
        topic_id: 10,
        order_index: 45,
        challenge_name: 'buildPalindrome',        
        description: 'Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.ExampleFor st = "abcdc", the output should besolution(st) = "abcdcba".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string stA string consisting of lowercase English letters.Guaranteed constraints:3 ≤ st.length ≤ 10.[output] string'
    },
    {
        topic_id: 10,
        order_index: 46,
        challenge_name: 'Elections Winners',       
        description: "Elections are in progress!Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.ExampleFor votes = [2, 3, 5, 2] and k = 3, the output should besolution(votes, k) = 2.The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).The last candidate can't win no matter what (for the same reason as the first candidate).Thus, only 2 candidates can win (the second and the third), which is the answer.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.integer votesA non-empty array of non-negative integers. Its ith element denotes the number of votes cast for the ith candidate.Guaranteed constraints:4 ≤ votes.length ≤ 105,0 ≤ votes[i] ≤ 104.[input] integer kThe number of voters who haven't cast their vote yet.Guaranteed constraints:0 ≤ k ≤ 105.[output] integer"
    },
    {
        topic_id: 10,
        order_index: 47,
        challenge_name: 'Is MAC48 Address?',        
        description: 'A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g. 01-23-45-67-89-AB).Your task is to check by given string inputString whether it corresponds to MAC-48 address or not.ExampleFor inputString = "00-1B-63-84-45-E6", the output should besolution(inputString) = true;For inputString = "Z1-1B-63-84-45-E6", the output should besolution(inputString) = false;For inputString = "not a MAC-48 address", the output should besolution(inputString) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringGuaranteed constraints:15 ≤ inputString.length ≤ 20.[output] booleantrue if inputString corresponds to MAC-48 address naming rules, false otherwise.'
    },
    {
        topic_id: 11,
        order_index: 48,
        challenge_name: 'isDigit',        
        description: "Determine if the given character is a digit or not.ExampleFor symbol = '0', the output should besolution(symbol) = true;For symbol = '-', the output should besolution(symbol) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] char symbolA character which is either a digit or not.Guaranteed constraints:Given symbol is from ASCII table.[output] booleantrue if symbol is a digit, false otherwise."
    },
    {
        topic_id: 11,
        order_index: 49,
        challenge_name: 'lineEncoding',        
        description: 'Given a string, return its encoding defined as follows:First, the string is divided into the least possible number of disjoint substrings consisting of identical charactersfor example, "aabbbc" is divided into ["aa", "bbb", "c"]Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating characterfor example, substring "bbb" is replaced by "3b"Finally, all the new strings are concatenated together in the same order and a new string is returned.ExampleFor s = "aabbbc", the output should besolution(s) = "2a3bc".Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string sString consisting of lowercase English letters.Guaranteed constraints:4 ≤ s.length ≤ 15.[output] stringEncoded version of s.'
    },
    {
        topic_id: 11,
        order_index: 50,
        challenge_name: 'chessKnight',        
        description: "Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.ExampleFor cell = 'a1', the output should besolution(cell) = 2.For cell = 'c2', the output should besolution(cell) = 6.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string cellString consisting of 2 letters - coordinates of the knight on an 8 x 8 chessboard in chess notation.Guaranteed constraints:cell.length = 2,'a' ≤ cell[0] ≤ 'h',1 ≤ cell[1] ≤ 8.[output] integer"
    },
    {
        topic_id: 11,
        order_index: 51,
        challenge_name: 'deleteDigit',        
        description: 'Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.ExampleFor n = 152, the output should besolution(n) = 52;For n = 1001, the output should besolution(n) = 101.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer nGuaranteed constraints:10 ≤ n ≤ 106.[output] integer'
    },
    {
        topic_id: 12,
        order_index: 52,
        challenge_name: 'longestWord',        
        description: "Define a word as a sequence of consecutive English letters. Find the longest word from the given string.ExampleFor text = 'Ready, steady, go!', the output should besolution(text) = 'steady'.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string textGuaranteed constraints:4 ≤ text.length ≤ 50.[output] stringThe longest word from text. It's guaranteed that there is a unique output."
    },
    {
        topic_id: 12,
        order_index: 53,
        challenge_name: 'Valid Time',        
        description: 'Check if the given string is a correct time representation of the 24-hour clock.ExampleFor time = "13:58", the output should besolution(time) = true;For time = "25:51", the output should besolution(time) = false;For time = "02:76", the output should besolution(time) = false.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string timeA string representing time in HH:MM format. It is guaranteed that the first two characters, as well as the last two characters, are digits.[output] booleantrue if the given representation is correct, false otherwise.'
    },
    {
        topic_id: 12,
        order_index: 54,
        challenge_name: 'sumUpNumbers',        
        description: 'CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.Help Ratiorg by writing a function that returns the sum of numbers that appear in the given inputString.ExampleFor inputString = "2 apples, 12 oranges", the output should besolution(inputString) = 14.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string inputStringGuaranteed constraints:0 ≤ inputString.length ≤ 105.[output] integer'
    },
    {
        topic_id: 12,
        order_index: 55,
        challenge_name: 'Different Squares',        
        description: 'Given a rectangular matrix containing only digits, calculate the number of different 2 x 2 squares in it.ExampleFormatrix = [[1, 2, 1],[2, 2, 2],[2, 2, 2],[1, 2, 3],[2, 2, 1]]the output should besolution(matrix) = 6.Here are all 6 different 2 x 2 squares:1 22 22 12 22 22 22 21 22 22 32 32 1Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.array.integer matrixGuaranteed constraints:1 ≤ matrix.length ≤ 100,1 ≤ matrix[i].length ≤ 100,0 ≤ matrix[i][j] ≤ 9.[output] integerThe number of different 2 x 2 squares in matrix.'
    },
    {
        topic_id: 12,
        order_index: 56,
        challenge_name: 'digitsProduct',        
        description: 'Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.ExampleFor product = 12, the output should besolution(product) = 26;For product = 19, the output should besolution(product) = -1.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer productGuaranteed constraints:0 ≤ product ≤ 600.[output] integer'
    },
    {
        topic_id: 12,
        order_index: 57,
        challenge_name: 'File Naming',        
        description: 'You are given an array of strings names representing filenames. The array is sorted in order of file creation, such that names[i] represents the name of a file created before names[i+1] and after names[i-1] (assume 0-based indexing). Because all files must have unique names, files created later with the same name as a file created earlier should have an additional (k) suffix in their names, where k is the smallest positive integer (starting from 1) that does not appear in previous file names.Your task is to iterate through all elements of names (from left to right) and update all filenames based on the above. Return an array of proper filenames.ExampleFor names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].Since names[0] = "doc" and names[1] = "doc", update names[1] = "doc(1)"Since names[1] = "doc(1)" and names[3] = "doc(1)", update names[3] = "doc(1)(1)"Since names[0] = "doc", names[1] = "doc(1)", and names[4] = "doc", update names[4] = "doc(2)"Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.string namesGuaranteed constraints:5 ≤ names.length ≤ 1000,1 ≤ names[i].length ≤ 15.[output] array.string'
    },
    {
        topic_id: 12,
        order_index: 58,
        challenge_name: 'messageFromBinaryCode',        
        description: "You are taking part in an Escape Room challenge designed specifically for programmers. In your efforts to find a clue, you've found a binary code written on the wall behind a vase, and realized that it must be an encrypted message. After some thought, your first guess is that each consecutive 8 bits of the code stand for the character with the corresponding extended ASCII code.Assuming that your hunch is correct, decode the message.ExampleFor code = '010010000110010101101100011011000110111100100001', the output should besolution(code) = 'Hello!'.The first 8 characters of the code are 01001000, which is 72 in the binary numeral system. 72 stands for H in the ASCII-table, so the first letter is H.Other letters can be obtained in the same manner.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] string codeA string, the encrypted message consisting of characters '0' and '1'.Guaranteed constraints:0 < code.length < 800.[output] stringThe decrypted message."
    },
    {
        topic_id: 12,
        order_index: 59,
        challenge_name: 'spiralNumbers',        
        description: 'Construct a square matrix with a size N x N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.ExampleFor n = 3, the output should besolution(n) = [[1, 2, 3],[8, 9, 4],[7, 6, 5]]Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] integer nMatrix size, a positive integer.Guaranteed constraints:3 ≤ n ≤ 100.[output] array.array.integer'
    },
    {
        topic_id: 12,
        order_index: 60,
        challenge_name: 'Sudoku',        
        description: 'Sudoku is a number-placement puzzle. The objective is to fill a 9 x 9 grid with digits so that each column, each row, and each of the nine 3 x 3 sub-grids that compose the grid contains all of the digits from 1 to 9.This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.ExampleForgrid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],[4, 6, 5, 8, 7, 9, 3, 2, 1],[7, 9, 8, 2, 1, 3, 6, 5, 4],[9, 2, 1, 4, 3, 5, 8, 7, 6],[3, 5, 4, 7, 6, 8, 2, 1, 9],[6, 8, 7, 1, 9, 2, 5, 4, 3],[5, 7, 6, 9, 8, 1, 4, 3, 2],[2, 4, 3, 6, 5, 7, 1, 9, 8],[8, 1, 9, 3, 2, 4, 7, 6, 5]]the output should besolution(grid) = true;Forgrid = [[1, 3, 4, 2, 5, 6, 9, 8, 7],[4, 6, 8, 5, 7, 9, 3, 2, 1],[7, 9, 2, 8, 1, 3, 6, 5, 4],[9, 2, 3, 1, 4, 5, 8, 7, 6],[3, 5, 7, 4, 6, 8, 2, 1, 9],[6, 8, 1, 7, 9, 2, 5, 4, 3],[5, 7, 6, 9, 8, 1, 4, 3, 2],[2, 4, 5, 6, 3, 7, 1, 9, 8],[8, 1, 9, 3, 2, 4, 7, 6, 5]]the output should besolution(grid) = false.The output should be false: each of the nine 3 x 3 sub-grids should contain all of the digits from 1 to 9.These examples are represented on the image below.Input/Output[execution time limit] 4 seconds (js)[memory limit] 1 GB[input] array.array.integer gridA matrix representing 9 x 9 grid already filled with numbers from 1 to 9.Guaranteed constraints:grid.length = 9,grid[i].length = 9,1 ≤ grid[i][j] ≤ 9.[output] booleantrue if the given grid represents a correct solution to Sudoku, false otherwise.'
    },

]

exports.seed = async function (knex) {
    await knex('challenges').insert(challenges)
}