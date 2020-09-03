// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples:

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]

var number = function (array) {
    //your awesome code here
}

var number = function (array) {
    //Check to see if it's an empty array, if so return []
    if (array = []) return array
    let result = []

    //Iterate over the array for each value prepend 1: 2: 3: in the string before it. Set counter on 1. Modify length condition.
    //

    for (let i = 1; i < array.length + 1; i++) {
        result.push(`[i]: array[i]`)
    }

    return result
}

//First solution 928ms
var number = function (array) {
    let result = []

    for (let i = 1; i < array.length + 1; i++) {
        result.push(`${[i]}: ${array[i - 1]}`)
    }

    return result
}

//Second solution (map) 949ms
var number = function (array) {
    if (array === []) return array
    let count = 0

    return array.map(value => {
        count++
        return `${[count]}: ${array[count - 1]}`
    })
}

//Third solution (reduce)
var number = function (array) {
    if (array === []) return array
    let count = 0

    return array.reduce((result, currentValue) => {
        count++
        result.push(`${[count]}: ${currentValue}`)
    }, [])
}

//Best solution 1082ms ... 979
//If you supply an empty array to a .map it will return an empty array
let number = (a) => a.map((v, i) => `${i + 1}: ${v}`)