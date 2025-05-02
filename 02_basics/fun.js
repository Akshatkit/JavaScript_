console.log("Hello this is function File")
// function check(){
//     console.log("This is First Function")

// }
// check()


//----------Function with parameter-----

function add(num1 , num2){
    let sum = num1+num2
    console.log(sum)
}

// add(5,5)
// let sum = add(5,5)
// console.log(sum)   // undefine

function add(num1 , num2){
    
    return num1+num2
}
// let sum = add(5,5)
// console.log(sum)


function greet(username ){
    if (!username){
        console.log("Please Enter user name")
        return

    }
    console.log(`Hello Mr. ${username}`)

}
// greet('Akshat')

const user = {
    name : 'Akshat gupta',
    price : 200
}

function display(userprint){
    return `Hi ${userprint.name} your purchasing bill ${userprint.price}`
}

// console.log(display(user))



function show(...itemPrice){
    let sum= 0;
    for (let i =0; i< itemPrice.length;i++){
        sum = sum + itemPrice[i]
    }
    return sum
}

// let totalPrice = show(400, 500 , 20,114, 25)
// console.log(`total Price is ${totalPrice}`)




