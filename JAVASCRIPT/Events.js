
//Accessing :

let btn = document.querySelector("#btn");

let eve = document.querySelector("#eve");

let Btn = document.querySelector("#Btn");

let eveL = document.querySelector("#eveL");

let btn4 = document.querySelector("#btn4");



// Performing Events :

btn.onclick = () => {
    console.log("Button was clicked.");
    let a = 20;
    a++;
    console.log(`Button was clicked ${a} times.`);
}


eve.onmouseover = (evt) => {                                 // evt : Event Object.
    console.log("Mouse is hovered on the div.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

}



Btn.onclick = (evt) => {                                     // evt : Event Object.
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);

}



// addEventListener :

eveL.addEventListener("click", (evt) => {                    
    console.log("Event Listener is been added.");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
})


eveL.addEventListener("click", () => {                                  // Same event --> Multiple works.
    console.log("Event Listener is been added by handler-2.");
})




btn4.addEventListener("click", () =>{
    console.log("Button clicked by handler-1");
})

btn4.addEventListener("click", () =>{
    console.log("Button clicked by handler-2");
})

const handler3 = () => {                                        // Store the function(which is to be remove) inside a variable.
    console.log("Button clicked by handler-3");
}
btn4.addEventListener("click",handler3);                        // Pass the function(variable).

btn4.addEventListener("click", () =>{
    console.log("Button clicked by handler-4");
})


btn4.removeEventListener("click",handler3);                      // removing event listener.



// Practice Question - 1.

let togBtn = document.querySelector("#togBtn");

let currMode = "Light";

let body = document.querySelector("body");



togBtn.addEventListener("click", () => {

    if (currMode === "Light") {
    currMode = "Dark";
    body.classList.add("dark");
    body.classList.remove("light");
    }
    else {
        currMode = "Light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    
    console.log(currMode);
})
