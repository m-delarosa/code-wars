// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a  number is negative, return 0(for languages that do have them)""

//Return the sum of all naturals numbers up until given number which are divisible by 3 or 5.
/* Pseudo
Create a result variable and set it equal to 0
Create a counter variable?

For loop(i = 0, iterate until i === number, i++)
    check if (i % 3 === 0 || i % 5 === 0)
        result += i

return result
*/

const number = 10

function solution(number) {
    let result = 0

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) result += i
    }

    return result
}

console.log(solution(number))