// Numbers:
let age = 18;
let cgpa = 3.75;

// Strings:
let sports = "Tennis";

// Booleans
let permission = true;
let action = false;

/*
* Objects
* -------
* JavaScript objects are defined using curly braces `{}`.  
* Properties are key-value pairs (`name: value`) separated by commas.
*/
const students = {firstName:"David", lastName:"Beckham"};
console.log(students.firstName);

/*
* Arrays
* ------
* Arrays in JavaScript are written with square brackets, 
* and every items are separated by commas.
*/

let cities = ["Berlin", "Hamburg", "Munich", "Frankfurt"];

/*
* Array indexes are zero-based. 
* Therefore, `cities[0]` returns "Berlin", `cities[1]` returns "Hamburg", and so on.
*/
console.log(cities[2])

/*
* When we add a number and a string using the + operator in JavaScript, 
* the number is treated as a string.
*
* JavaScript evaluates expressions from left to right. 
* Therefore, these two statements may produce different outputs.
*/

let random1 = 39 + 1 + "Rome";
//output: 39Rome
console.log(random1);

let random2 = "Rome" + 39 + 1;
//output: Rome40
console.log(random2);

//We can check JavaScript datatypes using typeof expression
let datatypes = undefined;

// Returns "boolean"
datatypes = typeof permission;  

// Returns "number"
datatypes = typeof age;   
console.log(datatypes);

// Returns "objects"
datatypes = typeof students;
console.log(datatypes);

// Returns "number"
datatypes = typeof cities;
console.log(datatypes);

// Returns "string", In JavaScript, 
// Arrays are objects that have some special characteristics.
datatypes = typeof sports; 
console.log(datatypes);
