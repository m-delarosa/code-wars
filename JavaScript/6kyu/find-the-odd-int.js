// https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

/* Pseduo
    Create an empty hashMap = integerMap

    Iterate over the array of integers
        If the interger already exists in the array as a property add 1
        Else set that property equal to 1

    Iterate over the hashMap
        If a property whose value when divided by 2 has a remainder that does not equal 0
            return that property as a number
*/

function findOdd(A) {
    let integerMap = {}

    A.forEach(int => {
        integerMap[int]
            ? integerMap[int] += 1
            : integerMap[int] = 1
    })

    for (const prop in integerMap) {
        if (integerMap[prop] % 2 === 1) return parseInt(prop)
    }
}

//reduce solution, using XOR bitwise operator
const findOdd = (xs) => xs.reduce((a, b) => a ^ b)

//.find() solution
function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
