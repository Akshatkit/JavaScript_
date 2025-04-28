// ------------- data type ---------------

// primitive --> string, number, boolean, null, undefined, symbol

// const userID = Symbol(123);
// const adminID =Symbol(123);
// console.log(userID === adminID); // false
// console.log(userID == adminID); // faslse







// non-primitive --> object, array, function

// let array1 = ["ram", "shyam", "krishna"];
// console.log(array1);
// console.log(typeof array1);// object

// let obj1 = {
//     name: "ram",
//     age: 20,
//     city: "kanpur",
// }
// console.log(obj1);
// console.log(typeof obj1);//object

// object is a collection of key-value pairs
// array is a collection of values
// function is a block of code that can be called
// function is a first class object

// let fumction1 = function () {
//     console.log("hello");
// }
// console.log(fumction1);
// console.log(typeof fumction1);// function
// console.log(fumction1());
// function is a first class object



//-----------memory management------------------
// 1. stack memory
// stack memory is used for primitive data types
// stack memory is used for function calls
//stack memory pass a copy of the value
// let num1 =20;
// num2 = num1;
// num2 = 30;
// console.log(num1); // 20
// console.log(num2); // 30


// 2. heap memory
// heap memory is used for non-primitive data types
// heap memory is used for objects
// heap memory pass a reference of the value
// heap memory is used for arrays


// let obj1 = {
//     name: "ram",
//     age: 20,
//     city: "kanpur",
// }
// let obj2 = obj1;
// obj2.name = "shyam";
// console.log(obj1.name); // shyam
// console.log(obj2.name); // shyam


//------------string-------------------
// string is a collection of characters
// string is a non-primitive data type
// string is a immutable data type
// string is a collection of characters

let str1 = "hello";
let str2 = "                      akshat          ";

// console.log(str1.length); // 5
// console.log(str2.toUpperCase()); // HELLO
// console.log(str2);

console.log(str1.charAt(2)); // hello
console.log(str1.indexOf('o')); // h

console.log(str1.lastIndexOf('l')); // 3
console.log(str1.slice(1, 4)); // ell
console.log(str1.substring(1, 4)); // ell
console.log(str1.substr(1, 4)); // ello
console.log(str1.split('l')); // [ 'he', 'lo' ]
console.log(str1.replace('l', 'L')); // heLlo
console.log(str1.replaceAll('l', 'L')); // heLLo
console.log(str1.includes('l')); // true
console.log(str1.startsWith('h')); // true
console.log(str1.endsWith('o')); // true
console.log(str2.trim()); // hello
console.log(str2.trimStart()); // hello
console.log(str2.trimEnd()); // hello