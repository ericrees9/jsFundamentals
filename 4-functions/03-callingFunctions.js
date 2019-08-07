// * Calling Functions

function hi() {
    console.log("Hi");
}

hi();
// this is how we call, or "invoke" a function
// it's the start button on a machine

console.log(hi());

// Challenge
// Create a function that, when invoked, lists out the numbers 1-10


function countingToTen() {
    for(let i = 1; i <= 10; i++) {
    console.log(i);
    }
}

countingToTen();

// Challenge
// Given the array, create a function that lists out the values individually.

let arr = ["This", "is", "really", "cool"];

function list() {
    for(let char in arr) {
        console.log(arr[char]);
    }
}

list();