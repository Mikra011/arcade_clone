const challenges = [
    {
        topic_id: 1,
        order_index: 1,
        challenge_name: 'add',
        description: `
            <div className="description-container">
                <p>Write a function that returns the sum of two numbers.</p>

                <h3>Example</h3>
                <p>For <code>param1 = 1</code> and <code>param2 = 2</code>, the output should be <code>solution(param1, param2) = 3</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>param1</code></p>
                        <p>Guaranteed constraints: <code>-1000 ≤ param1 ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>param2</code></p>
                        <p>Guaranteed constraints: <code>-1000 ≤ param2 ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The sum of the two inputs.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 1,
        order_index: 2,
        challenge_name: 'centuryFromYear',
        description: `
            <div className="description-container">
                <p>Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.</p>

                <h3>Example</h3>
                <p>For <code>year = 1905</code>, the output should be <code>solution(year) = 20</code>.</p>
                <p>For <code>year = 1700</code>, the output should be <code>solution(year) = 17</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>year</code></p>
                        <p>A positive integer, designating the year.</p>
                        <p>Guaranteed constraints: <code>1 ≤ year ≤ 2005</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of the century the year is in.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 1,
        order_index: 3,
        challenge_name: 'checkPalindrome',
        description: `
            <div className="description-container">
                <p>Given the string, check if it is a palindrome.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "aabaa"</code>, the output should be <code>solution(inputString) = true</code>.</p>
                <p>For <code>inputString = "abac"</code>, the output should be <code>solution(inputString) = false</code>.</p>
                <p>For <code>inputString = "a"</code>, the output should be <code>solution(inputString) = true</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A non-empty string consisting of lowercase characters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ inputString.length ≤ 105</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>true if <code>inputString</code> is a palindrome, false otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 2,
        order_index: 4,
        challenge_name: 'adjacentElementsProduct',
        description: `
            <div className="description-container">
                <p>Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [3, 6, -2, -5, 7, 3]</code>, the output should be <code>solution(inputArray) = 21</code>.</p>
                <p>7 and 3 produce the largest product.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>An array of integers containing at least two elements.</p>
                        <p>Guaranteed constraints: <code>2 ≤ inputArray.length ≤ 10</code>, <code>-1000 ≤ inputArray[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The largest product of adjacent elements.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 2,
        order_index: 5,
        challenge_name: 'shapeArea',
        description: `
            <div className="description-container">
                <p>Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.</p>
                <p>A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.</p>

                <h3>Example</h3>
                <p>For <code>n = 2</code>, the output should be <code>solution(n) = 5</code>.</p>
                <p>For <code>n = 3</code>, the output should be <code>solution(n) = 13</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ n < 10<sup>4</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The area of the n-interesting polygon.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 2,
        order_index: 6,
        challenge_name: 'Make Array Consecutive 2',
        description: `
            <div className="description-container">
                <p>Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.</p>

                <h3>Example</h3>
                <p>For <code>statues = [6, 2, 3, 8]</code>, the output should be <code>solution(statues) = 3</code>.</p>
                <p>Ratiorg needs statues of sizes 4, 5, and 7.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>statues</code></p>
                        <p>An array of distinct non-negative integers.</p>
                        <p>Guaranteed constraints: <code>1 ≤ statues.length ≤ 10</code>, <code>0 ≤ statues[i] ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 2,
        order_index: 7,
        challenge_name: 'almostIncreasingSequence',
        description: `
            <div className="description-container">
                <p>Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.</p>
                <p>Note: sequence <code>a0, a1, ..., an</code> is considered to be a strictly increasing if <code>a0 < a1 < ... < an</code>. Sequence containing only one element is also considered to be strictly increasing.</p>

                <h3>Example</h3>
                <p>For <code>sequence = [1, 3, 2, 1]</code>, the output should be <code>solution(sequence) = false</code>.</p>
                <p>There is no one element in this array that can be removed in order to get a strictly increasing sequence.</p>
                <p>For <code>sequence = [1, 3, 2]</code>, the output should be <code>solution(sequence) = true</code>.</p>
                <p>You can remove 3 from the array to get the strictly increasing sequence <code>[1, 2]</code>. Alternately, you can remove 2 to get the strictly increasing sequence <code>[1, 3]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>sequence</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ sequence.length ≤ 10<sup>5</sup></code>, <code>-10<sup>5</sup> ≤ sequence[i] ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>Return <code>true</code> if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return <code>false</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 2,
        order_index: 8,
        challenge_name: 'matrixElementsSum',
        description: `
            <div className="description-container">
                <p>After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.</p>
                <p>Given <code>matrix</code>, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots (i.e., add up all the values that don't appear below a 0).</p>

                <h3>Example</h3>
                <p>For</p>
                <pre><code>matrix = 
                [              
                [0, 1, 1, 2],  
                [0, 5, 0, 0],  
                [2, 0, 3, 3]   
                ]</code></pre>
                <p>the output should be <code>solution(matrix) = 9</code>.</p>
                <p>There are several haunted rooms, so we'll disregard them as well as any rooms beneath them. Thus, the answer is 1 + 5 + 1 + 2 = 9.</p>

                <p>For</p>
                <pre><code>matrix = 
                [              
                [1, 1, 1, 0],  
                [0, 5, 0, 1],  
                [2, 1, 3, 10]  
                ]</code></pre>
                <p>the output should be <code>solution(matrix) = 9</code>.</p>
                <p>Note that the free room in the final column makes the full column unsuitable for bots (not just the room directly beneath it). Thus, the answer is 1 + 1 + 1 + 5 + 1 = 9.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.array.integer <code>matrix</code></p>
                        <p>A 2-dimensional array of integers representing the cost of each room in the building. A value of 0 indicates that the room is haunted.</p>
                        <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 5</code>, <code>1 ≤ matrix[i].length ≤ 5</code>, <code>0 ≤ matrix[i][j] ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The total price of all the rooms that are suitable for the CodeBots to live in.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 3,
        order_index: 9,
        challenge_name: 'All Longest Strings',
        description: `
            <div className="description-container">
                <p>Given an array of strings, return another array containing all of its longest strings.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = ["aba", "aa", "ad", "vcd", "aba"]</code>, the output should be <code>solution(inputArray) = ["aba", "vcd", "aba"]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.string <code>inputArray</code></p>
                        <p>A non-empty array.</p>
                        <p>Guaranteed constraints: <code>1 ≤ inputArray.length ≤ 10</code>, <code>1 ≤ inputArray[i].length ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.string</p>
                        <p>Array of the longest strings, stored in the same order as in the <code>inputArray</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 3,
        order_index: 10,
        challenge_name: 'commonCharacterCount',
        description: `
            <div className="description-container">
                <p>Given two strings, find the number of common characters between them.</p>

                <h3>Example</h3>
                <p>For <code>s1 = "aabcc"</code> and <code>s2 = "adcaa"</code>, the output should be <code>solution(s1, s2) = 3</code>.</p>
                <p>Strings have 3 common characters - 2 "a"s and 1 "c".</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>s1</code></p>
                        <p>A string consisting of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ s1.length < 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>s2</code></p>
                        <p>A string consisting of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ s2.length < 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of common characters between <code>s1</code> and <code>s2</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 3,
        order_index: 11,
        challenge_name: 'isLucky',
        description: `
            <div className="description-container">
                <p>Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.</p>
                <p>Given a ticket number <code>n</code>, determine if it's lucky or not.</p>

                <h3>Example</h3>
                <p>For <code>n = 1230</code>, the output should be <code>solution(n) = true</code>.</p>
                <p>For <code>n = 239017</code>, the output should be <code>solution(n) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>A ticket number represented as a positive integer with an even number of digits.</p>
                        <p>Guaranteed constraints: <code>10 ≤ n < 10<sup>6</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>n</code> is a lucky ticket number, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 3,
        order_index: 12,
        challenge_name: 'Sort by Height',
        description: `
            <div className="description-container">
                <p>Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!</p>

                <h3>Example</h3>
                <p>For <code>a = [-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be <code>solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>a</code></p>
                        <p>If <code>a[i] = -1</code>, then the <code>i</code>th position is occupied by a tree. Otherwise, <code>a[i]</code> is the height of a person standing in the <code>i</code>th position.</p>
                        <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 1000</code>, <code>-1 ≤ a[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>Sorted array <code>a</code> with all the trees untouched.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 3,
        order_index: 13,
        challenge_name: 'reverseInParentheses',
        description: `
            <div className="description-container">
                <p>Write a function that reverses characters in (possibly nested) parentheses in the input string.</p>
                <p>Input strings will always be well-formed with matching <code>()</code>s.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "(bar)"</code>, the output should be <code>solution(inputString) = "rab"</code>.</p>
                <p>For <code>inputString = "foo(bar)baz"</code>, the output should be <code>solution(inputString) = "foorabbaz"</code>.</p>
                <p>For <code>inputString = "foo(bar)baz(blim)"</code>, the output should be <code>solution(inputString) = "foorabbazmilb"</code>.</p>
                <p>For <code>inputString = "foo(bar(baz))blim"</code>, the output should be <code>solution(inputString) = "foobazrabblim"</code>.</p>
                <p>Because <code>"foo(bar(baz))blim"</code> becomes <code>"foo(barzab)blim"</code> and then <code>"foobazrabblim"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A string consisting of lowercase English letters and the characters <code>(</code> and <code>)</code>. It is guaranteed that all parentheses in <code>inputString</code> form a regular bracket sequence.</p>
                        <p>Guaranteed constraints: <code>0 ≤ inputString.length ≤ 50</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>Return <code>inputString</code>, with all the characters that were in parentheses reversed.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 4,
        order_index: 14,
        challenge_name: 'alternatingSums',
        description: `
            <div className="description-container">
                <p>Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.</p>
                <p>You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.</p>

                <h3>Example</h3>
                <p>For <code>a = [50, 60, 60, 45, 70]</code>, the output should be <code>solution(a) = [180, 105]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 10<sup>5</sup></code>, <code>45 ≤ a[i] ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>Return an array of two integers: the total weight of team 1 and the total weight of team 2.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 4,
        order_index: 15,
        challenge_name: 'Add Border',
        description: `
            <div className="description-container">
                <p>Given a rectangular matrix of characters, add a border of asterisks (<code>*</code>) to it.</p>

                <h3>Example</h3>
                <p>For</p>
                <pre><code>picture = 
                [       
                "abc",  
                "ded"   
                ]</code></pre>
                <p>the output should be</p>
                <pre><code>solution(picture) = 
                [        
                "*****", 
                "*abc*", 
                "*ded*", 
                "*****"  
                ]</code></pre>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.string <code>picture</code></p>
                        <p>A non-empty array of non-empty equal-length strings.</p>
                        <p>Guaranteed constraints: <code>1 ≤ picture.length ≤ 100</code>, <code>1 ≤ picture[i].length ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.string</p>
                        <p>The same matrix of characters, framed with a border of asterisks of width 1.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 4,
        order_index: 16,
        challenge_name: 'Are Similar?',
        description: `
            <div className="description-container">
                <p>Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.</p>
                <p>Given two arrays <code>a</code> and <code>b</code>, check whether they are similar.</p>

                <h3>Example</h3>
                <p>For <code>a = [1, 2, 3]</code> and <code>b = [1, 2, 3]</code>, the output should be <code>solution(a, b) = true</code>.</p>
                <p>The arrays are equal, no need to swap any elements.</p>
                <p>For <code>a = [1, 2, 3]</code> and <code>b = [2, 1, 3]</code>, the output should be <code>solution(a, b) = true</code>.</p>
                <p>We can obtain <code>b</code> from <code>a</code> by swapping 2 and 1 in <code>b</code>.</p>
                <p>For <code>a = [1, 2, 2]</code> and <code>b = [2, 1, 1]</code>, the output should be <code>solution(a, b) = false</code>.</p>
                <p>Any swap of any two elements either in <code>a</code> or in <code>b</code> won't make <code>a</code> and <code>b</code> equal.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>a</code></p>
                        <p>Array of integers.</p>
                        <p>Guaranteed constraints: <code>3 ≤ a.length ≤ 10<sup>5</sup></code>, <code>1 ≤ a[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>b</code></p>
                        <p>Array of integers of the same length as <code>a</code>.</p>
                        <p>Guaranteed constraints: <code>b.length = a.length</code>, <code>1 ≤ b[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>a</code> and <code>b</code> are similar, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 4,
        order_index: 17,
        challenge_name: 'arrayChange',
        description: `
            <div className="description-container">
                <p>You are given an array of integers. On each move you are allowed to increase exactly one of its elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [1, 1, 1]</code>, the output should be <code>solution(inputArray) = 3</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>Guaranteed constraints: <code>3 ≤ inputArray.length ≤ 10<sup>5</sup></code>, <code>-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The minimal number of moves needed to obtain a strictly increasing sequence from <code>inputArray</code>. It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 4,
        order_index: 18,
        challenge_name: 'palindromeRearranging',
        description: `
            <div className="description-container">
                <p>Given a string, find out if its characters can be rearranged to form a palindrome.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "aabb"</code>, the output should be <code>solution(inputString) = true</code>.</p>
                <p>We can rearrange "aabb" to make "abba", which is a palindrome.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A string consisting of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ inputString.length ≤ 50</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the characters of <code>inputString</code> can be rearranged to form a palindrome, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 19,
        challenge_name: 'areEquallyStrong',
        description: `
            <div className="description-container">
                <p>Call two arms equally strong if the heaviest weights they each are able to lift are equal.</p>
                <p>Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms.</p>
                <p>Given your and your friend's arms' lifting capabilities find out if you two are equally strong.</p>

                <h3>Example</h3>
                <p>For <code>yourLeft = 10</code>, <code>yourRight = 15</code>, <code>friendsLeft = 15</code>, and <code>friendsRight = 10</code>, the output should be <code>solution(yourLeft, yourRight, friendsLeft, friendsRight) = true</code>.</p>
                <p>For <code>yourLeft = 15</code>, <code>yourRight = 10</code>, <code>friendsLeft = 15</code>, and <code>friendsRight = 10</code>, the output should be <code>solution(yourLeft, yourRight, friendsLeft, friendsRight) = true</code>.</p>
                <p>For <code>yourLeft = 15</code>, <code>yourRight = 10</code>, <code>friendsLeft = 15</code>, and <code>friendsRight = 9</code>, the output should be <code>solution(yourLeft, yourRight, friendsLeft, friendsRight) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>yourLeft</code></p>
                        <p>A non-negative integer representing the heaviest weight you can lift with your left arm.</p>
                        <p>Guaranteed constraints: <code>0 ≤ yourLeft ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>yourRight</code></p>
                        <p>A non-negative integer representing the heaviest weight you can lift with your right arm.</p>
                        <p>Guaranteed constraints: <code>0 ≤ yourRight ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>friendsLeft</code></p>
                        <p>A non-negative integer representing the heaviest weight your friend can lift with his or her left arm.</p>
                        <p>Guaranteed constraints: <code>0 ≤ friendsLeft ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>friendsRight</code></p>
                        <p>A non-negative integer representing the heaviest weight your friend can lift with his or her right arm.</p>
                        <p>Guaranteed constraints: <code>0 ≤ friendsRight ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if you and your friend are equally strong, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 20,
        challenge_name: 'arrayMaximalAdjacentDifference',
        description: `
            <div className="description-container">
                <p>Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [2, 4, 1, 0]</code>, the output should be <code>solution(inputArray) = 3</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>Guaranteed constraints: <code>3 ≤ inputArray.length ≤ 10</code>, <code>-15 ≤ inputArray[i] ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The maximal absolute difference.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 21,
        challenge_name: 'isIPv4Address',
        description: `
            <div className="description-container">
                <p>An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "172.16.254.1"</code>, the output should be <code>solution(inputString) = true</code>.</p>
                <p>For <code>inputString = "172.316.254.1"</code>, the output should be <code>solution(inputString) = false</code>.</p>
                <p>For <code>inputString = ".254.255.0"</code>, the output should be <code>solution(inputString) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A string consisting of digits, full stops and lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ inputString.length ≤ 30</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>true if <code>inputString</code> satisfies the IPv4 address naming rules, false otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 22,
        challenge_name: 'avoidObstacles',
        description: `
            <div className="description-container">
                <p>You are given an array of integers representing coordinates of obstacles situated on a straight line.</p>
                <p>Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.</p>
                <p>Find the minimal length of the jump enough to avoid all the obstacles.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [5, 3, 6, 7, 9]</code>, the output should be <code>solution(inputArray) = 4</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>Non-empty array of positive integers.</p>
                        <p>Guaranteed constraints: <code>2 ≤ inputArray.length ≤ 1000</code>, <code>1 ≤ inputArray[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The desired length.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 23,
        challenge_name: 'Box Blur',
        description: `
            <div className="description-container">
                <p>Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.</p>
                <p>The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel x in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at x, including x itself. All the pixels on the border of x are then removed.</p>
                <p>Return the blurred image as an integer, with the fractions rounded down.</p>

                <h3>Example</h3>
                <p>For <code>image = [[1, 1, 1], [1, 7, 1], [1, 1, 1]]</code>, the output should be <code>solution(image) = [[1]]</code>.</p>
                <p>To get the value of the middle pixel in the input 3 × 3 square: <code>(1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1</code>. The border pixels are cropped from the final result.</p>

                <p>For <code>image = [[7, 4, 0, 1], [5, 6, 2, 2], [6, 10, 7, 8], [1, 4, 2, 0]]</code>, the output should be <code>solution(image) = [[5, 4], [4, 4]]</code>.</p>
                <p>There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: <code>(7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5</code>. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.array.integer <code>image</code></p>
                        <p>An image, stored as a rectangular matrix of non-negative integers.</p>
                        <p>Guaranteed constraints: <code>3 ≤ image.length ≤ 100</code>, <code>3 ≤ image[0].length ≤ 100</code>, <code>0 ≤ image[i][j] ≤ 255</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.array.integer</p>
                        <p>A blurred image represented as integers, obtained through the process in the description.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 5,
        order_index: 24,
        challenge_name: 'Minesweeper',
        description: `
            <div className="description-container">
                <p>In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.</p>

                <h3>Example</h3>
                <p>For </p>
                <pre><code>matrix = 
                [                      
                [true, false, false],  
                [false, true, false],  
                [false, false, false]  
                ]</code></pre>, 
                <p>the output should be </p>
                <pre><code>solution(matrix) = 
                [           
                [1, 2, 1],  
                [2, 1, 1],  
                [1, 1, 1]   
                ]</code></pre>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.array.boolean <code>matrix</code></p>
                        <p>A non-empty rectangular matrix consisting of boolean values - <code>true</code> if the corresponding cell contains a mine, <code>false</code> otherwise.</p>
                        <p>Guaranteed constraints: <code>2 ≤ matrix.length ≤ 100</code>, <code>2 ≤ matrix[0].length ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.array.integer</p>
                        <p>Rectangular matrix of the same size as <code>matrix</code> each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 6,
        order_index: 25,
        challenge_name: 'Array Replace',
        description: `
            <div className="description-container">
                <p>Given an array of integers, replace all the occurrences of <code>elemToReplace</code> with <code>substitutionElem</code>.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [1, 2, 1]</code>, <code>elemToReplace = 1</code>, and <code>substitutionElem = 3</code>, the output should be <code>solution(inputArray, elemToReplace, substitutionElem) = [3, 2, 3]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ inputArray.length ≤ 10<sup>4</sup></code>, <code>0 ≤ inputArray[i] ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>elemToReplace</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ elemToReplace ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>substitutionElem</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ substitutionElem ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 6,
        order_index: 26,
        challenge_name: 'evenDigitsOnly',
        description: `
            <div className="description-container">
                <p>Check if all digits of the given integer are even.</p>

                <h3>Example</h3>
                <p>For <code>n = 248622</code>, the output should be <code>solution(n) = true</code>;</p>
                <p>For <code>n = 642386</code>, the output should be <code>solution(n) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 6,
        order_index: 27,
        challenge_name: 'variableName',
        description: `
            <div className="description-container">
                <p>Correct variable names consist only of English letters, digits, and underscores and they can't start with a digit.</p>

                <h3>Example</h3>
                <p>For <code>name = "var_1__Int"</code>, the output should be <code>solution(name) = true</code>;</p>
                <p>For <code>name = "qq-q"</code>, the output should be <code>solution(name) = false</code>;</p>
                <p>For <code>name = "2w2"</code>, the output should be <code>solution(name) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>name</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ name.length ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 6,
        order_index: 28,
        challenge_name: 'alphabeticShift',
        description: `
            <div className="description-container">
                <p>Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace <code>a</code> with <code>b</code>, replace <code>b</code> with <code>c</code>, etc (z would be replaced by <code>a</code>).</p>

                <h3>Example</h3>
                <p>For <code>inputString = "crazy"</code>, the output should be <code>solution(inputString) = "dsbaz"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A non-empty string consisting of lowercase English characters.</p>
                        <p>Guaranteed constraints: <code>1 ≤ inputString.length ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The resulting string after replacing each of its characters.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 6,
        order_index: 29,
        challenge_name: 'chessBoardCellColor',
        description: `
            <div className="description-container">
                <p>Given two cells on the standard chess board, determine whether they have the same color or not.</p>

                <h3>Example</h3>
                <p>For <code>cell1 = "A1"</code> and <code>cell2 = "C3"</code>, the output should be <code>solution(cell1, cell2) = true</code>.</p>
                <p>For <code>cell1 = "A1"</code> and <code>cell2 = "H3"</code>, the output should be <code>solution(cell1, cell2) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>cell1</code></p>
                        <p>Guaranteed constraints: <code>cell1.length = 2</code>, <code>'A' ≤ cell1[0] ≤ 'H'</code>, <code>1 ≤ cell1[1] ≤ 8</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>cell2</code></p>
                        <p>Guaranteed constraints: <code>cell2.length = 2</code>, <code>'A' ≤ cell2[0] ≤ 'H'</code>, <code>1 ≤ cell2[1] ≤ 8</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>Return <code>true</code> if both cells have the same color, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 7,
        order_index: 30,
        challenge_name: 'Circle of Numbers',
        description: `
            <div className="description-container">
                <p>Consider integer numbers from 0 to <code>n - 1</code> written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that 0 and <code>n - 1</code> are neighboring, too).</p>
                <p>Given <code>n</code> and <code>firstNumber</code>, find the number which is written in the radially opposite position to <code>firstNumber</code>.</p>

                <h3>Example</h3>
                <p>For <code>n = 10</code> and <code>firstNumber = 2</code>, the output should be <code>solution(n, firstNumber) = 7</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>A positive even integer.</p>
                        <p>Guaranteed constraints: <code>4 ≤ n ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>firstNumber</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ firstNumber ≤ n - 1</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number which is written in the radially opposite position to <code>firstNumber</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 7,
        order_index: 31,
        challenge_name: 'depositProfit',
        description: `
            <div className="description-container">
                <p>You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold.</p>

                <h3>Example</h3>
                <p>For <code>deposit = 100</code>, <code>rate = 20</code>, and <code>threshold = 170</code>, the output should be <code>solution(deposit, rate, threshold) = 3</code>.</p>
                <p>Each year the amount of money in your account increases by 20%. So throughout the years, your balance would be:</p>
                    <code>year 0: 100;</code>
                    <code>year 1: 120;</code>
                    <code>year 2: 144;</code>
                    <code>year 3: 172.8.</code>
                <p>Thus, it will take 3 years for your balance to pass the threshold, so the answer is 3.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>deposit</code></p>
                        <p>The initial deposit, guaranteed to be a positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ deposit ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>rate</code></p>
                        <p>The rate of increase. Each year the balance increases by the rate percent of the current sum.</p>
                        <p>Guaranteed constraints: <code>1 ≤ rate ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>threshold</code></p>
                        <p>The target balance.</p>
                        <p>Guaranteed constraints: <code>deposit < threshold ≤ 200</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of years it would take to hit the threshold.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 7,
        order_index: 32,
        challenge_name: 'absoluteValuesSumMinimization',
        description: `
            <div className="description-container">
                <p>Given a sorted array of integers <code>a</code>, your task is to determine which element of <code>a</code> is closest to all other values of <code>a</code>. In other words, find the element <code>x</code> in <code>a</code>, which minimizes the following sum:</p>
                <p><code>abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)</code></p>
                <p>(where <code>abs</code> denotes the absolute value)</p>
                <p>If there are several possible answers, output the smallest one.</p>

                <h3>Example</h3>
                <p>For <code>a = [2, 4, 7]</code>, the output should be <code>solution(a) = 4</code>.</p>
                <p>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7</code>.</p>
                <p>for <code>x = 4</code>, the value will be <code>abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5</code>.</p>
                <p>for <code>x = 7</code>, the value will be <code>abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8</code>.</p>
                <p>The lowest possible value is when <code>x = 4</code>, so the answer is 4.</p>

                <p>For <code>a = [2, 3]</code>, the output should be <code>solution(a) = 2</code>.</p>
                <p>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(3 - 2) = 1</code>.</p>
                <p>for <code>x = 3</code>, the value will be <code>abs(2 - 3) + abs(3 - 3) = 1</code>.</p>
                <p>Because there is a tie, the smallest <code>x</code> between <code>x = 2</code> and <code>x = 3</code> is the answer.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>a</code></p>
                        <p>A non-empty array of integers, sorted in ascending order.</p>
                        <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 1000</code>, <code>-10^6 ≤ a[i] ≤ 10^6</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>An integer representing the element from <code>a</code> that minimizes the sum of its absolute differences with all other elements.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 7,
        order_index: 33,
        challenge_name: 'stringsRearrangement',
        description: `
            <div className="description-container">
                <p>Given an array of equal-length strings, you'd like to know if it's possible to rearrange the order of the elements in such a way that each consecutive pair of strings differ by exactly one character. Return <code>true</code> if it's possible, and <code>false</code> if not.</p>
                <p><strong>Note:</strong> You're only rearranging the order of the strings, not the order of the letters within the strings!</p>

                <h3>Example</h3>
                <p>For <code>inputArray = ["aba", "bbb", "bab"]</code>, the output should be <code>solution(inputArray) = false</code>.</p>
                <p>There are 6 possible arrangements for these strings:</p>
                <pre><code>
                [                          
                    ["aba", "bbb", "bab"], 
                    ["aba", "bab", "bbb"], 
                    ["bbb", "aba", "bab"], 
                    ["bbb", "bab", "aba"], 
                    ["bab", "bbb", "aba"], 
                    ["bab", "aba", "bbb"]  
                ]                          
                </code></pre>
                <p>None of these satisfy the condition of consecutive strings differing by 1 character, so the answer is false.</p>

                <p>For <code>inputArray = ["ab", "bb", "aa"]</code>, the output should be <code>solution(inputArray) = true</code>.</p>
                <p>It's possible to arrange these strings in a way that each consecutive pair of strings differ by 1 character (e.g.: <code>"aa", "ab", "bb"</code> or <code>"bb", "ab", "aa"</code>), so return true.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.string <code>inputArray</code></p>
                        <p>A non-empty array of strings of lowercase letters.</p>
                        <p>Guaranteed constraints: <code>2 ≤ inputArray.length ≤ 10</code>, <code>1 ≤ inputArray[i].length ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>Return <code>true</code> if the strings can be reordered in such a way that each neighbouring pair of strings differ by exactly one character, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 8,
        order_index: 34,
        challenge_name: 'extractEachKth',
        description: `
            <div className="description-container">
                <p>Given an array of integers, remove every k<sup>th</sup> element from it.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code> and <code>k = 3</code>, the output should be <code>solution(inputArray, k) = [1, 2, 4, 5, 7, 8, 10]</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>An array of integers.</p>
                        <p>Guaranteed constraints: <code>5 ≤ inputArray.length ≤ 15</code>, <code>-20 ≤ inputArray[i] ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>k</code></p>
                        <p>An integer representing the step at which elements should be removed.</p>
                        <p>Guaranteed constraints: <code>1 ≤ k ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>The input array without the elements at positions k-1, 2k-1, 3k-1, etc.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 8,
        order_index: 35,
        challenge_name: 'firstDigit',
        description: `
            <div className="description-container">
                <p>Find the leftmost digit that occurs in a given string.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "var_1__Int"</code>, the output should be <code>solution(inputString) = '1'</code>;</p>
                <p>For <code>inputString = "q2q-q"</code>, the output should be <code>solution(inputString) = '2'</code>;</p>
                <p>For <code>inputString = "0ss"</code>, the output should be <code>solution(inputString) = '0'</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A string containing at least one digit.</p>
                        <p>Guaranteed constraints: <code>3 ≤ inputString.length ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> char</p>
                        <p>The leftmost digit in the input string.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 8,
        order_index: 36,
        challenge_name: 'differentSymbolsNaive',
        description: `
            <div className="description-container">
                <p>Given a string, find the number of different characters in it.</p>

                <h3>Example</h3>
                <p>For <code>s = "cabca"</code>, the output should be <code>solution(s) = 3</code>.</p>
                <p>There are 3 different characters: <code>a</code>, <code>b</code>, and <code>c</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>s</code></p>
                        <p>A string of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>3 ≤ s.length ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of different characters in the input string.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 8,
        order_index: 37,
        challenge_name: 'arrayMaxConsecutiveSum',
        description: `
            <div className="description-container">
                <p>Given an array of integers, find the maximal possible sum of some of its <code>k</code> consecutive elements.</p>

                <h3>Example</h3>
                <p>For <code>inputArray = [2, 3, 5, 1, 6]</code> and <code>k = 2</code>, the output should be <code>solution(inputArray, k) = 8</code>.</p>
                <p>All possible sums of 2 consecutive elements are:</p>
                <ul>
                    <li><code>2 + 3 = 5</code>;</li>
                    <li><code>3 + 5 = 8</code>;</li>
                    <li><code>5 + 1 = 6</code>;</li>
                    <li><code>1 + 6 = 7</code>.</li>
                </ul>
                <p>Thus, the answer is <code>8</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>inputArray</code></p>
                        <p>An array of positive integers.</p>
                        <p>Guaranteed constraints: <code>3 ≤ inputArray.length ≤ 10<sup>5</sup></code>, <code>1 ≤ inputArray[i] ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>k</code></p>
                        <p>An integer representing the number of consecutive elements to sum.</p>
                        <p>Guaranteed constraints: <code>1 ≤ k ≤ inputArray.length</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The maximal possible sum of <code>k</code> consecutive elements in the input array.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 9,
        order_index: 38,
        challenge_name: 'growingPlant',
        description: `
            <div className="description-container">
                <p>Caring for a plant can be hard work, but since you tend to it regularly, you have a plant that grows consistently. Each day, its height increases by a fixed amount represented by the integer <code>upSpeed</code>. But due to lack of sunlight, the plant decreases in height every night, by an amount represented by <code>downSpeed</code>.</p>
                <p>Since you grew the plant from a seed, it started at height 0 initially. Given an integer <code>desiredHeight</code>, your task is to find how many days it'll take for the plant to reach this height.</p>

                <h3>Example</h3>
                <p>For <code>upSpeed = 100</code>, <code>downSpeed = 10</code>, and <code>desiredHeight = 910</code>, the output should be <code>solution(upSpeed, downSpeed, desiredHeight) = 10</code>.</p>
                <p>The plant first reaches a height of 910 on day 10.</p>
                <table>
                    <tr>
                        <th>#</th>    
                        <th>Day</th>
                        <th>Night</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>100</td>
                        <td>90</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>190</td>
                        <td>180</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>280</td>
                        <td>270</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>370</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>460</td>
                        <td>450</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>550</td>
                        <td>540</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>640</td>
                        <td>630</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>730</td>
                        <td>720</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>820</td>
                        <td>810</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>910</td>
                        <td>900</td>
                    </tr>
                </table>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>upSpeed</code></p>
                        <p>A positive integer representing the daily growth of the plant.</p>
                        <p>Guaranteed constraints: <code>3 ≤ upSpeed ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>downSpeed</code></p>
                        <p>A positive integer representing the nightly decline of the plant.</p>
                        <p>Guaranteed constraints: <code>2 ≤ downSpeed &lt; upSpeed</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>desiredHeight</code></p>
                        <p>A positive integer representing the goal height.</p>
                        <p>Guaranteed constraints: <code>4 ≤ desiredHeight ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of days that it will take for the plant to reach or exceed <code>desiredHeight</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 9,
        order_index: 39,
        challenge_name: 'Knapsack Light',
        description: `
            <div className="description-container">
                <p>You found two items in a treasure chest! The first item weighs <code>weight1</code> and is worth <code>value1</code>, and the second item weighs <code>weight2</code> and is worth <code>value2</code>. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is <code>maxW</code> and you can't come back for the items later?</p>
                <p>Note that there are only two items and you can't bring more than one item of each type, i.e., you can't take two first items or two second items.</p>

                <h3>Example</h3>
                <p>For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code>, and <code>maxW = 8</code>, the output should be <code>solution(value1, weight1, value2, weight2, maxW) = 10</code>.</p>
                <p>You can only carry the first item.</p>
                <p>For <code>value1 = 10</code>, <code>weight1 = 5</code>, <code>value2 = 6</code>, <code>weight2 = 4</code>, and <code>maxW = 9</code>, the output should be <code>solution(value1, weight1, value2, weight2, maxW) = 16</code>.</p>
                <p>You're strong enough to take both of the items with you.</p>
                <p>For <code>value1 = 5</code>, <code>weight1 = 3</code>, <code>value2 = 7</code>, <code>weight2 = 4</code>, and <code>maxW = 6</code>, the output should be <code>solution(value1, weight1, value2, weight2, maxW) = 7</code>.</p>
                <p>You can't take both items, but you can take any of them.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>value1</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ value1 ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>weight1</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ weight1 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>value2</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ value2 ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>weight2</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ weight2 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>maxW</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ maxW ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The total maximum value of the items you can take with you, given the weight constraints.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 9,
        order_index: 40,
        challenge_name: 'longestDigitsPrefix',
        description: `
            <div className="description-container">
                <p>Given a string, output its longest prefix which contains only digits.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "123aa1"</code>, the output should be <code>solution(inputString) = "123"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>Guaranteed constraints: <code>3 ≤ inputString.length ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The longest prefix of the input string that contains only digits.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 9,
        order_index: 41,
        challenge_name: 'digitDegree',
        description: `
            <div className="description-container">
                <p>Let's define the digit degree of a positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one-digit number.</p>
                <p>Given an integer, find its digit degree.</p>

                <h3>Example</h3>
                <p>For <code>n = 5</code>, the output should be <code>solution(n) = 0</code>.</p>
                <p>For <code>n = 100</code>, the output should be <code>solution(n) = 1</code>.</p>
                <p>1 + 0 + 0 = 1.</p>
                <p>For <code>n = 91</code>, the output should be <code>solution(n) = 2</code>.</p>
                <p>9 + 1 = 10 → 1 + 0 = 1.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>Guaranteed constraints: <code>5 ≤ n ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The digit degree of the integer <code>n</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 9,
        order_index: 42,
        challenge_name: 'Bishop and Pawn',
        description: `
            <div className="description-container">
                <p>Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.</p>
                <p>The bishop has no restrictions in distance for each move but is limited to diagonal movement. Check out the example below to see how it can move:</p>

                <h3>Example</h3>
                <p>For <code>bishop = "a1"</code> and <code>pawn = "c3"</code>, the output should be <code>solution(bishop, pawn) = true</code>.</p>
                <p>For <code>bishop = "h1"</code> and <code>pawn = "h3"</code>, the output should be <code>solution(bishop, pawn) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>bishop</code></p>
                        <p>Coordinates of the white bishop in the chess notation.</p>
                        <p>Guaranteed constraints: <code>bishop.length = 2</code>, <code>'a' ≤ bishop[0] ≤ 'h'</code>, <code>1 ≤ bishop[1] ≤ 8</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>pawn</code></p>
                        <p>Coordinates of the black pawn in the same notation.</p>
                        <p>Guaranteed constraints: <code>pawn.length = 2</code>, <code>'a' ≤ pawn[0] ≤ 'h'</code>, <code>1 ≤ pawn[1] ≤ 8</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the bishop can capture the pawn, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 10,
        order_index: 43,
        challenge_name: 'isBeautifulString',
        description: `
            <div className="description-container">
                <p>A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; i.e., <code>b</code> occurs no more times than <code>a</code>; <code>c</code> occurs no more times than <code>b</code>; etc. Note that letter <code>a</code> has no previous letter.</p>
                <p>Given a string, check whether it is beautiful.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "bbbaacdafe"</code>, the output should be <code>solution(inputString) = true</code>.</p>
                <p>This string contains 3 <code>a</code>s, 3 <code>b</code>s, 1 <code>c</code>, 1 <code>d</code>, 1 <code>e</code>, and 1 <code>f</code> (and 0 of every other letter), so since there aren't any letters that appear more frequently than the previous letter, this string qualifies as beautiful.</p>
                <p>For <code>inputString = "aabbb"</code>, the output should be <code>solution(inputString) = false</code>.</p>
                <p>Since there are more <code>b</code>s than <code>a</code>s, this string is not beautiful.</p>
                <p>For <code>inputString = "bbc"</code>, the output should be <code>solution(inputString) = false</code>.</p>
                <p>Although there are more <code>b</code>s than <code>c</code>s, this string is not beautiful because there are no <code>a</code>s, so therefore there are more <code>b</code>s than <code>a</code>s.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>A string of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>3 ≤ inputString.length ≤ 50</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p>Return <code>true</code> if the string is beautiful, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 10,
        order_index: 44,
        challenge_name: 'Find Email Domain',
        description: `
            <div className="description-container">
                <p>An email address such as <code>John.Smith@example.com</code> is made up of a local part (<code>John.Smith</code>), an <code>@</code> symbol, then a domain part (<code>example.com</code>).</p>
                <p>The domain name part of an email address may only consist of letters, digits, hyphens, and dots. The local part, however, allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.</p>
                <p>Given a valid email address, find its domain part.</p>

                <h3>Example</h3>
                <p>For <code>address = "prettyandsimple@example.com"</code>, the output should be <code>solution(address) = "example.com"</code>.</p>
                <p>For <code>address = "fully-qualified-domain@codesignal.com"</code>, the output should be <code>solution(address) = "codesignal.com"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>address</code></p>
                        <p>Guaranteed constraints: <code>10 ≤ address.length ≤ 50</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The domain part of the email address.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 10,
        order_index: 45,
        challenge_name: 'buildPalindrome',
        description: `
            <div className="description-container">
                <p>Given a string, find the shortest possible string which can be achieved by adding characters to the end of the initial string to make it a palindrome.</p>

                <h3>Example</h3>
                <p>For <code>st = "abcdc"</code>, the output should be <code>solution(st) = "abcdcba"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>st</code></p>
                        <p>A string consisting of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>3 ≤ st.length ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The shortest possible string which can be achieved by adding characters to the end of the initial string to make it a palindrome.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 10,
        order_index: 46,
        challenge_name: 'Elections Winners',
        description: `
            <div className="description-container">
                <p>Elections are in progress!</p>
                <p>Given an array of the numbers of votes given to each of the candidates so far, and an integer <code>k</code> equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.</p>
                <p>The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.</p>

                <h3>Example</h3>
                <p>For <code>votes = [2, 3, 5, 2]</code> and <code>k = 3</code>, the output should be <code>solution(votes, k) = 2</code>.</p>
                <p>The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e., the same number as the third candidate, so there will be no winner.</p>
                <p>The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).</p>
                <p>The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).</p>
                <p>The last candidate can't win no matter what (for the same reason as the first candidate).</p>
                <p>Thus, only 2 candidates can win (the second and the third), which is the answer.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>votes</code></p>
                        <p>A non-empty array of non-negative integers. Its <code>i</code>th element denotes the number of votes cast for the <code>i</code>th candidate.</p>
                        <p>Guaranteed constraints: <code>4 ≤ votes.length ≤ 10<sup>5</sup></code>, <code>0 ≤ votes[i] ≤ 10<sup>4</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>k</code></p>
                        <p>The number of voters who haven't cast their vote yet.</p>
                        <p>Guaranteed constraints: <code>0 ≤ k ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of candidates who still have a chance to win the election.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 10,
        order_index: 47,
        challenge_name: 'Is MAC48 Address?',
        description: `
            <div className="description-container">
                <p>A media access control address (MAC address) is a unique identifier assigned to network interfaces for communications on the physical network segment.</p>
                <p>The standard (IEEE 802) format for printing MAC-48 addresses in human-friendly form is six groups of two hexadecimal digits (0 to 9 or A to F), separated by hyphens (e.g., <code>01-23-45-67-89-AB</code>).</p>
                <p>Your task is to check by given string <code>inputString</code> whether it corresponds to a MAC-48 address or not.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "00-1B-63-84-45-E6"</code>, the output should be <code>solution(inputString) = true</code>.</p>
                <p>For <code>inputString = "Z1-1B-63-84-45-E6"</code>, the output should be <code>solution(inputString) = false</code>.</p>
                <p>For <code>inputString = "not a MAC-48 address"</code>, the output should be <code>solution(inputString) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>Guaranteed constraints: <code>15 ≤ inputString.length ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>inputString</code> corresponds to MAC-48 address naming rules, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 11,
        order_index: 48,
        challenge_name: 'isDigit',
        description: `
            <div className="description-container">
                <p>Determine if the given character is a digit or not.</p>

                <h3>Example</h3>
                <p>For <code>symbol = '0'</code>, the output should be <code>solution(symbol) = true</code>.</p>
                <p>For <code>symbol = '-'</code>, the output should be <code>solution(symbol) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> char <code>symbol</code></p>
                        <p>A character which is either a digit or not.</p>
                        <p>Guaranteed constraints: Given symbol is from ASCII table.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>symbol</code> is a digit, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 11,
        order_index: 49,
        challenge_name: 'lineEncoding',
        description: `
            <div className="description-container">
                <p>Given a string, return its encoding defined as follows:</p>
                <ul>
                    <li>First, the string is divided into the least possible number of disjoint substrings consisting of identical characters. For example, <code>"aabbbc"</code> is divided into <code>["aa", "bbb", "c"]</code>.</li>
                    <li>Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character. For example, substring <code>"bbb"</code> is replaced by <code>"3b"</code>.</li>
                    <li>Finally, all the new strings are concatenated together in the same order and a new string is returned.</li>
                </ul>

                <h3>Example</h3>
                <p>For <code>s = "aabbbc"</code>, the output should be <code>solution(s) = "2a3bc"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>s</code></p>
                        <p>String consisting of lowercase English letters.</p>
                        <p>Guaranteed constraints: <code>4 ≤ s.length ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>Encoded version of <code>s</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 11,
        order_index: 50,
        challenge_name: 'chessKnight',
        description: `
            <div className="description-container">
                <p>Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.</p>
                <p>The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter L. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.</p>

                <h3>Example</h3>
                <p>For <code>cell = "a1"</code>, the output should be <code>solution(cell) = 2</code>.</p>
                <p>For <code>cell = "c2"</code>, the output should be <code>solution(cell) = 6</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>cell</code></p>
                        <p>String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.</p>
                        <p>Guaranteed constraints: <code>cell.length = 2</code>, <code>'a' ≤ cell[0] ≤ 'h'</code>, <code>1 ≤ cell[1] ≤ 8</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of different moves the knight can perform from the given position.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 11,
        order_index: 51,
        challenge_name: 'deleteDigit',
        description: `
            <div className="description-container">
                <p>Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.</p>

                <h3>Example</h3>
                <p>For <code>n = 152</code>, the output should be <code>solution(n) = 52</code>.</p>
                <p>For <code>n = 1001</code>, the output should be <code>solution(n) = 101</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>Guaranteed constraints: <code>10 ≤ n ≤ 10<sup>6</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The maximal number you can obtain by deleting exactly one digit of the given number.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 52,
        challenge_name: 'longestWord',
        description: `
            <div className="description-container">
                <p>Define a word as a sequence of consecutive English letters. Find the longest word from the given string.</p>

                <h3>Example</h3>
                <p>For <code>text = "Ready, steady, go!"</code>, the output should be <code>solution(text) = "steady"</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>text</code></p>
                        <p>Guaranteed constraints: <code>4 ≤ text.length ≤ 50</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The longest word from <code>text</code>. It's guaranteed that there is a unique output.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 53,
        challenge_name: 'Valid Time',
        description: `
            <div className="description-container">
                <p>Check if the given string is a correct time representation of the 24-hour clock.</p>

                <h3>Example</h3>
                <p>For <code>time = "13:58"</code>, the output should be <code>solution(time) = true</code>.</p>
                <p>For <code>time = "25:51"</code>, the output should be <code>solution(time) = false</code>.</p>
                <p>For <code>time = "02:76"</code>, the output should be <code>solution(time) = false</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>time</code></p>
                        <p>A string representing time in <code>HH:MM</code> format. It is guaranteed that the first two characters, as well as the last two characters, are digits.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the given representation is correct, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 54,
        challenge_name: 'sumUpNumbers',
        description: `
            <div className="description-container">
                <p>CodeMaster has just returned from shopping. He scanned the check of the items he bought and gave the resulting string to Ratiorg to figure out the total number of purchased items. Since Ratiorg is a bot he is definitely going to automate it, so he needs a program that sums up all the numbers which appear in the given input.</p>

                <h3>Example</h3>
                <p>For <code>inputString = "2 apples, 12 oranges"</code>, the output should be <code>solution(inputString) = 14</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>inputString</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ inputString.length ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The sum of all numbers that appear in the given <code>inputString</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 55,
        challenge_name: 'Different Squares',
        description: `
            <div className="description-container">
                <p>Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.</p>

                <h3>Example</h3>
                <p>For</p>
                <pre><code>matrix = 
                [          
                [1, 2, 1], 
                [2, 2, 2], 
                [2, 2, 2], 
                [1, 2, 3], 
                [2, 2, 1]  
                ]          
                </code></pre>
                <p>the output should be <code>solution(matrix) = 6</code>.</p>
                <p>Here are all 6 different 2 × 2 squares:</p>
                <pre><code>
                    1 2
                    2 2

                    2 1
                    2 2

                    2 2
                    2 2

                    2 2
                    1 2

                    2 2
                    2 3

                    2 3
                    2 1
                </code></pre>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.array.integer <code>matrix</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 100</code>, <code>1 ≤ matrix[i].length ≤ 100</code>, <code>0 ≤ matrix[i][j] ≤ 9</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of different 2 × 2 squares in <code>matrix</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 56,
        challenge_name: 'digitsProduct',
        description: `
            <div className="description-container">
                <p>Given an integer <code>product</code>, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to <code>product</code>. If there is no such integer, return <code>-1</code> instead.</p>

                <h3>Example</h3>
                <p>For <code>product = 12</code>, the output should be <code>solution(product) = 26</code>.</p>
                <p>For <code>product = 19</code>, the output should be <code>solution(product) = -1</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>product</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ product ≤ 600</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The smallest positive integer whose digits' product equals <code>product</code>. Return <code>-1</code> if no such integer exists.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 57,
        challenge_name: 'File Naming',
        description: `
            <div className="description-container">
                <p>You are given an array of strings <code>names</code> representing filenames. The array is sorted in order of file creation, such that <code>names[i]</code> represents the name of a file created before <code>names[i+1]</code> and after <code>names[i-1]</code> (assume 0-based indexing). Because all files must have unique names, files created later with the same name as a file created earlier should have an additional <code>(k)</code> suffix in their names, where <code>k</code> is the smallest positive integer (starting from 1) that does not appear in previous file names.</p>

                <p>Your task is to iterate through all elements of <code>names</code> (from left to right) and update all filenames based on the above. Return an array of proper filenames.</p>

                <h3>Example</h3>
                <p>For <code>names = ["doc", "doc", "image", "doc(1)", "doc"]</code>, the output should be <code>solution(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]</code>.</p>
                <ul>
                    <li>Since <code>names[0] = "doc"</code> and <code>names[1] = "doc"</code>, update <code>names[1] = "doc(1)"</code></li>
                    <li>Since <code>names[1] = "doc(1)"</code> and <code>names[3] = "doc(1)"</code>, update <code>names[3] = "doc(1)(1)"</code></li>
                    <li>Since <code>names[0] = "doc"</code>, <code>names[1] = "doc(1)"</code>, and <code>names[4] = "doc"</code>, update <code>names[4] = "doc(2)"</code></li>
                </ul>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.string <code>names</code></p>
                        <p>Guaranteed constraints: <code>5 ≤ names.length ≤ 1000</code>, <code>1 ≤ names[i].length ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.string</p>
                        <p>An array of properly updated filenames.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 58,
        challenge_name: 'messageFromBinaryCode',
        description: `
            <div className="description-container">
                <p>You are taking part in an Escape Room challenge designed specifically for programmers. During the challenge, you discover a binary code on the wall behind a vase, which you realize is an encrypted message. You suspect that the code represents characters encoded in the extended ASCII table, with each consecutive 8 bits of the code standing for a single character.</p>
                <h3>Objective</h3>
                <p>Decode the binary code into a readable message by interpreting each consecutive 8-bit segment as an ASCII character.</p>

                <h3>Example</h3>
                <p>For <code>code = "010010000110010101101100011011000110111100100001"</code>, the output should be <code>solution(code) = "Hello!"</code>.</p>
                <p>Explanation: The first 8 bits <code>01001000</code> translate to 72 in decimal, which corresponds to 'H' in the ASCII table. Similarly, subsequent 8-bit segments translate to the characters 'e', 'l', 'l', 'o', and '!' respectively, forming the word "Hello!".</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>code</code></p>
                        <p>Guaranteed constraints: <code>0 < code.length < 800</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> string</p>
                        <p>The decoded message as a string.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 59,
        challenge_name: 'spiralNumbers',
        description: `
            <div className="description-container">
                <p>Construct a square matrix of size <code>N × N</code> containing integers from <code>1</code> to <code>N * N</code> in a spiral order. The matrix should start from the top-left corner and fill numbers in a clockwise direction.</p>

                <h3>Example</h3>
                <p>For <code>n = 3</code>, the output should be:</p>
                <pre><code>solution(n) = 
                [          
                [1, 2, 3], 
                [8, 9, 4], 
                [7, 6, 5]  
                ]          
                </code></pre>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>Matrix size, a positive integer. Guaranteed constraints: <code>3 ≤ n ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.array.integer</p>
                        <p>A 2D array representing the matrix in spiral order.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 12,
        order_index: 60,
        challenge_name: 'Sudoku',
        description:`
            <div className="description-container">
                <p>Sudoku is a number-placement puzzle. The objective is to fill a <code>9 × 9</code> grid with digits so that each column, each row, and each of the nine <code>3 × 3</code> sub-grids that compose the grid contains all of the digits from <code>1</code> to <code>9</code>.</p>

                <p>This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.</p>

                <h3>Example</h3>
                <p>For grid = </p><pre><code>
                    [
                    [1, 3, 2, 5, 4, 6, 9, 8, 7],
                    [4, 6, 5, 8, 7, 9, 3, 2, 1],
                    [7, 9, 8, 2, 1, 3, 6, 5, 4],
                    [9, 2, 1, 4, 3, 5, 8, 7, 6],
                    [3, 5, 4, 7, 6, 8, 2, 1, 9],
                    [6, 8, 7, 1, 9, 2, 5, 4, 3],
                    [5, 7, 6, 9, 8, 1, 4, 3, 2],
                    [2, 4, 3, 6, 5, 7, 1, 9, 8],
                    [8, 1, 9, 3, 2, 4, 7, 6, 5]
                    ]
                </code></pre>
                <p>the output should be <code>solution(grid) = true</code>;</p>

                <p>For grid = </p><pre><code>
                    [
                    [1, 3, 4, 2, 5, 6, 9, 8, 7],
                    [4, 6, 8, 5, 7, 9, 3, 2, 1],
                    [7, 9, 2, 8, 1, 3, 6, 5, 4],
                    [9, 2, 3, 1, 4, 5, 8, 7, 6],
                    [3, 5, 7, 4, 6, 8, 2, 1, 9],
                    [6, 8, 1, 7, 9, 2, 5, 4, 3],
                    [5, 7, 6, 9, 8, 1, 4, 3, 2],
                    [2, 4, 5, 6, 3, 7, 1, 9, 8],
                    [8, 1, 9, 3, 2, 4, 7, 6, 5]
                    ]
                </code></pre>
                <p>the output should be <code>solution(grid) = false</code>.</p>
                <p>The output should be <code>false</code>: each of the nine <code>3 × 3</code> sub-grids should contain all of the digits from <code>1</code> to <code>9</code>.</p>

                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.array.integer <code>grid</code></p>
                        <p>A matrix representing a <code>9 × 9</code> grid already filled with numbers from <code>1</code> to <code>9</code>.</p>
                        <p>Guaranteed constraints: <code>grid.length = 9</code>, <code>grid[i].length = 9</code>, <code>1 ≤ grid[i][j] ≤ 9</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the given grid represents a correct solution to Sudoku, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div >
        `
    },
]

exports.seed = async function (knex) {
    await knex('challenges').insert(challenges)
}