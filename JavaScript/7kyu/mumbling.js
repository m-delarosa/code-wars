// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

//first solution
function accum(input) {
    let result = ''

    for (let index = 0; index < input.length; index++) {
        const currentLetter = input[index]
        const totalCount = index + 1
        for (let counter = 0; counter < totalCount; counter++) {
            if (counter == 0) {
                result += currentLetter.toUpperCase()
            } else {
                result += currentLetter.toLowerCase()
            }
        }
        if (index != input.length - 1) {
            result += '-'
        }
    }
    return result
}

//second solution with reduce
const accum = (input) => {
    let result = ''
    input.split('').forEach((currentLetter, index) => {
        const totalCount = index + 1
        for (let counter = 0; counter < totalCount; counter++) {
            if (counter == 0) {
                result += currentLetter.toUpperCase()
            } else {
                result += currentLetter.toLowerCase()
            }
        }
        if (index != input.length - 1) result += '-'
    })
    return result
}

//Best Solution, more computationally heavy.
const accum = (input) => {
    return input.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-')
}    
