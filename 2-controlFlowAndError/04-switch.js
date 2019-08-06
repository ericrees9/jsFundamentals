// * Switch Statements

let friend = "Bob";

switch (friend) {
    case "Autumn":
        console.log("Hey Autumn, when are we going rock wall climbing?") 
        break;
    case "Dave":
        console.log("Hey Dave, how is Cooper?")
        break;
    case "Alecx":
        console.log("Hey Alecx, when are we playing DnD?")
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

/* Challenge
Write a dessert menu
If the dessert is pie, conslog.log 'Pie, pie, me oh my!'
If the dessert is cake, console.log 'Cake is great!'
If the dessert is ice cream, console.log 'I scream for ice cream!'
Otherwise, have your switch statement console.log 'Not on the menu.'
*/

let food = "Cookies";

switch (food) {
    case "Pie":
        console.log("Pie, pie, me oh my!")
        break;
    case "Cake": 
        console.log("Cake is great!")
        break;
    case "Ice Cream":
        console.log("I scream for ice cream!") 
        break; 
    default:
        console.log(`I'm sorry, but we don't serve ${food} at this terrible restaurant.`)
}

// Challenge
// Rewrite the else if challenge as a switch statement

let age = 15;

switch (true) {
    case (age >= 25):
        console.log("Yay! You can rent a car!")
        break;
    case (age >= 21):
        console.log("Yay! You can drink!") 
        break;
    case (age >= 18):
        console.log("Yay! You can vote!") 
        break;
    case (age <= 17):
        console.log("Sorry, you're just a youngin.")            
        break;
    default:
        console.log("That's not even a number dude.")
}
