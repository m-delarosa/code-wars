// For this Kata you will have to forget how to add two numbers together.

// In simple terms our method does not like the principle of carrying over numbers
// and just writes down every number it calculates.

// You may assume both integers arepositive integersand the result will not be bigger than Integer.MAX_VALUE (only for java)

function add(number1, number2) {

    //Convert from a number into a string, split it into an array, 
    //reverse it and then join it back together as a string. End result being
    //the reversed string version of the number. 
    num1 = number1.toString().split("").reverse().join("")
    num2 = number2.toString().split("").reverse().join("")
    console.log(number1)
    console.log(number2)
    console.log(num1)
    console.log(num2)


    //Not entirely sure what's going on here. 
    //If num1 is shorter than num2 put them in array and 
    //have them switch places?
    if (num1.length < num2.length) {
        [num1, num2] = [num2, num1]
    }

    //If num1 < num2, they do indeed switch places in variable name.
    console.log(num1)
    console.log(num2)

    //The above insures that num1.length below will always be the longest one. 
    var returnString = ""
    for (var i = 0; i < num1.length; i++) {
        var int1 = parseInt(num1[i])
        var int2 = parseInt(num2[i] || 0)

        returnString = (int1 + int2).toString() + returnString
    }

    return parseInt(returnString)
}