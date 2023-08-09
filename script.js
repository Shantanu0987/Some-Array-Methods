let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write(arr);

//print array values to console.log using forEach method.
console.log("printed arrays values using forEach method");

arr.forEach((item) => console.log(item));

//print even values to console.log using forEach method
console.log("printed even values using forEach method");

let output = [];

arr.forEach((item) => {
  if (item % 2 === 0) {
    output.push(item);
  }
});

output.forEach((item) => console.log(item));

//print even values to console.log using filter method
console.log("printed even values using filter method");

let filterEven = arr.filter((i) => i % 2 === 0);

console.log(filterEven);

//print odd values to console.log using filter method
console.log("printed odd values using filter method");

let filterOdd = arr.filter((i) => i % 2 !== 0);

console.log(filterOdd);

//check arr have number 5 or not by using find method
console.log("checked arr have number 5 or not by using find method");

let found = arr.find((i) => i == 5);
console.log(found);

//check arr have number 11 or not by using find method
console.log("checked arr have number 11 or not by using find method");

let notFound = arr.find((i) => i == 11);
console.log(notFound);

//check the position of number 5 by using findIndex method
console.log("checked the position of number 5 by using findIndex method");

let findIx = arr.findIndex((i) => i == 5);
console.log(findIx);

//check the position of number 11 by using findIndex method
console.log("checked the position of number 11 by using findIndex method");

let find_11 = arr.findIndex((i) => i == 11);
console.log(find_11);

//duble the array's values by using map method
console.log("dubled the array's values by using map method");

dblArray = arr.map((i) => i * 2);
console.log(dblArray);

//half the array's values by using map method
console.log("halfed the array's values by using map method");

halfArray = arr.map((i) => i / 2);
console.log(halfArray);
