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

//Learns
//parseInt in this case returns invalid numbers for some reason

const arr = [2, 3, 9]

function upArray(arr) {
    if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) return null
    const arrNum = parseInt(arr.join(''), 10)
    const result = (arrNum + 1).toString().split('')
    return result.map(num => parseInt(num))
}

function upArray2(arr) {
    if (arr.length === 0 || arr.some(num => num < 0 || num > 9)) return null
    const c = arr[arr.length - 1]
    console.log("array", arr)
    console.log("c", c)

    const defualtCase = (c) => {
        arr[arr.length - 1] = c + 1
        return arr
    }

    const nineCase = (c) => {
        arr[arr.length - 1] = 0
        if (arr[arr.length - 2] = 9) {

        }
        arr[arr.length - 2] = arr[arr.length - 2] + 1
        return arr
    }

    switch (c) {
        case 9: return nineCase(c)
        default: return defualtCase(c)
    }
}

//Found Solution 1 using "big number"
const BigNumber = require('bignumber.js')

const upArray = arr =>
    arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
        ? null
        : (new BigNumber(arr.join('')).plus(1))
            .toPrecision()
            .split('')
            .map(Number)

// console.log(upArray(arr))

//Best Solution without a library
/* 
Pseudo Code
    If not an array or array is empty return null
    Iterates over each value in array
        If value is negative or not a number or larger than 9 return null

    Iterate over the array again, this time setting the counter to the final el in array and reducing from there.
        If value is not 9 simply increment that value by 1 than break out of the loop and return modified arr
        Else value is 9, so we reassign value to 0
        If we've reached the first value in array, add the number 1 to beginning of array.
        Move onto the next value in array
*/
function upArray(arr) {


    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1
            break
        } else {
            arr[j] = 0
        }

        if (j === 0) {
            arr.unshift(1)
        }
    }


    return arr
}
console.log("Function Returns", upArray2(arr))
