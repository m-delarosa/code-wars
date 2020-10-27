// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// Pseudo => return str slice from 1 to the final character in string

const removeChar = str => str.slice(1, str.length - 1)

//Use negative index
const removeChar = str => str.slice(1, -1)

//Manipulate as an array
function removeChar(str) {
    str1 = str.split('')
    str1.shift()
    str1.pop()
    return str1.join('')
}

// Return as a substr
function removeChar(str) { return str.substr(1, str.length - 2) }