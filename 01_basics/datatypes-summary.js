// Primitive 

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt

//is js is dynamic or static????????

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);
// console.log(id);
// console.log(anotherId);

const bigNumber = 135156454513546878451548643516548675135464n



// Reference (Non primitive)
// Array, Objects, Functions

const heros = ["shakthiman", "naagraj", "doga"]; // array

let myobj={    // object
    name: "rohan",
    age : 22,
}

const myFunction = function(){   
    console.log("Hello world");    // function
    
}


console.log(typeof bigNumber);
