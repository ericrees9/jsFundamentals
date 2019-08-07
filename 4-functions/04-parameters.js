// * Parameters
// Functions are reusable, and parameters allow us to pass in data that allow us to change the function everytime we invoke it

function hi(name) {
    console.log(`Hi ${name}!`)
}

hi("Danielle");
hi(`Zach`);

function pet(animal) {
    console.log(`My puppy's name is ${animal}!`);
}

pet(`Riley`);

// Challenge

function person(fullName) {
    let fName = fullName.split(" "); // splits the first and last name into an array of two 
    console.log(`Hello, my name is  ${fName[0]} ${fName[1]}!`);
}

person("Daniel Rivers");