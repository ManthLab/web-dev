

var home = document.querySelector("#home");

var about = document.querySelector("#about");

var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");

var abouttext = document.querySelector("#abouttext");

var contacttext = document.querySelector("#contacttext");

function hideAll() {
    hometext.style.display = "none";
    abouttext.style.display = "none";
    contacttext.style.display = "none";
}

home.addEventListener("click", function() {
    hideAll(); 
    hometext.style.display = "block";
    hometext.style.width = "70%";
})

about.addEventListener("click", function() {
    hideAll();
    abouttext.style.display = "block";
    abouttext.style.width = "70%";
})

contact.addEventListener("click", function() {
    hideAll();
    contacttext.style.display = "block";
    contacttext.style.width = "70%";
})