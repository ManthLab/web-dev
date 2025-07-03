
// loops :

// for - loop :

for (let count = 1; count <= 108; count++){
    console.log("Hare Krishna !");
}
console.log("loop has ended");


// Calculate first n numbers.

let sum = 0;

for(let i = 1; i <= 7; i++){
    sum = sum + i;             
}
console.log("Sum is:",sum);

console.log("loop has ended");



// simple Example :

for(let i=1; i<=5; i++){
    console.log("i =", i);
}



// while - loop :

let i = 1;          // initialize

while( i <= 7) {   // condition

    console.log("Hare Krishna !");
    
    i++;           // updation
}



let suM = 0;
let j = 1;

while (j <= 7) {
    
    suM = suM + j;
    j++;   
}

console.log("sum :",suM);



// do - while loop :

let x = 1;

do {
    console.log("Hare Krishna !",x);
    x++;
    
} while (x <= 7);



// for - of loop :

let str = "Manthan";

let size = 0;

for(let val of str){
    console.log("val =",val);
    size++;

}

console.log("The size is:",size);



// for - in loop :

let student ={
    name : "Manthan",
    course : "MCA",
    rollno : 50,
    div : "A",
    cgpa : 9.37,
}

for (let key in student) {
    console.log("key =",key);
    console.log("key =",key,"value =",student[key]);
}

console.log(student["course"]);




//Practice Q - 1.

let num = 0;
 let sizE = 0;

for (num = 0; num <=100; num++) {

    if (num % 2 === 0){                 // even nmuber.
        console.log("Even :",num);
        sizE++;
    }
    //console.log("Number =",num);
}

console.log("Number of even numbers :",sizE);



// Practice Q - 2.

let guess = prompt("Guesss the number.");
console.log(guess);


if (guess == 21){
    console.log("Congratulations! Correct Guess.",guess);
} 
else{
    console.log("Sorry! Wrong Guess.");
}



//Using while loop :

let corrN = 50;

let userN = prompt("Guess the Number.");

while(userN != corrN) {
    userN = prompt("Guess the Number again.");
}

console.log("Congratulations! Correct Guess.",userN);
