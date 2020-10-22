// https://www.codewars.com/kata/5715eaedb436cf5606000381

// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

/* Pseudo
If array is empty or array contains numbers that are all less than 0, return 0
Instiate sum variable to 0

Iterate over the array, for each num that is > 0, add to sum
return sum
*/

const positiveSum = arr => {
    if (arr.length === 0 || arr.every(num => num < 0)) return 0

    return arr.reduce((sum, num) => {
        // console.log("sum", sum)
        // console.log("num", num)
        // console.log("sum + num", sum + num)
        if (num > 0) return sum + num
        return sum
    }, 0)
}

//My final solution
const positiveSum = arr => {
    if (arr.length === 0 || arr.every(num => num < 0)) return 0

    return arr.reduce((sum, num) => {
        return num > 0
            ? sum + num
            : sum
    }, 0)
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15)
console.log(positiveSum([1, -2, 3, 4, 5]), 13)
console.log(positiveSum([]), 0)
console.log(positiveSum([-1, -2, -3, -4, -5]), 0)
console.log(positiveSum([-1, 2, 3, 4, -5]), 9)