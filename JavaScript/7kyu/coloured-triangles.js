// If you finish this kata, you can try Insane Coloured Triangles by Bubbler, which is a much harder version of this one.

// A coloured triangle is created from a row of colours, each of which is red, green or blue. Successive rows, each containing one fewer colour than the last, are generated by considering the two touching colours in the previous row. If these colours are identical, the same colour is used in the new row. If they are different, the missing colour is used in the new row. This is continued until the final row, with only a single colour, is generated.

// The different possibilities are:

// Colour here:        G G        B G        R G        B R
// Becomes colour:      G          R          B          G
// With a bigger example:

// R R G B R G B B
//  R B R G B R B
//   G G B R G G
//    G R G B G
//     B B R R
//      B G R
//       R B
//        G
// You will be given the first row of the triangle as a string and its your job to return the final colour which would appear in the bottom row as a string. In the case of the example above, you would the given RRGBRGBB you should return G.

// The input string will only contain the uppercase letters R, G, B and there will be at least one letter so you do not have to test for invalid input.
// If you are only given one colour as the input, return that colour.

const getLetter = {
    RR: 'R',
    RG: 'B',
    RB: 'G',
    GB: 'R',
    GG: 'G',
    GR: 'B',
    BG: 'R',
    BB: 'B',
    BR: 'G',
}

//Working Recursive Solution
function triangle(row) {
    let newRowArray = []
    row.split('').forEach((letter, index) => {
        if (index >= 1) {
            const newLetterInput = row[index] + row[index - 1]
            const newLetterOutput = getLetter[newLetterInput]
            newRowArray.push(newLetterOutput)
        }
    })

    let newRow = newRowArray.join('')
    //First conditional below accounts for the edge case.
    if (row.length === 1) {
        return row
    } else {
        return newRow.length > 1 ? triangle(newRow) : newRow
    }
}

function triangle(row) {
    let newRowArray = []
    row.split('').forEach((letter, index) => {
        if (index >= 1) {
            const newLetterInput = row[index] + row[index - 1]
            const newLetterOutput = getLetter[newLetterInput]
            newRowArray.push(newLetterOutput)
        }
    })

    let newRow = newRowArray.join('')
    //First conditional below accounts for the edge case.
    if (row.length === 1) {
        return row
    } else {
        return newRow.length > 1 ? triangle(newRow) : newRow
    }
}
