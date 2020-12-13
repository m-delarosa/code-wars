/*
https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

Input: String
Output: String

Pseudo Code
  Split the input string into an array

  Iterate over the array
    Swap the first letter to the end of each string
    Add "ay" to the string

  Return the joined version of the modified array
*/

//My Initial Solution
function pigIt(str){
  const originalArr = str.split(' ')
  
  const pigArr = originalArr.map(word => {
    if (word === '!' || word === '?' ) return word
    const removedChar = word[0]
    return word.slice(1) + removedChar + 'ay'
  })
  
  return pigArr.join(' ')
}

//Refactor
function pigIt(str){
  const originalArr = str.split(' ')
  
  const pigArr = originalArr.map(word => {
    return word === '!' || word === '?'
      ? word
      : word.slice(1) + word[0] + 'ay'
  })
  
  return pigArr.join(' ')
}

//Best Practices and Most Clever Solution
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

