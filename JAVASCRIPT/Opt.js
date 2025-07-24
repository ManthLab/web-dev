
//////////////////////////////////////////////////////////////////    Operators & Conditional Statements.   /////////////////////////////////////////////////////////////////////////


// Arithmetic Operators :


let m = 7;

let n = 3;

/*let p = m + n;

console.log("m = ",m, "& n = ",n);
console.log("p =",p);

console.log("m + n = ", m + n);

console.log("m - n = ", m - n);

console.log("m * n = ",m * n);

console.log("m / n = ",m / n);

console.log("m % n = ",m % n);

console.log("m ** n = ",m ** n);*/



//Unary Opretors :

console.log("m = ",m,"& n = ",n);

m++;

n--;

console.log("m = ",m);

console.log("n = ",n);


// Post & Pre

console.log("m++ = ",m++);
console.log("m = ",m);      // Post 

console.log("++m = ",++m);  // Pre 



// Assignment OPerators :

let a = 5;

let b = 3;

let c = 7;

let d = 21;

let e = 12;

a += 1;
console.log("a = ",a);

b -= 1;
console.log("b =",b);

c *= 3;
console.log("c =",c);

d %= 2;
console.log("Ans =",d);

e **= 3;
console.log("e =",e);



// Comparison Operators :

let x = 3;

let y = 7;

let z = 9;

console.log("x == y",x == y); // false

console.log("x != y",x != y); // true



let x1 = 21; // Number 

let x2 = "21"; // String

console.log("x1 === x2",x1 === x2); // false

console.log("x1 !== x2",x1 !== x2); // true


console.log("x > y",x > y);    // false
console.log("z >= x",z >= x);  // true

console.log("y < z",y < z);    // true
console.log("z <= y",z <= y);  // false



// Logical Operators :

let p = 21;
 
let q = 12;

let r = 21;

console.log("p && q = ", p != q && p === r); // AND : [ True + True = True ]

console.log("p || q", p >= q || p <= q);    // OR : [ True + False = True ]

console.log("p ! q", !(p === r));           // NOT : [ True -> False  ,  False -> True ]
