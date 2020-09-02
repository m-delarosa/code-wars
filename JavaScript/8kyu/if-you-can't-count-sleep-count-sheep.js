// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//My solution
const countSheep = num => {
    let result = ''
    for (i = 1; i <= num; i++) {
        result += `${i} sheep...`
    }
    return result
}

//While Loop Solution
const countSheep = num => {
    let result = ''
    let i = 1
    while (i <= num) {
        result += `${i} sheep...`
        i++
    }
    return result
}

//Array method
const countSheep = num => {
    let result = ''
    Array.from({ length: num }, (_, i) => {
        result += `${i} sheep...`
    })
    return result
}

//Map method
const countSheep = num => {
    return Array
        .from({ length: num })
        .map((v, i) => `${i + 1} sheep...`)
        .join("")
}

//Recursive Solution
const countSheep = num => {
    if (num === 0) return ""
    return countSheep(num - 1) + `${num} sheep ...`
}

//Best Solution
var countSheep = function (num) {
    let str = ""
    for (let i = 1; i <= num; i++) { str += `${i} sheep...` }
    return str
}