// * Length

let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(long.length);

let colors = ["Blue", "Green", "Yellow", "Red", "Orange", "Purple"];
console.log(colors.length);
console.log(colors.toString()); // turns the array into one long string

console.log(typeof colors.toString());

// Challenge
// - First check if you are working with an array
// - Then flip the values within the array (what was in index 4 is now in 0, etc)
// - Using a method only, print the values of the lewly arranged array

let arr = [1,2,3,4,5];

console.log(arr.reverse()); // .reverse() flips 

function challenge() {
    let revArr = arr.reverse();
    if(arr instanceof Array === true) {
        console.log(arr.reverse());
        revArr.forEach(number => console.log(number));
    } else {
        console.log(arr.reverse());
        revArr.forEach(number => console.log(number));
    };
};

challenge();

