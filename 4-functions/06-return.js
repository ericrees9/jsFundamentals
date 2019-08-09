// * Returns

let hi = () => {
    return "hi";
//    (1)
};

let newName = hi();
//    (2)      (3)

console.log(newName);

// 1- the keyword that brings our data out of our function
// 2- we need a new variable to hold the value of the return
// 3- when called, the function bcomes the value of the return

let captialzedName = (name) => {
    let capName = "";
    for (let letter in name) {
        if (letter == 0){
            capName += name[letter].toUpperCase();
        } else {
            capName += name[letter].toLowerCase();
        }
    }
    return capName;
}

//console.log(capName); // error = not defined
const myName = captialzedName("eRIc"); 
console.log(myName + ", how are you doing?");

// Challenge
// Make a tip calculator
// Have it RETURN the value
// Capture the returned value in a variable
// Print that variable

let bill = 27.00;

function tipCal() {
    let tipPercent = .25;
    let tipAmount = bill * tipPercent;
    let finalAmount = tipAmount + bill;
    return finalAmount
} 

console.log(tipCal(25))

// ----

let bill = 27.00;

function tipCal(bill) {
    let tipPercent = .25;
    let tipAmount = bill * tipPercent;
    let finalAmount = tipAmount + bill;
    console.log(`Your tip amount is $${tipAmount} and your final amount is $${finalAmount}.`);
    return finalAmount;
} 

tipCal(33);

