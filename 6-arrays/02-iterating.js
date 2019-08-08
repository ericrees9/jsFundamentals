// Iterating with arrays
// for of was the best loop to iterate over arrays
// for each is the best way to iterate over arrays now
// forEach() method executes a provided function once for each array element

// forEach() has three arguments: currentValue, the index, and the entire array
// currentValue = the current element being processed in the array
// index = the ndex of the current element being processed
// array = the array the forEach method was called upon

let food = ["Spaghetti", "Linguini", "Chicken Wings", "Pizza", "Popcorn"];

// food.forEach(f => {console.log(f)});
// food.forEach((f, number) => {console.log(f, number)})
food.forEach((f, number, array) => {console.log(f, number, array)});

/* Challenge
- create a list with an array of movies
- add aother movie at the end
- replace one of your existing movies with another one
- use forEach() to list your movies
*/ 

let movies = ["Ferris Beuller's Day Off", "Zombieland", "Iron Giant", "Paranormal Activity", "The Strangers"];

function challenge() {
    let first = movies.push("Spider-verse");
    let second = first.splice(0, 1, "Godzilla");
    second.forEach(f => {console.log(f)});
};

challenge();