

// <input> element --> <li> (list) --> <li> joins <ul> 

var li;

var ul = document.querySelector("ul");

var add = document.querySelector("#add");

var rem = document.querySelector("#rem");

var inps = document.querySelector("input");


add.addEventListener("click", function() {

    if(inps.value.trim() === "" ){}

    else{

        li = document.createElement('li');           // Create list so the input elements will have a space to store.
        li.textContent = inps.value;
        ul.appendChild(li);                         // append the created list with ul.
        inps.value = "";
    }

})


rem.addEventListener("click", function() {

        ul.removeChild(li);

})