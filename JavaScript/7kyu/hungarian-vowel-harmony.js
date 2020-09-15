// Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

// Vowel Harmony Rules (simplified)
// When the last vowel in the word is

// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak

// function dative(word) {
//     Take the word string, split it into an array and then reverse it. 
//     Iterate over the array and find the first vowel that is included in our vowel set. Return this vowel.
//     List conditions if vowel found in set 1 add "nek" to original string, otherwise add "nak".
//     return ''
// }

const word = "ablak"

//Solution 1 961ms
const dative = word => {
    const allVowels = "eéiíöőüűaáoóuú"
    const frontVowels = "eéiíöőüű"
    const reverseWord = word.split('').reverse()
    const lastVowel = reverseWord.find(char => allVowels.includes(char))

    return frontVowels.includes(lastVowel)
        ? word += "nek"
        : word += "nak"
}

//Solution 2 Code Golf 950
const dative2 = word => {
    return "eéiíöőüű".includes(word.split('').reverse().find(char => "eéiíöőüűaáoóuú".includes(char))) ? word += "nek" : word += "nak"
}

console.log(dative2(word))