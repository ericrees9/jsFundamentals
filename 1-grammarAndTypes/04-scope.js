/*  Scope
// Accessibility of variables within the code.
// We can make things accessible or non accessible within the code space. Declaring variables on the global level and local level are two different things.
//  Global scope - The entire world
//  Local scope - Indianapolis
// Scope refers to where a variable is defined and accessible. 
    - JavaScript has function scope: each function has a new scope
    - Scope determines the visibility of these variables
    - variables defined inside a function are not visible from outside the function
*/

// var vs. let
// block scope - creating a new variable within local scope that doesn't bleed outward into other parts of functions
// let variables have protection from being initialized outside of specific functions

var x = 12;
function varTest() {
  var x = 33;
  if (1 == 2) {
    var x = 45;
    console.log(x);
  }
  console.log(x)
};

varTest();
console.log(x);
var x = 12;

function letTest() {
  var x = 33;
  if (true) {
    let x = 45;
    console.log(x);
  }
  console.log(x);
}
letTest();
console.log(x);
function constTest() {
  const scope = 1;
  if (true) {
    const scope = 2;
    console.log(scope);
  }
  console.log(scope);
}
constTest();