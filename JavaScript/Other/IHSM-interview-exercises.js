//#1
// Write a function to manipulate the provided array, pad all single digits into double digits with a preceding 0
let nums = ['2', '4', '25', '10', '3']
result = ['02', '04', '25', '10', '03']


const paddedNum = textArray => {
    let result = []
    for (var i = 0; i < textArray.length; i++) {
        if (textArray[i].length === 1) {
            result.push('0' + textArray[i])
        }
        else {
            result.push(textArray[i])
        }
    }
    return result
}

console.log(paddedNum(nums))

test('pad all single digits into double digits with a preceding 0', () => {
    expect(paddedNum(nums)).toEqual(['02', '04', '25', '10', '03'])
})



//#2
//You have the following arrays:
let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]

//result = [1,a,2,b,3,c,4,d…,26,z,27,a,28,b...] (repeat for the length of the numbers array)
const zipperUp = (alph, nums) => {
    // loop through numbers array
    let result = []

    for (var i = 0; i < nums.length; i++) {
        // push nums[i] into result, then push alph[y] into result, then increase count of both (maybe use % operator)
        // keep looping through alph array until numbers array is over
        // if alph.length is reached, reset count to zero 
        // remainder ex. if i == 26, length =26, 26 % length = 0 | 27 % 26 = rem. 1 | 25 % 26 = rem. 25 <- anything less than the 2nd number in % statement will be the number 
        result.push(nums[i])
        result.push(alph[i % alph.length])
    }
    return result

}

console.log(zipperUp(alph, numbers))

test('returns zippered array containing alternating letters and numbers, uses all numbers', () => {
    expect(zipperUp(alph, numbers)).toEqual([1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'a', 6, 'b', 7, 'c', 8, 'd', 9, 'a', 10, 'b'])
})