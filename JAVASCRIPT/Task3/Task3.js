

/*var form = document.querySelector("form");

var tex1 = document.querySelector("#tex1");      ----\
                                                      >  What if there are too many entries ?
var tex2 = document.querySelector("#tex2");      ----/

var h4 = document.querySelector("h4");

form.addEventListener("submit", function(eve) {
    eve.preventDefault();

    if(tex1.value.trim() === "" || tex2.value.trim() === ""){
        h4.textContent = "Error!";
        h4.style.color = "red";

    }

})*/




// The correct way :

var form = document.querySelector("form");

var inps = document.querySelectorAll("input[type='text']");       // If there are many entries.

var  h4 = document.querySelector("h4");


form.addEventListener("submit", function (eve) {
    eve.preventDefault();                                        // prevents from feed refresh.

    for(var i = 0; i < inps.length; i++){
        if(inps[i].value.trim() === ""){                        // trim -> to ignore the spaces.
            h4.textContent = "Error, some fields are blank !";
            h4.style.color = "red";
            break;
        }
    }
})