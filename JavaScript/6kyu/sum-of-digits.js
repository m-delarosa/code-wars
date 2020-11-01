// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

/* Pseudo (can possibly make a recursive solution for this)
Convert the integer into an array.

Return Reduced array to sum,

If result of reduce is > 9, run the function again.
*/

//First Solution
function digital_root(n) {
    const numArray = n.toString().split('').map(str => parseInt(str))
    const result = numArray.reduce((sum, num) => sum + num, 0)
    return result > 9 ? digital_root(result) : result
}

//Best Practices and Most Clever
//Purely mathematical solution
function digital_root(n) {
    return (n - 1) % 9 + 1
}
