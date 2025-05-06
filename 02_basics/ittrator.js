console.log("----------------------Ittrator file-----------------------------")

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element)
    
// }

// break And continue




// while (true) {
//     console.log("1");
    
// }   // infinity loop






// do{
//   console.log("number")
// }while(false)



//-------------------for of loop and for in loop----------------



//------for off loop -------------


//map

// const map = new Map()
// map.set('PY',"PYTHON")
// map.set('JAVA' , "JAVA")
// map.set('CPP' , "C++")
// map.set('rb',"Ruby")
// map.set('js',"JavaScript")
// map.set('css',"Cascading Style Sheed")

// console.log(map)

// for (const item of map) {
//     console.log(item)
    
// }
/* output ==========
[ 'PY', 'PYTHON' ]
[ 'JAVA', 'JAVA' ]
[ 'CPP', 'C++' ]
[ 'rb', 'Ruby' ]
[ 'js', 'JavaScript' ]
[ 'css', 'Cascading Style Sheed' ]
 */


// for (const [item , value] of map) {
//     console.log(`${item} and the Value is ${value}`);
    
    
// }
/* output
PY and the Value is PYTHON
JAVA and the Value is JAVA
CPP and the Value is C++
rb and the Value is Ruby
js and the Value is JavaScript
css and the Value is Cascading Style Sheed  */

// for of in array
// const arr = [10,20,30,40,50,60]

// for (const item of arr) {
//     console.log(item);
// }

// let str = new String()
// str = "Hello World !"

// for (const item of str) {
//     console.log(item);
    
    
// }

// let obj = { PY: 'PYTHON', 
//     JAVA: 'JAVA',
//     CPP: 'C++' ,
//     rb: 'Ruby',
//     js: 'JavaScript' ,
//     css:'Cascading Style Sheed' }

// for (const [item,value] of obj) {
//     console.log(item);
    
// }


// for in loop------------------

// const map = new Map()
// map.set('PY',"PYTHON")
// map.set('JAVA' , "JAVA")
// map.set('CPP' , "C++")
// map.set('rb',"Ruby")
// map.set('js',"JavaScript")
// map.set('css',"Cascading Style Sheed")

// for (const key in map) {
//     console.log(key);
    
// } // no output


// let obj = { PY: 'PYTHON', 
//     JAVA: 'JAVA',
//     CPP: 'C++' ,
//     rb: 'Ruby',
//     js: 'JavaScript' ,
//     css:'Cascading Style Sheed' }

// for (const key in obj) {
//    console.log(`${obj[key]} there short cut is ${key}`);
   
// }



// for each loop

// let obj = { PY: 'PYTHON', 
//     JAVA: 'JAVA',
//     CPP: 'C++' ,
//     rb: 'Ruby',
//     js: 'JavaScript' ,
    // css:'Cascading Style Sheed' }        // not working in obj

// obj.forEach( (key) => {
//     console.log(key)
    
// });


const arr =[ 1,2,3,4,5]

// arr.forEach((item) => {
//     console.log(item);
    
    
// });


// arr.forEach(function (item)  {
//     console.log(item);
    
    
// });



// function ptr(num) {
//     console.log(num);
        
// }

// arr.forEach(ptr)


// const book = [

//     { Title : "Book One ", genre : "Fiction ", publis : 1999 , edition : 4},
//     { Title : "Book Two ", genre : "Non-Fiction ", publis : 1992 , edition : 6},
//     { Title : "Book Three ", genre : "Science ", publis : 2004 , edition : 3},
//     { Title : "Book Four", genre : "Math ", publis : 2009 , edition : 2},
//     { Title : "Book Five", genre : "Non - Fiction ", publis :1999  , edition :5 },
//     { Title : "Book Six", genre : "History ", publis : 1986 , edition :4 },
//     { Title : "Book Seven", genre : "Math ", publis :2002  , edition :3 },
//     { Title : "Book Eight", genre : "Science ", publis : 2005 , edition :2 },
//     { Title : "Book Nine", genre : "Fiction ", publis :1996  , edition : 7},
//     { Title : "Book Ten", genre : "Fiction ", publis : 1998 , edition : 8},
//     { Title : "Book Eleven", genre : "Non - Fiction ", publis : 2001 , edition : 2}
// ]

// console.log(book.length);

// let Bookdetail = book.filter((bk) => bk.publis <= 2000)



// console.log(Bookdetail);



// -----------------=map & chaining----------

// const num = [14,12,15,10,25,32]

// let nNum = num.map((i)=>i*2)

// console.log(nNum)

// let num1 = num.map((i)=>i*2).map((i)=>i+10)

// console.log(num1)


// let num2 = num.map((i)=>i*2).map((i)=>i+10).filter((i)=> i>=40) //filter use for true and false

// console.log(num2)



//_____________REDUCE____________

let num = [ 2,3,4,5,]

// let rslt = num.reduce((i ,itm) => i*itm , 1 )

// let rslt = num.reduce((i , itm)=> {
//     return i+itm
    
// },0)

// console.log(rslt);

let ShopingSlip = [
    {
        itemName :"Shampoo",
        price :245
    },
    {
        itemName :"Oil",
        price :199
    },
    {
        itemName :"Tooth brush",
        price : 84
    },
    {
        itemName :"Shop",
        price :120
    },
    {
        itemName :"Diturgent",
        price : 499
    },
]

let total = ShopingSlip.reduce((Updateprice , prices )=> Updateprice + prices.price, 0)

let totals = ShopingSlip.reduce((Updateprice , prices )=> {

    console.log(ShopingSlip.itemName+"    :"+ShopingSlip.price)
                                
    return Updateprice + prices.price },0
    )

console.log(`Total Amount  : ${totals}`);

console.log(total);