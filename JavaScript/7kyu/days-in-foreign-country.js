// https://www.codewars.com/kata/58e93b4706db4d24ee000096

// How many days are we represented in a foreign country?

// My colleagues make business trips to a foreign country. We must find the number of days our company is represented in a country. Every day that one or more colleagues are present in the country is a day that the company is represented. A single day cannot count for more than one day.

// Write a function that recieves a list of pairs and returns the number of days that the company is represented in the foreign country. The first number of the pair is the number of the day of arrival and the second number of the pair is the day of departure of someone who travels, i.e. 1 january is number 1 and 31 of december is 365.

// Example:

// daysRepresented ([[10,17],[200,207]])
// Returns 16 because there are two trips of 8 days, which add up to 16.

// Happy coding and rank this kata if you wish ;-)

const trips = [[2, 8], [6, 16], [17, 26]]

function daysRepresented(trips) {
  let days = 0

  trips.forEach(pair => (
    days += (pair[1] - pair[0] + 1)
  ))

  return days
}

function daysRepresentedFinal(trips) {
  const set = new Set()
  //instantiates an empty set {}

  trips.map(([cv, index]) => {
    for (let i = cv; i <= index; ++i) {
      set.add(i)
    }
  })
  //Iterates over every array pair. Adds all of the values in the range of the pair to the set and stops at the final value
  //In this case we're using current value and index, as a sort of start and end for our iteration.
  return set.size
  //Simply returns the number of days in the set. The set here providing aboluste uniqueness.
}

console.log(daysRepresentedFinal(trips))