// const newSymbol = Symbol("Key1")

// const obj = {
//     name : "Akshat",
//     cource : "B.Tech",
//     rollNum : "2201650109007" ,
//     branch : "Computer Science And Engineering",
//     Section : "C",
//     PhoneNum : "8574597008",
//     [newSymbol] : "mykey1"   // syntox to acces a symbol data type in object and Type of is undefined 
// }

// console.log(obj.name)
// console.log(obj["rollNum"])

// console.log(typeof obj.newSymbol)
 
// console.log(obj.newSymbol)

// obj.PhoneNum = "8858442241"

// console.log(obj)
// Object.freeze(obj)   // object values not be change

// obj.PhoneNum = "9839435382"

// obj.greeting = function(){
//         console.log("Hello, Mr",obj.name);
    
// }    

// obj.greetingT = function(){
//     console.log('Hello, Mr ', this.name);  //this function used when same function value call in the function

// }    

// console.log(obj.greeting())
// console.log(obj.greetingT())


// -------object 2.0 ------------

// const tinderUser = new Object()  // singalton Object

// const tinderUser = {
//     email: "akshatBaniyaa@gmail.com",
//     userDetail:{username: "Akshat gupta",
//         userPhnone : {Pnum1:"8858442241",Pnum2:"8574597008"}
//     }
// }

// console.log(tinderUser.userDetail?.userPhnone.Pnum1)

// const obj1 = {A:"a",B:"b"}
// const obj2 ={ C:"a",D:"b"}

// const obj3 = {obj1 , obj2} //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({},obj1,obj2)  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj3 = {...obj1 , ...obj2}  // spreed 


// const newArr = [
//    {A:"a",B:"b"},
//    {C:"a",D:"b"}
// ]



// console.log(Object.keys(obj1))
// console.log(Object.values(obj1))
// console.log(Object.entries(obj1))


// -------Object de-structuring-----

// const obj = {
//     id : 1001 ,
//     name : "Akshat",
//     email:"akshat@gmail.com"
// }

// const {email} = obj
// console.log(email)