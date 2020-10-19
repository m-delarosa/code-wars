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
Find the position of the duplicates within the array
Return a subarray containing the elements in between
*/

const a = [0, 1, 2, 3, 4, 5, 6, 1, 7, 8]

function duplicateSandwich(a) {
    let valueMap = {}
    let result = []
    let duplicate

    a.forEach(el => {
        valueMap[el]
            ? valueMap[el]++
            : valueMap[el] = 1
    })

    for (const prop in valueMap) {
        if (valueMap[prop] === 2) duplicate = prop
    }

    console.log(typeof a[0] === Number)
    if (typeof a[0] === Number) duplicate = parseInt(duplicate)

    console.log("Duplicate is", duplicate, "as a", typeof duplicate)

    const firstDup = a.findIndex(el => el === duplicateSandwich)
    console.log(firstDup)



    return result
}

console.log("Returns", duplicateSandwich(a))