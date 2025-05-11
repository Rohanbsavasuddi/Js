// const isUserLoggedIn = true
// const temprature = 41

// if(temprature === 41){
//     console.log("less then 40");
// }
// else{
//     console.log("temprature is greater then 50");
// }

// console.log("Executed");

// TODO: < (less then), > (greater then), <= (less then or equal), >=(greater then or equal), == (equals), === (equals with datatype), !== (not equals)

// const score = 200
// if (score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }




// const balance = 1000

// if(balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750){
//     console.log("less than 750");
// }else if (balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }




const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
// TODO: && is used for (and) cases so both the cases should be true
if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}
// TODO: || is used for (or) cases so any one case can be true form both or bothe true

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
