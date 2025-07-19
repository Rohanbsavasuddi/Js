const userEmail = "h@email,com"

if (userEmail) {
    console.log("Got user Email");
}else{
    console.log("Don't have user email");
}




// TODO: falsy values
// TODO:false, 0, -0, BigInt 0n, "", null, undefined, NaN


// TODO: truthy values
// TODO: "0", "false", " ", [],{}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty")
// }


let val;
val = 5 ?? 10
console.log(val);

// Terninary operator
// condition ? True : False

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less then 80 ") : console.log("more then 80")