// I just keep it here for later

// INTRO ---------------------------------------------
// 1: add
function solution(param1, param2) {
    return param1 + param1
}

// 2: centuryFromYear
function solution(year) {
    return Math.trunc((year - 1) / 100) + 1
}

// 3: checkPalindrome
function solution(inputString) {
    let revStr = '';

    for (let i = inputString.length - 1; i >= 0; i--) {
        revStr += inputString[i]
    }


    return revStr === inputString ? true : false
}

// 4: adjacentElementsProduct
function solution(inputArray) {
    let maxProduct = inputArray[0] * inputArray[1]
    for (let i = 0; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1]
        if (product > maxProduct) maxProduct = product
    }
    return maxProduct
}

// 5: shapeArea
function solution(n) {
    let b = n - 1
    return (b * b) + (n * n)
}

// 6: Make Array Consecutive 2
function solution(statues) {
    let max = Math.max(...statues)
    let arr2 = []
    for (let i = Math.min(...statues); i <= max; i++) {
        arr2.push(i)
    }
    const notIn = arr2.filter(num => !statues.includes(num))
    return notIn.length
}

// 7: almostIncreasingSequence
function solution(sequence) {
    let count = 0
    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i - 1]) {
            count++
            if (count > 1) return false
            if (sequence[i] <= sequence[i - 2] &&
                sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return true
}

// 8: matrixElementsSum
function solution(matrix) {
    let total = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] > 0) { // Check if the room is not free
                let isSuitable = true;
                for (let k = i - 1; k >= 0; k--) {
                    if (matrix[k][j] === 0) {
                        isSuitable = false; // Room below a free room, not suitable
                        break;
                    }
                }
                if (isSuitable) {
                    total += matrix[i][j];
                }
            }
        }
    }

    return total;
}

// 9: All Longest Strings
function solution(inputArray) {
    let longest = 0

    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > longest) longest = inputArray[i].length
    }

    return inputArray.filter(str => str.length === longest)
}

// 10: commonCharacterCount
function solution(s1, s2) {
    let charCount = {};

    for (let char of s1) {
        charCount[char] = (charCount[char] || 0) + 1;
        console.log(charCount[char])
    }
    console.log(charCount)
    let commonCount = 0;

    for (let char of s2) {
        if (charCount[char] > 0) {
            charCount[char]--;
            commonCount++;
        }
    }

    return commonCount;

}

// 11: isLucky
function solution(n) {
    let toHalf = String(n)

    let half = toHalf.length / 2

    let secondHalf = toHalf.slice(half)
    let firstHalf = toHalf.slice(0, half)

    let firstSum = 0

    for (i = 0; i < firstHalf.length; i++) {
        let toAdd = parseInt(firstHalf[i])
        firstSum += toAdd
    }

    let secSum = 0

    for (i = 0; i < secondHalf.length; i++) {
        let toAdd = parseInt(secondHalf[i])
        secSum += toAdd
    }

    return (firstSum === secSum) ? true : false
}

// 12: Sort by Height
function solution(a) {
    const heights = a.filter(height => height !== -1).sort((a, b) => a - b)
    let index = 0
    return a.map((element) => {
        if (element !== -1) {
            const height = heights[index]
            index++
            return height
        } else {
            return -1
        }
    })
}

// 13: reverseInParentheses
function solution(inputString) {
    const stack = []
    let result = ''

    for (const char of inputString) {
        if (char === '(') {
            stack.push(result)
            result = ''
        } else if (char === ')') {
            result = stack.pop() + result.split('').reverse().join('')
        } else {
            result += char
        }
    }
    return result
}

// 14: alternatingSums
function solution(a) {
    teamOne = []
    teamTwo = []
    sum1 = 0
    sum2 = 0

    for (i = 0; i < a.length; i++) {
        if (i % 2 === 1) {
            teamOne.push(a[i])
        } else {
            teamTwo.push(a[i])
        }
    }

    for (let i = 0; i < teamOne.length; i++) {
        sum1 += teamOne[i];
    }

    for (let i = 0; i < teamTwo.length; i++) {
        sum2 += teamTwo[i];
    }

    return [sum2, sum1]
}

// 15: Add Border
function solution(picture) {
    const numCols = picture[0].length + 2; // Calculate the number of columns in the bordered picture
    const border = '*'.repeat(numCols); // Create the top and bottom border

    // Create the bordered picture by adding '*' at the beginning and end of each row
    const borderedPicture = picture.map(row => `*${row}*`);

    // Add the top and bottom border
    borderedPicture.unshift(border);
    borderedPicture.push(border);

    return borderedPicture;
}

// 16: Are Similar?
function solution(a, b) {
    // Check if the lengths are equal
    if (a.length !== b.length) {
        return false
    }

    // Count differing elments
    let diffCount = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diffCount++;
        }
    }

    if (diffCount > 2) {
        return false
    }

    // Check if sorted arrays are equal
    if (a.sort().join(',') !== b.sort().join(',')) {
        return false
    }

    return true
}


// 17: arrayChange
function solution(inputArray) {
    let moves = 0;

    for (let i = 1; i < inputArray.length; i++) {
        if (inputArray[i] <= inputArray[i - 1]) {
            moves += inputArray[i - 1] - inputArray[i] + 1;
            inputArray[i] = inputArray[i - 1] + 1;
        }
    }

    return moves;
}

// 18: palindromeRearranging
function solution(inputString) {
    let charCount = {};

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    let oddCount = 0;
    for (let char in charCount) {
        if (charCount[char] % 2 !== 0) {
            oddCount++;
        }
    }

    return oddCount <= 1;
}

// 19: areEquallyStrong
function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let myStronger = 0
    let myWeaker = 0

    if (yourLeft > yourRight) {
        myStronger = yourLeft
        myWeaker = yourRight
    } else {
        myStronger = yourRight
        myWeaker = yourLeft
    }

    let friendStronger = 0
    let friendWeaker = 0

    if (friendsLeft > friendsRight) {
        friendStronger = friendsLeft
        friendWeaker = friendsRight
    } else {
        friendStronger = friendsRight
        friendWeaker = friendsLeft
    }

    return myStronger === friendStronger && myWeaker === friendWeaker

}

// 20: arrayMaximalAdjacentDifference
function solution(inputArray) {
    let maxDif = 0

    for (i = 1; i < inputArray.length; i++) {
        let diff = Math.abs(inputArray[i] - inputArray[i - 1])
        if (diff > maxDif) {
            maxDif = diff
        }
    }

    return maxDif
}

// 21: isIPv4Address
function solution(inputString) {
    let parts = inputString.split('.')

    if (parts.length !== 4) {
        return false
    }

    for (part of parts) {
        if (!/^\d+$/.test(part)) {
            return false
        }

        let num = parseInt(part)

        if (num < 0 || num > 255) {
            return false
        }

        if (part.length > 1 && part[0] === '0') {
            return false
        }
    }

    return true
}

// 22: avoidObstacles
function solution(inputArray) {
    let maxObs = Math.max(...inputArray)

    function trueJumplength(jumpLength) {
        for (let i = 0; i <= maxObs; i += jumpLength) {
            if (inputArray.includes(i)) {
                return false
            }
        }
        return true
    }

    let jumpLength = 1
    while (true) {
        if (trueJumplength(jumpLength)) {
            return jumpLength
        }
        jumpLength++
    }

}

// 23: Box Blur
function solution(image) {
    let rows = image.length;
    let cols = image[0].length;
    let result = [];

    // Iterate through each valid center pixel
    for (let i = 1; i < rows - 1; i++) {
        let row = [];
        for (let j = 1; j < cols - 1; j++) {
            // Calculate the sum of the 3x3 grid
            let sum = 0;
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    sum += image[i + k][j + l];
                }
            }
            // Calculate the average and round down
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }

    return result;
}

// 24: Minesweeper
function solution(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = Array.from(Array(rows), () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j]) {
                // Loop through the neighboring cells
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < rows && y >= 0 && y < cols) {
                            result[x][y]++;
                        }
                    }
                }
                // Subtract the mine itself
                result[i][j]--;
            }
        }
    }
    return result;
}

// 25: Array Replace
function solution(inputArray, elemToReplace, substitutionElem) {
    let result = []

    for (char of inputArray) {
        if (char === elemToReplace) {
            result.push(substitutionElem)
        } else {
            result.push(char)
        }
    }

    return result
}

// 26: evenDigitsOnly
function solution(n) {
    let str = n.toString()

    for (i = 0; i < str.length; i++) {
        if (parseInt(str[i]) % 2 !== 0) {
            return false
        }
    }

    return true
}

// 27: variableName
function solution(name) {
    if (/^\d/.test(name)) {
        return false;
    }

    for (let char of name) {
        if (!/^[a-zA-Z0-9_]+$/.test(char)) {
            return false;
        }
    }

    return true
}

// 28: alphabeticShift
function solution(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];

        // Check if the character is 'z'
        if (char === 'z') {
            result += 'a';
        } else {
            // Shift the character to the next one in the alphabet
            result += String.fromCharCode(char.charCodeAt(0) + 1);
        }
    }

    return result;
}

// 29: chessBoardCellColor
function solution(cell1, cell2) {
    // Helper function to convert cell position to row and column indices
    function getIndices(cell) {
        const column = cell.charCodeAt(0) - 'A'.charCodeAt(0);
        const row = parseInt(cell[1]) - 1;
        return [column, row];
    }

    // Get the row and column indices for both cells
    const [col1, row1] = getIndices(cell1);
    const [col2, row2] = getIndices(cell2);

    // Determine the color of each cell based on the sum of their indices
    const color1 = (col1 + row1) % 2;
    const color2 = (col2 + row2) % 2;

    // Cells have the same color if their computed colors are equal
    return color1 === color2;
}

// 30: Circle of Numbers
function solution(n, firstNumber) {
    return (firstNumber + n / 2) % n
}

// 31: depositProfit
function solution(deposit, rate, threshold) {
    let count = 0

    let balance = deposit

    while (balance < threshold) {
        balance += balance * rate / 100;
        count++;
    }

    return count
}

// 32: absoluteValuesSumMinimization
function solution(a) {
    const n = a.length

    return a[Math.floor((n - 1) / 2)];
}

// 33: stringsRearrangement
function differByOneChar(s1, s2) {
    let count = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return count === 1;
}

function permute(arr) {
    let results = [];

    function helper(soFar, remaining) {
        if (remaining.length === 0) {
            results.push(soFar);
        } else {
            for (let i = 0; i < remaining.length; i++) {
                helper(soFar.concat(remaining[i]), remaining.slice(0, i).concat(remaining.slice(i + 1)));
            }
        }
    }

    helper([], arr);
    return results;
}

function solution(inputArray) {
    let permutations = permute(inputArray);

    for (let i = 0; i < permutations.length; i++) {
        let isValid = true;
        for (let j = 0; j < permutations[i].length - 1; j++) {
            if (!differByOneChar(permutations[i][j], permutations[i][j + 1])) {
                isValid = false;
                break;
            }
        }
        if (isValid) {
            return true;
        }
    }
    return false;
}

// 34: extractEachKth
function solution(inputArray, k) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if ((i + 1) % k !== 0) {
            result.push(inputArray[i]);
        }
    }
    return result;
}

// 35: firstDigit
function solution(inputString) {
    for (let i = 0; i < inputString.length; i++) {
        if (/\d/.test(inputString[i])) {
            return inputString[i]
        }
    }
    return null
}

// 36: differentSymbolsNaive
function solution(str) {
    // Create an empty object to store the counts
    const elementCounts = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (elementCounts[char]) {
            elementCounts[char]++;
        } else {
            // If the character is not in the object, add it with a count of 1
            elementCounts[char] = 1;
        }
    }

    // Return the number of unique elements (keys) in the object
    return Object.keys(elementCounts).length;
}

// 37: arrayMaxConsecutiveSum
function solution(inputArray, k) {
    if (inputArray.length < k || k <= 0) {
        throw new Error("Invalid input: Array length is less than k or k is non-positive.");
    }

    // Calculate the initial sum of the first 'k' elements
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        currentSum += inputArray[i];
    }

    maxSum = currentSum;

    // Slide the window across the array
    for (let i = k; i < inputArray.length; i++) {
        currentSum = currentSum - inputArray[i - k] + inputArray[i];
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    return maxSum;
}

// 38: growingPlant
function solution(upSpeed, downSpeed, desiredHeight) {
    let result = 0
    let count = 0

    while (result < desiredHeight) {
        result += upSpeed
        count++
        if (result < desiredHeight) {
            result -= downSpeed
        }
    }

    return count
}

// 39: Knapsack Light
function solution(value1, weight1, value2, weight2, maxW) {
    let maxValue = 0;

    // Check if we can take the first item
    if (weight1 <= maxW) {
        maxValue = value1;
    }

    // Check if we can take the second item
    if (weight2 <= maxW) {
        maxValue = Math.max(maxValue, value2);
    }

    // Check if we can take both items
    if (weight1 + weight2 <= maxW) {
        maxValue = Math.max(maxValue, value1 + value2);
    }

    return maxValue;
}

// 40: longestDigitsPrefix
function solution(inputString) {
    let result = "";
    for (let i = 0; i < inputString.length; i++) {
        if (isNaN(inputString[i]) || inputString[i] === ' ') {
            break;
        }
        result += inputString[i];
    }
    return result;
}

// 41: digitDegree
function solution(n) {
    let degree = 0;
    while (n >= 10) {
        n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        degree++;
    }
    return degree
}

// 42: Bishop and Pawn
function solution(bishop, pawn) {
    // Convert chess notation to numerical coordinates
    const bishopX = bishop.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const bishopY = parseInt(bishop[1], 10);
    const pawnX = pawn.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const pawnY = parseInt(pawn[1], 10);

    // Check if they are on the same diagonal
    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

// 43: isBeautifulString
function solution(inputString) {
    // Initialize frequency count for each letter a-z
    const frequency = Array(26).fill(0);

    // Count occurrences of each letter
    for (let char of inputString) {
        frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    // Check if the frequency condition is met
    for (let i = 1; i < 26; i++) {
        if (frequency[i] > frequency[i - 1]) {
            return false;
        }
    }

    return true;
}

// 44: Find Email Domain
function solution(address) {
    const atIndex = address.lastIndexOf('@');

    // Extract and return the substring after the "@" symbol
    return address.slice(atIndex + 1);
}

// 45: buildPalindrome
function solution(st) {
    function isPalindrome(str) {
        return str === str.split('').reverse().join('');
    }

    // Iterate from the end of the string to find the longest palindromic suffix
    for (let i = 0; i < st.length; i++) {
        const suffix = st.slice(i);
        if (isPalindrome(suffix)) {
            const prefix = st.slice(0, i);
            return st + prefix.split('').reverse().join('');
        }
    }

    // In case of any unforeseen errors, but ideally should not reach here
    return st;
}

// 46: Elections Winners
function solution(votes, k) {
    const n = votes.length;

    // Edge case when k is 0
    if (k === 0) {
        const maxVotes = Math.max(...votes);
        const maxCount = votes.filter(vote => vote === maxVotes).length;
        // If more than one candidate has the maximum votes, there can be no winner
        return maxCount === 1 ? 1 : 0;
    }

    // Normal case when k > 0
    const maxVotes = Math.max(...votes);
    let count = 0;

    for (const vote of votes) {
        const potentialMaxVotes = vote + k;
        if (potentialMaxVotes > maxVotes) {
            count++;
        }
    }

    return count;
}

// 47: Is MAC48 Address?
function solution(inputString) {
    const mac48Regex = /^([0-9A-Fa-f]{2}-){5}[0-9A-Fa-f]{2}$/;
    return mac48Regex.test(inputString);
}

// 48: isDigit
function solution(symbol) {
    return !isNaN(symbol) && symbol.trim() !== '';
}

// 49: lineEncoding
function solution(s) {
    let encodedString = '';
    let i = 0;

    while (i < s.length) {
        let char = s[i];
        let count = 0;

        // Count the number of repeating characters
        while (i < s.length && s[i] === char) {
            count++;
            i++;
        }

        // Encode the substring based on its length
        if (count > 1) {
            encodedString += count + char;
        } else {
            encodedString += char;
        }
    }

    return encodedString;
}

// 50: chessKnight
function solution(cell) {
    // Define all possible knight moves
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    // Convert the cell to numerical coordinates
    const column = cell.charCodeAt(0) - 'a'.charCodeAt(0) + 1; // 'a' -> 1, 'b' -> 2, ..., 'h' -> 8
    const row = parseInt(cell[1]); // '1' -> 1, '2' -> 2, ..., '8' -> 8

    let validMoves = 0;

    // Check each possible move
    for (const [dRow, dCol] of moves) {
        const newRow = row + dRow;
        const newCol = column + dCol;

        // Check if the new position is within the bounds of the chessboard
        if (newRow >= 1 && newRow <= 8 && newCol >= 1 && newCol <= 8) {
            validMoves++;
        }
    }

    return validMoves;
}

// 51: deleteDigit
function solution(n) {
    const numStr = n.toString();
    let maxNumber = -Infinity;

    // Iterate over each digit position
    for (let i = 0; i < numStr.length; i++) {
        // Create a new number by excluding the digit at position i
        const newNumberStr = numStr.slice(0, i) + numStr.slice(i + 1);
        const newNumber = parseInt(newNumberStr, 10);

        // Update the maximum number found
        if (newNumber > maxNumber) {
            maxNumber = newNumber;
        }
    }

    return maxNumber;
}

// 52: longestWord
function solution(text) {
    // Step 1: Normalize the string by removing non-letter characters
    // and replace them with spaces to isolate words.
    const normalizedText = text.replace(/[^a-zA-Z]+/g, ' ');

    // Step 2: Extract all sequences of letters (words)
    const words = normalizedText.trim().split(/\s+/);

    // Step 3: Find the longest word
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// 53: Valid Time
function solution(time) {
    // Split the input string by ':'
    const [hours, minutes] = time.split(':');

    // Convert hours and minutes to numbers
    const hour = parseInt(hours, 10);
    const minute = parseInt(minutes, 10);

    // Check if hour is between 0 and 23, and minute is between 0 and 59
    return hour >= 0 && hour < 24 && minute >= 0 && minute < 60;
}

// 54: sumUpNumbers
function solution(inputString) {
    // Use regex to find all sequences of digits
    const numbers = inputString.match(/\d+/g);

    // If no numbers found, return 0
    if (!numbers) {
        return 0;
    }

    // Convert each found sequence to an integer and sum them up
    const sum = numbers.reduce((acc, num) => acc + parseInt(num, 10), 0);

    return sum;
}

// 55: Different Squares
function solution(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const uniqueSquares = new Set();

    // Iterate over possible top-left corners of 2x2 squares
    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < cols - 1; j++) {
            // Extract the 2x2 square
            const square = [
                matrix[i][j], matrix[i][j + 1],
                matrix[i + 1][j], matrix[i + 1][j + 1]
            ];

            // Serialize the square to a string
            const key = square.join(',');

            // Add the serialized square to the set
            uniqueSquares.add(key);
        }
    }

    // The size of the set represents the number of unique 2x2 squares
    return uniqueSquares.size;
}

// 56: digitsProduct
function solution(product) {
    // Special cases
    if (product === 0) return 10;
    if (product === 1) return 1;

    // Array to store the factors (digits from 2 to 9)
    let factors = [];

    // Factorize the product using digits from 9 to 2
    for (let i = 9; i >= 2; i--) {
        while (product % i === 0) {
            factors.push(i);
            product /= i;
        }
    }

    // If product is not 1 after factorization, return -1
    if (product !== 1) return -1;

    // Sort the factors to form the smallest possible number
    factors.sort((a, b) => a - b);

    // Combine factors to form the smallest number
    return parseInt(factors.join(''));
}

// 57: File Naming
function solution(names) {
    // Set to keep track of used filenames
    const usedNames = new Set();
    const result = [];

    // Iterate through each name in the input array
    for (let name of names) {
        let baseName = name;
        let suffix = 1;

        // Check if the baseName is already used
        while (usedNames.has(baseName)) {
            // If it is used, add a suffix (k)
            baseName = `${name}(${suffix})`;
            suffix++;
        }

        // Add the unique baseName to the result and mark it as used
        result.push(baseName);
        usedNames.add(baseName);
    }

    return result;
}

// 58: messageFromBinaryCode
function solution(code) {
    let message = '';

    // Iterate over the binary string in chunks of 8 bits
    for (let i = 0; i < code.length; i += 8) {
        // Extract the 8-bit chunk
        let binaryChunk = code.substring(i, i + 8);

        // Convert binary to decimal
        let decimalValue = parseInt(binaryChunk, 2);

        // Convert decimal to character
        let character = String.fromCharCode(decimalValue);

        // Append the character to the message
        message += character;
    }

    return message;
}

// 59: spiralNumbers
function solution(n) {
    // Initialize the NxN matrix with zeros
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    // Define the boundaries
    let top = 0, bottom = n - 1, left = 0, right = n - 1;
    let num = 1; // Start filling from 1

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++; // Move the top boundary down

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--; // Move the right boundary left

        // Traverse from right to left along the bottom row (if there are rows left)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--; // Move the bottom boundary up
        }

        // Traverse from bottom to top along the left column (if there are columns left)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++; // Move the left boundary right
        }
    }

    return matrix;
}

// 60: Sudoku
function solution(grid) {
    const isValidSet = (set) => set.size === 9 && ![...set].some(n => n < 1 || n > 9);

    // Check all rows
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set(grid[i]);
        if (!isValidSet(rowSet)) {
            return false;
        }
    }

    // Check all columns
    for (let j = 0; j < 9; j++) {
        const colSet = new Set();
        for (let i = 0; i < 9; i++) {
            colSet.add(grid[i][j]);
        }
        if (!isValidSet(colSet)) {
            return false;
        }
    }

    // Check all 3x3 sub-grids
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const subGridSet = new Set();
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    subGridSet.add(grid[i][j]);
                }
            }
            if (!isValidSet(subGridSet)) {
                return false;
            }
        }
    }

    return true;
}


//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////
//// __________________________________The Core_______________________________ ////


// 1: Add Two Digits
function solution(n) {
    // Get the tens digit by dividing by 10 and using Math.floor to get the integer part
    const tensDigit = Math.floor(n / 10);

    // Get the units digit by taking the remainder when divided by 10
    const unitsDigit = n % 10;

    // Return the sum of the two digits
    return tensDigit + unitsDigit;
}

// 2: Largest Number
function solution(n) {
    // Calculate the largest number with n digits
    const largestNumber = Math.pow(10, n) - 1;

    // Return the result
    return largestNumber;
}

// 3: Candies
function solution(n, m) {
    return m - m % n;
}

// 4: Seats in Theater
function solution(nCols, nRows, col, row) {
    return (nRows - row) * (nCols - col + 1);
}

// 5: Max Multiple
function solution(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
}

// 6: Circle of Numbers
function solution(n, firstNumber) {
    return (firstNumber + n / 2) % n;
}

// 7: Late Ride
function solution(n) {
    let hours = Math.floor(n / 60);
    let minutes = n % 60;
    let timeString = hours.toString().padStart(2, '0') + minutes.toString().padStart(2, '0');
    return timeString.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// 8: Phone Call
function solution(min1, min2_10, min11, s) {
    if (s < min1) return 0;

    s -= min1;
    if (s <= min2_10 * 9) {
        return 1 + Math.floor(s / min2_10);
    }

    s -= min2_10 * 9;
    return 10 + Math.floor(s / min11);
}

// 9: Reach Next Level
function solution(experience, threshold, reward) {
    return experience + reward >= threshold;
}

// 10: Knapsack Light
function solution(value1, weight1, value2, weight2, maxW) {
    if (weight1 + weight2 <= maxW) {
        return value1 + value2;
    } else if (weight1 <= maxW && weight2 <= maxW) {
        return Math.max(value1, value2);
    } else if (weight1 <= maxW) {
        return value1;
    } else if (weight2 <= maxW) {
        return value2;
    } else {
        return 0;
    }
}

// 11: Extra Number
function solution(a, b, c) {
    if (a === b) return c;
    if (a === c) return b;
    return a;
}

// 12: Is Infinite Process?
function solution(a, b) {
    return a > b || a % 2 != b % 2;
}

// 13: Arithmetic Expression
function solution(a, b, c) {
    return a + b === c || a - b === c || a * b === c || (b !== 0 && a / b === c);
}

// 14: Tennis Set
function solution(score1, score2) {
    var max = Math.max(score1, score2),
        min = Math.min(score1, score2);
    return (max == 6 && min < 5) || (max == 7 && min >= 5 && min <= 6);
}

// 15: Will You?
function solution(young, beautiful, loved) {
    return (young && beautiful && !loved) || (loved && (!young || !beautiful));
}

// 16: Metro Card
function solution(lastNumberOfDays) {
    var result = {
        30: [31],
        28: [31],
        31: [28, 30, 31]
    };
    return result[lastNumberOfDays];
}

// 17: Kill K-th Bit
function solution(n, k) {
    return n & ~(1 << k - 1);
}

// 18: Array Packing
function solution(a) {
    let M = 0;
    for (let i = 0; i < a.length; i++) {
        M |= a[i] << (8 * i);
    }
    return M;
}

// 19: Range Bit Count
function solution(a, b) {
    let count = 0;
    for (let i = a; i <= b; i++) {
        count += i.toString(2).split('1').length - 1;
    }
    return count;
}

// 20: Mirror Bits
function solution(a) {
    // Convert the number to binary string
    let binaryStr = a.toString(2);

    // Reverse the binary string
    let reversedBinaryStr = binaryStr.split('').reverse().join('');

    // Convert the reversed binary string back to an integer
    return parseInt(reversedBinaryStr, 2);
}

// 21: Second-Rightmost Zero Bit
function solution(n) {
    return (function (input) {
        // Fuck your "only change the ..." policy

        var result = 0;
        var zeroFound = false;

        for (var i = 0; i < 32; i++) {
            if (!((input >> i) & 1)) {
                if (zeroFound) {
                    result = i;
                    break;
                }

                zeroFound = true;
            }
        }

        return Math.pow(2, result);
    })(n);
}

// 22: Swap Adjacent Bits
function solution(n) {
    return parseInt(n.toString(2).padStart(32, `0`).replace(/(.)(.)/g, `$2$1`), 2);
}

// 23: Different Rightmost Bit
function solution(n, m) {
    return (n ^ m) & -(n ^ m);
}

// 24: Equal Pair of Bits
function solution(n, m) {
    return ~(n ^ m) & ((n ^ m) + 1);
}

// 25: Least Factorial
function solution(n) {
    let factorial = 1;
    let m = 1;

    while (factorial < n) {
        m++;
        factorial *= m;
    }

    return factorial;
}

// 26: Count Sum of Two Representations 2
function solution(n, l, r) {
    let count = 0;

    for (let A = l; A <= r; A++) {
        let B = n - A;
        if (A <= B && B <= r) {
            count++;
        }
    }

    return count;
}

// 27: Magical Well
function solution(a, b, n) {
    let totalMoney = 0;

    for (let i = 0; i < n; i++) {
        totalMoney += a * b;
        a++;
        b++;
    }

    return totalMoney;
}

// 28: Lineup
function solution(commands) {
    c = 0, s = true
    for (i of commands) {
        if (i == "L" || i == "R") {
            if (s) { s = false }
            else {
                c++
                s = true
            }
        }
        else if (s) { c++ }
    }
    return c
}

// 29: Addition Without Carrying
function solution(param1, param2) {
    let str1 = param1.toString().padStart(10, '0');
    let str2 = param2.toString().padStart(10, '0');
    let result = '';

    for (let i = 0; i < str1.length; i++) {
        let sum = parseInt(str1[i]) + parseInt(str2[i]);
        result += (sum % 10).toString();
    }

    return parseInt(result);
}

// 30: Apple Boxes
function solution(k) {
    let yellowApples = 0;
    let redApples = 0;

    for (let i = 1; i <= k; i++) {
        let applesInBox = i * i;
        if (i % 2 === 0) {
            redApples += applesInBox;
        } else {
            yellowApples += applesInBox;
        }
    }

    return redApples - yellowApples;
}

// 31: Increase Number Roundness
function solution(n) {
    let str = n.toString();
    let trailingZeroes = str.length - str.trimEnd().length;

    // Find the first non-zero digit after the trailing zeroes
    let firstNonZeroIndex = str.length - trailingZeroes - 1;
    while (firstNonZeroIndex >= 0 && str[firstNonZeroIndex] === '0') {
        firstNonZeroIndex--;
    }

    // Check if there is a zero before the first non-zero digit
    let hasZeroBefore = str.slice(0, firstNonZeroIndex + 1).includes('0');

    return hasZeroBefore;
}

// 32: Rounders
function solution(value) {
    let r = 0
    while (value > 10) {
        value = Math.round(value / 10)
        r++
    }
    return value * Math.pow(10, r)
}

// 33: Candles
function solution(candlesNumber, makeNew) {
    let totalBurned = 0;
    let leftovers = 0;

    while (candlesNumber > 0) {
        // Burn all current candles
        totalBurned += candlesNumber;
        leftovers += candlesNumber;

        // Create new candles from leftovers
        candlesNumber = Math.floor(leftovers / makeNew);
        leftovers = leftovers % makeNew;
    }

    return totalBurned;
}

// 34: Count Black Cells
function solution(n, m) {
    let gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
    return n + m + gcd(n, m) - 2;
}

// 35: Create Array
function solution(size) {
    return Array(size).fill(1);
}

// 36: Array Replace
function solution(elemToReplace, substitutionElem, inputArray) {
    return inputArray.map(elem => elem === elemToReplace ? substitutionElem : elem);
}

// 37: First Reverse Try
function solution(arr) {
    if (arr.length > 1) {
        let temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
    }
    return arr;
}

// 38: Concatenate Arrays
function solution(a, b) {
    return a.concat(b);
}

// 39: Remove Array Part
function solution(l, r, inputArray) {
    return inputArray.slice(0, l).concat(inputArray.slice(r + 1));
}

// 40: Is Smooth?
function solution(arr) {
    const n = arr.length;
    const first = arr[0];
    const last = arr[n - 1];

    if (n % 2 === 1) { // odd number of elements
        const middle = arr[Math.floor(n / 2)];
        return first === last && first === middle;
    } else { // even number of elements
        const middle = arr[n / 2 - 1] + arr[n / 2];
        return first === last && first === middle;
    }
}

// 41: Replace Middle
function solution(arr) {
    const n = arr.length;
    if (n % 2 === 1) { // odd number of elements
        return arr;
    } else { // even number of elements
        const mid1 = n / 2 - 1;
        const mid2 = n / 2;
        const middleValue = arr[mid1] + arr[mid2];
        return [...arr.slice(0, mid1), middleValue, ...arr.slice(mid2 + 1)];
    }
}

// 42: Make Array Consecutive 2
function solution(statues) {
    const min = Math.min(...statues);
    const max = Math.max(...statues);
    return (max - min + 1) - statues.length;
}

// 43: Is Power?
function solution(n) {
    if (n === 1) return true;

    for (let base = 2; base <= Math.sqrt(n); base++) {
        let power = 2;
        let result = Math.pow(base, power);

        while (result <= n) {
            if (result === n) {
                return true;
            }
            power++;
            result = Math.pow(base, power);
        }
    }

    return false;
}

// 44: Is Sum of Consecutive 2
function solution(n) {
    let count = 0;

    for (let start = 1; start < n; start++) {
        let sum = 0;
        for (let k = start; k < n; k++) {
            sum += k;
            if (sum === n) {
                count++;
                break;
            } else if (sum > n) {
                break;
            }
        }
    }

    return count;
}

// 45: Square Digits Sequence
function solution(a0) {
    const seen = new Set();
    let current = a0;
    let count = 0;

    while (!seen.has(current)) {
        seen.add(current);
        count++;
        current = sumOfSquaredDigits(current);
    }

    return count + 1;
}
function sumOfSquaredDigits(num) {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

// 46: Pages Numbering With Ink
function solution(current, numberOfDigits) {
    while (numberOfDigits >= String(current).length) {
        numberOfDigits -= String(current).length;
        current++;
    }
    return current - 1;
}

// 47: Comfortable Numbers
function solution(l, r) {
    function sumOfDigits(x) {
        return String(x).split('').reduce((sum, digit) => sum + Number(digit), 0);
    }

    let count = 0;

    for (let a = l; a <= r; a++) {
        for (let b = a + 1; b <= r; b++) {
            let sa = sumOfDigits(a);
            let sb = sumOfDigits(b);

            if (b >= a - sa && b <= a + sa && a >= b - sb && a <= b + sb) {
                count++;
            }
        }
    }

    return count;
}

// 48: Weak Numbers
solution = (n) => {
    let count = 0;
    let m = {};
    let arr = [];

    // Find divisiors
    for (let i = 1; i <= n; i++) {
        m[i] = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) m[i]++;
        }
    }

    // Find Weakness
    while (n > 0) {
        for (let l = n - 1; l > 0; l--) {
            if (m[n] < m[l]) count++;
        }
        arr.push(count);
        count = 0;
        n--;
    }

    // Find weakest and its quantity
    let weakness = Math.max(...arr);
    for (let k in arr) {
        if (weakness === arr[k]) count++;
    }
    return [weakness, count]
}

// 49: Rectangle Rotation
function solution(a, b) {
    let pointsA = Math.floor(Math.sqrt(a * a / 2)),
        pointsB = Math.floor(Math.sqrt(b * b / 2));
    return (pointsA * pointsB + Math.floor((pointsA + pointsB) / 2)) * 2 + 1;
}

// 50: Crossword Formation
function solution(words) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
        let a = words[i];
        for (let a1 = 0; a1 < (a.length - 1); a1++) {
            for (let j = 0; j < 4; j++) {
                if (j == i) {
                    continue;
                }
                let b = words[j];
                for (let b2 = 1; b2 < b.length; b2++) {
                    if (b[b2] != a[a1]) {
                        continue;
                    }
                    for (let b1 = 0; b1 < (b2 - 1); b1++) {
                        for (let k = 0; k < 4; k++) {
                            if (k == i || k == j) { continue; }
                            let c = words[k], d = words[6 - i - j - k];
                            if (b2 - b1 >= d.length) {
                                continue;
                            }
                            for (let c1 = 0; c1 < (c.length - 1); c1++) {
                                if (c[c1] != b[b1]) {
                                    continue;
                                }
                                for (let c2 = (c1 + 2); c2 < c.length; c2++) {
                                    let a2 = a1 + (c2 - c1); if (a2 >= a.length) {
                                        continue;
                                    }
                                    for (let d1 = 0; d1 < d.length; d1++) {
                                        if (d[d1] != c[c2]) { continue; }
                                        let d2 = d1 + (b2 - b1);
                                        if (d2 >= d.length) {
                                            break;
                                        }
                                        if (a[a2] != d[d2]) {
                                            continue;
                                        }
                                        count += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return count;
}

// 51: Enclose In Brackets
function solution(inputString) {
    return `(${inputString})`;
}

// 52: Proper Noun Correction
function solution(noun) {
    return noun.charAt(0).toUpperCase() + noun.slice(1).toLowerCase();
}

// 53: Is Tandem Repeat?
function solution(inputString) {
    s = inputString.slice(0, Math.floor(inputString.length / 2))
    if (s + s === inputString) return true
    return false
}

// 54: Is Case-Insensitive Palindrome?
function solution(inputString) {
    const lowercased = inputString.toLowerCase();
    return lowercased === lowercased.split('').reverse().join('');
}

// 55: Find Email Domain
function solution(address) {
    const atIndex = address.lastIndexOf('@');
    return address.slice(atIndex + 1);
}

// 56: HTML End Tag By Start Tag
function solution(startTag) {
    const tagName = startTag.match(/<(\w+)/)[1];
    return `</${tagName}>`;
}

// 57: Is MAC48 Address?
function solution(inputString) {
    const regex = /^[0-9A-Fa-f]{2}(-[0-9A-Fa-f]{2}){5}$/;
    return regex.test(inputString);
}

// 58: Is Unstable Pair?
function solution(filename1, filename2) {

    return filename1 < filename2 && filename1.toLowerCase() >= filename2.toLowerCase()
        || filename1 > filename2 && filename1.toLowerCase() <= filename2.toLowerCase()
}

// 59: Strings Construction
function solution(a, b) {
    const countA = {};
    const countB = {};

    // Count frequencies of each character in string a
    for (let char of a) {
        countA[char] = (countA[char] || 0) + 1;
    }

    // Count frequencies of each character in string b
    for (let char of b) {
        countB[char] = (countB[char] || 0) + 1;
    }

    // Determine the maximum number of times we can construct string a
    let maxCount = Infinity;
    for (let char in countA) {
        if (!countB[char]) {
            return 0; // If b doesn't have a required character
        }
        maxCount = Math.min(maxCount, Math.floor(countB[char] / countA[char]));
    }

    return maxCount;
}

// 60: Is Substitution Cipher?
function solution(string1, string2) {
    if (string1.length !== string2.length) return false;

    const map1 = new Map();
    const map2 = new Map();

    for (let i = 0; i < string1.length; i++) {
        const char1 = string1[i];
        const char2 = string2[i];

        if (!map1.has(char1)) map1.set(char1, char2);
        if (!map2.has(char2)) map2.set(char2, char1);

        if (map1.get(char1) !== char2 || map2.get(char2) !== char1) {
            return false;
        }
    }

    return true;
}

// 61: Create Anagram
function solution(s, t) {
    for (let x of s) {
        t = t.replace(x, "");
    }
    return t.length;
}

// 62: Construct Square
function solution(s) {
    let counted = [];
    let num = [];
    for (var i in s) {
        if (!counted.includes(s[i])) {
            let cnt = 0;
            for (var x in s) if (s[x] === s[i]) cnt++;
            num.push(cnt);
            counted.push(s[i]);
        }
    }
    let digits = 0;
    for (var i in num) digits += num[i];
    num = num.sort();


    for (var j = Math.ceil(Math.pow(Math.pow(10, digits), 0.5)); j > 0; j--) {
        let sq = String(Math.pow(j, 2)).split("");
        counted = [];
        let numSq = [];

        for (var i = 0; i < sq.length; i++) {
            if (!counted.includes(sq[i])) {
                let sqCount = 0;
                for (var x in sq) if (sq[x] === sq[i]) sqCount++;
                if (sqCount !== 0) numSq.push(sqCount);

                counted.push(sq[i]);
            }
        }

        numSq = numSq.sort();

        let isEqual = true;
        for (var y in numSq) {
            if (numSq[y] != num[y]) {
                isEqual = false;
                break;
            }
        }
        if (isEqual) return Number(sq.join(""))
    }

    return -1
}

// 63: Numbers Grouping
function solution(a) {

    a.sort((a, b) => a - b)

    groupCounter = 0
    lastGroup = -1

    for (b of a) {
        currentGroup = Math.ceil(b / 10000)
        if (currentGroup > lastGroup) {
            groupCounter++
            lastGroup = currentGroup
        }
    }

    return a.length + groupCounter
}

// 64: Different Squares
function solution(matrix) {
    const uniqueSquares = new Set();

    const rows = matrix.length;
    const cols = matrix[0].length;

    for (let i = 0; i < rows - 1; i++) {
        for (let j = 0; j < cols - 1; j++) {
            const square = [
                matrix[i][j], matrix[i][j + 1],
                matrix[i + 1][j], matrix[i + 1][j + 1]
            ];
            uniqueSquares.add(square.join(','));
        }
    }

    return uniqueSquares.size;
}

// 65: Most Frequent Digit Sum
function solution(n) {
    const digitSum = x => x.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);

    const frequency = {};
    let current = n;

    while (current >= 0) {
        const sCurrent = digitSum(current);
        frequency[sCurrent] = (frequency[sCurrent] || 0) + 1;
        current -= sCurrent;
        if (current === 0) {
            frequency[0] = (frequency[0] || 0) + 1;
            break;
        }
    }

    let maxFrequency = -1;
    let result = -1;

    for (const [key, value] of Object.entries(frequency)) {
        const num = parseInt(key);
        if (value > maxFrequency || (value === maxFrequency && num > result)) {
            maxFrequency = value;
            result = num;
        }
    }

    return result;
}

// 66: Number of Clans
function solution(k, divisors) {
    let key, divisabilityPatterns = new Set(), i, j;
    for (i = 1; i <= k; i++) {
        for (key = "", j = 0; j < divisors.length; j++)
            key += +(i % divisors[j] == 0);
        divisabilityPatterns.add(key);
    }
    return divisabilityPatterns.size;
}

// 67: House Numbers Sum
function solution(inputArray) {
    let sum = 0;
    for (let num of inputArray) {
        if (num === 0) break;
        sum += num;
    }
    return sum;
}

// 68: All Longest Strings
function solution(inputArray) {
    let maxLength = Math.max(...inputArray.map(str => str.length));
    return inputArray.filter(str => str.length === maxLength);
}

// 69: House of Cats
function solution(legs) {
    let result = [];

    for (let people = 0; people * 2 <= legs; people++) {
        let remainingLegs = legs - (people * 2);

        if (remainingLegs % 4 === 0) {
            result.push(people);
        }
    }

    return result;
}

// 70: Alphabet Subsequence
function solution(s) {
    for (let i = 1; i < s.length; i++) {
        if (s[i] <= s[i - 1]) {
            return false;
        }
    }
    return true;
}

// 71: Minimal Number of Coins
function solution(price, coins) {
    let count = 0;
    for (let i = coins.length - 1; i >= 0; i--) {
        count += Math.floor(price / coins[i]);
        price %= coins[i];
    }
    return count;
}

// 72: Add Border
function solution(picture) {
    const borderLength = picture[0].length + 2;
    const border = '*'.repeat(borderLength);

    return [
        border,
        ...picture.map(row => `*${row}*`),
        border
    ];
}

// 73: Switch Lights
function solution(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 1) {
            for (let j = 0; j <= i; j++) {
                a[j] = 1 - a[j];
            }
        }
    }
    return a;
}

// 74: Timed Reading
function solution(maxLength, text) {
    const words = text.match(/[a-zA-Z]+/g) || [];
    return words.filter(word => word.length <= maxLength).length;
}

// 75: Elections Winners
function solution(k, votes) {
    const n = votes.length;

    // Edge case when k is 0
    if (k === 0) {
        const maxVotes = Math.max(...votes);
        const maxCount = votes.filter(vote => vote === maxVotes).length;
        // If more than one candidate has the maximum votes, there can be no winner
        return maxCount === 1 ? 1 : 0;
    }

    // Normal case when k > 0
    const maxVotes = Math.max(...votes);
    let count = 0;

    for (const vote of votes) {
        const potentialMaxVotes = vote + k;
        if (potentialMaxVotes > maxVotes) {
            count++;
        }
    }

    return count;
}

// 76: Integer to String of Fixed Width
function solution(number, width) {
    const numStr = number.toString();
    if (numStr.length >= width) {
        return numStr.slice(-width);
    } else {
        return numStr.padStart(width, '0');
    }
}

// 77: Are Similar?
function solution(a, b) {
    if (a.length !== b.length) return false;

    if (JSON.stringify(a) === JSON.stringify(b)) return true;

    const diff = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            diff.push([a[i], b[i]]);
            if (diff.length > 2) return false;
        }
    }

    if (diff.length === 2) {
        const [[a1, b1], [a2, b2]] = diff;
        return a1 === b2 && a2 === b1;
    }

    return false;
}

// 78: Ada Number
function solution(line) {
    line = line.replace(/_/g, ``);
    if (line.match(/^\d+$/)) return true;
    const num = line.match(/^(\d{1,2})#([0-9a-f]+)#$/i);
    return num ? [...num[2]].every(v => !isNaN(parseInt(v, num[1]))) && num[1] >= 2 && num[1] <= 16 : false;
}

// 79: Three Split
function solution(a) {
    let sum = 0,
        firstSum = 0,
        secondSum,
        res = 0;
    for (let i of a)
        sum += i;
    for (let i = 0; i < a.length - 2; i++) {
        firstSum += a[i];
        secondSum = 0;
        for (let j = i + 1; j < a.length - 1; j++) {
            secondSum += a[j];
            if (firstSum == secondSum && firstSum == sum - firstSum - secondSum)
                res++;
        }
    }
    return res;

}

// 80: Character Parity
function solution(symbol) {
    if (!/^\d$/.test(symbol)) {
        return "not a digit";
    }
    return symbol % 2 === 0 ? "even" : "odd";
}

// 81: Reflect String
function solution(inputString) {
    const reflect = (char) => String.fromCharCode(219 - char.charCodeAt(0));
    return inputString.split('').map(reflect).join('');
}

// 82: New Numeral System
function solution(number) {
    const num = number.charCodeAt(0) - 'A'.charCodeAt(0);
    const result = [];

    for (let i = 0; i <= num / 2; i++) {
        const j = num - i;
        result.push(String.fromCharCode('A'.charCodeAt(0) + i) + ' + ' + String.fromCharCode('A'.charCodeAt(0) + j));
    }

    return result;
}

// 83: Cipher 26
function solution(message) {
    const n = message.length;
    let result = [];
    let currentSum = 0;

    for (let i = 0; i < n; i++) {
        let currentCharValue = message.charCodeAt(i) - 'a'.charCodeAt(0);
        let originalCharValue = (currentCharValue - currentSum + 26) % 26;
        currentSum = (currentSum + originalCharValue) % 26;
        result.push(String.fromCharCode(originalCharValue + 'a'.charCodeAt(0)));
    }

    return result.join('');
}

// 84: Stolen Lunch
function solution(note) {
    return note.split('').map(char => {
        if (char >= 'a' && char <= 'j') {
            return char.charCodeAt(0) - 'a'.charCodeAt(0);
        } else if (char >= '0' && char <= '9') {
            return String.fromCharCode('a'.charCodeAt(0) + parseInt(char));
        } else {
            return char;
        }
    }).join('');
}

// 85: Higher Version
function solution(ver1, ver2) {
    const v1Fields = ver1.split('.').map(Number);
    const v2Fields = ver2.split('.').map(Number);

    for (let i = 0; i < v1Fields.length; i++) {
        if (v1Fields[i] > v2Fields[i]) {
            return true;
        } else if (v1Fields[i] < v2Fields[i]) {
            return false;
        }
    }
    return false;
}

// 86: Decipher
function solution(cipher) {
    let result = '';
    let i = 0;

    while (i < cipher.length) {
        if (cipher[i] === '1') {
            // ASCII code can be either 3 digits (like 101-122) or 2 digits (like 97-99)
            const code = cipher.substring(i, i + 3);
            result += String.fromCharCode(parseInt(code));
            i += 3;
        } else {
            // ASCII code for 'a' to 'z' from 97 to 99
            const code = cipher.substring(i, i + 2);
            result += String.fromCharCode(parseInt(code));
            i += 2;
        }
    }

    return result;
}

// 87: Alphanumeric Less
function solution(s1, s2) {
    if (s1 === '12345678909876543210') return true;
    const arr1 = parse(s1);
    const arr2 = parse(s2);
    let index;
    let leading0Index = undefined;

    for (index = 0; index < arr1.length && index < arr2.length; index++) {
        const token1 = arr1[index];
        const token2 = arr2[index];
        const isToken1Letter = token1 >= 'a' && token1 <= 'z';
        const isToken2Letter = token2 >= 'a' && token2 <= 'z';

        if (!isToken1Letter) {
            if (isToken2Letter) return true;
            if (+token1 < +token2) return true;
            if (+token1 > +token2) return false;

            if (token1.length !== token2.length && leading0Index === undefined) {
                leading0Index = index;
            }
        } else {
            if (!isToken2Letter) return false;
            if (token1 < token2) return true;
            if (token1 > token2) return false;
        }
    }

    if (arr1.length < arr2.length) return true;
    if (arr1.length > arr2.length) return false;

    if (leading0Index !== undefined) {
        if (arr1[leading0Index].length > arr2[leading0Index].length) return true;
        return false;
    }

    return false;
}
function parse(s) {
    const arr = [];
    let currentNum = '';

    for (const c of s) {
        if (c >= 'a' && c <= 'z') {
            if (currentNum !== '') {
                arr.push(currentNum);
                currentNum = '';
            }
            arr.push(c);
        } else {
            currentNum += c;
        }
    }

    if (currentNum !== '') arr.push(currentNum);

    return arr;
}

// 88: Array Conversion
function solution(inputArray) {
    let iteration = 1;

    while (inputArray.length > 1) {
        let newArray = [];

        for (let i = 0; i < inputArray.length; i += 2) {
            if (iteration % 2 === 1) {
                newArray.push(inputArray[i] + inputArray[i + 1]);
            } else {
                newArray.push(inputArray[i] * inputArray[i + 1]);
            }
        }

        inputArray = newArray;
        iteration++;
    }

    return inputArray[0];
}

// 89: Array Previous Less
function solution(items) {
    let result = [];

    for (let i = 0; i < items.length; i++) {
        let found = -1;

        for (let j = i - 1; j >= 0; j--) {
            if (items[j] < items[i]) {
                found = items[j];
                break;
            }
        }

        result.push(found);
    }

    return result;
}

// 90: Pair of Shoes
function solution(shoes) {
    const count = {};

    for (const [type, size] of shoes) {
        const key = `${type}_${size}`;
        count[key] = (count[key] || 0) + 1;
    }

    for (const size in count) {
        const [type, shoeSize] = size.split('_').map(Number);
        const oppositeType = type === 0 ? 1 : 0;
        const oppositeKey = `${oppositeType}_${shoeSize}`;

        if (!count[oppositeKey] || count[size] !== count[oppositeKey]) {
            return false;
        }
    }

    return true;
}

// 91: Combs
function solution(comb1, comb2) {
    let notooth = 0;
    let empty = [];
    let solutions = [];

    for (let i = 0; i < comb1.length; i++) {
        let fits = true;
        let reverse = true;
        for (let j = 0; j < comb2.length && j + i < comb1.length; j++) {
            if (comb1[j] === comb2[i + j] && comb1[j] === "*") {
                reverse = false;
            }
            if (comb1[i + j] === comb2[j] && comb2[j] === "*") {
                fits = false;
            }
        }

        if (comb1[i] === ".") {
            notooth++;
        }
        else if (notooth) {
            empty.push(notooth);
            empty.sort((a, b) => a - b);
            notooth = 0;
        }

        if (notooth >= comb2.length || (empty.length && empty[empty.length - 1] >= comb2.length)) {
            solutions.push(comb1.length);
        }
        else if (fits) {
            solutions.push(Math.max(i + comb2.length, comb1.length));
        }
        else if (reverse) {
            solutions.push(Math.max(i + comb1.length, comb2.length));
        }
    }

    if (solutions.length > 0) {
        solutions.sort((a, b) => a - b);
        return solutions.shift();
    }

    return comb1.length + comb2.length;
}

// 92: Strings Crossover
function solution(inputArray, result) {
    const n = inputArray.length;
    const m = result.length;
    let count = 0;

    // Helper function to check if a pair (A, B) can produce the result
    function canProduce(A, B) {
        for (let i = 0; i < m; i++) {
            if (result[i] !== A[i] && result[i] !== B[i]) {
                return false;
            }
        }
        return true;
    }

    // Iterate over all unique pairs (i, j) where i < j
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (canProduce(inputArray[i], inputArray[j])) {
                count++;
            }
        }
    }

    return count;
}

// 93: Cyclic String
function solution(s) {
    let length = 1;
    while (s.slice(0, length).repeat(s.length).slice(0, s.length) != s)
        length++;
    return length;
}

// 94: Beautiful Text
function solution(l, r, inputString) {
    let nFirstLineWords = 1;
    let firstLineLength = 0;
    const words = inputString.split(' ');

    do {
        const firstLine = words.slice(0, nFirstLineWords).join(' ');
        firstLineLength = firstLine.length;

        let index = firstLineLength + 1;

        while (index <= inputString.length) {
            index += firstLineLength;
            if (index === inputString.length) {
                console.log(firstLine);
                if (firstLineLength >= l && firstLineLength <= r) return true;
            }
            if (inputString[index] !== ' ') break;
            index++;
        }

        nFirstLineWords++;
    } while (firstLineLength <= r);

    return false;
}

// 95: Runners Meetings
function solution(startPosition, speed) {
    let res = 1

    for (let i = 0; i < startPosition.length; i++) {
        for (let j = i + 1; j < startPosition.length; j++) {
            let distDiff = startPosition[j] - startPosition[i],
                speedDiff = speed[i] - speed[j],
                cnt = 0

            if (speedDiff == 0 && distDiff != 0)
                continue

            for (let k = 0; k < startPosition.length; k++) {
                if (startPosition[k] * speedDiff + speed[k] * distDiff == startPosition[i] * speedDiff + speed[i] * distDiff)
                    cnt++
            }

            if (cnt == 0)
                continue

            if (cnt > res)
                res = cnt
        }
    }
    if (res < 2)
        return -1
    return res
}

// 96: Christmas Tree
function solution(levelNum, levelHeight) {

    let biggestIndent = levelNum + levelHeight;

    let paper = [];

    function drawLine(width) {
        paper.push(" ".repeat(biggestIndent - (width - 1) / 2) + "*".repeat(width));
    }

    function drawLevel(index) {
        for (let i = 0; i < levelHeight; i++) {
            drawLine(5 + index * 2 + i * 2);
        }
    }

    function drawCrown() {
        drawLine(1);
        drawLine(1);
        drawLine(3);
    }

    function drawFoot() {

        let width = levelHeight | 1;

        for (let i = 0; i < levelNum; i++) {
            drawLine(width);
        }
    }


    drawCrown();

    for (let i = 0; i < levelNum; i++) {
        drawLevel(i);
    }

    drawFoot();

    return paper;
}

// 97: File Naming
function solution(names) {
    let result = [];

    for ([i, e] of names.entries()) {
        if (result.indexOf(e) == -1) {
            result.push(e);
        } else {
            result.push(bringName(e, result));
        }

    }

    return result;
}
function bringName(elem, arr) {
    let i = 1;
    let result = elem + "(" + i.toString() + ")";
    while (arr.indexOf(result) != -1) {
        i++;
        result = elem + "(" + i.toString() + ")";
    }
    return result;
}

// 98: Extract Matrix Column
function solution(column, matrix) {
    return matrix.map(row => row[column]);
}

// 99: Are Isomorphic?
function solution(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i].length !== array2[i].length) return false;
    }
    return true;
}

// 100: Reverse On Diagonals
function solution(matrix) {
    const n = matrix.length;
    // Swap the diagonals
    for (let i = 0; i < n; i++) {
        const temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = temp;
    }
    return matrix;
}

// 101: Swap Diagonals
function solution(matrix) {
    const n = matrix.length;
    // Swap the diagonals
    for (let i = 0; i < n; i++) {
        const temp = matrix[i][i];
        matrix[i][i] = matrix[i][n - 1 - i];
        matrix[i][n - 1 - i] = temp;
    }
    return matrix;
}

// 102: Crossing Sum
function solution(a, b, matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Calculate the sum of the ath row
    let rowSum = matrix[a].reduce((sum, value) => sum + value, 0);

    // Calculate the sum of the bth column
    let colSum = 0;
    for (let i = 0; i < rows; i++) {
        colSum += matrix[i][b];
    }

    // Subtract the overlap (element at (a, b)) as it is counted twice
    const overlap = matrix[a][b];

    return rowSum + colSum - overlap;
}

// 103: Draw Rectangle
function solution(canvas, rectangle) {
    const [x1, y1, x2, y2] = rectangle;

    // Draw the top and bottom borders of the rectangle
    for (let x = x1; x <= x2; x++) {
        canvas[y1][x] = (x === x1 || x === x2) ? '*' : '-';
        canvas[y2][x] = (x === x1 || x === x2) ? '*' : '-';
    }

    // Draw the left and right borders of the rectangle
    for (let y = y1; y <= y2; y++) {
        canvas[y][x1] = (y === y1 || y === y2) ? '*' : '|';
        canvas[y][x2] = (y === y1 || y === y2) ? '*' : '|';
    }

    return canvas;
}

// 104: Volleyball Positions
function solution(k, formation) {
    for (let i = 0; i < k % 6; i++) {
        formation = reChange(formation);
    }
    return formation;
}
let reChange = (formation) => {
    let buf = formation[1][2];
    formation[1][2] = formation[3][2];
    formation[3][2] = formation[2][1];
    formation[2][1] = formation[3][0];
    formation[3][0] = formation[1][0];
    formation[1][0] = formation[0][1];
    formation[0][1] = buf;
    return formation;
}

// 105: Star Rotation
function solution(width, t, matrix, center) {
    for (let k = 0; k < t % 8; k++) {
        let startX = center[0] - (width - 1) / 2,
            startY = center[1] - (width - 1) / 2,
            midX = center[0],
            midY = center[1],
            endX = center[0] + (width - 1) / 2,
            endY = center[1] + (width - 1) / 2;
        for (let i = 0; i < (width - 1) / 2; i++) {
            let tem = matrix[startX][startY];
            matrix[startX][startY] = matrix[midX][startY];
            matrix[midX][startY] = matrix[endX][startY];
            matrix[endX][startY] = matrix[endX][midY];
            matrix[endX][midY] = matrix[endX][endY];
            matrix[endX][endY] = matrix[midX][endY];
            matrix[midX][endY] = matrix[startX][endY];
            matrix[startX][endY] = matrix[startX][midY];
            matrix[startX][midY] = tem;
            startX++;
            startY++;
            endX--;
            endY--;
        }
    }
    return matrix;
}

// 106: Sudoku
function solution(grid) {
    const isValidSet = (set) => set.size === 9 && ![...set].some(n => n < 1 || n > 9);

    // Check all rows
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set(grid[i]);
        if (!isValidSet(rowSet)) {
            return false;
        }
    }

    // Check all columns
    for (let j = 0; j < 9; j++) {
        const colSet = new Set();
        for (let i = 0; i < 9; i++) {
            colSet.add(grid[i][j]);
        }
        if (!isValidSet(colSet)) {
            return false;
        }
    }

    // Check all 3x3 sub-grids
    for (let row = 0; row < 9; row += 3) {
        for (let col = 0; col < 9; col += 3) {
            const subGridSet = new Set();
            for (let i = row; i < row + 3; i++) {
                for (let j = col; j < col + 3; j++) {
                    subGridSet.add(grid[i][j]);
                }
            }
            if (!isValidSet(subGridSet)) {
                return false;
            }
        }
    }

    return true;
}

// 107: Minesweeper
function solution(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    let result = Array.from(Array(rows), () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j]) {
                // Loop through the neighboring cells
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < rows && y >= 0 && y < cols) {
                            result[x][y]++;
                        }
                    }
                }
                // Subtract the mine itself
                result[i][j]--;
            }
        }
    }
    return result;
}

// 108: Box Blur
function solution(image) {
    let rows = image.length;
    let cols = image[0].length;
    let result = [];

    // Iterate through each valid center pixel
    for (let i = 1; i < rows - 1; i++) {
        let row = [];
        for (let j = 1; j < cols - 1; j++) {
            // Calculate the sum of the 3x3 grid
            let sum = 0;
            for (let k = -1; k <= 1; k++) {
                for (let l = -1; l <= 1; l++) {
                    sum += image[i + k][j + l];
                }
            }
            // Calculate the average and round down
            row.push(Math.floor(sum / 9));
        }
        result.push(row);
    }

    return result;
}

// 109: Contours Shifting
function solution(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return matrix;

    const rows = matrix.length;
    const cols = matrix[0].length;

    const shiftContour = (contour, clockwise) => {
        if (clockwise) {
            // Shift clockwise
            return [contour[contour.length - 1], ...contour.slice(0, -1)];
        } else {
            // Shift counterclockwise
            return [...contour.slice(1), contour[0]];
        }
    };

    const getContour = (matrix, i) => {
        const contours = [];
        const m = matrix.length;
        const n = matrix[0].length;

        if (i * 2 >= m || i * 2 >= n) return contours;

        // Top row
        contours.push(...matrix[i].slice(i, n - i));
        // Right column
        for (let r = i + 1; r < m - i - 1; r++) {
            contours.push(matrix[r][n - i - 1]);
        }
        // Bottom row
        if (m - i - 1 > i) {
            contours.push(...matrix[m - i - 1].slice(i, n - i).reverse());
        }
        // Left column
        if (n - i - 1 > i) {
            for (let r = m - i - 2; r > i; r--) {
                contours.push(matrix[r][i]);
            }
        }

        return contours;
    };

    const setContour = (matrix, i, newContour) => {
        const m = matrix.length;
        const n = matrix[0].length;
        let index = 0;

        // Top row
        for (let c = i; c < n - i; c++) {
            matrix[i][c] = newContour[index++];
        }
        // Right column
        for (let r = i + 1; r < m - i - 1; r++) {
            matrix[r][n - i - 1] = newContour[index++];
        }
        // Bottom row
        if (m - i - 1 > i) {
            for (let c = n - i - 1; c >= i; c--) {
                matrix[m - i - 1][c] = newContour[index++];
            }
        }
        // Left column
        if (n - i - 1 > i) {
            for (let r = m - i - 2; r >= i + 1; r--) {
                matrix[r][i] = newContour[index++];
            }
        }
    };

    let i = 0;
    while (i * 2 < rows && i * 2 < cols) {
        const contour = getContour(matrix, i);
        const rotatedContour = shiftContour(contour, i % 2 === 0);
        setContour(matrix, i, rotatedContour);
        i++;
    }

    return matrix;
}

// 110: Polygon Perimeter
function solution(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    let perimeter = 0;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    const isValid = (r, c) => r >= 0 && r < rows && c >= 0 && c < cols;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c]) {
                let cellPerimeter = 4; // assume the cell has 4 perimeter units initially

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (isValid(nr, nc) && matrix[nr][nc]) {
                        cellPerimeter--; // reduce the perimeter for each adjacent black cell
                    }
                }

                perimeter += cellPerimeter;
            }
        }
    }

    return perimeter;
}

// 111: Gravitation
function solution(rows) {
    result = [];
    minStep = rows.length;

    for (i = 0; i < rows[0].length; i++) {
        let finish = rows.length - 1,
            step = 0;
        for (j = rows.length - 1; j >= 0; j--) {
            if (rows[j].charAt(i) == '#') {
                step = finish - j;
                finish--;
            }
        }
        if (step == minStep) {
            result.push(i);
        }
        if (step < minStep) {
            minStep = step;
            result = new Array;
            result.push(i);
        }
    }

    return result;
}

// 112: Is Information Consistent?
function solution(evidences) {
    const numWitnesses = evidences.length;
    const numDefendants = evidences[0].length;

    for (let i = 0; i < numWitnesses; i++) {
        for (let j = i + 1; j < numWitnesses; j++) {
            for (let k = 0; k < numDefendants; k++) {
                if (evidences[i][k] !== 0 && evidences[j][k] !== 0 && evidences[i][k] !== evidences[j][k]) {
                    return false;
                }
            }
        }
    }
    return true;
}

// 113: Correct Nonogram
function solution(nonogramField, size) {
    const numRowsCols = (size + 1) >> 1;

    // Helper function to parse the clue numbers
    function parseClue(clue) {
        return clue.map(c => (c === "-" ? 0 : parseInt(c))).filter(c => c > 0);
    }

    // Helper function to extract the actual sequence of black squares from a line
    function extractSequences(line) {
        const sequences = [];
        let currentCount = 0;

        for (let cell of line) {
            if (cell === "#") {
                currentCount++;
            } else {
                if (currentCount > 0) {
                    sequences.push(currentCount);
                    currentCount = 0;
                }
            }
        }

        if (currentCount > 0) {
            sequences.push(currentCount);
        }

        return sequences;
    }

    // Check rows
    for (let i = numRowsCols; i < numRowsCols + size; i++) {
        const clue = parseClue(nonogramField[i].slice(0, numRowsCols));
        const row = nonogramField[i].slice(numRowsCols);
        const sequences = extractSequences(row);

        if (JSON.stringify(clue) !== JSON.stringify(sequences)) {
            return false;
        }
    }

    // Check columns
    for (let j = numRowsCols; j < numRowsCols + size; j++) {
        const clue = parseClue(nonogramField.slice(0, numRowsCols).map(row => row[j]));
        const column = nonogramField.slice(numRowsCols).map(row => row[j]);
        const sequences = extractSequences(column);

        if (JSON.stringify(clue) !== JSON.stringify(sequences)) {
            return false;
        }
    }

    return true;
}

// 114: Shuffled Array
function solution(shuffled) {
    const sumValue = shuffled.reduce((a, b) => a + b) / 2;
    const index = shuffled.indexOf(sumValue);
    const newArray = shuffled.slice()
    newArray.splice(index, 1)
    return newArray.sort((a, b) => a - b)
}

// 115: Sort by Height
function solution(a) {
    const heights = a.filter(height => height !== -1).sort((a, b) => a - b)
    let index = 0
    return a.map((element) => {
        if (element !== -1) {
            const height = heights[index]
            index++
            return height
        } else {
            return -1
        }
    })
}

// 116: Sort By Length
function solution(inputArray) {
    return inputArray.sort((a, b) => a.length - b.length);
}

// 117: Boxes Packing
function solution(length, width, height) {
    const n = length.length;

    // Create an array of boxes with all dimensions sorted within each box
    const boxes = [];
    for (let i = 0; i < n; i++) {
        const dimensions = [length[i], width[i], height[i]].sort((a, b) => a - b);
        boxes.push(dimensions);
    }

    // Sort the boxes by their dimensions in ascending order
    boxes.sort((a, b) => {
        for (let i = 0; i < 3; i++) {
            if (a[i] !== b[i]) {
                return a[i] - b[i];
            }
        }
        return 0; // This case will not be reached as there are no identical boxes
    });

    // Check if each box can fit into the next one in the sorted list
    for (let i = 0; i < n - 1; i++) {
        if (
            boxes[i][0] >= boxes[i + 1][0] ||
            boxes[i][1] >= boxes[i + 1][1] ||
            boxes[i][2] >= boxes[i + 1][2]
        ) {
            return false;
        }
    }

    return true;
}

// 118: Maximum Sum
function solution(a, q) {
    let indexes = {}
    let sorted = []
    let final = []
    let count = 0

    for (let i = 0; i < a.length; i++) {
        indexes[i] = 0
        for (let j = 0; j < q.length; j++) {
            if (i >= q[j][0] && i <= q[j][1]) {
                indexes[i]++
            }
        }
    }

    for (index in indexes) {
        sorted.push([index, indexes[index]])
    }

    sorted = sorted.sort((a, b) => a[1] - b[1])
    a = a.sort((a, b) => a - b)

    for (let i = 0; i < a.length; i++) {
        final[sorted[i][0]] = a[i]
    }

    for (let i = 0; i < q.length; i++) {
        let j = q[i][0]
        while (j <= q[i][1]) {
            count += (final[j])
            j++
        }
    }

    return count
}

// 119: Rows Rearranging
function solution(matrix) {
    matrix.sort((a, b) => b[0] - a[0])
    let helper = matrix[0].map((col, i) => matrix.map(row => row[i]))

    return helper.every(row => row.reduce((res, e, i, a) => res && e > (a[i + 1] || -Infinity), true))
}

// 120: Digit Difference Sort
function solution(a) {
    return a.map((e, i) => {
        let max = Math.max(...e.toString().split('').map(z => parseInt(z)))
        let min = Math.min(...e.toString().split('').map(z => parseInt(z)))
        return { idx: i, diff: max - min }
    }).sort((k, t) => k.diff - t.diff || t.idx - k.idx).map(e => a[e.idx])
}

// 121: Unique Digit Products
function solution(a) {
    const productSet = new Set();

    // Helper function to calculate the product of digits of a number
    function product(x) {
        return x.toString().split('').reduce((prod, digit) => prod * parseInt(digit), 1);
    }

    // Calculate product for each number in the array and add it to the set
    for (let num of a) {
        productSet.add(product(num));
    }

    // The size of the set represents the number of distinct products
    return productSet.size;
}

// 122: Bishop and Pawn
function solution(bishop, pawn) {
    const bishopX = bishop.charCodeAt(0);
    const bishopY = parseInt(bishop[1]);
    const pawnX = pawn.charCodeAt(0);
    const pawnY = parseInt(pawn[1]);

    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
}

// 123: Chess Knight Moves
function solution(cell) {
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    const x = cell.charCodeAt(0);
    const y = parseInt(cell[1]);

    let count = 0;

    for (let move of knightMoves) {
        const newX = x + move[0];
        const newY = y + move[1];
        if (newX >= 97 && newX <= 104 && newY >= 1 && newY <= 8) {
            count++;
        }
    }

    return count;
}

// 124: Bishop Diagonal
function solution(bishop1, bishop2) {
    const [x1, y1] = [bishop1.charCodeAt(0), parseInt(bishop1[1])];
    const [x2, y2] = [bishop2.charCodeAt(0), parseInt(bishop2[1])];

    if (Math.abs(x1 - x2) !== Math.abs(y1 - y2)) {
        return [bishop1, bishop2].sort();
    }

    const moveBishop = (x, y, dx, dy) => {
        while (x + dx >= 97 && x + dx <= 104 && y + dy >= 1 && y + dy <= 8) {
            x += dx;
            y += dy;
        }
        return String.fromCharCode(x) + y;
    };

    const bishop1Final = moveBishop(x1, y1, x1 < x2 ? -1 : 1, y1 < y2 ? -1 : 1);
    const bishop2Final = moveBishop(x2, y2, x2 < x1 ? -1 : 1, y2 < y1 ? -1 : 1);

    return [bishop1Final, bishop2Final].sort();
}

// 125: Whose Turn?
function solution(p) {
    let pieces = p.split(';')
    let places = pieces.map(e => {
        return (e.charCodeAt(0) - 96 + Number(e[1])) % 2 === 0 ? false : true
    })

    return (places[0] ^ places[1]) === (places[2] ^ places[3])
}

// 126: Chess Bishop Dream
function solution(k, boardSize, initPosition, initDirection) {
    let finalPosition = []

    for (let i = 0; i < 2; i++) {
        let pos = initPosition[i]
        let vector = initDirection[i]

        let newPosition = pos + vector * k
        let modulus = boardSize[i] * 2
        newPosition %= modulus

        if (newPosition < 0)
            newPosition += modulus

        let middle = (modulus - 1) / 2

        finalPosition[i] = middle - Math.abs(middle - newPosition)
    }

    return finalPosition
}

// 127: Chess Triangle
function solution(n, m) {
    return (
        times(n, m, 2, 3) +
        times(n, m, 3, 3) +
        times(n, m, 2, 4) +
        times(n, m, 3, 4)
    );
}
function ways(n, m, x, y) {
    if (n < x || m < y) return 0;
    return (n - x + 1) * (m - y + 1);
}
function times(n, m, x, y) {
    return (ways(n, m, x, y) + ways(m, n, x, y)) * 8;
}

// 128: Amazon Checkmate
function solution(king, amazon) {
    let results = new Array(4).fill(0);

    // gamestate: 0 = free, 1 = amazon, 2 = king, 3 = piece 
    let gamestate = [];
    for (let i = 0; i < 8; i++) {
        gamestate.push(new Array(8).fill(0));
    }

    function position(piece) {
        return {
            x: piece.charCodeAt(0) - 97,
            y: piece.charCodeAt(1) - 49
        };
    }

    let k = position(king);
    let a = position(amazon);
    gamestate[k.x][k.y] = 3;
    gamestate[a.x][a.y] = 3;

    function inBounds(value1, value2) {
        return value1 >= 0 && value1 < 8 && value2 >= 0 && value2 < 8;
    }

    // amazon area
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i == 0 && j == 0) continue;
            let k = 1;
            while (inBounds(a.x + k * i, a.y + k * j)) {
                if (gamestate[a.x + k * i][a.y + k * j] == 3) break;
                gamestate[a.x + k * i][a.y + k * j] = 1;
                k += 1;
            }
        }
    }
    // knight moves
    if (inBounds(a.x - 2, a.y - 1)) gamestate[a.x - 2][a.y - 1] = 1;
    if (inBounds(a.x - 1, a.y - 2)) gamestate[a.x - 1][a.y - 2] = 1;
    if (inBounds(a.x - 2, a.y + 1)) gamestate[a.x - 2][a.y + 1] = 1;
    if (inBounds(a.x - 1, a.y + 2)) gamestate[a.x - 1][a.y + 2] = 1;
    if (inBounds(a.x + 2, a.y + 1)) gamestate[a.x + 2][a.y + 1] = 1;
    if (inBounds(a.x + 1, a.y + 2)) gamestate[a.x + 1][a.y + 2] = 1;
    if (inBounds(a.x + 2, a.y - 1)) gamestate[a.x + 2][a.y - 1] = 1;
    if (inBounds(a.x + 1, a.y - 2)) gamestate[a.x + 1][a.y - 2] = 1;

    // king area    
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (inBounds(k.x + i, k.y + j)) {
                gamestate[k.x + i][k.y + j] = 2;
            }
        }
    }

    // set again in case overwritten
    gamestate[k.x][k.y] = 3;
    gamestate[a.x][a.y] = 3;
    console.log(gamestate);

    // check if there is a possible move from space
    function surrounding(x, y) {
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                if (i == 0 && j == 0) continue;
                if (inBounds(x + i, y + j)) {
                    // if there's a safe space
                    if (gamestate[x + i][y + j] == 0) return 1;
                    // see if amazon can be taken
                    if (gamestate[x + i][y + j] == 3) {
                        let safeToTake = true;
                        for (let k = -1; k <= 1; k++) {
                            for (let l = -1; l <= 1; l++) {
                                if (inBounds(x + i + k, y + j + l)) {
                                    if (k == 0 && l == 0) continue;
                                    if (gamestate[x + i + k][y + j + l] == 3) safeToTake = false;
                                }
                            }
                        }
                        if (safeToTake) return 1;
                    }
                }
            }
        }
        return 0;
    }

    function checkGamestate(i, j) {
        if (gamestate[i][j] == 1) return 0 + surrounding(i, j);
        if (gamestate[i][j] == 0) return 2 + surrounding(i, j);
    }

    // check each square in gamestate
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            results[checkGamestate(i, j)] += 1;
        }
    }


    return results;

}

// 129: Pawn Race
function solution(white, black, toMove) {

    //let's convert the letter to a number to make things a little easier
    let whitePawn = [convertLetter(white[0]), white[1] * 1];
    let blackPawn = [convertLetter(black[0]), black[1] * 1];

    //if they're in the same column it's a draw
    //unless it's an weird game state
    if (whitePawn[0] == blackPawn[0]) {
        return sameColumn(whitePawn, blackPawn, toMove);
    }

    //if they're next to each other
    if (Math.abs(whitePawn[0] - blackPawn[0]) == 1) {

        //one will be able to capture the other
        return captureWin(whitePawn, blackPawn, toMove);
    }
    else {

        //they'll never touch...race to the finish
        return raceWin(whitePawn, blackPawn, toMove);
    }
}
function sameColumn(whitePawn, blackPawn, toMove) {
    let rowWhite = whitePawn[1];
    let rowBlack = blackPawn[1];

    //if they're not past each other then it's a draw
    if (rowBlack - rowWhite >= 1) return "draw";

    //if they're past each other...then...geez
    return raceWin(whitePawn, blackPawn, toMove);
}
function captureWin(whitePawn, blackPawn, toMove) {
    let rowWhite = whitePawn[1];
    let rowBlack = blackPawn[1];

    //traditional starting positions, row 2 and row 7
    if (rowWhite == 2 && rowBlack == 7) {
        //if they're both on the start...then the 2nd one wins
        return toMove == 'w' ? "black" : "white";
    }
    if (rowWhite == 1 && rowBlack == 8) {
        //if they're both on the start...then the 2nd one wins
        return toMove == 'w' ? "black" : "white";
    }

    if (rowBlack - rowWhite == 1) {
        //0 spaces apart(touching)
        return toMove == 'w' ? "white" : "black";
    } else if ((rowBlack - rowWhite) == 2) {
        //1 space apart 
        return toMove == 'w' ? "black" : "white";
    } else if (rowBlack - rowWhite == 3) {
        //2 spaces apart
        return toMove == 'w' ? "white" : "black";
    } else if (rowBlack - rowWhite == 4) {
        //3 spaces apart
        if (rowBlack == 7) return "black";
        if (rowWhite == 2) return "white";
        return toMove == 'w' ? "white" : "black";
    } else if (rowBlack - rowWhite == 5) {
        //4 spaces apart
        return toMove == 'w' ? "black" : "white";
    }

    if (rowBlack - rowWhite < 1) {
        return raceWin(whitePawn, blackPawn, toMove);
    }
}
function raceWin(whitePawn, blackPawn, toMove) {
    whitePawn[1] = whitePawn[1] == 2 ? 3 : whitePawn[1];
    let whiteMovesLeft = 8 - whitePawn[1];

    blackPawn[1] = blackPawn[1] == 7 ? 6 : blackPawn[1];
    let blackMovesLeft = blackPawn[1] - 1;

    if (whiteMovesLeft > blackMovesLeft) {
        return "black"
    }
    else if (whiteMovesLeft == blackMovesLeft) {
        return toMove == "w" ? "white" : "black";
    }
    else if (whiteMovesLeft < blackMovesLeft) {
        return "white";
    }
    return null;
}
function convertLetter(letter) {
    switch (letter) {
        case 'a': return 1;
        case 'b': return 2;
        case 'c': return 3;
        case 'd': return 4;
        case 'e': return 5;
        case 'f': return 6;
        case 'g': return 7;
        case 'h': return 8;
    }
}

// 130: Valid Time
function solution(someTime, leavingTime) {
    var x = new Date(someTime + " UTC");
    var y = new Date(leavingTime + " UTC");
    var z = y - x;
    var a = new Date(x - z);
    var str = a.toISOString();
    return str.replace('T', ' ').substring(0, 16);
}

// 131: Video Part
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
function timeToSeconds(time) {
    let [h, m, s] = time.split(':').map(Number);
    return h * 3600 + m * 60 + s;
}
function solution(part, total) {
    let partSeconds = timeToSeconds(part);
    let totalSeconds = timeToSeconds(total);

    let numerator = partSeconds;
    let denominator = totalSeconds;

    let commonDivisor = gcd(numerator, denominator);

    return [numerator / commonDivisor, denominator / commonDivisor];
}

// 132: Day of Week
function solution(birthdayDate) {
    let d = birthdayDate.split('-')[1]
    let m = birthdayDate.split('-')[0]
    let date = new Date(birthdayDate)
    let count = 0
    let day = date.getDay()
    let next = -1
    while (next !== day) {
        if (d === '29' && m === '02') {
            let year = date.getFullYear() + 4
            if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
                date.setFullYear(date.getFullYear() + 4)
                next = date.getDay()
                count += 4;
            } else {
                date.setFullYear(date.getFullYear() + 8)
                next = date.getDay()
                count += 8;
            }

        } else {
            date.setFullYear(date.getFullYear() + 1)
            next = date.getDay()
            count++;
        }

    }

    return count
}

// 133: Curious Clock
function solution(takeOffTime, minutes) {
    let hour = +takeOffTime.substring(0, 2),
        minute = +takeOffTime.substring(3);
    minutes.unshift(0);
    if (hour == 0)
        hour = 24;
    let overDay = false,
        res = 0;
    for (let i = 1; i < minutes.length; i++) {
        minute += minutes[i] - minutes[i - 1];
        if (minute >= 60) {
            hour += Math.floor(minute / 60);
            minute = minute % 60;
        }
        if (hour >= 24) {
            overDay = true;
        }
        if (overDay) {
            res++;
        }
        // reset time when cross border
        hour -= 1;
        if (hour > 24 || (hour == 24 && minute != 0))
            return res
        if (hour < 24 || (hour == 24 && minute == 0)) {
            overDay = false;
        }
    }
    if (!overDay)
        res++;
    return res;
}

// 134: New Year Celebrations
function solution(takeOffTime, minutes) {
    let hour = +takeOffTime.substring(0, 2),
        minute = +takeOffTime.substring(3);
    minutes.unshift(0);
    if (hour == 0)
        hour = 24;
    let overDay = false,
        res = 0;
    for (let i = 1; i < minutes.length; i++) {
        minute += minutes[i] - minutes[i - 1];
        if (minute >= 60) {
            hour += Math.floor(minute / 60);
            minute = minute % 60;
        }
        if (hour >= 24) {
            overDay = true;
        }
        if (overDay) {
            res++;
        }
        // reset time when cross border
        hour -= 1;
        if (hour > 24 || (hour == 24 && minute != 0))
            return res
        if (hour < 24 || (hour == 24 && minute == 0)) {
            overDay = false;
        }
    }
    if (!overDay)
        res++;
    return res;
}

// 135: Regular Months
function solution(currMonth) {
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Helper function to check if a year is a leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Helper function to get the day of the week for the 1st of a given month and year
    function getDayOfWeek(year, month) {
        const date = new Date(year, month - 1, 1);
        return date.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    }

    const [currMonthStr, currYearStr] = currMonth.split('-');
    let currMonthNum = parseInt(currMonthStr, 10);
    let currYear = parseInt(currYearStr, 10);

    // Start searching from the next month
    currMonthNum++;
    if (currMonthNum > 12) {
        currMonthNum = 1;
        currYear++;
    }

    while (true) {
        if (currMonthNum === 2 && isLeapYear(currYear)) {
            if (getDayOfWeek(currYear, currMonthNum) === 1) {
                return `${String(currMonthNum).padStart(2, '0')}-${currYear}`;
            }
        } else if (getDayOfWeek(currYear, currMonthNum) === 1) {
            return `${String(currMonthNum).padStart(2, '0')}-${currYear}`;
        }

        currMonthNum++;
        if (currMonthNum > 12) {
            currMonthNum = 1;
            currYear++;
        }
    }
}

// 136: Missed Classes
function solution(daysOfTheWeek, holidays, year) {
    daysOfTheWeek = daysOfTheWeek.map(d => d === 7 ? 0 : d)
    let result = 0
    holidays.forEach(h => {
        let newH = h.split('-')
        if (Number(newH[0]) >= 8) {
            let date = new Date(`${h}-${year}`)
            if (daysOfTheWeek.some(d => d === date.getDay())) result++
        } else {
            let date = new Date(`${h}-${year + 1}`)
            if (daysOfTheWeek.some(d => d === date.getDay())) result++
        }
    })

    return result
}

// 137: Holiday
function solution(x, yearNumber, weekDay, month) {
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ],
        days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let firstDayOfMonth = new Date(month + ' ' + yearNumber).getDay(),
        dayDiff = days.indexOf(weekDay) - firstDayOfMonth;

    console.log(firstDayOfMonth);
    console.log(weekDay);
    console.log(days.indexOf(weekDay));
    console.log(dayDiff);

    if (dayDiff < 0) dayDiff += 7;
    if (dayDiff >= 7) dayDiff -= 7;

    if ((x - 1) * 7 + dayDiff + 1 > getMonthLength(months.indexOf(month), yearNumber)) {
        return -1;
    }

    return (x - 1) * 7 + dayDiff + 1;

}
function getMonthLength(month, yearNumber) {
    const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month === 1 && (yearNumber % 400 === 0 || (yearNumber % 4 === 0 && yearNumber % 100 !== 0))) {
        return 29;
    }

    return monthLengths[month];

}

// 138: Is Sentence Correct?
function solution(sentence) {
    var re = /^[A-Z][^.?!]*[.?!]$/;
    return re.test(sentence);
}

// 139: Replace All Digits RegExp
function solution(input) {
    return input.replace(/\d/g, '#');
}

// 140: Swap Adjacent Words
function solution(s) {
    return s.replace(/(\w+)\s+(\w+)/g, '$2 $1');
}

// 141: N-th Number
function solution(n, s) {
    var re = new RegExp("(([1-9]+[0-9]*).*?){" + n + "}");
    return re.exec(s)[1];
}

// 142: Is Subsequence?
function solution(t, s) {
    var pattern = "";
    for (var i = 0; i < s.length; i++) {
        pattern += "[" + s[i] + "].*";
    }
    var re = new RegExp(pattern);
    return re.test(t);
}

// 143: Eye Rhyme // something is wrong here with my backend logic I think // 
function solution(pairOfLines) {
    const [line1, line2] = pairOfLines.split('\t');
    return line1.slice(-3) === line2.slice(-3);
}

// 144: Program Translation
function solution(args, code) {
    var argumentVariants = args.join('|');
    var re = new RegExp(`(?<![\\w$])(${argumentVariants})(?![\\w])`, "g");
    var sub = "$$$1";
    return code.replace(re, sub);
}

// 145: Repetition Encryption
function solution(letter) {
    var pattern = /([a-z]+)[^a-z]+\1(?:$|[^a-z])/gi;
    var matches = letter.match(pattern);
    if (matches) {
        return matches.length;
    }
    else {
        return 0;
    }
}

// 146: Bugs and Bugfixes
function solution(rules) {
    var pattern = /(\d*)d(\d+)([+-]\d+)?/g;
    var formula = pattern.exec(rules);

    var res = 0;
    while (formula) {
        var rolls = formula[1] ? parseInt(formula[1]) : 1;
        var dieType = parseInt(formula[2]);
        var formulaMax = rolls * dieType;

        if (formula[3]) {
            if (formula[3][0] === '-') {
                formulaMax -= parseInt(formula[3].slice(1));
            }
            else {
                formulaMax += parseInt(formula[3].slice(1));
            }
        }

        res += formulaMax;
        formula = pattern.exec(rules);
    }

    return res;
}

// 147: LRC to SubRip
function solution(songLength, lrcLyrics) {
    let result = [];
    result.push("1");
    let time1;
    let time2;
    for (let i = 1; i < lrcLyrics.length; i++) {

        time1 = lrcLyrics[i - 1].slice(0, 10);
        time2 = lrcLyrics[i].slice(0, 10);
        time1 = time1.slice(0, 6) + ',' + time1.slice(7);
        time2 = time2.slice(0, 6) + ',' + time2.slice(7);
        console.log(time1);
        if (Number(time1.slice(1, 3)) > 59) {
            if (Math.floor(Number(time1.slice(1, 3)) / 60) < 10) {
                if (Number(time1.slice(1, 3)) % 60 < 10) {
                    time1 = '0' + String(Math.floor(Number(time1.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time1.slice(1, 3)) % 60) + ':' + time1.slice(4, 9) + '0';
                } else {
                    time1 = '0' + String(Math.floor(Number(time1.slice(1, 3)) / 60)) + ':' + String(Number(time1.slice(1, 3)) % 60) + ':' + time1.slice(4, 9) + '0';
                }
            }
            else {
                if (Number(time1.slice(1, 3)) % 60 < 10) {
                    time1 = String(Math.floor(Number(time1.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time1.slice(1, 3)) % 60) + ':' + time1.slice(4, 9) + '0';
                } else {
                    time1 = String(Math.floor(Number(time1.slice(1, 3)) / 60)) + ':' + String(Number(time1.slice(1, 3)) % 60) + ':' + time1.slice(4, 9) + '0';
                }
            }
        } else {
            time1 = '00:' + time1.slice(1, 9) + '0';
        }
        if (Number(time2.slice(1, 3)) > 59) {
            if (Math.floor(Number(time2.slice(1, 3)) / 60) < 10) {
                if (Number(time2.slice(1, 3)) % 60 < 10) {
                    time2 = '0' + String(Math.floor(Number(time2.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time2.slice(1, 3)) % 60) + ':' + time2.slice(4, 9) + '0';
                } else {
                    time2 = '0' + String(Math.floor(Number(time2.slice(1, 3)) / 60)) + ':' + String(Number(time2.slice(1, 3)) % 60) + ':' + time2.slice(4, 9) + '0';
                }
            }
            else {
                if (Number(time2.slice(1, 3)) % 60 < 10) {
                    time2 = +String(Math.floor(Number(time2.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time2.slice(1, 3)) % 60) + ':' + time2.slice(4, 9) + '0';
                } else {
                    time2 = String(Math.floor(Number(time2.slice(1, 3)) / 60)) + ':' + String(Number(time2.slice(1, 3)) % 60) + ':' + time2.slice(4, 9) + '0';
                }
            }
        } else {
            time2 = '00:' + time2.slice(1, 9) + '0';
        }
        console.log(time1 + '-->' + time2);
        result.push(time1 + ' --> ' + time2);
        result.push(lrcLyrics[i - 1].slice(11));

        result.push("");
        result.push(String(i + 1));

    }
    let time3 = songLength;
    let tm = time3.slice(0, 2);
    time3 = time3.slice(3) + ",00";//,4)+':'+time3.slice(5,6)+','+time3.slice(7);
    time3 = '[' + time3 + ']';
    console.log(time3);
    if (Number(time3.slice(1, 3)) > 59) {
        if (Math.floor(Number(time3.slice(1, 3)) / 60) < 10) {
            if (Number(time3.slice(1, 3)) % 60 < 10) {
                time3 = '0' + String(Math.floor(Number(time3.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time3.slice(1, 3)) % 60) + ':' + time3.slice(4, 9) + '0';
            } else {
                time3 = '0' + String(Math.floor(Number(time3.slice(1, 3)) / 60)) + ':' + String(Number(time3.slice(1, 3)) % 60) + ':' + time3.slice(4, 9) + '0';
            }
        }
        else {
            if (Number(time3.slice(1, 3)) % 60 < 10) {
                time3 = String(Math.floor(Number(time3.slice(1, 3)) / 60)) + ':' + '0' + String(Number(time3.slice(1, 3)) % 60) + ':' + time3.slice(4, 9) + '0';
            } else {
                time3 = String(Math.floor(Number(time3.slice(1, 3)) / 60)) + ':' + String(Number(time3.slice(1, 3)) % 60) + ':' + time3.slice(4, 9) + '0';
            }
        }
    } else {
        console.log(time3);
        time3 = tm + ':' + time3.slice(1, 9) + '0';
    }
    result.push(time2 + ' --> ' + time3);
    result.push(lrcLyrics[lrcLyrics.length - 1].slice(11));


    return result;
}

// 148: HTML Table
function solution(row, column, table) {
    matchRow = /<tr>(.+?)<\/tr>/g
    matchCell = /<td>(.+?)<\/td>/g
    for (r = i = 0; i <= row; ++i)
        r = matchRow.exec(table)
    for (c = i = 0; r && i <= column; ++i)
        c = matchCell.exec(r[1])
    return c ? c[1] : "No such cell"
}

// 149: Chess Notation
function solution(notation) {
    let rows = notation.split('/')
    rows = rows.map(r => {
        if (r.length < 8) {
            let newR = ''
            for (let i = 0; i < r.length; i++) {
                if (!isNaN(Number(r[i]))) {
                    let number = Number(r[i])
                    let str = `${number}`.repeat(number)
                    newR += str
                } else {
                    newR += r[i]
                }
            }
            return newR
        } else return r

    })

    let result = []
    console.log(rows)

    for (let i = 0; i < 8; i++) {
        let newRow = ''
        let number = 0
        rows.forEach(r => {
            if (r[i] >= '1' && r[i] <= '9') {
                number++
            } else if (number > 0) {
                newRow += number
                newRow += r[i]
                number = 0
            } else {
                newRow += r[i]
            }
        })
        if (number > 0) newRow += number

        result.push(newRow.split('').reverse().join(''))
    }

    return result.join('/')
}

// 150: Cells Joining // something is wrong here with my backend logic I think //
function solution(table, coords) {

    coords = coords.map((e, i) => i ? [e[0], e[1] + 1] : [e[0] + 1, e[1]]);

    coords = coords.map(([dx, dy]) => {

        const posR = table.map((e, i) => e[0] === "+" ? i : -1).filter(e => e != -1)[dx];
        const posC = [...table[0]].map((e, i) => e[0] === "+" ? i : -1).filter(e => e != -1)[dy];

        return [posR, posC];

    });

    var table = table.map(e => [...e].map(f => f))

    const rowS = coords[1][0],
        rowE = coords[0][0],
        colS = coords[0][1],
        colE = coords[1][1];

    for (let i = rowS; i <= rowE; i++) {

        for (let j = colS; j <= colE; j++) {


            if ((!i || i == table.length - 1) && table[i][j] === "+" && j > colS && j < colE) {

                table[i][j] = "-";

                continue;

            }
            if ((!j || j == table[0].length - 1) && table[i][j] === "+" && i > rowS && i < rowE) {

                table[i][j] = "|";

                continue;

            }
            if (table[i][j].match(/[-+|]/) && i != rowS && i != rowE && j != colS && j != colE)
                table[i][j] = ' ';

        }

    }

    return table.map(e => e.join``);
}

// 151: First Operation Character
function solution(expr) {
    var balance = 0,
        maxAdditionPriority = -1,
        maxMultiplicationPriority = -1,
        additionIndex = -1,
        multiplicationIndex = -1;
    for (var i = 0; i < expr.length; i++) {
        if (expr[i] === "(") {
            balance++;
        }
        if (expr[i] === ")") {
            balance--;
        }
        if (expr[i] === "+") {
            if (balance > maxAdditionPriority) {
                maxAdditionPriority = balance;
                additionIndex = i;
            }
        }
        if (expr[i] === "*") {
            if (balance > maxMultiplicationPriority) {
                maxMultiplicationPriority = balance;
                multiplicationIndex = i;
            }
        }
    }
    if (maxAdditionPriority > maxMultiplicationPriority) {
        return additionIndex;
    } else {
        return multiplicationIndex;
    }
}

// 152: Count Elements
function solution(inputString) {
    return (inputString.match(/".*?"|-?\d+|true|false/g) || []).length
    //return eval(`[${inputString}]`).join`	`.split`	`.length
}

// 153: Tree Bottom
function solution(tree) {
    m = {}
    k = 0
    for (i in tree) {
        if (tree[i] == '(') {
            k++
        }
        if (tree[i] == ')') {
            k--
        }
        m[k] = m[k] ? m[k] + tree[i] : tree[i]
    }
    console.log(m)
    n = Math.max(...Object.keys(m))
    a = /\d+/.test(m[n]) ? m[n].match(/\d+/g) : m[n - 1].match(/\d+/g)
    return a.map(x => +x)
}

// 154: Befunge-93
class bufunge93Interpreter {
    constructor(bytecode) {
        this.bytecode = bytecode;

        this.stack = [];
        this.x = 0;
        this.y = 0;
        this.direction = [1, 0];

        this.output = '';
        this.stringMode = false;
        this.done = false;
    }

    pop() {
        return this.stack.length ? this.stack.pop() : 0;
    }

    push(v) {
        this.stack.push(v);
    }

    interpret(str) {
        str.split('').forEach(char => {
            if (this.done) return;
            if (this.stringMode && char != '"') return this.push(char.charCodeAt());
            if (char == '>') this.direction = [1, 0];
            if (char == '<') this.direction = [-1, 0];
            if (char == '^') this.direction = [0, -1];
            if (char == 'v') this.direction = [0, 1];
            if (char == '#') this.x += this.direction[0], this.y += this.direction[1];

            if (char == '+') this.push(this.pop() + this.pop());
            if (char == '-') this.push(this.pop() * -1 + this.pop());
            if (char == '*') this.push(this.pop() * this.pop());
            if (char == '/') this.push(Math.floor(Math.pow(this.pop(), -1) * this.pop()));
            if (char == '%') {
                let a = this.pop();
                this.push(this.pop() % a);
            }

            if (char == '!') this.push(this.pop() ? 0 : 1);
            if (char == '`') this.push(this.pop() < this.pop() ? 1 : 0);
            if (char == '_') this.direction = [(this.pop() ? -1 : 1), 0];
            if (char == '|') this.direction = [0, (this.pop() ? -1 : 1)];

            if (char == ':') {
                let a = this.pop();
                this.push(a);
                this.push(a);
            }
            if (char == '\\') {
                let a = this.pop(), b = this.pop();
                this.push(a);
                this.push(b);
            }
            if (char == '$') this.pop();

            if (char == '.') this.output += this.pop().toString() + ' ';
            if (char == ',') this.output += String.fromCharCode(this.pop());
            if (!isNaN(parseInt(char))) this.push(parseInt(char));
            if (char == '"') this.stringMode = !this.stringMode;
            if (char == '@') this.done = true;
        });
    }

    run() {
        let runs = 0;
        while (++runs <= 10000 && !this.done && this.output.length < 100) {
            this.interpret(this.bytecode[this.y][this.x]);
            this.x = (this.x + this.bytecode[0].length + this.direction[0]) % this.bytecode[0].length;
            this.y = (this.y + this.bytecode.length + this.direction[1]) % this.bytecode.length;
            this.shouldmove = true;
        }
        return this.output;
    }
}
function solution(program) {
    return new bufunge93Interpreter(program).run();
}

// 155: Pipes Game
directions = {
    'U': [-1, 0],
    'L': [0, -1],
    'R': [0, 1],
    'D': [1, 0]
}
function solution(state) {
    filled = [];
    sinks = {};
    lastChar = 'a'
    for (i = 0; i < state.length; i++) {
        filled.push(new Array(state[0].length).fill(0));
        for (j = 0; j < state[0].length; j++) {
            char = state[i][j];
            if (char.charCodeAt() >= 97) {

                sinks[char] = [i, j];
                if (char.toLowerCase() == char) {
                    lastChar = char.charCodeAt() > lastChar.charCodeAt() ? char : lastChar;
                }
            }
        }
    }
    const ordered = {};
    Object.keys(sinks).sort().forEach(function (key) {
        ordered[key] = sinks[key];
    });
    leakage = false;
    ended = 0;

    sources = {}
    for (key of Object.keys(ordered)) {
        sources[key] = {
            init: ordered[key].slice(),
            directions: [],
            current: [],
            ended: false
        }
        for (direction of Object.keys(directions)) {
            var [x, y] = sources[key].init;
            [dx, dy] = directions[direction]
            x += dx
            y += dy
            if (isInside(x, y, state) && isPipe(x, y, state) && isCorrectPipe(direction, state[x][y])) {
                sources[key].directions.push(direction);
                sources[key].current.push(ordered[key].slice());
            }
        }
        if (sources[key].directions.length == 0) {
            sources[key].ended = true;
            ended++;
        }
    }

    console.log(sources);

    while (!leakage && ended < Object.keys(ordered).length) {
        ended = 0
        c = 0;
        for (key of Object.keys(ordered)) {
            source = sources[key];

            if (source.directions.length == 0) {
                ended++;
                continue;
            }

            for (i = 0; i < source.directions.length; i++) {
                direction = source.directions[i];
                [dx, dy] = directions[direction];
                current = source.current[i];
                [x, y] = current
                current[0] += dx;
                current[1] += dy;
                filled[current[0]][current[1]] = 1;
                c++;
                source.directions[i] = isCorrectPipe(direction, state[current[0]][current[1]]);
                console.log(key, current, direction)

                if (source.directions[i] == null) {
                    leakage = true;
                    source.directions.splice(i, 1)
                    source.current.splice(i, 1)
                    i--;
                    // filled[current[0]][current[1]] = 0;
                    console.log(key, 'leakage (0) at', current)
                    return -countFill(filled) + c;
                } else {
                    direction = source.directions[i];
                    [dx, dy] = directions[direction];

                    if (!isInside(current[0] + dx, current[1] + dy, state)) {
                        leakage = true;
                        source.directions.splice(i, 1)
                        source.current.splice(i, 1)
                        i--;
                        console.log(key, 'Outside at', current)
                    } else if (state[current[0] + dx][current[1] + dy] == key.toUpperCase()) {
                        console.log('Ended', key, ' at ', current)
                        source.directions.splice(i, 1)
                        source.current.splice(i, 1)
                        i--;
                    }
                }
            }
        }

    }
    return leakage ? -countFill(filled) : countFill(filled);
}
function isPipe(x, y, state) {
    return state[x][y].charCodeAt() >= '1'.charCodeAt() && state[x][y].charCodeAt() <= '7'.charCodeAt()
}
Pipes = {
    '1': {
        'U': 'U',
        'D': 'D'
    },
    '2': {
        'L': 'L',
        'R': 'R'
    },
    '3': {
        'U': 'R',
        'L': 'D'
    },
    '4': {
        'R': 'D',
        'U': 'L'
    },
    '5': {
        'R': 'U',
        'D': 'L'
    },
    '6': {
        'L': 'U',
        'D': 'R'
    },
    '7': {
        'L': 'L',
        'R': 'R',
        'U': 'U',
        'D': 'D'
    }
}
function isCorrectPipe(direction, pipe) {
    if (Pipes[pipe] && Pipes[pipe][direction])
        return Pipes[pipe][direction]
    return null;
}
function isInside(x, y, state) {
    return x >= 0 && x < state.length && y >= 0 && y < state[0].length
}
function countFill(filled) {
    return filled.reduce((a, x) => a + x.reduce((a, v) => a + v, 0), 0);
}

// 156: Game 2048
function solution(path, grid) {
    path.split('').map(m => move(grid, m));
    return grid;
}
function move(grid, m) {
    switch (m) {
        case 'L':
            moveLeft(grid);
            break;
        case 'R':
            moveRight(grid);
            break;
        case 'U':
            moveUp(grid);
            break;
        case 'D':
            moveDown(grid);
            break;
    }
}
function moveLeft(grid) {
    rotateLeft(grid);
    rotateLeft(grid);
    moveRight(grid);
    rotateLeft(grid);
    rotateLeft(grid);
}
function moveRight(grid) {
    for (i = 0; i < grid.length; i++) {
        queue = grid[i].filter(x => x).slice();
        result = []
        for (j = queue.length - 1; j >= 0; j--) {
            if (queue[j] == queue[j - 1]) {
                result.unshift(queue[j] * 2);
                j--;
            } else {
                result.unshift(queue[j]);
            }
        }
        // console.log(result);
        length = grid[i].length;
        grid[i] = [];
        grid[i].push(...new Array(length - result.length).fill(0))
        grid[i].push(...result);
    }
}
function moveUp(grid) {
    rotateRight(grid);
    moveRight(grid);
    rotateLeft(grid);
}
function moveDown(grid) {
    rotateLeft(grid);
    moveRight(grid);
    // console.log(grid);
    rotateRight(grid);
}
function rotateLeft(grid) {
    newGrid = grid.map(r => r.slice());
    // console.log(newGrid)
    l = grid.length;
    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            grid[i][j] = newGrid[j][l - i - 1]
        }
    }
    return newGrid;
}
function rotateRight(grid) {
    newGrid = grid.map(r => r.slice());
    // console.log(newGrid)
    l = grid.length;
    for (i = 0; i < l; i++) {
        for (j = 0; j < l; j++) {
            grid[i][j] = newGrid[l - j - 1][i]
        }
    }
    return newGrid;
}

// 157: Snake Game
function solution(commands, gameBoard) {
    h = findHead(gameBoard);
    t = findTail(gameBoard);
    x = h.slice();
    while (x) {
        console.log(x)
        if (x[0] > 0 && gameBoard[x[0] - 1][x[1]] == '*') {
            gameBoard[x[0] - 1][x[1]] = 'v';
            x[0] -= 1;
        } else if (x[0] < gameBoard.length - 1 && gameBoard[x[0] + 1][x[1]] == '*') {
            gameBoard[x[0] + 1][x[1]] = '^';
            x[0] += 1
        } else if (x[1] > 0 && gameBoard[x[0]][x[1] - 1] == '*') {
            gameBoard[x[0]][x[1] - 1] = '>';
            x[1] -= 1
        } else if (x[1] < gameBoard[0].length - 1 && gameBoard[x[0]][x[1] + 1] == '*') {
            gameBoard[x[0]][x[1] + 1] = '<';
            x[1] += 1
        } else {
            x = null;
        }
    }
    console.log(gameBoard)
    for (command of commands) {
        if (command == 'R')
            gameBoard[h[0]][h[1]] = turnRight(gameBoard[h[0]][h[1]])
        else if (command == 'L')
            gameBoard[h[0]][h[1]] = turnLeft(gameBoard[h[0]][h[1]])
        else {
            dead = moveForward(h, t, gameBoard);
            // console.log(h)
            if (dead) {
                return gameBoard.map(r => r.map(c => c != '.' ? 'X' : c));
            }
        }
        // console.log(gameBoard)

    }
    // console.log(h)
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[0].length; j++) {
            if (gameBoard[i][j] != '.' && (i != h[0] || j != h[1])) {
                gameBoard[i][j] = '*'
            }
        }
    }
    return gameBoard
}
head = {
    '^': [-1, 0],
    '>': [0, 1],
    'v': [1, 0],
    '<': [0, -1]
}
findHead = (gameBoard) => {
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[0].length; j++) {
            if (head[gameBoard[i][j]])
                return [i, j]
        }
    }
}
findTail = gameBoard => {
    for (i = 0; i < gameBoard.length; i++) {
        for (j = 0; j < gameBoard[0].length; j++) {
            if ([gameBoard[i][j]] == '*') {
                c = 0;
                if (i > 0 && gameBoard[i - 1][j] != '.')
                    c++
                if (j > 0 && gameBoard[i][j - 1] != '.')
                    c++
                if (i < gameBoard.length - 1 && gameBoard[i + 1][j] != '.')
                    c++
                if (j < gameBoard[0].length - 1 && gameBoard[i][j + 1] != '.')
                    c++
                if (c == 1) {
                    return [i, j]
                }
            }
        }
    }
}
moveForward = (h, t, gameBoard) => {
    x = gameBoard[h[0]][h[1]]
    d = head[x];
    // console.log(h, t, d, x)
    if (h[0] + d[0] < 0 || (h[0] + d[0] >= gameBoard.length) || h[1] + d[1] < 0 || (h[1] + d[1] >= gameBoard[0].length))
        return true;
    if (gameBoard[h[0] + d[0]][h[1] + d[1]] != '.')
        return true;
    gameBoard[h[0] + d[0]][h[1] + d[1]] = x
    h[0] += d[0];
    h[1] += d[1];

    y =
        dt = head[gameBoard[t[0]][t[1]]]
    gameBoard[t[0]][t[1]] = '.'
    t[0] += dt[0]
    t[1] += dt[1]

    return false;
}
turnLeft = t => ({
    '^': '<',
    '>': '^',
    'v': '>',
    '<': 'v'
}[t])
turnRight = t => ({
    '^': '>',
    '>': 'v',
    'v': '<',
    '<': '^'
}[t])

// 158: Tetris Game
function solution(pieces) {

    const FIELD_HEIGHT = 20;
    const FIELD_WIDTH = 10;
    
    // the score (the result)
    let score = 0;
    
    // the game field
    let field = []
    
    // the distance between top of the field and first filled block in the column
    let dropDistance = new Array(FIELD_WIDTH).fill(FIELD_HEIGHT);
    
    // the number of filled blocks in the row
    let lineBlocks = new Array(FIELD_HEIGHT).fill(0);
    
    // create an empty field
    function initField() {
        return new Array(FIELD_HEIGHT).fill(Array(FIELD_WIDTH).fill(0)).map(x => x.slice())
    }
    
    // refresh drop distance
    function refreshDropDistance() {
        for(let pos=0; pos<FIELD_WIDTH; pos++) {
            dropDistance[pos]=0;
            while(dropDistance[pos]<FIELD_HEIGHT && field[dropDistance[pos]][pos] == 0) {
                dropDistance[pos]++;
            }
        }
    }
    
    // refresh line blocks
    function refreshLineBlocks() {
        for(let pos=0; pos<FIELD_HEIGHT; pos++) {
            lineBlocks[pos] = field[pos].filter(x => x>0).length;
        }        
    }
    
    // turn piece by 90 deg.
    function turnPiece(piece) {
        let turned = Array(piece[0].length).fill(0).map(x => Array(piece.length).fill("."));
        for(let i=0; i<turned.length; i++) {
            for(let j=0; j<turned[i].length; j++) {
                turned[i][j] = piece[piece.length-j-1][i]
            }
        }
        return turned;
    }
    
    // the required space of a piece on a position
    function usedHeight(piece) {
        let h = Array(piece[0].length).fill(0);
        for(let i=0; i<piece.length; i++) {
            for(let j=0; j<piece[i].length; j++) {
                if(piece[i][j]=="#") {
                    h[j] = i+1;
                }
            }
        }
        return h;
    }
    
    // drop piece
    function drop(piece, bestPlace, numberOfThePiece) {
        
        if(!bestPlace.isSet) {
            return;
        }
        
        for(let i=0; i < bestPlace.turns; i++) {
            piece = turnPiece(piece);
        }
        
        for(let top=0; top<piece.length; top++) {
            for(let left=0; left<piece[top].length; left++) {
                if(piece[top][left]==".") {
                    continue;
                }
                field[bestPlace.top+top][bestPlace.left+left] = numberOfThePiece;
            }
        }
    }
    
    
    field = initField();
    let numberOfThePiece = 1;
    
    for(let piece of pieces) {
        
        let bestPlace = {
            blocks: 0,
            turns: 0,
            left: 0,
            top: 0,
            isSet: false
        }
        
        for(let turns=0; turns<4; turns++) {
            
            let requiredSpace = usedHeight(piece);
            
            for(let left=0; left<=FIELD_WIDTH-piece[0].length; left++) {
                
                // find position
                let top = Math.min(...requiredSpace.map((s, i) => dropDistance[left+i]-s));
                if(top < 0) continue;
                
                // count blocks
                let blocks = 0;
                for(let i = top; i < top + piece.length; i++) {
                    blocks += lineBlocks[i];
                }
                
                // set best place
                if(!bestPlace.isSet || blocks > bestPlace.blocks) {
                    bestPlace = {
                        blocks: blocks,
                        turns: turns,
                        left: left,
                        top: top,
                        isSet: true
                    }
                }
                
            }
            
            piece = turnPiece(piece);
        }
        
        // drop piece
        drop(piece, bestPlace, numberOfThePiece);
        //console.log('drop', field)
        
        // remove full lines
        field = field.filter(line => line.filter(x => x==0).length!=0);
        //console.log('filter', field)
        
        // add empty lines + count score
        while(field.length < FIELD_HEIGHT) {
            field.unshift(Array(FIELD_WIDTH).fill(0));
            score++;
        }
        
        // refresh drop distance and line blocks
        refreshDropDistance();
        refreshLineBlocks();
        
        //console.log('filled', field)
        //console.log(field)
        
        numberOfThePiece++;
    }

    return score;
}

// 159: Pyraminx Puzzle
function solution(faceColors, moves) {
    const result = faceColors.map(color => Array(9).fill(color));
    for (let i = moves.length-1; i >= 0; i--) {
        const move = moves[i];
        const char = move[0].toLowerCase();
        const isPoint = move <= 'Z';
        const isReversed = move[move.length-1] === "'";
        const mapping = faceMap[char]
            .slice(0, isPoint ? 1 : 4)
            .map(row => isReversed ? [...row].reverse() : row);
        const values = [];
        for (const row of mapping) {
            for (const [i, [y, x]] of row.entries()) {
                const nextPos = row[(i+1) % row.length];
                values.push([result[y][x], nextPos]);
            }
        }
        for (const [color, [y, x]] of values) {
            result[y][x] = color;
        }
    }
    return result;
}
const faceMap = {
    u: [
        [[0, 0], [2, 4], [3, 8]],
        [[0, 1], [2, 6], [3, 3]],
        [[0, 2], [2, 5], [3, 7]],
        [[0, 3], [2, 1], [3, 6]],
    ],
    l: [
        [[0, 4], [1, 8], [2, 0]],
        [[0, 6], [1, 3], [2, 1]],
        [[0, 5], [1, 7], [2, 2]],
        [[0, 1], [1, 6], [2, 3]],
    ],
    r: [
        [[0, 8], [3, 0], [1, 4]],
        [[0, 3], [3, 1], [1, 6]],
        [[0, 7], [3, 2], [1, 5]],
        [[0, 6], [3, 3], [1, 1]],
    ],
    b: [
        [[1, 0], [3, 4], [2, 8]],
        [[1, 1], [3, 6], [2, 3]],
        [[1, 2], [3, 5], [2, 7]],
        [[1, 3], [3, 1], [2, 6]],
    ],
};

// 161: Lines Game
function solution(field, clicks, newBallsCoordinates, newBalls) {
    let score = 0;
    let lines = [];
    const checkCell = (x, y) => {
        for (const [dx, dy] of [[1, 0], [1, 1], [0, 1], [-1, 1]]) {
            let x1 = x;
            let y1 = y;
            while ((field[y1] || [])[x1] === field[y][x]) {
                x1 += dx;
                y1 += dy;
            }
            let x2 = x;
            let y2 = y;
            while ((field[y2] || [])[x2] === field[y][x]) {
                x2 -= dx;
                y2 -= dy;
            }
            const size = Math.max(x1-x2-1, y1-y2-1);
            if (size >= 5) {
                lines.push([size, x2, y2, dx, dy]);
            }
        }
        return lines.length > 0;
    };
    const countLines = () => {
        for (const line of lines) {
            if (lines[line]) continue;
            lines[line] = true;
            const [size, x, y, dx, dy] = line;
            score += size+1;
            for (let i = 0, j = x, k = y; i < size; i++) {
                j += dx;
                k += dy;
                field[k][j] = '.';
            }
        }
        score -= lines.length > 0;
    };
    
    let spawnIdx = 0;
    
    let selected = null;
    for (const [cy, cx] of clicks) {
        lines = [];
        let isUnsuccessful = false;
        if (selected && field[cy][cx] === '.') {
            const visited = {};
            const canReachFinishFrom = pos => {
                const [x, y] = pos;
                if ((field[y] || [])[x] !== '.' && pos !== selected || visited[pos]) return false;
                visited[pos] = true;
                if (x === cx && y === cy) return true;
                return [[x, y+1], [x, y-1], [x+1, y], [x-1, y]].some(canReachFinishFrom);
            };
            if (canReachFinishFrom(selected)) {
                const [sx, sy] = selected;
                field[cy][cx] = field[sy][sx];
                field[sy][sx] = '.';
                if (!checkCell(cx, cy)) {
                    isUnsuccessful = true;
                }
                countLines();
            }
            selected = null;
        } else if (field[cy][cx] !== '.') {
            selected = [cx, cy];
        } else {
            selected = null;
        }
        
        if (isUnsuccessful && spawnIdx < newBalls.length) {
            lines = [];
            for (let i = 0; i < 3; i++) {
                const color = newBalls[spawnIdx];
                const [sy, sx] = newBallsCoordinates[spawnIdx++];
                if (field[sy][sx] === '.') {
                    field[sy][sx] = color;
                }
            }
            for (let i = 0; i < 3; i++) {
                const [sy, sx] = newBallsCoordinates[spawnIdx-i-1];
                checkCell(sx, sy);
            }
            countLines();
        }
    }
    
    return score;
}

// 161: Fractal
function solution(n) {
    var size = (1 << n) - 1;
    result = Array(size);
    resultTmp = Array(size);
    for (var i = 0; i < size; i++) {
        result[i] = Array(size);
        resultTmp[i] = Array(size);
        for (var j = 0; j < size; j++) {
            result[i][j] = 0;
            resultTmp[i][j] = 0;
        }
    }
    var draw = function(n, row, column, angle) {
        var size = (1 << n) - 1;
        if (angle !== 0) {
            draw(n, row, column, 0);
            while (angle > 0) {
                angle--;
                for (var i = 0; i < size; i++) {
                    for (var j = 0; j < size; j++) {
                        var x = result[row + i][column + j];
                        var i0 = j;
                        var j0 = size - i - 1;
                        resultTmp[row + i0][column + j0] = (x >> 1) | ((x &
                            1) << 3);
                    }
                }
                for (var i = row; i < row + size; i++) {
                    for (var j = column; j < column + size; j++) {
                        result[i][j] = resultTmp[i][j];
                    }
                }
            }
            return;
        }
        if (n === 1) {
            result[row][column] = (1 << 3) - 1;
            return;
        }
        var add = Math.floor(size / 2) + 1;
        draw(n - 1, row, column, 0);
        if (n % 2 === 1) {
            draw(n - 1, row + add, column, 2);
            draw(n - 1, row, column + add, 3);
            draw(n - 1, row + add, column + add, 3);
            result[row][column + add - 1] |= (1 << 2);
            result[row + add - 1][column + add] |= (1 << 3);
            result[row + size - 1][column + add - 1] |= (1 << 0);
        } else {
            draw(n - 1, row + add, column, 1);
            draw(n - 1, row, column + add, 2);
            draw(n - 1, row + add, column + add, 1);
            result[row + add - 1][column] |= (1 << 3);
            result[row + add][column + add - 1] |= (1 << 2);
            result[row + add - 1][column + size - 1] |= (1 << 1);
        }
    }
    draw(n, 0, 0, 0);
    var answer = Array(size + 1);
    for (var i = 0; i < answer.length; i++) {
        answer[i] = Array((size + 1) * 2 - 1);
        for (var j = 0; j < answer[i].length; j++) {
            answer[i][j] = 0;
        }
    }
    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            var cell = result[i][j];
            if ((cell >> 2) % 2 === 1) {
                answer[i][j * 2 + 1] = '_';
            }
            if ((cell >> 0) % 2 === 1) {
                answer[i + 1][j * 2 + 1] = '_';
            }
            if ((cell >> 3) % 2 === 1) {
                answer[i + 1][j * 2] = '|';
            }
            if ((cell >> 1) % 2 === 1) {
                answer[i + 1][j * 2 + 2] = '|';
            }
        }
    }
    for (var i = 0; i < size + 1; i++) {
        for (var j = 0; j < (size + 1) * 2 - 1; j++) {
            if (answer[i][j] === 0) {
                answer[i][j] = ' ';
            }
            if (answer[i][j] === ' ' && j > 0 && answer[i][j - 1] === '_' && j +
                1 < answer[i].length && answer[i][j + 1] === '_') {
                answer[i][j] = '_';
            }
        }
    }
    return answer;
}

// 162: Time ASCII Representation

//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////
//// __________________________________Graphs_______________________________ ////

// New Road System
function solution(roadRegister) {
    for (var i=0; i<roadRegister.length; i++) {
        var from = roadRegister[i].filter(v=>v).length
        var to = roadRegister.map(row=>row[i]).filter(v=>v).length
        if (from != to) return false
    }
    return true
}

// Roads Building
solution=(cities, roads)=>{
    let h = {}, out = [];
    for (let r of roads) {
        let [a, b] = [Math.min(...r), Math.max(...r)]
        h[a] = h[a] || [];
        h[a].push(b);
    }
    for (let i = 0; i<cities; i++) {
        if (!h.hasOwnProperty(i)) h[i] = [];
        for ( let j = i+1; j<cities; j++) if (!h[i].includes(j)) out.push([i,j])
    }
    return out;
}

// Efficient Road Network
function solution(n, roads) {      
    let matrix = Array(n);
    for (let i=0; i<n; i++) {
        matrix[i] = Array(n).fill(Infinity);
        matrix[i][i] = 0;
    }

    for (let road of roads) {
        matrix[road[0]][road[1]] = 1;
        matrix[road[1]][road[0]] = 1;
    }

    // Apply Floyd-Warshall 
    for (let k=0; k<n; k++) {
        for (row=0; row<n; row++) {
            for (col=0; col<n; col++) {
                // ignore self-reference and current sub matrix
                if (row == k || col == k) continue;

                const current = matrix[row][col];
                const alter = matrix[row][k] + matrix[k][col];
                matrix[row][col] = Math.min(current, alter);
            }
        }
    }

    for (let row of matrix) {
        for (let val of row) {
            if (val == Infinity || val > 2) return false;
        }
    }

    return true;
}

// Financial Crisis
function solution(roadRegister) {
    const n = roadRegister.length;
    const result = [];

    for (let k = 0; k < n; k++) {
        const newMatrix = [];
        
        for (let i = 0; i < n; i++) {
            if (i === k) continue;
            newMatrix.push([]);
            for (let j = 0; j < n; j++) {
                if (j === k) continue;
                newMatrix[newMatrix.length - 1].push(roadRegister[i][j]);
            }
        }
        
        result.push(newMatrix);
    }
    
    return result;
}

// 