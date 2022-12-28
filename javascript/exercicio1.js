/*The following program presents the solution to the given problem in codecademy:
https://www.codecademy.com/courses/introduction-to-javascript/projects/kelvin-weather-javascript
*/
const kelvin = 0; //sets a constant kelvin with the value 293
let celsius = kelvin-273; //sets celsius as kelvin - 273
let fahrenheit = Math.floor(celsius*(9/5)+32); //converts celsius to fahrenheit and rounds it down
let newton = Math.floor(celsius*(33/100)); //converts to newton and rounds it down
console.log(`The temperature is ${kelvin} Kelvin`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${newton} Newton`);
