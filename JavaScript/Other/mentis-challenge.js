/*
For array A and B, return an array that contains values represented in both A and B.
*/

const findCommonValues = (a, b) => {
    let result = []
    let shortArr, longArr

    if (a.length >= b.length) {
        shortArr = b
        longArr = a
    } else {
        shortArr = a
        longArr = b
    }

    result = shortArr.filter((num) => longArr.includes(num))

    return result
}

//Tests for unique values within each array
console.log(findCommonValues([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]))
console.assert(findCommonValues([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]), [2, 4, 6])

//Test for when redudant values occur in both arrays (2)
console.log(findCommonValues([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]))
console.assert(findCommonValues([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]), [2, 4, 6]) 