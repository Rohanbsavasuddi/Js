

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
console.log(loginUserMessage("Rohan"))