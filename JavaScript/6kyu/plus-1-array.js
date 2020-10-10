// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.

// Examples
// For example the array [2, 3, 9] equals 239, adding one would return the array [2, 4, 0].

// [4, 3, 2, 5] would return [4, 3, 2, 6]

/* Pseudo Code
(May have to turn into strings in between each convertion)
    Take the array and join it so it turns into a number.
    Increment that number by 1
    Turn the result into an array and return
*/

const arr = [2, 3, 9]

function upArray(arr) {
    if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) return null
    const arrNum = parseInt(arr.join(''))
    const result = (arrNum + 1).toString().split('')
    return result.map(num => parseInt(num))
}

console.log(upArray(arr))
