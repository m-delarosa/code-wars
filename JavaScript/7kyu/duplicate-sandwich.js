// https://www.codewars.com/kata/5f8a15c06dbd530016be0c19/train/javascript

// In this kata you will be given a list consisting of unique elements except for one thing that appears twice.

// Your task is to output a list of everything inbetween both occurrences of this element in the list.

// Examples:
// [0, 1, 2, 3, 4, 5, 6, 1, 7, 8] => [2, 3, 4, 5, 6]
// ["None", "Hello", "Example", "hello", "None", "Extra"] => ["Hello", "Example", "hello"]
// [0, 0] => []
// [true, false, true] => [false]
// "example" => "xampl"
// Notes
// All elements will be the same datatype.
// All used elements will be primitive.

/* Psuedo
Create a hash map to store values
Find the duplicate in the array
Find the position of the first duplicate within the array
Push a subarray of everything after the dup into the result array
Find the index of the 2nd dup in the result array
Slice away from that index on in the subarray
Return the result array
*/

const a = [0, 1, 2, 3, 4, 5, 6, 1, 7, 8]

function duplicateSandwich(a) {
    let valueMap = {}
    let result = []
    let duplicate, inputArr

    typeof a === "string"
        ? inputArr = a.split("")
        : inputArr = a

    inputArr.forEach(el => {
        valueMap[el]
            ? valueMap[el]++
            : valueMap[el] = 1
    })
    console.log("valueMap", valueMap)

    for (const prop in valueMap) {
        if (valueMap[prop] === 2) duplicate = prop
    }
    // console.log("duplicate", duplicate)

    if (typeof a[0] === "number") duplicate = parseInt(duplicate)
    if (typeof a[0] === "boolean") duplicate = (duplicate === "true")
    console.log("Type", typeof a[0])

    console.log("Duplicate is", duplicate, "as a", typeof duplicate)

    const firstDupIndex = inputArr.findIndex(el => el === duplicate)
    console.log("first duplicate is located at", firstDupIndex)



    result = inputArr.slice(firstDupIndex + 1)

    const secondDupIndex = result.findIndex(el => el === duplicate)
    console.log(secondDupIndex)

    result.splice(secondDupIndex)

    if (typeof a === "string") result = result.join("")

    return result
}

console.log("Returns", duplicateSandwich(a))

/* Learns
In order to use typeof in a conditional statement, you need to compare to a string as the result of typeof. See above.
*/