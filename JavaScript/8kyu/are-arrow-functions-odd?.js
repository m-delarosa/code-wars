// Time to test your basic knowledge in functions! Return the odds from a list:

// odds([1,2,3,4,5]) #=> [1,3,5]

//My Solution
const odds = values => values.filter(num => num % 2 !== 0)

//Top Solution
var odds = (values) => values.filter(v => v % 2)