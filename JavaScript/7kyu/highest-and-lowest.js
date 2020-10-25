// https://www.codewars.com/kata/554b4ac871d6813a03000035

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number (in a string, seperated by a space).

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

/* Pseudo Code
Split the string into an array, sort the array.
return a template literal string with referencing the first and last index of the array in correct places.
*/

const numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"

function highAndLow(numbers) {
    console.log(numbers)
    console.log(numbers.split(" ").sort((a, b) => a - b))
    console.log(numbers)

    const sortedNums = numbers.split(" ").sort((a, b) => a - b)
    return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`
}

console.log("returns", highAndLow(numbers))

//final
function highAndLow(numbers) {
    const sortedNums = numbers.split(" ").sort((a, b) => a - b)
    return `${sortedNums[sortedNums.length - 1]} ${sortedNums[0]}`
}

//Math.max.apply example
function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number)
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers)
}

//Min Max without apply
function highAndLow(numbers) {
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}