// * Else Statements

let weather = 75;

 if (weather < 70) {
     console.log("Wear a jacket today!");
} else {
    console.log("No jacket needed!");
}

let name = "Amber Smith";

if (name === "Eric Rees") {
    console.log("Hello, my name is " + name + "!");
} else { 
    console.log("Hello, is your name " + name + "?");
};

/* Bronze 
let name = "aUTuMN";
//let firstChar = name.charAt(0);

if (name == "aUTuMN" && name.charAt(0) === "A") {
    console.log("Hey, this isn't written correctly.")
} else {
    console.log(name)
}

*/

/* Silver
let name = "aUTuMN";
let firstChar = name.charAt(0);

if (firstChar === "a") {
    console.log(name.substr(1, 5).toLowerCase());
} else {
    console.log(name.charAt(0));
}

*/

/* Gold 
let name = "aUTuMN";
let firstChar = name.charAt(0);

if (firstChar === "A") {
    console.log(firstChar + name.substr(1, 5).toLowerCase());
} else {
    console.log(firstChar.toUpperCase() + name.substr(1, 5).toLowerCase());
}

*/