// * Hoisting
// Hoisting does not exist. It's an illusion. Code doesn't actually get moved.
// JS reads through code twice, remembering left hand side of variables and functions.

console.log(scissors);

b();
console.log(a);

function b() {
    console.log("this is all hoisted");
}

var a = "This is all hoisted";

// We need to be cognizant of where we write our functions and where they're going to get used

