//Conditional Statements

//If Else
let age = 17;

if (age < 18) {
    console.log("You are not allowed to apply for a driving licence.");
} else {
    console.log("You may apply for a driving licence.");
}

// If Else-If Else

let weight = 55;
let output;

if (weight < 50) {
    output = "You are underweight";
} else if (weight <= 70) {
    output = "You are at a normal weight";
} else {
    output = "You are overweight";
}

console.log(output);

// Switch
let cgpa = 2.34;

switch (true) {
    case cgpa >= 3.75:
        grade = "A+";
        break;
    case cgpa >= 3.5:
        grade = "A";
        break;
    case cgpa >= 3.25:
        grade = "A-";
        break;
    case cgpa >= 3.0:
        grade = "B+";
        break;
    case cgpa >= 2.75:
        grade = "B";
        break;
    case cgpa >= 2.5:
        grade = "B-";
        break;
    case cgpa >= 2.0:
        grade = "C";
        break;
    case cgpa >= 1:
        grade = "D";
        break;
    default:
        grade = "F";
}

console.log(grade);