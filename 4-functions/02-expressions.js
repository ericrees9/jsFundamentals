// * Expressions
// 

function hi() {
    console.log("Hi!");
}

// vs.

let hey = function hi() {
    console.log("Hi!");
}

// the variable 'hey' is now representative of the function 'hi()'
// expression functions don't get hoised, declaration functions do

// Anonymous function

let hi = function () {
    console.log("HEY!");
}

// functions won't run unless we tell them to
// we tell them to run by "calling" or "invoking" them