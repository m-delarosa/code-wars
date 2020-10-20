// https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15

// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples
// warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]) === "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// warnTheSheep(["sheep", "sheep", "wolf"]) === "Pls go away and stop eating my sheep"

/* Pseudo
Find the position of the wolf in array: .find(), .indexOf()
const wolfIndex = 3
If the position of wolf === array.length - 1, return "Pls go away and stop eating my sheep"
Else return `Oi! Sheep number ${wolfPosition + 1}! You are about to be eaten by a wolf!"
*/

const test1 = ["sheep", "sheep", "sheep", "wolf", "sheep"]
const test2 = ["sheep", "sheep", "wolf"]

function warnTheSheep(queue) {
    const reverseQueue = queue.reverse()
    console.log("reverseQueue", reverseQueue)
    const wolfPosition = queue.indexOf("wolf") + 1
    console.log("wolfPosition", wolfPosition)

    if (wolfPosition === 1) return "Pls go away and stop eating my sheep"

    return `Oi! Sheep number ${wolfPosition - 1}! You are about to be eaten by a wolf!`
}

console.log("Returns", warnTheSheep(test1))
// console.assert(warnTheSheep(test1) === "Oi! Sheep number 1! You are about to be eaten by a wolf!")