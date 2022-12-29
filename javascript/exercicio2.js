/* this exercise is a solution to the problem presented in https://www.codecademy.com/courses/introduction-to-javascript/projects/dog-years-javascript.
Instead of following step 10 which is agains code simplicity, I chose to add an if statement to avoid negative values and a user input.
*/
console.clear(); //clears the console before starting
const prompt = require("prompt-sync")({ sigint: true }); // defines prompt to allow user input
let myAge = prompt("Insert your age: "); //sets the myAge variable to the user input
myAge = Number(myAge); // converts myAge to a number
let earlyYears = 2; // sets a variable that will be use to calculate the first 2 years
let laterYears = myAge - earlyYears; //takes out the first 2 years from myAge which have a different translation in dog years
let myAgeInDogYears; // declares the variable for later use
if(myAge >= 0){ //sets up what will happen when myAge is a number bigger than 0
	if (myAge > 2){ //set what happen when myAge is bigger than 2
		earlyYears *= 10.5; //multiplies earlyYears by 10.5
		laterYears *= 4; // multiplies later years by 4
		myAgeInDogYears = earlyYears + laterYears; // sums up to the total age
	} else { //by exclusion sets what happens when myAge is betwwen 0 and 2
		myAgeInDogYears = myAge * 10.5; // since the age is less than 2 we treat my age as they were the early Years
	}
	console.log(`Your age is ${myAgeInDogYears} dog years.`); //prints to the terminal myAgeInDogYears from whatever path it took
} else { //serves as an exception handler when myAge is lower than 0 or is not a number
	console.log("Invalid age"); //generic error message
}
