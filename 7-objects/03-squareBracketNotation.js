// * Square Bracket Notation in Objects
// Square bracket notation can help us be able to find a value in an object
// This way can be handy if we need to set a key to a variable and then use that variable to parse through an object
// It works because of the fact that all property keys( before the colon) are strings


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

//console.log(garden.vegetable);
//let x = "vegetable";
//console.log(garden.x, garden[x]); // undefined, "zucchini"

// Within the square bracket, x becomes a representation of the key that exists in the object, even if the variable type is a string

//console.log(garden.water, garden[water]);

let baking = {};
baking["zucchini"] = "Better make some bread!"; // we can set a key value pair with square brackets

console.log(baking);

let garden = {
    vegetable: 'zucchini',
    flower: 'sun flower',
    fruit: 'grape',
    "water": true,
    sun: true,
    size: 10
  };

let key = "water";

  //console.log(Object.keys(garden));
Object.keys(garden).forEach(g => {
    // console.log(g);
    if(key === g) {
        console.log(garden[key]);
    }
})