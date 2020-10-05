// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

// There are some stones on Bob's table in a row, and each of them can be red, green or blue, indicated by the characters R, G, and B.

// Help Bob find the minimum number of stones he needs to remove from the table so that the stones in each pair of adjacent stones have different colours.

// Examples:

// "RGBRGBRGGB"   => 1
// "RGGRGBBRGRR"  => 3
// "RRRRGGGGBBBB" => 9

const stones = "RRRRGGGGBBBB"

function solve(stones) {
    let counter = 0
    let colors = { "R": 0, "G": 0, "B": 0 }

    stones.split("").forEach(stone => colors[stone] += 1)

    console.log(colors)

    return counter
}

console.log("Function Returns", solve(stones))