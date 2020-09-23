// In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.

// Examples:

// [1, -1, 2, -2, 3] => 3

// 3 has no matching negative appearance

// [-3, 1, 2, 3, -1, -4, -2] => -4

// -4 has no matching positive appearance

// [1, -1, 2, -2, 3, 3] => 3

// (the only-positive or only-negative integer may appear more than once)

// Good luck!

/*
function solve(arr){
    //Iterate over the array, for each element, check to see if it's negative or positive counterpart exists
      //If yes, continue iteration
      //If no, return the value
};
*/

const singlePositiveTest = [1, -1, 2, -2, 3]
const singleNegativeTest = [-3, 1, 2, 3, -1, -4, -2]

const isPostive = num => Math.sign(num) === 1
// console.log(isPostive(-1))

//For loop solution, 929ms
const solve = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (Math.sign(arr[i]) === 1) {
            if (!arr.includes(-arr[i])) return arr[i]
        }
        else if (!arr.includes(Math.abs(arr[i]))) return arr[i]
    }
}

//Switch solution, 953ms
// const solveSwitch = arr => {
//     result = 0

//     for (let i = 0; i < arr.length; i++) {
//         switch (Math.sign(arr[i])) {
//             case 1:
//                 if (!arr.includes(-arr[i])) result = arr[i]
//             case -1:
//                 if (!arr.includes(Math.abs(arr[i]))) result = arr[i]
//         }
//     }

//     return result
// }

// console.log(solveSwitch(singlePositiveTest))

//forEach Solution, 955ms
const solveForEach = arr => {
    let result = 0

    arr.forEach(num => {
        if (Math.sign(num) === 1) {
            if (!arr.includes(-num)) result = num
        }
        else if (!arr.includes(Math.abs(num))) result = num
    })

    return result
}

// console.log("forEach Solution", solveForEach(singleNegativeTest))



//reduce solution, could not get it to work, not sure why.
//Console logs vsalue of accumalator, but function does not return it 
//for some reason.

// const solveReduce = arr => {
//     return arr.reduce((result, currentValue) => {
//         if (Math.sign(currentValue) === 1) {
//             if (!arr.includes(-currentValue)) result = currentValue
//         } else {
//             if (!arr.includes(Math.abs(currentValue))) result = currentValue
//         }
//         console.log(result)
//     }, 0)
// }

// console.log("Solution", solveReduce(singlePositiveTest))

//Best Solution
const solveBest = array => array.find(value => !array.includes(-value))

//Reduce Example Solution
const solveReduceBest = arr => [...new Set(arr)].reduce((a, c) => a + c)

const solveDisect = arr => {
    //Looks like they create a set to get ride of any repeat numbers that may mess with the reduce function accumulator
    return [...new Set(arr)].reduce((a, c) => {
        console.log("Accumalator", a)
        console.log("CV", c)
        console.log("Accum + CV", a + c)

        return a + c
    })
    //OK, so this works because the author knows that only one value will not have it's negative or positive counterpart. What ever the result of summing the set of numbers is, will be the value that does not have it's counterpart!
}

console.log("SolveDisect", solveDisect(singleNegativeTest))