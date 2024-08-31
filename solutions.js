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
    
    while(result < desiredHeight) {
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
                matrix[i][j], matrix[i][j+1],
                matrix[i+1][j], matrix[i+1][j+1]
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

// 1: Add Two Digits


// 2: Largest Number


// 3: Candies


// 4: Seats in Theater


// 5: Max Multiple


// 6: Circle of Numbers


// 7: Late Ride


// 8: Phone Call


// 9: Reach Next Level


// 10: Knapsack Light


// 11: Extra Number


// 12: Is Infinite Process?


// 13: Arithmetic Expression


// 14: Tennis Set


// 15: Will You?


// 16: Metro Card


// 17: Kill K-th Bit


// 18: Array Packing


// 19: Range Bit Count


// 20: Mirror Bits


// 21: Second-Rightmost Zero Bit


// 22: Swap Adjacent Bits


// 23: Different Rightmost Bit


// 24: Equal Pair of Bits


// 25: Least Factorial


// 26: Count Sum of Two Representations 2


// 27: Magical Well


// 28: Lineup


// 29: Addition Without Carrying


// 30: Apple Boxes


// 31: Increase Number Roundness


// 32: Rounders


// 33: Candles


// 34: Count Black Cells


// 35: Create Array


// 36: Array Replace


// 37: First Reverse Try


// 38: Concatenate Arrays


// 39: Remove Array Part


// 40: Is Smooth?


// 41: Replace Middle


// 42: Make Array Consecutive 2


// 43: Is Power?


// 44: Is Sum of Consecutive 2


// 45: Square Digits Sequence


// 46: Pages Numbering With Ink


// 47: Comfortable Numbers


// 48: Weak Numbers


// 49: Rectangle Rotation


// 50: Crossword Formation


// 51: Enclose In Brackets


// 52: Proper Noun Correction


// 53: Is Tandem Repeat?


// 54: Is Case-Insensitive Palindrome?


// 55: Find Email Domain


// 56: HTML End Tag By Start Tag


// 57: Is MAC48 Address?


// 58: Is Unstable Pair?


// 59: Strings Construction


// 60: Is Substitution Cipher?


// 61: Create Anagram


// 62: Construct Square


// 63: Numbers Grouping


// 64: Different Squares


// 65: Most Frequent Digit Sum


// 66: Number of Clans


// 67: House Numbers Sum


// 68: All Longest Strings


// 69: House of Cats


// 70: Alphabet Subsequence


// 71: Minimal Number of Coins


// 72: Add Border


// 73: Switch Lights


// 74: Timed Reading


// 75: Elections Winners


// 76: Integer to String of Fixed Width


// 77: Are Similar?


// 78: Ada Number


// 79: Three Split


// 80: Character Parity


// 81: Reflect String


// 82: New Numeral System


// 83: Cipher 26


// 84: Stolen Lunch


// 85: Higher Version


// 86: Decipher


// 87: Alphanumeric Less


// 88: Array Conversion


// 89: Array Previous Less


// 90: Pair of Shoes


// 91: Combs


// 92: Strings Crossover


// 93: Cyclic String


// 94: Beautiful Text


// 95: Runners Meetings


// 96: Christmas Tree


// 97: File Naming


// 98: Extract Matrix Column


// 99: Are Isomorphic?


// 100: Reverse On Diagonals


// 101: Swap Diagonals


// 102: Crossing Sum


// 103: Draw Rectangle


// 104: Volleyball Positions


// 105: Star Rotation


// 106: Sudoku


// 107: Minesweeper


// 108: Box Blur


// 109: Contours Shifting


// 110: Polygon Perimeter


// 111: Gravitation


// 112: Is Information Consistent?


// 113: Correct Nonogram


// 114: 

