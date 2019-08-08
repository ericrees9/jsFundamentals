// Arrays
// Containers that hold lists of items and can contain multiple data types
// Indexed starting at zero

let list = [ "item 1", "item 2", "item 3"];
//   (1)  (2)            (3)
// 1- name of the Array or list
// 2- Array is inside of square brackets
// 3- each item, regardless of data type is separated by commas

console.log(list[2]);

// ----

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true, ["Josh", "Eric", "Sam"]];

// console.log(typeof students); // answer - object
// console.log(students instanceof Array); // answer - true

function introduction() {
    let studentName = students[6][2];
    console.log(`Hello ${studentName}, how are you today?`)
};

introduction();

// ----
// Populating

let food = ["Spaghetti", "Linguini", "Chicken Wings", "Pizza", "Popcorn"];

food.push("Tacos");
food.splice(1, 1, "Burgers");
food.splice(2, 0, "Applesauce");
food.pop(); // removes the last element from an array 
food.shift(); // removes the first element from an array
food.unshift("Fruit Snacks"); // insert something new at the beginning of an array

for (pasta of food) {
    console.log(pasta);
}
