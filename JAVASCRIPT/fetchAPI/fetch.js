

let URL = "https://dog.ceo/api/breeds/image/random";

let pic = document.querySelector("#img");
let btn = document.querySelector("#btn");


const dogData = async () => {
    console.log("Fetching Data..!");
    let response = await fetch(URL);
    console.log(response);                                //JSON format.
    let data = await response.json();
    console.log(data);
    console.log(data.message);

     // Clear previous image
     //pic.innerHTML = "";

     // Create a new img element
     let imageElement = document.createElement("img");
     imageElement.src = data.message;
     imageElement.alt = "Random Dog";
     imageElement.style.width = "300px"; // optional styling
     imageElement.style.border = "2px solid black";
 
     // Append image to the div
     pic.appendChild(imageElement);
 };
 
 btn.addEventListener("click", dogData);




fetch('https://randomuser.me/api/')

//fetch(url)
.then(raw => raw.json())
.then(readable => console.log(readable.results[0].gender));