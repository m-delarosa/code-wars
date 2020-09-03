// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// // scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
    //Create an empty comparison string.
    //Look at first character in str2, can it be found in str1?
    //If so, remove character from str2 and += to comparison string
    //After iteration of str2 is complete: Return str2 === comparisonString?
}

function scramble(str1, str2) {
    let comparisonStr = ""

    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i])) {
            comparisonStr += str2[i]
            str1 = str1.replace(str2[0], "")
        }
    }

    return str2 === comparisonStr
}

//Code Garden Solution
function scramble(str1, str2) {
    // a place to store str1 letter counts

    //iterate over str1
    //set a property on the object that is the current letter
    //if the property didn't exist, set it to 1
    // otherwise increment the value

    //iterate over str2
    //if the current letter is in the object and the count is 
    //greater than 0
    //decrement the count
    //else break out of the loop and return false

    //return true
}

function scramble(str1, str2) {
    const letterCounts = {}

    for (let i = 0; i < str1.length; i++) {
        const currentLetter = str1[i]
        letterCounts[currentLetter] = letterCounts[currentLetter] || 0
        letterCounts[currentLetter]++
    }

    for (let i = 0; i < str2.length; i++) {
        const currentLetter = str2[i]
        if (letterCounts[currentLetter] > 0) {
            letterCounts[currentLetter]--
        } else return false
    }

    return true
}

function scramble(str1, str2) {
    const letterCounts = str1.split('').reduce((letterCounts, currentLetter) => {
        letterCounts[currentLetter] = letterCounts[currentLetter] || 0
        letterCounts[currentLetter]++
        return letterCounts
    }, {})

    return str2.split('').every((currentLetter) => {
        if (letterCounts[currentLetter] > 0) {
            letterCounts[currentLetter]--
            return true
        } else return false
    })

}

//Final solution
function scramble(str1, str2) {
    const letterCounts = Array.prototype.reduce.call(str1, (letterCounts, currentLetter) => {
        letterCounts[currentLetter] = letterCounts[currentLetter] || 0
        letterCounts[currentLetter]++
        return letterCounts
    }, {})

    return Array.prototype.every.call(str2, (currentLetter) => {
        if (letterCounts[currentLetter] > 0) {
            letterCounts[currentLetter]--
            return true
        } else {
            return false
        }
    })
}