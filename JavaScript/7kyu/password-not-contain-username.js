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
        console.log("substring", short.substring(i, i + limit))
        console.log("loop condition", long.includes(short.substring(i, i + limit)))

        if (long.includes(short.substring(i, i + (limit - 1)))) return false
    }

    return true
}

// console.log("Returns", validate(username, password))
console.log("Returns", validate(finalU, finalP))
