// https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript

// Too long, didn't read
// You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, the the next greatest, and so on...

// More info
// The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.

// Examples
// []  -->  []
// [1]  -->  [1]
// [2, 1]  -->  [1, 2, 1]
// [1, 3, 2]  -->  [1, 2, 3, 2, 1]
// [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]

const emptyArr = []
const data = [-8, 42, 18, 0, -16]

function mirror(data) {
    let mirrorArr = []
    if (data.length === 0) return mirrorArr

    console.log("data b4", data)


    const ascArr = [...data].sort((a, b) => a - b)
    const desArr = [...data].sort((a, b) => b - a)
    ascArr.pop()

    console.log("data after", data)
    console.log("ascending", ascArr)
    console.log("descending", desArr)

    mirrorArr = ascArr.concat(desArr)

    return mirrorArr
}

console.log(mirror(data))
console.assert(mirror(data) == [-16, -8, 0, 18, 42, 18, 0, -8, -16])

// Cleaned up version
function mirror(data) {
    let mirrorArr = []
    if (data.length === 0) return mirrorArr
    const ascArr = [...data].sort((a, b) => a - b)
    const desArr = [...data].sort((a, b) => b - a)
    ascArr.pop()
    mirrorArr = ascArr.concat(desArr)
    return mirrorArr
}