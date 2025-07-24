

//alert("Let's learn !");
console.log("Hii,This is Manthan.");


// window --> object.

console.dir(window.document);
console.dir(document.body);
console.log(document.body);



// DOM --> Manipulation.

// Accessing by id:
let button = document.getElementById("myId");
console.dir(button);


// Accesssing by class:
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);


// Accessing by tag:
let para = document.getElementsByTagName("p")
console.dir(para);
console.log(para);


// Accessing by querySelector:
let  firstEl = document.querySelector("#myId")      // returns first elememt.
console.dir(firstEl);

let allEl = document.querySelectorAll(".myClass")   // returns a Node list.
console.dir(allEl);





// Dom_prac - 1.

let append = document.querySelector("h2");                  // accessing by tag.
console.log(append.innerText);                              // property to change.

append.innerText = append.innerText + "\tfrom Manthan Pawar.";  // concatenate (append+).




// Dom_prac - 2.

let boxes = document.querySelectorAll(".box");                 // accessing by .class.
console.log(boxes);
           
boxes[0].innerText = "Adding Unique text-1";                  // adding text to each div or box.
console.log(boxes[0]);

boxes[1].innerText = "Adding Unique text-2";                  // adding text to each div or box.
console.log(boxes[1]);

boxes[2].innerText = "Adding Unique text-3";                  // adding text to each div or box.
console.log(boxes[2]);



// Using - loop.

let idx = 1;
let divs = document.querySelectorAll(".loop");  

for(div of divs){
    div.innerText = `This is using loop. ${idx}`;
    idx++;

}



// Attributes :

let divv = document.querySelector("div");          // accessing 
console.log(divv);


let attr = divv.getAttribute("id");               // get the attribute value.
console.log(attr);


let newAttrVal = divv.setAttribute("id","newAttrVal");
console.log(newAttrVal);



// Style :

div.style.backgroundColor = "green";
div.style.backgroundColor = "purple";

div.style.fontSize = "26px";

div.innerText = "Hello!";



// Insert - Elements:

let newBtn = document.createElement("button");        // creating a new element button.
newBtn.innerText = "Click me!";

console.log(newBtn);


let div1 = document.querySelector("div");
div.append(newBtn);


let newHeading = document.createElement("h2");
newHeading.innerHTML = "<i>Hare Krishna!</i>";

document.querySelector("body").prepend(newHeading);
