function sayMyName (){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTowNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

function addTowNumbers(number1 , number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}


const result = addTowNumbers(3, 5)
// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){

        console.log("Please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("Rohan"))
// console.log(loginUserMessage("Rohan"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// TODO: 
// FIXME: 
const user = {
    userName : "Rohan",
    price : 199
}

function handleObject(anyObject){
    console.log(`User name is ${anyObject.userName} and pricw is ${anyObject.price}`);
    
}
// handleObject(user)
handleObject({
    userName: "sam",
    price: 3969
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 100, 600]));

