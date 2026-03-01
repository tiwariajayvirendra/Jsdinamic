const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit =fruits.pop()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(Array.isArray(fruits))

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];


console.log(fruits)

////////////////////////////////////////////////////

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

console.log(myChildren)


const points = new Array();
const points = [];

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];

const points = new Array(40, 100, 1, 5, 25, 10);
const points = [40, 100, 1, 5, 25, 10];


Create an Array with three elements:
const points = new Array(40,100,1)
 
console.log(Array.isArray(points))
console.log(typeof(points))

const fruits = ["Banana", "Orange", "Apple"];

(fruits instanceof Array);
console.log(fruits)\\

const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}

for (let i in myObj.cars) {
  x += myObj.cars[i].name ;
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
  console.log(x)
}
console.log(myObj)

const arr1 = ["Emil", "Tobias", "Linus"];
const myChildren = arr1.concat("Peter"); 

console.log(myChildren)


const fruits = ["Banana","Orange","Apple","Mango"]
fruits.copyWithin(2, 0,2);

console.log(fruits)
////////////////////////////////////////////////
Flatening array 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(typeof(newArr))

Array flatMap()

const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);

console.log(newArr)

Java Script Array Splice()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0,  "Lemon", "Kiwi");



const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits)


Splice()to remove Elements

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);

console.log(fruits)
console.log(fruits) // Old method altered the original array,



JavaScript Array toSpliced()

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
console.log(spliced)
console.log(months) // the original array unchanged ,



JavaScript Array slice()
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3);

console.log(citrus)
 
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1,3);

console.log(citrus)

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(2);

console.log(fruits)
