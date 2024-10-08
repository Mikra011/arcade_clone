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


    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////
    //// __________________________________The Core_______________________________ //////// __________________________________The Core_______________________________ ////

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
    {
        "topic_id": 26,
        "order_index": 114,
        "challenge_name": 'Shuffled Array',
        "description": `
            <p>A noob programmer was given two simple tasks: sum and sort the elements of a given array <code>a = [a1, a2, ..., an]</code>. He completed the summing task easily but decided to store the sum in a random position of the original array, which turned out to be a bad idea. Now, he needs to sort the original array <code>a</code>, but since he modified it, he's facing difficulties.</p>
            
            <p>Given the array <code>shuffled</code>, which consists of the elements <code>a1, a2, ..., an</code> and the sum <code>a1 + a2 + ... + an</code> in random order, return the sorted array of the original elements <code>a1, a2, ..., an</code>.</p>
            
            <h3>Example</h3>
            <p>For <code>shuffled = [1, 12, 3, 6, 2]</code>, the output should be:</p>
            <pre><code>solution(shuffled) = [1, 2, 3, 6];</code></pre>
            <p>Here, <code>1 + 3 + 6 + 2 = 12</code>, which means that <code>1, 3, 6</code>, and <code>2</code> are the original elements of the array.</p>
            
            <p>For <code>shuffled = [1, -3, -5, 7, 2]</code>, the output should be:</p>
            <pre><code>solution(shuffled) = [-5, -3, 2, 7];</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>shuffled</code></p>
                    <p>An array of at least two integers. It is guaranteed that there is an index <code>i</code> such that <code>shuffled[i] = shuffled[0] + ... + shuffled[i - 1] + shuffled[i + 1] + ... + shuffled[n]</code>.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ shuffled.length ≤ 10<sup>4</sup></code></li>
                        <li><code>-5 × 10<sup>4</sup> ≤ shuffled[i] ≤ 5 × 10<sup>4</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>A sorted array of <code>shuffled.length - 1</code> elements.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 115,
        "challenge_name": 'Sort by Height',
        "description": `
            <p>Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!</p>
            
            <h3>Example</h3>
            <p>For <code>a = [-1, 150, 190, 170, -1, -1, 160, 180]</code>, the output should be:</p>
            <code>solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190];</code>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>a</code></p>
                    <p>If <code>a[i] = -1</code>, then the <code>i</code>th position is occupied by a tree. Otherwise, <code>a[i]</code> is the height of a person standing in the <code>i</code>th position.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ a.length ≤ 1000</code></li>
                        <li><code>-1 ≤ a[i] ≤ 1000</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Sorted array <code>a</code> with all the trees untouched.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 116,
        "challenge_name": 'Sort By Length',
        "description": `
            <p>Given an array of strings, sort them in the order of increasing lengths. If two strings have the same length, their relative order must be the same as in the initial array.</p>
            
            <h3>Example</h3>
            <p>For</p>

            code>inputArray = ["abc", "", "aaa", "a", "zz"]</code>
            <p>the output should be:</p>

            <code>solution(inputArray) = ["", "a", "zz", "abc", "aaa"];</code>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.string <code>inputArray</code></p>
                    <p>A non-empty array of strings.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>3 ≤ inputArray.length ≤ 100</code></li>
                        <li><code>0 ≤ inputArray[i].length ≤ 100</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>The array sorted by increasing lengths of strings.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 117,
        "challenge_name": 'Boxes Packing',
        "description": `
            <p>You are given <code>n</code> rectangular boxes, where the <code>i</code>th box has the dimensions <code>length<sub>i</sub></code>, <code>width<sub>i</sub></code>, and <code>height<sub>i</sub></code>. Your task is to check if it is possible to pack all boxes into one such that inside each box there is no more than one another box (which, in turn, can contain at most one another box, and so on). More formally, you need to determine whether there exists a sequence of <code>n</code> different numbers <code>p<sub>i</sub></code> (<code>1 ≤ p<sub>i</sub> ≤ n</code>) such that for each <code>1 ≤ i < n</code>, the box number <code>p<sub>i</sub></code> can be put into the box number <code>p<sub>i+1</sub></code>.</p>
            
            <p>A box can be put into another box if all dimensions of the first one are less than the respective dimensions of the second one. You can rotate each box as needed, meaning you can swap its length, width, and height if necessary.</p>
            
            <h3>Example</h3>
            <p>For <code>length = [1, 3, 2]</code>, <code>width = [1, 3, 2]</code>, and <code>height = [1, 3, 2]</code>, the output should be:</p>
            <code>solution(length, width, height) = true;</code>
            
            <p>For <code>length = [1, 1]</code>, <code>width = [1, 1]</code>, and <code>height = [1, 1]</code>, the output should be:</p>
            <code>solution(length, width, height) = false;</code>
            
            <p>For <code>length = [3, 1, 2]</code>, <code>width = [3, 1, 2]</code>, and <code>height = [3, 2, 1]</code>, the output should be:</p>
            <code>solution(length, width, height) = false;</code>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>length</code></p>
                    <p>An array of positive integers representing the lengths of the boxes.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ length.length ≤ 10<sup>4</sup></code></li>
                        <li><code>1 ≤ length[i] ≤ 2 × 10<sup>4</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>width</code></p>
                    <p>An array of positive integers representing the widths of the boxes.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>width.length = length.length</code></li>
                        <li><code>1 ≤ width[i] ≤ 2 × 10<sup>4</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>height</code></p>
                    <p>An array of positive integers representing the heights of the boxes.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>height.length = length.length</code></li>
                        <li><code>1 ≤ height[i] ≤ 2 × 10<sup>4</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if it is possible to pack all boxes into one, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 118,
        "challenge_name": 'Maximum Sum',
        "description": `
            <p>You are given an array of integers <code>a</code>. A range sum query is defined by a pair of non-negative integers <code>l</code> and <code>r</code> (<code>l ≤ r</code>). The output to a range sum query on the given array <code>a</code> is the sum of all the elements of <code>a</code> that have indices from <code>l</code> to <code>r</code>, inclusive.</p>
            
            <p>Your task is to find an algorithm that can rearrange the array <code>a</code> in such a way that the total sum of all the query outputs is maximized, and return this total sum.</p>
            
            <h3>Example</h3>
            <p>For <code>a = [9, 7, 2, 4, 4]</code> and <code>q = [[1, 3], [1, 4], [0, 2]]</code>, the output should be:</p>
            <code>solution(a, q) = 62;</code>
            
            <p>You can achieve this sum if the array <code>a</code> is rearranged to be <code>[2, 9, 7, 4, 4]</code>. In this arrangement:</p>
            <ul>
                <li>The first range sum query <code>[1, 3]</code> returns the sum <code>9 + 7 + 4 = 20</code>.</li>
                <li>The second query <code>[1, 4]</code> returns the sum <code>9 + 7 + 4 + 4 = 24</code>.</li>
                <li>The third query <code>[0, 2]</code> returns the sum <code>2 + 9 + 7 = 18</code>.</li>
            </ul>
            <p>The total sum of all query outputs is <code>20 + 24 + 18 = 62</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>a</code></p>
                    <p>An initial array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ a.length ≤ 10</code></li>
                        <li><code>1 ≤ a[i] ≤ 10</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>q</code></p>
                    <p>An array of range sum queries, where each query is an array of two non-negative integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ q.length ≤ 10</code></li>
                        <li><code>0 ≤ q[i][0] ≤ q[i][1] < a.length</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>Return the maximum possible total sum of the given range sum query outputs.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 119,
        "challenge_name": 'Rows Rearranging',
        "description": `
            <p>Given a rectangular matrix of integers, check if it is possible to rearrange its rows in such a way that all its columns become strictly increasing sequences (read from top to bottom).</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>matrix = 
            [[2, 7, 1], 
             [0, 2, 0], 
             [1, 3, 1]]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(matrix) = false;</code></pre>
            
            <p>For</p>
            <pre><code>matrix = 
            [[6, 4], 
             [2, 2], 
             [4, 3]]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(matrix) = true;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>matrix</code></p>
                    <p>A 2-dimensional array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ matrix.length ≤ 10</code></li>
                        <li><code>1 ≤ matrix[0].length ≤ 10</code></li>
                        <li><code>-300 ≤ matrix[i][j] ≤ 300</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if it is possible to rearrange the rows so that all columns are strictly increasing sequences, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 120,
        "challenge_name": 'Digit Difference Sort',
        "description": `
            <p>Given an array of integers, sort its elements by the difference between their largest and smallest digits. In the case of a tie, the element with the larger index in the array should come first.</p>
            
            <h3>Example</h3>
            <p>For <code>a = [152, 23, 7, 887, 243]</code>, the output should be:</p>
            <code>solution(a) = [7, 887, 23, 243, 152];</code>
            
            <p>Here are the differences of all the numbers:</p>
            <ul>
                <li><code>152</code>: difference = <code>5 - 1 = 4</code></li>
                <li><code>23</code>: difference = <code>3 - 2 = 1</code></li>
                <li><code>7</code>: difference = <code>7 - 7 = 0</code></li>
                <li><code>887</code>: difference = <code>8 - 7 = 1</code></li>
                <li><code>243</code>: difference = <code>4 - 2 = 2</code></li>
            </ul>
            <p><code>23</code> and <code>887</code> have the same difference, but <code>887</code> appears after <code>23</code> in <code>a</code>, so in the sorted array, it comes first.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>a</code></p>
                    <p>An array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>0 ≤ a.length ≤ 10<sup>4</sup></code></li>
                        <li><code>1 ≤ a[i] ≤ 10<sup>5</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array <code>a</code> sorted as described above.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 26,
        "order_index": 121,
        "challenge_name": 'Unique Digit Products',
        "description": `
            <p>Let's call <code>product(x)</code> the product of the digits of <code>x</code>. Given an array of integers <code>a</code>, calculate <code>product(x)</code> for each <code>x</code> in <code>a</code>, and return the number of distinct results you get.</p>
            
            <h3>Example</h3>
            <p>For <code>a = [2, 8, 121, 42, 222, 23]</code>, the output should be:</p>
            <code>solution(a) = 3;</code>
            
            <p>Here are the products of the array's elements:</p>
            <ul>
                <li><code>2</code>: <code>product(2) = 2</code></li>
                <li><code>8</code>: <code>product(8) = 8</code></li>
                <li><code>121</code>: <code>product(121) = 1 * 2 * 1 = 2</code></li>
                <li><code>42</code>: <code>product(42) = 4 * 2 = 8</code></li>
                <li><code>222</code>: <code>product(222) = 2 * 2 * 2 = 8</code></li>
                <li><code>23</code>: <code>product(23) = 2 * 3 = 6</code></li>
            </ul>
            <p>As you can see, there are only 3 different products: <code>2</code>, <code>6</code>, and <code>8</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>a</code></p>
                    <p>An array of integers.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ a.length ≤ 10<sup>5</sup></code></li>
                        <li><code>1 ≤ a[i] ≤ 10<sup>9</sup></code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of different digit products in <code>a</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 122,
        "challenge_name": 'Bishop and Pawn',
        "description": `
            <p>Given the positions of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.</p>
            
            <p>The bishop has no restrictions in distance for each move, but is limited to diagonal movement. Check out the example below to see how it can move:</p>
            
            <h3>Example</h3>
            <p>For <code>bishop = "a1"</code> and <code>pawn = "c3"</code>, the output should be:</p>
            <pre><code>solution(bishop, pawn) = true;</code></pre>
            
            <p>For <code>bishop = "h1"</code> and <code>pawn = "h3"</code>, the output should be:</p>
            <pre><code>solution(bishop, pawn) = false;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>bishop</code></p>
                    <p>Coordinates of the white bishop in the chess notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>bishop.length = 2</code></li>
                        <li><code>'a' ≤ bishop[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ bishop[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>pawn</code></p>
                    <p>Coordinates of the black pawn in the same notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>pawn.length = 2</code></li>
                        <li><code>'a' ≤ pawn[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ pawn[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the bishop can capture the pawn, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 123,
        "challenge_name": 'Chess Knight Moves',
        "description": `
            <p>Given a position of a knight on the standard chessboard, find the number of different moves the knight can perform.</p>
            
            <p>The knight can move to a square that is two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from it. The complete move therefore looks like the letter <code>L</code>. Check out the image below to see all valid moves for a knight piece that is placed on one of the central squares.</p>
            
            <h3>Example</h3>
            <p>For <code>cell = "a1"</code>, the output should be:</p>
            <pre><code>solution(cell) = 2;</code></pre>
            
            <p>For <code>cell = "c2"</code>, the output should be:</p>
            <pre><code>solution(cell) = 6;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>cell</code></p>
                    <p>String consisting of 2 letters - coordinates of the knight on an 8 × 8 chessboard in chess notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>cell.length = 2</code></li>
                        <li><code>'a' ≤ cell[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ cell[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of different moves the knight can perform from the given position.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 124,
        "challenge_name": 'Bishop Diagonal',
        "description": `
            <p>In the Land Of Chess, bishops don't really like each other. In fact, when two bishops happen to stand on the same diagonal, they immediately rush towards the opposite ends of that same diagonal.</p>
            
            <p>Given the initial positions (in chess notation) of two bishops, <code>bishop1</code> and <code>bishop2</code>, calculate their future positions. Keep in mind that bishops won't move unless they see each other along the same diagonal.</p>
            
            <h3>Example</h3>
            <p>For <code>bishop1 = "d7"</code> and <code>bishop2 = "f5"</code>, the output should be:</p>
            <pre><code>solution(bishop1, bishop2) = ["c8", "h3"];</code></pre>
            
            <p>For <code>bishop1 = "d8"</code> and <code>bishop2 = "b5"</code>, the output should be:</p>
            <pre><code>solution(bishop1, bishop2) = ["b5", "d8"];</code></pre>
            
            <p>The bishops don't belong to the same diagonal, so they don't move.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>bishop1</code></p>
                    <p>Coordinates of the first bishop in chess notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>bishop1.length = 2</code></li>
                        <li><code>'a' ≤ bishop1[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ bishop1[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>bishop2</code></p>
                    <p>Coordinates of the second bishop in the same notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>bishop2.length = 2</code></li>
                        <li><code>'a' ≤ bishop2[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ bishop2[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>Coordinates of the bishops in lexicographical order after they check the diagonals they stand on.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 125,
        "challenge_name": 'Whose Turn?',
        "description": `
            <p>Imagine a standard chess board with only two white and two black knights placed in their standard starting positions: the white knights on <code>b1</code> and <code>g1</code>; the black knights on <code>b8</code> and <code>g8</code>.</p>
            
            <p>There are two players: one plays for white, the other for black. During each move, the player picks one of his knights and moves it to an unoccupied square according to standard chess rules. Thus, a knight on d5 can move to any of the following squares: b6, c7, e7, f6, f4, e3, c3, and b4, as long as it is not occupied by either a friendly or an enemy knight.</p>
            
            <p>The players take turns in making moves, starting with the white player. Given the configuration <code>p</code> of the knights after an unspecified number of moves, determine whose turn it is.</p>
            
            <h3>Example</h3>
            <p>For <code>p = "b1;g1;b8;g8"</code>, the output should be:</p>
            <pre><code>solution(p) = true;</code></pre>
            
            <p>The configuration corresponds to the initial state of the game. Thus, it's white's turn.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>p</code></p>
                    <p>The positions of the four knights, starting with white knights, separated by a semicolon, in the chess notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>p.length = 11</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p>true if white is to move, false otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 126,
        "challenge_name": 'Chess Bishop Dream',
        "description": `
            <p>In ChessLand there is a small but proud chess bishop with a recurring dream. In the dream the bishop finds itself on an <code>n × m</code> chessboard with mirrors along each edge, and it is not a bishop but a ray of light. This ray of light moves only along diagonals (the bishop can't imagine any other types of moves even in its dreams), it never stops, and once it reaches an edge or a corner of the chessboard it reflects from it and moves on.</p>
            
            <p>Given the initial position and the direction of the ray, find its position after <code>k</code> steps where a step means either moving from one cell to the neighboring one or reflecting from a corner of the board.</p>
            
            <h3>Example</h3>
            <p>For <code>boardSize = [3, 7]</code>, <code>initPosition = [1, 2]</code>, <code>initDirection = [-1, 1]</code>, and <code>k = 13</code>, the output should be:</p>
            <pre><code>solution(boardSize, initPosition, initDirection, k) = [0, 1];</code></pre>
            
            <p>Here is the bishop's path:</p>
            <pre><code>
    [1, 2] -> [0, 3] -(reflection from the top edge)-> [0, 4] -> 
    [1, 5] -> [2, 6] -(reflection from the bottom right corner)-> [2, 6] ->
    [1, 5] -> [0, 4] -(reflection from the top edge)-> [0, 3] ->
    [1, 2] -> [2, 1] -(reflection from the bottom edge)-> [2, 0] -(reflection from the left edge)->
    [1, 0] -> [0, 1]</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>boardSize</code></p>
                    <p>An array of two integers, the number of rows and columns, respectively. Rows are numbered by integers from 0 to <code>boardSize[0] - 1</code>, columns are numbered by integers from 0 to <code>boardSize[1] - 1</code> (both inclusive).</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ boardSize[i] ≤ 20</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>initPosition</code></p>
                    <p>An array of two integers, indices of the row and the column where the bishop initially stands, respectively.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>0 ≤ initPosition[i] < boardSize[i]</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>initDirection</code></p>
                    <p>An array of two integers representing the initial direction of the bishop. If it stands in <code>(a, b)</code>, the next cell he'll move to is <code>(a + initDirection[0], b + initDirection[1])</code> or whichever it'll reflect to in case it runs into a mirror immediately.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>initDirection[i] ∈ {-1, 1}</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The number of steps to move.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ k ≤ 10^9</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>The position of the bishop after <code>k</code> steps.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 127,
        "challenge_name": 'Chess Triangle',
        "description": `
            <p>Consider a bishop, a knight, and a rook on an <code>n × m</code> chessboard. They are said to form a triangle if each piece attacks exactly one other piece and is attacked by exactly one piece. Calculate the number of ways to choose positions of the pieces to form a triangle.</p>
            
            <p>Note that:</p>
            <ul>
                <li>The bishop attacks pieces sharing the common diagonal with it;</li>
                <li>The rook attacks in horizontal and vertical directions;</li>
                <li>The knight attacks squares which are two squares horizontally and one square vertically, or two squares vertically and one square horizontally away from its position.</li>
            </ul>
            
            <h3>Example</h3>
            <p>For <code>n = 2</code> and <code>m = 3</code>, the output should be:</p>
            <pre><code>solution(n, m) = 8;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>Number of rows in the chessboard.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ n ≤ 40</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>m</code></p>
                    <p>Number of columns in the chessboard.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ m ≤ 40</code></li>
                        <li><code>3 ≤ n · m</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of ways to position the pieces to form a triangle.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 128,
        "challenge_name": 'Amazon Checkmate',
        "description": `
            <p>An amazon (also known as a queen + knight compound) is an imaginary chess piece that can move like a queen or a knight (or, equivalently, like a rook, bishop, or knight). The diagram below shows all squares which the amazon can attack from e4 (circles represent knight-like moves while crosses correspond to queen-like moves).</p>
            
            <p>Recently, you've come across a diagram with only three pieces left on the board: a white amazon, the white king, and the black king. It's black's move. You don't have time to determine whether the game is over or not, but you'd like to figure it out in your head. Unfortunately, the diagram is smudged and you can't see the position of the black king, so you'll need to consider all possible positions.</p>
            
            <p>Given the positions of the white pieces on a standard chessboard (using algebraic notation), your task is to determine the number of possible black king's positions such that:</p>
            <ul>
                <li><strong>it's checkmate</strong> (i.e., black's king is under the amazon's attack and it cannot make a valid move);</li>
                <li><strong>it's check</strong> (i.e., black's king is under the amazon's attack but it can reach a safe square in one move);</li>
                <li><strong>it's stalemate</strong> (i.e., black's king is on a safe square but it cannot make a valid move);</li>
                <li><strong>black's king is on a safe square and it can make a valid move.</strong></li>
            </ul>
            <p>Note that two kings cannot be placed on two adjacent squares (including two diagonally adjacent ones).</p>
            
            <h3>Example</h3>
            <p>For <code>king = "d3"</code> and <code>amazon = "e4"</code>, the output should be:</p>
            <pre><code>solution(king, amazon) = [5, 21, 0, 29];</code></pre>
            
            <p>Red crosses correspond to the checkmate positions, orange pluses refer to check positions, and green circles denote safe squares.</p>
            
            <p>For <code>king = "a1"</code> and <code>amazon = "g5"</code>, the output should be:</p>
            <pre><code>solution(king, amazon) = [0, 29, 1, 29];</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>king</code></p>
                    <p>The position of the white king, in chess notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>king.length = 2</code></li>
                        <li><code>'a' ≤ king[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ king[1] ≤ 8</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>amazon</code></p>
                    <p>The position of the white amazon, in the same notation.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>amazon.length = 2</code></li>
                        <li><code>'a' ≤ amazon[0] ≤ 'h'</code></li>
                        <li><code>1 ≤ amazon[1] ≤ 8</code></li>
                        <li><code>amazon ≠ king</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>An array of four integers, each equal to the number of black's king positions corresponding to a specific situation. More specifically, the array should be of the form <code>[checkmate positions, check positions, stalemate positions, safe positions]</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 27,
        "order_index": 129,
        "challenge_name": 'Pawn Race',
        "description": `
            <p>Pawn race is a game for two people, played on an ordinary 8 × 8 chessboard. The first player has a white pawn, the second one - a black pawn. Initially, the pawns are placed somewhere on the board so that the 1st and the 8th rows are not occupied. Players take turns to make a move.</p>
            
            <p>White pawn moves upwards, black one moves downwards. The following moves are allowed:</p>
            <ul>
                <li>one-cell move on the same vertical in the allowed direction;</li>
                <li>two-cell move on the same vertical in the allowed direction, if the pawn is standing on the 2nd (for the white pawn) or the 7th (for the black pawn) row. Note that even with the two-cell move a pawn can't jump over the opponent's pawn;</li>
                <li>capture move one cell forward in the allowed direction and one cell to the left or to the right.</li>
            </ul>
            
            <p>The purpose of the game is to reach the 1st row (for the black pawn) or the 8th row (for the white one), or to capture the opponent's pawn.</p>
            
            <p>Given the initial positions and whose turn it is, determine who will win or declare it a draw (i.e., it is impossible for any player to win). Assume that the players play optimally.</p>
            
            <h3>Example</h3>
            <p>For <code>white = "e2"</code>, <code>black = "e7"</code>, and <code>toMove = 'w'</code>, the output should be:</p>
            <pre><code>solution(white, black, toMove) = "draw";</code></pre>
            
            <p>For <code>white = "e3"</code>, <code>black = "d7"</code>, and <code>toMove = 'b'</code>, the output should be:</p>
            <pre><code>solution(white, black, toMove) = "black";</code></pre>
            
            <p>For <code>white = "a7"</code>, <code>black = "h2"</code>, and <code>toMove = 'w'</code>, the output should be:</p>
            <pre><code>solution(white, black, toMove) = "white";</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>white</code></p>
                    <p>Coordinates of the white pawn in the chess notation.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>black</code></p>
                    <p>Position of the black pawn in the same notation. It is guaranteed that <code>white ≠ black</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> char <code>toMove</code></p>
                    <p><code>'w'</code> if it is the first player's turn, <code>'b'</code> otherwise.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p><code>"white"</code>, <code>"black"</code> or <code>"draw"</code> depending on the result of the game.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 130,
        "challenge_name": 'Valid Time',
        "description": `
            <p>Check if the given string is a correct time representation of the 24-hour clock.</p>
            
            <h3>Example</h3>
            <p>For <code>time = "13:58"</code>, the output should be:</p>
            <pre><code>solution(time) = true;</code></pre>
            
            <p>For <code>time = "25:51"</code>, the output should be:</p>
            <pre><code>solution(time) = false;</code></pre>
            
            <p>For <code>time = "02:76"</code>, the output should be:</p>
            <pre><code>solution(time) = false;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>time</code></p>
                    <p>A string representing time in <code>HH:MM</code> format. It is guaranteed that the first two characters, as well as the last two characters, are digits.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given representation is correct, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 131,
        "challenge_name": 'Video Part',
        "description": `
            <p>You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.</p>
            
            <h3>Example</h3>
            <p>For <code>part = "02:20:00"</code> and <code>total = "07:00:00"</code>, the output should be:</p>
            <pre><code>solution(part, total) = [1, 3];</code></pre>
            
            <p>You have watched <code>1 / 3</code> of the whole video.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>part</code></p>
                    <p>A string of the following format <code>"hh:mm:ss"</code> representing the time you have been watching the video.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>total</code></p>
                    <p>A string of the following format <code>"hh:mm:ss"</code> representing the total video duration.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>An array of the following format <code>[a, b]</code> (where <code>a / b</code> is a reduced fraction).</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 132,
        "challenge_name": 'Day of Week',
        "description": `
            <p>Whenever you decide to celebrate your birthday you always do this your favorite café, which is quite popular and as such usually very crowded. This year you got lucky: when you and your friend enter the café you're surprised to see that it's almost empty. The waiter lets slip that there are always very few people on this day of the week.</p>
            
            <p>You enjoyed having the café all to yourself, and are now curious about the next time you'll be this lucky. Given the current birthdayDate, determine the number of years until it will fall on the same day of the week.</p>
            
            <p>For your convenience, here is the list of months lengths (from January to December, respectively):</p>
            <pre><code>Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.</code></pre>
            <p>Please, note that in leap years February has 29 days. If your birthday is on the 29th of February, you celebrate it once in four years. Otherwise, your birthday is celebrated each year.</p>
            
            <h3>Example</h3>
            <p>For <code>birthdayDate = "02-01-2016"</code>, the output should be:</p>
            <pre><code>solution(birthdayDate) = 5;</code></pre>
            
            <p>February 1 in 2016 is a Monday. The next year in which this same date will be Monday too is 2021. <code>2021 - 2016 = 5</code>, which is the answer.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>birthdayDate</code></p>
                    <p>A string representing the correct date in the format <code>mm-dd-yyyy</code>, where <code>mm</code> is the number of month (1-based, i.e. 01 for January, 02 for February and so on), <code>dd</code> is the day, and <code>yyyy</code> is the year.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>An integer describing the number of years until your birthday falls on the same day of the week.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 133,
        "challenge_name": 'Curious Clock',
        "description": `
            <p>Benjamin recently bought a digital clock at a magic trick shop. The seller never told Ben what was so special about it, but mentioned that one day Benjamin would be faced with a surprise.</p>
            
            <p>Indeed, the clock did surprise Benjamin: without warning, at <code>someTime</code> the clock suddenly started going in the opposite direction! Unfortunately, Benjamin has an important meeting very soon, and knows that at <code>leavingTime</code> he should leave the house so as to not be late. Ben spent all his money on the clock, so has to figure out what time his clock will show when it's time to leave.</p>
            
            <p>Given the <code>someTime</code> at which the clock started to go backwards, find out what time will be shown on the curious clock at <code>leavingTime</code>.</p>
            
            <p>For your convenience, here is the list of months lengths (from January to December, respectively):</p>
            <pre><code>Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.</code></pre>
            <p>Please, note that in leap years February has 29 days.</p>
            
            <h3>Example</h3>
            <p>For <code>someTime = "2016-08-26 22:40"</code> and <code>leavingTime = "2016-08-29 10:00"</code>, the output should be:</p>
            <pre><code>solution(someTime, leavingTime) = "2016-08-24 11:20";</code></pre>
            
            <p>There are 2 days, 11 hours, and 20 minutes till the meeting. Thus, the clock will show <code>2016-08-24 11:20</code> at the leaving time.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>someTime</code></p>
                    <p>The time at which the clock started going backwards. It is guaranteed that the time is correct. The time is given in the format <code>YYYY-MM-DD HH:MM</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>leavingTime</code></p>
                    <p>The time at which Ben will have to leave for the meeting in the same format as <code>someTime</code> and with the same constraints.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The time Ben's curious clock will show when it's time to leave in the same format as <code>leavingTime</code> and <code>someTime</code>. It is guaranteed that it will be not earlier than the midnight of January the 1st, 1970.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 134,
        "challenge_name": 'New Year Celebrations',
        "description": `
            <p>You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually, travel doesn't bother you, but this time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!</p>
            
            <p>Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at <code>takeOffTime</code>, and in <code>minutes[i]</code> after takeoff you will cross the <code>i</code>th border between time zones. After crossing each border, you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the IDL (i.e. after crossing each time zone border your current time will be set one hour back).</p>
            
            <p>You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows 00:00. Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to celebrate New Year slip through your fingers).</p>
            
            <h3>Example</h3>
            <p>For <code>takeOffTime = "23:35"</code> and <code>minutes = [60, 90, 140]</code>, the output should be:</p>
            <pre><code>solution(takeOffTime, minutes) = 3;</code></pre>
            
            <p>Here is the list of events by the time zones:</p>
            <ul>
                <li>initial time zone:
                    <ul>
                        <li>at 23:35 your flight starts;</li>
                        <li>at 00:00 you celebrate New Year for the first time;</li>
                        <li>at 00:35 (60 minutes after the take off) you cross the first border;</li>
                    </ul>
                </li>
                <li>time zone -1:
                    <ul>
                        <li>at 23:35 you cross the border (00:35 by your initial time zone);</li>
                        <li>at 00:00 you celebrate New Year for the second time (01:00 by your initial time zone);</li>
                        <li>at 00:05 (90 minutes after the take off) you cross the second border;</li>
                    </ul>
                </li>
                <li>time zone -2:
                    <ul>
                        <li>at 23:05 you cross the border;</li>
                        <li>at 23:55 (140 minutes after the take off) you cross another border;</li>
                    </ul>
                </li>
                <li>time zone -3:
                    <ul>
                        <li>at 22:55 you cross the border;</li>
                        <li>at 00:00 you celebrate New Year for the third time.</li>
                    </ul>
                </li>
            </ul>
            
            <p>Thus, the output should be 3. That's a lot of champagne!</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>takeOffTime</code></p>
                    <p>The take off time in the 24-hour format <code>HH:MM</code>. It is guaranteed that the given time is valid. The "00:00" time corresponds to the midnight of 31st of December / 1st of January.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>minutes</code></p>
                    <p>A strictly increasing array of integers. <code>minutes[i]</code> stands for the number of minutes from the take off to crossing the <code>i</code>th time zone border.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of times you will be able to celebrate New Year's Day.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 135,
        "challenge_name": 'Regular Months',
        "description": `
            <p>In an effort to be more innovative, your boss introduced a strange new tradition: the first day of every month you're allowed to work from home. You like this rule when the day falls on a Monday, because any excuse to skip rush hour traffic is great!</p>
            
            <p>You and your colleagues have started calling these months regular months. Since you're a fan of working from home, you decide to find out how far away the nearest regular month is, given that the <code>currMonth</code> has just started.</p>
            
            <p>For your convenience, here is a list of month lengths (from January to December, respectively):</p>
            <pre><code>Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.</code></pre>
            <p>Please, note that in leap years February has 29 days.</p>
            
            <h3>Example</h3>
            <p>For <code>currMonth = "02-2016"</code>, the output should be:</p>
            <pre><code>solution(currMonth) = "08-2016";</code></pre>
            
            <p>February of 2016 year is regular, but it doesn't count since it has started already, so the next regular month is August of 2016 - which is the answer.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>currMonth</code></p>
                    <p>A string representing the current month in the format <code>mm-yyyy</code>, where <code>mm</code> is the number of the month (1-based, i.e. 01 for January, 02 for February and so on) and <code>yyyy</code> is the year.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The earliest regular month after the given one in the same format as <code>currMonth</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 136,
        "challenge_name": 'Missed Classes',
        "description": `
            <p>Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.</p>
            
            <p>You're given an array, <code>daysOfTheWeek</code>, with the weekdays on which your teacher's classes are scheduled, and <code>holidays</code>, representing the dates of the holidays throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?</p>
            
            <p>For your convenience, here is a list of month lengths (from January to December, respectively):</p>
            <pre><code>Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.</code></pre>
            <p>Please note that in leap years February has 29 days.</p>
            
            <h3>Example</h3>
            <p>For <code>year = 2015</code>, <code>daysOfTheWeek = [2, 3]</code>, and <code>holidays = ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"]</code>, the output should be:</p>
            <pre><code>solution(year, daysOfTheWeek, holidays) = 3;</code></pre>
            
            <p>November 4th of 2015 is a Wednesday, February 23rd of 2016 and March 8th of 2016 are Tuesdays, and the other holidays fall on Mondays. Classes are scheduled on Wednesdays and Tuesdays, so there will be only 3 missed classes.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>year</code></p>
                    <p>An integer representing the correct year. The current academic year started on September 1st and will finish on May 31st of year + 1.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>daysOfTheWeek</code></p>
                    <p>A sorted array of integers from 1 to 7 representing the days of the week (1-based, i.e. 1 for Monday, 2 for Tuesday and so on) on which classes are scheduled.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.string <code>holidays</code></p>
                    <p>An array of strings representing the correct dates of holidays in this academic year in the format <code>mm-dd</code>, where <code>mm</code> stands for the month (1-based, i.e. "01" for January, "02" for February and so on) and <code>dd</code> stands for the day.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of classes that will be missed.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 28,
        "order_index": 137,
        "challenge_name": 'Holiday',
        "description": `
            <p>John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the <code>x</code>th week of the month, on <code>weekDay</code>.</p>
            
            <p>Your task is to return the day of the month on which the holiday will be celebrated in the year <code>yearNumber</code>.</p>
            
            <p>For your convenience, here are the lists of months names and lengths and the list of days of the week names:</p>
            <ul>
                <li><code>Months:</code> "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".</li>
                <li><code>Months lengths:</code> 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.</li>
                <li><code>Days of the week:</code> "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".</li>
            </ul>
            <p>Please, note that in leap years February has 29 days.</p>
            
            <h3>Example</h3>
            <p>For <code>x = 3</code>, <code>weekDay = "Wednesday"</code>, <code>month = "November"</code>, and <code>yearNumber = 2016</code>, the output should be:</p>
            <pre><code>solution(x, weekDay, month, yearNumber) = 16;</code></pre>
            
            <p>The new holiday will be celebrated every November on the 3rd Wednesday of the month. In 2016 the 3rd Wednesday falls on the 16th of November.</p>
            
            <p>For <code>x = 5</code>, <code>weekDay = "Thursday"</code>, <code>month = "November"</code>, and <code>yearNumber = 2016</code>, the output should be:</p>
            <pre><code>solution(x, weekDay, month, yearNumber) = -1;</code></pre>
            
            <p>There are only 4 Thursdays in November 2016.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>x</code></p>
                    <p>A positive integer.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>weekDay</code></p>
                    <p>A string representing a correct name of some day of the week.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>month</code></p>
                    <p>A string representing a correct name of some month.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>yearNumber</code></p>
                    <p>An integer representing the year.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The day of the month on which the holiday will be celebrated in the year <code>yearNumber</code>. If there is no answer, return -1.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 138,
        "challenge_name": 'Is Sentence Correct?',
        "description": `
            <p>A sentence is considered correct if:</p>
            <ul>
                <li>it starts with a capital letter;</li>
                <li>it ends with a full stop, question mark or exclamation point ('.', '?' or '!');</li>
                <li>full stops, question marks and exclamation points don't appear anywhere else in the sentence.</li>
            </ul>
            <p>Given a sentence, return <code>true</code> if it is correct and <code>false</code> otherwise.</p>
            
            <h3>Example</h3>
            <p>For <code>sentence = "This is an example of *correct* sentence."</code>, the output should be:</p>
            <pre><code>solution(sentence) = true;</code></pre>
            
            <p>For <code>sentence = "!this sentence is TOTALLY incorrecT"</code>, the output should be:</p>
            <pre><code>solution(sentence) = false;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>sentence</code></p>
                    <p>A string without newline characters.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given sentence is correct, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 139,
        "challenge_name": 'Replace All Digits RegExp',
        "description": `
            <p>Implement a function that replaces each digit in the given string with a <code>#</code> character.</p>
            
            <h3>Example</h3>
            <p>For <code>input = "There are 12 points"</code>, the output should be:</p>
            <pre><code>solution(input) = "There are ## points";</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>input</code></p>
                    <p>Guaranteed constraints: <code>5 ≤ input.length ≤ 20</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>A string with each digit replaced by a <code>#</code> character.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 140,
        "challenge_name": 'Swap Adjacent Words',
        "description": `
            <p>You are given a string consisting of words separated by whitespace characters, where the words consist only of English letters. Your task is to swap pairs of consecutive words and return the result.</p>
            
            <h3>Example</h3>
            <p>For <code>s = "CodeFight On"</code>, the output should be:</p>
            <pre><code>solution(s) = "On CodeFight";</code></pre>
            
            <p>For <code>s = "How are you today guys"</code>, the output should be:</p>
            <pre><code>solution(s) = "are How today you guys";</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>s</code></p>
                    <p>A string consisting of whitespace characters (' ') and English letters. There is exactly one whitespace character between two consecutive words, and both the first and the last characters of <code>s</code> are not equal to ' '. Guaranteed constraints: <code>0 ≤ s.length ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>String <code>s</code> with pairs of adjacent words swapped.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 141,
        "challenge_name": 'N-th Number',
        "description": `
            <p>You are given a string <code>s</code> of characters that contains at least <code>n</code> numbers (here, a number is defined as a consecutive series of digits, where any character immediately to the left and right of the series are not digits). The numbers may contain leading zeros, but it is guaranteed that each number has at least one non-zero digit in it.</p>
            
            <p>Your task is to find the <code>n</code>th number and return it as a string without leading zeros.</p>
            
            <h3>Example</h3>
            <p>For <code>s = "8one 003number 201numbers li-000233le number444"</code> and <code>n = 4</code>, the output should be:</p>
            <pre><code>solution(s, n) = "233";</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>s</code></p>
                    <p>A string containing at least <code>n</code> numbers. Guaranteed constraints: <code>20 ≤ s.length ≤ 650</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>1-based index of the number to find. Guaranteed constraints: <code>1 ≤ n ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The <code>n</code>th number without leading zeros.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 142,
        "challenge_name": 'Is Subsequence?',
        "description": `
            <p>Given a string <code>s</code>, determine if it is a subsequence of a given string <code>t</code>.</p>
            
            <h3>Example</h3>
            <p>For <code>t = "CodeSignal"</code> and <code>s = "CoSi"</code>, the output should be:</p>
            <pre><code>solution(t, s) = true;</code></pre>
            
            <p>For <code>t = "CodeSignal"</code> and <code>s = "cosi"</code>, the output should be:</p>
            <pre><code>solution(t, s) = false;</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>t</code></p>
                    <p>A string consisting of English letters, whitespace characters (' '), digits and punctuation marks (".,?!=*+-"). Guaranteed constraints: <code>0 ≤ t.length ≤ 500</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>s</code></p>
                    <p>A string consisting of English letters, whitespace characters (' '), digits and punctuation marks (".,?!=*+-"). Guaranteed constraints: <code>0 ≤ s.length ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>s</code> is a subsequence of <code>t</code>, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 143,
        "challenge_name": 'Eye Rhyme',
        "description": `
            <p>An eye rhyme is a rhyme in which two words are spelled similarly but pronounced differently. An example is the pair <code>cough</code> and <code>bough</code>; although they look similar, when they are spoken there is no rhyming quality.</p>
            
            <p>You are writing a thesis on the eye rhyme, and you thought it would be cool to make the text itself eye rhymed. This brilliant idea came to your mind a little too late: the text is already written. Now you want to check if a given pair of lines in your text have an eye rhyme. More specifically, you want to make sure that the last three characters of each pair of lines coincide.</p>
            
            <p>You have already split your text into pairs of lines. Now all that's left is to check that the last three characters of the lines in each <code>pairOfLines</code> coincide. Implement a function that will do this job.</p>
            
            <h3>Example</h3>
            <p>For <code>pairOfLines = "cough\\tbough"</code>, the output should be:</p>
            <pre><code>solution(pairOfLines) = true;</code></pre>
            
            <p>Both lines end with <code>ugh</code>.</p>
            
            <p>For <code>pairOfLines = "CodeFig!ht\\tWith all your might"</code>, the output should be:</p>
            <pre><code>solution(pairOfLines) = false;</code></pre>
            
            <p>The first line ends with <code>!ht</code>, and the second one ends with <code>ght</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>pairOfLines</code></p>
                    <p>A string in the format <code>&lt;line1&gt;\\t&lt;line2&gt;</code>, where <code>&lt;linei&gt;</code> consists of at least 3 characters and may contain any character except <code>'\\t'</code> (tabulation character). The lines are separated by <code>'\\t'</code> (tabulation character).</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the lines in <code>pairOfLines</code> have an eye rhyme, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 144,
        "challenge_name": 'Program Translation',
        "description": `
            <p>As an avid user of CodeSignal, you find it frustrating that there are no debugging and recovery tasks in your favorite language, PHP. You decide to help the platform by translating solutions in JavaScript into PHP.</p>
            
            <p>You quickly discover that this approach is quite convenient: sometimes all you have to do is substitute the function arguments by adding the <code>$</code> sign in front of them. At first you do this manually, but soon realize that it won't get you far enough.</p>
            
            <p>Now you need to implement a function that, given a code written in JavaScript and its arguments, adds a <code>$</code> sign in front of each <code>args[i]</code> (unless there is already a dollar sign present).</p>
            
            <p>Given a code in JavaScript and its arguments, return the almost-PHP solution.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>code = 
        "function add($n, m) {\\t
           return n + $m;\\t
         }"
    </code></pre>
            <p>and</p>
            <pre><code>args = ["n", "m"]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(code, args) =
        "function add($n, $m) {\\t
           return $n + $m;\\t
         }"
    </code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>code</code></p>
                    <p>Solution written in JavaScript. It is guaranteed that the given code snippet:</p>
                    <ul>
                        <li>is correct and can be executed in the CodeSignal environment with <code>$</code> symbols removed;</li>
                        <li>does not contain comments or string variables;</li>
                        <li>does not start with one of the <code>args</code>.</li>
                    </ul>
                    <p>Due to system limitations, tabulation (<code>\\t</code>) characters are used instead of newlines (<code>\\n</code>).</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>40 ≤ <code>code.length</code> ≤ 200.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.string <code>args</code></p>
                    <p>An array of distinct function arguments. It is guaranteed that each argument is valid, i.e. it consists only of uppercase and lowercase letters <code>A</code> through <code>Z</code>, the underscore (<code>_</code>) and, except for the first character, the digits <code>0</code> through <code>9</code>. It is also guaranteed that no argument coincides with one of the reserved words.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>args.length</code> ≤ 10,</li>
                        <li>1 ≤ <code>args[i].length</code> ≤ 10.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The given code with <code>args</code> replaced to PHP-style.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 145,
        "challenge_name": 'Repetition Encryption',
        "description": `
            <p>Jane just got a letter from her friend and realized that something's wrong: some words in the letter are written twice in a row. The thing is, she and her friend devised an ingenious cypher, the key to which is the number of pairs of repeated words in the encoded text. The cases of the words don't matter.</p>
            
            <p>Formally, a word is a substring of the letter consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.</p>
            
            <p>For obvious reasons, Jane can't tell you how the encryption works, but she needs your help with calculating the number of pairs of consecutive equal words. Write a function that, given a letter, returns this number.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>letter = "Hi, hi Jane! I'm so. So glad to to finally be able to write - WRITE!! - to you!"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(letter) = 4</code></pre>
            <p>There are 4 pairs of consecutive identical words in the text. They are shown in different colors below:</p>
            <pre><code>"Hi, hi Jane! I'm so. So glad to to finally be able to write - WRITE!! - to you!"</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>letter</code></p>
                    <p>The letter Jane's friend wrote to her. It is guaranteed that there are no more than two consecutive equal words in a row. It is also guaranteed that between two such pairs there are at least two symbols.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>letter.length</code> ≤ 250.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of pairs of consecutive equal words in the letter.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 29,
        "order_index": 146,
        "challenge_name": 'Bugs and Bugfixes',
        "description": `
            <p>In most role-playing games, die rolls required by the system are given in the form AdX. A and X are positive integers, separated by the letter 'd', which stands for die or dice.</p>
            
            <p>A is the number of times the die should be rolled (usually omitted if 1). X is the number of faces on the die. To this basic notation, an additive modifier can be appended that yields expressions in the form AdX+B or AdX-B. B is a number added to the sum of the rolls (or subtracted from it). So, 1d20-10 would indicate a single roll of a 20-sided die with 10 being subtracted from the result.</p>
            
            <p>You're reading the rules of a famous Bugs and Bugfixes role-playing game involving dice. What is the maximum number of points you can get, assuming that you roll the dice according to each formula present within the rules?</p>
            
            <p>It is guaranteed that all the formulas that appear in rules are correct (i.e. A and X are always positive in a formula-like substring), and any two substrings that may be formulas do not overlap.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>rules = "Roll d6-3 and 4d4+3 to pick a weapon, and finish the boss with 3d7!"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(rules) = 43</code></pre>
            <p>There are three formulas in the rules.</p>
            <ul>
                <li><code>d6-3</code> indicates a single roll of a 6-sided die, with 3 subtracted from the result. The maximum number that is possible to get is thus 6 - 3 = 3.</li>
                <li><code>4d4+3</code> stands for 4 rolls of a 4-sided die, with 3 added to the result. It is possible to get 4 * 4 + 3 = 19 points.</li>
                <li><code>3d7</code> means 3 rolls of a 7-sided die. The maximum number to obtain with it is 3 * 7 = 21.</li>
            </ul>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>rules</code></p>
                    <p>Rules given as a string.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>rules.length</code> ≤ 100.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The maximum possible number of points. If there are no formulas in rules, the output should be 0.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 147,
        "challenge_name": 'LRC to SubRip',
        "description": `
            <p>During your most recent trip to Codelandia you decided to buy a brand new CodePlayer, a music player that (allegedly) can work with any possible media format. As it turns out, this isn't true: the player can't read lyrics written in the LRC format. It can, however, read the SubRip format, so now you want to translate all the lyrics you have from LRC to SubRip.</p>
            
            <p>Since you are a pro programmer (no noob would ever get to Codelandia!), you're happy to implement a function that, given <code>lrcLyrics</code> and <code>songLength</code>, returns the lyrics in SubRip format.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>lrcLyrics = ["[00:12.00] Happy birthday dear coder,",
                 "[00:17.20] Happy birthday to you!"]
    and songLength = "00:00:20"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(lrcLyrics, songLength) = [
      "1",
      "00:00:12,000 --> 00:00:17,200",
      "Happy birthday dear coder,",
      "",
      "2",
      "00:00:17,200 --> 00:00:20,000",
      "Happy birthday to you!"
    ]</code></pre>
            <p>The input LRC lyrics are converted to SubRip format with each entry including a line number, time range, and the lyrics text itself. Each entry is separated by an empty line.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.string <code>lrcLyrics</code></p>
                    <p>Lyrics in LRC format. Each string has the format [MM:SS.xx] <song_line>, (note the whitespace character after the time) where:</p>
                    <ul>
                        <li><code>MM:SS.xx</code> is the lyrics time (it is guaranteed that the elements of <code>lrcLyrics</code> are sorted in ascending order of this time);</li>
                        <li><code>0 ≤ int(xx) ≤ 99;</code></li>
                        <li><code>0 ≤ int(SS) ≤ 59;</code></li>
                        <li><code>0 ≤ int(MM) ≤ 99;</code></li>
                        <li><code><song_line></code> is the corresponding lyrics line.</li>
                    </ul>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>lrcLyrics.length</code> ≤ 50,</li>
                        <li>1 ≤ <code>lrcLyrics[i].length</code> ≤ 100.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>songLength</code></p>
                    <p>The length of the song in the format "HH:MM:SS". It is guaranteed that it is greater than the last time in <code>lrcLyrics</code>.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>0 ≤ int(HH) ≤ 2,</li>
                        <li>0 ≤ int(MM) ≤ 59,</li>
                        <li>0 ≤ int(SS) ≤ 59.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>The given lyrics in the SubRip format. For each line in the <code>lrcLyrics</code>, three new lines should be generated:</p>
                    <ul>
                        <li>The first line is the 1-based lyrics line number;</li>
                        <li>The second line should be in the format HH1:MM1:SS1,xxx1 --> HH2:MM2:SS2,xxx2, where:
                            <ul>
                                <li>HH1:MM1:SS1,xxx1 the time the row starts;</li>
                                <li>HH2:MM2:SS2,xxx2 when the next lyrics should appear, or the length of the song if it's the last lyrics line;</li>
                            </ul>
                        </li>
                        <li>The last line is the lyrics text itself.</li>
                    </ul>
                    <p>Each pair of consecutive three-lines groups should be separated by a single empty string.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 148,
        "challenge_name": 'HTML Table',
        "description": `
            <p>HTML tables allow web developers to arrange data into rows and columns of cells. They are created using the <code>&lt;table&gt;</code> tag. Its content consists of one or more rows denoted by the <code>&lt;tr&gt;</code> tag. Further, the content of each row comprises one or more cells denoted by the <code>&lt;td&gt;</code> tag, and content within the <code>&lt;td&gt;</code> tags is what site visitors see in the table. For this task assume that tags have no attributes in contrast to real world HTML.</p>
            
            <p>Some tables contain the <code>&lt;th&gt;</code> tag. This tag defines header cells, which shouldn't be counted as regular cells.</p>
            
            <p>You are given a rectangular HTML table. Extract the content of the cell with coordinates (row, column).</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>table = "<table><tr><td>1</td><td>TWO</td></tr><tr><td>three</td><td>FoUr4</td></tr></table>", row = 0, and column = 1</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(table, row, column) = "TWO"</code></pre>
            <p>The table:</p>
            <pre><code>&lt;table&gt;
     &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;TWO&lt;/td&gt;
     &lt;/tr&gt;
     &lt;tr&gt;
      &lt;td&gt;three&lt;/td&gt;
      &lt;td&gt;FoUr4&lt;/td&gt;
     &lt;/tr&gt;
    &lt;/table&gt;</code></pre>
            <p>corresponds to:</p>
            <pre><code>1   TWO
    three FoUr4</code></pre>
            <p>For</p>
            <pre><code>table = "<table><tr><td>1</td><td>TWO</td></tr></table>", row = 1, and column = 0</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(table, row, column) = "No such cell"</code></pre>
            <p>The table:</p>
            <pre><code>&lt;table&gt;
     &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;TWO&lt;/td&gt;
     &lt;/tr&gt;
    &lt;/table&gt;</code></pre>
            <p>corresponds to:</p>
            <pre><code>1   TWO</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>table</code></p>
                    <p>A syntactically correct representation of a rectangular HTML table with at least one cell. Each of its cells contains only letters and/or digits.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>35 ≤ <code>table.length</code> ≤ 1600.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>row</code></p>
                    <p>A non-negative integer representing 0-based index of the desired row (rows are numbered from top to bottom).</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>0 ≤ <code>row</code> ≤ 10.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>column</code></p>
                    <p>A non-negative integer representing 0-based index of the desired column (columns are numbered from left to right).</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>0 ≤ <code>column</code> ≤ 10.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The content of the cell with coordinates (row, column) or the string "No such cell" if there is no cell with those coordinates in the table.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 149,
        "challenge_name": 'Chess Notation',
        "description": `
            <p>John has always had trouble remembering chess game positions. To help himself with remembering, he decided to store game positions in strings. He came up with the following position notation:</p>
            
            <p>The notation is built for the current game position row by row from top to bottom, with <code>/</code> separating each row notation;</p>
            <p>Within each row, the contents of each square are described from the leftmost column to the rightmost;</p>
            <p>Each piece is identified by a single letter taken from the standard English names (<code>'P'</code> = pawn, <code>'N'</code> = knight, <code>'B'</code> = bishop, <code>'R'</code> = rook, <code>'Q'</code> = queen, <code>'K'</code> = king);</p>
            <p>White pieces are designated using upper-case letters ("<code>PNBRQK</code>") while black pieces use lowercase ("<code>pnbrqk</code>");</p>
            <p>Empty squares are noted using digits 1 through 8 (the number of empty squares from the last piece);</p>
            <p>Empty lines are noted as "<code>8</code>".</p>
            
            <p>For example, for the initial position (shown in the picture below) the notation will look like this:</p>
            <pre><code>"rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"</code></pre>
            <p>After the white pawn moves from e2 to e4, the notation will be as follows:</p>
            <pre><code>"rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"</code></pre>
            
            <p>John has written down some positions using his notation, and now he wants to rotate the board 90 degrees clockwise and see what notation for the new board would look like. Help him with this task.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>notation = "rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(notation) = "RP4pr/NP4pn/BP4pb/QP4pq/K2P2pk/BP4pb/NP4pn/RP4pr"</code></pre>
            <p>The notation corresponds to the initial position with one move made (white pawn from e2 to e4). After rotating the board, it will look like this:</p>
            <pre><code>
    RP4pr
    NP4pn
    BP4pb
    QP4pq
    K2P2pk
    BP4pb
    NP4pn
    RP4pr</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>notation</code></p>
                    <p>Game position in John's notation. It is guaranteed that notation is correct, but not guaranteed that it represents a valid game position.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>15 ≤ <code>notation.length</code> ≤ 71.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>Notation for the position of the game board, rotated 90 degrees clockwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 150,
        "challenge_name": 'Cells Joining',
        "description": `
            <p>You are writing a spreadsheet application for an ancient operating system. The system runs on a computer so old that it can only display ASCII graphics. Currently you are stuck with implementing the cells joining algorithm.</p>
            
            <p>You are given a table in ASCII graphics, where the following characters are used for borders: <code>+</code>, <code>-</code>, <code>|</code>. The rows can have different heights and the columns can have different widths. Each cell has an area greater than 1 (excluding the borders) and can contain any ASCII characters excluding <code>+</code>, <code>-</code> and <code>|</code>.</p>
            
            <p>The algorithm you want to implement should merge the cells within a given rectangular part of the table into a single cell by removing the borders between them (i.e., replace them with space characters (<code>' '</code>) and replace redundant <code>+</code>s with correct border symbols). The cells to join are represented by the coordinates of the cells at the extreme bottom-left and top-right of the area.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>table = 
   [" +----+--+-----+----+",
    " |abcd|56|!@#$%|qwer|",
    " |1234|78|^&=()|tyui|",
    " +----+--+-----+----+",
    " |zxcv|90|77777|stop|",
    " +----+--+-----+----+",
    " |asdf|~~|ghjkl|100$|",
    " +----+--+-----+----+"]</code></pre>
            <p>and</p>
            <pre><code>coords = [[2, 0], [1, 1]]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(table, coords) = 
   [" +----+--+-----+----+",
    " |abcd|56|!@#$%|qwer|",
    " |1234|78|^&=()|tyui|",
    " +----+--+-----+----+",
    " |zxcv 90|77777|stop|",
    " |       +-----+----+",
    " |asdf ~~|ghjkl|100$|",
    " +-------+-----+----+"]</code></pre>
            <p>The table with cells in the given region joined into one looks like this:</p>
            <pre><code>
    +----+--+-----+----+
    |abcd|56|!@#$%|qwer|
    |1234|78|^&=()|tyui|
    +----+--+-----+----+
    |zxcv 90|77777|stop|
    |       +-----+----+
    |asdf ~~|ghjkl|100$|
    +-------+-----+----+</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.string <code>table</code></p>
                    <p>A table in ASCII graphics. <code>|</code> and <code>-</code> characters represent borders, and <code>+</code> characters represent their intersection. It is guaranteed that there are no joined cells in the table. It's also guaranteed that the table occupies the entire rectangular array, i.e., its outer borders occupy the leftmost and the rightmost columns of the array as well as its topmost and bottommost rows.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>3 ≤ <code>table.length</code> ≤ 25,</li>
                        <li>3 ≤ <code>table[i].length</code> ≤ 80,</li>
                        <li><code>table[i].length = table[j].length</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>coords</code></p>
                    <p><code>coords[0]</code> contains 0-based row and column indices (given in that exact order) of the extreme bottom left cell in the area to join, and <code>coords[1]</code> contains indices of the extreme top right cell of that region.</p>
                    <p>It's guaranteed that there are at least two cells to be joined, and that cells with the given indices do exist in the table.</p>
                    <p>The rows are numbered from top to bottom while the columns are numbered from left to right.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>coords.length = 2</code>,</li>
                        <li><code>coords[i].length = 2</code>,</li>
                        <li>0 ≤ <code>coords[1][0]</code> ≤ <code>coords[0][0]</code> < 10,</li>
                        <li>0 ≤ <code>coords[0][1]</code> ≤ <code>coords[1][1]</code> ≤ 25.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.string</p>
                    <p>Table with cells in the given region joined into one.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 151,
        "challenge_name": 'First Operation Character',
        "description": `
            <p>Given a string which represents a valid arithmetic expression, find the index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first.</p>
            
            <p>Note that several operations of the same type with equal priority are computed from left to right.</p>
            
            <p>See the explanation of the third example for more details about the operations priority in this problem.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>expr = "(2 + 2) * 2"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(expr) = 3</code></pre>
            <p>There are two operations in the expression: <code>+</code> and <code>*</code>. The result of <code>+</code> should be computed first, since it is enclosed in parentheses. Thus, the output is the index of the <code>+</code> sign, which is 3.</p>
            
            <p>For</p>
            <pre><code>expr = "2 + 2 * 2"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(expr) = 6</code></pre>
            <p>There are two operations in the given expression: <code>+</code> and <code>*</code>. Since there are no parentheses, <code>*</code> should be computed first as it has higher priority. The answer is the position of <code>*</code>, which is 6.</p>
            
            <p>For</p>
            <pre><code>expr = "((2 + 2) * 2) * 3 + (2 + (2 * 2))"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(expr) = 28</code></pre>
            <p>There are two operations which are enclosed in two parentheses: <code>+</code> at the position 4, and <code>*</code> at the position 28. Since <code>*</code> has higher priority than <code>+</code>, the answer is 28.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>expr</code></p>
                    <p>A string consisting of digits, parentheses, addition and multiplication signs (pluses and asterisks). It is guaranteed that there is at least one arithmetic sign in it.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>5 ≤ <code>expr.length</code> ≤ 45.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The index of the character in the given expression corresponding to the arithmetic operation which needs to be computed first.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 152,
        "challenge_name": 'Count Elements',
        "description": `
            <p>You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a given problem's input given as an <code>inputString</code> string, and count the number of primitive type elements within it.</p>
            
            <p>The <code>inputString</code> can be either a primitive type variable or an array (possibly multidimensional) that contains elements of the primitive types.</p>
            
            <p>A primitive type variable can be:</p>
            <ul>
                <li><p>an integer number;</p></li>
                <li><p>a string, which is surrounded by <code>"</code> characters (note that it may contain any character except <code>"</code>);</p></li>
                <li><p>a boolean, which is either <code>true</code> or <code>false</code>.</p></li>
            </ul>
            
            <p>Return the total number of primitive type elements inside <code>inputString</code>.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>inputString = "[[0, 20], [33, 99]]"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(inputString) = 4</code></pre>
            <p>There are four primitive elements: 0, 20, 33, and 99.</p>
            
            <p>For</p>
            <pre><code>inputString = "[ "one", 2, "three" ]"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(inputString) = 3</code></pre>
            <p>There are three primitive elements: "one", 2, and "three".</p>
            
            <p>For</p>
            <pre><code>inputString = "true"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(inputString) = 1</code></pre>
            <p>There is one primitive element: true.</p>
            
            <p>For</p>
            <pre><code>inputString = "[[1, 2, [3]], 4]"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(inputString) = 4</code></pre>
            <p>There are four primitive elements: 1, 2, 3, and 4.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>inputString</code></p>
                    <p>Correct input of a given problem.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>2 ≤ <code>inputString.length</code> ≤ 60.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The total number of primitive type elements within the input.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 153,
        "challenge_name": 'Tree Bottom',
        "description": `
            <p>You are given a recursive notation of a binary tree: each node of a tree is represented as a set of three elements:</p>
            
            <ul>
                <li>value of the node;</li>
                <li>left subtree;</li>
                <li>right subtree.</li>
            </ul>
            
            <p>So, a tree can be written as <code>(value left_subtree right_subtree)</code>. It is guaranteed that 1 ≤ value ≤ 10<sup>9</sup>. If a node doesn't exist then it is represented as an empty set: <code>()</code>. For example, here is a representation of a tree in the given picture:</p>
            
            <pre><code>(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))</code></pre>
            
            <p>Your task is to obtain a list of nodes that are the most distant from the tree root, in the order from left to right.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>tree = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(tree) = [5, 11, 4]</code></pre>
            <p>In this tree, the nodes at the maximum depth are 5, 11, and 4. They are listed from left to right.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> string <code>tree</code></p>
                    <p>The recursive notation of the binary tree.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>9 ≤ <code>tree.length</code> ≤ 1000.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>The values of the nodes that are the most distant from the tree root.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 30,
        "order_index": 154,
        "challenge_name": 'Befunge-93',
        "description": `
            <p>While exploring the ruins of a golden lost city, you discovered an ancient manuscript containing series of strange symbols. Thanks to your profound knowledge of dead languages, you realized that the text was written in one of the dialects of Befunge-93. Looks like the prophecy was true: you are the one who can find the answer to the Ultimate Question of Life! Of course you brought your futuristic laptop with you, so now you just need a function that will run the encrypted message and make you the all-knowing human being.</p>
    
            <p>Befunge-93 is a stack-based programming language, the programs for which are arranged in a two-dimensional torus grid. The program execution sequence starts at the top left corner and proceeds to the right until the first direction instruction is met (which can appear in the very first cell). The torus adjective means that the program never leaves the grid: when it encounters a border, it simply goes to the next command at the opposite side of the grid.</p>
    
            <p>You need to write a function that will be able to execute the given Befunge-93 program. Unfortunately your laptop, futuristic that it is, can't handle more than 105 instructions and will probably catch on fire if you try to execute more, so the function should exit after 105 commands. The good news is, the prophesy said that the answer to the Ultimate Question of Life contains no more than 100 symbols, so the function should return the program output once it contains 100 symbols.</p>
    
            <h3>Dialect of Befunge-93</h3>
            <p>The dialect of Befunge-93 in the manuscript consists of the following commands:</p>
            
            <ul>
                <li><strong>Direction Instructions:</strong>
                    <ul>
                        <li><code>></code>: start moving right</li>
                        <li><code>&lt;</code>: start moving left</li>
                        <li><code>v</code>: start moving down</li>
                        <li><code>^</code>: start moving up</li>
                        <li><code>#</code>: bridge; skip next cell</li>
                    </ul>
                </li>
                <li><strong>Conditional Instructions:</strong>
                    <ul>
                        <li><code>_</code>: pop a value; move right if value = 0, left otherwise</li>
                        <li><code>|</code>: pop a value; move down if value = 0, up otherwise</li>
                    </ul>
                </li>
                <li><strong>Math Operators:</strong>
                    <ul>
                        <li><code>+</code>: addition; pop a, pop b, then push a + b</li>
                        <li><code>-</code>: subtraction; pop a, pop b, then push b - a</li>
                        <li><code>*</code>: multiplication; pop a, pop b, then push a * b</li>
                        <li><code>/</code>: integer division; pop a, pop b, then push b / a</li>
                        <li><code>%</code>: modulo operation; pop a, pop b, then push b % a</li>
                    </ul>
                </li>
                <li><strong>Logical Operators:</strong>
                    <ul>
                        <li><code>!</code>: logical NOT; pop a value, if the value = 0, push 1, otherwise push 0</li>
                        <li><code></code>: greater than; pop a and b, then push 1 if b > a, otherwise 0</li>
                    </ul>
                </li>
                <li><strong>Stack Instructions:</strong>
                    <ul>
                        <li><code>::</code>: duplicate value on top of the stack</li>
                        <li><code>\</code>: swap the top stack value with the second to the top</li>
                        <li><code>$</code>: pop value from the stack and discard it</li>
                    </ul>
                </li>
                <li><strong>Output Instructions:</strong>
                    <ul>
                        <li><code>.</code>: pop value and output it as an integer followed by a space</li>
                        <li><code>,</code>: pop value and output it as ASCII character</li>
                    </ul>
                </li>
                <li><strong>Other:</strong>
                    <ul>
                        <li><code>0-9</code>: push the encountered number on the stack</li>
                        <li><code>"</code>: start string mode; push each character's ASCII value all the way up to the next "</li>
                        <li><code> </code>: empty instruction; does nothing</li>
                        <li><code>@</code>: end program; the program output should be returned then</li>
                    </ul>
                </li>
            </ul>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>program = [
        "               v",
        "v  ,,,,,"Hello"<",
        ">48*,          v",
        ""!dlroW",,,,,,v>",
        "25*,@         > "
    ]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(program) = "Hello World!\\n"</code></pre>
            <p>Note, that in the tests tab you will see a \\ as an escape symbol before each "</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.string <code>program</code></p>
                    <p>Array of strings of an equal length, representing a correct program written in the Befunge-93 dialect.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>program.length</code> ≤ 20</li>
                        <li>1 ≤ <code>program[0].length</code> ≤ 100</li>
                        <li><code>program[i].length = program[0].length</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> string</p>
                    <p>The output of the program after</p>
                    <ul>
                        <li>the program hits the @ command;</li>
                        <li>the program executes 105 commands;</li>
                        <li>the program output contains 100 symbols;</li>
                        <li>or whichever comes first.</li>
                    </ul>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 155,
        "challenge_name": 'Pipes Game',
        "description": `
            <p>Carlos always loved playing video games, especially the well-known computer game "Pipes". Today he finally decided to write his own version of the legendary game from scratch.</p>
    
            <p>In this game, the player has to place the pipes on a rectangular field to make water pour from each source to a respective sink. He has already come up with the entire program, but one question still bugs him: how can he best check that the arrangement of pipes is correct?</p>
    
            <p>Carlos has 7 types of pipes in his game, with numbers corresponding to each type:</p>
            <ul>
                <li><strong>1</strong> - vertical pipe</li>
                <li><strong>2</strong> - horizontal pipe</li>
                <li><strong>3-6</strong> - corner pipes</li>
                <li><strong>7</strong> - two pipes crossed in the same cell (note that these pipes are not connected)</li>
            </ul>
            
            <p>Water pours from each source in each direction that has a pipe connected to it (thus it can even pour in all four directions). The puzzle is solved correctly only if all water poured from each source eventually reaches a corresponding sink.</p>
    
            <p>Help Carlos check whether the arrangement of pipes is correct. If it is correct, return the number of cells with pipes that will be full of water at the end of the game. If not, return <code>-X</code>, where <code>X</code> is the number of cells with water before the first leakage point is reached, or if the first drop of water reaches an incorrect destination (whichever comes first). Assume that water moves from one cell to another at the same speed.</p>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>state = [
        "a224C22300000",
        "0001643722B00",
        "0b27275100000",
        "00c7256500000",
        "0006A45000000"
    ]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(state) = 19</code></pre>
            <p>Here is how the game will end:</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.string <code>state</code></p>
                    <p>Array of strings of an equal length representing some state of the game. The pipes are represented by the numbers <code>'1'</code> to <code>'7'</code>, the sources are given as lowercase English letters, and the corresponding sinks are marked by uppercase letters. Empty cells are marked with <code>'0'</code>.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>state.length</code> ≤ 100</li>
                        <li>1 ≤ <code>state[i].length</code> ≤ 100</li>
                        <li><code>state[i][j] ∈ {0-7, a-z, A-Z}</code></li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>If the pipe arrangement is correct, return the number of cells with pipes that will be filled with water at the end of the game. If not, return <code>-X</code>, where <code>X</code> is the number of cells with water before the first leakage point is reached, or if the first drop of water reaches an incorrect destination.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 156,
        "challenge_name": 'Game 2048',
        "description": `
            <p>You are most likely familiar with the game 2048.</p>
    
            <p>2048 is played on a gray 4 × 4 grid with numbered tiles that slide smoothly when a player moves them using one of the four arrow keys - Up, Down, Left or Right. On every turn, a new tile with a value of either 2 or 4 randomly appears on an empty spot of the board. After one of the keys is pressed, the tiles slide as far as possible in the chosen direction until they are stopped either by another tile or by the edge of the grid. If two tiles with the same number collide while moving, they merge into a tile with this number doubled. You can't merge an already merged tile in the same turn. If there are more than 2 tiles in the same row (column) that can merge, the farthest (closest to an edge) pair will be merged first (see the second example).</p>
    
            <p>In this problem you are not going to solve the 2048 puzzle, but you are going to find the final state of the board from the given one after a defined set of <code>n</code> arrow key presses, assuming that no new random tiles will appear on the empty spots.</p>
    
            <p>The following example shows the next state of the board after pressing Right.</p>
            <pre><code>[[0, 0, 0, 0],\n [0, 0, 0, 4],\n [0, 0, 2, 4],\n [0, 0, 8, 8]]</code></pre>
    
            <p>This example shows the next state of the board after pressing Down.</p>
            <pre><code>[[0, 0, 0, 0],\n [0, 0, 2, 4],\n [0, 0, 4, 8],\n [0, 0, 8, 16]]</code></pre>
    
            <p>For more details you can visit <a href="http://gabrielecirulli.github.io/2048/" target="_blank">2048 online</a> and play online 😃</p>
    
            <p>You are given a matrix 4 × 4 which corresponds to the 2048 game grid. <code>grid[0][0]</code> corresponds to the upper left tile of the grid. Each element of the grid is equal to some power of 2 if there is a tile with that value in the corresponding position, and 0 if it corresponds to the empty spot.</p>
    
            <p>You are also given a sequence of key presses as a string <code>path</code>. Each character of the string equals <code>L</code>, <code>R</code>, <code>U</code>, or <code>D</code> corresponding to Left, Right, Up or Down respectively.</p>
    
            <p>Please note that in some cases after pressing an arrow key nothing will be changed.</p>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>grid = [[0, 0, 0, 0],\n        [0, 0, 2, 2],\n        [0, 0, 2, 4],\n        [2, 2, 4, 8]]\npath = "RR"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(grid, path) = [[0, 0, 0, 0],\n                        [0, 0, 0, 4],\n                        [0, 0, 2, 4],\n                        [0, 0, 8, 8]]</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>grid</code></p>
                    <p>A square matrix of size 4 × 4, the starting state of the board. Each value of the matrix is 0 or a power of 2.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>grid[i][j] ∈ {0} ∪ {2^i | i = 0, 1, ..., 16}</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>path</code></p>
                    <p>String representing key presses. Each character of the string equals <code>L</code>, <code>R</code>, <code>U</code>, or <code>D</code>.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>path.length</code> ≤ 30.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>The final state of the board after the given key presses are applied.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 157,
        "challenge_name": 'Snake Game',
        "description": `
            <p>Your task is to imitate a turn-based variation of the popular "Snake" game.</p>
    
            <p>You are given the initial configuration of the board and a list of commands which the snake follows one-by-one. The game ends if one of the following happens:</p>
            <ul>
                <li>the snake tries to eat its tail;</li>
                <li>the snake tries to move out of the board;</li>
                <li>it executes all the given commands.</li>
            </ul>
    
            <p>Output the board configuration after the game ends.</p>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>gameBoard = [['.', '.', '.', '.'],\n             ['.', '.', '<', '*'],\n             ['.', '.', '.', '*']]\ncommands = "FFFFFRFFRRLLF"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(gameBoard, commands) = [['.', '.', '.', '.'],\n                                 ['X', 'X', 'X', '.'],\n                                 ['.', '.', '.', '.']]</code></pre>
    
            <p>For</p>
            <pre><code>gameBoard = [['.', '.', '^', '.', '.'],\n             ['.', '.', '*', '*', '.'],\n             ['.', '.', '.', '*', '*']]\ncommands = "RFRF"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(gameBoard, commands) = [['.', '.', 'X', 'X', '.'],\n                                 ['.', '.', 'X', 'X', '.'],\n                                 ['.', '.', '.', 'X', '.']]</code></pre>
    
            <p>For</p>
            <pre><code>gameBoard = [['.', '.', '*', '>', '.'],\n             ['.', '*', '*', '.', '.'],\n             ['.', '.', '.', '.', '.']]\ncommands = "FRFFRFFRFLFF"</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(gameBoard, commands) = [['.', '.', '.', '.', '.'],\n                                 ['<', '*', '*', '.', '.'],\n                                 ['.', '.', '*', '.', '.']]</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>gameBoard</code></p>
                    <p>A rectangular matrix of characters. It is guaranteed that it represents a correct game board configuration, i.e. there is exactly one snake. Direction of snake's head is depicted by one of the following characters ('^', '>', 'v', '<'). All of the other snake's body parts are depicted by '*'s (note, that if the snake has length 1 then there is no asterisks in its representation). All cells which are not occupied by the snake are depicted by '.'s.</p>
                    <p>It is guaranteed that all snake cells are connected and no snake cell has more than two neighbors.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>1 ≤ <code>gameBoard.length</code> ≤ 10,</li>
                        <li>1 ≤ <code>gameBoard[0].length</code> ≤ 10.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> string <code>commands</code></p>
                    <p>A list of commands, where <code>'F'</code> means go one cell forward in the current direction, <code>'L'</code> and <code>'R'</code> mean change current direction 90 degrees left (counter-clockwise) or right (clockwise) correspondingly.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>0 ≤ <code>commands.length</code> ≤ 40.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.char</p>
                    <p>Configuration of the board after the end of the game.</p>
                    <p>If the snake dies, output its state before the losing move and replace each of the cells it occupied with Xs.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 158,
        "challenge_name": 'Tetris Game',
        "description": `
            <p>Let's play Tetris! But first we need to define the rules, especially since they probably differ from the way you've played Tetris before.</p>
    
            <p>There is an empty field with 20 rows and 10 columns, which is initially empty. Random pieces appear on the field, each composed of four square blocks. You can't change the piece's shape, but you can rotate it 90 degree clockwise (possibly several times) and choose which columns it will appear within. Once you've rotated the piece and have set its starting position, it appears at the topmost row where you placed it and falls down until it can't fall any further. The objective of the game is to create horizontal lines composed of 10 blocks. When such a line is created, it disappears, and all lines above the deleted one move down. The player receives 1 point for each deleted row.</p>
    
            <p>Your task is to implement an algorithm that places each new piece optimally. The piece is considered to be placed optimally if:</p>
            <ul>
                <li>The total number of blocks in the rows this piece will occupy after falling down is maximized;</li>
                <li>Among all positions with that value maximized, this position requires the least number of rotations;</li>
                <li>Among all positions that require the minimum number of rotations, this one is the leftmost one (i.e. the leftmost block's position is as far to the left as possible).</li>
            </ul>
    
            <p>The piece can't leave the field. It is guaranteed that it is always possible to place the Tetris piece in the field.</p>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>pieces = 
            [[[".", "#", "."],           
              ["#", "#", "#"]],        
             [["#", ".", "."],           
              ["#", "#", "#"]],          
             [["#", "#", "."],            
              [".", "#", "#"]],          
             [["#", "#", "#", "#"]],         
             [["#", "#", "#", "#"]],        
             [["#", "#"],           
              ["#", "#"]]]
            </code></pre>
            <p>the output should be:</p>
            <pre><code>solution(pieces) = 1.</code></pre>
    
            <p>For this explanation, we are representing each block by the index of the piece it belongs to. After the first 5 blocks fall, the field looks like this:</p>
            <pre><code>
    ...
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . 3 4
    . . . . . . . . 3 4
    . 0 . 1 . 2 2 . 3 4
    0 0 0 1 1 1 2 2 3 4</code></pre>
            <p>Note that the 0th, 1st, and 2nd pieces all fell down without rotating, while the 3rd and the 4th pieces were rotated one time each.</p>
    
            <p>Since there is now a row composed of 10 blocks, it is deleted, and you get 1 point.</p>
    
            <p>When the last piece falls, the final field looks like this:</p>
            <pre><code>
    ...
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    . . . . . . . . . .
    5 5 . . . . . . 3 4
    5 5 . . . . . . 3 4
    . 0 . 1 . 2 2 . 3 4</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.array.char <code>pieces</code></p>
                    <p>A non-empty array of pieces in the order in which they fall. Each piece is represented as a rectangular matrix, where <code>'#'</code> represents a block and <code>'.'</code> represents an empty cell.</p>
                    <p>Each piece consists of 4 blocks, and each block shares a common side with at least one another block. It's guaranteed that each piece contains neither empty rows nor empty columns.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li>3 ≤ <code>pieces.length</code> ≤ 30,</li>
                        <li>1 ≤ <code>pieces[i].length</code> ≤ 2,</li>
                        <li>2 ≤ <code>pieces[i][j].length</code> ≤ 4.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of points you will have by the end of the game.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 159,
        "challenge_name": "Pyraminx Puzzle",
        "description": `
            <p>You've mastered the Rubik's Cube and got bored solving it, so now you are looking for a new challenge. One puzzle similar to the Rubik's Cube caught your attention. It's called a Pyraminx puzzle, and is a triangular pyramid-shaped puzzle. The parts are arranged in a pyramidal pattern on each side, while the layers can be rotated with respect to each vertex, and the individual tips can be rotated as well. There are 4 faces on the Pyraminx. The puzzle should be held so that one face faces you and one face faces down, as in the image below. The four corners are then labeled U (for up), R (for right), L (for left), and B (for back). The front face thus contains the U, R, and L corners.</p>
        
            <p>Let's write down all possible moves for vertex U in the following notation:</p>
            <ul>
                <li><code>U</code> - 120° counterclockwise turn of topmost tip (assuming that we're looking at the pyraminx from the top, and vertex U is the topmost);</li>
                <li><code>U'</code> - clockwise turn for the same tip;</li>
                <li><code>u</code> - 120° counterclockwise turn of two upper layers;</li>
                <li><code>u'</code> - clockwise turn for the same layers.</li>
            </ul>
        
            <p>For other vertices the moves can be described similarly:</p>
        
            <p>The first puzzle you bought wasn't assembled, so you get your professional pyraminx solver friend to assemble it. He does, and you wrote down all his moves notated as described above. Now the puzzle's faces have colors <code>faceColors[0]</code> (front face), <code>faceColors[1]</code> (bottom face), <code>faceColors[2]</code> (left face), <code>faceColors[3]</code> (right face). You want to know the initial state of the puzzle to repeat your friend's moves and see how he solved it.</p>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>faceColors = ['R', 'G', 'Y', 'O']</code></pre>
            <p>and</p>
            <pre><code>moves = ["B", "b'", "u'", "R"]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(faceColors, moves) = 
        [['Y', 'Y', 'Y', 'Y', 'R', 'R', 'R', 'R', 'G'],
         ['G', 'R', 'O', 'O', 'O', 'G', 'G', 'G', 'G'],
         ['Y', 'O', 'Y', 'G', 'O', 'O', 'G', 'G', 'Y'],
         ['R', 'O', 'O', 'R', 'O', 'Y', 'Y', 'R', 'R']]</code></pre>
            <p>Let's repeat the friend's steps in reverse order:</p>
        
            <p>Final state:</p>
            <pre><code>...</code></pre>
        
            <p>Before the last move:</p>
            <pre><code>...</code></pre>
        
            <p>One more move before that:</p>
            <pre><code>...</code></pre>
        
            <p>And one more:</p>
            <pre><code>...</code></pre>
        
            <p>Finally, the initial state:</p>
            <pre><code>...</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.char <code>faceColors</code></p>
                    <p>A distinct array of four distinct characters, representing the front, bottom, left and right faces, respectively.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>faceColors.length = 4</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.string <code>moves</code></p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ moves.length ≤ 100</code>,</li>
                        <li><code>moves[i] ∈ {"U", "U'", "u", "u'", "L", "L'", "l", "l'", "R", "R'", "r", "r'", "B", "B'", "b", "b'"}</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.char</p>
                    <p>Initial state of the puzzle. <code>result[0]</code> should contain 9 characters corresponding to the front face, <code>result[1]</code> - to the bottom face, <code>result[2]</code> - to the left face and <code>result[3]</code> - to the right face.</p>
                    <p>The colors for each face should be given in top-to-bottom and left-to-right order, starting from the marked vertex (i.e. U, B, L or R), assuming that this vertex is at the top of the puzzle.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 160,
        "challenge_name": "Lines Game",
        "description": `
            <p>Let's remember the '90s and play an old-school Lines game with the following rules.</p>
        
            <p>The game starts with a 9 × 9 field with several colored balls placed on its cells (there are 7 possible colors but not all colors have to be present initially). The player can move one ball per turn, and they may only move a ball if there is a clear path between the current position of the chosen ball and the desired destination. Clear paths are formed by neighboring empty cells. Two cells are neighboring if they have a common side. The goal is to remove balls by forming lines (horizontal, vertical or diagonal) of at least five balls of the same color. If the player manages to form one or more such lines, the move is called successful, and the balls in those lines disappear. Otherwise, the move is called unsuccessful, and three more balls appear on the field.</p>
        
            <p>You are given the game logs, and your task is to calculate the player's final score. Here's the information you have:</p>
            <ul>
                <li>The field state at the initial moment;</li>
                <li>The clicks the user has made. Note that a click does not necessarily result in a move:
                    <ul>
                        <li>If the user clicks a ball and then another, the first click is ignored;</li>
                        <li>If two consecutive clicks result in an incorrect move, they are ignored;</li>
                    </ul>
                </li>
                <li>After each unsuccessful move three more balls appear:
                    <ul>
                        <li><code>newBalls</code> contains the balls' colors;</li>
                        <li><code>newBallsCoordinates</code> contains their coordinates;</li>
                    </ul>
                </li>
                <li>Note that after the balls appear, new lines may form;</li>
                <li>Whenever new lines appear, they are removed and the player receives <code>A + B - 1</code> points, where:
                    <ul>
                        <li><code>A</code> is the number of lines of at least five balls;</li>
                        <li><code>B</code> is the total number of balls in those lines.</li>
                    </ul>
                </li>
            </ul>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>field = 
            [['.', 'G', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', 'V', '.'],
             ['.', 'O', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', 'O'],
             ['.', '.', '.', '.', 'O', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['R', '.', '.', '.', '.', '.', '.', 'B', 'R'],
             ['.', '.', 'C', '.', '.', '.', '.', 'Y', 'O']],
            </code></pre>

            <pre>
            <code>clicks = [[4, 8], [2, 1], [4, 4], [6, 4], [4, 8], [1, 2], [1, 4], [4, 8], [6, 4]],</code>
            <code>newBalls = ['R', 'V', 'C', 'G', 'Y', 'O'],</code>
            <code>newBallsCoordinates = [[1, 2], [8, 5], [8, 6], [1, 1], [1, 8], [7, 4]]</code>
            </pre>
            <p>the output should be:</p>
            <code>solution(field, clicks, newBalls, newBallsCoordinates) = 6.</code>
        
            <p>The only correct moves were:</p>
            <ul>
                <li>Orange ball moved from [2, 1] to [4, 4];</li>
                <li>Red ball moved from [1, 2] to [1, 4];</li>
                <li>Orange ball moved from [4, 8] to [6, 4]</li>
            </ul>
            <p>After the third move a vertical line with 6 orange balls appears, so it is removed and the player receives 1 + 6 - 1 = 6 points.</p>
        
            <p>For</p>
            <pre><code>field = 
            [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', 'O', '.', 'O', '.', 'O', '.', '.'],
             ['.', '.', '.', 'O', 'O', 'O', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', 'O'],
             ['.', '.', '.', 'O', 'O', 'O', '.', '.', '.'],
             ['.', '.', 'O', '.', 'O', '.', 'O', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
             ['.', '.', '.', '.', '.', '.', '.', '.', '.']],
            </code></pre>

            <pre><code>
            clicks = [[4, 8], [4, 4]],
            newBalls = [],
            newBallsCoordinates = []<code></pre>
            <p>the output should be:</p>
            <code>solution(field, clicks, newBalls, newBallsCoordinates) = 17.</code>
            
        
            <p>After the move there will be three lines with exactly 5 balls of the same color, so the answer is 3 + (5 + 5 + 5) - 1 = 17.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>field</code></p>
                    <p>A rectangular matrix, where each element represents either a ball of some color (see above), or an empty cell ('.').</p>
                    <p>It is guaranteed that initially there are no lines of five or more balls of the same color.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>field.length = 9</code>,</li>
                        <li><code>field[i].length = 9</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>clicks</code></p>
                    <p>Each element of <code>clicks</code> consists of two integers and represents some cell from fields that was clicked.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>2 ≤ clicks.length ≤ 40</code>,</li>
                        <li><code>0 ≤ clicks[i][j] ≤ 8</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.char <code>newBalls</code></p>
                    <p>A list of colors of new balls to appear on the field after each unsuccessful move.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>0 ≤ newBalls.length ≤ 60</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>newBallsCoordinates</code></p>
                    <p>The <code>i</code>th element represents the coordinates of the <code>i</code>th ball to appear.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>newBallsCoordinates.length = newBalls.length</code>,</li>
                        <li><code>newBallsCoordinates[i].length = 2</code>,</li>
                        <li><code>0 ≤ newBallsCoordinates[i][j] ≤ 8</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The player's final score.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 161,
        "challenge_name": "Fractal",
        "description": `
            <p>Your task is to draw a special fractal after <code>n</code> iterations. The fractal consists of unit connectors <code>'|'</code> and <code>'_'</code>.</p>
        
            <p>For <code>n = 1</code> the fractal looks as follows:</p>
            <pre><code>_
    _
    </code></pre>
        
            <p>Now assume that you have already made <code>N</code> iterations and drawn the <code>f(N)</code> fractal. To draw the <code>f(N + 1)</code> fractal do the following:</p>
            <ul>
                <li>Note that every fractal has exactly two edge points which can be connected to the edge points of other fractals using the unit connectors.</li>
                <li>At first, take the <code>f(N)</code> fractal and place it in the top left corner. As the next step, put <code>f(N)</code> rotated by 0°, 90°, 180° or 270° in the remaining 3 quarters - top right, bottom left and bottom right - so that it is possible to connect all four of them by adding exactly 3 unit connectors between the adjacent fractal edge points.</li>
                <li>Note that there is always exactly one possible combination of rotations which allows to connect all 4 <code>f(N)</code> fractals together.</li>
            </ul>
        
            <h3>Example</h3>
            <p>For <code>n = 1</code>, the output should be:</p>
            <pre><code>
            [[' ', '_', ' '],       
             [' ', '_', '|']]</code></pre>
            <p>In other words, it should represent the following picture:</p>
            <pre><code> _
     _|</code></pre>
        
            <p>For <code>n = 2</code>, the output should be:</p>
            <pre><code>
            [[' ', '_', ' ', ' ', ' ', '_', ' '],      
             [' ', '_', '|', ' ', '|', '_', ' '],                                  
             ['|', ' ', ' ', '_', ' ', ' ', '|'],                                 
             ['|', '_', '|', ' ', '|', '_', '|']]</code></pre>
            <p>Or, to put it differently:</p>
            <pre><code>  
     _   _
     _| |_
    |  _  |
    |_| |_|</code></pre>
        
            <p>For <code>n = 3</code>, the output should be:</p>
            <pre><code>
            [[" ", "_", " ", " ", " ", "_", "_", "_", " ", " ", " ", "_", "_", "_", " "], 
             [" ", "_", "|", " ", "|", "_", " ", " ", "|", "_", "|", " ", " ", "_", "|"], 
             ["|", " ", " ", "_", " ", " ", "|", " ", " ", "_", " ", " ", "|", "_", " "], 
             ["|", "_", "|", " ", "|", "_", "|", " ", "|", " ", "|", "_", "_", "_", "|"], 
             [" ", "_", " ", " ", " ", "_", " ", " ", "|", " ", " ", "_", "_", "_", " "], 
             ["|", " ", "|", "_", "|", " ", "|", " ", "|", "_", "|", " ", " ", "_", "|"], 
             ["|", "_", " ", " ", " ", "_", "|", " ", " ", "_", " ", " ", "|", "_", " "], 
             [" ", "_", "|", " ", "|", "_", "_", "_", "|", " ", "|", "_", "_", "_", "|"]]</code></pre>
            <p>The fractal looks as follows:</p>
            <pre><code>  
      _   ___   ___ 
      _| |_  |_|  _|
     |  _  |  _  |_ 
     |_| |_| | |___| 
      _   _  |  ___ 
     | |_| | |_|  _|
     |_   _|  _  |_ 
      _| |___| |___|</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>A positive integer.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>1 ≤ n ≤ 6</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.char</p>
                    <p>Each character can be an underscore ('_'), a vertical bar ('|') or a whitespace character (' ').</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 31,
        "order_index": 162,
        "challenge_name": "Time ASCII Representation",
        "description": `
            <p>John has always liked analog clocks more than digital ones. He's been dreaming about turning his digital clock into an analog one for as long as he can remember, and now he met you, a great programmer, so his dream is about to come true.</p>
        
            <p>The screen of his digital clock is a simple 17 × 17 rectangle of pixels. It always shows four digits: the first two stand for hours and the second two for minutes (John's clock uses the 24-hour format). Each digit is located in a 17 × 4 rectangle, with the leftmost column always empty, and the other three columns filled according to this pattern with the proper scaling:</p>
        
            <p>After the first two digits there is a separating column containing one symbol ':' at its center.</p>
        
            <p>Now John asks you to make his clock show time in the format similar to analog clocks. Here's how: an analog clock can be represented as a circle (the clock's borders) and two segments (the clock's hands). To show it on the 17 × 17 screen, you should light the pixels on it so that the pixel with coordinates (x, y) is enabled if and only if the minimal distance to the circle or one of the segments is less than sqrt(0.5).</p>
        
            <p>Please note that for the early prototype you have to develop, both of the clock's hands should have the same length.</p>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>dtime = [
      ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', ':', '.', '*', '*', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '.', '*', '.', '.', '*', '.', '.', '.', '.', '.', '*', '.', '*', '.', '*'],
      ['.', '*', '*', '*', '.', '.', '*', '.', '.', '.', '*', '*', '*', '.', '*', '*', '*']
    ]</code></pre>
        
            <p>the output should be</p>
            <pre><code>solution(dtime) = [
      ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '.', '.'],
      ['.', '*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '*', '*', '.'],
      ['*', '*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '*', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '.', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '.', '*'],
      ['*', '*', '.', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '.', '*', '*'],
      ['.', '*', '*', '.', '.', '.', '.', '.', '*', '.', '.', '.', '.', '.', '*', '*', '.'],
      ['.', '.', '*', '*', '.', '.', '.', '.', '*', '.', '.', '.', '.', '*', '*', '.', '.'],
      ['.', '.', '.', '*', '*', '.', '.', '.', '*', '.', '.', '.', '*', '*', '.', '.', '.'],
      ['.', '.', '.', '.', '*', '*', '*', '*', '*', '*', '*', '*', '*', '.', '.', '.', '.']
    ]</code></pre>
            <p>(Enabled pixels are painted red to make them more visible).</p>
        
            <p>Here is the geometrical representation of an analog clock showing time 01:30. Enabled pixels are painted red.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>dtime</code></p>
                    <p>Digital time representation, where <code>dtime[x][y]</code> is equal to <code>'*'</code> if the pixel with coordinates <code>(x, y)</code> is enabled and <code>'.'</code> otherwise. It is guaranteed that the given time is correct, and that <code>dtime[8][8] = ':'</code>.</p>
                    <p>Guaranteed constraints:</p>
                    <ul>
                        <li><code>dtime.length = 17</code>,</li>
                        <li><code>dtime[i].length = 17</code>.</li>
                    </ul>
                </li>
                <li>
                    <p><span>[output]</span> array.array.char</p>
                    <p>Representation of the same time on the same rectangle, but in an analog clock format.</p>
                </li>
            </ul>
        `
    },


    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////
    //// __________________________________Databases_______________________________ //////// __________________________________Databases_______________________________ ////


    {
        "topic_id": 32,
        "order_index": 1,
        "challenge_name": "projectList",
        "description": "description"
    },
    {
        "topic_id": 32,
        "order_index": 2,
        "challenge_name": "countriesSelection",
        "description": "description"
    },
    {
        "topic_id": 32,
        "order_index": 3,
        "challenge_name": "monthlyScholarships",
        "description": "description"
    },
    {
        "topic_id": 32,
        "order_index": 4,
        "challenge_name": "projectsTeam",
        "description": "description"
    },
    {
        "topic_id": 32,
        "order_index": 5,
        "challenge_name": "automaticNotifications",
        "description": "description"
    },
    {
        "topic_id": 33,
        "order_index": 6,
        "challenge_name": "volleyballResults",
        "description": "description"
    },
    {
        "topic_id": 33,
        "order_index": 7,
        "challenge_name": "mostExpensive",
        "description": "description"
    },
    {
        "topic_id": 33,
        "order_index": 8,
        "challenge_name": "contestLeaderboard",
        "description": "description"
    },
    {
        "topic_id": 33,
        "order_index": 9,
        "challenge_name": "gradeDistribution",
        "description": "description"
    },
    {
        "topic_id": 33,
        "order_index": 10,
        "challenge_name": "mischievousNephews",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 11,
        "challenge_name": "suspectsInvestigation",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 12,
        "challenge_name": "suspectsInvestigation2",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 13,
        "challenge_name": "securityBreach",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 14,
        "challenge_name": "testCheck",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 15,
        "challenge_name": "expressionsVerification",
        "description": "description"
    },
    {
        "topic_id": 34,
        "order_index": 16,
        "challenge_name": "newsSubscribers",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 17,
        "challenge_name": "countriesInfo",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 18,
        "challenge_name": "itemCounts",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 19,
        "challenge_name": "usersByContinent",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 20,
        "challenge_name": "movieDirectors",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 21,
        "challenge_name": "travelDiary",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 22,
        "challenge_name": "soccerPlayers",
        "description": "description"
    },
    {
        "topic_id": 35,
        "order_index": 23,
        "challenge_name": "marketReport",
        "description": "description"
    },
    {
        "topic_id": 36,
        "order_index": 24,
        "challenge_name": "websiteHacking",
        "description": "description"
    },
    {
        "topic_id": 36,
        "order_index": 25,
        "challenge_name": "nullIntern",
        "description": "description"
    },
    {
        "topic_id": 36,
        "order_index": 26,
        "challenge_name": "legsCount",
        "description": "description"
    },
    {
        "topic_id": 36,
        "order_index": 27,
        "challenge_name": "combinationLock",
        "description": "description"
    },
    {
        "topic_id": 37,
        "order_index": 28,
        "challenge_name": "interestClub",
        "description": "description"
    },
    {
        "topic_id": 37,
        "order_index": 29,
        "challenge_name": "personalHobbies",
        "description": "description"
    },
    {
        "topic_id": 37,
        "order_index": 30,
        "challenge_name": "booksCatalogs",
        "description": "description"
    },
    {
        "topic_id": 37,
        "order_index": 31,
        "challenge_name": "habitatArea",
        "description": "description"
    },
    {
        "topic_id": 38,
        "order_index": 32,
        "challenge_name": "orderOfSuccession",
        "description": "description"
    },
    {
        "topic_id": 38,
        "order_index": 33,
        "challenge_name": "orderingEmails",
        "description": "description"
    },
    {
        "topic_id": 38,
        "order_index": 34,
        "challenge_name": "placesOfInterest",
        "description": "description"
    },
    {
        "topic_id": 38,
        "order_index": 35,
        "challenge_name": "soccerGameSeries",
        "description": "description"
    },
    {
        "topic_id": 39,
        "order_index": 36,
        "challenge_name": "correctIPs",
        "description": "description"
    },
    {
        "topic_id": 39,
        "order_index": 37,
        "challenge_name": "validPhoneNumbers",
        "description": "description"
    },
    {
        "topic_id": 40,
        "order_index": 38,
        "challenge_name": "importantEvents",
        "description": "description"
    },
    {
        "topic_id": 40,
        "order_index": 39,
        "challenge_name": "dateFormatting",
        "description": "description"
    },
    {
        "topic_id": 40,
        "order_index": 40,
        "challenge_name": "pastEvents",
        "description": "description"
    },
    {
        "topic_id": 40,
        "order_index": 41,
        "challenge_name": "netIncome",
        "description": "description"
    },
    {
        "topic_id": 40,
        "order_index": 42,
        "challenge_name": "alarmClocks",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 43,
        "challenge_name": "companyEmployees",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 44,
        "challenge_name": "scholarshipsDistribution",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 45,
        "challenge_name": "userCountries",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 46,
        "challenge_name": "placesOfInterestPairs",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 47,
        "challenge_name": "localCalendar",
        "description": "description"
    },
    {
        "topic_id": 41,
        "order_index": 48,
        "challenge_name": "routeLength",
        "description": "description"
    },
    {
        "topic_id": 42,
        "order_index": 49,
        "challenge_name": "currencyCodes",
        "description": "description"
    },
    {
        "topic_id": 42,
        "order_index": 50,
        "challenge_name": "nicknames",
        "description": "description"
    },
    {
        "topic_id": 42,
        "order_index": 51,
        "challenge_name": "tableSecurity",
        "description": "description"
    },
    {
        "topic_id": 42,
        "order_index": 52,
        "challenge_name": "officeBranches",
        "description": "description"
    },
    {
        "topic_id": 42,
        "order_index": 53,
        "challenge_name": "restaurantInfo",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 54,
        "challenge_name": "studentsInClubs",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 55,
        "challenge_name": "emptyDepartments",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 56,
        "challenge_name": "sunnyHolidays",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 57,
        "challenge_name": "closestCells",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 58,
        "challenge_name": "top5AverageGrade",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 59,
        "challenge_name": "salaryDifference",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 60,
        "challenge_name": "recentHires",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 61,
        "challenge_name": "checkExpenditure",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 62,
        "challenge_name": "dancingCompetition",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 63,
        "challenge_name": "trackingSystem",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 64,
        "challenge_name": "storageOptimization",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 65,
        "challenge_name": "consecutiveIds",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 66,
        "challenge_name": "holidayEvent",
        "description": "description"
    },
    {
        "topic_id": 43,
        "order_index": 67,
        "challenge_name": "hostnamesOrdering",
        "description": "description"
    },
    {
        "topic_id": 44,
        "order_index": 68,
        "challenge_name": "orderAnalytics",
        "description": "description"
    },
    {
        "topic_id": 44,
        "order_index": 69,
        "challenge_name": "customerMessages",
        "description": "description"
    },
    {
        "topic_id": 44,
        "order_index": 70,
        "challenge_name": "orderPrices",
        "description": "description"
    },
    {
        "topic_id": 45,
        "order_index": 71,
        "challenge_name": "findTable",
        "description": "description"
    },
    {
        "topic_id": 45,
        "order_index": 72,
        "challenge_name": "queriesExecution",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 73,
        "challenge_name": "filmLibrary",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 74,
        "challenge_name": "bugsInComponent",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 75,
        "challenge_name": "freeSeats",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 76,
        "challenge_name": "giftPackaging",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 77,
        "challenge_name": "stringsStatistics",
        "description": "description"
    },
    {
        "topic_id": 46,
        "order_index": 78,
        "challenge_name": "unluckyEmployees",
        "description": "description"
    },
    {
        "topic_id": 47,
        "order_index": 79,
        "challenge_name": "driversInfo",
        "description": "description"
    },
    {
        "topic_id": 47,
        "order_index": 80,
        "challenge_name": "sortBookChapters",
        "description": "description"
    },
    {
        "topic_id": 47,
        "order_index": 81,
        "challenge_name": "typeInheritance",
        "description": "description"
    },
    {
        "topic_id": 47,
        "order_index": 82,
        "challenge_name": "battleshipGameResults",
        "description": "description"
    },

    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////
    //// __________________________________Python_______________________________ //////// __________________________________Python_______________________________ ////


    {
        "topic_id": 48,
        "order_index": 1,
        "challenge_name": "Collections Truthness",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 2,
        "challenge_name": "Efficient Comparison",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 3,
        "challenge_name": "Special Conditional",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 4,
        "challenge_name": "Language Differences",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 5,
        "challenge_name": "Count Bits",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 6,
        "challenge_name": "Modulus",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 7,
        "challenge_name": "Simple Sort",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 8,
        "challenge_name": "Base Conversion",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 9,
        "challenge_name": "Mex Function",
        "description": "description"
    },
    {
        "topic_id": 48,
        "order_index": 10,
        "challenge_name": "List Beautifier",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 11,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 12,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 13,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 14,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 15,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 16,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 17,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 18,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 19,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 49,
        "order_index": 20,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 50,
        "order_index": 21,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 50,
        "order_index": 22,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 50,
        "order_index": 23,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 50,
        "order_index": 24,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 50,
        "order_index": 25,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 51,
        "order_index": 26,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 51,
        "order_index": 27,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 51,
        "order_index": 28,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 51,
        "order_index": 29,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 52,
        "order_index": 30,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 52,
        "order_index": 31,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 52,
        "order_index": 32,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 52,
        "order_index": 33,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 52,
        "order_index": 34,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 53,
        "order_index": 35,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 53,
        "order_index": 36,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 53,
        "order_index": 37,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 53,
        "order_index": 38,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 53,
        "order_index": 39,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 40,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 41,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 42,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 43,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 44,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 45,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 46,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 54,
        "order_index": 47,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 48,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 49,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 50,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 51,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 52,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 53,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 55,
        "order_index": 54,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 55,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 56,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 57,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 58,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 59,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 60,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 61,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 62,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 63,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 56,
        "order_index": 64,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 65,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 66,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 67,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 68,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 69,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 70,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 71,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 57,
        "order_index": 72,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 58,
        "order_index": 73,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 58,
        "order_index": 74,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 58,
        "order_index": 75,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 58,
        "order_index": 76,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 58,
        "order_index": 77,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 78,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 79,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 80,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 81,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 82,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 83,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 84,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 59,
        "order_index": 85,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 86,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 87,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 88,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 89,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 90,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 91,
        "challenge_name": "name",
        "description": "description"
    },
    {
        "topic_id": 60,
        "order_index": 92,
        "challenge_name": "name",
        "description": "description"
    },

    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////
    //// __________________________________Graphs_______________________________ //////// __________________________________Graphs_______________________________ ////


    {
        "topic_id": 61,
        "order_index": 1,
        "challenge_name": 'New Road System',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar I. As a kind and wise ruler, he did everything in his (unlimited) power to make life for his subjects comfortable and pleasant. One cold evening, a messenger arrived at the king's castle with the latest news: all kings in the Kingdoms Union had started enforcing traffic laws! In order to not lose his membership in the Union, King Byteasar decided he must do the same within his kingdom. But what would the citizens think of it?</p>
    
            <p>The king decided to start introducing the changes with something more or less simple: change all the roads in the kingdom from two-directional to one-directional (one-way). He personally prepared the <code>roadRegister</code> of the new roads, and now he needs to make sure that the road system is convenient and there will be no traffic jams, i.e., each city has the same number of incoming and outgoing roads. As the Hand of the King, you're the one he has decreed must check his calculations.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>roadRegister = 
            [[false, true,  false, false], 
             [false, false, true,  false], 
             [true,  false, false, true ], 
             [false, false, true,  false]]
            </code></pre>
            the output should be:</p>
            <code>solution(roadRegister) = true;</code>
            <p>The cities will be connected as follows:</p>
            <p>Cities 0, 1, and 3 (0-based) have one incoming and one outgoing road, and city 2 has two incoming and two outgoing roads. Thus, the output should be true.</p>
    
            <p>For <pre><code>roadRegister = 
            [[false, true,  false, false, false, false, false], 
             [true,  false, false, false, false, false, false], 
             [false, false, false, true,  false, false, false], 
             [false, false, true,  false, false, false, false], 
             [false, false, false, false, false, false, true ], 
             [false, false, false, false, true,  false, false], 
             [false, false, false, false, false, true,  false]]</code></pre> 
            the output should be:</p>
            <code>solution(roadRegister) = true;</code>
            <p>Each city has one incoming and one outgoing road.</p>
    
            <p>For <pre><code>roadRegister = 
            [[false, true,  false], 
             [false, false, false], 
             [true,  false, false]]</code></pre>
            the output should be:</p>
            <code>solution(roadRegister) = false;</code>
            <p>The cities will be connected as follows:</p>
            <p>City 1 has one incoming and no outgoing roads, and city 2 has one outgoing and no incoming roads.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>roadRegister</code></p>
                    <p>A square matrix of booleans representing the road system in the kingdom, where <code>roadRegister[i][j] = true</code> indicates a one-way road from city <code>i</code> to city <code>j</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if each city has the same number of incoming and outgoing roads, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 2,
        "challenge_name": 'Roads Building',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar II. There was nothing special about him or his kingdom. As a mediocre ruler, he preferred hunting and feasting over doing anything about his kingdom's prosperity.</p>
        
            <p>Luckily, his adviser, the wise magician Bitlin, worked for the kingdom's welfare day and night. However, since there was no one to advise him, he completely forgot about one important thing: the roads! Over the years, most of the two-way roads built by Byteasar's predecessors were forgotten and no longer traversable. Only a few roads can still be used.</p>
        
            <p>Bitlin wanted each pair of cities to be connected, but couldn't find a way to figure out which roads are missing. Desperate, he turned to his magic crystal ball for help. The crystal showed him a programmer from the distant future: you! Now you're the only one who can save the kingdom. Given the existing roads and the number of cities in the kingdom, you should use the most modern technologies and find out which roads should be built again to connect each pair of cities. Since the crystal ball is quite old and meticulous, it will only transfer the information if it is sorted properly.</p>
        
            <p>The roads to be built should be returned in an array sorted lexicographically, with each road stored as [cityi, cityj], where <code>cityi &lt; cityj</code>.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>cities = 4</code></pre> and <pre><code>roads = [[0, 1], [1, 2], [2, 0]]</code></pre>, the output should be:</p>
            <code>solution(cities, roads) = [[0, 3], [1, 3], [2, 3]];</code>
            <p>The existing roads are colored black, and the ones to be built are colored red.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>cities</code></p>
                    <p>The number of cities in the kingdom.</p>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>Array of roads in the kingdom. Each road is given as a pair <code>[cityi, cityj]</code>, where <code>0 ≤ cityi, cityj &lt; cities</code> and <code>cityi ≠ cityj</code>. It is guaranteed that no road is given twice.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>A unique array of roads that should be built, sorted lexicographically. There's no need to build looping roads, i.e., roads that lead back from a city to itself.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 3,
        "challenge_name": 'Efficient Road Network',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar III. As a smart and educated ruler, he did everything in his (unlimited) power to make every single system within his kingdom efficient. The king went down in history as a great road builder: during his reign, a great number of roads were built, and the road system he created was the most efficient during those dark times.</p>
        
            <p>When you started learning about Byteasar's III deeds in your history classes, a creeping doubt crawled into the back of your mind: what if the famous king wasn't so great after all? According to the most recent studies, there were <code>n</code> cities in Byteasar's kingdom, connected by two-way roads. You managed to get information about these roads from the university library, so now you can write a function that will determine whether the road system in Byteasar's kingdom was efficient or not.</p>
        
            <p>A road system is considered efficient if it is possible to travel from any city to any other city by traversing at most 2 roads.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 6</code></pre> and <pre><code>roads = [[3, 0], [0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]</code></pre>, the output should be:</p>
            <code>solution(n, roads) = true;</code>
            <p>Here's how the road system can be represented:</p>
            <p>The road system is efficient as you can travel between any pair of cities by traversing at most 2 roads.</p>
        
            <p>For <pre><code>n = 6</code></pre> and <pre><code>roads = [[0, 4], [5, 0], [2, 1], [1, 4], [2, 3], [5, 2]]</code></pre>, the output should be:</p>
            <code>solution(n, roads) = false;</code>
            <p>Here's how the road system can be represented:</p>
            <p>As you can see, it's only possible to travel from city 3 to city 4 by traversing at least 3 roads.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of cities in the kingdom.</p>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>Array of roads in the kingdom. Each road is given as a pair <code>[cityi, cityj]</code>, where <code>0 ≤ cityi, cityj &lt; n</code> and <code>cityi ≠ cityj</code>. It is guaranteed that no road is given twice.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the road system is efficient, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 4,
        "challenge_name": 'Financial Crisis',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar IV. His kingdom, in the middle of a financial crisis, was struggling to keep the economy out of a recession. Unfortunately, there was not much he could do, and after much agonizing, he came to the only solution: one of his cities had to be demolished, since keeping communication active between all the cities is way too expensive.</p>
        
            <p>It is not yet known if Byteasar chose a city to destroy after careful planning or picked one at random. As a person with a PhD in History and a Nobel Prize in Computer Science, you can solve this mystery! Archaeologists have recently found a manuscript with information about the roads between the cities, which is now stored in the <code>roadRegister</code> matrix. You want to try and remove each city one by one and compare the road registers obtained this way. Thus, you'll be able to compare the obtained roads and determine whether the one picked by Byteasar was the best by some criteria.</p>
        
            <p>Given the <code>roadRegister</code>, return an array of all the road registers obtained after removing each of the cities one by one.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>roadRegister = 
            [[false, true,  true,  false], 
             [true,  false, true,  false], 
             [true,  true,  false, true ], 
             [false, false, true,  false]]</code></pre> 
             
             the output should be:</p>

            <pre><code>solution(roadRegister) = [
              [[false, true,  false],
               [true,  false, true ],
               [false, true,  false]],
              [[false, true,  false],
               [true,  false, true ],
               [false, true,  false]],
              [[false, true,  false],
               [true,  false, false],
               [false, false, false]],
              [[false, true,  true ],
               [true,  false, true ],
               [true,  true,  false]]
            ];</code></pre>
            <p>Here's the city connection that the given catalog represents:</p>
            <p>And here's how the cities are connected with one of the cities destroyed (cities 0 - 3, respectively):</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>roadRegister</code></p>
                    <p>Since cartography was not properly developed in the kingdom, the registers were used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If <code>roadRegister[i][j] = true</code>, then there is a road between the <code>i</code>th and <code>j</code>th cities; the road doesn't exist otherwise.</p>
                    <p>It is guaranteed that there are no looping roads, i.e., roads that lead back to the same city it originated from.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.array.boolean</p>
                    <p>Array of the size <code>roadRegister.length</code>, with each of its elements of size <code>(roadRegister.length - 1) × (roadRegister.length - 1)</code>. The <code>i</code>th element of the resulting array should contain the road register of the kingdom with the <code>i</code>th city removed.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 5,
        "challenge_name": 'Naming Roads',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar V. His predecessor, King Byteasar IV, lived quite a long life, and when Byteasar V finally ascended to the throne, he was already 150 years old. The new king had been preparing all his life for his moment of glory and, scared that he wouldn't have enough time to shine, started his reforms right away. The first (and, as it turned out, the last) royal decree, issued within a couple of days of the coronation, ordered the following: each and every road in the kingdom was to be named.</p>
        
            <p>Unfortunately, the king didn't have enough time to come up with actual names, so all the roads were to be named with numbers from 0 to <code>roads.length - 1</code>. As a born strategist, Byteasar wanted to make sure that the maps of his kingdom were confusing to enemies, which is why the road names were to be chosen so that no two roads with neighboring names would have a common end.</p>
        
            <p>The official cartographers came up with names for the roads, but they're not sure if the constraint the king imposed was actually met, and it's your job to help them out. Given the names for the roads the cartographers came up with, check that no two roads with neighboring names have a common end.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>roads = 
            [[0, 1, 0], 
             [4, 1, 2], 
             [4, 3, 4], 
             [2, 3, 1], 
             [2, 0, 3]]</code></pre> 
             
            the output should be:</p>
            <code>solution(roads) = true;</code>
            <p>Here's what the given road system looks like:</p>
            <p><img src="example1.png" alt="Example 1" /></p>
        
            <p>For <pre><code>roads = 
            [[2, 3, 1], 
             [3, 0, 0], 
             [2, 0, 2]]</code></pre> 
            
             the output should be:</p>
            <code>solution(roads) = false;</code>
            <p>Here's what the given road system looks like:</p>
            <p><img src="example2.png" alt="Example 2" /></p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>Array of two-way roads with their names. Each road is given in the format <code>[city1, city2, road_name]</code>, where <code>city1 ≠ city2</code>, and <code>0 ≤ road_name < roads.length</code>. It is guaranteed that there are no duplicate roads or roads with the same name.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the names of the roads will be confusing to enemies, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 6,
        "challenge_name": 'Great Renaming',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar VI. As any king with such a magnificent name, he was destined to leave a trace in history. Unfortunately, imagination wasn't one of Byteasar's strong suits, so the reform he came up with was quite simple: he ordered that all his kingdom's cities should be renamed. He didn't want to come up with new names (as a king, he'd have to remember them all!), so he ordered the cities to swap their names in such a manner that the <code>i</code>th city would have the name of the city number (<code>i + 1</code>)th. The last city in the Byteasar's kingdom would, naturally, get the name of the very first city.</p>
        
            <p>The cartographers were not happy with this reform, since they had to redraw all the kingdom's maps. Before the reform, information about all the roads between the cities were stored in the <code>roadRegister</code>. Prior to redrawing any map, they had to start with updating the register. Your task is to find out the state of the updated register.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>roadRegister = 
            [[false, true,  true,  false], 
             [true,  false, true,  false], 
             [true,  true,  false, true ], 
             [false, false, true,  false]]</code></pre> 

            the output should be:</p>
            <pre><code>solution(roadRegister) = 
            [[false, false, false, true ], 
             [false, false, true,  true ], 
             [false, true,  false, true ], 
             [true,  true,  true,  false]]</code></pre>
            <p>Here's how the catalog can be represented before and after the Great Renaming:</p>
            <p><img src="renaming_example.png" alt="Renaming Example" /></p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>roadRegister</code></p>
                    <p>Since cartography has not yet been properly developed in the kingdom, the registers are used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If <code>roadRegister[i][j] = true</code>, then there is a road between the <code>i</code>th and the <code>j</code>th cities; the road doesn't exist otherwise.</p>
                    <p>It is guaranteed that there are no looping roads, i.e., roads that lead back to the same city it originated from.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.boolean</p>
                    <p><code>roadRegister</code> after the Great Renaming.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 7,
        "challenge_name": 'Cities Conquering',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar VII. Since he reigned during the Dark Times, very little is known about his reign. It is known that when he ascended the throne, there were <code>n</code> cities in the kingdom, connected by several two-way roads. But before the young king managed to start ruling, an enemy arrived at the gates: the evil emperor Bugoleon invaded the kingdom and started to conquer the cities, advancing day after day.</p>
        
            <p>It is not known how long it took to capture each of the cities, but you've recently discovered an ancient manuscript describing that each day, Bugoleon captured all the cities that had at most 1 neighboring free city at that given moment. Knowing this fact, the number of cities <code>n</code> and all the roads of the kingdom, determine in how many days each of the cities was conquered.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 10</code></pre> and <pre><code>roads = 
            [[1, 0], [1, 2], [8, 5], [9, 7], [5, 6], [5, 4], [4, 6], [6, 7]]</code></pre>, the output should be:</p>
            <pre><code>solution(n, roads) = [1, 2, 1, 1, -1, -1, -1, 2, 1, 1]</code></pre>
            <p>Here's how the cities were conquered:</p>
            <p><img src="conquest_example.png" alt="Conquest Example" /></p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of cities in the kingdom.</p>
                    <p>Guaranteed constraints: 1 ≤ n ≤ 100.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>Array of two-way roads, where each road is given in the format <code>[city1, city2]</code>, meaning that city1 and city2 are connected. It is guaranteed that there is at most one road between two cities, and no road is given twice.</p>
                    <p>Guaranteed constraints: 0 ≤ roads.length ≤ n · (n - 1) / 2, roads[i].length = 2, roads[i][0] ≠ roads[i][1], 0 ≤ roads[i][j] < n.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>An array of length <code>n</code>, where the <code>i</code>th element is the number of days it took to conquer the <code>i</code>th city, or -1 if the city wasn't conquered.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 8,
        "challenge_name": 'Merging Cities',
        "description": `
            <p>Once upon a time, in a kingdom far, far away, there lived a King Byteasar VIII. The king went down in history as a great warrior, since he managed to defeat a longtime enemy that had been capturing the kingdom's cities for more than a century. When the war was over, most of the cities were almost completely destroyed, so Byteasar decided to create new cities by merging them.</p>
    
            <p>The king decided to merge each pair of cities <code>city<i></code>, <code>city<i+1></code> for <code>i = 0, 2, 4, ...</code> if they were connected by one of the two-way roads running through the kingdom.</p>
    
            <p>Initially, all information about the roads was stored in the <code>roadRegister</code>. Your task is to return the <code>roadRegister</code> after the merging is performed, assuming that after merging the cities re-indexation is done in such a way that any city formed from cities <code>a</code> and <code>b</code> (where <code>a &lt; b</code>) receives index <code>a</code>, and all the cities with numbers <code>i</code> (where <code>i &gt; b</code>) get numbers <code>i - 1</code>.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>roadRegister = 
            [[false, true,  true,  false, false, false, true ],
             [true,  false, true,  false, true,  false, false],
             [true,  true,  false, true,  false, false, true ],
             [false, false, true,  false, false, true,  true ],
             [false, true,  false, false, false, false, false],
             [false, false, false, true,  false, false, false],
             [true,  false, true,  true,  false, false, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(roadRegister) = 
            [[false, true,  true,  false, true ],
             [true,  false, false, true,  true ],
             [true,  false, false, false, false],
             [false, true,  false, false, false],
             [true,  true,  false, false, false]]</code></pre>
            <p>Here's how the cities were merged:</p>
            <p><img src="merging_example.png" alt="Merging Example" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>roadRegister</code></p>
                    <p>Since cartography was not properly developed in the kingdom, the registers were used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If <code>roadRegister[i][j] = true</code>, then there is a road between the <code>i</code>th and the <code>j</code>th cities; the road doesn't exist otherwise.</p>
                    <p>It is guaranteed that there are no looping roads, i.e., roads that lead back to the same city it originated from.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.boolean</p>
                    <p>The <code>roadRegister</code> after all the cities are merged.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 61,
        "order_index": 9,
        "challenge_name": 'Living On The Roads',
        "description": `
            <p>In a kingdom far, far away, there lives a King Byteasar IX. The history of the kingdom is rich with events and conflicts, most of which is focused on its cities. King Byteasar doesn't want to go down in history as a lame duck ruler, and especially doesn't want to have anything to do with the infamous cities of the kingdom.</p>
    
            <p>Instead, King Byteasar wants to focus on the roads, which is why he issued a new decree: from now on, all roads are to be considered cities, and all cities are to be considered roads. Now his most grateful subjects must pack up their belongings and move out from the cities to the roads, and the cartographers are busy with building a new <code>roadRegister</code> of the kingdom. All roads of the kingdom are to be named for the cities they connect (i.e., <code>[city1, city2]</code>, <code>city1 &lt; city2</code>), sorted lexicographically and enumerated starting from 0. A new road register for such a system needs to be created.</p>
    
            <p>Your task is to help the cartographers build the new road register. Handle the challenge, and the glorious kingdom of Byteasar IX will never have to deal with its pesky cities ever again!</p>
    
            <h3>Example</h3>
            <p>For <pre><code>roadRegister = 
            [[false, true,  true,  false, false, false],
             [true,  false, false, true,  false, false],
             [true,  false, false, false, false, false],
             [false, true,  false, false, false, false],
             [false, false, false, false, false, true ],
             [false, false, false, false, true,  false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(roadRegister) = 
            [[false, true,  true,  false],
             [true,  false, false, false],
             [true,  false, false, false],
             [false, false, false, false]]</code></pre>
            <p>Here's how the new register can be obtained:</p>
            <p><img src="road_register_example.png" alt="Road Register Example" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>roadRegister</code></p>
                    <p>Since cartography has not yet been properly developed in the kingdom, the registers are used instead. A register is stored as a square matrix, with its size equal to the number of cities in the kingdom. If <code>roadRegister[i][j] = true</code>, then there is a road between the <code>i</code>th and the <code>j</code>th cities; the road doesn't exist otherwise.</p>
                    <p>It is guaranteed that there are no looping roads, i.e., roads that lead back to the same city it originated from.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.boolean</p>
                    <p>The <code>roadRegister</code> after all cities are turned into roads, and vice versa.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 10,
        "challenge_name": 'Is Butterfly',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize butterfly patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a butterfly or not.</p>
    
            <p>The butterfly contour looks like this:</p>
            <p><img src="butterfly_contour.png" alt="Butterfly Contour" /></p>
    
            <p>Given the object's contour as an undirected graph represented by adjacency matrix <code>adj</code>, determine whether it's a butterfly or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, true, false, false],
             [true, false, true, false, false],
             [true, true, false, true, true],
             [false, false, true, false, true],
             [false, false, true, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="butterfly_graph.png" alt="Butterfly Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>adj.length == 5</code>, <code>adj[i].length == 5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a butterfly, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 11,
        "challenge_name": 'Count Stars',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize star patterns in the image of the night sky, which means that you need to implement a function that, given the adjacency matrix representing a number of contours in the sky, will find the number of stars in it.</p>
    
            <p>The graph representing some contour is considered to be a star if it is:</p>
            <ul>
                <li>a tree of size 2, or</li>
                <li>a tree of size <code>k > 2</code> with one internal node (which is a tree root at the same time) and <code>k - 1</code> leaves.</li>
            </ul>
            <p>Here is an example of some stars:</p>
            <p><img src="star_patterns.png" alt="Star Patterns" /></p>
    
            <p>Given the sky objects' contours as an undirected graph represented by its adjacency matrix <code>adj</code>, calculate the number of stars in it.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, false, false, false],
             [true, false, false, false, false],
             [false, false, false, true, false],
             [false, false, true, false, false],
             [false, false, false, false, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = 2</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="star_graph.png" alt="Star Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>2 < adj.length ≤ 100</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of star contours in the sky.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 12,
        "challenge_name": 'Is Wheel',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize wheel patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a wheel or not.</p>
    
            <p>The wheel contour can be thought of as a single center vertex and a regular polygon with <code>n</code> (<code>n > 2</code>) vertices which are all connected to the center. Here is an example:</p>
            <p><img src="wheel_pattern.png" alt="Wheel Pattern" /></p>
    
            <p>Given the object's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it's a wheel or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, true, true, true], 
             [true, false, true, false, true], 
             [true, true, false, true, false], 
             [true, false, true, false, true], 
             [true, true, false, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="wheel_graph.png" alt="Wheel Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>3 < adj.length < 100</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a wheel, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 13,
        "challenge_name": 'Is Book',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize book patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a book or not.</p>
    
            <p>A book consists of a base and may have any number of pages. The book's base consists of a single edge connecting two nodes, and it is a common edge for all the pages. Besides that, every page has only one node connected to both sides of the base. Here is an example:</p>
            <p><img src="book_pattern.png" alt="Book Pattern" /></p>
    
            <p>Given the object's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it's a book or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, true, true], 
             [true, false, true, true], 
             [true, true, false, false], 
             [true, true, false, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="book_graph.png" alt="Book Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>2 ≤ adj.length < 100</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a book, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 14,
        "challenge_name": 'Is Bull',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize bull patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a bull or not.</p>
    
            <p>You noticed that although all bull heads are similar, there is some variation in the shapes of their horns, so there are several possible bull contours. The image below shows all such contours:</p>
            <p><img src="bull_patterns.png" alt="Bull Patterns" /></p>
    
            <p>Given the object's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it's a bull or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, false, false, false], 
             [true, false, true, true, false], 
             [false, true, false, true, false], 
             [false, true, true, false, true], 
             [false, false, false, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="bull_graph.png" alt="Bull Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>adj.length == 5</code>, <code>adj[i].length == 5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a bull, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 15,
        "challenge_name": 'Is Tadpole',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize tadpole patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a tadpole or not.</p>
    
            <p>The tadpole contour consists of two parts: a head which is a cycle with <code>n</code> (<code>n > 2</code>) vertices, and a tail which is a simple path (with at least one vertex) connected to the head. Here is an example:</p>
            <p><img src="tadpole_pattern.png" alt="Tadpole Pattern" /></p>
    
            <p>Given the object's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it's a tadpole or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, true, false, false], 
             [true, false, false, true, false], 
             [true, false, false, true, false], 
             [false, true, true, false, true], 
             [false, false, false, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="tadpole_graph.png" alt="Tadpole Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>3 < adj.length < 20</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a tadpole, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 16,
        "challenge_name": 'Is Flower',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and now you need to start the teaching process.</p>
    
            <p>Today you want to teach your program to recognize flower patterns, which means that you need to implement a function that, given the adjacency matrix representing the contour, will determine whether it's a flower or not.</p>
    
            <p>The flower contour consists of several (at least one) petals. Petal contours are the same-sized (of size greater than 2) complete graphs with exactly one common vertex. Here are some examples of the flower contours:</p>
            <p><img src="flower_patterns.png" alt="Flower Patterns" /></p>
    
            <p>Given the object's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it's a flower or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, true, true, true], 
             [true, false, true, false, false], 
             [true, true, false, false, false], 
             [true, false, false, false, true], 
             [true, false, false, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's what the given graph looks like:</p>
            <p><img src="flower_graph.png" alt="Flower Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph.</p>
                    <p>Guaranteed constraints: <code>2 < adj.length < 100</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a flower, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 62,
        "order_index": 17,
        "challenge_name": 'Is Correctly Cut',
        "description": `
            <p>You decided to create an automatic image recognizer that will determine the object in the image based on its contours. The main recognition system is already implemented, and you have taught it to recognize several patterns.</p>
    
            <p>You are pretty pleased with your results so far and as such you have finally decided to put your program to good use. The timing is perfect: you've received an offer from a jewelry shop. They want you to help them sort their diamonds. Each gem has a different type of a cut which influences its price. You were asked to find all the diamonds with a specific kind of pattern.</p>
    
            <p>Luckily, your image recognizer has almost everything it takes to tackle the problem, and all that is left for you is to teach it to recognize the correct patterns. You need to implement a function that, given the adjacency matrix representing the cut contour, will determine whether it's a correct cut or not.</p>
    
            <p>The pattern of the cut of size <code>2 · n</code> is a correct one if its contour can be split into two equal groups <code>U</code> and <code>V</code> of <code>n</code> vertices numbered from <code>0</code> to <code>n - 1</code> (in each group) such that for any pair of vertices <code>u</code> and <code>v</code> there exists an edge between them if and only if they don't belong to the same group and their respective "group" numbers are different.</p>
    
            <p>Here are some examples of correct cut contours (vertices belonging to the same group have the same color):</p>
            <p><img src="diamond_patterns.png" alt="Diamond Patterns" /></p>
    
            <p>Given the gem's contour as an undirected graph represented by its adjacency matrix <code>adj</code>, determine whether it has a correct cut or not.</p>
    
            <h3>Example</h3>
            <p>For <pre><code>adj = 
            [[false, true, false, false, false, true], 
             [true, false, true, false, false, false], 
             [false, true, false, true, false, false], 
             [false, false, true, false, true, false], 
             [false, false, false, true, false, true], 
             [true, false, false, false, true, false]]</code></pre>
    
            the output should be:</p>
            <pre><code>solution(adj) = true</code></pre>
            <p>Here's how the given graph looks like (here <code>gn</code> stands for the vertex number in its group):</p>
            <p><img src="diamond_graph.png" alt="Diamond Graph" /></p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>adj</code></p>
                    <p>An adjacency matrix of an undirected graph with an even number of vertices.</p>
                    <p>Guaranteed constraints: <code>6 ≤ adj.length ≤ 100</code>, <code>adj[i].length == adj.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given contour is a contour of the correct diamond cut, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 18,
        "challenge_name": 'Is Wood Magical',
        "description": `
            <p>Not long ago you got lost in the nearby woods when walking with your friend. You managed to get out of it, but no thanks to you: your friend was the one who drew the map of the woods and managed to find a way home. That embarrassed you quite a lot, so you decided to go out there to the other woods, get lost there and make your way home without any help.</p>
        
            <p>The first part of your plan went smoothly, and now you're completely lost in unknown woods. You're on your own but for the map <code>wmap</code> you drew, and now you simply need to make it home, preferably before it gets too dark. To make things more interesting, you decided to find something unusual about the map you drew. Since you like even numbers even more than getting lost in the woods, you want to check if the map contains cycles only of even length. You firmly believe that such woods are magical, so you'll have something to tell your friend when you make it out safely.</p>
        
            <p>Given the number of meadows in the woods <code>n</code> and the map representing their connections <code>wmap</code>, check if this map contains only cycles of even length.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 5 and wmap = [[1, 2], [1, 3], [1, 4], [0, 2], [4, 0]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = true</code></pre>
            <p>There is only one cycle: 1 - 4 - 0 - 2 and its length is 4, which is an even number.</p>
        
            <p>For <pre><code>n = 5 and wmap = [[1, 2], [1, 3], [1, 4], [0, 2], [4, 0], [1, 0]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = false</code></pre>
            <p>There is a cycle 1 - 4 - 0, which length is 3 - an odd number.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of vertices on the map.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wmap</code></p>
                    <p>Edges drawn on the map. <code>wmap[i]</code> for each valid <code>i</code> contains two elements and represents a road that connects <code>wmap[i][0]</code> and <code>wmap[i][1]</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wmap.length ≤ 96917</code>, <code>wmap[i].length = 2</code>, <code>0 ≤ wmap[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if there are only cycles with even length in the map and <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 19,
        "challenge_name": 'Walking In The Woods',
        "description": `
            <p>After you got lost in the woods the last time, you made sure to memorize the entire map, so now you can walk around without the fear. When you were studying the map, you realized that it might be impossible to visit all the meadows walking on the roads. In order to get from one set of connected meadows to the other one has to go through the thicket of thistle.</p>
        
            <p>Naturally, you don't want to struggle through the thicket too often. Given the number of meadows <code>n</code> and the map of the woods <code>wmap</code> storing the information about the roads connecting them, calculate the minimal number of times you'd have to go off the roads in order to visit all the meadows in one run.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 5 and wmap = [[0, 1], [2, 1], [0, 2], [3, 4]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = 1</code></pre>
            <p>Starting from any of the first three meadows, you can visit any of them, then visit meadow 3 walking through the thicket, and then visit meadow 4. Starting from any of the two last meadows, you can do the same thing.</p>
        
            <p>For <pre><code>n = 6 and wmap = [[0, 1], [2, 1], [0, 2], [3, 4]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = 2</code></pre>
            <p>Here you need to visit one more meadow that isn't connected to any of the other ones, so you'll need to walk through the thicket one more time.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of meadows in the woods.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wmap</code></p>
                    <p>Edges drawn on the map. <code>wmap[i]</code> for each valid <code>i</code> contains two elements and represents a road that connects <code>wmap[i][0]</code> and <code>wmap[i][1]</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wmap.length ≤ 105</code>, <code>wmap[i].length = 2</code>, <code>0 ≤ wmap[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of times you'll need to walk through the thicket to visit all the meadows.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 20,
        "challenge_name": 'Is Pseudoforest',
        "description": `
            <p>You and your friend are walking in the woods. You are gathering mushrooms and catching butterflies, and your friend is drawing a map of the woods: he is a very cautious person, who doesn't want to get lost. When you get tired of running around, you decide to check out the map your friend has drawn so far, and it strikes you: it looks like the woods you're walking in represent a pseudoforest!</p>
        
            <p>Since you're a programmer and think in terms of algorithms, you need to write a function that, given a map, determines whether it is a pseudoforest or not. The map your friend drew represents a graph <code>wmap</code> of <code>n</code> vertices. A map is called a pseudoforest if each of its connected components contains no more than one cycle.</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 7 and wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [5, 6]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = true</code></pre>
            <p>One of the connected components contains only one cycle (1 - 2 - 3), and the other one has no cycles at all.</p>
        
            <p>For <pre><code>n = 7 and wmap = [[0, 1], [1, 2], [2, 3], [3, 1], [3, 4], [4, 0], [5, 6]]</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap) = false</code></pre>
            <p>There are three cycles in one of the connected components:</p>
            <ul>
                <li>1 - 2 - 3;</li>
                <li>1 - 3 - 4 - 0;</li>
                <li>0 - 1 - 2 - 3 - 4.</li>
            </ul>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>Number of vertices in the map.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wmap</code></p>
                    <p>Edges drawn on the map. <code>wmap[i]</code> contains two elements and represents one edge for each valid <code>i</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wmap.length ≤ 105</code>, <code>wmap[i].length = 2</code>, <code>0 ≤ wmap[i][j] < n</code>, <code>wmap[i][0] ≠ wmap[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if <code>wmap</code> represents a pseudoforest and <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 21,
        "challenge_name": 'Burning The Wood',
        "description": `
            <p>You've been walking in the woods you got so attached to for the entire day. The weather was nice and warm, the smell of the nature was wonderful, and you got so carried away (both literally and virtually) that you didn't even notice when it started to get cold. Your home is too far from your current location, and you're barely standing on your feet having walked for so long, so you have no other option but to make your bed right where you are.</p>
        
            <p>Since it's really cold already, you'd like to start a campfire. Of course, playing with fire is a bad idea, especially in dry woods, but you didn't sleep last night and need at least <code>k</code> hours of sleep to think straight the next day. You assume that if the fire starts in some meadow, each hour it'll spread to all the neighboring meadows, each of which will in turn set their neighboring meadows on fire in another hour.</p>
        
            <p>There are <code>n</code> meadows in the forest, and you're going to start a campfire in your current meadow <code>start</code>. Knowing how the meadows are connected (this information is given as a matrix <code>wmap</code>), find out which meadows may be on fire when you wake up after <code>k</code> hours and return the list of these meadows sorted in ascending order (don't worry about yourself - woods around you are not dry, so the fire in your meadow won't hurt you).</p>
        
            <h3>Example</h3>
            <p>For <pre><code>n = 5, wmap = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]], start = 0, and k = 1</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap, start, k) = [0, 1, 4]</code></pre>
        
            <p>For <pre><code>n = 7, wmap = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], [4, 1]], start = 0, and k = 2</code></pre> the output should be:</p>
            <pre><code>solution(n, wmap, start, k) = [0, 1, 2, 4, 5, 6]</code></pre>
            <p>At the beginning of the first hour meadow 0 starts burning. At the second hour meadows 1 and 6 start burning as well. At the third hour neighbors of meadow 1 - meadows 2 and 4 - catch on fire, and so does the only neighbor of meadow 6 - meadow 5. So, at the end of the third hour meadows 0, 1, 2, 4, 5, and 6 will be on fire.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of meadows in the forest.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 5 · 10^4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wmap</code></p>
                    <p>The information about the connected meadows. <code>wmap[i]</code> for each valid <code>i</code> contains two elements and represents a road that connects <code>wmap[i][0]</code> and <code>wmap[i][1]</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wmap.length ≤ 5 · 10^4</code>, <code>wmap[i].length = 2</code>, <code>0 ≤ wmap[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>start</code></p>
                    <p>The meadow where you're going to start a campfire.</p>
                    <p>Guaranteed constraints: <code>0 ≤ start < n</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The number of hours you're going to sleep.</p>
                    <p>Guaranteed constraints: <code>0 ≤ k ≤ 10^3</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>The list of meadows that may be on fire in <code>k</code> hours sorted in ascending order.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 22,
        "challenge_name": 'Caterpiller Trees',
        "description": `
            <p>Not long ago you discovered a wonderful tree in the nearby woods that made you very curious about the greenery around you. You went to the nearby woods and drew various plants in your notebook. The plants in the woods have various structures: some of them even contain loops!</p>
        
            <p>Anyway, for now you are interested only in trees. You came up with a brand new property: you call a tree a caterpillar if there exists a path in it, such that each vertex of a tree either belongs to this path or is connected to one of its vertices by a single edge. To find out more about them, you would like to write a program that will find all interesting trees in the structures you drew in your notebook.</p>
        
            <p>The plants you drew consist of <code>n</code> vertices and are connected by several edges. Calculate the number of regular trees and caterpillar trees in the structures you drew in your notebook.</p>
        
            <h3>Example</h3>
            <p>For <code>n = 21</code> and 
            <pre><code>edges = 
            [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7], 
             [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13], 
             [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19]]</code></pre> 
             
            the output should be:</p>
            <code>solution(n, edges) = [2, 2]</code>
        
            <p>There are two connected components and both of them are trees and caterpillar trees.</p>
        
            <p>For <code>n = 22</code> and <pre><code>edges = 
            [[0, 1], [1, 2], [2, 3], [2, 4], [4, 5], [4, 6], [4, 7], 
            [4, 8], [4, 9], [4, 10], [10, 11], [11, 12], [11, 13], 
            [11, 14], [14, 15], [14, 16], [14, 17], [14, 18], [14, 19], [13, 20]]</code></pre> 
            
            the output should be:</p>
            <code>solution(n, edges) = [2, 1]</code>
        
            <p>The first connected component is a tree, but not a caterpillar tree, because vertex 20 is not directly connected to the central path.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of vertices in the structures drawn in your notebook.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>edges</code></p>
                    <p>Edges drawn in the notebook. <code>edges[i]</code> for each valid <code>i</code> contains two elements and represents an edge that connects <code>edges[i][0]</code> and <code>edges[i][1]</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ edges.length ≤ 10^5</code>, <code>edges[i].length = 2</code>, <code>0 ≤ edges[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array of two integers, where the first represents the number of trees in your woods and the second represents the number of caterpillar trees in it.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 23,
        "challenge_name": 'Is Mobius Ladder',
        "description": `
            <p>You've been studying trees a lot lately and became an expert in caterpillar trees. Now that you know everything about them, you're ready to climb one. However, in order to climb such a tree you need a special ladder that you call a Mobius ladder.</p>
        
            <p>A Mobius ladder is a slightly modified proper ladder. Firstly, let's define what a proper ladder is: a proper ladder is a ladder that can be represented by a graph containing two chains of vertices with <code>n</code> vertices in each one, where the <i>i</i>th vertex of the first chain is connected to the <i>i</i>th vertex of the second chain. For example, a proper ladder with 8 vertices looks like this:</p>
        
            <p>A Mobius ladder is a proper ladder with two additional connections: the first vertex of the first chain is connected to the last vertex of the second chain, and the last vertex of the first chain is connected to the first vertex of the second chain. For example, here is a Mobius ladder with 8 vertices:</p>
        
            <p>You found a ladder that can be represented by <code>n</code> vertices in the attic. Now you need to check if it is a Mobius ladder, to make sure it can be used to climb a caterpillar tree.</p>
        
            <h3>Example</h3>
            <p>For <code>n = 6</code> and <pre><code>ladder = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]</code></pre> the output should be:</p>
            <pre><code>solution(n, ladder) = false</code></pre>
        
            <p>For <code>n = 8</code> and <pre><code>ladder = 
            [[0, 1], [0, 2], [0, 7], [1, 3], [1, 6], [2, 3], 
             [2, 4], [3, 5], [4, 5], [4, 6], [5, 7], [6, 7]]</code></pre>
             
            the output should be:</p>
            <pre><code>solution(n, ladder) = true</code></pre>
        
            <p>This is the test from the description:</p>
            <p>For <code>n = 10</code> and <pre><code>ladder = 
            [[0, 1], [0, 3], [0, 7], [0, 9], [1, 2], 
             [1, 4], [1, 8], [2, 3], [2, 5], [2, 9], 
             [3, 4], [3, 6], [4, 5], [4, 7], [5, 6], 
             [5, 8], [6, 7], [6, 9], [7, 8], [8, 9]]</code></pre> 
            
            the output should be:</p>
            <pre><code>solution(n, ladder) = false</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>An even integer, the number of vertices that represent your ladder.</p>
                    <p>Guaranteed constraints: <code>2 ≤ n ≤ 5 · 10^4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>ladder</code></p>
                    <p>Edges of the ladder drawn in the plan. <code>ladder[i]</code> for each valid <code>i</code> contains two elements and represents an edge that connects <code>ladder[i][0]</code> and <code>ladder[i][1]</code>.</p>
                    <p>It is guaranteed that between any two vertices there is no more than one edge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ ladder.length ≤ 75,000</code>, <code>ladder[i].length = 2</code>, <code>0 ≤ ladder[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given ladder represents a Mobius ladder, <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 24,
        "challenge_name": 'Tree Diameter',
        "description": `
            <p>You got sick because of walking in the woods at night and have to spend a week at home without going out. Looking out of the window at the nearby woods, you're wondering if there is anything you don't yet know about them. Suddenly, you see a beautiful and very tall tree you haven't seen before. Since you have nothing to do, you decide to examine its structure and draw it in your notebook.</p>
        
            <p>You became so excited about this new tree that your temperature went up, so you were forced to stay in bed. You can't see the tree from your bed, but luckily you have it drawn down. The first thing you'd like to find out about is the tree height. Looking at your drawing, you suddenly realize that you forgot to mark the tree bottom and you don't know from which vertex you should start counting. Of course, a tree height can be calculated as the length of the longest path in it (it is also called tree diameter). So, now you have a task you need to solve, so go ahead!</p>
        
            <h3>Example</h3>
            <p>For <code>n = 10</code> and 
            <pre><code>tree = [[2, 5], [5, 7], [5, 1], [1, 9], [1, 0], [7, 6], [6, 3], [3, 8], [8, 4]]</code></pre> the output should be:</p>
            <code>solution(n, tree) = 7</code>
        
            <p>The longest path is the path from vertex 4 to either vertex 9 or 0.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of vertices in the structure you drew in your notebook.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 10^4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>tree</code></p>
                    <p>Edges of the tree. <code>tree[i]</code> for each valid <code>i</code> contains two elements and represents an edge that connects <code>tree[i][0]</code> and <code>tree[i][1]</code>.</p>
                    <p>It is guaranteed that the given graph is a tree, i.e., it is connected and has no cycles.</p>
                    <p>Guaranteed constraints: <code>tree.length = n - 1</code>, <code>tree[i].length = 2</code>, <code>0 ≤ tree[i][j] < n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The tree diameter of the given tree.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 63,
        "order_index": 25,
        "challenge_name": 'Squirrel And Nut',
        "description": `
            <p>Wandering in the woods, you noticed a squirrel sitting in node <code>A</code> of a tree. It didn't look like it was going to sit there forever though: there was a delicious nut in node <code>B</code>, and the squirrel looked determined to reach it by moving via the branches of the tree. You grabbed your camera to take a picture of the squirrel in node <code>C</code> (that's the only node that would make the picture perfect), but were too late: the smart rodent had already made it to node <code>B</code>.</p>
        
            <p>There are still a lot of nuts on the tree, and it seems that the squirrel is going to try and take them all. Looks like the squirrel is smart enough to follow only the shortest paths along the tree branches, which means you can now predict when the right opportunity to take a perfect picture arises. Given the configuration of the tree and a bunch of triples consisting of numbers <code>A</code>, <code>B</code>, and <code>C</code>, for each triple return <code>true</code> if the squirrel will run through node <code>C</code> on its path from <code>A</code> to <code>B</code>, and <code>false</code> otherwise.</p>
        
            <p>It is guaranteed that each node has no more than 5 branches.</p>
        
            <h3>Example</h3>
            <p>For</p>
            <pre><code>tree = 
            [1, 2, 
             1, 3, 
             2, 4, 
             3, 5, 
             3, 6]</code></pre>
            <p>and</p>
            <pre><code>triples = 
            [[4, 6, 3], 
             [1, 4, 2], 
             [5, 6, 1]]</code></pre>
            <p>the output should be:</p>
            <code>solution(tree, triples) = [true, true, false]</code>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>tree</code></p>
                    <p>An array of integers of even length, where a pair <code>(tree[i], tree[i + 1])</code> for every even <code>i</code> corresponds to the branch in a tree that goes from node <code>tree[i]</code> to node <code>tree[i + 1]</code>, both 1-based.</p>
                    <p>Guaranteed constraints: <code>tree.length = 2 · (max(tree) - 1)</code>, <code>1 ≤ tree[i] ≤ 10,000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>triples</code></p>
                    <p>Triples of three integers in the format <code>[A, B, C]</code>, where <code>A</code> stands for the initial squirrel position, <code>B</code> stands for its destination, and <code>C</code> stands for the node at which the perfect picture can be taken, all 1-based.</p>
                    <p>Guaranteed constraints: <code>1 ≤ triples.length ≤ 10,000</code>, <code>triples[i].length = 3</code>, <code>1 ≤ triples[i][j] ≤ n</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.boolean</p>
                    <p>Array of the same length as <code>triples</code>, where the <code>i</code>th element is <code>true</code> if and only if it will be possible to take a perfect picture in the situation corresponding to the <code>i</code>th triple.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 26,
        "challenge_name": 'Digit Jumping',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>Facing his first challenge, Ratiorg is placed at the start position of a rectangular grid filled with digits from 0 to 9. With each move, Ratiorg can either jump to the adjacent cell (the one above, below, to the left or to the right of his current position), or teleport to any cell that has number <code>x</code> written on it, where <code>x</code> is the number written on the cell Ratiorg is currently standing on. Ratiorg will be able to move on to the next challenge if he manages to get to the finish cell in the minimum possible number of moves.</p>
            
            <p>Although the little bot is sure that he can handle the challenge, you don't want to leave him alone! Back Ratiorg up by implementing a function that given the grid, start and finish, will calculate the minimum number of moves required to get from start to finish.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>grid = 
            [[0, 1, 4, 2, 3], 
             [1, 4, 2, 8, 2], 
             [2, 2, 3, 4, 9], 
             [8, 7, 2, 2, 3]]</code></pre>
            <p><code>start = [0, 0]</code>, and <code>finish = [3, 4]</code>, the output should be:</p>
            <pre><code>solution(grid, start, finish) = 4</code></pre>
            
            <p>Here's one of the shortest paths Ratiorg can take:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>grid</code></p>
                    <p>A rectangular grid filled with digits in range [0...9].</p>
                    <p>Guaranteed constraints: <code>1 ≤ grid.length ≤ 300</code>, <code>1 ≤ grid[0].length ≤ 300</code>, <code>0 ≤ grid[i][j] ≤ 9</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>start</code></p>
                    <p>Ratiorg's initial position as an array of two elements, where the first element is row index, and the second one is column index.</p>
                    <p>Guaranteed constraints: <code>start.length = 2</code>, <code>0 ≤ start[0] < grid.length</code>, <code>0 ≤ start[1] < grid[0].length</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>finish</code></p>
                    <p>Ratiorg's destination in the same format as start.</p>
                    <p>Guaranteed constraints: <code>finish.length = 2</code>, <code>0 ≤ finish[0] < grid.length</code>, <code>0 ≤ finish[1] < grid[0].length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum number of moves required to get from start to finish.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 27,
        "challenge_name": 'Painter Bot',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>Ratiorg aced the very first challenge, and is ready to begin the second. The little bot is given a canvas, each pixel of which has some color. Ratiorg should apply several flood fill operations to the canvas, and show the resulting image to the judges. Each flood fill operation is given as an array of three elements [x, y, color], where (x, y) is the coordinates of the pixel to which the operation is applied, and color is the color with which the pixel and its area should be painted. The area that should be painted along with the initial pixel is defined as follows:</p>
            
            <p>Initially, only the pixel to which the operation was applied should be painted. Consider all pixels that are adjacent to the initial one (i.e. directly above, below, to the left or to the right of it). If the difference between the color of this pixel and the color of the initial one is not greater than <code>d</code>, this pixel should also be painted. For each pixel painted on this step consider all its neighbors in the same manner.</p>
            
            <p>Your task is to help the judges check Ratiorg's performance. Given canvas, operations and the value of <code>d</code>, return the state of the image after all operations have been applied.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>canvas = 
            [[0, 1, 5, 2, 4, 2, 6], 
             [5, 2, 4, 6, 2, 0, 0], 
             [3, 3, 3, 7, 8, 3, 2], 
             [2, 1, 1, 0, 0, 0, 0]]</code></pre>
            <p><code>operations = [[0, 0, 10], [1, 3, 3]]</code>, and <code>d = 3</code>, the output should be:</p>
            <pre><code>solution(canvas, operations, d) = 
            [[10, 10,  3,  2,  4, 10, 6], 
             [ 5, 10,  3,  3, 10, 10, 10], 
             [10, 10, 10,  3,  3, 10, 10], 
             [10, 10, 10, 10, 10, 10, 10]]</code></pre>
            <p>Here's how the canvas should be painted:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 7 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>canvas</code></p>
                    <p>A rectangular matrix representing the canvas.</p>
                    <p>Guaranteed constraints: <code>1 ≤ canvas.length ≤ 100</code>, <code>1 ≤ canvas[0].length ≤ 100</code>, <code>0 ≤ canvas[i][j] ≤ 255</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>operations</code></p>
                    <p>Operations to be performed. Each operation is given in the format <code>[x, y, color]</code>, where (x, y) is the coordinates of the initial pixel (0-based indices of row and column, respectively) and color is the fill color.</p>
                    <p>Guaranteed constraints: <code>0 ≤ operations.length ≤ 100</code>, <code>operations[i].length = 3</code>, <code>0 ≤ operations[i][0] < canvas.length</code>, <code>0 ≤ operations[i][1] < canvas[0].length</code>, <code>0 ≤ operations[i][2] ≤ 255</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>d</code></p>
                    <p>The value that defines the flood fill area.</p>
                    <p>Guaranteed constraints: <code>0 ≤ d ≤ 255</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>The final state of the canvas.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 28,
        "challenge_name": 'Horsebot',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>The little bot has already successfully completed several challenges. Now he is facing a challenge in which he has to prove that he knows how to ride a horse and plan battles. Ratiorg is sitting on his digital horse in the top left corner of an <code>n × m</code> board. The horse can only make moves similar to those of a knight chess piece. Prior to any action, Ratiorg should define values <code>a</code> and <code>b</code> (<code>0 < a ≤ b</code>), which will specify the horse's moves: each move the horse will change one of its coordinates by <code>a</code>, and the other one by <code>b</code>.</p>
            
            <p>Ratiorg needs to define such a and b that will let him end up in the bottom right corner. How many ways are there to do this?</p>
            
            <h3>Example</h3>
            <p>For <code>n = 3</code> and <code>m = 3</code>, the output should be:</p>
            <pre><code>solution(n, m) = 3</code></pre>
            <p>Ratiorg can define three pairs: <code>(1, 1)</code>, <code>(1, 2)</code>, and <code>(2, 2)</code>. Here's how he can travel to the bottom right corner in each case:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The height of the field.</p>
                    <p>Guaranteed constraints: <code>2 ≤ n ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>m</code></p>
                    <p>The width of the field.</p>
                    <p>Guaranteed constraints: <code>2 ≤ m ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of pairs <code>(a, b)</code> Ratiorg can define to get to the bottom right corner.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 29,
        "challenge_name": 'Sabotage',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>It's been several weeks, and Ratiorg is getting strong enough that he's making some enemies. They're starting to feel threatened, which is why they sabotaged his next challenge. Here's how they did it:</p>
            
            <p>Ratiorg is about to be locked up in one of multiple rooms in a rectangular hangar. The rooms are securely locked: it is possible to leave a room only in one direction specific to this room. The problem is, the villains have messed the system up, so now there is no way to finish the challenge from certain rooms. The challenge will be over if Ratiorg successfully leaves the hangar (i.e. leaves the rectangle that represents it).</p>
            
            <p>To figure out the odds of Ratiorg's success, you'd like to calculate the number of rooms, starting from which Ratiorg won't be able to finish the challenge. Implement a function that will return this number.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>hangar = 
            [['U', 'L'],
             ['R', 'L']]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(hangar) = 2</code></pre>
            <p>Ratiorg won't be able to get out of the hangar if he starts from either of the bottom rooms.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>hangar</code></p>
                    <p>A non-empty rectangular matrix. The possible values of <code>hangar[i]</code> are:</p>
                    <ul>
                        <li><code>'L'</code> if it's possible to move to the left;</li>
                        <li><code>'R'</code> if it's possible to move to the right;</li>
                        <li><code>'U'</code> if it's possible to move up;</li>
                        <li><code>'D'</code> if it's possible to move down.</li>
                    </ul>
                    <p>Guaranteed constraints: <code>1 ≤ hangar.length ≤ 150</code>, <code>1 ≤ hangar[0].length ≤ 150</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of rooms from which it's impossible to finish the challenge.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 30,
        "challenge_name": 'Electric Field',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>It's been several weeks, and Ratiorg already feels how much stronger he has become. However, Ratiorg is about to face his first really exciting challenge: the Electric Field. It works like this: the bot stays in the top left corner of a rectangular grid. In one move he can walk to one of the nearest cells (directly above, below, to the left or to the right of his current position). Ratiorg's goal is to get to the bottom right corner in the least possible number of moves. However, it's not as simple as it seems: there are electric wires running through the grid. If Ratiorg steps on a wire, his microchips will be burnt to a crisp, so Ratiorg, prudent bot that he is, wants to do his best to avoid them.</p>
            
            <p>You want to give Ratiorg a hint by telling him the least possible number of moves required to get to the destination. Given the grid and the wires, return the minimum number of moves required to get to the bottom right corner from the top left corner. If it's not possible to get there, return -1 instead.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>grid = [4, 8]</code></pre>
            <p>and</p>
            <pre><code>wires = 
            [[1, 0, 1, 3], [3, 1, 3, 2], [4, 1, 4, 3], [4, 2, 4, 4],
             [1, 3, 3, 3], [2, 1, 7, 1], [2, 2, 7, 2], [5, 3, 8, 3]]</code></pre>
            <p>the output should be:</p>
            <pre><code>solution(grid, wires) = 26</code></pre>
            <p>Check out the image below for better understanding. The wires are colored red, and the path Ratiorg should take is colored green.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>grid</code></p>
                    <p>Array of two elements, where the first element is the height and the second element is the width of the field.</p>
                    <p>Guaranteed constraints: <code>grid.length = 2</code>, <code>1 ≤ grid[i] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wires</code></p>
                    <p>Array of electric wires located on the grid. Each wire is given in the format <code>[x1, y1, x2, y2]</code>, where <code>(x1, y1)</code> is the position of the first endpoint and <code>(x2, y2)</code> is the position of the second endpoint. x represents the x coordinate on the axis that runs along the width of the grid, and y represents the y coordinate on the axis that runs along the height of the grid.</p>
                    <p>It is guaranteed that for each i either <code>wires[i][0] = wires[i][2]</code> or <code>wires[i][1] = wires[i][3]</code>, but not simultaneously. The wires can intersect and overlap.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wires.length ≤ 100</code>, <code>wires[i].length = 4</code>, <code>0 ≤ wires[0], wires[2] ≤ grid[1].length</code>, <code>0 ≤ wires[1], wires[3] ≤ grid[0].length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum number of moves required to get from the top left to the bottom right corner of the grid without stepping on the wires, or <code>-1</code> if it's impossible to get there.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 31,
        "challenge_name": 'Mobius Conquer',
        "description": `
            <p>Little Ratiorg was tired of being bullied by other bots and mighty CodeFighters, so he joined the Ninja Bots Training camp. Any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg wants.</p>
            
            <p>It's been several weeks, and Ratiorg is starting to boast about his newly obtained skills, which infuriates one of his fellow trainees. The angry bot decided to challenge Ratiorg to a Mobius Conquer battle to find out who's the strongest once and for all.</p>
            
            <p>In the Mobius Conquer battle the players fight for positions on a Möbius strip, created from a rectangular field by giving it a half-twist, and then joining the ends of the strip along its height to form a loop. Both sides of the field are divided into cells, some of which are marked as impassable (note that player positions are not considered impassable). A player is said to control a cell if the cell is closer to him in terms of shortest paths on the strip.</p>
            
            <p>The Mobius Conquer battle is almost over: Ratiorg and his enemy have both reached their final positions. The only thing to do now is to determine the winner. Given the coordinates of both players, coordinates of the impassable cells, and the size of the field, calculate the number of cells controlled by each player.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>field = [4, 3]</code></pre>
            <p>Ratiorg's position as</p>
            <pre><code>ratiorg = [0, 0, 0]</code></pre>
            <p>Enemy's position as</p>
            <pre><code>enemy = [1, 3, 2]</code></pre>
            <p>And</p>
            <pre><code>impassableCells = 
            [[0, 0, 1], [0, 1, 1], [0, 2, 1], [0, 2, 2],
             [1, 1, 0], [1, 2, 1], [1, 3, 0]]</code></pre>
            <p>The output should be:</p>
            <pre><code>solution(field, ratiorg, enemy, impassableCells) = [7, 6]</code></pre>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>field</code></p>
                    <p>Array of two integers, the size of the field. The first element is its height, and the second element is its width.</p>
                    <p>Guaranteed constraints: <code>field.length = 2</code>, <code>1 ≤ field[i] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>ratiorg</code></p>
                    <p>Ratiorg's position as an array of three integers. The first integer defines the side of the field (either 0 or 1), the second one defines the row, and the last one defines the column (both 0-based).</p>
                    <p>Note, that the row and the column of the second side of the field is defined assuming that the first side of the field was flipped vertically.</p>
                    <p>Guaranteed constraints: <code>ratiorg.length = 3</code>, <code>0 ≤ ratiorg[0] ≤ 1</code>, <code>0 ≤ ratiorg[1] < field[0]</code>, <code>0 ≤ ratiorg[2] < field[1]</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>enemy</code></p>
                    <p>The enemy's position in the same format as ratiorg.</p>
                    <p>Guaranteed constraints: <code>enemy.length = 3</code>, <code>0 ≤ enemy[0] ≤ 1</code>, <code>0 ≤ enemy[1] < field[0]</code>, <code>0 ≤ enemy[2] < field[1]</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>impassableCells</code></p>
                    <p>Array of impassable cells, where each cell is given in the same format as ratiorg and enemy. It is guaranteed that all impassable cells are unique, and that no impassable cell coincides with ratiorg or enemy.</p>
                    <p>Guaranteed constraints: <code>0 ≤ impassableCells.length < 2 · field[0] · field[1]</code>, <code>impassableCells[i].length = 3</code>, <code>0 ≤ impassableCells[0], impassableCells[2] ≤ field[1].length</code>, <code>0 ≤ impassableCells[1], impassableCells[3] ≤ field[0].length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array of two integers, where the first integer is the number of cells controlled by Ratiorg, and the second is the number of cells controlled by his enemy.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 32,
        "challenge_name": "Cuboid Planet",
        "description": `
            <p>Little Ratiorg was so tired of being bullied by other bots and mighty CodeFighters that he decided to join the Ninja Bots Training camp. It is known that any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg is aiming at.</p>
            
            <p>Ratiorg has become so cool that the authorities decided to send him on a special mission to the remote cuboid planet of size <code>a × b × c</code>, not yet inhabited by bots. In order to prepare for the mission, Ratiorg has to understand the properties of the planet by training on its net here, on Earth. Here's how the planet and the net on which the bot is going to prepare for the mission look like:</p>
            
            <p>The net is divided into 6 areas, with each area representing one of the planet's surfaces. Each of the areas is divided into a grid with cells of size <code>1 × 1</code>, with some of the cells being impassable. The coordinates of each cell can be represented in the format <code>(area, row, column)</code>, where <code>area</code> stands for the area number shown in the net image above, and <code>(row, column)</code> stands for 0-based cell's position in this area. It is possible to move between two cells if they share a common side.</p>
            
            <p>Ratiorg would like to understand how close the net he's going to train on is to the conditions of the planet. In order to do this, he would like to calculate the difference between the numbers of pairs of cells that are reachable from one another on a cuboid and the number of pairs of cells that are reachable from one another on a net (note that only pairs of different cells should be counted, and the order of cells in a pair doesn't matter, i.e. <code>(a, b)</code> is the same pair as <code>(b, a)</code>).</p>
            
            <p>Given the dimensions of the cuboid and the <code>impassableCells</code>, calculate the value Ratiorg is interested in.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>cuboid = [1, 2, 3]</code></pre>
            <p>and</p>
            <pre><code>impassableCells = [[1, 0, 0], [3, 0, 1], [3, 2, 0], [4, 0, 1], [5, 1, 0]]</code></pre>
            <p>The output should be</p>
            <pre><code>solution(cuboid, impassableCells) = 106</code></pre>
            
            <p>On a cuboid, all cells but the impassable ones are reachable from one another, so the total number of reachable pairs equals <code>17 * 16 / 2 = 136</code>.</p>
            
            <p>Here's how the net of this cuboid looks like:</p>
            
            <p>There are four areas in which all cells are connected. Thus, the number of pairs of cells that are reachable from one another is <code>3 * 2 / 2 + 4 * 3 / 2 + 4 * 3 / 2 + 6 * 5 / 2 = 30</code>.</p>
            
            <p>Thus, the answer is <code>136 - 30 = 106</code>.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>cuboid</code></p>
                    <p>Array of three elements, the size of the cuboid in the format <code>[a, b, c]</code>.</p>
                    <p>Guaranteed constraints: <code>cuboid.length = 3</code>, <code>1 ≤ cuboid[i] ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>impassableCells</code></p>
                    <p>Array of impassable cells, where each cell is given as an array of three elements in the format described above.</p>
                    <p>It is guaranteed that no cell is given twice, and that each cell is valid (i.e. its coordinates belong to one of the cells of the grid).</p>
                    <p>Guaranteed constraints: <code>0 ≤ impassableCells.length ≤ 2 · (ab + ac + bc)</code>, <code>impassableCells[i].length = 3</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The difference between the pairs of cells reachable from one another on the cuboid and on the net.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 33,
        "challenge_name": 'Tankbot',
        "description": `
            <p>Little Ratiorg was so tired of being bullied by other bots and mighty CodeFighters that he decided to join the Ninja Bots Training camp. It is known that any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg is aiming at.</p>
            
            <p>His training is now officially over, and Ratiorg is ready to get back to CodeSignal and show who's the boss. To make his appearance more imposing, Ratiorg is planning to take a tank and drive it back home. However, the bot will have to travel through the forest covered in trees so strong that they can hold back even a tank, so not every tank can make it through this forest.</p>
            
            <p>Since Ratiorg finished the trainings as the best student, he can pick any tank he likes. There are a lot of tanks of all possible sizes. All available tanks are square, can only move in one of the four directions (leftwards, rightwards, downwards, or upwards), and can't move over the trees.</p>
            
            <p>The Ninja Bots Training camp is located at the top left corner of the forest, and CodeFigths bots camp is located at its bottom right corner. Given the map of the forest, find the maximum size of the tank Ratiorg can take in order to get from the training camp to the CodeFigths bot camp.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>forest = 
            [[true, true, true, true],
             [true, true, false, true],
             [true, true, true, true],
             [true, true, true, true]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(forest) = 2</code></pre>
            
            <p>For</p>
            <pre><code>forest = 
            [[false, true, true],
             [true, true, true]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(forest) = 0</code></pre>
            
            <p>There is a tree right at the entrance of the Training Camp, so there's no way to get out of there by tank.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.boolean <code>forest</code></p>
                    <p>A rectangular matrix of booleans which represents a grid of the forest. <code>true</code> represents a free cell, and <code>false</code> represents a cell with a tree on it.</p>
                    <p>Guaranteed constraints: <code>2 ≤ forest.length ≤ 120</code>, <code>2 ≤ forest[0].length ≤ 120</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The maximum length of the tank Ratiorg can take. If there is no way to get home by tank, return 0 instead.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 64,
        "order_index": 34,
        "challenge_name": 'Portals',
        "description": `
            <p>Little Ratiorg was so tired of being bullied by other bots and mighty CodeFighters that he decided to join the Ninja Bots Training camp. It is known that any bot that manages to solve all the challenges becomes an ultimate master of algorithms, and that is exactly what Ratiorg is aiming at.</p>
            
            <p>Ratiorg has already improved his physical strength considerably, and now it's time to hone his mental skills. As it turned out, the bot has what it takes to be a great magician: he has what appears to be an infinite source of mana somewhere inside his little mechanical body. In the next challenge, Ratiorg will have to use it. The bot is standing in the top left corner of the rectangular grid, some cells of which are impassable. His goal is to make it to the bottom right corner in no more than <code>maxTime</code> seconds.</p>
            
            <p>Ratiorg can move between two passable cells if they share a common side, and each move takes 1 second. He can also set an arbitrary number of portals into passable cells; moreover, he can even set them remotely and instantly, i.e. there's no need to reach the cell to set a portal there, and setting a portal takes no time. Ratiorg can instantly move between any pair of cells with portals. However, setting a portal to the cell at (x, y) costs <code>manacost[x][y]</code> mana points.</p>
            
            <p>Given the <code>maxTime</code> and the <code>manacost</code> matrix, calculate the minimum amount of mana Ratiorg will have to use to finish the challenge in time.</p>
            
            <h3>Example</h3>
            <p>For</p>
            <pre><code>maxTime = 4</code></pre>
            <p>and</p>
            <pre><code>manacost = 
            [[1, -1, -1],
             [5, -1, -1],
             [4,  6,  8]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(maxTime, manacost) = 0</code></pre>
            <p>The cheapest way to get to the bottom right corner takes 4 seconds and doesn't require any portals.</p>
            
            <p>For</p>
            <pre><code>maxTime = 3</code></pre>
            <p>and</p>
            <pre><code>manacost = 
            [[1, -1, -1],
             [5, -1, -1],
             [4,  6,  8]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(maxTime, manacost) = 5</code></pre>
            <p>The best plan is to set portals into the top left and the bottom left corners (the total manacost equals 1 + 4 = 5). After that, you can reach the bottom left corner instantly and then make two moves rightwards in 2 seconds.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>maxTime</code></p>
                    <p>A non-negative integer, the maximum number of seconds you can spend to get to the bottom right corner.</p>
                    <p>Guaranteed constraints: <code>0 ≤ maxTime ≤ 200</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>manacost</code></p>
                    <p>A rectangular matrix. If <code>manacost[x][y] > 0</code>, then the cell (x, y) is passable and it costs <code>manacost[x][y]</code> mana points to set a portal into it. Otherwise, <code>manacost[x][y] = -1</code>, and the cell (x, y) is impassable.</p>
                    <p>It is guaranteed that both the top left corner (<code>manacost[0][0]</code>) and the bottom right corner (<code>manacost[manacost.length - 1][manacost[0].length - 1]</code>) are passable.</p>
                    <p>Guaranteed constraints: <code>1 ≤ manacost.length ≤ 300</code>, <code>1 ≤ manacost[0].length ≤ 300</code>, <code>-1 ≤ manacost[i][j] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum number of mana points required to get to the bottom right corner.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 35,
        "challenge_name": 'Orinteering Beginner',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
            
            <p>To test your skills, the coach asked you to enter the beginners' competition. In this race your objective is to reach the finish from the start by the shortest path. You were given a map that shows <code>n</code> different locations (including start and finish) connected by roads of different lengths. You are only allowed to traverse roads in one direction (i.e. all roads are one-way), but since this is a competition for beginners the organizers chose such an orientation of the roads that if you constantly move along roads, you'll eventually reach the finish and if you leave some location you will never return there.</p>
            
            <p>Given the number of locations <code>n</code> and the roads between them, find the length of the shortest path between the start (location with number 0) and the finish (location with number <code>n - 1</code>).</p>
            
            <h3>Example</h3>
            <p>For <code>n = 6</code> and</p>
            <pre><code>roads = 
            [[[1, 3]],
             [[4, 1], [3, 2]],
             [[1, 0]],
             [[5, 3]],
             [[5, 5]],
             []]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, roads) = 8</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 105</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.array.integer <code>roads</code></p>
                    <p>An array representing roads between locations as an adjacency list. <code>roads[i][j] = [k, l]</code> means that there is a road between location <code>i</code> and location <code>k</code> of length <code>l</code>.</p>
                    <p>Guaranteed constraints: <code>roads.length == n</code>, <code>0 ≤ roads[i].length ≤ n - 1</code>, <code>roads[i][j].length = 2</code>, <code>0 ≤ roads[i][j][0] < n</code>, <code>0 ≤ roads[i][j][1] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The length of the shortest path between the start (location 0) and the finish (location <code>n - 1</code>).</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 36,
        "challenge_name": 'Orienteering Game',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
    
            <p>You've just came home from one particularly exhausting competition and decided to relax by playing a board game which all qualified participants (including you, of course) got as a reward. In this game your objective is to navigate your way on the board from the start located in the upper-left corner to the finish located in the bottom-right corner in as little time as possible.</p>
    
            <p>The game board is a rectangle divided into equal cells. Each cell contains a number denoting the time you should wait in this cell before advancing to the next one. From each cell you can move only to the neighboring one, i.e. the one directly below, above, to the left, or to the right of your current position.</p>
    
            <p>Given the game board, find the minimum time required to reach the finish from the start.</p>
    
            <h3>Example</h3>
            <p>For</p>
            <pre><code>board = 
            [[42, 51, 22, 10,  0],
             [2,  50, 7,  6,   15],
             [4,  36, 8,  30,  20],
             [0,  40, 10, 100, 1]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(board) = 140</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>board</code></p>
                    <p>The game board of size n × m. The start is located at <code>board[0][0]</code> and the finish is at <code>board[n - 1][m - 1]</code>.</p>
                    <p>Guaranteed constraints: <code>1 ≤ board.length ≤ 250</code>, <code>1 ≤ board[i].length ≤ 250</code>, <code>0 ≤ board[i][j] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum time required to reach the finish from the start.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 37,
        "challenge_name": 'Time Constrained Orienteering',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions. You liked participation so much that you decided to organize your very own competition, and an unusual one.</p>
    
            <p>In this race, the participants should find such a path from start to finish that they will spend no more than <code>T</code> minutes on each road. When a participant leaves a location, the time on their stopwatch is set to <code>T</code>, and the countdown begins. If they can't make it to the next location in <code>T</code> seconds, they lose the race.</p>
    
            <p>You have already picked a location for the start, but not yet settled for the finish. To decide which location to choose, for each of the <code>n</code> locations you'd like to calculate the minimum value of <code>T</code> that makes it possible to complete the race from start to this location.</p>
    
            <p>Given the start location, the number of locations <code>n</code> and the roads connecting them, return the number of different minimum possible value of <code>T</code> for every finish location.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 5</code>, <code>start = 3</code>, and</p>
            <pre><code>roads = 
            [[1, 2, 3],
             [2, 3, 1],
             [2, 4, 2],
             [3, 5, 4],
             [4, 5, 3]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, start, roads) = 4</code></pre>
    
            <p>The minimum possible values of <code>T</code> for locations from 1 to <code>n</code> are 3, 1, 0, 2, and 3 respectively, 4 distinct values in total.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>2 ≤ n ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>start</code></p>
                    <p>The location you picked as the start of the race.</p>
                    <p>Guaranteed constraints: <code>1 ≤ start ≤ n</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>A two-dimensional array representing the roads. Each road is given in the format <code>[loc1, loc2, t]</code>, which means that it takes <code>t</code> minutes to reach <code>loc2</code> from <code>loc1</code> (both given 1-based).</p>
                    <p>It is guaranteed that every two locations are connected by roads.</p>
                    <p>Guaranteed constraints: <code>1 ≤ roads.length ≤ 5 · 10^4</code>, <code>roads[i].length = 3</code>, <code>1 ≤ roads[i][0], roads[i][1] ≤ n</code>, <code>0 ≤ roads[i][2] ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of different possible values of <code>T</code> for the races that start at the start and end at the finish for every finish location from 1 to <code>n</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 38,
        "challenge_name": 'Time Constrained Orienteering 2',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions. You liked participation so much that you decided to organize your very own competition, and an unusual one.</p>
    
            <p>In this race, the participants should find such a path from start to finish that they will spend no more than <code>T</code> minutes on each road. When a participant leaves a location, the time on their stopwatch is set to <code>T</code>, and the countdown begins. If they can't make it to the next location in <code>T</code> seconds, they lose the race.</p>
    
            <p>You haven't yet chosen locations for the start and the finish. To decide which locations to choose, for each ordered pair of locations <code>(a, b)</code>, you'd like to calculate the minimum value of <code>T</code> that makes it possible to complete the race from start at <code>a</code> to finish at <code>b</code>.</p>
    
            <p>Given the number of locations <code>n</code> and the one-way roads connecting them, for every start and every finish location, return the minimum possible value of <code>T</code>.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 3</code> and</p>
            <pre><code>roads = 
            [[0, 1, 100000],
             [5, 0, 2],
             [4, -1, 0]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, roads) = 
            [[0, 1, 2],
             [4, 0, 2],
             [4, 4, 0]]</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>2 ≤ n ≤ 120</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>roads</code></p>
                    <p>A two-dimensional array representing the roads as an adjacency matrix. Each element <code>roads[i][j]</code> is either a non-negative integer (that means there is a road from location <code>i</code> to location <code>j</code> and it takes <code>roads[i][j]</code> minutes to traverse it), or <code>-1</code> if there is no road in that direction.</p>
                    <p>Guaranteed constraints: <code>roads.length = n</code>, <code>roads[i].length = n</code>, <code>-1 ≤ roads[i][j] ≤ 10^5</code>, <code>roads[i][i] = 0</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>A square matrix of length <code>n</code>, where the element at the <code>i</code>th row and the <code>j</code>th column is the minimum possible value of <code>T</code> for the race that starts at the <code>i</code>th location and ends at the <code>j</code>th location. If there is no such <code>T</code>, it should be equal to <code>-1</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 39,
        "challenge_name": 'Possible Locations',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
    
            <p>One day your club announced that it was going to organize its own orienteering competition and you decided to help. This competition will be held in a place consisting of <code>n</code> different locations (numbered from <code>0</code> to <code>n - 1</code>) connected by one-way roads. Furthermore, each road will have a number of points assigned to it: each time a participant traverses a road, this number will be added to his score. The participant who finishes with the least number of points wins. Note, that the participant can choose to continue his path to improve his score even if he reached the finish.</p>
    
            <p>The organizers of the event asked you to find all possible pairs of (start, finish) locations, such that for any participant it would be impossible to gain infinitely small score.</p>
    
            <p>Given the number of locations <code>n</code> and roads between them with their respective points, return an array of arrays of two elements <code>[i, j]</code> such that <code>i ≠ j</code> and location <code>j</code> is reachable from <code>i</code> but it is impossible to gain infinitely small score moving along any path between them.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 7</code> and</p>
            <pre><code>roads = [
             [[1, 100]],
             [[0, -10], [2, -100]],
             [[0, 0]],
             [[0, 3], [4, 0]],
             [[5, 1]],
             [[3, -2]],
             [[0, -50]]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, roads) = [
             [0, 1], [0, 2], 
             [1, 0], [1, 2], 
             [2, 0], [2, 1], 
             [6, 0], [6, 1], [6, 2]]</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.array.integer <code>roads</code></p>
                    <p>Array representing roads between locations as an adjacency list. <code>roads[i][j] = [k, p]</code> means that there is a road from location <code>i</code> to location <code>k</code> that gives <code>p</code> points.</p>
                    <p>Guaranteed constraints: <code>roads.length = n</code>, <code>1 ≤ roads[i].length < n</code>, <code>roads[i][j].length = 2</code>, <code>0 ≤ roads[i][j][0] < n</code>, <code>-1000 ≤ roads[i][j][1] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.array.integer</p>
                    <p>An array of arrays representing pairs of location numbers <code>[i, j]</code> such that <code>i ≠ j</code> and location <code>j</code> is reachable from <code>i</code> but it is impossible to gain infinitely small score moving along any path between them.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 40,
        "challenge_name": 'Maximize Score',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
    
            <p>One day your club announced that it was going to organize its own orienteering competition and you decided to help. This competition will be held in a place consisting of <code>n</code> different locations (numbered from <code>0</code> to <code>n - 1</code>) connected by one-way roads. Furthermore, each road will have a number of points assigned to it: each time a participant traverses a road, this number will be added to his score. The participant who finishes with the least number of points wins. Note that the participant can choose to continue his path to improve his score even if he reached the finish.</p>
    
            <p>The organizers of the event have already chosen where the competition will be held. The place is quite remarkable: whatever pair of locations (start, finish) is chosen, it will be impossible for any participant to gain infinitely small score. Now your task is to find the pair of locations (start, finish) with the maximum possible winning score.</p>
    
            <p>Given the number of locations <code>n</code> and roads between them with their respective points, return an array of two elements <code>[start, finish]</code> such that the winning score in the competition with start in location <code>start</code> and finish in location <code>finish</code> is the highest among all other competitions with different start and finish locations. If there are several possible pairs, return the lexicographically smallest one.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 7</code> and</p>
            <pre><code>roads = [
             [[1, 100]],
             [[2, -100]],
             [[0, 0]],
             [[0, 3], [4, 0]],
             [[5, 1]],
             [[3, 2]],
             [[0, -100]]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, roads) = [1, 0]</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>7 ≤ n ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.array.integer <code>roads</code></p>
                    <p>Array representing the roads between the locations as an adjacency list. <code>roads[i][j] = [k, p]</code> means that there is a road from location <code>i</code> to location <code>k</code> that gives <code>p</code> points.</p>
                    <p>Guaranteed constraints: <code>roads.length == n</code>, <code>0 ≤ roads[i].length < 30</code>, <code>sum(roads[i].length) < 10 · n</code>, <code>roads[i][j].length == 2</code>, <code>0 ≤ roads[i][j][0] < n</code>, <code>-1000 ≤ roads[i][j][1] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>An array <code>[start, finish]</code> such that the winning score in competition with start in location <code>start</code> and finish in location <code>finish</code> is the highest among all other competitions with different start and finish locations. If there are several possible pairs, return the lexicographically smallest one.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 41,
        "challenge_name": 'Escape The Nightmare',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
    
            <p>For the past few days, you haven't been able to get a good sleep because of one particular nightmare. In this nightmare, you find yourself on a right star pyramid at coordinates <code>start</code>, and the only way to escape is to reach the finish in the shortest possible time (i.e., by the shortest path) moving along the edges of the pyramid. Tired of restless nights, you decided to put an end to it.</p>
    
            <p>Given the coordinates of <code>start</code> and <code>finish</code> located on the edges of a right star pyramid, the pyramid's height <code>h</code> and the distance <code>d</code> between the center of the star at the pyramid's base and its vertices, find the length of the shortest path from <code>start</code> to <code>finish</code> along the edges of the pyramid.</p>
    
            <p>The base of the pyramid is a regular octagram centered at <code>(0, 0, 0)</code> with two vertices on the x-axis and two vertices on the y-axis. The pyramid's apex is directly above <code>(0, 0, 0)</code> at height <code>h</code>. Each pyramid's edge either belongs to the base or connects the pyramid's apex with the base. It's guaranteed that both <code>start</code> and <code>finish</code> belong to the pyramid's edges.</p>
    
            <p>Here is how the given pyramid looks:</p>
    
            <h3>Example</h3>
    
            <p>For <code>h = 4</code>, <code>d = 2</code>, <code>start = [-1, 0, 2]</code>, and <code>finish = [2, 0, 0]</code>, the output should be</p>
            <pre><code>solution(h, d, start, finish) = 6.7082039325</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>h</code></p>
                    <p>The height of the right star pyramid.</p>
                    <p>Guaranteed constraints: <code>1 ≤ h ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>d</code></p>
                    <p>The distance between <code>(0, 0, 0)</code> and the star vertices.</p>
                    <p>Guaranteed constraints: <code>1 ≤ d ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>start</code></p>
                    <p>Three-dimensional coordinates of the starting point given in the format <code>[x, y, z]</code>.</p>
                    <p>Guaranteed constraints: <code>start.length = 3</code>, <code>-max(d, h) ≤ start[i] ≤ max(d, h)</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>finish</code></p>
                    <p>Three-dimensional coordinates of the finishing point given in the format <code>[x, y, z]</code>.</p>
                    <p>Guaranteed constraints: <code>finish.length = 3</code>, <code>-max(d, h) ≤ finish[i] ≤ max(d, h)</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> float</p>
                    <p>The length of the shortest path between <code>start</code> and <code>finish</code> along the pyramid's edges. The answer is considered correct if its absolute error doesn't exceed <code>10<sup>-5</sup></code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 65,
        "order_index": 42,
        "challenge_name": 'Training Route',
        "description": `
            <p>Not long ago you saw an orienteering competition on TV and immediately wanted to try it yourself. You've joined an orienteering club and started preparing for the upcoming competitions.</p>
    
            <p>One of the most important components of an orienteering competition is running. In order to train this skill, you decided to practice on your club's special training field that consists of <code>n</code> locations numbered from <code>0</code> to <code>n - 1</code>, with some of them connected by two-way roads of different lengths. There are <code>n</code> roads in total, and any location is reachable from another one by the roads (possibly more than one). Your coach has composed a training route for you that consists of several locations that you should visit in the exact given order. Note that you may be required to visit some locations several times on your training route.</p>
    
            <p>Given the number of locations <code>n</code>, roads between them, and the training route, find the minimum possible total length of this route.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 6</code> and</p>
            <pre><code>roads = [
             [[1, 50], [3, 10], [5, 4]],
             [[0, 50], [2, 15], [3, 5]], 
             [[1, 15], [4, 55]], 
             [[0, 10], [1, 5]],
             [[2, 55]], 
             [[0, 4]]]</code></pre>
            <p>and <code>route = [5, 1, 0, 2]</code>, the output should be</p>
            <pre><code>solution(n, roads, route) = 64</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of locations.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 3000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.array.integer <code>roads</code></p>
                    <p>Array representing the roads between the locations as an adjacency list. <code>roads[i][j] = [k, l]</code> means that there is a road between location <code>i</code> and location <code>k</code> of length <code>l</code>.</p>
                    <p>Guaranteed constraints: <code>roads.length == n</code>, <code>0 ≤ roads[i].length ≤ n - 1</code>, <code>roads[i][j].length == 2</code>, <code>0 ≤ roads[i][j][0] < n</code>, <code>0 ≤ roads[i][j][1] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>route</code></p>
                    <p>An array of integers representing the order in which you should visit locations on your training route.</p>
                    <p>Guaranteed constraints: <code>2 ≤ route.length ≤ 104</code>, <code>route[i] ≠ route[i + 1]</code>, <code>0 ≤ route[i] ≤ n - 1</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum possible total length of the training route.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 43,
        "challenge_name": 'Corridors Repairing',
        "description": `
            <p>You're working in a company that specializes in optimizing various things. There are <code>n</code> rooms in your office connected by <code>n</code> corridors of different lengths. Your boss has informed you that the company will repair all the corridors one by one, and you need to choose one of the corridors to be closed for repairs first.</p>
    
            <p>As an optimization enthusiast, you want to close one of the corridors such that all rooms remain connected, and the total length of the remaining corridors is minimized. You also need to find out how many different corridors can be closed while still meeting these conditions.</p>
    
            <p>Given the number of rooms <code>n</code> and the information about the corridors, determine the number of different corridors that can be closed while maintaining the connectivity of the rooms and keeping the total length of the remaining corridors as small as possible.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 6</code> and</p>
            <pre><code>corridors = [
             [0, 1, 2], [1, 2, 3], [0, 2, 2], 
             [1, 3, 1], [2, 4, 2], [0, 5, 3]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, corridors) = 2</code></pre>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of rooms in the office.</p>
                    <p>Guaranteed constraints: <code>3 ≤ n ≤ 10000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>corridors</code></p>
                    <p>Information about the corridors connecting the rooms. Each corridor is represented by three numbers: <code>corridors[i][0]</code> and <code>corridors[i][1]</code> denote the rooms the corridor connects, and <code>corridors[i][2]</code> denotes the length of this corridor.</p>
                    <p>Guaranteed constraints: <code>corridors.length = n</code>, <code>corridors[i].length = 3</code>, <code>0 ≤ corridors[i][0], corridors[i][1] < n</code>, <code>0 ≤ corridors[i][2] ≤ 100</code>, <code>corridors[i][0] ≠ corridors[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of corridors that can be removed while preserving the connectivity of the rooms and minimizing the total length of the remaining corridors.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 44,
        "challenge_name": 'Reducing Meetings',
        "description": `
            <p>You've just become the director of a big company. As it turns out, the company favors one-on-one meetings, which is why there are so many of them each week. Each meeting has an integer efficiency value that shows how much profit it gives the company. To make your employees chat less and work more, you want to remove some one-on-one meetings from the weekly schedule and leave as few meetings as possible. Of course, there are some restrictions:</p>
            
            <ul>
                <li>It should still be possible to deliver information from any employee to any other one (it might take a series of meetings to deliver information from one worker to another).</li>
                <li>There should be as few meetings left as possible.</li>
                <li>The total efficiency should be the maximum possible. The total efficiency equals the sum of efficiencies of all remaining one-on-one meetings.</li>
            </ul>
    
            <p>Given the number of people in the company <code>n</code> and the list of current one-on-one meetings with their efficiency values, find the best total efficiency of the reduced scheme.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 4</code> and</p>
            <pre><code>meetings = [
             [0, 1, 3], [1, 2, 2], [3, 0, 1], [3, 2, 5]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, meetings) = 10</code></pre>
    
            <p>The best way to reduce meetings is to remove the 3rd (1-based) meeting from the list.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of people working in your company.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>meetings</code></p>
                    <p>Information about the meetings. Each meeting is represented by three numbers: <code>meetings[i][0]</code> and <code>meetings[i][1]</code> denote the employees between whom the meeting is held, and <code>meetings[i][2]</code> denotes the efficiency of this meeting.</p>
                    <p>Guaranteed constraints: <code>n - 1 ≤ meetings.length ≤ n · (n - 1) / 2</code>, <code>meetings[i].length = 3</code>, <code>0 ≤ meetings[i][0], meetings[i][1] < n</code>, <code>0 ≤ meetings[i][2] ≤ 100</code>, <code>meetings[i][0] ≠ meetings[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The best total efficiency of the reduced meetings scheme.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 45,
        "challenge_name": 'Network Wires',
        "description": `
            <p>As a director of a large company, you try to do your best to make the working environment as efficient as possible. However, it's difficult to do so when even the hardware used in the office is not efficient: there are too many wires connecting your employees' computers.</p>
            
            <p>Naturally, you decided to minimize their number by getting rid of some wires. There's only one constraint: if it is possible to deliver information from one computer to another using the wires, it should still be possible to do so after the renovation. You would also like to minimize the total wires length, because the longer the wires, the more it is possible for you to trip over them at some point.</p>
            
            <p>Given the plan of your <code>n</code> office computers and the wires connecting them, find the minimum resulting length of the wires after removing some of them according to the constraints above.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 7</code> and</p>
            <pre><code>wires = [
             [0, 1, 1], [2, 0, 2], [1, 2, 3], [3, 4, 1],
             [4, 5, 2], [5, 6, 3], [6, 3, 2]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, wires) = 8</code></pre>
    
            <p>The best way is to remove wires 3 and 6 (1-based).</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of computers in your office.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wires</code></p>
                    <p>Information about the wires connecting computers. Each wire is represented by three numbers: <code>wires[i][0]</code> and <code>wires[i][1]</code> denote the computers connected by the ith wire, and <code>wires[i][2]</code> denotes the length of this wire.</p>
                    <p>Guaranteed constraints: <code>0 ≤ wires.length ≤ n · (n - 1) / 2</code>, <code>wires[i].length = 3</code>, <code>0 ≤ wires[i][0], wires[i][1] < n</code>, <code>0 ≤ wires[i][2] ≤ 100</code>, <code>wires[i][0] ≠ wires[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum resulting length of the wires after removing some of them.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 46,
        "challenge_name": 'Door Lock',
        "description": `
            <p>In order to protect your office from intruders, your boss decided to install a high-tech lock on the door. The lock represents a large cube with some points floating inside. When the correct pin is entered, the points start to connect to each other by rays of light until they form a single connected structure with rays of the minimum possible total length. When this happens, the lock opens.</p>
            
            <p>Your boss likes interesting challenges, but is not very fond of solving them himself. This is why he asked you, his most (or least?) favorite employee, to solve the challenge he came up with. Given the set of points, he wants you to find the optimal structure that opens the lock. Since there can be several optimal structures, your task is to return the minimum total length of all the rays in one of such structures.</p>
    
            <h3>Example</h3>
    
            <p>For <code>points = [[0, 0, 0], [1, 1, 1], [1, -1, 1], [-1, 1, 1], [-1, -1, -1]]</code></p>
            <p>the output should be</p>
            <pre><code>solution(points) = 6.9282032303</code></pre>
    
            <p>The best way is to connect point [0, 0, 0] with all other points.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 9.5 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>points</code></p>
                    <p>An array of points floating in the cube. Each point is represented by its coordinates in 3D space: <code>points[i][0]</code> for x, <code>points[i][1]</code> for y, and <code>points[i][2]</code> for z.</p>
                    <p>Guaranteed constraints: <code>1 ≤ points.length ≤ 2500</code>, <code>points[i].length = 3</code>, <code>-5000 ≤ points[i][j] ≤ 5000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> float</p>
                    <p>The total length of the rays in an optimal structure. Your answer will be considered correct if its absolute error doesn't exceed 10<sup>-5</sup>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 47,
        "challenge_name": 'Connected Network',
        "description": `
            <p>Your company uses a local network consisting of <code>n</code> computers, some pairs of which are connected by wires. Each wire has its specific speed of data transmission, which is the same for both directions. Your boss wants to cut down on the expenses and leave only <code>n - 1</code> wires. His only concern is that the network should still be connected, so he is willing to get rid of a random wire.</p>
            
            <p>It pains you to see such a waste: efficiency is at stake! In order to explain to your boss how wrong his decision is, you'd like to find the sums of speeds of data transmission along each edge of the most optimal scheme with <code>n - 1</code> wires, and for the second optimal one. The difference between them should convince your boss how important efficiency is, so that is what you need to find.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 4</code> and</p>
            <pre><code>wires = [
                [1, 2, 1],
                [1, 4, 3],
                [2, 3, 3],
                [2, 4, 2],
                [3, 4, 4]
            ]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, wires) = 1</code></pre>
    
            <p>The most optimal scheme contains wires between three pairs of computers (1 and 2, 2 and 4, and 2 and 3), with the total speed equal to 6. The second optimal scheme contains wires between computers 1 and 2, 2 and 4, and 3 and 4, summing up to the total speed of 7.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of computers.</p>
                    <p>Guaranteed constraints: <code>3 ≤ n ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wires</code></p>
                    <p>A two-dimensional array representing the wires. Each element of this array is given in the format <code>[comp1, comp2, speed]</code> and represents a wire that connects <code>comp1</code> to <code>comp2</code> (both given 1-based) and has a transmission speed of <code>speed</code>.</p>
                    <p>It is guaranteed that there are at least two different connected schemes with <code>n - 1</code> wires.</p>
                    <p>Guaranteed constraints: <code>3 ≤ wires.length ≤ n * (n - 1) / 2</code>, <code>wires[i].length = 3</code>, <code>1 ≤ wires[i][0], wires[i][1] ≤ n</code>, <code>0 ≤ wires[i][2] ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The difference between the sums of speeds of data transmission along each edge for the most optimal scheme and for the second optimal scheme.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 48,
        "challenge_name": 'Changing Wires',
        "description": `
            <p>Not long ago your best programmer retired. He was the best programmer in town, and now there is no one in the company who can take his place. As a director and a former programmer, you decided to take his place for a while.</p>
            
            <p>Your company is really big and has <code>n</code> of its very own servers and a lot of wires of different lengths connecting them. Of course, the information can be delivered from any server to any other one. Now you should remove some of the wires so that:</p>
            <ul>
                <li>Information can still be delivered from any server to any other one;</li>
                <li>The total length of the remaining wires is as small as possible.</li>
            </ul>
            
            <p>Years of office work did leave their mark, so you're not sure if you can handle the task right away. To begin with, you decided to start off by finding <code>k</code> wires of minimal length that will definitely be left after you remove some of the excessive wires. This little cheat helped you to write a script that returns a list of wires that should be removed.</p>
    
            <p>However, it turned out that removing excessive wires is not yet possible because of other more pressing matters, so you keep putting the task off. The problem is, when time passes, some of the wires break down and are replaced by new ones. Each time such an update occurs, you have to recalculate the result. You're naturally not too happy about this, so you would like to write a program that will do the job for you.</p>
    
            <p>Given the list of updates containing the information about the wire replacements, for each update calculate the total length of the <code>k</code> shortest wires that shouldn't be removed as excessive according to the constraints above.</p>
    
            <h3>Example</h3>
    
            <p>For <code>n = 4</code>,</p>
            <pre><code>wires = [
                [0, 1, 1],
                [1, 2, 2],
                [2, 3, 3],
                [3, 0, 4]
            ]
            k = 3
            updates = [
                [0, 1, 5],
                [3, 0, 2]
            ]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, wires, k, updates) = [9, 7]</code></pre>
    
            <p>The first update changes the wire between servers 0 and 1 to length 5, making the total length of the 3 shortest wires in the minimum spanning tree equal to 9. The second update changes the wire between servers 3 and 0 to length 2, making the total length of the 3 shortest wires in the minimum spanning tree equal to 7.</p>
    
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of servers in the company.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 10^5</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>wires</code></p>
                    <p>Information about the wires connecting the servers. For each valid <code>i</code>, <code>wires[i]</code> contains three numbers: <code>wires[i][0]</code> and <code>wires[i][1]</code> stand for ids of the servers which this wire connects and <code>wires[i][2]</code> stands for the length of this wire.</p>
                    <p>It is guaranteed that there is no more than one wire between each pair of servers, and that initially it is possible to deliver information from any server to any other one.</p>
                    <p>Guaranteed constraints: <code>n - 1 ≤ wires.length ≤ min(n * (n - 1) / 2, 10^5)</code>, <code>wires[i].length = 3</code>, <code>0 ≤ wires[i][0], wires[i][1] < n</code>, <code>0 ≤ wires[i][2] ≤ 10^5</code>, <code>wires[i][0] ≠ wires[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The number of the shortest wires that won't be removed as excessive and information about which you would like to have after each update.</p>
                    <p>Guaranteed constraints: <code>0 ≤ k ≤ min(10, n - 1)</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>updates</code></p>
                    <p>Information about wire updates. For each valid <code>i</code>, <code>updates[i]</code> contains three numbers: <code>updates[i][0]</code> and <code>updates[i][1]</code> stand for ids of the servers which this wire connects and <code>updates[i][2]</code> stands for the new length of this wire.</p>
                    <p>It is guaranteed that the updates are always applied to one of the existing wires.</p>
                    <p>Guaranteed constraints: <code>0 ≤ updates.length ≤ 10^4</code>, <code>updates[i].length = 3</code>, <code>0 ≤ updates[i][0], updates[i][1] < n</code>, <code>0 ≤ updates[i][2] ≤ 10^5</code>, <code>updates[i][0] ≠ updates[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>For each update, find the total length of the shortest <code>k</code> wires after excessive wires are removed.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 49,
        "challenge_name": 'Hierarchies Count',
        "description": `
            <p>Since you became a director of a large company, you came to know all of your <code>n</code> employees perfectly well. You carefully studied their relationships and came up with a list of pairs of workers who respect one another. You are sure that in a healthy environment subordinates should respect their immediate superiors, which is why you would like to change the hierarchy in the company according to the list you composed. This hierarchy should be represented by a rooted tree, and for each pair of employees <code>a</code>, <code>b</code>, <code>a</code> is an immediate superior of <code>b</code> (or the other way round) if and only if <code>a</code> respects <code>b</code> and vice versa.</p>
            
            <p>Given the number of people in your company <code>n</code> and the <code>respectList</code> you created, calculate the number of different hierarchies you can create.</p>
        
            <h3>Example</h3>
        
            <p>For <code>n = 4</code> and</p>
            <pre><code>respectList = [
                [0, 1],
                [1, 2],
                [2, 3],
                [3, 0],
                [1, 3]
            ]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, respectList) = 32</code></pre>
        
            <p>Here are all possible hierarchies:</p>
            <pre><code>
                (0 -- 1), (1 -- 2), (2 -- 3);
                (1 -- 2), (2 -- 3), (3 -- 0);
                (2 -- 3), (3 -- 0), (0 -- 1);
                (3 -- 0), (0 -- 1), (1 -- 2);
                (1 -- 0), (1 -- 2), (1 -- 3);
                (3 -- 0), (3 -- 1), (3 -- 2);
                (1 -- 2), (1 -- 3), (3 -- 0);
                (1 -- 0), (1 -- 3), (3 -- 2);
            </code></pre>
            <p>Each of them can be rooted at any of 4 employees, so the answer equals the number of hierarchies in the list above multiplied by 4.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of employees in your company.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>respectList</code></p>
                    <p>Information about the pairs of employees who respect one another. For each valid <code>i</code>, <code>respectList[i]</code> contains two numbers: <code>respectList[i][0]</code> and <code>respectList[i][1]</code> that represent the ids of employees that respect one another (and thus can be superiors to one another).</p>
                    <p>It is guaranteed that there is no more than one dependency between each pair of employees and that <code>respectList</code> forms a connected graph.</p>
                    <p>Guaranteed constraints: <code>n - 1 ≤ respectList.length ≤ n · (n - 1) / 2</code>, <code>respectList[i].length = 2</code>, <code>0 ≤ respectList[i][0], respectList[i][1] < n</code>, <code>respectList[i][0] ≠ respectList[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of different hierarchies that can be obtained from <code>respectList</code> modulo <code>10^9 + 7</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 66,
        "order_index": 50,
        "challenge_name": 'Number Of Plans',
        "description": `
            <p>You're working in a big delivery company that has to handle a lot of orders on a daily basis. To optimize the delivery process, your boss gave you a plan of the city containing <code>n</code> buildings and some streets connecting them. Your task is to build an optimal delivery plan for the couriers. The plan should contain several streets connecting all the buildings in such a way that each building is reachable from any other one, and should have the minimum total length of all the streets in it among all possible plans.</p>
            
            <p>Since this task is too simple for you, you'd like to make it a bit more challenging. You know that using the same delivery plan every time is boring for many couriers, so you'd like to find all possible different optimal plans. To begin with, you'd like to calculate the number of such plans for the given <code>n</code> and <code>streets</code>. Since this number can be very big, return it modulo <code>10^9 + 7</code>.</p>
        
            <h3>Example</h3>
        
            <p>For <code>n = 4</code> and</p>
            <pre><code>streets = [
                [0, 1, 1],
                [0, 3, 2],
                [1, 2, 2],
                [2, 3, 2]
            ]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, streets) = 3</code></pre>
        
            <p>There are 3 possible optimal delivery plans with the total streets length equal to 5:</p>
            <pre><code>
                0 -- 1, 0 -- 3, 1 -- 2;
                0 -- 1, 1 -- 2, 2 -- 3;
                0 -- 1, 0 -- 3, 2 -- 3.
            </code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of buildings in the city.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>streets</code></p>
                    <p>Information about the streets connecting the buildings in the city. For each valid <code>i</code>, <code>streets[i]</code> contains three numbers: <code>streets[i][0]</code> and <code>streets[i][1]</code> stand for the ids of the buildings the <code>i</code>-th street connects, and <code>streets[i][2]</code> stands for the length of this street.</p>
                    <p>It is guaranteed that each building is reachable by streets from any other one and that there is no more than one street between each pair of buildings.</p>
                    <p>Guaranteed constraints: <code>n - 1 ≤ streets.length ≤ n · (n - 1) / 2</code>, <code>streets[i].length = 3</code>, <code>0 ≤ streets[i][0], streets[i][1] < n</code>, <code>0 ≤ streets[i][2] ≤ 100</code>, <code>streets[i][0] ≠ streets[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of optimal delivery plans you can find given the plan of the city modulo <code>10^9 + 7</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 51,
        "challenge_name": 'Running Water',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>It's your turn to show who's the boss: you're the one who will be participating in the next challenge. Here are the rules of this challenge.</p>
            
            <p>There's a treadmill hanging from the ceiling and going up. At its very top, there are three buckets containing water. You can jog up the treadmill and perform one of the following operations:</p>
            <ul>
                <li>Empty one of the buckets entirely and pour out all water from it;</li>
                <li>Pour water from one bucket into another until either the first one is empty or the second one is full.</li>
            </ul>
            
            <p>The buckets are connected to one arm of the scales, and the key that your team should reach is hanging from another. The key will be reachable only when the total amount of water in all three buckets is equal to the given volume.</p>
            
            <p>The capacities (volumes) of all the buckets are stored in an array <code>cap</code>. Initially, all three buckets are full, i.e., for each valid <code>i</code>, the <code>i</code>-th bucket has <code>cap[i]</code> units of water. You want to make sure that your efforts won't be vain and calculate in advance if it is possible to get the key. Given the <code>cap</code> array and the <code>volume</code>, determine if it is possible to obtain the volume amount of water in all three buckets performing only the allowed operations.</p>
        
            <h3>Example</h3>
        
            <p>For <code>cap = [1, 1, 1]</code> and <code>volume = 2</code>, the output should be</p>
            <pre><code>solution(cap, volume) = true</code></pre>
        
            <p>Initially, there are 3 units of water in all the buckets. The only action you can perform is to empty the water from one of the buckets, which will leave you with 2 units. At this point, pouring water from one bucket to another won't produce a different total amount of water, so the only remaining option is emptying one of the remaining buckets, which will leave you with 1 final unit of water. Now the total amount of the poured water is equal to the given volume, so the answer is true.</p>
        
            <p>For <code>cap = [16, 5, 3]</code> and <code>volume = 20</code>, the output should be</p>
            <pre><code>solution(cap, volume) = false</code></pre>
        
            <p>Here is the list of all possible amounts of water across all three buckets: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 24. As you can see, you can't obtain the given volume.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.integer <code>cap</code></p>
                    <p>Individual capacity of each bucket (their volume), listed as three positive integers.</p>
                    <p>Guaranteed constraints: <code>cap.length = 3</code>, <code>1 ≤ cap[i] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>volume</code></p>
                    <p>The required volume.</p>
                    <p>Guaranteed constraints: <code>1 ≤ volume ≤ sum(cap[i])</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p><code>true</code> if the given volume can be obtained using the allowed operations and <code>false</code> otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 52,
        "challenge_name": 'Red Alert',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge, the participant must make her way through a corridor covered in red laser rays. If she touches one of the rays, she will fail the challenge and become the prisoner of the Fort.</p>
            
            <p>The corridor has several levels, so it can be represented as an undirected graph with a known number of nodes. The participant starts at node 1 and must reach node <code>nodes</code>, both 1-based. Each move, the participant can move to a node adjacent to her current position. Since you prepared for each challenge thoroughly, you know when and where the laser rays appear:</p>
            <ul>
                <li>On the <code>i</code>-th (1-based) move, the rays disappear from their previous locations and appear in all the nodes <code>x</code> such that <code>x % k = i % k</code>, where % stands for the modulo operation and <code>k</code> is known.</li>
            </ul>
            
            <p>If your teammate ends up in node <code>x</code> when the rays appear there, she'll fail. Your goal is to calculate the minimum number of moves required to reach the last node from node 1, or <code>-1</code> if it's impossible.</p>
        
            <h3>Example</h3>
        
            <p>For <code>nodes = 5</code>, <code>corridor = [1, 2, 1, 3, 2, 4, 3, 5, 4, 5]</code>, and <code>k = 4</code>, the output should be</p>
            <pre><code>solution(nodes, corridor, k) = 2</code></pre>
        
            <p>As you can see in the image below, the optimal way is to go to node 1 on the first move and to node 5 on the second one.</p>
        
            <p>For <code>nodes = 4</code>, <code>corridor = [1, 2, 1, 3, 2, 4, 3, 4]</code>, and <code>k = 2</code>, the output should be</p>
            <pre><code>solution(nodes, corridor, k) = -1</code></pre>
        
            <p>As you can see in the following image, your teammate will inevitably end up at an even node on an even move, i.e., when the lasers appear there. Thus, the answer is <code>-1</code>.</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>nodes</code></p>
                    <p>The number of nodes that comprise the corridor.</p>
                    <p>Guaranteed constraints: <code>2 ≤ nodes ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>corridor</code></p>
                    <p>An array of integers that represents a corridor graph, where a pair (<code>corridor[i]</code>, <code>corridor[i + 1]</code>) (for even <code>i</code>) is an edge between the <code>corridor[i]</code>-th and the <code>corridor[i + 1]</code>-th nodes.</p>
                    <p>Guaranteed constraints: <code>0 ≤ corridor.length ≤ 10^5</code>, <code>1 ≤ corridor[i] ≤ nodes</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>k</code></p>
                    <p>The parameter for the modulo operation.</p>
                    <p>Guaranteed constraints: <code>2 ≤ k ≤ 10</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of moves required to reach node <code>nodes</code> from node 1, or <code>-1</code> if it's impossible to do so.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 53,
        "challenge_name": 'Rod In Labyrinth',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge, the participant finds himself in a rectangular labyrinth, and his goal is to carry a rod from the top left corner of the labyrinth to the bottom right corner. The rod is represented as a 1 × 3 rectangle and must be moved through the labyrinth without colliding with blocked cells or walls.</p>
            
            <p>The rod can be moved in the following ways:</p>
            <ul>
                <li>Move the rod one cell down or up;</li>
                <li>Move the rod one cell to the right or left;</li>
                <li>Change the rod's orientation from vertical to horizontal or vice versa (rotation).</li>
            </ul>
            
            <p>The rod can only be rotated about its center if the 3 × 3 area surrounding it is clear from obstacles or walls. The rod starts positioned horizontally with its left cell at <code>[0, 0]</code>, and the goal is to move the rod into a position where one of its cells is in the bottom right cell of the labyrinth.</p>
            
            <h3>Example</h3>
        
            <p>For</p>
            <pre><code>labyrinth = [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                        ['#', '.', '.', '.', '#', '.', '.', '.', '.'],
                        ['.', '.', '.', '.', '#', '.', '.', '.', '.'],
                        ['.', '#', '.', '.', '.', '.', '.', '#', '.'],
                        ['.', '#', '.', '.', '.', '.', '.', '#', '.']]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(labyrinth) = 11</code></pre>
        
            <p>For</p>
            <pre><code>labyrinth = [['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                        ['#', '.', '.', '.', '#', '.', '.', '#', '.'],
                        ['.', '.', '.', '.', '#', '.', '.', '.', '.'],
                        ['.', '#', '.', '.', '.', '.', '.', '#', '.'],
                        ['.', '#', '.', '.', '.', '.', '.', '#', '.']]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(labyrinth) = -1</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>labyrinth</code></p>
                    <p>A rectangular array of chars representing the labyrinth, where <code>labyrinth[i][j] = '.'</code> if the corresponding cell is empty and <code>labyrinth[i][j] = '#'</code> if the corresponding cell is blocked.</p>
                    <p>Guaranteed constraints: <code>3 ≤ labyrinth.length ≤ 1000</code>, <code>3 ≤ labyrinth[i].length ≤ 1000</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of moves required to carry the rod to the end of the labyrinth or <code>-1</code> if it's impossible.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 54,
        "challenge_name": 'Barrel Maze',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Your team has successfully completed several challenges so far, and one of your teammates is ready to face the next one. In this challenge, the player must move a barrel from one end of an <code>n × m</code> maze to the other, where the key is locked in a vice. A tool that releases the key is connected to the barrel. The maze consists of <code>n · m - 3</code> boxes, and these boxes and the barrel need to be moved so that the key can be freed. The boxes and the barrel are heavy, so you need to help your teammate plan the moves.</p>
            
            <p>Given the size of the maze and the positions of the boxes, find the minimum number of moves required to complete the challenge.</p>
            
            <h3>Example</h3>
        
            <p>For <code>n = 3</code>, <code>m = 3</code>, and</p>
            <pre><code>boxes = [[0, 2], [2, 2], [1, 0], [2, 0], [1, 1], [2, 1]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, m, boxes) = 8</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 15 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>An integer, the number of rows in the maze.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n < 10</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>m</code></p>
                    <p>An integer, the number of columns in the maze.</p>
                    <p>Guaranteed constraints: <code>1 ≤ m ≤ 50 / n</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>boxes</code></p>
                    <p>An array of coordinates of all boxes in the maze. For each valid <code>i</code>, <code>boxes[i][0]</code> stands for the row and <code>boxes[i][1]</code> stands for the column (both 0-based) of the <code>(i + 1)</code>th box.</p>
                    <p>Guaranteed constraints: <code>boxes.length = n × m - 3</code>, <code>boxes[i].length = 2</code>, <code>0 ≤ boxes[i][0] < n</code>, <code>0 ≤ boxes[i][1] < m</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of moves required to move the barrel from the top left cell of the maze to the bottom right cell. It's guaranteed that it's always possible.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 55,
        "challenge_name": 'Forming Of Words',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Your team has finally entered the Treasure Room, and now all that's left to do is complete the final challenge and grab the well-deserved treasure. In this challenge, 4 members of your team need to stand on the cells of a <code>5 × 4</code> grid filled with letters (not necessarily distinct). The letters they stand on should form a password, and the gold will appear only if the password is correct and correctly spelled.</p>
            
            <p>The players can move only along the axes or stay in their cells; moving from one cell to the neighboring one takes one second; and two players cannot stand on the same cell at the same moment. You need to calculate the minimum number of seconds your team needs to form the new password.</p>
            
            <h3>Example</h3>
        
            <p>For</p>
            <pre><code>grid = 
            [['a', 'b', 'c', 'd'],
             ['e', 'f', 'g', 'h'],
             ['i', 'j', 'k', 'l'],
             ['m', 'n', 'o', 'p'],
             ['q', 'r', 's', 't']]</code></pre>
            <pre><code>positions = [[2, 2], [0, 2], [4, 3], [2, 1]]</code></pre>
            <pre><code>newWord = "rsam"</code></pre>
            <p>the output should be</p>
            <pre><code>solution(grid, positions, newWord) = 2</code></pre>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 48 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.char <code>grid</code></p>
                    <p>A rectangular array representing the grid, where <code>grid[i][j]</code> is a lowercase English letter.</p>
                    <p>Guaranteed constraints: <code>grid.length = 5</code>, <code>grid[i].length = 4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>positions</code></p>
                    <p>An array representing the initial positions of your 4 teammates, where <code>positions[i][0]</code> stands for the row and <code>positions[i][1]</code> stands for the column (both 0-based) of the <code>(i + 1)</code>th teammate.</p>
                    <p>Guaranteed constraints: <code>positions.length = 4</code>, <code>positions[i].length = 2</code>, <code>0 ≤ positions[i][0] < 5</code>, <code>0 ≤ positions[i][1] < 4</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> string <code>newWord</code></p>
                    <p>A string representing the new word that you should spell. It's guaranteed that the new word can be formed by the letters of the grid.</p>
                    <p>Guaranteed constraints: <code>newWord.length = 4</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimal number of seconds required to obtain <code>newWord</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 56,
        "challenge_name": 'Crossing The River',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Unfortunately, something went horribly wrong: although you collected the treasure of the Fort, you cannot get out! The gates are locked, and you have no idea how to unlock them. Desperate, you turned to the Professor, a slightly crazy but helpful inhabitant of the Fort. He promised to help you, but only if you solve his challenge.</p>
            
            <p>In this challenge, you won't have to do anything yourself; instead, you will have to make several trained animals cross a river using a single frail boat in the minimum possible time.</p>
            
            <p>Here's the tricky part: although the animals are well-trained, they're still wild beasts with wild instincts. Some pairs of animals just can't stand one another, and if they are left alone (i.e., without at least a single other animal watching them) either on the same side of the river or on the boat, they will definitely lose it and start fighting. The Professor most certainly won't be impressed, and you will end up stuck in the Fort with him. Note that the animals won't have time to fight when they go aboard the boat or leave it; they will only start to do so if they spend at least one minute together.</p>
            
            <p>The boat is quite old and very delicate: it can only move with no more than two animals, and it obviously can't move by itself. Given the information about the animals, return the minimum amount of time required to make them cross the river, or -1 if it's impossible to do so.</p>
            
            <h3>Example</h3>
        
            <p>For</p>
            <pre><code>animals = 
            [[ 3, -1,  4],
             [-1,  2, -1],
             [ 4, -1,  1]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(animals) = 14</code></pre>
            <p>Let's assume that the given three animals are a dog (d), a cat (c), and a mouse (m), respectively. A cat can't be left alone neither with the mouse nor with the dog. To make the animals cross the river you will have to apply the following strategy:</p>
            <ul>
                <li>Initial position: d c m --------- ...</li>
                <li>Move 1: c     --d m---> ... (4 minutes)</li>
                <li>Move 2: c     --------- d m</li>
                <li>Move 3: c     <---m---- d (1 minute)</li>
                <li>Move 4: c m   --------- d (2 minutes)</li>
                <li>Move 5: m     ----c---> d (3 minutes)</li>
                <li>Move 6: m     --------- c d</li>
                <li>Move 7: m     <---d---- c (4 minutes)</li>
                <li>Final position: m d   --------- c</li>
                <li>Total time: 4 + 1 + 2 + 3 + 4 = 14 minutes.</li>
            </ul>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>animals</code></p>
                    <p>A square matrix that represents the animals. For each valid <code>i</code> and <code>j</code> (<code>i ≠ j</code>), <code>animals[i][j]</code> is either greater than 0 and represents the number of minutes it takes for the <code>i</code>th and the <code>j</code>th animals to cross the river in one boat, or is equal to -1, which means that the animals can't stand one another. It is guaranteed that <code>animals[i][j] = animals[j][i]</code>.</p>
                    <p>For each valid <code>i</code>, <code>animals[i][i]</code> is guaranteed to be greater than 0. This value denotes the number of minutes it takes the <code>i</code>th animal to cross the river alone.</p>
                    <p>Guaranteed constraints: <code>1 ≤ animals.length ≤ 10</code>, <code>animals[i].length = animals.length</code>, <code>-1 ≤ animals[i][j] ≤ 100</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum amount of time required to make the animals cross the river or -1 if it's impossible to do so.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 57,
        "challenge_name": 'Rubiks Cubes',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>Unfortunately, something went horribly wrong: although you collected the treasure of the Fort, you cannot get out! You asked a crazed Professor (an inhabitant of the Fort) to help you out, and he showed you the gates that lead to the exit. It turned out that opening the gates is a challenge itself, and you will be allowed to leave the Fort only if you manage to complete it from the first try. Moreover, the Master Of The Fort is after you because of your outstanding performance, so you don't have that much time.</p>
            
            <p>Two of your teammates are given Rubik's Cubes, one cube for each player. The gates will open only when the cubes have the same configuration, and only if this configuration is obtained in the minimum possible number of moves. Each move, each of the players is allowed to rotate one of the layers of their cube. There are two additional conditions that should be met: Firstly, it's not possible to rotate the cubes, since it will open the tigers' cages in the room where the other teammates are waiting. Secondly, each move a layer can be rotated only 90°.</p>
            
            <p>Given the initial cube configurations, return the minimum number of moves required to obtain the same configuration on both cubes. The time is short, so you can make only 2 moves.</p>
            
            <h3>Example</h3>
        
            <p>For</p>
            <pre><code>
    firstCube = 
    [[0, 0, 0, 0], [1, 1, 1, 1], [2, 2, 2, 2], 
     [3, 3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5]]
    secondCube = 
    [[5, 0, 3, 0], [1, 4, 1, 2], [5, 5, 2, 2],
     [3, 4, 3, 4], [0, 2, 0, 4], [3, 1, 5, 1]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(firstCube, secondCube) = 1</code></pre>
            <p>Here is what the first cube looks like:</p>
            <p>And here is what the second cube looks like:</p>
            <p>If the first teammate rotates the upper layer to the left and the second teammate rotates the left layer backwards, both of them will get the following configuration:</p>
        
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 20 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>firstCube</code></p>
                    <p>An array representing the colors on the sides of the first cube. <code>firstCube[0]</code> and <code>firstCube[1]</code> stand for the upper and lower sides respectively, <code>firstCube[2]</code> and <code>firstCube[3]</code> for right and left sides, <code>firstCube[4]</code> and <code>firstCube[5]</code> for front and back sides. Each of these 6 arrays contains 4 elements. It's guaranteed that <code>firstCube</code> contains 4 elements of each color. Here is how these arrays' elements are placed on each side:</p>
                    <p>Guaranteed constraints: <code>firstCube.length = 6</code>, <code>firstCube[i].length = 4</code>, <code>0 ≤ firstCube[i][j] ≤ 5</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>secondCube</code></p>
                    <p>An array representing the colors on the sides of the second cube in the same format as for the first cube.</p>
                    <p>Guaranteed constraints: <code>secondCube.length = 6</code>, <code>secondCube[i].length = 4</code>, <code>0 ≤ secondCube[i][j] ≤ 5</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of moves required to obtain the same configurations on the Rubik's cubes if it is not greater than 2, and -1 otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 67,
        "order_index": 58,
        "challenge_name": 'Prisoner Escape',
        "description": `
            <p>After long years of sharpening your programming skills and honing your physique, you finally made it: you're a member of the ProProgrammers team and you've entered Fort Boyard!</p>
            
            <p>You've completed the challenges, collected the gold, and managed to find your way out of the Fort, so now there is only one thing left to do. One of your team members was taken as a prisoner when he failed his challenge, and now is your chance to set him free. However, it won't be easy: there are two guards whose job is to stop the prisoner if he tries to escape. The prisoner should avoid the guards at all costs, otherwise you won't be able to help him.</p>
            
            <p>The map of the prison is represented by an undirected graph that can be disconnected, but can't contain multiedges or loops. Initially one node is occupied by the prisoner, and two other nodes are occupied by the guards. Each move they take occurs in the following order: the prisoner goes first, and the guards go second, one at a time. During a turn a person can stay on their node, or move to a neighboring node (i.e. the node connected to their current location by an edge). If at any moment a guard and a prisoner turn out to be on the same node, the guard will grab the prisoner and won't let him go, so the team won't be able to set him free.</p>
            
            <p>Your task is to find out if the guards can catch the prisoner, assuming that both the guards and the prisoner move optimally.</p>
            
            <h3>Example</h3>
        
            <p>For</p><code>nodes = 5</code>

            <pre><code>
            graph = [1, 2, 
                     2, 3, 
                     3, 4, 
                     4, 5, 
                     5, 1]</code></pre>

            <p>and <code>start = [1, 3, 4]</code>, the output should be
            <code>solution(nodes, graph, start) = true</code>.<p>
            <p>Here's one possible scenario: on the first move the prisoner stays in his node (if he moves, he'll be caught after the guards move). guard1 moves to node 2 and guard2 to node 5. On the second move the prisoner is forced to stay in his node again because all his neighboring nodes are occupied by guards. However, guard1 will catch the prisoner in his next turn anyway.</p>
    
            <p>For</p>
            <code>nodes = 16,</codes>
    
            <pre><code>graph = 
            [1, 2, 1, 4, 1, 5, 1, 13,
             2, 3, 2, 6, 2, 14,
             3, 4, 3, 7, 3, 15,
             4, 8, 4, 16,
             5, 6, 5, 8, 5, 9,
             6, 7, 6, 10,
             7, 8, 7, 11,
             8, 12,
             9, 10, 9, 12, 9, 13,
             10, 11, 10, 14,
             11, 12, 11, 15,
             12, 16,
             13, 14, 13, 16,
             14, 15,
             15, 16]</pre></code>
            
            <p>and <code>start = [1, 5, 16]</code>, the output should be
            <code>solution(nodes, graph, start) = false</code>.</p>
            <p>In this example the prisoner has a winning strategy to follow. When no guard threatens to catch him in one move, he just stays in his node. When there is at least one guard on the neighboring nodes, he goes to the node which isn't neighboring any of the guards, so the guards can't catch him. Such a node always exists because each node has 4 neighboring nodes and these nodes aren't neighboring one another, so if there is one guard in one of the nodes, there are three other nodes to control for the remaining guard, which is impossible due to the graph structure.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 26 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>nodes</code></p>
                    <p>An integer, the number of nodes in the graph. The nodes are numbered from 1 to nodes inclusive.</p>
                    <p>Guaranteed constraints: <code>3 ≤ nodes ≤ 50</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>graph</code></p>
                    <p>An array of integers, where a pair <code>(graph[i], graph[i + 1])</code> (for even <code>i</code>) denotes an edge between the <code>graph[i]</code>th and the <code>graph[i + 1]</code>th nodes.</p>
                    <p>Guaranteed constraints: <code>0 ≤ graph.length ≤ 2000</code>, <code>1 ≤ graph[i] ≤ nodes</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>start</code></p>
                    <p>An array of three distinct integers. <code>start[0]</code> is the initial prisoner position, and <code>start[1]</code> and <code>start[2]</code> are the guards positions.</p>
                    <p>Guaranteed constraints: <code>1 ≤ start[i] ≤ nodes</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> boolean</p>
                    <p>True if guards can catch the prisoner and false otherwise.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 59,
        "challenge_name": 'Childrens Party',
        "description": `
            <p>You are the leader of a tribe living on a remote island covered by a rectangular grid. Your tribe consists of several families, with a single child in each family. Each cell is occupied by exactly one family. Today is a special day: a children's party is organized! The ultimate game was prepared to keep the children entertained. At the very beginning of the game, all children of the island have to form several teams. Members of the same team should be able to communicate with each other, so every child of a team should be able to reach every other child of this team. A child can move from one cell to another if these two cells are adjacent (they have a common side). Children are strictly prohibited from going beyond the island.</p>
            
            <p>Because of the wild animals living on your island, it is not always safe to move from a cell to one of the adjacent ones: hungry beasts are watching the paths between them closely, hoping to spot a child and attack them. For each cell, you know the paths the animals are watching, with respect to this cell. The children are also aware of the dangerous paths and won't take them into consideration when splitting into teams.</p>
            
            <p>Given the masks of the directions the animals are watching, find the minimum possible number of teams the children can form.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>directions = 
            [[13, 14,  9],
             [4,   1,  5],
             [7,  10, 11]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(directions) = 1</code></pre>
            <p>Here's an image showing which paths are not safe:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>directions</code></p>
                    <p>A rectangular matrix. <code>directions[i][j]</code> is the mask representing the paths the animals at the cell (i, j) are watching, where <code>i</code> represents the row and <code>j</code> represents the column, both 0-based.</p>
                    <p>If the <code>k</code>th bit of <code>directions[i][j]</code> is equal to 0, the children can move from this cell in the <code>k</code>th direction (0-based), where directions are numbered as follows: right, down, left, up.</p>
                    <p>Guaranteed constraints: <code>1 ≤ directions.length &lt; 100</code>, <code>1 ≤ directions[i].length &lt; 99</code>, <code>0 ≤ directions[i][j] ≤ 15</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The minimum number of teams the children can form.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 60,
        "challenge_name": 'Bridges Destruction',
        "description": `
            <p>You are the son of the leader of a tribe living on a remote archipelago. It consists of several islands connected by bidirectional bridges. You think your father is too old to be a leader, and would like to prove it to others. The Council of Elders will be convened tomorrow, and this is your best chance to show that things don't go as well as they used to when your father was young.</p>
            
            <p>You decided to destroy one bridge of the archipelago (they are too strong, so you don't have enough time to destroy several bridges). All elders live on island <code>a</code>, and the council will take place on island <code>b</code>. You want to make sure that the elders see the destruction, so you need to destroy such a bridge that lies on the path between <code>a</code> and <code>b</code>. This is your only chance, so the bridge should belong to each path between <code>a</code> and <code>b</code>.</p>
            
            <p>As the first step, you want to calculate the number of suitable bridges. Given the bridge configuration and information about islands <code>a</code> and <code>b</code>, return the number of bridges which destruction will definitely be noted by the elders.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>bridges = 
            [[1, 2],
             [0],
             [0]]</code></pre>
            <p><code>a = 0</code>, and <code>b = 2</code>,</p>
            <p>the output should be</p>
            <pre><code>solution(bridges, a, b) = 1</code></pre>
            <p>Here's an image showing the bridges between the islands:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>bridges</code></p>
                    <p>Adjacency list representing your archipelago. It is guaranteed that if <code>i</code> is present in <code>bridges[j]</code>, then <code>j</code> is present in <code>bridges[i]</code>. There is at most one bridge between each pair of islands, and no bridge connects an island to itself.</p>
                    <p>Guaranteed constraints: <code>1 ≤ bridges.length ≤ 3000</code>, <code>0 ≤ bridges[i].length ≤ 15</code>, <code>0 ≤ bridges[i][j] &lt; bridges.length</code>, <code>0 ≤ sum(bridges[i].length) ≤ 10000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>a</code></p>
                    <p>0-based index of the island where the elders live.</p>
                    <p>Guaranteed constraints: <code>0 ≤ a &lt; bridges.length</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>b</code></p>
                    <p>0-based index of the island where the council will take place.</p>
                    <p>Guaranteed constraints: <code>0 ≤ b &lt; bridges.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The number of bridges you can destroy.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 61,
        "challenge_name": 'Antelopes Migration',
        "description": `
            <p>You are the leader of a tribe living on a remote archipelago that consists of several islands connected by bidirectional bridges. Vegetarianism is the main trend among the young aborigines of your tribe, and as an old-school man, you are certainly not impressed. You decided to show teenagers how exciting hunting could be.</p>
            
            <p>Every year, antelopes migrate from island <code>a</code> to island <code>b</code> (antelopes are not stupid, so they have chosen such <code>a</code> and <code>b</code> that there is at least one path between them). Your troops have prepared a trap, and now you should choose one of the islands of your archipelago to set it. Migration is a rare event that doesn't last long, so you have only one chance to do this right. All the conversations about lousy vegetables really annoy you, so you want to make sure that the trap will be set in such a way that antelopes will definitely fall into it.</p>
            
            <p>Given the number of islands, the bridges configuration, and information about islands <code>a</code> and <code>b</code>, find all the islands lying on every path from <code>a</code> to <code>b</code>. Note that islands <code>a</code> and <code>b</code> shouldn't be included in the answer, since you won't be able to set a trap unnoticed there and the antelopes will be scared away.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>islands = 4,</code></pre>
            <pre><code>bridges = 
            [[0, 1],
             [1, 2],
             [2, 0],
             [2, 3]],</code></pre>
            <p><code>a = 0</code>, and <code>b = 3</code>,</p>
            <p>the output should be</p>
            <pre><code>solution(islands, bridges, a, b) = [2]</code></pre>
            <p>Here's an image showing the bridges between the islands:</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>islands</code></p>
                    <p>The number of islands in your archipelago.</p>
                    <p>Guaranteed constraints: <code>2 ≤ islands ≤ 2000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>bridges</code></p>
                    <p>A list of bidirectional bridges representing your archipelago. For each <code>i</code>, <code>bridges[i]</code> has the format [<code>island1</code>, <code>island2</code>] and represents a bridge connecting <code>island1</code> and <code>island2</code>. There is at most one bridge between each pair of islands, and no bridge connects an island to itself.</p>
                    <p>Guaranteed constraints: <code>1 ≤ bridges.length ≤ 3000</code>, <code>bridges[i].length = 2</code>, <code>0 ≤ bridges[i][j] &lt; islands</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>a</code></p>
                    <p>0-based index of the island where the antelopes start their migration.</p>
                    <p>Guaranteed constraints: <code>0 ≤ a &lt; islands</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>b</code></p>
                    <p>0-based index of the island where the antelopes end their migration.</p>
                    <p>Guaranteed constraints: <code>0 ≤ b &lt; islands</code>, <code>a ≠ b</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>The list of all the islands lying on every path from <code>a</code> to <code>b</code>, sorted in increasing order by their indices.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 62,
        "challenge_name": 'Frustrated Aborigines',
        "description": `
            <p>You are the leader of a tribe living on a remote archipelago. It consists of several islands connected by bridges. All the bridges of your archipelago are narrow, so people often run into each other and fall into the water. To end this once and for all, you decided to make the traffic on all bridges go one-way.</p>
            
            <p>You issued the corresponding decree as soon as this brilliant idea came to your mind, but unfortunately, there is a problem: for some people, some islands are now unreachable, which is quite frustrating for your subjects. To measure the frustration of your tribe, you'd like to calculate the number of pairs (aborigine, island) such that the aborigine can't reach the island.</p>
            
            <p>Given the number of people on each island and the map of the bridges, find the frustration of the aborigines.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>bridges = 
            [[1],
             [2],
             [1]],</code></pre>
            <pre><code>crowd = [4, 1, 2],</code></pre>
            <p>the output should be</p>
            <pre><code>solution(bridges, crowd) = 3</code></pre>
            <p>Here's how your archipelago looks like:</p>
            <p>All the aborigines from the 1st and 2nd islands can't reach the 0th island.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>bridges</code></p>
                    <p>Adjacency list representing your archipelago.</p>
                    <p>Guaranteed constraints: <code>1 ≤ bridges.length ≤ 1000</code>, <code>0 ≤ bridges[i].length ≤ 15</code>, <code>0 ≤ bridges[i][j] &lt; bridges.length</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>crowd</code></p>
                    <p><code>crowd[i]</code> is the number of people stuck on the <code>i</code>th island (0-based).</p>
                    <p>Guaranteed constraints: <code>crowd.length = bridges.length</code>, <code>1 ≤ crowd[i] ≤ 40</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The frustration of your tribe.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 63,
        "challenge_name": 'Civilization Birth',
        "description": `
            <p>You are the leader of a tribe living on a remote archipelago. It looks like your tribe is lagging behind the most modern civilizations, so it's about time you start to get closer to them. In order to do this, you decided to start enforcing new laws.</p>
            
            <p>As a smart ruler, you came up with all the laws yourself and numbered them from 1 to <code>count</code> in the order of decreasing importance. You're also a generous leader, so you allowed the aborigines to choose the laws that should be enacted. Each aborigine chose two laws that are most important to them and voted either for or against them.</p>
            
            <p>Fairness is also one of your many good traits, so you want to satisfy every aborigine on your island. An aborigine will be satisfied if at least one of their proposals is taken, i.e., either one of the laws they voted for is enacted, or one of those they voted against is not enacted.</p>
            
            <p>Given the <code>votes</code> array denoting aborigines' votes and the number of laws <code>count</code>, implement a function that will determine which laws should be enacted to satisfy the entire tribe. If there are several solutions, choose the one with the first law (the most important one) enacted. If there are still several options, choose the one with the first law enacted, and so on.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>count = 2</code></pre>
            <pre><code>votes = 
            [[ 1,  2],
             [ 1, -2],
             [-2, -1]]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(count, votes) = [1, 0]</code></pre>
            <p>The first aborigine wants the first and the second law to be enacted. The second aborigine wants the first law to be enacted and doesn't want the second law to be enacted. The third aborigine doesn't want the first and the second laws to be enacted. The optimal solution is thus to enact the first law and leave out the second law.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>count</code></p>
                    <p>The number of laws.</p>
                    <p>Guaranteed constraints: <code>1 ≤ count ≤ 150</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>votes</code></p>
                    <p><code>votes[i]</code> is the array of wishes of the <code>i</code>th aborigine. <code>votes[i][j]</code> is positive if the <code>i</code>th aborigine wants the law with number <code>abs(votes[i][j])</code> to be enacted and negative otherwise.</p>
                    <p>Guaranteed constraints: <code>1 ≤ votes.length ≤ 150</code>, <code>votes[i].length = 2</code>, <code>1 ≤ abs(votes[i][j]) ≤ count</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array of <code>count</code> numbers. The <code>i</code>th number should be <code>1</code> if the <code>i</code>th law should be enacted and <code>0</code> otherwise. If there is no solution, return an array of size <code>count</code> filled with <code>-1</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 64,
        "challenge_name": 'Unsafe Bridges',
        "description": `
            <p>You are the leader of a tribe living on a remote archipelago. Your tribe has recently decided to find a new, more comfortable and less remote place for everybody and moved to a new archipelago. It's a new and unexplored place that can hide many dangers, so you started off by drawing its map. You got a map of <code>n</code> islands and several bridges connecting them. Of course, not all the islands are necessarily connected: there may be no route from one island to another even through other islands.</p>
            
            <p>Since you're just exploring the archipelago, there are not enough bridges yet, and its connectivity is not perfect. You define the connectivity as the number of unsafe bridges on the archipelago, and call a bridge unsafe if removing it disconnects some pair of previously connected islands. More formally, an unsafe bridge is such a bridge that removing it increases the number of pairs of islands (<code>v</code>, <code>u</code>) such that <code>u</code> is unreachable from <code>v</code>.</p>
            
            <p>You decided to build some new bridges to connect more islands of your new home. To begin with, you drew a plan containing a list of <code>newBridges</code> that you're going to build in the exact given order. Since you're short of resources after all the moving, you'd like to make sure that building each new bridge is really necessary. Given the number of islands <code>n</code> and the existing bridges, find the sum of connectivities of the archipelago after building each bridge from <code>newBridges</code> consequentially modulo <code>10<sup>9</sup> + 7</code> (hopefully this value will be descriptive enough).</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <code>n = 6</code>
            <code>bridges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]</code>
            <code>newBridges = [[2, 4], [1, 3], [3, 5], [0, 5]]</code>
            <p>the output should be</p>
            <pre><code>solution(n, bridges, newBridges) = 6</code></pre>
            <p>After building the <code>1st</code> bridge, connectivity will be equal to <code>3</code>;</p>
            <p>After building the <code>2nd</code> bridge, connectivity will be equal to <code>2</code>;</p>
            <p>After building the <code>3rd</code> bridge, connectivity will be equal to <code>1</code>;</p>
            <p>After building the <code>4th</code> bridge, connectivity will be equal to <code>0</code>.</p>
            <p>So, the summary connectivity is 3 + 2 + 1 + 0 = 6.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of islands in the archipelago.</p>
                    <p>Guaranteed constraints: <code>2 ≤ n ≤ 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>bridges</code></p>
                    <p>Information about the bridges connecting the islands in the archipelago. For each valid <code>i</code>, <code>bridges[i]</code> contains two numbers <code>bridges[i][0]</code> and <code>bridges[i][1]</code> that stand for the IDs of the islands the <code>i</code>th bridge connects.</p>
                    <p>It is guaranteed that there is no more than one bridge between each pair of islands.</p>
                    <p>Guaranteed constraints: <code>0 ≤ bridges.length ≤ 10<sup>5</sup></code>, <code>bridges[i].length = 2</code>, <code>0 ≤ bridges[i][0], bridges[i][1] < n</code>, <code>bridges[i][0] ≠ bridges[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.array.integer <code>newBridges</code></p>
                    <p>Information about the bridges you're going to build. For each valid <code>i</code>, <code>newBridges[i]</code> contains two numbers <code>newBridges[i][0]</code> and <code>newBridges[i][1]</code> that stand for the IDs of the islands the <code>i</code>th new bridge will connect.</p>
                    <p>It is guaranteed that you will not try to build an already existing bridge.</p>
                    <p>Guaranteed constraints: <code>0 ≤ newBridges.length ≤ 10<sup>5</sup></code>, <code>newBridges[i].length = 2</code>, <code>0 ≤ newBridges[i][0], newBridges[i][1] < n</code>, <code>newBridges[i][0] ≠ newBridges[i][1]</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> integer</p>
                    <p>The sum of connectivities of the archipelago after building each bridge from <code>newBridges</code> consequentially modulo <code>10<sup>9</sup> + 7</code>.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 65,
        "challenge_name": 'Ideal Parade',
        "description": `
            <p>You are the leader of a tribe living on an archipelago. Traditionally, each year your tribe organizes a parade to demonstrate the might of your tribal army. During this parade, the procession goes from island to island via one-way bridges. The parade starts and finishes in the capital, located on island 1. Each parade has its own representation that describes the route of the parade as an array of bridges in the order they are crossed, where each bridge is given by its construction year.</p>
            
            <p>This year you'd like to prepare an ideal parade. The parade is ideal if the marching army traverses each bridge exactly once (although it can visit the same island multiple times) and its representation is lexicographically smallest among all such parades.</p>
            
            <p>You would like the parade to go without a hitch, so you need to plan in advance the location of the parade at each given moment of time, assuming that it takes 1 unit of time to cross a bridge. Given the number of islands <code>n</code> and arrays of bridges and times, return the island on which the procession will be in each given moment of time, or an empty array if an ideal parade is not even possible.</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>n = 5</code></pre>
            <pre><code>bridges = 
            [1, 2, 500, 
             1, 5, 1000, 
             2, 3, 2000, 
             3, 1, 2016, 
             4, 1, 1900, 
             5, 4, 2012]</code></pre>
            <pre><code>times = [0, 1, 2, 3, 4, 5, 6]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, bridges, times) = [1, 2, 3, 1, 5, 4, 1]</code></pre>
            
            <p>For</p>
            <pre><code>n = 3</code></pre>
            <pre><code>bridges = 
            [1, 2, 500, 
             1, 3, 1000, 
             2, 3, 2000]</code></pre>
            <pre><code>times = [0, 1, 2]</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, bridges, times) = []</code></pre>
            <p>It's impossible to organize an ideal parade.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The number of islands in your archipelago.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 5000</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>bridges</code></p>
                    <p>A two-dimensional array representing the bridges. Each element of this array is given in the format [<code>island1</code>, <code>island2</code>, <code>year</code>] and represents a bridge from <code>island1</code> to <code>island2</code> (both given 1-based), which was constructed in <code>year</code>.</p>
                    <p>It is guaranteed that none of the bridges were constructed in the same year.</p>
                    <p>Guaranteed constraints: <code>1 ≤ bridges.length ≤ 10<sup>5</sup></code>, <code>triples[i].length = 3</code>, <code>0 ≤ triples[i][j] ≤ 5 · 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> array.integer <code>times</code></p>
                    <p>An array representing the interesting moments of time. For each <code>i</code>, <code>times[i]</code> represents the number of units of time passed after the start of the parade.</p>
                    <p>Guaranteed constraints: <code>1 ≤ times.length ≤ 1000</code>, <code>0 ≤ times[i] ≤ bridges.length</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>Array of the same length as <code>times</code>, where the <code>i</code>th element is the number of the island where the procession will be in <code>times[i]</code> units of time. If an ideal parade is not possible, return an empty array.</p>
                </li>
            </ul>
        `
    },
    {
        "topic_id": 68,
        "order_index": 66,
        "challenge_name": 'Excursion Plan',
        "description": `
            <p>You are the leader of a tribe living on a remote archipelago that consists of <code>mn</code> islands. As an innovative leader, you decided to introduce a brand new address system. In order to do that, you used the first <code>m</code> letters of the alphabet and came up with distinct names of length <code>n</code> for all the islands. The islands received new names according to their enumeration: island 0 got the lexicographically smallest name, island 1 got the next name in the lexicographical order, and so on, with the island with number <code>mn - 1</code> having the lexicographically greatest name.</p>
            
            <p>To make your archipelago look perfect on the map, you also reconstructed the bridges: now there is a bridge between a pair of islands (<code>v</code>, <code>u</code>) if and only if the last <code>n - 1</code> letters of <code>v</code>'s name are equal to the first <code>n - 1</code> letters of <code>u</code>'s name (for example, between <code>abca</code> and <code>bcaa</code>). The bridges are narrow, so they are only passable in one direction: from <code>v</code> to <code>u</code>.</p>
            
            <p>The ambassador of a foreign tribe is visiting your archipelago, and you are planning to take the guests on the best excursion of their lives. The ideal excursion that you want to come up with visits each island exactly once, and its description (concatenated names of the islands in the order they are visited) is lexicographically smallest. Your task is to find the plan of such an excursion, i.e., all the islands in the order they should be visited. Since there are many islands in your archipelago, you will need only a part of the plan at a time. Return the islands in this plan from <code>l</code>th to <code>r</code>th (0-based, both inclusive).</p>
            
            <h3>Example</h3>
            
            <p>For</p>
            <pre><code>n = 2</code></pre>
            <pre><code>m = 3</code></pre>
            <pre><code>l = 0</code></pre>
            <pre><code>r = 8</code></pre>
            <p>the output should be</p>
            <pre><code>solution(n, m, l, r) = [0, 1, 3, 2, 7, 4, 5, 8, 6]</code></pre>
            <p>As you can see, <code>0 → 1 → 3 → 2 → 7 → 4 → 5 → 8 → 6</code> is a correct excursion plan.</p>
            
            <h3>Input/Output</h3>
            <ul>
                <li><p><span>[execution time limit]</span> 4 seconds (js)</p></li>
                <li><p><span>[memory limit]</span> 1 GB</p></li>
                <li>
                    <p><span>[input]</span> integer <code>n</code></p>
                    <p>The length of the island names.</p>
                    <p>Guaranteed constraints: <code>1 ≤ n ≤ 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>m</code></p>
                    <p>The number of different letters used to build island names.</p>
                    <p>Guaranteed constraints: <code>1 ≤ m ≤ 10<sup>5</sup></code>, <code>1 ≤ mn + 1 · n ≤ 10<sup>5</sup></code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>l</code></p>
                    <p>The left bound of the answer part you want to find.</p>
                    <p>Guaranteed constraints: <code>0 ≤ l < mn</code>.</p>
                </li>
                <li>
                    <p><span>[input]</span> integer <code>r</code></p>
                    <p>The right bound of the answer part you want to find.</p>
                    <p>Guaranteed constraints: <code>l ≤ r < mn</code>.</p>
                </li>
                <li>
                    <p><span>[output]</span> array.integer</p>
                    <p>The part of the lexicographically smallest excursion plan, containing only islands of the optimal plan from <code>l</code>th to <code>r</code>th.</p>
                </li>
            </ul>
        `
    }
]

exports.seed = async function (knex) {
    await knex('challenges').insert(challenges)
}