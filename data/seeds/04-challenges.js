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
        description: `
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


    //// __________________________________The Core_______________________________ ////

    {
        topic_id: 13,
        order_index: 1,
        challenge_name: 'Add Two Digits',
        description: `
            <div className="description-container">
                <p>Given a two-digit integer <code>n</code>, write a function that returns the sum of its digits.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 29</code>, the output should be <code>solution(n) = 11</code>.</p>
    
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
                        <p>A positive two-digit integer.</p>
                        <p>Guaranteed constraints: <code>10 ≤ n ≤ 99</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The sum of the first and second digits of the input number.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 2,
        challenge_name: 'Largest Number',
        description: `
            <div className="description-container">
                <p>Given an integer <code>n</code>, write a function that returns the largest number that contains exactly <code>n</code> digits.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 2</code>, the output should be <code>solution(n) = 99</code>.</p>
    
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
                        <p>An integer representing the number of digits.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 9</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The largest integer of length <code>n</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 3,
        challenge_name: 'Candies',
        description: `
            <div className="description-container">
                <p><code>n</code> children have got <code>m</code> pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy. Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 3</code> and <code>m = 10</code>, the output should be <code>solution(n, m) = 9</code>.</p>
                <p>Each child will eat 3 pieces. So the answer is 9.</p>
    
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
                        <p>The number of children.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>m</code></p>
                        <p>The number of pieces of candy.</p>
                        <p>Guaranteed constraints: <code>2 ≤ m ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The total number of pieces of candy the children will eat provided they eat as much as they can and all children eat the same amount.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 4,
        challenge_name: 'Seats in Theater',
        description: `
            <div className="description-container">
                <p>Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usually good, but not this time: the performance turned out to be awfully dull. It's so bad you want to sneak out, which is quite simple, especially since the exit is located right behind your row to the left. All you need to do is climb over your seat and make your way to the exit.</p>
                <p>The main problem is your shyness: you're afraid that you'll end up blocking the view (even if only for a couple of seconds) of all the people who sit behind you and in your column or the columns to your left. To gain some courage, you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.</p>
                <p>Given the total number of rows and columns in the theater (<code>nRows</code> and <code>nCols</code>, respectively), and the row and column you're sitting in (<code>row</code> and <code>col</code>), return the number of people who sit strictly behind you and in your column or to the left, assuming all seats are occupied.</p>
    
                <h3>Example</h3>
                <p>For <code>nCols = 16</code>, <code>nRows = 11</code>, <code>col = 5</code>, and <code>row = 3</code>, the output should be <code>solution(nCols, nRows, col, row) = 96</code>.</p>
                <p>Here is what the theater looks like:</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>nCols</code></p>
                        <p>An integer, the number of theater's columns.</p>
                        <p>Guaranteed constraints: <code>1 ≤ nCols ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>nRows</code></p>
                        <p>An integer, the number of theater's rows.</p>
                        <p>Guaranteed constraints: <code>1 ≤ nRows ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>col</code></p>
                        <p>An integer, the column number of your own seat (1-based).</p>
                        <p>Guaranteed constraints: <code>1 ≤ col ≤ nCols</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>row</code></p>
                        <p>An integer, the row number of your own seat (1-based).</p>
                        <p>Guaranteed constraints: <code>1 ≤ row ≤ nRows</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of people who sit strictly behind you and in your column or to the left.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 5,
        challenge_name: 'Max Multiple',
        description: `
            <div className="description-container">
                <p>Given a divisor and a bound, find the largest integer <code>N</code> such that:</p>
                <ul>
                    <li><code>N</code> is divisible by <code>divisor</code>.</li>
                    <li><code>N</code> is less than or equal to <code>bound</code>.</li>
                    <li><code>N</code> is greater than 0.</li>
                </ul>
                <p>It is guaranteed that such a number exists.</p>
    
                <h3>Example</h3>
                <p>For <code>divisor = 3</code> and <code>bound = 10</code>, the output should be <code>solution(divisor, bound) = 9</code>.</p>
                <p>The largest integer divisible by 3 and not larger than 10 is 9.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>divisor</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ divisor ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>bound</code></p>
                        <p>Guaranteed constraints: <code>5 ≤ bound ≤ 100</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The largest integer not greater than <code>bound</code> that is divisible by <code>divisor</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 6,
        challenge_name: 'Circle of Numbers2',
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
        topic_id: 13,
        order_index: 7,
        challenge_name: 'Late Ride',
        description: `
            <div className="description-container">
                <p>One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automatically begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.</p>
                <p>When you finally decide to head back, you realize there's a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you don't have your watch on you and don't know what time it is. All you know thanks to the bike's timer is that <code>n</code> minutes have passed since 00:00.</p>
                <p>Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format <code>hh:mm</code> would show.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 240</code>, the output should be <code>solution(n) = 4</code>.</p>
                <p>Since 240 minutes have passed, the current time is 04:00. The digits sum up to 0 + 4 + 0 + 0 = 4, which is the answer.</p>
                <p>For <code>n = 808</code>, the output should be <code>solution(n) = 14</code>.</p>
                <p>808 minutes mean that it's 13:28 now, so the answer should be 1 + 3 + 2 + 8 = 14.</p>
    
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
                        <p>The duration of your ride, in minutes. It is guaranteed that you've been riding for less than a day (24 hours).</p>
                        <p>Guaranteed constraints: <code>0 ≤ n < 60 · 24</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The sum of the digits the digital timer would show.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 13,
        order_index: 8,
        challenge_name: 'Phone Call',
        description: `
            <div className="description-container">
                <p>Some phone usage rate may be described as follows:</p>
                <ul>
                    <li>The first minute of a call costs <code>min1</code> cents.</li>
                    <li>Each minute from the 2nd up to the 10th (inclusive) costs <code>min2_10</code> cents.</li>
                    <li>Each minute after the 10th costs <code>min11</code> cents.</li>
                </ul>
                <p>You have <code>s</code> cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?</p>
    
                <h3>Example</h3>
                <p>For <code>min1 = 3</code>, <code>min2_10 = 1</code>, <code>min11 = 2</code>, and <code>s = 20</code>, the output should be <code>solution(min1, min2_10, min11, s) = 14</code>.</p>
                <p>Here's why:</p>
                <ul>
                    <li>The first minute costs 3 cents, which leaves you with 20 - 3 = 17 cents;</li>
                    <li>The total cost of minutes 2 through 10 is 1 * 9 = 9, so you can talk 9 more minutes and still have 17 - 9 = 8 cents;</li>
                    <li>Each next minute costs 2 cents, which means that you can talk 8 / 2 = 4 more minutes.</li>
                </ul>
                <p>Thus, the longest call you can make is 1 + 9 + 4 = 14 minutes long.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>min1</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ min1 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>min2_10</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ min2_10 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>min11</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ min11 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>s</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ s ≤ 500</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The duration of the longest call (in minutes rounded down to the nearest integer) you can have.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 9,
        challenge_name: 'Reach Next Level.',
        description: `
            <div className="description-container">
                <p>You are playing an RPG game. Currently your experience points (XP) total is equal to <code>experience</code>. To reach the next level your XP should be at least at <code>threshold</code>. If you kill the monster in front of you, you will gain more experience points in the amount of <code>reward</code>.</p>
                <p>Given values <code>experience</code>, <code>threshold</code>, and <code>reward</code>, check if you reach the next level after killing the monster.</p>
    
                <h3>Example</h3>
                <p>For <code>experience = 10</code>, <code>threshold = 15</code>, and <code>reward = 5</code>, the output should be <code>solution(experience, threshold, reward) = true</code>.</p>
                <p>For <code>experience = 10</code>, <code>threshold = 15</code>, and <code>reward = 4</code>, the output should be <code>solution(experience, threshold, reward) = false</code>.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>experience</code></p>
                        <p>Guaranteed constraints: <code>3 ≤ experience ≤ 250</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>threshold</code></p>
                        <p>Guaranteed constraints: <code>5 ≤ threshold ≤ 300</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>reward</code></p>
                        <p>Guaranteed constraints: <code>2 ≤ reward ≤ 65</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if you reach the next level, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 10,
        challenge_name: 'Knapsack Light.',
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
                        <p>The total maximum value of the items you can take with you.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 11,
        challenge_name: 'Extra Number.',
        description: `
            <div className="description-container">
                <p>You're given three integers, <code>a</code>, <code>b</code>, and <code>c</code>. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?</p>
    
                <h3>Example</h3>
                <p>For <code>a = 2</code>, <code>b = 7</code>, and <code>c = 2</code>, the output should be <code>solution(a, b, c) = 7</code>.</p>
                <p>The two equal numbers are <code>a</code> and <code>c</code>. The third number (<code>b</code>) equals 7, which is the answer.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ a ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ b ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>c</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ c ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The value of the integer that is different from the other two.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 12,
        challenge_name: 'Is Infinite Process?.',
        description: `
            <div className="description-container">
                <p>Given integers <code>a</code> and <code>b</code>, determine whether the following pseudocode results in an infinite loop:</p>
                <pre><code>
    while a is not equal to b do
      increase a by 1
      decrease b by 1
                </code></pre>
                <p>Assume that the program is executed on a virtual machine which can store arbitrarily long numbers and execute forever.</p>
    
                <h3>Example</h3>
                <p>For <code>a = 2</code> and <code>b = 6</code>, the output should be <code>solution(a, b) = false</code>.</p>
                <p>For <code>a = 2</code> and <code>b = 3</code>, the output should be <code>solution(a, b) = true</code>.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ a ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ b ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the pseudocode will never stop, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 13,
        challenge_name: 'Arithmetic Expression.',
        description: `
            <div className="description-container">
                <p>Consider an arithmetic expression of the form <code>a#b=c</code>. Check whether it is possible to replace <code>#</code> with one of the four signs: <code>+</code>, <code>-</code>, <code>*</code>, or <code>/</code> to obtain a correct expression.</p>
    
                <h3>Example</h3>
                <p>For <code>a = 2</code>, <code>b = 3</code>, and <code>c = 5</code>, the output should be <code>solution(a, b, c) = true</code>.</p>
                <p>We can replace <code>#</code> with a <code>+</code> to obtain <code>2 + 3 = 5</code>, so the answer is true.</p>
                <p>For <code>a = 8</code>, <code>b = 2</code>, and <code>c = 4</code>, the output should be <code>solution(a, b, c) = true</code>.</p>
                <p>We can replace <code>#</code> with a <code>/</code> to obtain <code>8 / 2 = 4</code>, so the answer is true.</p>
                <p>For <code>a = 8</code>, <code>b = 3</code>, and <code>c = 2</code>, the output should be <code>solution(a, b, c) = false</code>.</p>
                <p><code>8 + 3 = 11 ≠ 2;</code></p>
                <p><code>8 - 3 = 5 ≠ 2;</code></p>
                <p><code>8 * 3 = 24 ≠ 2;</code></p>
                <p><code>8 / 3 = 2.6 ≠ 2.</code></p>
                <p>So the answer is false.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ a ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ b ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>c</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ c ≤ 20</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the desired replacement is possible, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 14,
        challenge_name: 'Tennis Set.',
        description: `
            <div className="description-container">
                <p>In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.</p>
    
                <p>Given two integers <code>score1</code> and <code>score2</code>, your task is to determine if it is possible for a tennis set to be finished with a final score of <code>score1 : score2</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>score1 = 3</code> and <code>score2 = 6</code>, the output should be <code>solution(score1, score2) = true</code>.</p>
                <p>Since player 1 hadn't reached 5 wins, the set ends once player 2 has won 6 games.</p>
    
                <p>For <code>score1 = 8</code> and <code>score2 = 5</code>, the output should be <code>solution(score1, score2) = false</code>.</p>
                <p>Since both players won at least 5 games, the set would've ended once one of them won the 7th one.</p>
    
                <p>For <code>score1 = 6</code> and <code>score2 = 5</code>, the output should be <code>solution(score1, score2) = false</code>.</p>
                <p>This set will continue until one of these players wins their 7th game, so this can't be the final score.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>score1</code></p>
                        <p>Number of games won by the 1st player, non-negative integer. Guaranteed constraints: <code>0 ≤ score1 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>score2</code></p>
                        <p>Number of games won by the 2nd player, non-negative integer. Guaranteed constraints: <code>0 ≤ score2 ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>score1 : score2</code> represents a possible score for an ended set, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 15,
        challenge_name: 'Will You?',
        description: `
            <div className="description-container">
                <p>Once Mary heard a famous song, and a line from it stuck in her head. That line was "Will you still love me when I'm no longer young and beautiful?". Mary believes that a person is loved if and only if he/she is both young and beautiful, but this is quite a depressing thought, so she wants to put her belief to the test.</p>
    
                <p>Knowing whether a person is young, beautiful, and loved, find out if they contradict Mary's belief.</p>
    
                <p>A person contradicts Mary's belief if one of the following statements is true:</p>
                <ul>
                    <li>they are young and beautiful but not loved;</li>
                    <li>they are loved but not young or not beautiful.</li>
                </ul>
    
                <h3>Example</h3>
                <p>For <code>young = true</code>, <code>beautiful = true</code>, and <code>loved = true</code>, the output should be <code>solution(young, beautiful, loved) = false</code>.</p>
                <p>Young and beautiful people are loved according to Mary's belief.</p>
    
                <p>For <code>young = true</code>, <code>beautiful = false</code>, and <code>loved = true</code>, the output should be <code>solution(young, beautiful, loved) = true</code>.</p>
                <p>Mary doesn't believe that not beautiful people can be loved.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> boolean <code>young</code></p>
                    </li>
                    <li>
                        <p><span>[input]</span> boolean <code>beautiful</code></p>
                    </li>
                    <li>
                        <p><span>[input]</span> boolean <code>loved</code></p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if the person contradicts Mary's belief, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 14,
        order_index: 16,
        challenge_name: 'Metro Card.',
        description: `
            <div className="description-container">
                <p>You just bought a public transit card that allows you to ride the Metro for a certain number of days.</p>
    
                <p>Here is how it works: upon first receiving the card, the system allocates you a 31-day pass, which equals the number of days in January. The second time you pay for the card, your pass is extended by 28 days, i.e. the number of days in February (note that leap years are not considered), and so on. The 13th time you extend the pass, you get 31 days again.</p>
    
                <p>You just ran out of days on the card, and unfortunately you've forgotten how many times your pass has been extended so far. However, you do remember the number of days you were able to ride the Metro during this most recent month. Figure out the number of days by which your pass will now be extended, and return all the options as an array sorted in increasing order.</p>
    
                <h3>Example</h3>
                <p>For <code>lastNumberOfDays = 30</code>, the output should be <code>solution(lastNumberOfDays) = [31]</code>.</p>
                <p>There are 30 days in April, June, September, and November, so the next months to consider are May, July, October, or December. All of them have exactly 31 days, which means that you will definitely get a 31-days pass the next time you extend your card.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>lastNumberOfDays</code></p>
                        <p>A positive integer, the number of days for which the card was extended the last time.</p>
                        <p>Guaranteed constraints: <code>lastNumberOfDays = 28 or lastNumberOfDays = 30 or lastNumberOfDays = 31</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array of integers</p>
                        <p>An array of positive integers, the possible number of days for which you will extend your pass. The elements of the array can only be equal to 28, 30, or 31 and must be sorted in increasing order.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 17,
        challenge_name: 'Kill K-th Bit',
        description: `
            <div className="description-container">
                <p>In order to stop the Mad Coder evil genius you need to decipher the encrypted message he sent to his minions. The message contains several numbers that, when typed into a supercomputer, will launch a missile into the sky blocking out the sun, and making all the people on Earth grumpy and sad.</p>
    
                <p>You figured out that some numbers have a modified single digit in their binary representation. More specifically, in the given number <code>n</code> the <code>k</code>th bit from the right was initially set to 0, but its current value might be different. It's now up to you to write a function that will change the <code>k</code>th bit of <code>n</code> back to 0.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 37</code> and <code>k = 3</code>, the output should be <code>solution(n, k) = 33</code>.</p>
                <p>37<sub>10</sub> = 100101<sub>2</sub> ~> 100001<sub>2</sub> = 33<sub>10</sub>.</p>
    
                <p>For <code>n = 37</code> and <code>k = 4</code>, the output should be <code>solution(n, k) = 37</code>.</p>
                <p>The 4th bit is 0 already (looks like the Mad Coder forgot to encrypt this number), so the answer is still 37.</p>
    
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
                        <p>Guaranteed constraints: <code>0 ≤ n ≤ 231 - 1</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>k</code></p>
                        <p>The 1-based index of the changed bit (counting from the right).</p>
                        <p>Guaranteed constraints: <code>1 ≤ k ≤ 31</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the integer <code>n</code> with the <code>k</code>th bit set to 0.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 18,
        challenge_name: 'Array Packing.',
        description: `
            <div className="description-container">
                <p>You are given an array of up to four non-negative integers, each less than 256.</p>
    
                <p>Your task is to pack these integers into one number <code>M</code> in the following way:</p>
                <ul>
                    <li>The first element of the array occupies the first 8 bits of <code>M</code>;</li>
                    <li>The second element occupies the next 8 bits, and so on.</li>
                </ul>
                <p>Return the obtained integer <code>M</code>.</p>
    
                <p><strong>Note:</strong> The phrase "first bits of <code>M</code>" refers to the least significant bits of <code>M</code> - the right-most bits of an integer. For further clarification see the following example.</p>
    
                <h3>Example</h3>
                <p>For <code>a = [24, 85, 0]</code>, the output should be <code>solution(a) = 21784</code>.</p>
                <p>An array <code>[24, 85, 0]</code> looks like <code>[00011000, 01010101, 00000000]</code> in binary. After packing these into one number we get <code>00000000 01010101 00011000</code> (spaces are placed for convenience), which equals to 21784.</p>
    
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
                        <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 4</code>, <code>0 ≤ a[i] < 256</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the packed integer <code>M</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 19,
        challenge_name: 'Range Bit Count',
        description: `
            <div className="description-container">
                <p>You are given two numbers <code>a</code> and <code>b</code> where <code>0 ≤ a ≤ b</code>. Imagine you construct an array of all the integers from <code>a</code> to <code>b</code> inclusive. You need to count the number of <code>1</code>s in the binary representations of all the numbers in the array.</p>
    
                <h3>Example</h3>
                <p>For <code>a = 2</code> and <code>b = 7</code>, the output should be <code>solution(a, b) = 11</code>.</p>
                <p>Given <code>a = 2</code> and <code>b = 7</code> the array is: <code>[2, 3, 4, 5, 6, 7]</code>. Converting the numbers to binary, we get <code>[10, 11, 100, 101, 110, 111]</code>, which contains <code>1 + 2 + 1 + 2 + 2 + 3 = 11</code> <code>1</code>s.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ a ≤ b</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>a ≤ b ≤ 10</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the total number of <code>1</code>s in the binary representations of all integers from <code>a</code> to <code>b</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 20,
        challenge_name: 'Mirror Bits',
        description: `
            <div className="description-container">
                <p>Reverse the order of the bits in a given integer.</p>
    
                <h3>Example</h3>
                <p>For <code>a = 97</code>, the output should be <code>solution(a) = 67</code>.</p>
                <p>97 equals to <code>1100001</code> in binary, which is <code>1000011</code> after mirroring, and that is 67 in base 10.</p>
    
                <p>For <code>a = 8</code>, the output should be <code>solution(a) = 1</code>.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>5 ≤ a ≤ 105</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the integer that results from reversing the order of the bits in <code>a</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 21,
        challenge_name: 'Second-Rightmost Zero Bit',
        description: `
            <div className="description-container">
                <p>Presented with the integer <code>n</code>, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.</p>
                <p>Return the value of <code>2^{position\_of\_the\_found\_bit}</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 37</code>, the output should be <code>solution(n) = 8</code>.</p>
                <p>37<sub>10</sub> = <code>100101</code><sub>2</sub>. The second rightmost zero bit is at position 3 (0-based) from the right in the binary representation of <code>n</code>. Thus, the answer is <code>2^3 = 8</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>4 ≤ n ≤ 230</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the value of <code>2^{position\_of\_the\_found\_bit}</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 22,
        challenge_name: 'Swap Adjacent Bits',
        description: `
            <div className="description-container">
                <p>You're given an arbitrary 32-bit integer <code>n</code>. Take its binary representation, split bits into pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 13</code>, the output should be <code>solution(n) = 14</code>.</p>
                <p>13<sub>10</sub> = <code>1101</code><sub>2</sub> ~> {<code>11</code>} {<code>01</code>}<sub>2</sub> ~> <code>1110</code><sub>2</sub> = 14<sub>10</sub>.</p>
    
                <p>For <code>n = 74</code>, the output should be <code>solution(n) = 133</code>.</p>
                <p>74<sub>10</sub> = <code>01001010</code><sub>2</sub> ~> {<code>01</code>} {<code>00</code>} {<code>10</code>} {<code>10</code>}<sub>2</sub> ~> <code>10000101</code><sub>2</sub> = 133<sub>10</sub>.</p>
                <p>Note the preceding zero written in front of the initial number: since both numbers are 32-bit integers, they have 32 bits in their binary representation. The preceding zeros in other cases don't matter, so they are omitted. Here, however, it does make a difference.</p>
    
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
                        <p>Guaranteed constraints: <code>0 ≤ n < 230</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the decimal number obtained after swapping bits in each pair.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 23,
        challenge_name: 'Different Rightmost Bit',
        description: `
            <div className="description-container">
                <p>You're given two integers <code>n</code> and <code>m</code>. Find the position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 11</code> and <code>m = 13</code>, the output should be <code>solution(n, m) = 2</code>.</p>
                <p>11<sub>10</sub> = <code>1011</code><sub>2</sub>, 13<sub>10</sub> = <code>1101</code><sub>2</sub>. The rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations. So the answer is <code>2<sup>1</sup> = 2</code>.</p>
    
                <p>For <code>n = 7</code> and <code>m = 23</code>, the output should be <code>solution(n, m) = 16</code>.</p>
                <p>7<sub>10</sub> = <code>111</code><sub>2</sub>, 23<sub>10</sub> = <code>10111</code><sub>2</sub>. The rightmost differing bit is at position 4 (0-based). So the answer is <code>2<sup>4</sup> = 16</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>0 ≤ n ≤ 230</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>m</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ m ≤ 230</code>, <code>n ≠ m</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the value of <code>2<sup>position_of_the_found_bit</sup></code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 15,
        order_index: 24,
        challenge_name: 'Rightmost Equal Bit Pair',
        description: `
            <div className="description-container">
                <p>You're given two integers <code>n</code> and <code>m</code>. Find the position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 10</code> and <code>m = 11</code>, the output should be <code>solution(n, m) = 2</code>.</p>
                <p>10<sub>10</sub> = <code>1010</code><sub>2</sub>, 11<sub>10</sub> = <code>1011</code><sub>2</sub>. The position of the rightmost pair of equal bits is the bit at position 1 (0-based) from the right in the binary representations. So the answer is <code>2<sup>1</sup> = 2</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>0 ≤ n ≤ 230</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>m</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ m ≤ 230</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the value of <code>2<sup>position_of_the_found_pair</sup></code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 25,
        challenge_name: 'Least Factorial.',
        description: `
            <div className="description-container">
                <p>Given an integer <code>n</code>, find the minimal <code>k</code> such that:</p>
                <ul>
                    <li><code>k = m!</code> (where <code>m!</code> = 1 * 2 * ... * <code>m</code> for some integer <code>m</code>),</li>
                    <li><code>k &gt;= n</code>.</li>
                </ul>
                <p>In other words, find the smallest factorial which is not less than <code>n</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 17</code>, the output should be <code>solution(n) = 24</code>.</p>
                <p>17 &lt; 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 &lt; 17).</p>
    
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
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 120</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the smallest factorial <code>k</code> such that <code>k &gt;= n</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 26,
        challenge_name: 'Count Sum of Two Representations 2',
        description: `
            <div className="description-container">
                <p>Given integers <code>n</code>, <code>l</code>, and <code>r</code>, find the number of ways to represent <code>n</code> as a sum of two integers <code>A</code> and <code>B</code> such that <code>l ≤ A ≤ B ≤ r</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 6</code>, <code>l = 2</code>, and <code>r = 4</code>, the output should be <code>solution(n, l, r) = 2</code>.</p>
                <p>There are just two ways to write 6 as <code>A + B</code>, where <code>2 ≤ A ≤ B ≤ 4</code>: <code>6 = 2 + 4</code> and <code>6 = 3 + 3</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>5 ≤ n ≤ 10^9</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>l</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ l ≤ r</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>r</code></p>
                        <p>Guaranteed constraints: <code>l ≤ r ≤ 10^9</code>, <code>r - l ≤ 10^6</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the number of ways to represent <code>n</code> as <code>A + B</code> within the given range.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 27,
        challenge_name: 'Magical Well',
        description: `
            <div className="description-container">
                <p>You are standing at a magical well. It has two positive integers written on it: <code>a</code> and <code>b</code>. Each time you cast a magic marble into the well, it gives you <code>a * b</code> dollars and then both <code>a</code> and <code>b</code> increase by 1. You have <code>n</code> magic marbles. How much money will you make?</p>
    
                <h3>Example</h3>
                <p>For <code>a = 1</code>, <code>b = 2</code>, and <code>n = 2</code>, the output should be <code>solution(a, b, n) = 8</code>.</p>
                <p>You will cast your first marble and get $2, after which the numbers will become 2 and 3. When you cast your second marble, the well will give you $6. Overall, you'll make $8. So, the output is 8.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ a ≤ 2000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ b ≤ 2000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>n</code></p>
                        <p>The number of magic marbles in your possession, a non-negative integer.</p>
                        <p>Guaranteed constraints: <code>0 ≤ n ≤ 5</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>Return the total amount of money you will make.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 28,
        challenge_name: 'Lineup',
        description: `
            <div className="description-container">
                <p>To prepare his students for an upcoming game, the sports coach decides to try some new training drills. To begin with, he lines them up and starts with the following warm-up exercise: when the coach says 'L', he instructs the students to turn to the left. Alternatively, when he says 'R', they should turn to the right. Finally, when the coach says 'A', the students should turn around.</p>
    
                <p>Unfortunately, some students (not all of them, but at least one) can't tell left from right, meaning they always turn right when they hear 'L' and left when they hear 'R'. The coach wants to know how many times the students end up facing the same direction.</p>
    
                <p>Given the list of commands the coach has given, count the number of such commands after which the students will be facing the same direction.</p>
    
                <h3>Example</h3>
                <p>For <code>commands = "LLARL"</code>, the output should be <code>solution(commands) = 3</code>.</p>
                <p>Let's say that there are 4 students, and the second one can't tell left from right. In this case, only after the second, third, and fifth commands will the students face the same direction.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> string <code>commands</code></p>
                        <p>String consisting of characters <code>'L'</code>, <code>'R'</code>, and <code>'A'</code> only.</p>
                        <p>Guaranteed constraints: <code>0 ≤ commands.length ≤ 35</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of commands after which students face the same direction.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 29,
        challenge_name: 'Addition Without Carrying',
        description: `
            <div className="description-container">
                <p>A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.</p>
    
                <p>Given two integers, your task is to find the result that the child will get.</p>
    
                <p><strong>Note:</strong> The child had learned from this site, so feel free to check it out too if you are not familiar with column addition.</p>
    
                <h3>Example</h3>
                <p>For <code>param1 = 456</code> and <code>param2 = 1734</code>, the output should be <code>solution(param1, param2) = 1180</code>.</p>
                <pre>
                   456
                  1734
                + ____
                  1180
                </pre>
                <p>The child performs the following operations from right to left:</p>
                <ul>
                    <li><code>6 + 4 = 10</code> but the child forgets about carrying the 1 and just writes down the 0 in the last column</li>
                    <li><code>5 + 3 = 8</code></li>
                    <li><code>4 + 7 = 11</code> but the child forgets about the leading 1 and just writes down 1 under 4 and 7.</li>
                    <li>There is no digit in the first number corresponding to the leading digit of the second one, so the child imagines that 0 is written before 456. Thus, they get <code>0 + 1 = 1</code>.</li>
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
                        <p><span>[input]</span> integer <code>param1</code></p>
                        <p>A non-negative integer.</p>
                        <p>Guaranteed constraints: <code>0 ≤ param1 < 105</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>param2</code></p>
                        <p>A non-negative integer.</p>
                        <p>Guaranteed constraints: <code>0 ≤ param2 < 6 · 104</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The result that the little child will get by using column addition without carrying.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 30,
        challenge_name: 'Apple Boxes.',
        description: `
            <div className="description-container">
                <p>You have <code>k</code> apple boxes full of apples. Each square box of size <code>m</code> contains <code>m × m</code> apples. You just noticed two interesting properties about the boxes:</p>
                <ul>
                    <li>The smallest box is size 1, the next one is size 2,..., all the way up to size <code>k</code>.</li>
                    <li>Boxes that have an odd size contain only yellow apples. Boxes that have an even size contain only red apples.</li>
                </ul>
                <p>Your task is to calculate the difference between the number of red apples and the number of yellow apples.</p>
    
                <h3>Example</h3>
                <p>For <code>k = 5</code>, the output should be <code>solution(k) = -15</code>.</p>
                <p>
                There are <code>1 + 3 * 3 + 5 * 5 = 35</code> yellow apples and <code>2 * 2 + 4 * 4 = 20</code> red apples, making the answer <code>20 - 35 = -15</code>.
                </p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>k</code></p>
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ k ≤ 40</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The difference between the two types of apples.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 31,
        challenge_name: 'Increase Number Roundness',
        description: `
            <div className="description-container">
                <p>Define an integer's roundness as the number of trailing zeroes in it.</p>
                <p>Given an integer <code>n</code>, check if it's possible to increase <code>n</code>'s roundness by swapping some pair of its digits.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 902200100</code>, the output should be <code>true</code>.</p>
                <p>
                One of the possible ways to increase roundness of <code>n</code> is to swap digit <code>1</code> with digit <code>0</code> preceding it: roundness of <code>902201000</code> is <code>3</code>, and roundness of <code>n</code> is <code>2</code>.
                </p>
    
                <p>For <code>n = 11000</code>, the output should be <code>false</code>.</p>
                <p>
                Roundness of <code>n</code> is <code>3</code>, and there is no way to increase it.
                </p>
    
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
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>100 ≤ n ≤ 10^9</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if it's possible to increase <code>n</code>'s roundness, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 32,
        challenge_name: 'Rounders',
        description: `
            <div className="description-container">
                <p>We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non-zero digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0, if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 15</code>, the output should be <code>20</code>.</p>
                <code>
                15 -> 20
                </code >
    
                <p>For <code>n = 1234</code>, the output should be <code>1000</code>.</p>
                <code>
                1234 -> 1230 -> 1200 -> 1000
                </code>
    
                <p>For <code>n = 1445</code>, the output should be <code>2000</code>.</p>
                <code>
                1445 -> 1450 -> 1500 -> 2000
                </code>
    
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
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 10^8</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The rounded number.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 33,
        challenge_name: 'Candles',
        description: `
            <div className="description-container">
                <p>When a candle finishes burning it leaves a leftover. <code>makeNew</code> leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.</p>
                <p>You have <code>candlesNumber</code> candles in your possession. What's the total number of candles you can burn, assuming that you create new candles as soon as you have enough leftovers?</p>
    
                <h3>Example</h3>
                <p>For <code>candlesNumber = 5</code> and <code>makeNew = 2</code>, the output should be <code>9</code>.</p>
                <p>
                Here is what you can do to burn 9 candles:
    
                burn 5 candles, obtain 5 leftovers;
                create 2 more candles, using 4 leftovers (1 leftover remains);
                burn 2 candles, end up with 3 leftovers;
                create another candle using 2 leftovers (1 leftover remains);
                burn the created candle, which gives another leftover (2 leftovers in total);
                create a candle from the remaining leftovers;
                burn the last candle.
                Thus, you can burn 5 + 2 + 1 + 1 = 9 candles, which is the answer.
                </p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>candlesNumber</code></p>
                        <p>The number of candles you have in your possession.</p>
                        <p>Guaranteed constraints: <code>1 ≤ candlesNumber ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>makeNew</code></p>
                        <p>The number of leftovers that you can use up to create a new candle.</p>
                        <p>Guaranteed constraints: <code>2 ≤ makeNew ≤ 5</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The total number of candles you can burn.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 16,
        order_index: 34,
        challenge_name: 'Count Black Cells.',
        description: `
            <div className="description-container">
                <p>Imagine a white rectangular grid of <code>n</code> rows and <code>m</code> columns divided into two parts by a diagonal line running from the upper left to the lower right corner. Now let's paint the grid in two colors according to the following rules:</p>
                <ul>
                    <li>A cell is painted black if it has at least one point in common with the diagonal;</li>
                    <li>Otherwise, a cell is painted white.</li>
                </ul>
                <p>Count the number of cells painted black.</p>
    
                <h3>Example</h3>
                <p>For <code>n = 3</code> and <code>m = 4</code>, the output should be <code>6</code>.</p>
                <p>
                There are 6 cells that have at least one common point with the diagonal and therefore are painted black.
                </p>
    
                <p>For <code>n = 3</code> and <code>m = 3</code>, the output should be <code>7</code>.</p>
                <p>
                7 cells have at least one common point with the diagonal and are painted black.
                </p>
    
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
                        <p>The number of rows.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 105</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>m</code></p>
                        <p>The number of columns.</p>
                        <p>Guaranteed constraints: <code>1 ≤ m ≤ 105</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of black cells.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 35,
        challenge_name: 'Create Array.',
        description: `
            <div className="description-container">
                <p>Given an integer <code>size</code>, return an array of length <code>size</code> filled with <code>1</code>s.</p>
    
                <h3>Example</h3>
                <p>For <code>size = 4</code>, the output should be <code>[1, 1, 1, 1]</code>.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>size</code></p>
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ size ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>An array of length <code>size</code> filled with <code>1</code>s.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 36,
        challenge_name: 'Array Replace',
        description: `
            <div className="description-container">
                <p>Given an array of integers, replace all the occurrences of <code>elemToReplace</code> with <code>substitutionElem</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>inputArray = [1, 2, 1]</code>, <code>elemToReplace = 1</code>, and <code>substitutionElem = 3</code>, the output should be <code>[3, 2, 3]</code>.</p>
    
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
                        <p>An array where all occurrences of <code>elemToReplace</code> are replaced with <code>substitutionElem</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 37,
        challenge_name: 'First Reverse Try.',
        description: `
            <div className="description-container">
                <p>Reversing an array can be a tough task, especially for a novice programmer. Mary just started coding, so she would like to start with something basic at first. Instead of reversing the array entirely, she wants to swap just its first and last elements.</p>
                <p>Given an array <code>arr</code>, swap its first and last elements and return the resulting array.</p>
    
                <h3>Example</h3>
                <p>For <code>arr = [1, 2, 3, 4, 5]</code>, the output should be <code>[5, 2, 3, 4, 1]</code>.</p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>arr</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ arr.length ≤ 50</code>, <code>-10<sup>4</sup> ≤ arr[i] ≤ 10<sup>4</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>Array <code>arr</code> with its first and its last elements swapped.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 38,
        challenge_name: 'Concatenate Arrays.',
        description: `
            <div className="description-container">
                <p>Given two arrays of integers <code>a</code> and <code>b</code>, obtain the array formed by the elements of <code>a</code> followed by the elements of <code>b</code>.</p>
    
                <h3>Example</h3>
                <p>For <code>a = [2, 2, 1]</code> and <code>b = [10, 11]</code>, the output should be <code>[2, 2, 1, 10, 11]</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 10</code>, <code>1 ≤ a[i] ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>b</code></p>
                        <p>Guaranteed constraints: <code>0 ≤ b.length ≤ 10</code>, <code>1 ≤ b[i] ≤ 15</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>The array formed by the elements of <code>a</code> followed by the elements of <code>b</code>.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 39,
        challenge_name: 'Remove Array Part',
        description: `
            <div className="description-container">
                <p>Remove a part of a given array between given 0-based indexes <code>l</code> and <code>r</code> (inclusive).</p>
    
                <h3>Example</h3>
                <p>For <code>inputArray = [2, 3, 2, 3, 4, 5]</code>, <code>l = 2</code>, and <code>r = 4</code>, the output should be <code>[2, 3, 5]</code>.</p>
    
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
                        <p>Guaranteed constraints: <code>2 ≤ inputArray.length ≤ 10<sup>4</sup></code>, <code>-10<sup>5</sup> ≤ inputArray[i] ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>l</code></p>
                        <p>Left index of the part to be removed (0-based).</p>
                        <p>Guaranteed constraints: <code>0 ≤ l ≤ r</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>r</code></p>
                        <p>Right index of the part to be removed (0-based).</p>
                        <p>Guaranteed constraints: <code>l ≤ r < inputArray.length</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p>The array after removing the part between indexes <code>l</code> and <code>r</code> (inclusive).</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 40,
        challenge_name: 'Is Smooth?',
        description: `
            <div className="description-container">
                <p>We define the middle of the array <code>arr</code> as follows:</p>
                <ul>
                    <li>If <code>arr</code> contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;</li>
                    <li>If <code>arr</code> contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.</li>
                </ul>
                <p>An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array <code>arr</code>, determine if it is smooth or not.</p>
    
                <h3>Example</h3>
                <p>For <code>arr = [7, 2, 2, 5, 10, 7]</code>, the output should be <code>true</code>.</p>
                <p>
                    The first and the last elements of <code>arr</code> are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is <code>true</code>.
                </p>
    
                <p>For <code>arr = [-5, -5, 10]</code>, the output should be <code>false</code>.</p>
                <p>
                    The first and middle elements are equal to -5, but the last element equals 10. Thus, <code>arr</code> is not smooth and the output is <code>false</code>.
                </p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>arr</code></p>
                        <p>The given array.</p>
                        <p>Guaranteed constraints: <code>2 ≤ arr.length ≤ 10<sup>5</sup></code>, <code>-10<sup>9</sup> ≤ arr[i] ≤ 10<sup>9</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>arr</code> is smooth, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 41,
        challenge_name: 'Replace Middle',
        description: `
            <div className="description-container">
                <p>We define the middle of the array <code>arr</code> as follows:</p>
                <ul>
                    <li>If <code>arr</code> contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;</li>
                    <li>If <code>arr</code> contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.</li>
                </ul>
                <p>Given array <code>arr</code>, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of the middle. Return the resulting array as the answer.</p>
    
                <h3>Example</h3>
                <p>For <code>arr = [7, 2, 2, 5, 10, 7]</code>, the output should be <code>[7, 2, 7, 10, 7]</code>.</p>
                <p>
                    The middle consists of two elements, 2 and 5. These two elements should be replaced with their sum, i.e. 7.
                </p>
    
                <p>For <code>arr = [-5, -5, 10]</code>, the output should be <code>[-5, -5, 10]</code>.</p>
                <p>
                    The middle is defined as a single element -5, so the initial array with no changes should be returned.
                </p>
    
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> array.integer <code>arr</code></p>
                        <p>The given array.</p>
                        <p>Guaranteed constraints: <code>2 ≤ arr.length ≤ 10<sup>4</sup></code>, <code>-10<sup>3</sup> ≤ arr[i] ≤ 10<sup>3</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> array.integer</p>
                        <p><code>arr</code> with its middle replaced by a single element, or the initial array if the middle consisted of a single element to begin with.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 17,
        order_index: 42,
        challenge_name: 'Make Array Consecutive 2',
        description: `
            <div className="description-container">
                <p>Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having a non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.</p>
        
                <h3>Example</h3>
                <p>For <code>statues = [6, 2, 3, 8]</code>, the output should be <code>3</code>.</p>
                <p>
                    Ratiorg needs statues of sizes 4, 5, and 7.
                </p>
        
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
        topic_id: 18,
        order_index: 43,
        challenge_name: 'Is Power?',
        description: `
            <div className="description-container">
                <p>Determine if the given number is a power of some non-negative integer.</p>
        
                <h3>Example</h3>
                <p>For <code>n = 125</code>, the output should be <code>true</code>.</p>
                <p>For <code>n = 72</code>, the output should be <code>false</code>.</p>
        
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
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 400</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> boolean</p>
                        <p><code>true</code> if <code>n</code> can be represented in the form <code>a^b</code> (a to the power of b) where <code>a</code> and <code>b</code> are some non-negative integers and <code>b ≥ 2</code>, <code>false</code> otherwise.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 18,
        order_index: 44,
        challenge_name: 'Is Sum of Consecutive 2',
        description: `
            <div className="description-container">
                <p>Find the number of ways to express <code>n</code> as the sum of some (at least two) consecutive positive integers.</p>
        
                <h3>Example</h3>
                <p>For <code>n = 9</code>, the output should be <code>2</code>.</p>
                <p>There are two ways to represent <code>n = 9</code>: <code>2 + 3 + 4 = 9</code> and <code>4 + 5 = 9</code>.</p>
        
                <p>For <code>n = 8</code>, the output should be <code>0</code>.</p>
                <p>There are no ways to represent <code>n = 8</code>.</p>
        
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
                        <p>A positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ n ≤ 10<sup>4</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of ways to represent <code>n</code> as the sum of some (at least two) consecutive positive integers.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 18,
        order_index: 45,
        challenge_name: 'Square Digits Sequence',
        description: `
            <div className="description-container">
                <p>Consider a sequence of numbers <code>a<sub>0</sub>, a<sub>1</sub>, ..., a<sub>n</sub></code>, in which each element is equal to the sum of the squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.</p>
        
                <p>Given the first element <code>a<sub>0</sub></code>, find the length of the sequence.</p>
        
                <h3>Example</h3>
                <p>For <code>a<sub>0</sub> = 16</code>, the output should be <code>9</code>.</p>
                <p>Here's how elements of the sequence are constructed:</p>
                <ul>
                    <li><code>a<sub>0</sub> = 16</code></li>
                    <li><code>a<sub>1</sub> = 1<sup>2</sup> + 6<sup>2</sup> = 37</code></li>
                    <li><code>a<sub>2</sub> = 3<sup>2</sup> + 7<sup>2</sup> = 58</code></li>
                    <li><code>a<sub>3</sub> = 5<sup>2</sup> + 8<sup>2</sup> = 89</code></li>
                    <li><code>a<sub>4</sub> = 8<sup>2</sup> + 9<sup>2</sup> = 145</code></li>
                    <li><code>a<sub>5</sub> = 1<sup>2</sup> + 4<sup>2</sup> + 5<sup>2</sup> = 42</code></li>
                    <li><code>a<sub>6</sub> = 4<sup>2</sup> + 2<sup>2</sup> = 20</code></li>
                    <li><code>a<sub>7</sub> = 2<sup>2</sup> + 0<sup>2</sup> = 4</code></li>
                    <li><code>a<sub>8</sub> = 4<sup>2</sup> = 16</code>, which has already occurred before (<code>a<sub>0</sub></code>)</li>
                </ul>
                <p>Thus, there are 9 elements in the sequence.</p>
        
                <p>For <code>a<sub>0</sub> = 103</code>, the output should be <code>4</code>.</p>
                <p>The sequence goes as follows: <code>103 -> 10 -> 1 -> 1</code>, 4 elements altogether.</p>
        
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>a<sub>0</sub></code></p>
                        <p>First element of the sequence, a positive integer.</p>
                        <p>Guaranteed constraints: <code>1 ≤ a<sub>0</sub> ≤ 10<sup>5</sup></code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The length of the sequence before an element is repeated.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 18,
        order_index: 46,
        challenge_name: 'Pages Numbering With Ink',
        description: `
            <div className="description-container">
                <p>You work in a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with the leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and <code>numberOfDigits</code> left. A page is considered numbered if it has the full number printed on it (e.g. if we are working with page 102 but have ink only for two digits then this page will not be considered numbered).</p>
        
                <p>It's guaranteed that you can number the current page, and that you can't number the last one in the book.</p>
        
                <h3>Example</h3>
                <p>For <code>current = 1</code> and <code>numberOfDigits = 5</code>, the output should be <code>5</code>.</p>
                <p>The following numbers will be printed: 1, 2, 3, 4, 5.</p>
        
                <p>For <code>current = 21</code> and <code>numberOfDigits = 5</code>, the output should be <code>22</code>.</p>
                <p>The following numbers will be printed: 21, 22.</p>
        
                <p>For <code>current = 8</code> and <code>numberOfDigits = 4</code>, the output should be <code>10</code>.</p>
                <p>The following numbers will be printed: 8, 9, 10.</p>
        
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>current</code></p>
                        <p>A positive integer, the number on the current page which is not yet printed.</p>
                        <p>Guaranteed constraints: <code>1 ≤ current ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>numberOfDigits</code></p>
                        <p>A positive integer, the number of digits which your printer can print.</p>
                        <p>Guaranteed constraints: <code>1 ≤ numberOfDigits ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The last printed page number.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 18,
        order_index: 47,
        challenge_name: 'Comfortable Numbers',
        description: `
            <div className="description-container">
                <p>Let's say that number <code>a</code> feels comfortable with number <code>b</code> if <code>a ≠ b</code> and <code>b</code> lies in the segment [<code>a - s(a)</code>, <code>a + s(a)</code>], where <code>s(x)</code> is the sum of <code>x</code>'s digits.</p>
        
                <p>How many pairs (<code>a</code>, <code>b</code>) are there, such that <code>a < b</code>, both <code>a</code> and <code>b</code> lie on the segment [<code>l</code>, <code>r</code>], and each number feels comfortable with the other (so <code>a</code> feels comfortable with <code>b</code> and <code>b</code> feels comfortable with <code>a</code>)?</p>
        
                <h3>Example</h3>
                <p>For <code>l = 10</code> and <code>r = 12</code>, the output should be <code>2</code>.</p>
                <p>Here are all values of <code>s(x)</code> to consider:</p>
                <ul>
                    <li><code>s(10) = 1</code>, so 10 is comfortable with 9 and 11;</li>
                    <li><code>s(11) = 2</code>, so 11 is comfortable with 9, 10, 12 and 13;</li>
                    <li><code>s(12) = 3</code>, so 12 is comfortable with 9, 10, 11, 13, 14 and 15.</li>
                </ul>
                <p>Thus, there are 2 pairs of numbers comfortable with each other within the segment [10; 12]: (10, 11) and (11, 12).</p>
        
                <h3>Input/Output</h3>
                <ul>
                    <li>
                        <p><span>[execution time limit]</span> 4 seconds (js)</p>
                    </li>
                    <li>
                        <p><span>[memory limit]</span> 1 GB</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>l</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ l ≤ r ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[input]</span> integer <code>r</code></p>
                        <p>Guaranteed constraints: <code>1 ≤ l ≤ r ≤ 1000</code>.</p>
                    </li>
                    <li>
                        <p><span>[output]</span> integer</p>
                        <p>The number of pairs satisfying all the above conditions.</p>
                    </li>
                </ul>
            </div>
        `
    },
    {
        topic_id: 18,
        order_index: 48,
        challenge_name: 'Weak Numbers',
        description: `
            We define the weakness of number <code>x</code> as the number of positive integers smaller than <code>x</code> that have more divisors than <code>x</code>.
            
            It follows that the weaker the number, the greater overall weakness it has. For the given integer <code>n</code>, you need to answer two questions:
            <ul>
                <li>What is the weakness of the weakest numbers in the range [1, <code>n</code>]?</li>
                <li>How many numbers in the range [1, <code>n</code>] have this weakness?</li>
            </ul>
            
            Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.
            
            <h3>Example</h3>
            <p>For <code>n = 9</code>, the output should be <code>[2, 2]</code>.</p>
            <p>Here are the number of divisors and the specific weakness of each number in range [1, 9]:</p>
            <ul>
                <li>1: d(1) = 1, weakness(1) = 0;</li>
                <li>2: d(2) = 2, weakness(2) = 0;</li>
                <li>3: d(3) = 2, weakness(3) = 0;</li>
                <li>4: d(4) = 3, weakness(4) = 0;</li>
                <li>5: d(5) = 2, weakness(5) = 1;</li>
                <li>6: d(6) = 4, weakness(6) = 0;</li>
                <li>7: d(7) = 2, weakness(7) = 2;</li>
                <li>8: d(8) = 4, weakness(8) = 0;</li>
                <li>9: d(9) = 3, weakness(9) = 2.</li>
            </ul>
            <p>As you can see, the maximal weakness is 2, and there are 2 numbers with that weakness level.</p>
            
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
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array of two elements: the weakness of the weakest number, and the number of integers in range [1, <code>n</code>] with this weakness.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 18,
        order_index: 49,
        challenge_name: 'Rectangle Rotation',
        description: `
            A rectangle with sides equal to even integers <code>a</code> and <code>b</code> is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45-degree angles with the axes.
    
            How many points with integer coordinates are located inside the given rectangle (including on its sides)?
            
            <h3>Example</h3>
            <p>For <code>a = 6</code> and <code>b = 4</code>, the output should be <code>23</code>.</p>
            <p>The following picture illustrates the example, and the 23 points are marked green.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>a</code></p>
                    <p>A positive even integer.</p>
                    <p>Guaranteed constraints: <code>2 ≤ a ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>b</code></p>
                    <p>A positive even integer.</p>
                    <p>Guaranteed constraints: <code>2 ≤ b ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of inner points with integer coordinates.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 18,
        order_index: 50,
        challenge_name: 'Crossword Formation',
        description: `
            You're a crossword fanatic, and have finally decided to try to create your own. However, you also love symmetry and good design, so you come up with a set of rules they should follow:
    
            <ul>
                <li>The crossword must contain exactly four words;</li>
                <li>These four words should form four pairwise intersections;</li>
                <li>All words must be written either left-to-right or top-to-bottom;</li>
                <li>The area of the rectangle formed by empty cells inside the intersections isn't equal to zero.</li>
            </ul>
    
            Given 4 words, find the number of ways to make a crossword following the above-described rules. Note that two crosswords which differ by rotation are considered different.
    
            <h3>Example</h3>
            <p>For <code>words = ["crossword", "square", "formation", "something"]</code>, the output should be <code>6</code>.</p>
            <p>The six crosswords can be formed as shown below:</p>
    
            <pre>
              f                         f                             f
              o                     c r o s s w o r d     c r o s s w o r d
            c r o s s w o r d           r   o                   q     r
              m   q                     m   m                   u     m
              a   u            ;  s q u a r e          ;        a     a
              t   a                     t   t                   r     t
              i   r                     i   h             s o m e t h i n g
            s o m e t h i n g           o   i                         o
              n                         n   n                         n
                                        g                               
                                                                   
              c         s               s                                      
            f o r m a t i o n     c     q               c         s          
              o         m         r     u               r         o      
              s q u a r e       f o r m a t i o n       o         m            
              s         t    ;    s     r            ;  s q u a r e                  
              w         h         s o m e t h i n g     s         t         
              o         i         w                     w         h     
              r         n         o                   f o r m a t i o n            
              d         g         r                     r         n         
                                  d                     d         g             
            </pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.string <code>words</code></p>
                    <p>An array of distinct strings, the words you need to use in your crossword.</p>
                    <p>Guaranteed constraints: <code>words.length = 4</code>, <code>3 ≤ words[i].length < 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of ways to make a correct crossword of the desired formation.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 51,
        challenge_name: 'Enclose In Brackets',
        description: `
            Given a string, enclose it in round brackets.
    
            <h3>Example</h3>
            <p>For <code>inputString = "abacaba"</code>, the output should be <code>(abacaba)</code>.</p>
    
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
                    <p>Guaranteed constraints: <code>0 ≤ inputString.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The input string enclosed in round brackets.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 52,
        challenge_name: 'Proper Noun Correction',
        description: `
            <p>Proper nouns always begin with a capital letter, followed by small letters.</p>
    
            <p>Correct a given proper noun so that it fits this statement.</p>
    
            <h3>Example</h3>
            <p>For <code>noun = "pARiS"</code>, the output should be <code>Paris</code>.</p>
            <p>For <code>noun = "John"</code>, the output should be <code>John</code>.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>noun</code></p>
                    <p>A string representing a proper noun with a mix of capital and small English letters.</p>
                    <p>Guaranteed constraints: <code>1 ≤ noun.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>Corrected (if needed) noun.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 53,
        challenge_name: 'Is Tandem Repeat?',
        description: `
            <p>Determine whether the given string can be obtained by one concatenation of some string to itself.</p>
    
            <h3>Example</h3>
            <p>For <code>inputString = "tandemtandem"</code>, the output should be <code>true</code>.</p>
            <p>For <code>inputString = "qqq"</code>, the output should be <code>false</code>.</p>
            <p>For <code>inputString = "2w2ww"</code>, the output should be <code>false</code>.</p>
    
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
                    <p>Guaranteed constraints: <code>2 ≤ inputString.length ≤ 20</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>inputString</code> represents a string concatenated to itself, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 54,
        challenge_name: 'Is Case-Insensitive Palindrome?',
        description: `
            <p>Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.</p>
    
            <h3>Example</h3>
            <p>For <code>inputString = "AaBaa"</code>, the output should be <code>true</code>.</p>
            <p>"aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.</p>
    
            <p>For <code>inputString = "abac"</code>, the output should be <code>false</code>.</p>
            <p>All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.</p>
    
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
                    <p>Guaranteed constraints: <code>4 ≤ inputString.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the string can become a palindrome through case changes, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 55,
        challenge_name: 'Find Email Domain',
        description: `
            <p>An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").</p>
    
            <p>The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.</p>
    
            <p>Given a valid email address, find its domain part.
    
            <h3>Example</h3>
            <p>For <code>address = "prettyandsimple@example.com"</code>, the output should be <code>"example.com"</code>.</p>
            <p>For <code>address = "fully-qualified-domain@codesignal.com"</code>, the output should be <code>"codesignal.com"</code>.</p>
    
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
        `
    },
    {
        topic_id: 19,
        order_index: 56,
        challenge_name: 'HTML End Tag By Start Tag',
        description: `
            <p>You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.</p>
    
            <p>Given the starting HTML tag, find the appropriate end tag which your editor should propose.</p>
    
            <p>If you are not familiar with HTML, consult with this note.</p>
    
            <h3>Example</h3>
            <p>For <code>startTag = "<button type='button' disabled>"</code>, the output should be <code>"</button>"</code>.</p>
            <p>For <code>startTag = "<i>"</code>, the output should be <code>"</i>"</code>.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>startTag</code></p>
                    <p>Guaranteed constraints: <code>3 ≤ startTag.length ≤ 75</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The appropriate end tag for the given starting tag.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 57,
        challenge_name: 'Is MAC48 Address?',
        description: `
            <p>Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.</p>
    
            <h3>Example</h3>
            <p>For <code>inputString = "AaBaa"</code>, the output should be <code>true</code>.</p>
            <p>"aabaa" is a palindrome as well as "AABAA", "aaBaa", etc.</p>
    
            <p>For <code>inputString = "abac"</code>, the output should be <code>false</code>.</p>
            <p>All the strings which can be obtained via changing case of some group of letters, i.e. "abac", "Abac", "aBAc" and 13 more, are not palindromes.</p>
    
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
                    <p>Guaranteed constraints: <code>4 ≤ inputString.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the string can become a palindrome through case changes, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 19,
        order_index: 58,
        challenge_name: 'Is Unstable Pair?',
        description: `
            <p>Some file managers sort filenames taking into account case of the letters, others compare strings as if all of the letters are of the same case. That may lead to different ways of filename ordering.</p>
    
            <p>Call two filenames an unstable pair if their ordering depends on the case.</p>
    
            <p>To compare two filenames <code>a</code> and <code>b</code>, find the first position <code>i</code> at which <code>a[i] ≠ b[i]</code>. If <code>a[i] < b[i]</code>, then <code>a < b</code>. Otherwise <code>a > b</code>. If such position doesn't exist, the shorter string goes first.</p>
    
            <p>Given two filenames, check whether they form an unstable pair.</p>
    
            <h3>Example</h3>
            <p>For <code>filename1 = "aa"</code> and <code>filename2 = "AAB"</code>, the output should be <code>true</code>.</p>
            <p>Because "AAB" < "aa", but "AAB" > "AA".</p>
    
            <p>For <code>filename1 = "A"</code> and <code>filename2 = "z"</code>, the output should be <code>false</code>.</p>
            <p>Both "A" < "z" and "a" < "z".</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>filename1</code></p>
                    <p>A non-empty string of English letters and digits.</p>
                    <p>Guaranteed constraints: <code>1 ≤ filename1.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>filename2</code></p>
                    <p>A non-empty string of English letters and digits. It's guaranteed that there is no ambiguity, i.e. even being considered in the same case strings are never equal.</p>
                    <p>Guaranteed constraints: <code>1 ≤ filename2.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>filename1</code> and <code>filename2</code> form an unstable pair, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 59,
        challenge_name: 'Strings Construction',
        description: `
            <p>Given two strings <code>a</code> and <code>b</code>, both consisting only of lowercase English letters, your task is to calculate how many strings equal to <code>a</code> can be constructed using only letters from the string <code>b</code>? Each letter can be used only once and in one string only.</p>
    
            <h3>Example</h3>
            <p>For <code>a = "abc"</code> and <code>b = "abccba"</code>, the output should be <code>2</code>.</p>
            <p>We can construct 2 strings <code>a = "abc"</code> using only letters from the string <code>b</code>.</p>
    
            <p>For <code>a = "ab"</code> and <code>b = "abcbcb"</code>, the output should be <code>1</code>.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>a</code></p>
                    <p>String to construct, containing only lowercase English letters.</p>
                    <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>b</code></p>
                    <p>String containing needed letters, containing only lowercase English letters.</p>
                    <p>Guaranteed constraints: <code>1 ≤ b.length ≤ 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of strings <code>a</code> that can be constructed from the string <code>b</code>.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 60,
        challenge_name: 'Is Substitution Cipher?',
        description: `
            <p>A ciphertext alphabet is obtained from the plaintext alphabet by means of rearranging some characters. For example, "bacdef...xyz" will be a simple ciphertext alphabet where 'a' and 'b' are rearranged.</p>
        
            <p>A substitution cipher is a method of encoding where each letter of the plaintext alphabet is replaced with the corresponding (i.e., having the same index) letter of some ciphertext alphabet.</p>
        
            <p>Given two strings, check whether it is possible to obtain them from each other using some (possibly, different) substitution ciphers.</p>
        
            <h3>Example</h3>
            <p>For <code>string1 = "aacb"</code> and <code>string2 = "aabc"</code>, the output should be <code>true</code>.</p>
            <p>Any ciphertext alphabet that starts with <code>acb...</code> would make this transformation possible.</p>
        
            <p>For <code>string1 = "aa"</code> and <code>string2 = "bc"</code>, the output should be <code>false</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>string1</code></p>
                    <p>A string consisting of lowercase English characters.</p>
                    <p>Guaranteed constraints: <code>1 ≤ string1.length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>string2</code></p>
                    <p>A string consisting of lowercase English characters of the same length as <code>string1</code>.</p>
                    <p>Guaranteed constraints: <code>string2.length = string1.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if it is possible to obtain <code>string2</code> from <code>string1</code> using some substitution cipher, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 61,
        challenge_name: 'Create Anagram',
        description: `
            <p>You are given two strings <code>s</code> and <code>t</code> of the same length, consisting of uppercase English letters. Your task is to find the minimum number of "replacement operations" needed to get some anagram of the string <code>t</code> from the string <code>s</code>. A replacement operation is performed by picking exactly one character from the string <code>s</code> and replacing it by some other character.</p>
        
            <h3>Example</h3>
            <p>For <code>s = "AABAA"</code> and <code>t = "BBAAA"</code>, the output should be <code>1</code>.</p>
            <p>We can replace one 'A' in <code>s</code> with 'B' to get "BBBAA", which is an anagram of <code>t</code>.</p>
        
            <p>For <code>s = "OVGHK"</code> and <code>t = "RPGUC"</code>, the output should be <code>4</code>.</p>
            <p>We need to perform four replacements to transform <code>s</code> into an anagram of <code>t</code>.</p>
        
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
                    <p>Guaranteed constraints: <code>5 ≤ s.length ≤ 35</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>t</code></p>
                    <p>Guaranteed constraints: <code>t.length = s.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum number of replacement operations needed to get an anagram of <code>t</code> from <code>s</code>.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 62,
        challenge_name: 'Construct Square',
        description: `
            <p>Given a string consisting of lowercase English letters, find the largest square number which can be obtained by reordering the string's characters and replacing them with any digits you need (leading zeros are not allowed) where same characters always map to the same digits and different characters always map to different digits.</p>
        
            <p>If there is no solution, return <code>-1</code>.</p>
        
            <h3>Example</h3>
            <p>For <code>s = "ab"</code>, the output should be <code>81</code>.</p>
            <p>The largest 2-digit square number with different digits is 81. It can be obtained by mapping 'a' to 8 and 'b' to 1.</p>
        
            <p>For <code>s = "zzz"</code>, the output should be <code>-1</code>.</p>
            <p>There are no 3-digit square numbers with identical digits.</p>
        
            <p>For <code>s = "aba"</code>, the output should be <code>900</code>.</p>
            <p>It can be obtained after reordering the initial string into <code>"baa"</code> and replacing 'a' with 0 and 'b' with 9, which results in the number 900.</p>
        
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
                    <p>Guaranteed constraints: <code>1 ≤ s.length < 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The largest square number that can be obtained or <code>-1</code> if no such number exists.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 63,
        challenge_name: 'Numbers Grouping',
        description: `
            <p>You are given an array of integers that you want to distribute between several groups. The first group should contain numbers from 1 to 104, the second should contain those from 105 to 208, and so on, where each group contains 104 numbers.</p>
        
            <p>All the numbers will then be written down in groups to a text file in such a way that:</p>
            <ul>
                <li>the groups go one after another;</li>
                <li>each non-empty group has a header which occupies one line;</li>
                <li>each number in a group occupies one line.</li>
            </ul>
        
            <p>Calculate how many lines the resulting text file will have.</p>
        
            <h3>Example</h3>
            <p>For <code>a = [20000, 239, 10001, 999999, 10000, 20566, 29999]</code>, the output should be <code>11</code>.</p>
            <p>The numbers can be divided into 4 groups:</p>
            <ul>
                <li>239 and 10000 go to the 1st group (1 ... 104);</li>
                <li>10001 and 20000 go to the 2nd group (105 ... 208);</li>
                <li>20566 and 29999 go to the 3rd group (209 ... 312);</li>
                <li>groups from 4 to 99 are empty;</li>
                <li>999999 goes to the 100th group (9995 ... 106).</li>
            </ul>
            <p>Thus, there will be 4 groups (i.e. four headers) and 7 numbers, so the file will occupy 4 + 7 = 11 lines.</p>
        
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
                    <p>Guaranteed constraints: <code>1 ≤ a.length ≤ 10^5</code>, <code>1 ≤ a[i] ≤ 10^9</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of lines needed to store the grouped numbers.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 64,
        challenge_name: 'Different Squares',
        description: `
            <p>Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.</p>
        
            <h3>Example</h3>
            <p>For the matrix</p>
            <pre><code>
            [[1, 2, 1],
             [2, 2, 2],
             [2, 2, 2],
             [1, 2, 3],
             [2, 2, 1]]
            </code></pre>
            <p>the output should be <code>6</code>.</p>
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
                    <p>The number of different 2 × 2 squares in the matrix.</p>
                </li>
            </ul>
        `
    },
    {
        topic_id: 20,
        order_index: 65,
        challenge_name: 'Most Frequent Digit Sum',
        description: `
            <p>A <code>step(x)</code> operation works like this: it changes a number <code>x</code> into <code>x - s(x)</code>, where <code>s(x)</code> is the sum of <code>x</code>'s digits. You like applying functions to numbers, so given the number <code>n</code>, you decide to build a decreasing sequence of numbers: <code>n</code>, <code>step(n)</code>, <code>step(step(n))</code>, etc., with 0 as the last element.</p>
        
            <p>Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (<code>s(x)</code>). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.</p>
        
            <h3>Example</h3>
            <p>For <code>n = 88</code>, the output should be <code>9</code>.</p>
            <p>Here is the first sequence you built: <code>88, 72, 63, 54, 45, 36, 27, 18, 9, 0</code>; and here is <code>s(x)</code> for each of its elements: <code>16, 9, 9, 9, 9, 9, 9, 9, 9, 0</code>. As you can see, the most frequent number in the second sequence is <code>9</code>.</p>
        
            <p>For <code>n = 8</code>, the output should be <code>8</code>.</p>
            <p>At first you built the following sequence: <code>8, 0</code>. <code>s(x)</code> for each of its elements is: <code>8, 0</code>. As you can see, the answer is <code>8</code> (it appears as often as <code>0</code>, but is greater than it).</p>
        
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
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The most frequent number in the sequence <code>s(n)</code>, <code>s(step(n))</code>, <code>s(step(step(n)))</code>, etc.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 20,
        "order_index": 66,
        "challenge_name": 'Number of Clans',
        "description": `
            <p>Let's call two integers <code>A</code> and <code>B</code> friends if each integer from the array <code>divisors</code> is either a divisor of both <code>A</code> and <code>B</code> or neither <code>A</code> nor <code>B</code>. If two integers are friends, they are said to be in the same clan. How many clans are the integers from 1 to <code>k</code>, inclusive, broken into?</p>
        
            <h3>Example</h3>
            <p>For <code>divisors = [2, 3]</code> and <code>k = 6</code>, the output should be <code>4</code>.</p>
            <p>The numbers 1 and 5 are friends and form a clan, 2 and 4 are friends and form a clan, and 3 and 6 do not have friends and each is a clan by itself. So the numbers 1 through 6 are broken into 4 clans.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>divisors</code></p>
                    <p>A non-empty array of positive integers.</p>
                    <p>Guaranteed constraints: <code>2 ≤ divisors.length < 10</code>, <code>1 ≤ divisors[i] ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>A positive integer.</p>
                    <p>Guaranteed constraints: <code>5 ≤ k ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of clans the integers from 1 to <code>k</code> are broken into.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 67,
        "challenge_name": 'House Numbers Sum',
        "description": `
            <p>A boy is walking a long way from school to his home. To make the walk more fun, he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that, the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.</p>
        
            <p>At some point during the walk, the boy encounters a house with the number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.</p>
        
            <p>For the given sequence of houses, determine the sum that the boy will get. It is guaranteed that there will always be at least one house with 0 on the path.</p>
        
            <h3>Example</h3>
            <p>For <code>inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2]</code>, the output should be <code>11</code>.</p>
            <p>The answer was obtained as <code>5 + 1 + 2 + 3 = 11</code>.</p>
        
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
                    <p>Guaranteed constraints: <code>5 ≤ inputArray.length ≤ 10</code>, <code>0 ≤ inputArray[i] ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The sum of the numbers in the array until the first 0 is encountered.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 68,
        "challenge_name": 'All Longest Strings',
        "description": `
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
        `
    },
    {
        "topic_id": 21,
        "order_index": 69,
        "challenge_name": 'House of Cats',
        "description": `
            <p>There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house, sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.</p>
        
            <h3>Example</h3>
            <p>For <code>legs = 6</code>, the output should be <code>solution(legs) = [1, 3]</code>.</p>
            <p>There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).</p>
        
            <p>For <code>legs = 2</code>, the output should be <code>solution(legs) = [1]</code>.</p>
            <p>There can be only 1 person.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>legs</code></p>
                    <p>The total number of legs in the house. It's guaranteed that this number is even.</p>
                    <p>Guaranteed constraints: <code>0 ≤ legs < 50</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Every possible number of people that can be in the house.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 70,
        "challenge_name": 'Alphabet Subsequence',
        "description": `
            <p>Check whether the given string is a subsequence of the plaintext alphabet.</p>
        
            <h3>Example</h3>
            <p>For <code>s = "effg"</code>, the output should be <code>solution(s) = false</code>.</p>
            <p>For <code>s = "cdce"</code>, the output should be <code>solution(s) = false</code>.</p>
            <p>For <code>s = "ace"</code>, the output should be <code>solution(s) = true</code>.</p>
            <p>For <code>s = "bxz"</code>, the output should be <code>solution(s) = true</code>.</p>
        
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
                    <p>Guaranteed constraints: <code>2 ≤ s.length ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given string is a subsequence of the alphabet, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 71,
        "challenge_name": 'Minimal Number of Coins',
        "description": `
            <p>You find yourself in Bananaland trying to buy a banana. You are super rich so you have an unlimited supply of banana-coins, but you are trying to use as few coins as possible.</p>
        
            <p>The coin values available in Bananaland are stored in a sorted array <code>coins</code>. <code>coins[0] = 1</code>, and for each <code>i</code> (<code>0 < i < coins.length</code>) <code>coins[i]</code> is divisible by <code>coins[i - 1]</code>. Find the minimal number of banana-coins you'll have to spend to buy a banana given the banana's price.</p>
        
            <h3>Example</h3>
            <p>For <code>coins = [1, 2, 10]</code> and <code>price = 28</code>, the output should be <code>solution(coins, price) = 6</code>.</p>
            <p>You have to use 10 twice, and 2 four times.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>coins</code></p>
                    <p>The coin values available in Bananaland.</p>
                    <p>Guaranteed constraints: <code>1 ≤ coins.length ≤ 5</code>, <code>1 ≤ coins[i] ≤ 120</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>price</code></p>
                    <p>A positive integer representing the price of the banana.</p>
                    <p>Guaranteed constraints: <code>8 ≤ price ≤ 250</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of coins you can use to buy the banana.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 72,
        "challenge_name": 'Add Border',
        "description": `
            <p>Given a rectangular matrix of characters, add a border of asterisks (<code>*</code>) to it.</p>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>picture = 
            ["abc",
             "ded"]
            </code></pre>
            <p>the output should be</p>
            <pre><code>solution(picture) = 
            ["*****",
             "*abc*",
             "*ded*",
             "*****"]
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
                    <p><span>[input]</span> array.string <code>picture</code></p>
                    <p>A non-empty array of non-empty equal-length strings.</p>
                    <p>Guaranteed constraints: <code>1 ≤ picture.length ≤ 100</code>, <code>1 ≤ picture[i].length ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>The same matrix of characters, framed with a border of asterisks of width 1.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 73,
        "challenge_name": "Switch Lights",
        "description": `
            <p>N candles are placed in a row, some of them are initially lit. For each candle from the 1st to the Nth the following algorithm is applied: if the observed candle is lit then states of this candle and all candles before it are changed to the opposite. Which candles will remain lit after applying the algorithm to all candles in the order they are placed in the line?</p>
        
            <h3>Example</h3>
            <p>For <code>a = [1, 1, 1, 1, 1]</code>, the output should be <code>solution(a) = [0, 1, 0, 1, 0]</code>.</p>
            <p>For <code>a = [0, 0]</code>, the output should be <code>solution(a) = [0, 0]</code>.</p>
            <p>The candles are not initially lit, so their states are not altered by the algorithm.</p>
        
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
                    <p>Initial situation - array of zeros and ones of length N, 1 means that the corresponding candle is lit.</p>
                    <p>Guaranteed constraints: <code>2 ≤ a.length ≤ 5000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Situation after applying the algorithm - array in the same format as input with the same length.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 74,
        "challenge_name": "Timed Reading",
        "description": `
            <p>Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than <code>maxLength</code>, he simply skipped it and read on.</p>
            
            <p>Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than <code>maxLength</code>.</p>
            
            <p>Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.</p>
            
            <h3>Example</h3>
            <p>For <code>maxLength = 4</code> and <br>
            <code>text = "The Fox asked the stork, 'How is the soup?'"</code>,<br> 
            the output should be <code>solution(maxLength, text) = 7</code>.</p>
            
            <p>The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>maxLength</code></p>
                    <p>A positive integer, the maximum length of the word the boy can read.</p>
                    <p>Guaranteed constraints: <code>1 ≤ maxLength ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>text</code></p>
                    <p>A non-empty string of English letters and punctuation marks.</p>
                    <p>Guaranteed constraints: <code>3 ≤ text.length ≤ 110</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of words the boy has read.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 75,
        "challenge_name": "Elections Winners",
        "description": `
            <p>Elections are in progress!</p>
            
            <p>Given an array of the numbers of votes given to each of the candidates so far, and an integer <code>k</code> equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.</p>
    
            <p>The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.</p>
            
            <h3>Example</h3>
            <p>For <code>votes = [2, 3, 5, 2]</code> and <code>k = 3</code>, the output should be<br>
            <code>solution(votes, k) = 2</code>.</p>
            
            <p>The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.</p>
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
                    <p>Guaranteed constraints: <code>4 ≤ votes.length ≤ 10^5</code>,<br>
                    <code>0 ≤ votes[i] ≤ 10^4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The number of voters who haven't cast their vote yet.</p>
                    <p>Guaranteed constraints: <code>0 ≤ k ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of candidates who still have a chance to win the election.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 76,
        "challenge_name": "Integer to String of Fixed Width",
        "description": `
            <p>Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits (if the number needs to be shortened) or by adding 0s in front of the original number.</p>
    
            <h3>Example</h3>
            <p>For <code>number = 1234</code> and <code>width = 2</code>, the output should be<br>
            <code>solution(number, width) = "34"</code>;</p>
            <p>For <code>number = 1234</code> and <code>width = 4</code>, the output should be<br>
            <code>solution(number, width) = "1234"</code>;</p>
            <p>For <code>number = 1234</code> and <code>width = 5</code>, the output should be<br>
            <code>solution(number, width) = "01234"</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>number</code></p>
                    <p>A non-negative integer.</p>
                    <p>Guaranteed constraints: <code>0 ≤ number ≤ 10^9</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>width</code></p>
                    <p>A positive integer representing the desired length.</p>
                    <p>Guaranteed constraints: <code>1 ≤ width ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The modified version of the number as described above.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 77,
        "challenge_name": "Are Similar?",
        "description": `
            <p>Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.</p>
        
            <p>Given two arrays <code>a</code> and <code>b</code>, check whether they are similar.</p>
        
            <h3>Example</h3>
            <p>For <code>a = [1, 2, 3]</code> and <code>b = [1, 2, 3]</code>, the output should be <code>true</code>.</p>
            <p>The arrays are equal, no need to swap any elements.</p>
        
            <p>For <code>a = [1, 2, 3]</code> and <code>b = [2, 1, 3]</code>, the output should be <code>true</code>.</p>
            <p>We can obtain <code>b</code> from <code>a</code> by swapping 2 and 1 in <code>b</code>.</p>
        
            <p>For <code>a = [1, 2, 2]</code> and <code>b = [2, 1, 1]</code>, the output should be <code>false</code>.</p>
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
                    <p>Guaranteed constraints: <code>3 ≤ a.length ≤ 10^5</code>, <code>1 ≤ a[i] ≤ 1000</code>.</p>
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
        `
    },
    {
        "topic_id": 21,
        "order_index": 78,
        "challenge_name": "Ada Number",
        "description": `
            <p>Consider two following representations of a non-negative integer:</p>
            <ul>
                <li>A simple decimal integer, constructed of a non-empty sequence of digits from 0 to 9;</li>
                <li>An integer with at least one digit in a base from 2 to 16 (inclusive), enclosed between <code>#</code> characters, and preceded by the base, which can only be a number between 2 and 16 in the first representation. For digits from 10 to 15 characters <code>a</code>, <code>b</code>, ..., <code>f</code> and <code>A</code>, <code>B</code>, ..., <code>F</code> are used.</li>
            </ul>
            <p>Additionally, both representations may contain underscore (<code>_</code>) characters; they are used only as separators for improving legibility of numbers and can be ignored while processing a number.</p>
            <p>Your task is to determine whether the given string is a valid integer representation.</p>
            <p><strong>Note:</strong> This is how integer numbers are represented in the programming language Ada.</p>
        
            <h3>Example</h3>
            <p>For <code>line = "123_456_789"</code>, the output should be <code>true</code>.</p>
            <p>For <code>line = "16#123abc#"</code>, the output should be <code>true</code>.</p>
            <p>For <code>line = "10#123abc#"</code>, the output should be <code>false</code>.</p>
            <p>For <code>line = "10#10#123ABC#"</code>, the output should be <code>false</code>.</p>
            <p>For <code>line = "10#0#"</code>, the output should be <code>true</code>.</p>
            <p>For <code>line = "10##"</code>, the output should be <code>false</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>line</code></p>
                    <p>A non-empty string.</p>
                    <p>Guaranteed constraints: <code>2 ≤ line.length ≤ 30</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>line</code> is a valid integer representation, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 21,
        "order_index": 79,
        "challenge_name": 'Three Split',
        "description": `
            <p>You have a long strip of paper with integers written on it in a single line from left to right. You wish to cut the paper into exactly three pieces such that each piece contains at least one integer and the sum of the integers in each piece is the same. You cannot cut through a number, i.e. each initial number will unambiguously belong to one of the pieces after cutting. How many ways can you do it?</p>
            <p>It is guaranteed that the sum of all elements in the array is divisible by 3.</p>
        
            <h3>Example</h3>
            <p>For <code>a = [0, -1, 0, -1, 0, -1]</code>, the output should be <code>4</code>.</p>
            <p>Here are all possible ways:</p>
            <ul>
                <li>[0, -1] [0, -1] [0, -1]</li>
                <li>[0, -1] [0, -1, 0] [-1]</li>
                <li>[0, -1, 0] [-1, 0] [-1]</li>
                <li>[0, -1, 0] [-1] [0, -1]</li>
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
                    <p><span>[input]</span> array.integer <code>a</code></p>
                    <p>Guaranteed constraints: <code>5 ≤ a.length ≤ 10^4</code>, <code>-10^8 ≤ a[i] ≤ 10^8</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 80,
        "challenge_name": 'Character Parity',
        "description": `
            <p>Given a character, check if it represents an odd digit, an even digit, or not a digit at all.</p>
        
            <h3>Example</h3>
            <p>For <code>symbol = '5'</code>, the output should be <code>"odd"</code>.</p>
            <p>For <code>symbol = '8'</code>, the output should be <code>"even"</code>.</p>
            <p>For <code>symbol = 'q'</code>, the output should be <code>"not a digit"</code>.</p>
        
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
                    <p>A symbol to check.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The result can be <code>"odd"</code>, <code>"even"</code>, or <code>"not a digit"</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 81,
        "challenge_name": 'Reflect String',
        "description": `
            <p>Define an alphabet reflection as follows: a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a.</p>
            <p>Define a string reflection as the result of applying the alphabet reflection to each of its characters.</p>
            <p>Reflect the given string.</p>
        
            <h3>Example</h3>
            <p>For <code>inputString = "name"</code>, the output should be <code>"mznv"</code>.</p>
        
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
                    <p>A string of lowercase characters.</p>
                    <p>Guaranteed constraints: <code>3 ≤ inputString.length ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The reflected string.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 82,
        "challenge_name": 'New Numeral System',
        "description": `
            <p>Your Informatics teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, he introduced his own numeral system, which he's convinced will help clarify things. His numeral system has base 26, and its digits are represented by English capital letters - A for 0, B for 1, and so on.</p>
            <p>The teacher assigned you the following numeral system exercise: given a one-digit number, you should find all unordered pairs of one-digit numbers whose values add up to the number.</p>
        
            <h3>Example</h3>
            <p>For <code>number = 'G'</code>, the output should be <code>["A + G", "B + F", "C + E", "D + D"]</code>.</p>
            <p>Translating this into the decimal numeral system we get: number = 6, so it is <code>["0 + 6", "1 + 5", "2 + 4", "3 + 3"]</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> char <code>number</code></p>
                    <p>A character representing a correct one-digit number in the new numeral system.</p>
                    <p>Guaranteed constraints: <code>'A' ≤ number ≤ 'Z'</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>An array of strings in the format <code>"letter1 + letter2"</code>, where <code>"letter1"</code> and <code>"letter2"</code> are correct one-digit numbers in the new numeral system. The strings should be sorted by <code>"letter1"</code>.</p>
                    <p>Note that <code>"letter1 + letter2"</code> and <code>"letter2 + letter1"</code> are equal pairs and we don't consider them to be different.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 83,
        "challenge_name": 'Cipher 26',
        "description": `
            <p>You've intercepted an encrypted message, and you are really curious about its contents. You were able to find out that the message initially contained only lowercase English letters, and was encrypted with the following cipher:</p>
            <ul>
                <li>Let all letters from 'a' to 'z' correspond to the numbers from 0 to 25, respectively.</li>
                <li>The number corresponding to the <i>i</i>th letter of the encrypted message is then equal to the sum of numbers corresponding to the first <i>i</i> letters of the initial unencrypted message modulo 26.</li>
            </ul>
            <p>Now that you know how the message was encrypted, implement the algorithm to decipher it.</p>
        
            <h3>Example</h3>
            <p>For <code>message = "taiaiaertkixquxjnfxxdh"</code>, the output should be <code>"thisisencryptedmessage"</code>.</p>
            <p>The initial message <code>"thisisencryptedmessage"</code> was encrypted as follows:</p>
            <ul>
                <li>letter 0: t -> 19 -> t;</li>
                <li>letter 1: th -> (19 + 7) % 26 -> 0 -> a;</li>
                <li>letter 2: thi -> (19 + 7 + 8) % 26 -> 8 -> i;</li>
                <li>etc.</li>
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
                    <p><span>[input]</span> string <code>message</code></p>
                    <p>An encrypted string containing only lowercase English letters.</p>
                    <p>Guaranteed constraints: <code>1 ≤ message.length ≤ 200</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>A decrypted message.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 84,
        "challenge_name": 'Stolen Lunch',
        "description": `
            <p>When you recently visited your little nephew, he told you a sad story: there's a bully at school who steals his lunch every day, and locks it away in his locker. He also leaves a note with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did: it looks like all the digits in it are replaced with letters and vice versa. Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.</p>
            <p>The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.</p>
        
            <h3>Example</h3>
            <p>For <code>note = "you'll n4v4r 6u4ss 8t: cdja"</code>, the output should be <code>"you'll never guess it: 2390"</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>note</code></p>
                    <p>A string consisting of lowercase English letters, digits, punctuation marks and whitespace characters (' ').</p>
                    <p>Guaranteed constraints: <code>0 ≤ note.length ≤ 500</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The deciphered note.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 85,
        "challenge_name": 'Higher Version',
        "description": `
            <p>Given two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.</p>
            <p>The syntax follows the regular semver ordering rules:</p>
            <ul>
                <li>1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2 < 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0</li>
            </ul>
            <p>There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).</p>
        
            <h3>Example</h3>
            <p>For <code>ver1 = "1.2.2"</code> and <code>ver2 = "1.2.0"</code>, the output should be <code>true</code>.</p>
            <p>For <code>ver1 = "1.0.5"</code> and <code>ver2 = "1.1.0"</code>, the output should be <code>false</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>ver1</code></p>
                    <p>Guaranteed constraints: <code>1 ≤ ver1.length ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>ver2</code></p>
                    <p>Guaranteed constraints: <code>1 ≤ ver2.length ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>ver1</code> is higher than <code>ver2</code>, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 86,
        "challenge_name": 'Decipher',
        "description": `
            <p>Consider the following ciphering algorithm:</p>
            <ul>
                <li>For each character replace it with its code.</li>
                <li>Concatenate all of the obtained numbers.</li>
            </ul>
            <p>Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.</p>
            <p><strong>Note:</strong> Here the character's code means its decimal ASCII code, the numerical representation of a character used by most modern programming languages.</p>
        
            <h3>Example</h3>
            <p>For <code>cipher = "10197115121"</code>, the output should be <code>"easy"</code>.</p>
            <p>Explanation: <code>charCode('e') = 101</code>, <code>charCode('a') = 97</code>, <code>charCode('s') = 115</code> and <code>charCode('y') = 121</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>cipher</code></p>
                    <p>A non-empty string which is guaranteed to be a cipher for some other string of lowercase letters.</p>
                    <p>Guaranteed constraints: <code>2 ≤ cipher.length ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The decoded original string of lowercase letters.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 22,
        "order_index": 87,
        "challenge_name": 'Alphanumeric Less',
        "description": `
            <p>An alphanumeric ordering of strings is defined as follows: each string is considered as a sequence of tokens, where each token is a letter or a number (as opposed to an isolated digit, as is the case in lexicographic ordering). For example, the tokens of the string <code>"ab01c004"</code> are <code>[a, b, 01, c, 004]</code>. In order to compare two strings, we'll first break them down into tokens and then compare the corresponding pairs of tokens with each other (i.e. compare the first token of the first string with the first token of the second string, etc).</p>
            
            <p>Here is how tokens are compared:</p>
            <ul>
                <li>If a letter is compared with another letter, the usual alphabetical order applies.</li>
                <li>A number is always considered less than a letter.</li>
                <li>When two numbers are compared, their values are compared. Leading zeros, if any, are ignored.</li>
            </ul>

            <p>If at some point one string has no more tokens left while the other one still does, the one with fewer tokens is considered smaller.</p>
            <p>If the two strings <code>s1</code> and <code>s2</code> appear to be equal, consider the smallest index <code>i</code> such that <code>tokens(s1)[i]</code> and <code>tokens(s2)[i]</code> (where <code>tokens(s)[i]</code> is the <code>ith</code> token of <code>string s)</code> differ only by the number of leading zeros. If no such i exists, the strings are indeed equal. Otherwise, the string whose ith token has more leading zeros is considered smaller.</p>
            
        
            <h3>Examples</h3>
            <p>For <code>s1 = "a"</code> and <code>s2 = "a1"</code>, the output should be <code>true</code>.</p>
            <p>For <code>s1 = "ab"</code> and <code>s2 = "a1"</code>, the output should be <code>false</code>.</p>
            <p>For <code>s1 = "b"</code> and <code>s2 = "a1"</code>, the output should be <code>false</code>.</p>
        
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
                    <p>A string consisting of English letters and digits.</p>
                    <p>Guaranteed constraints: <code>1 ≤ s1.length ≤ 20</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>s2</code></p>
                    <p>A string consisting of English letters and digits.</p>
                    <p>Guaranteed constraints: <code>1 ≤ s2.length ≤ 20</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>s1</code> is alphanumerically strictly less than <code>s2</code>, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 88,
        "challenge_name": 'Array Conversion',
        "description": `
        <p>Given an array of <code>2k</code> integers (for some integer <code>k</code>), perform the following operations until the array contains only one element:</p>
        <ul>
            <li>On the <code>1st, 3rd, 5th,</code> etc. iterations (1-based) replace each pair of consecutive elements with their sum;</li>
            <li>On the <code>2nd, 4th, 6th,</code> etc. iterations replace each pair of consecutive elements with their product.</li>
        </ul>
        <p>After the algorithm has finished, there will be a single element left in the array. Return that element.</p>
    
        <h3>Example</h3>
        <p>For <code>inputArray = [1, 2, 3, 4, 5, 6, 7, 8]</code>, the output should be <code>186</code>.</p>
        <p>We have <code>[1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186]</code>, so the answer is 186.</p>
    
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
                <p>Guaranteed constraints: <code>1 ≤ inputArray.length ≤ 27</code>, <code>-100 ≤ inputArray[i] ≤ 100</code>.</p>
            </li>
            <li>
                <p><span>[output]</span> integer</p>
                <p>The single element left in the array after performing the operations.</p>
            </li>
        </ul>
    `
    },
    {
        "topic_id": 23,
        "order_index": 89,
        "challenge_name": 'Array Previous Less',
        "description": `
            <p>Given an array of integers, for each position <code>i</code>, search among the previous positions for the last (from the left) position that contains a smaller value. Store this value at position <code>i</code> in the answer. If no such value can be found, store <code>-1</code> instead.</p>
        
            <h3>Example</h3>
            <p>For <code>items = [3, 5, 2, 4, 5]</code>, the output should be <code>[-1, 3, -1, 2, 4]</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>items</code></p>
                    <p>A non-empty array of positive integers.</p>
                    <p>Guaranteed constraints: <code>3 ≤ items.length ≤ 15</code>, <code>1 ≤ items[i] ≤ 200</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>An array containing answer values computed as described above.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 90,
        "challenge_name": 'Pair of Shoes',
        "description": `
            <p>Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:</p>
            <ul>
                <li><code>type</code> indicates if it's a left or a right shoe;</li>
                <li><code>size</code> is the size of the shoe.</li>
            </ul>
            <p>Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.</p>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>shoes = 
            [[0, 21], 
             [1, 23], 
             [1, 21], 
             [0, 23]]
            </code></pre>
            <p>the output should be <code>true</code>;</p>
            
            <p>For</p>
            <pre><code>shoes = 
            [[0, 21], 
             [1, 23], 
             [1, 21], 
             [1, 23]]
            </code></pre>
            <p>the output should be <code>false</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>shoes</code></p>
                    <p>Array of shoes. Each shoe is given in the format <code>[type, size]</code>, where <code>type</code> is either <code>0</code> or <code>1</code> for left and right respectively, and <code>size</code> is a positive integer.</p>
                    <p>Guaranteed constraints: <code>1 ≤ shoes.length ≤ 200</code>, <code>1 ≤ shoes[i][1] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if it is possible to pair the shoes, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 91,
        "challenge_name": 'Combs',
        "description": `
            <p>Miss X has only two combs in her possession, both of which are old and miss a tooth or two. She also has many purses of different lengths, in which she carries the combs. The only way they fit is horizontally and without overlapping. Given teeth' positions on both combs, find the minimum length of the purse she needs to take them with her.</p>
            
            <p>It is guaranteed that there is at least one tooth at each end of the comb. It is also guaranteed that the total length of two strings is smaller than 32. Note, that the combs cannot be rotated or reversed.</p>
            
            <h3>Example</h3>
            <p>For <code>comb1 = "*..*"</code> and <code>comb2 = "*.*"</code> the output should be <code>5</code>.</p>
            <p>Although it is possible to place the combs like on the first picture, the best way to do this is either picture 2 or picture 3.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>comb1</code></p>
                    <p>A comb is represented as a string. If there is an asterisk ('*') in the ith position, there is a tooth there. Otherwise, there is a dot ('.'), which means there is a missing tooth on the comb.</p>
                    <p>Guaranteed constraints: <code>3 ≤ comb1.length ≤ 8</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>comb2</code></p>
                    <p>The second comb is represented in the same way as the first one.</p>
                    <p>Guaranteed constraints: <code>1 ≤ comb2.length ≤ 5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum length of a purse Miss X needs.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 92,
        "challenge_name": 'Strings Crossover',
        "description": `
            <p>Define a crossover operation over two equal-length strings <code>A</code> and <code>B</code> as follows:</p>
            <ul>
                <li>The result of that operation is a string of the same length as the input strings.</li>
                <li><code>result[i]</code> is either <code>A[i]</code> or <code>B[i]</code>, chosen at random.</li>
            </ul>
            <p>Given an array of strings <code>inputArray</code> and a string <code>result</code>, find how many pairs of strings from <code>inputArray</code> produce <code>result</code> as a possible outcome of the crossover operation.</p>
            
            <p>Note that (A, B) and (B, A) are considered the same pair. Also, a pair cannot include the same element of the array twice (however, if there are two equal elements in the array, they can form a pair).</p>
            
            <h3>Example</h3>
            <p>For <code>inputArray = ["abc", "aaa", "aba", "bab"]</code> and <code>result = "bbb"</code> the output should be <code>2</code>.</p>
            
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
                    <p>A non-empty array of equal-length strings.</p>
                    <p>Guaranteed constraints: <code>2 ≤ inputArray.length ≤ 10</code>, <code>1 ≤ inputArray[i].length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>result</code></p>
                    <p>A string of the same length as each of the <code>inputArray</code> elements.</p>
                    <p>Guaranteed constraints: <code>result.length = inputArray[i].length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of pairs of strings from <code>inputArray</code> that can produce <code>result</code> as a possible outcome of the crossover operation.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 93,
        "challenge_name": 'Cyclic String',
        "description": `
            <p>You're given a substring <code>s</code> of some cyclic string. What's the length of the smallest possible string that can be concatenated to itself many times to obtain this cyclic string?</p>
            
            <h3>Example</h3>
            <p>For <code>s = "cabca"</code>, the output should be <code>3</code>.</p>
            <p><code>"cabca"</code> is a substring of a cyclic string <code>"abcabcabcabc..."</code> that can be obtained by concatenating <code>"abc"</code> to itself. Thus, the answer is 3.</p>
            
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
                    <p>Guaranteed constraints: <code>3 ≤ s.length ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The length of the smallest possible string that can be concatenated to itself many times to obtain the cyclic string.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 94,
        "challenge_name": 'Beautiful Text',
        "description": `
            <p>Consider a string containing only letters and whitespaces. It is allowed to replace some (possibly, none) whitespaces with newline symbols to obtain a multiline text. Call a multiline text beautiful if and only if each of its lines (i.e. substrings delimited by a newline character) contains an equal number of characters (only letters and whitespaces should be taken into account when counting the total while newline characters shouldn't). Call the length of the line the text width.</p>
            
            <p>Given a string and some integers <code>l</code> and <code>r</code> (<code>l ≤ r</code>), check if it's possible to obtain a beautiful text from the string with a text width that's within the range [<code>l</code>, <code>r</code>].</p>
            
            <h3>Example</h3>
            <p>For <code>inputString = "Look at this example of a correct text"</code>, <code>l = 5</code>, and <code>r = 15</code>, the output should be <code>true</code>.</p>
            <p>We can replace 13th and 26th characters with <code>'\\n'</code>, and obtain the following multiline text of width 12:</p>
            <pre><code>
    Look at this
    example of a
    correct text
            </code></pre>
            
            <p>For <code>inputString = "abc def ghi"</code>, <code>l = 4</code>, and <code>r = 10</code>, the output should be <code>false</code>.</p>
            <p>There are two ways to obtain a text with lines of equal length from this input, one has width = 3 and another has width = 11 (this is a one-liner). Both of these values are not within our bounds.</p>
            
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
                    <p>Guaranteed constraints: <code>10 ≤ inputString.length ≤ 40</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>l</code></p>
                    <p>A positive integer.</p>
                    <p>Guaranteed constraints: <code>1 ≤ l ≤ r</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>r</code></p>
                    <p>A positive integer.</p>
                    <p>Guaranteed constraints: <code>l ≤ r ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if it's possible to obtain a beautiful text with a text width within the range [<code>l</code>, <code>r</code>], <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 95,
        "challenge_name": 'Runners Meetings',
        "description": `
            <p>Some people run along a straight line in the same direction. They start simultaneously at pairwise distinct positions and run with constant speed (which may differ from person to person).</p>
            
            <p>If two or more people are at the same point at some moment we call that a meeting. The number of people gathered at the same point is called meeting cardinality.</p>
            
            <p>For the given starting positions and speeds of runners find the maximum meeting cardinality assuming that people run infinitely long. If there will be no meetings, return -1 instead.</p>
            
            <h3>Example</h3>
            <p>For <code>startPosition = [1, 4, 2]</code> and <code>speed = [27, 18, 24]</code>, the output should be <code>3</code>.</p>
            <p>In 20 seconds after the runners start running, they end up at the same point. Check out the gif below for better understanding:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>startPosition</code></p>
                    <p>A non-empty array of integers representing starting positions of runners (in meters).</p>
                    <p>Guaranteed constraints: <code>2 ≤ startPosition.length ≤ 100</code>, <code>-10<sup>4</sup> ≤ startPosition[i] ≤ 10<sup>4</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>speed</code></p>
                    <p>Array of positive integers of the same length as <code>startPosition</code> representing speeds of the runners (in meters per minute).</p>
                    <p>Guaranteed constraints: <code>speed.length = startPosition.length</code>, <code>1 ≤ speed[i] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The maximum meeting cardinality or -1 if there will be no meetings.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 96,
        "challenge_name": '',
        "description": `
            <p>It's Christmas time! To share his Christmas spirit with all his friends, the young Christmas Elf decided to send each of them a Christmas e-mail with a nice Christmas tree. Unfortunately, Internet traffic is very expensive in the North Pole, so instead of sending an actual image he got creative and drew the tree using nothing but asterisks ('*' symbols). He has given you the specs (see below) and your task is to write a program that will generate trees following the spec and some initial parameters.</p>
            
            <p>Here is a formal definition of how the tree should be built, but before you read it the Elf HIGHLY recommends first looking at the examples that follow:</p>
            
            <p>Each tree has a crown as follows:</p>
            <pre><code>
             *
             *
            ***
            </code></pre>
            
            <p>Define a line as a horizontal group of asterisks and a level as a collection of levelHeight lines stacked one on top of the other.</p>
            
            <p>Below the crown there are <code>levelNum</code> levels.</p>
            
            <p>The tree is perfectly symmetrical so all the middle asterisks of the lines lie on the center of the tree.</p>
            
            <p>Each line of the same level (excluding the first one) has two more asterisks than the previous one (one added to each end);</p>
            
            <p>The number of asterisks in the first line of each level is chosen as follows:</p>
            <ul>
                <li>The first line of the first level has 5 asterisks;</li>
                <li>The first line of each consecutive level contains two more asterisks than the first line of the previous level.</li>
            </ul>
            
            <p>And finally there is the tree foot which has a height of <code>levelNum</code> and a width of:</p>
            <ul>
                <li><code>levelHeight</code> asterisks if <code>levelHeight</code> is odd;</li>
                <li><code>levelHeight + 1</code> asterisks if <code>levelHeight</code> is even.</li>
            </ul>
            
            <p>Given <code>levelNum</code> and <code>levelHeight</code>, return the Christmas tree of the young elf.</p>
            
            <h3>Example</h3>
            <p>For <code>levelNum = 1</code> and <code>levelHeight = 3</code>, the output should be:</p>
            <pre><code>
                ["    *",
                 "    *",
                 "   ***",
                 "  *****",
                 " *******",
                 "*********",
                 "   ***"]
            </code></pre>
            <p>which represents the following tree:</p>
            <pre><code>
                    ___
              *        |
              *        |-- the crown      
             ***    ___|       
            *****      |
           *******     |-- level 1
          ********* ___|
             ***    ___|-- the foot
            </code></pre>
            
            <p>For <code>levelNum = 2</code> and <code>levelHeight = 4</code>, the output should be:</p>
            <pre><code>
                ["      *", 
                 "      *", 
                 "     ***", 
                 "    *****", 
                 "   *******", 
                 "  *********", 
                 " ***********", 
                 "   *******", 
                 "  *********", 
                 " ***********", 
                 "*************", 
                 "    *****", 
                 "    *****"]
            </code></pre>
            <p>which represents the following tree:</p>
            <pre><code>
                        ___ 
                *          |
                *          | -- the crown
               ***      ___|
              *****        |
             *******       | -- level 1
            *********      |
           ***********  ___|
             *******       |
            *********      | -- level 2
           ***********     |
          ************* ___|
              *****        | -- the foot
              *****     ___|
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
                    <p><span>[input]</span> integer <code>levelNum</code></p>
                    <p>A positive integer, the number of levels.</p>
                    <p>Guaranteed constraints: <code>1 ≤ levelNum ≤ 25</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>levelHeight</code></p>
                    <p>The number of lines in each level.</p>
                    <p>Guaranteed constraints: <code>1 ≤ levelHeight ≤ 25</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>The Christmas tree according to the specs and inputs. Output elements should not contain trailing whitespaces, and at least one of them should start with the '*' symbol.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 23,
        "order_index": 97,
        "challenge_name": 'File Naming',
        "description": `
            <p>You are given an array of strings <code>names</code> representing filenames. The array is sorted in order of file creation, such that <code>names[i]</code> represents the name of a file created before <code>names[i+1]</code> and after <code>names[i-1]</code> (assume 0-based indexing). Because all files must have unique names, files created later with the same name as a file created earlier should have an additional <code>(k)</code> suffix in their names, where <code>k</code> is the smallest positive integer (starting from 1) that does not appear in previous file names.</p>
            
            <p>Your task is to iterate through all elements of <code>names</code> (from left to right) and update all filenames based on the above. Return an array of proper filenames.</p>
            
            <h3>Example</h3>
            <p>For <code>names = ["doc", "doc", "image", "doc(1)", "doc"]</code>, the output should be:</p>
            <code>
                ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"]
            </code><
            <p>Since <code>names[0] = "doc"</code> and <code>names[1] = "doc"</code>, update <code>names[1] = "doc(1)"</code>.<br>
            Since <code>names[1] = "doc(1)"</code> and <code>names[3] = "doc(1)"</code>, update <code>names[3] = "doc(1)(1)"</code>.<br>
            Since <code>names[0] = "doc"</code>, <code>names[1] = "doc(1)"</code>, and <code>names[4] = "doc"</code>, update <code>names[4] = "doc(2)"</code>.</p>
            
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
                    <p>Return an array of proper filenames.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 98,
        "challenge_name": 'Extract Matrix Column',
        "description": `
            <p>Given a rectangular matrix and an integer <code>column</code>, return an array containing the elements of the <code>column</code>th column of the given matrix (the leftmost column is the 0th one).</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
                matrix = 
            [[1, 1, 1, 2], 
             [0, 5, 0, 4], 
             [2, 1, 3, 6]]
            </code></pre>
            <p>and <code>column = 2</code>, the output should be: <code>[1, 0, 3]</code></p>
            
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
                    <p>2-dimensional array of integers representing a rectangular matrix.</p>
                    <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 500</code>, <code>1 ≤ matrix[i].length ≤ 500</code>, <code>0 ≤ matrix[i][j] ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>column</code></p>
                    <p>An integer not greater than the number of matrix columns.</p>
                    <p>Guaranteed constraints: <code>0 ≤ column ≤ matrix[i].length - 1</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Return an array containing the elements of the <code>column</code>th column.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 99,
        "challenge_name": 'Are Isomorphic?',
        "description": `
            <p>Two two-dimensional arrays are isomorphic if they have the same number of rows and each pair of respective rows contains the same number of elements.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
                array1 = 
                [[1, 1, 1],
                 [0, 0]]
            </code></pre>
            <p>and</p>
            <pre><code>
                array2 = 
                [[2, 1, 1],
                 [2, 1]]
            </code></pre>
            <p>the output should be <code>true</code>.</p>
            
            <p>For</p>
            <pre><code>
                array1 = 
                [[2],
                 []]
            </code></pre>
            <p>and</p>
            <pre><code>
                array2 = [[2]]
            </code></pre>
            <p>the output should be <code>false</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>array1</code></p>
                    <p>First two-dimensional array.</p>
                    <p>Guaranteed constraints: <code>1 ≤ array1.length ≤ 5</code>, <code>0 ≤ array1[i].length ≤ 5</code>, <code>0 ≤ array1[i][j] ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>array2</code></p>
                    <p>Second two-dimensional array.</p>
                    <p>Guaranteed constraints: <code>1 ≤ array2.length ≤ 5</code>, <code>0 ≤ array2[i].length ≤ 5</code>, <code>0 ≤ array2[i][j] ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the two arrays are isomorphic, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 100,
        "challenge_name": 'Reverse On Diagonals',
        "description": `
            <p>The longest diagonals of a square matrix are defined as follows:</p>
            <ul>
                <li>The first longest diagonal goes from the top left corner to the bottom right one;</li>
                <li>The second longest diagonal goes from the top right corner to the bottom left one.</li>
            </ul>
            <p>Given a square matrix, your task is to reverse the order of elements on both of its longest diagonals.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
            matrix = 
            [[1, 2, 3],
             [4, 5, 6],
             [7, 8, 9]]
            </code></pre>
            <p>the output should be</p>
            <pre><code>
            solution(matrix) = 
            [[9, 2, 7],
             [4, 5, 6],
             [3, 8, 1]]
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
                    <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 100</code>, <code>matrix.length = matrix[i].length</code>, <code>1 ≤ matrix[i][j] ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>Matrix with the order of elements on its longest diagonals reversed.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 101,
        "challenge_name": 'Swap Diagonals',
        "description": `
            <p>The longest diagonals of a square matrix are defined as follows:</p>
            <ul>
                <li>The first longest diagonal goes from the top left corner to the bottom right one;</li>
                <li>The second longest diagonal goes from the top right corner to the bottom left one.</li>
            </ul>
            <p>Given a square matrix, your task is to swap its longest diagonals by exchanging their elements at the corresponding positions.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
                matrix = 
                [[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]]
            </code></pre>
            <p>the output should be</p>
            <pre><code>
                solution(matrix) = 
                [[3, 2, 1],
                 [4, 5, 6],
                 [9, 8, 7]]
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
                    <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 100</code>, <code>matrix.length = matrix[i].length</code>, <code>1 ≤ matrix[i][j] ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>Matrix with swapped diagonals.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 102,
        "challenge_name": 'Crossing Sum',
        "description": `
            <p>Given a rectangular matrix and integers <code>a</code> and <code>b</code>, consider the union of the <code>a</code>th row and the <code>b</code>th (both 0-based) column of the matrix (i.e. all cells that belong either to the <code>a</code>th row or to the <code>b</code>th column, or to both). Return the sum of all elements of that union.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
                matrix = 
                [[1, 1, 1, 1], 
                 [2, 2, 2, 2], 
                 [3, 3, 3, 3]]
            </code></pre>
            <p> <code>a = 1</code> and <code>b = 3</code> the output should be <code>solution(matrix, a, b) = 12</code></p>

            <p>Here (<code>2 + 2 + 2 + 2</code>) + (<code>1 + 3</code>) = 12.</p>
            
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
                    <p>2-dimensional array of integers representing a rectangular matrix.</p>
                    <p>Guaranteed constraints: <code>1 ≤ matrix.length ≤ 500</code>, <code>1 ≤ matrix[0].length ≤ 500</code>, <code>1 ≤ matrix[i][j] ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>a</code></p>
                    <p>A non-negative integer less than the number of matrix rows.</p>
                    <p>Guaranteed constraints: <code>0 ≤ a < matrix.length</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>b</code></p>
                    <p>A non-negative integer less than the number of matrix columns.</p>
                    <p>Guaranteed constraints: <code>0 ≤ b < matrix[i].length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The sum of all elements of the union.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 103,
        "challenge_name": 'Draw Rectangle',
        "description": `
            <p>You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support the <code>rectangle x1 y1 x2 y2</code> operation, which draws a rectangle that has an upper left corner at (<code>x1</code>, <code>y1</code>) and a lower right corner at (<code>x2</code>, <code>y2</code>). Here the x-axis points from left to right, and the y-axis points from top to bottom.</p>
            
            <p>Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>
                canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
                          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
            </code></pre>
            <p> and <code>rectangle = [1, 1, 4, 3]</code> the output should be</p>
            <pre><code>
                solution(canvas, rectangle) = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                                                ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
                                                ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
                                                ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
                                                ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
            </code></pre>
            <p>Here is the rectangle, colored for illustration:</p>
            <pre><code>
                [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
                 ['a', '*', '-', '-', '*', 'a', 'a', 'a'],
                 ['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
                 ['b', '*', '-', '-', '*', 'b', 'b', 'b'],
                 ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
            </code></pre>
            <p>Note that rectangle sides are depicted as <code>-</code>s and <code>|</code>s, asterisks (<code>*</code>) stand for its corners, and all of the other "pixels" remain the same.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.char <code>canvas</code></p>
                    <p>A non-empty rectangular matrix of characters.</p>
                    <p>Guaranteed constraints: <code>2 ≤ canvas.length ≤ 10</code>, <code>2 ≤ canvas[0].length ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>rectangle</code></p>
                    <p>Array of four integers - <code>[x1, y1, x2, y2]</code>.</p>
                    <p>Guaranteed constraints: <code>0 ≤ x1 < x2 < canvas[i].length</code>, <code>0 ≤ y1 < y2 < canvas.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.char</p>
                    <p>The updated canvas state after applying the rectangle operation.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 104,
        "challenge_name": 'Volleyball Positions',
        "description": `
            <p>You are watching a volleyball tournament, but you missed the beginning of the very first game of your favorite team. Now you're curious about how the coach arranged the players on the field at the start of the game.</p>
            
            <p>The team you favor plays in the following formation:</p>
            <pre><code>
                formation = 
                [[0, 3, 0],
                 [4, 0, 2],
                 [0, 6, 0],
                 [5, 0, 1]]
                </code></pre>
            
            <p>where positive numbers represent positions occupied by players. After the team gains the serve, its members rotate one position in a clockwise direction, so the player in position 2 moves to position 1, the player in position 3 moves to position 2, and so on, with the player in position 1 moving to position 6.</p>
            
            <p>Given the current formation of the team and the number of times <code>k</code> it gained the serve, find the initial position of each player in it.</p>
            
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                formation = 
                [["empty", "Player5", "empty"],
                 ["Player4", "empty", "Player2"],
                 ["empty", "Player3", "empty"],
                 ["Player6", "empty", "Player1"]]
                </code></pre>
            <p>and <code>k = 2</code>, the output should be:</p>
            <pre><code>
                [["empty", "Player1", "empty"],
                 ["Player2", "empty", "Player3"],
                 ["empty", "Player4", "empty"],
                 ["Player5", "empty", "Player6"]]
                </code></pre>
            
            <p>For:</p>
            <pre><code>
                formation = 
                [["empty", "Alice", "empty"],
                 ["Bob", "empty", "Charlie"],
                 ["empty", "Dave", "empty"],
                 ["Eve", "empty", "Frank"]]
                </code></pre>
            <p>and <code>k = 6</code>, the output should be:</p>
            <pre><code>
                [["empty", "Alice", "empty"],
                 ["Bob", "empty", "Charlie"],
                 ["empty", "Dave", "empty"],
                 ["Eve", "empty", "Frank"]]
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
                    <p><span>[input]</span> array.array.string <code>formation</code></p>
                    <p>Array of strings representing names of the players in the positions corresponding to those in the schema above.</p>
                    <p>It is guaranteed that for each empty position the corresponding element of formation is "empty".</p>
                    <p>It is also guaranteed that there is no player called "empty" in the team.</p>
                    <p>Guaranteed constraints: <code>formation.length = 4</code>, <code>formation[i].length = 3</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The number of times the team gained the serve.</p>
                    <p>Guaranteed constraints: <code>0 ≤ k ≤ 10^9</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.string</p>
                    <p>Team arrangement at the start of the game.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 24,
        "order_index": 105,
        "challenge_name": 'Star Rotation',
        "description": `
            <p>Consider a (2k+1) × (2k+1) square subarray of an integer matrix. Let's call the union of the square's two longest diagonals, middle column, and middle row a star. Given the coordinates of the star's center in the matrix and its width, rotate it 45·t degrees clockwise while preserving the positions of all matrix elements that do not belong to the star.</p>
            
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                matrix = [[1, 0, 0, 2, 0, 0, 3],
                          [0, 1, 0, 2, 0, 3, 0],
                          [0, 0, 1, 2, 3, 0, 0],
                          [8, 8, 8, 9, 4, 4, 4],
                          [0, 0, 7, 6, 5, 0, 0],
                          [0, 7, 0, 6, 0, 5, 0],
                          [7, 0, 0, 6, 0, 0, 5]]
            </code></pre>

            <p><code>width = 7<c/ode> <code>center = [3, 3]</code> <code>t = 1</code> the output should be:</p>

            <pre><code>
                [[8, 0, 0, 1, 0, 0, 2],
                 [0, 8, 0, 1, 0, 2, 0],
                 [0, 0, 8, 1, 2, 0, 0],
                 [7, 7, 7, 9, 3, 3, 3],
                 [0, 0, 6, 5, 4, 0, 0],
                 [0, 6, 0, 5, 0, 4, 0],
                 [6, 0, 0, 5, 0, 0, 4]]
            </code></pre>
            
            <p>For:</p>
            <pre><code>
                matrix = [[1, 0, 0, 2, 0, 0, 3],
                          [0, 1, 0, 2, 0, 3, 0],
                          [0, 0, 1, 2, 3, 0, 0],
                          [8, 8, 8, 9, 4, 4, 4],
                          [0, 0, 7, 6, 5, 0, 0]]
            </code></pre>

            <p><code>width = 3</code> <code>center = [1, 5]</code> <code>t = 81</code> the output should be:</p>

            <pre><code>
                [[1, 0, 0, 2, 0, 0, 0],
                 [0, 1, 0, 2, 3, 3, 3],
                 [0, 0, 1, 2, 0, 0, 0],
                 [8, 8, 8, 9, 4, 4, 4],
                 [0, 0, 7, 6, 5, 0, 0]]
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
                    <p>A two-dimensional array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>3 ≤ matrix.length ≤ 15</code></li>
                        <li><code>3 ≤ matrix[i].length ≤ 15</code></li>
                        <li><code>matrix[i].length == matrix[j].length</code></li>
                        <li><code>0 ≤ matrix[i][j] ≤ 99</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>width</code></p>
                    <p>An odd integer representing the star's width. It equals the length of the sides of the bounding square for the star.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>3 ≤ width ≤ min(matrix.length, matrix[i].length)</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>center</code></p>
                    <p>An array of two integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>center.length = 2</code></li>
                        <li><code>(width - 1) / 2 ≤ center[0] < matrix.length - (width - 1) / 2</code></li>
                        <li><code>(width - 1) / 2 ≤ center[1] < matrix[i].length - (width - 1) / 2</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>t</code></p>
                    <p>A non-negative integer denoting how many times the star should be rotated by 45 degrees.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>0 ≤ t ≤ 10^9</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>An array with the specified star rotated by 45 · t degrees.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 106,
        "challenge_name": 'Sudoku',
        "description": `
            <p>Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid contains all of the digits from 1 to 9.</p>
    
            <p>Your task is to check if the given grid of numbers represents a correct solution to Sudoku.</p>
            
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                grid = [[1, 3, 2, 5, 4, 6, 9, 8, 7],
                        [4, 6, 5, 8, 7, 9, 3, 2, 1],
                        [7, 9, 8, 2, 1, 3, 6, 5, 4],
                        [9, 2, 1, 4, 3, 5, 8, 7, 6],
                        [3, 5, 4, 7, 6, 8, 2, 1, 9],
                        [6, 8, 7, 1, 9, 2, 5, 4, 3],
                        [5, 7, 6, 9, 8, 1, 4, 3, 2],
                        [2, 4, 3, 6, 5, 7, 1, 9, 8],
                        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(grid) = true;
                </code></pre>
            
            <p>For:</p>
            <pre><code>
                grid = [[1, 3, 4, 2, 5, 6, 9, 8, 7],
                        [4, 6, 8, 5, 7, 9, 3, 2, 1],
                        [7, 9, 2, 8, 1, 3, 6, 5, 4],
                        [9, 2, 3, 1, 4, 5, 8, 7, 6],
                        [3, 5, 7, 4, 6, 8, 2, 1, 9],
                        [6, 8, 1, 7, 9, 2, 5, 4, 3],
                        [5, 7, 6, 9, 8, 1, 4, 3, 2],
                        [2, 4, 5, 6, 3, 7, 1, 9, 8],
                        [8, 1, 9, 3, 2, 4, 7, 6, 5]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(grid) = false;
                </code></pre>
            
            <p>The output should be false: each of the nine 3 × 3 sub-grids should contain all of the digits from 1 to 9.</p>
            
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
                    <p>A matrix representing a 9 × 9 grid already filled with numbers from 1 to 9.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>grid.length = 9</code></li>
                        <li><code>grid[i].length = 9</code></li>
                        <li><code>1 ≤ grid[i][j] ≤ 9</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given grid represents a correct solution to Sudoku, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 107,
        "challenge_name": 'Minesweeper',
        "description": `
            <p>In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines, you want to create a Minesweeper game setup.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                matrix = [[true, false, false],
                          [false, true, false],
                          [false, false, false]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(matrix) = [[1, 2, 1],
                                    [2, 1, 1],
                                    [1, 1, 1]]
                </code></pre>
            <p>Check out the image below for better understanding:</p>
            
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
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ matrix.length ≤ 100</code></li>
                        <li><code>2 ≤ matrix[0].length ≤ 100</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>Rectangular matrix of the same size as <code>matrix</code> each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 108,
        "challenge_name": 'Box Blur',
        "description": `
            <p>Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.</p>
    
            <p>The pixels in the input image are represented as integers. The algorithm distorts the input image in the following way: Every pixel <code>x</code> in the output image has a value equal to the average value of the pixel values from the 3 × 3 square that has its center at <code>x</code>, including <code>x</code> itself. All the pixels on the border of <code>x</code> are then removed.</p>
    
            <p>Return the blurred image as an integer, with the fractions rounded down.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                image = [[1, 1, 1], 
                         [1, 7, 1], 
                         [1, 1, 1]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(image) = [[1]]
                </code></pre>
            <p>To get the value of the middle pixel in the input 3 × 3 square: (1 + 1 + 1 + 1 + 7 + 1 + 1 + 1 + 1) = 15 / 9 = 1.66666 = 1. The border pixels are cropped from the final result.</p>
    
            <p>For:</p>
            <pre><code>
                image = [[7, 4, 0, 1], 
                         [5, 6, 2, 2], 
                         [6, 10, 7, 8], 
                         [1, 4, 2, 0]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(image) = [[5, 4], 
                                   [4, 4]]
                </code></pre>
            <p>There are four 3 × 3 squares in the input image, so there should be four integers in the blurred output. To get the first value: (7 + 4 + 0 + 5 + 6 + 2 + 6 + 10 + 7) = 47 / 9 = 5.2222 = 5. The other three integers are obtained the same way, then the surrounding integers are cropped from the final result.</p>
    
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
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>3 ≤ image.length ≤ 100</code></li>
                        <li><code>3 ≤ image[0].length ≤ 100</code></li>
                        <li><code>0 ≤ image[i][j] ≤ 255</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>A blurred image represented as integers, obtained through the process in the description.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 109,
        "challenge_name": "Contours Shifting",
        "description": `
            <p>Mark got a rectangular array matrix for his birthday, and now he's thinking about all the fun things he can do with it. He likes shifting a lot, so he decides to shift all of its i-contours in a clockwise direction if i is even, and counterclockwise if i is odd.</p>
    
            <p>Here is how Mark defines i-contours:</p>
            <ul>
                <li>The 0-contour of a rectangular array as the union of left and right columns as well as top and bottom rows;</li>
                <li>Consider the initial matrix without the 0-contour: its 0-contour is the 1-contour of the initial matrix;</li>
                <li>Define 2-contour, 3-contour, etc. in the same manner by removing 0-contours from the obtained arrays.</li>
            </ul>
    
            <p>Implement a function that does exactly what Mark wants to do to his matrix.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                matrix = [[ 1,  2,  3,  4],
                          [ 5,  6,  7,  8],
                          [ 9, 10, 11, 12],
                          [13, 14, 15, 16],
                          [17, 18, 19, 20]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(matrix) = [[ 5,  1,  2,  3],
                                    [ 9,  7, 11,  4],
                                    [13,  6, 15,  8],
                                    [17, 10, 14, 12],
                                    [18, 19, 20, 16]]
                </code></pre>
    
            <p>For: <code>matrix = [[238, 239, 240, 241, 242, 243, 244, 245]]</code> the output should be: <code>solution(matrix) = [[245, 238, 239, 240, 241, 242, 243, 244]]</code></p>
            
            <p>Note, that if a contour is represented by a 1 × n array, its center is considered to be below it.</p>
    
            <p>For:</p>
            <pre><code>
                matrix = [[238],
                          [239],
                          [240],
                          [241],
                          [242],
                          [243],
                          [244],
                          [245]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(matrix) = [[245],
                                    [238],
                                    [239],
                                    [240],
                                    [241],
                                    [242],
                                    [243],
                                    [244]]
                </code></pre>
            <p>If a contour is represented by an n × 1 array, its center is considered to be to the left of it.</p>
    
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
                    <p>A matrix represented as a rectangular array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ matrix.length ≤ 100</code></li>
                        <li><code>1 ≤ matrix[i].length ≤ 100</code></li>
                        <li><code>1 ≤ matrix[i][j] ≤ 1000</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>The matrix with its contours shifted according to the rules specified.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 110,
        "challenge_name": 'Polygon Perimeter',
        "description": `
            <p>You have a rectangular white board with some black cells. The black cells create a connected black figure, i.e. it is possible to get from any black cell to any other one through connected adjacent (sharing a common side) black cells.</p>
    
            <p>Find the perimeter of the black figure assuming that a single cell has unit length.</p>
    
            <p>It's guaranteed that there is at least one black cell on the table.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                matrix = [[false, true,  true ],
                          [true,  true,  false],
                          [true,  false, false]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(matrix) = 12
                </code></pre>
            
            <p>For:</p>
            <pre><code>
                matrix = [[true, true,  true],
                          [true, false, true],
                          [true, true,  true]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(matrix) = 16
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
                    <p><span>[input]</span> array.array.boolean <code>matrix</code></p>
                    <p>A matrix of booleans representing the rectangular board where true means a black cell and false means a white one.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ matrix.length ≤ 5</code></li>
                        <li><code>2 ≤ matrix[0].length ≤ 5</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The perimeter of the black figure.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 111,
        "challenge_name": 'Gravitation',
        "description": `
            <p>You are given a vertical box divided into equal columns. Someone dropped several stones from its top through the columns. Stones are falling straight down at a constant speed (equal for all stones) while possible (i.e. while they haven't reached the ground or they are not blocked by another motionless stone). Given the state of the box at some moment in time, find out which columns become motionless first.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                rows = ["#..##",
                        ".##.#",
                        ".#.##",
                        "....."]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(rows) = [1, 4]
                </code></pre>
            <p>Check out the image below for better understanding:</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li>
                    <p><span>[execution time limit]</span> 4 seconds (js)</p>
                </li>
                <li>
                    <p><span>[memory limit]</span> 1 GB</p>
                </li>
                <li>
                    <p><span>[input]</span> array.string <code>rows</code></p>
                    <p>A non-empty array of strings of equal length consisting only of #-s and .-s describing the box at a specific moment in time. Sharps represent stones, and dots represent empty cells. row[0] corresponds to the upper row. Last element of rows corresponds to the ground level.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ rows.length ≤ 100</code></li>
                        <li><code>2 ≤ rows[i].length ≤ 100</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>A sorted array containing numbers of all columns (leftmost column's number is 0) in which movements will stop at the same second and earlier than in any other column. Assume that if there are no stones in a column then movement stops immediately, i.e. after 0 seconds.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 112,
        "challenge_name": 'Is Information Consistent?',
        "description": `
            <p>Court is in session. We got a group of witnesses who have all taken an oath to tell the truth. The prosecutor is pointing at the defendants one by one and asking each witness a simple question - "guilty or not?". The witnesses are allowed to respond in one of the following three ways:</p>
            <ul>
                <li>I am sure he/she is guilty.</li>
                <li>I am sure he/she is innocent.</li>
                <li>I have no idea.</li>
            </ul>
            <p>The prosecutor has a hunch that one of the witnesses might not be telling the truth so she decides to cross-check all of their testimonies and see if the information gathered is consistent, i.e. there are no two witnesses A and B and a defendant C such that A says C is guilty while B says C is innocent.</p>
    
            <h3>Example</h3>
            <p>For:</p>
            <pre><code>
                evidences = [[ 0, 1, 0, 1], 
                             [-1, 1, 0, 0], 
                             [-1, 0, 0, 1]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(evidences) = true;
                </code></pre>
            <p>For:</p>
            <pre><code>
                evidences = [[ 1, 0], 
                             [-1, 0], 
                             [ 1, 1],
                             [ 1, 1]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(evidences) = false.
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
                    <p><span>[input]</span> array.array.integer <code>evidences</code></p>
                    <p>2-dimensional array of integers representing the set of testimonials. evidences[i][j] is the testimonial of the ith witness on the jth defendant. -1 means "innocent", 0 means "no idea", and 1 means "guilty".</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ evidences.length ≤ 5</code></li>
                        <li><code>2 ≤ evidences[0].length ≤ 10</code></li>
                        <li><code>evidences[i].length = evidences[j].length</code></li>
                        <li><code>-1 ≤ evidences[i][j] ≤ 1</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p>true if the evidence is consistent, false otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 25,
        "order_index": 113,
        "challenge_name": 'Correct Nonogram',
        "description": `
            <p>A nonogram is also known as Paint by Numbers and Japanese Crossword. The aim in this puzzle is to color the grid into black and white squares. At the top of each column, and at the side of each row, there are sets of one or more numbers which describe the runs of black squares in that row/column in exact order. For example, if you see 10 1 along some column/row, this indicates that there will be a run of exactly ten black squares, followed by one or more white squares, followed by a single black square. The cells along the edges of the grid can also be white.</p>
    
            <p>You are given a square nonogram of size <code>size</code>. Its grid is given as a square matrix <code>nonogramField</code> of size <code>(size + 1) / 2 + size</code>, where the first <code>(size + 1) / 2</code> cells of each row and and each column define the numbers for the corresponding row/column, and the rest <code>size × size</code> cells define the grid itself.</p>
    
            <p>Determine if the given nonogram has been solved correctly.</p>
    
            <h3>Example</h3>
            <p>For <code>size = 5</code> and:</p>
            <pre><code>
                nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                                 ["-", "-", "-", "2", "2", "1", "-", "1"],
                                 ["-", "-", "-", "2", "1", "1", "3", "3"],
                                 ["-", "3", "1", "#", "#", "#", ".", "#"],
                                 ["-", "-", "2", "#", "#", ".", ".", "."],
                                 ["-", "-", "2", ".", ".", ".", "#", "#"],
                                 ["-", "1", "2", "#", ".", ".", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(size, nonogramField) = true;
                </code></pre>
    
            <p>For <code>size = 5</code> and:</p>
            <pre><code>
                nonogramField = [["-", "-", "-", "-", "-", "-", "-", "-"],
                                 ["-", "-", "-", "-", "-", "1", "-", "-"],
                                 ["-", "-", "-", "3", "3", "2", "5", "5"],
                                 ["-", "-", "3", ".", ".", ".", "#", "#"],
                                 ["-", "2", "2", "#", "#", "#", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                                 ["-", "-", "5", "#", "#", "#", "#", "#"],
                                 ["-", "-", "2", ".", ".", ".", "#", "#"]]
                </code></pre>
            <p>the output should be:</p>
            <pre><code>
                solution(size, nonogramField) = false.
                </code></pre>
    
            <p>There are three mistakes in the nonogram:</p>
            <ul>
                <li>In the 5th (1-based) row there are numbers ["-", "2", "2"], so there should be two runs of 2 black squares separated by at least one white square. However, there is only one run of 5 black squares.</li>
                <li>In the 6th column there are numbers ["-", "1", "2"], so there should be a run of exactly 1 black square, followed by one or more white squares, followed by another 2 black squares. However, there is a single run of 3 black squares not separated by white ones.</li>
                <li>Finally, in the 4th row there are numbers ["-", "-", "3"], so there should be a single run of exactly 3 black squares. However, there is just a 2-square run in that row.</li>
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
                    <p><span>[input]</span> integer <code>size</code></p>
                    <p>A positive integer, the size of the grid.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>5 ≤ size ≤ 10</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.array.string <code>nonogramField</code></p>
                    <p>A square matrix of strings of size <code>(size + 1) / 2 + size</code> defining the puzzle field.</p>
                    <p>The first <code>(size + 1) / 2</code> cells of each row and each column define the numbers for this row/column. If there is no number in the cell, its value is "-".</p>
                    <p>The remaining <code>size × size</code> cells define the grid, where string "#" denotes black cells and string "." denotes white ones.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>8 ≤ nonogramField.length ≤ 15</code></li>
                        <li><code>nonogramField[i].length = nonogramField.length</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p>true if the given nonogram is solved correctly and false otherwise.</p>
                </li>
            </ul>
        `
    },
    
    
    
    









]

exports.seed = async function (knex) {
    await knex('challenges').insert(challenges)
}