// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

const countSmileys = arr => {
    // a place to keep track of the current count

    //iterate over the array
    //iterate over the current face if the length of the face is either 2 o 3
    //if the first chraracter is a : ;
    //if the second character is a - ~
    //if the third character is a ) D
    //increment count
    //else if the second character is a ) D && the length is more 
    //increment count
}

const countSmileys = arr => {
    let count = 0

    const eyes = {
        ':': true,
        ';': true
    }

    const noses = {
        '-': true,
        '~': true
    }

    const mouths = {
        ')': true,
        'D': true
    }

    for (let i = 0; i < arr.length; i++) {
        const face = arr[i]
        if (face.length == 2) {
            if (eyes[face[0]] && mouths[face[1]]) count++
        } else if (face.length == 3) {
            if (eyes[face[0]] && noses[face[1]] && mouths[face[3]]) count++
        }
    }
    return count
}

function countSmileys(arr) {
    const eyes = {
        ':': true,
        ';': true
    }

    const noses = {
        '-': true,
        '~': true
    }

    const mouths = {
        ')': true,
        'D': true
    }

    return arr.reduce((count, face) => {
        if (face.length == 2) {
            if (eyes[face[0]] && mouths[face[1]]) {
                count++
            }
        } else if (face.length == 3) {
            if (eyes[face[0]] && noses[face[1]] && mouths[face[2]]) {
                count++
            }
        }
        return count
    }, 0)
}