// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//My solution:
const getAverage = marks => {
    const total = marks.reduce((sum, mark) => sum + mark, 0)
    return Math.floor(total / marks.length)
}

//Refactor
const getAverage = marks => {
    return Math.floor(marks.reduce((sum, mark) => sum + mark, 0) / marks.length)
}

//Best Solution = Same as mine.

//For Loop Version:
function getAverage(marks) {

    // calculates total number of marks
    var total = 0
    for (var i = 0; i < marks.length; i++) {
        total += marks[i]
    }

    /* returns total number of marks divided by number of marks
       rounded down to nearest integer */
    return Math.floor(total / marks.length)
}