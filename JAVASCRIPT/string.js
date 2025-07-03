
// Strings :

let str = "Hare Krishna";
console.log(str);


// length :

console.log(str.length);


// Indices :

console.log(str[0],str[3],str[7]);



// escape characters :

let str1 = "Hare \nKrishna!";
console.log(str1);

let str2 = "Hare \tRama!";
console.log(str2);
console.log(str2.length);

let str3 = "Hare Krishna Hare Krishna\n\tKrishna Krishna Hare Hare\n\t\tHareRama HareRama Rama Rama\n\t\t\t\tHare Hare!"
console.log(str3);


// Template Literals :

let string = `This is a Template Literal`;
console.log(string);


// String Interpolation :

let obj = {
    item : "Book",
    price : 350
}

console.log("The cost of this",obj.item,"is",obj.price);

let strInp =`The cost of this ${obj.item} is ${obj.price}`   // Interpolation
console.log(strInp);

                         // OR 

console.log(`The cost of this ${obj.item} is ${obj.price}`);


let exp = `Can also add Expressions ${3+12+21}`
console.log(exp);




// String Methods :

let stR = "     Hare Krishna !";
let newstR = stR.toUpperCase();   

console.log(stR);
console.log(newstR);


let newstr = stR.toLowerCase();
console.log(newstr);

let newStr = stR.trim();
console.log(newStr);



let slc = "01234567";
console.log(slc.slice(0,4));       // str.slice()



let Str1 = "Hare";

let Str2 = "Krishna";

console.log(Str1.concat(Str2));    // str1.concat(str2)

let Str3 = Str1 + Str2;

console.log(Str3);



let rep = "Hare Rama";
console.log(rep);
console.log(rep.replace("Rama","Krishna"));   // str.replace(search,new)



let chr = "The Secret";
console.log(chr.charAt(4));             // str.charAt()

let chr1 = chr.replace(' ','-');
console.log(chr1);




// Practice Q - 1.

let fullName = prompt("Enter your full name without any spaces.");

let size = fullName.length;
console.log(`Generated user name is:@${fullName}${size}`);              


let userName = '@' + fullName + fullName.length;
console.log(userName);