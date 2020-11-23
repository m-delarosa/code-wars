/* Given an integer (width) and string (ratio) written as "WIDTH:HEIGHT", output the scren dimensions as a string written as "WIDTHxHEIGHT"

Algo
    Multiply the width times the last number listed in ratio string
    Divide the resulting by the number by the first number in the ratio
    Return the answer

Pseudo code
    Grab the all characters in ratio before the ":" and set it to a var (wRatio)
    Grab the last character in ratio and set it to a vad (hRatio)
    Perform the math above and return the answer
*/

//My Solution
const width = 1280
const ratio = "16:9"

const findScreenHeight = (width, ratio) => {
    const splitRatio = ratio.split(":")
    const wRatio = parseInt(splitRatio[0])
    const hRatio = parseInt(splitRatio[1])
    
    return `${width}x${(width * hRatio) / wRatio}`
}

//Best Solution on Codewars
function findScreenHeight2(width, ratio) {
    const [widthRatio, heightRatio] = ratio.split(':')
    const height = width / widthRatio * heightRatio
    return width + 'x' + height
}

console.log(findScreenHeight(width, ratio))