//Kata Example Twist
// This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).

// Add the value "codewars" to the array websites/Websites 1,000 times.

var websites = []

//1st
while (websites.length < 1000) websites.push("codewars")

//2nd
var websites = new Array(1000).fill("codewars")

//My solution and 3rd

for (i = 0; i < 1000; i++) {
    websites.push("codewars")
}