//Given an array of numbers, write some code to loop through the array, and print out the smallest and largest numbers in the array.

//For example, if given the array ``[1, 4, 11, 2, 37, -4]``, your code should print out ``-4, 37``.
// Starting array

let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

maxNum = array.sort(function(a, b){return b-a});

bigNum = minNum[0]

minNum = array.sort(function(a, b){return a-b});

smallNum = maxNum[0]

console.log(bigNum , smallNum)