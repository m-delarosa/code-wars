// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

/* Pseudo
    Instantiate an array of lowercase vowel strings = vowelsArr
    Instantiate an array of the strings characters = strArr

    Iterate over the array, .filter any characters.downCase() that are .includes in vowelsArr
    Return the array as a string
*/

//Convert to array, filter based on inclusion, 773ms
function disemvowel(str) {
    const vowelsArr = ["a", "e", "i", "o", "u"]
    const strArr = str.split("")

    return strArr.filter(char => !vowelsArr.includes(char.toLowerCase())).join("")
}

//Using Regex and Replace, 751ms
const disemvowel2 = str => str.replace(/[aeiou]/ig, '')

console.log(disemvowel2("This website is for losers LOL!"),
    "Ths wbst s fr lsrs LL!")