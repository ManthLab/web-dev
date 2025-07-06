

var arr = [1,2,3,4,5];      // arrrays are mutable.
var arr2 = arr;             // reference.

arr2.pop();                // Both arrays will be affected.

console.log(arr);
console.log(arr2);



var state = [1,2,3];       // State is immutable , cannot be changed directly.
state.pop();              // Not allowed.
console.log(state);



// Update state in immutable way , using spread operator.

var state1 = [1,2,3,4,5];             
var copy = [...state1];                //...spread operator, So that we can modify copy without affecting state1.

copy.pop();
console.log(`State1 is: ${state1}`);
console.log(`Copy is: ${copy}`);



var state2 = {name:'Manthan', age:23};
var copy2 = {...state2};

copy2.name = 'Harshita';

console.log(state2);
console.log(copy2);

state2 = copy2;                        // Now state2 is also changed.
console.log(state2);



// Destructuring.

var obj = {name: 'Manthan', age: 23};
/*
obj.age;
obj.age; 
*/
var {age} = obj;                       // Destructuring, we can assign values to variables directly from objects.



var obj1 = {name: 'string', age: 23, email: 'manthan@gmail.com'};

var {name, age, email} = obj1; 



var obj2 = {name: 'string', 
    social:{
    instagram:{
        followers: 1000,
        following: 500,
    }
}}

var {following} = obj2.social.instagram;





var arry = [21, function() {}, 50];
var [first,, third] = arry;                    



// Arrow functions.

const abcd = () =>{
    console.log('Hello, I am Manthan.');
}


const efgh = () => 21;                       // We can return values from arrow functions directly.
console.log(efgh() + 29);                   // 50.


const ijkl = () => ({name: 'Manthan', age: 23});       // To return as an object, we need to enclose it in curly brackets.
console.log(ijkl());                                  // {name: 'Manthan', age: 23}.




// map.  --> Transforms each element of an array into another array.

var numbers = [1, 2, 3, 4, 5];
let newNum = numbers.map(val => val*2);             // use map to create a new array with the values multiplied by 2.

console.log(newNum);


var state = [1,2,3,4,5,6,7,8,9,10];
let ans = state.map(elem => elem>5 ? elem+5 : elem);   // condition ? true : false.

console.log(ans);

state = ans;

// map returns a new array, it does not change the original array.
// map returns every element in the array.



// filter.  --> Selects and Extracts elements from an array based on a specified condition.

var num = [1, 2, 3, 4, 5];
let ansN = num.filter(elem => elem>3);             // filter returns every element in the array that meets the condition.
console.log(ansN);                       


var profile = [
    {name: 'Manthan', age: 23},
    {name: 'Harshita', age: 22},
    {name: 'Harshu' , age: 21}
]
let profAge = profile.filter(elem => elem.age>22);
console.log(profAge);
     