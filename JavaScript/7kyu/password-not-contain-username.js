// https://www.codewars.com/kata/5c511d8877c0070e2c195faf/train/javascript

// You are writing a password validator for a website. You want to discourage users from using their username as part of their password, or vice-versa, because it is insecure. Since it is unreasonable to simply not allow them to have any letters in common, you come up with this rule:

// For any password and username pair, the length of the longest common substring should be less than half the length of the shortest of the two.

// In other words, you won't allow users to have half their password repeated in their username, or half their username repeated in their password.

// Write a function validate(username, password) which returns true if your rule is followed, false otherwise.

// Assume:

// Both the username and the password may contain uppercase letters, lowercase letters, numbers, spaces, and the following special/punctation characters: !@#$%^&*()_+{}:"<>?[];',.
// The username and password will each be less than 100 characters.

/*
Pseudo
Identify the shortest string of the two and assign short and long variables to each
    password.length > username.length
        ? const short = username
        : const short

*/

const username = "MASH"
const password = "M*A*S*H"

const finalU = "aa*aa"
const finalP = "aaaaaa"

const noncap = "a"
const cap = "A"

function validate(username, password) {
    let short, long

    if (username.length >= password.length) {
        short = password
        long = username
    } else {
        short = username
        long = password
    }

    console.log("short", short)
    console.log("long", long)


    const limit = Math.ceil(short.length / 2)
    console.log("limit", limit)

    if (short.length === 1) {
        return long.includes(short)
            ? false
            : true
    }

    for (let i = 0; i <= short.length - limit; i++) {
        console.log("substring", short.substr(i, limit))
        console.log("loop condition", long.includes(short.substr(i, limit)))

        if (long.includes(short.substr(i, limit))) return false
    }

    return true
}

//Answer
const validate2 = (username, password) => {
    // Does the same thing I do rounding up where there is a remainder to find half 
    const half = Math.ceil(Math.min(username.length, password.length) / 2)
    console.log("Half", half)
    //Chooses to iterate over the password everytime for some reason
    //I was choosing to iterate over the shorter one because I figured it would be more efficient.
    //"MASH" "M*A*S*H" example loop
    // 0 - substring(0, 2) => M*
    // 1 - substring(1, 2) => *
    for (let i = 0; i <= password.length - half; i++) {
        console.log("substring", password.substr(i, half))
        if (username.includes(password.substr(i, half))) return false
    }
    return true
}

console.log("Returns", validate(username, password))
// console.log("Returns", validate2(noncap, cap))
// console.log("Returns", validate2(username, password))
