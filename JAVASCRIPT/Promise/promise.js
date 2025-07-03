

new Promise((resolve, reject) => {
    console.log("Promise is resolved.");
    resolve();                                                                // request fulfilled.
});

let promise = new Promise((resolve, reject) => {
    console.log("Promise is rejected due to some error.");
    reject("Error");                                                         // request rejected due to some error
});


// .then() & .catch() 

let p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Fetching promise 1 data.....");
          resolve();
        //reject("Error");
    },3000);   
    });
    p1.then((res) => {
        console.log("Data 1.");
    });
    p1.catch((err) => {
        console.log("Network Error.");
    });

 




let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;                              // Change this to false to test error case

        if (success) {
            resolve("Task completed successfully!");
        } else {
            reject("Something went wrong.");
        }
    }, 5000); // 2-second delay
});

myPromise
    .then((result) => {
        console.log("Success:", result);
    })
    .catch((error) => {
        console.log("Error:", error);
    });
