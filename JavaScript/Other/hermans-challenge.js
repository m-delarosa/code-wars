// Given two strings, test whether or not they are anagrams of each other, return boolean value

/* Note: The solution below assumes input strings are single word anagrams, but it would be possible
   for me to create a solution that takes into accounts spaces and multiple words. */

// Test Variables
// Testing for word length discrpency edge case, should return false
const edgeCaseTestStr1 = "longer"
const edgeCaseTestStr2 = "short"

// Testing correct anagram pairing for capitilization, should return true
const positiveTestStr1 = "Taste"
const postiveTestStr2 = "State"

// Testing incorrect anagram pairing, should return false
const negativeTestStr1 = "racecar"
const negativeTestStr2 = "raceBar"

/* Pseudo Code
    Handle Edge Case: First check to see if the length of each string is equal, if false, immediately return false

    Otherwise, create an array out of the lowercase version of each character contained in input strings...
    sort them to establish a comparable syntax between the two

    Return the result of a conditional, which compares each array converted back to a string
    ** We cannot simply compare the two arrays we created above, becuase it will fail to detect anagrams since...
       arrays do not take into account syntax of list when using comparisoin operator. Therefore,  they must be...
       compared as strings.
*/

const checkAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false
    }

    const arr1 = str1.toLowerCase().split("").sort()
    const arr2 = str2.toLowerCase().split("").sort()

    return arr1.join("") === arr2.join("")
};

//Tests
console.log("Edgecase test, should return false:", checkAnagrams(edgeCaseTestStr1, edgeCaseTestStr2))
console.log("Positive test, should return true:", checkAnagrams(positiveTestStr1, postiveTestStr2))
console.log("Negative test, should return false:", checkAnagrams(negativeTestStr1, negativeTestStr2))
