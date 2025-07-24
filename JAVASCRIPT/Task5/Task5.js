
var start = document.querySelector("#start");

var stop = document.querySelector("#stop");

var h3 = document.querySelector("h3");

var int;


start.addEventListener("click", function() {

    var count = 0;
    int = setInterval(function() {                      // 1 sec = 1000 millisec.
        h3.textContent = count;
        count++;
    },1000);
})


stop.addEventListener("click", function() {
    clearInterval(int);
})