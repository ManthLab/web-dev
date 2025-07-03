

// functions :


function greet(namE,lastName) {                      // parameters. 
    console.log("Hello",namE,lastName);
}
greet("Manthan","Pawar");
greet("Smith","Jones");                              // arguements.


function myFunction() {
    console.log("Hare Krishna!");
}

myFunction();
myFunction();                                       // calling or evoking.
myFunction();




function myMessage(msg) {
    console.log(msg);
}

myMessage("HARE KRISHNA!");




function sum(x, y) {
    s = x + y;
    return s;
}

let val = sum(3,7);
console.log("Sum is: ",val);



// Arrow function :


const arrowSum = (a, b)=>{
    return a * b;
}

let res = arrowSum(7,3);
console.log(res);




// Practice Q - 1.

function countVowels(str) {

    let count = 0;

   for(let char of str){
   if(
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u" 
  ){
    count++;
  }
   }
  return count;
}


const countVow = (name)=>{

    let cnt = 0;

    for(let ch of name){
    if(
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u" 
    ){
        cnt++;
    }
    }
    console.log(cnt);
}





function addNumbers(p, q) {
    return p + q;
}

let num1 = 3;
let num2 = 7;

let suM = addNumbers(num1,num2);
console.log(`The sum is: ${suM}`);




// .forEach loop in arrays.

let arr = [1,2,3,4,5]

arr.forEach((val) =>{
    console.log(val);
})



let str = ['Mumbai','Pune','Delhi','Banglore','Kerala']

str.forEach(function cities(value, idx, arry){                 // value - index - array.
    console.log(value.toUpperCase(), idx, arry);
})




// Array Methods --> Map.

let nums = [53,2,26,21,5]

let newArr = nums.map((vaL) => {
    return vaL * 2;
})
console.log(newArr);



// Array Methods --> Filter.

let dig = [1,2,3,4,5,6,7,8,9]

let evenArr = dig.filter((evenNum) => {
    return evenNum % 2 === 0;                    // even numbers.
})
console.log(evenArr);


let oddArr = dig.filter((oddNum) => {
    return oddNum % 2 !== 0;                     // odd numbers.
})
console.log(oddArr);



// Array Methods --> Reduce.

let say = [2,26,54,21,5]

let output = say.reduce((prev, curr) => {           // 1 + 2 +3 + 4 + 5 = 
    return prev + curr;
})
console.log(output);                               // 15.


let newOutput = say.reduce((prev, curr) => {           
    return prev > curr ? prev : curr;               // to retrun greater number.
})
console.log(newOutput);   





// Practice.

let marks = [83,26,89,95,67,92]

let toppers = marks.filter((score) => {
    return score > 90;
})
console.log(toppers);



let n = prompt("Enter a number: ");

let emp = [];

for (let i = 1; i <= n; i++){
    emp[i - 1] = i;                  // 1(0), 2(1), 3(2) --> Index.
}
console.log(emp);

let the_sum = emp.reduce((res,cur) => {
    return res + cur;
})
console.log("sum =",the_sum);

let factorial= emp.reduce((res,cur) => {
    return res * cur;
})
console.log("Factorial =",factorial);





// Practice Q - 2.

let num = [1,2,3,4,5]

num.forEach((sqr) => {
    console.log(`The square is ${sqr*sqr}`);          // OR   sqr**2
})







// Define and Declare a funnction.

function printMe() {
    console.log('printing...!');
}
printMe();
printMe();




function printThis(param) {
    console.log(param);
}
printThis('Hare Krishna!');
printThis('Hare Rama!');




const printMeAgain =function() {
    console.log('Print');
}
printMeAgain();




const printMeAgainWithParam =  function(a,b) {
    console.log(a,b);
}
printMeAgainWithParam(21,50);
printMeAgainWithParam(50,21);





// Returning a function.

function sumRtn(a,b) {
    return a + b;
}
let ans = sumRtn(21,50);
console.log(ans);



function subRtn(a,b) {
    return a - b;
}
let sub = subRtn(21,50);
console.log(sub);




// Default Parameters.

function calc(m, n=0) {   // default param.
    return (2*(m + n));
}
let sol = calc(5);
console.log(sol);


// Rest Parameters.

function rest(u,...v) {   // only one and should be at last.
    console.log(u);
    console.log(v);
 }
rest(1,2,3,4,5,6,7,8,9);



// Arrow function.

const mul = (i, j) => {
    return i * j;
}
let result = mul(7,3);
console.log(result); 



// Nested function.

function outer() {
    console.log('Outer');
    function inner() {
        console.log('Inner');
    }
    inner();
}
outer();



// Function Scope.

/*function doSomething() {
    let e = 21;                  // Variables declared inside the scope cannot be accessed 
    const f = 50;                      
    var g = 3;
    
}
console.log(e,f,g);             // Outside the function scope.
doSomething();
*/


let r = 21;
const u = 50;
var t = 3;

function doneSomething() {      // Variables declared outside the scope can be accessed
    console.log(r,u,t);        //  Inside the function scope.
}
doneSomething();




// Closures.

function outerBox(c) {
    function innerBox(d){       
        return c + d;
    }
    return innerBox;
}
let outerVal = outerBox(10);

let endRes = outerVal(20);
console.log(endRes);       




// Callback function.

function foo(bar) {
    bar();                       // calling or invoking the function.
}

foo(function() {                 // anonymous function --> in the parameter(bar).
    console.log('bar');
})


function named() {              // named the function --> named().
    console.log('barr');
}
foo(named);                    // passed (named) as an argument in the parameter (bar) to callback.



function callB() {
    console.log('Calling back the function.');
}
callB();
foo(callB);






// Higher Order Functions.(HOF)

// 1. It takes one or more funcions as an argument.
// 2. It may return a function.

function getCapture(camera) {
    camera();
}

getCapture(function(){
    console.log('Canon');
})

function returnFn() {
    return function(){                              // returns a funnction.
        console.log('Returning a function');
    } 
}

const fn = returnFn();                              // Variable --> function_name to return the function.
fn();                                               // Calling / invoking the same variable to return the function.

