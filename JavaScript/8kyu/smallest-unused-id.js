// Hey awesome programmer!

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// Go on and code some pure awesomeness!

function nextId(ids) {
    const sortedArray = ids.sort((a, b) => a - b)

    if (sortedArray[0] !== 0) return 0
    else {
        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] - sortedArray[i + 1] < -1) {
                return sortedArray[i] + 1
            }
        }
        return sortedArray[sortedArray.length - 1] + 1
    }
}

//Best practice solution:
const ids = [0, 1, 2, 2, 2, 3, 5]

function nextId(ids) {
    const used = new Set(ids)
    for (let i = 0; i <= ids.length; i++) {
        if (!used.has(i)) return i
    }
}


