
var para = document.querySelector("p");

var btn = document.querySelector("button");

btn.addEventListener("click", function() {
    para.textContent = "Hare Krishna!";
    para.style.color = "yellow";
    document.body.style.backgroundColor = "black";
})