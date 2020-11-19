/*
Challenge: For array A and B, return an array that contains values represented in both A and B.
*/

/*Pseudo for findCommonValues1: O(n2) Time Complexity (Quadratic)
Mutate arrays into sets in order to remove any duplicates that may be contained in each array. All values will be unique.
Return array product of filtering list "a" to values that also exist in list "b"
*/

const findCommonValues1 = (a, b) => {
    setA = [...new Set(a)]
    setB = [...new Set(b)]
    return setA.filter((num) => setB.includes(num))
}

//Tests arrays of different lengths and with solely unique values
console.log(findCommonValues1([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]))
console.assert(findCommonValues1([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]), [2, 4, 6])

//Test arrays of different lengths when redundant values occur in both arrays (see value 2)
console.log(findCommonValues1([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]))
console.assert(findCommonValues1([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]), [2, 4, 6])

/*Pseudo for findCommonValues2: O(n) Time Complexity (Linear)
Some logic as above, but uses the Set prototypes .had() method to check for prescence of elements of other Set instead of .includes
*/

const findCommonValues2 = (a, b) => [...new Set(a)].filter(Set.prototype.has, new Set(b))

//Tests for findCommonValues2

//Tests unique values and arrays of different length
console.log(findCommonValues2([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]))
console.assert(findCommonValues2([1, 2, 3, 4, 5, 6], [2, 4, 6, 8]), [2, 4, 6])

//Test arrays of different lengths when redundant values occur in both arrays (see value 2)
console.log(findCommonValues2([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]))
console.assert(findCommonValues2([1, 2, 3, 2, 4, 5, 6], [2, 4, 2, 6, 8]), [2, 4, 6])