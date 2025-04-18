const user = {
    userName : "Rohan",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName} , welcome to website`);
        // console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "sam"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let userName = "Rohan"
//     console.log(this.userName);
    
// }

// chai()

// const chai = function (){
//     let userName = "Rohan"
//     console.log(this.userName);
// }


const chai =  () => {
    let userName = "Rohan"
    console.log(this);
}
// chai()

// const addTow = (num1, num2) => {
//     return num1 + num2
// }


// const addTow = (num1, num2) => num1 + num2

// const addTow = (num1, num2) => (num1 + num2)

const addTow = (num1, num2) => ({userName: "Rohan"})

console.log(addTow(3, 4));

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()
