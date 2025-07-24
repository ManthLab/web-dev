

// if statement :

let age = 22;

if (age >= 18) {
    console.log("You can Drive!");
}

if (age < 18) {
    console.log("You cannot Drive!");
}


let mode = "dark";
let color;

if ( mode === "dark") {
    color = "Black";
}

if (mode === "light") {
    color = "White"
}

console.log(color);



// if - else statement :

let agE = 22;

if (agE >= 18) {
    console.log("You can Vote.");
} else {
    console.log("You cannot Vote.");
}


let num = 3;

if (num % 2 === 0){
    console.log("is an even number.");
} else {
    console.log("is an odd number.");
}



// else - if statement :

let modE = "pink"
let coloR;

if (modE === "dark"){
    coloR = "Black"
} else if (modE === "blue") {
    coloR = "Blue"
} else if (modE === "pink"){
    coloR = "Pink"
} else {
    coloR = "White"
}

console.log(coloR);



// Ternary Operator :

let x = 21;

let res = x > 16 ? "adult" : "not an adult"

console.log(res);



/* Practice Q-1 

let nuM = prompt("Enter the number");

if (nuM % 5 === 0) {
    console.log(nuM,"is a multiple of 5.");
} else {
    console.log(nuM,"is not a multiple of 5.");
}*/



// Practice Q-2 

let score = prompt("Enter your score");

let grade;

if (score >= 90 && score <= 100) {
    grade = "A";
} 
else if (score >= 70 && score <= 89){
    grade = "B";
} 
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}
else if (score >= 0 && score <= 49){
    grade = "F";
}
else {
    console.log("Please check the score");
}

console.log("According to the score",score, "The grade is :",grade);