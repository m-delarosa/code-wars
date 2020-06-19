// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

// function toCamelCase(str) {

//     return str.replace(/(?:^\w|[A-Z]|\b\w)/g, fixCapitilization(word, index) {
//         return index === 0 ? word.toLowerCase() : word.toUpperCase()
//     }).replace(/\s+/g, '').replace(/[\W_]+/g, '')

// }

str = "The_stealth_warrior"

function toCamelCase(str) {

    if (str === '') { return str }
    else {
        if (str.charAt(0) === str.charAt(0).toUpperCase) { console.log("Write a new function!") }
        else {
            function toWords(str) {
                const regex = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g
                return str.match(regex)
            }

            function toNewString(array) {
                let result = ""

                for (let i = 0; i < array.length; i++) {
                    let currentStr = array[i]
                    let tempStr = currentStr.toLowerCase()
                    if (i != 0) {
                        tempStr = tempStr.substr(0, 1).toUpperCase() + tempStr.substr(1)
                    }
                    result += tempStr
                }
                return result
            }
            return toNewString(toWords(str))
        }
    }
}

console.log(toCamelCase(str))