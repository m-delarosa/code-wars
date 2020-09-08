// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    //may the code be with you
}

function squareDigits(num) {
    //take num and turn it into an array,
    //iterate through the array, squaring each digit and adding it to a string for each iteration
    //return the string
}

//for loop 961ms
function squareDigits(num) {
    const numList = num.toString().split("")
    let result = ""

    for (let i = 0; i < numList.length; i++) {
        result += numList[i] * numList[i]
    }

    return Number(result)
}

//Reduce 932ms
const squareDigits = num => {
    return Number(num.toString().split("").reduce((result, currentValue) => {
        return result += currentValue * currentValue
    }, ""))
}

//Best Solution
function squareDigits(num) {
    return Number(('' + num).split('').map(function (val) { return val * val }).join(''))
}