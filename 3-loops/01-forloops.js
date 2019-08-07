// * Loops
// Used for looping over something and looking at it multiple times
// Takes three different expressions
// - variable declaration
// - expression to be evaluated
// - expression to be ran at the end of each loop

for(let i = 0; i < 10; i++){
    console.log(i);
}

// "i++" is just shorthand for counting one more each time
// "i++" is the same as "+=1"

/*
NOTE: There is a danger of infinite loops. There are three main parts to a loop. 
1) The 'for' keyword
2) A variable initialization and declaration. 
3) The condition that needs to be met in order to end the loop.
4) This is where the number is going to update. This one is saying each time this loop runs, update i by one. 
5) Inside of the code block for the loop, refers to the current value of the variable for that loop 
*/

//  (initialization ; stopping condition; iteration statement)

// Challenge
// using a for loop, count to 20, by 2's

for(let i = 2; i <= 20; i+= 2){
    console.log(i);
}

// Challenge
// using a for loop, count from 10 to 0 by 1

for(let i = 10; i >= 0; i-=1){
    console.log(i);
}

// Challenge
// using a for loop, count from 0 to -24 by 2

for(let i = 0; i >= -24; i -= 2){
    console.log(i);
}

let name="Eric";

for(let i = 0; i < name.length; i++){
    console.log(name.charAt(i));
}

let sum = 0

for( i = 1; i <= 50; i++){
    sum += i
}

console.log(sum)

