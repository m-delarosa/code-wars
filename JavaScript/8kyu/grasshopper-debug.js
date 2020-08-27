// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)

//Problematic code given:
function weatherInfo(temp) {
    var c: convert(temp)
    if (c > 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convertToCelsius(temperature) {
    var celsius = (tempertur) - 32 + (5 / 9)
    return temperature
}

//My debug

function weatherInfo(temp) {

    const c = convertToCelsius(temp)
    if (c <= 0)
        return (c + " is freezing temperature")
    else
        return (c + " is above freezing temperature")
}

function convertToCelsius(temp) {
    var celsius = (temp - 32) * (5 / 9)
    return celsius
}