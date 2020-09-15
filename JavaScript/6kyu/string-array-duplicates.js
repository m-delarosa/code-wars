// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!

function dup0(s) {
    //Iterate over string C. For each letter check if next letter is the same. 
    //If true, remove that letter from the original string.
    //Return the final string.
};

const str = "ccooddddddewwwaaaaarrrrsssss"
const s = ["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"]

//Solution 1 with help function
const removeDuplicates = str => {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i + 1]) result += str[i]
    }
    return result
}

const removeDuplicates2 = str => {
    return str.split('').filter((c, i, arr) => {
        return c !== arr[i - 1]
    }).join('')
}

const dup = s => s.map(str => removeDuplicates(str))

//Solution 2 refactor

const dup2 = s => {
    return s.map(str => {
        let result = ""
        for (let i = 0; i < str.length; i++) {
            if (str[i] !== str[i + 1]) result += str[i]
        }
        return result
    })
}


//Test
console.log(removeDuplicates2(str))