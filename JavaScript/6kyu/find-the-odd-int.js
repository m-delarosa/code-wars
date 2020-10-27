// https://www.codewars.com/kata/54da5a58ea159efa38000836

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

/* Pseduo
    Create an empty hashMap = intergerMap

    Iterate over the array of integers
        If the interger already exists in the array as a property add 1
        Else set that property equal to 1

    Iterate over the hashMap
        If a property whose value when divided by 2 has a remainder that does not equal 0
            return that property as a number
*/

