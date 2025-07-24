

function callBack(a, b) {
    b();                                           // parameter b is called.
}
callBack(5, function () {                         // function is passed as an arguement in parameter b.
    console.log("CallBack function evoked.");
});


function foo(bar) {
    bar();                       // calling or invoking the function.
}

foo(function() {                 // anonymous function --> in the parameter(bar).
    console.log('bar');
})


function named() {              // named the function --> named().
    console.log('barr');
}
foo(named);                    // passed (named) as an argument in the parameter (bar) to callback.



function callB() {
    console.log('Calling back the function.');
}
callB();
foo(callB);



// Generators :

function* allNums() {
    for (let i=1; i<11; i++){
        yield i;                  // yield keyword is used to pause the execution of the function.
    }
}
const  ans = allNums();

console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);
console.log(ans.next().value);