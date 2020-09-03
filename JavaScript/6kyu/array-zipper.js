var array1 = ["a", "b", "c"]
var array2 = ["e", "f", "g"]

const zip = (arr1, arr2) => {
    const result = []
    arr1.forEach(function (o, i) {
        result.push(o)
        result.push(arr2[i])
    })
    return result
}

console.log(zip(array1, array2))
