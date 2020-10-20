// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

/* Pseudo Code
    Create a dictionary to store alpha values.
    Iterate over the string or turn it into an array
*/


const text = "The sunset sets at twelve o' clock."

function alphabetPosition(text) {
    const lowerCaseText = text.toLowerCase().split('')
    const result = []
    // console.log("lowerCaseText", lowerCaseText)
    // console.log("a".charCodeAt())

    lowerCaseText.forEach(letter => {
        // console.log(/[a-z]/.test(letter))
        if (/[a-z]/.test(letter)) {
            result.push(letter.charCodeAt() - 96)
        }
    })


    return result.join(' ')
}

//My first solution without console logs
function alphabetPosition1(text) {
    const lowerCaseText = text.toLowerCase().split('')
    const result = []

    lowerCaseText.forEach(letter => {
        if (/[a-z]/.test(letter)) {
            result.push(letter.charCodeAt() - 96)
        }
    })

    return result.join(' ')
}

//Code Golf Attempt
const alphabetPositionCG = text =>
    text.toLowerCase()
        .split('')
        .filter(l => /[a-z]/.test(l))
        .map(l => l.charCodeAt() - 96)
        .join(' ')


console.log("Returns", alphabetPositionCG(text))
console.assert(alphabetPositionCG(text) === "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")