// https://www.codewars.com/kata/5f8341f6d030dc002a69d7e4/train/javascript

// Given an array of numbers and an index, return the index of the least number larger than the element at the given index, or -1 if there is no such index ( or, where applicable, Nothing or a similarly empty value ).

// Notes
// Multiple correct answers may be possible. In this case, return any one of them.
// The given index will be inside the given array.
// The given array will, therefore, never be empty.

// Example
// leastLarger( [4, 1, 3, 5, 6], 0 )  =>  3
// leastLarger( [4, 1, 3, 5, 6], 4 )  => -1

const a = [4, 1, 3, 5, 6]
const i = 4

//Performance w/o if statement on line 22: 874
//Performance w/ line 22: 937
function leastLarger(a, i) {
    const targetVal = a[i]
    const largerVals = a.filter(num => num > targetVal)
    // if (largerVals.length === 0) return -1
    const leastLargeVal = Math.min(...largerVals)
    return a.findIndex(num => num === leastLargeVal)
}

console.log("Returns", leastLarger(a, i))

/*
Learns:

The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.

The most common way to find the min or max of an array is to pass in the array using the spread operator into Math.min or max.
Though for large data sets, the most performant would be a for loop or Math.min.apply
ref: https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621
*/