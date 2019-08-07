/*
Used for iterating over ENUMERABLE values in an object. This is great for debugging purposes so we can easily check the properties of an object. Although we are 'iterating' over the enumerable properties of an object, objects themselves aren't iterable.
​
// Iterables are data structures which allow us to access its elements in a sequential manner, and we can't do that with objects like we can an array.
*/

let student = {name: "Peter", awesome: true, degree: "JavaScript", week: 1};

for(let item in student){
    console.log(student[item]);
}

let catArray = ["Tabby", "British Shorthair", "Burmese", "Maine Coon", "Ragdoll"];

for(let dog in catArray){
    console.log(catArray[dog]);
}

/* Challenge
Write a For In Loop that capitalizes the first letter of your name
*/

let name = "eric"
let capName;

for(let letters in name){
    //console.log(name[letters].toUpperCase());
    if(letters == 0){
        capName = name[letters].toUpperCase();
    } else {
        capName += name[letters].toLowerCase();
    }
}

console.log(capName);