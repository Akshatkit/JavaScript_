const newSymbol = Symbol("Key1")

const obj = {
    name : "Akshat",
    cource : "B.Tech",
    rollNum : "2201650109007" ,
    branch : "Computer Science And Engineering",
    Section : "C",
    PhoneNum : "8574597008",
    [newSymbol] : "mykey1"   // syntox to acces a symbol data type in object and Type of is undefined 
}

// console.log(obj.name)
// console.log(obj["rollNum"])

// console.log(typeof obj.newSymbol)
 
// console.log(obj.newSymbol)

// obj.PhoneNum = "8858442241"

// console.log(obj)
// Object.freeze(obj)   // object values not be change

// obj.PhoneNum = "9839435382"

obj.greeting = function(){
        console.log("Hello, Mr",obj.name);
    
}    

obj.greetingT = function(){
    console.log('Hello, Mr ', this.name);  //this function used when same function value call in the function

}    

console.log(obj.greeting())
console.log(obj.greetingT())

