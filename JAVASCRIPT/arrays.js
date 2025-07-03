
// Arrays :

let heroes = ["Thor","Ironman","CaptainAmerica","Spiderman","Hulk"]

console.log(heroes);
console.log(heroes.length);



// looping over an Array :

// for :

for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}


// for - of :

let cities = ["Mumbai","Pune","Delhi","Hyderabad","Mysore"]
console.log(cities);

for (let city of cities) {
    console.log(city.toUpperCase());
}



// Practice Q - 1.

let marks = [85,97,44,37,76,60]
console.log(marks);
console.log(marks.length);

let sum = 0;

for (let val of marks) {
console.log(val);
    sum = sum + val;
}
console.log(`Total marks: ${sum}`);

let avg = sum / marks.length;
console.log(avg);

console.log(`The average marks are: ${avg}`);






// Practice Q - 2.

let price = [250,645,300,900,50]
console.log(price);

let idx = 0;
for (let val of price) {
    console.log(`The index for ${idx} = ${val}`);

    let off = val / 10;
    price[idx] = price[idx] - off;

    console.log(`The price after offer is updated as:${price[idx]}`);

    idx++;
}


// Other method :

let items = [250,645,300,900,50];
console.log(items);
console.log(items.length);

for (let j = 0; j < items.length; j++) {

    let offer = items[j] / 10;

    items[j] = items[j] - offer;

}
console.log(items);




// Array - Methods 
 
// Push() :

let foodItems = ["Banana","Paneer","Oats","Bread","Milk"]
console.log(foodItems);

foodItems.push("Chips","Tomato","Coconut");



// Pop() :

let foodItems1 = ["Banana","Paneer","Oats","Bread","Milk"]
console.log(foodItems1);

let deletedItem = foodItems1.pop();
console.log(foodItems1);
console.log("Item deleted:",deletedItem);


// toString() :

console.log(foodItems.toString());



// concat() ;

let marvelHeroes = ["Thor","Ironman","Spiderman"]

let dcHeroes = ["Superman","Batman"]

let indianHeroes = ["Shaktiman","Krish"]

let allHeroes = marvelHeroes.concat(dcHeroes, indianHeroes);

console.log(allHeroes);



// unshift?() :

marvelHeroes.unshift("Antman");

console.log(marvelHeroes);



// shift() :

let delHeroes = dcHeroes.shift();
console.log(delHeroes);
console.log(dcHeroes);


// slice() :

console.log(marvelHeroes);
console.log(marvelHeroes.slice(1,3));


// splice () :

let nArr = [1,2,3,4,5,6,7]
console.log(nArr);

let newArr = nArr.splice(3,1,8);
console.log(nArr);

let newArr1 = nArr.splice(4,2,101,102);
console.log(nArr);



// Practice Q - 1 :

let comp = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]

let rem = comp.shift();
console.log(comp);
console.log(`Removed Company is: ${rem}`);


let add1 = comp.splice(1,1,"Ola");
console.log(comp);
console.log(`Added company is: ${add1}`);


let add2 = comp.push("Amazon");
console.log(comp);

