// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

/*Pseudo

Check to see if the last character in string is a number
    If not return the string + 1

If finalChar === 9
    Use Regex to grab the final set of numbers. store it to variable
    Slice the numbers out of the array
    increment the number by 1
    return `${characters}${newNumber}`
*/

const str0 = "foo00999"

// function incrementString(str) {
//     const finalChar = str.charAt(str.length - 1)
//     //If final char in string is not a number... the regex prevents us from having to turn the string into an array.
//     if (!/^-?[\d.]+(?:e-?\d+)?$/.test(finalChar)) return `${str}1`
//     if (finalChar != 9) {
//         let num = parseInt(finalChar)
//         return `${str.slice(0, -1)}${num + 1}`
//     }
//     const number = parseInt(str.match(/\d+$/))
//     const firstNum = str.match(/\d+$/)[0][0]
//     console.log(str.match(/\d+$/)[0][0])
//     console.log(number)
//     console.log(number.toString().charAt(0))
//     const characters = str.split('').filter(el => !(parseInt(el) == el)).join('')
//     if (firstNum == 0) return `${characters}0${number + 1}`
//     return `${characters}${number + 1}`
// }

function incrementString(str) {
    var c = str[str.length - 1]
    console.log("c", str.substring(0, str.length - 1))
    switch (c) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8': return str.substring(0, str.length - 1) + (parseInt(c) + 1)
        case '9': return incrementString(str.substring(0, str.length - 1)) + 0
        default: return str + "1"
    }
}
console.log(incrementString(str0))
