// setTimeout :

// Ex : 1

console.log("one");
console.log("two");
console.log("three");

function myFunction() {
    console.log("hello");
}
setTimeout(myFunction, 5000);   // takes 5 seconds to execute, 5 seconds = 5000 milliseconds.

console.log("four");
console.log("five");


// Ex : 2

console.log("hey 1");
console.log("hwy 2");

 setTimeout( function (){
    console.log("hey 3 will print after 3secs");
 },3000);

 console.log("hey 4");


 // setInterval :

console.log("yesterday");
console.log("today");
console.log("tomorrow");

var count = 0;
const stopInterval = setInterval(() => {
    ++count;
    console.log(count);
    if( count === 5 )  clearInterval(stopInterval);
},7000);

console.log("day after tomorrow");


