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
    console.log('Hello Mr.'+username)

}
greet()

