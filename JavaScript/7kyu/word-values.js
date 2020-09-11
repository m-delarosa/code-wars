// Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.

// You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

// nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

// "abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

// Input will only contain lowercase characters and spaces.

// Good luck!

const letterValues = {
    " ": 0,
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}

const str1 = "abc abc"

const findWordValue = str => {
    return [...str].reduce((wordValue, currentLetter) => {
        return wordValue + letterValues[currentLetter]
    }, 0)
}

function wordValue(a) {
    return a.map((word, i) => {
        return findWordValue(a[i]) * (i + 1)
    })
}

//Best Solution
function wordValue2(a) {
    return a.map((s, i) => s.replace(/\s/g, '')
        .split('')
        .map(b => (b.charCodeAt() - 96))
        .reduce((acc, cur) => (acc += cur), 0) * (i + 1))
}

const str3 = ["a", "b", "c", "a", "b", "c"]

function wordValue2(a) {
    return a.map((s, i) => {
        console.log(s.charCodeAt() - 96)
        //They finds all the spaces and removes them from the string.
        //They split the result into an array 
        // ["a", "b", "c", "a", "b", "c"]
        //They map over the resulting array again. This time they reference each characters code number and then minus 96 to adjust it to our cypher
        //Result = [1, 2, 3, 1, 2, 3]
        // Then they do a simple reduce like the one I use to accumalate and return it in the original map.
    })
}

const str2 = ["abc abc", "codewars"]
wordValue2(str3)

//Another solution
function wordValue3(a) {
    return a.map((s, i) => (i + 1) * s.split``.reduce((s, n) => s + 1 + 'abcdefghijklmnopqrstuvwxyz'.indexOf(n), 0))
}