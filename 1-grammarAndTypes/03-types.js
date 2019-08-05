// Types

// Booleans
// Booleans can represent: true/false, yes/no, on/off

let i = true;

let j = false;

let on = true;
let off = false;

console.log(on, off);

// * Null
// * Null = empty value; -- not 0, not undefined

let empty = null;
console.log(empty);

//* Undefined 
//* Undefined means there is no value assigned, there isn't even a container to put something in
//* Not an error

let undef = undefined; 
console.log(undef);

//*  Numbers

let degrees = 90;
console.log(degrees);

let precise = 999999999999999;
console.log(precise);

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 *10) /10;
console.log(numbersAreHard);

let a = Number('123');
console.log("123");

//* Strings 
//* Strings are data types 
let stringOne = "double quotes";
let stringTwo = 'single quotes';

let first = 1050 + 100;
let second = "1050" + "100";
console.log(first);
console.log(second);

console.log(typeof first);
console.log(typeof second);

//* Objects
// Container that holds multiple data types within a single place
// Key value pairs. Keys are on the left, values on the right
// Has to be commas separating the key value pairs, not semicolons

let car = {
    color: "red",
    tires: 4,
    extras: "A/C and Radio",
    cool: true
};

console.log(car);
console.log(typeof car);

//* Array
// Also containers that hold lists of items 
// Can contain multiple different data types

let list = ["item", "item1", "item3", "item4"];
//   1     2   3
// 1 - name of the array
// 2 - container for the array
// 3 - items within the array, separated by commas

let burritos = ["large", 4, true];

console.log(typeof burritos);
// Arrays are qualified as objects. They aren't their own data type

//* Addition vs. Concatenation
// When JS sees combining two or more numbers, it adds the values together using the built-in math functionality;
// when it sees adding together one or more strings, it changes and the plus sign becomes an assignment operator -- it smashes the values together without trying to synthesize the values

let third = 1050 + "100";
console.log(third);
console.log(typeof third);

let firstName = "Eric ";
let lastName = "Rees ";
let houseNumber = 11435;
let street = " Kayak Court ";
let city = "Indianapolis, ";
let state = "IN ";
let zipcode = 46236;

console.log(firstName + lastName + 'lives at ' + houseNumber + street + city + state + zipcode + ".");

//* Strings and Properties
// Properties are qualities associated with a datatype
// Strings have properties, or the qualities associated with that string. The length of a string is a property.

let myName = "Eric";
console.log(myName.length);

//* Methods
// Methods are like tools that can help us manipulate our data. 
// .Property and .Methods() *no parenthesies for properites*

let myNameIs = "Eric";
console.log(myNameIs.toUpperCase());
console.log(myNameIs.toLowerCase());

let home = "My home is Indianapolis";
console.log(home.includes("Indiana"));
