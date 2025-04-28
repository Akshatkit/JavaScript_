// ------------- data type ---------------

// primitive --> string, number, boolean, null, undefined, symbol

const userID = Symbol(123);
const adminID =Symbol(123);
console.log(userID === adminID); // false
console.log(userID == adminID); // faslse







// non-primitive --> object, array, function

let array1 = ["ram", "shyam", "krishna"];
console.log(array1);
console.log(typeof array1);// object

let obj1 = {
    name: "ram",
    age: 20,
    city: "kanpur",
}
console.log(obj1);
console.log(typeof obj1);//object

// object is a collection of key-value pairs
// array is a collection of values
// function is a block of code that can be called
// function is a first class object

let fumction1 = function () {
    console.log("hello");
}
console.log(fumction1);
console.log(typeof fumction1);// function
console.log(fumction1());
// function is a first class object
