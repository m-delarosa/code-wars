// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//Solution where we chain applicatives
function getCount(str) {
    return Array.from(str).filter(letter => 'aeiou'.includes(letter)).length
}

//Regex solution. "g" makes it search the whole string. "i" makes it case insensitive. .match returns the # of matches.
function getVowels(str) {
    var m = str.match(/[aeiou]/gi)
    return m === null ? 0 : m.length
}

//Best solution on CodeWars
function getCount(str) {
    return (str.match(/[aeiou]/ig) || []).length
}