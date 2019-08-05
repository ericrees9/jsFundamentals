//Declarations

let a = 2;

/* 
let - keyword
a - variable name
= - assignment operator
2 - variable value

variables have to start with a letter, an underscore or a number
    case sensetive
    case names have to be unique
    no spaces in variable names
    "let" "var" "const" are the three reserved keywords
*/

/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
  (=) assignment operator is NOT the same as the equal operator (== or ===)
*/

let x;
console.log('Declaration', x);

x = 10
console.log('Initilization 1:', x);

x = 33
console.log('Initilization 2:', x);

let y = 'Hello';
console.log("Both ", x, y);

// Const

let today = "Great!";
const elevenFifty = "Wonderful!";
console.log(today, elevenFifty);

today = "Lovely!";

