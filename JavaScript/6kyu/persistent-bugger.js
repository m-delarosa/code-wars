/*
https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

Algo
    Multiply each number times each other, if sum is not a single digit, perform the function again
  
Pseudo Code
    Instantiate a digits array = the number to a string.split('')
    Instantiate a counter variable
    Iterate over the array, multiplying all numbers and incrementing the counter variable
    If the result.length > 1 {call the function again}
    Return the counter variable
*/

//My Solution
function persistence(num) {
    if (num < 10) return 0
    let digits = num.toString().split('')
    let result = 10
    let counter = 0
    
    while (result > 9) {
        result = digits.reduce((sum, curNum) => sum * curNum)
        digits = result.toString().split('')
        counter++
    }

    return counter
}

//Best Practice
function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
        times++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString();
        //["x", "x", "x"].[x,x,x].(sum of multiplied function).("sum converted to string") <- So it can be used again as num in the while loop.
    }
    
    return times;
}