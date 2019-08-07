// * Far Arrows

let hi = () => {
//    (1)  (2)
    console.log("Hello!");
}

hi();

// this is called a fat arrow because 
//               ->
// ~*~    is NOT the same as   ~*~
//               =>
// 1- we need to set the fat arrow function to a variable
// 2- we use the 'fat arrow' to signify its a function

// Block Body
// ----------
let hi = () => {
    console.log("Hi!");
}

let apples = (x) => {
    console.log.(`There are ${x} apples in the basket.`);
}
apples(10);

// Concise Body
// ------------
let hi = () => console.log("Hi!");
let apples = x => console.log(`There are ${x} apples in the basket.`);
apples(10);

// More than one parameter will require parenehesis
// Return (if one-line fat arrow function) is implied
// line breaks ~*~DO~*~ matter with fat arrows
// setup needs to be on one line

let func = () => console.log("hi"); // this works
let func = ()
    => console.log("hi"); // will not work

