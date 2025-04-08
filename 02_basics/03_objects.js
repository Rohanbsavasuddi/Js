// singleton
// Object.create

//obejct literals

const mySym = Symbol("key1")


const Jsuser = {
    name : "Rohan",
    "full name" : "Rohan Savasuddi",
    [mySym] : "myKey1",
    age : 22,
    location : "Belagavi",
    email : "rohan@gmail.com",
    isLoggedIn : "false",
    lastloggedInDays : ["Monday","Thuseday"]

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "Rohan123@email.com"   //updates the value
// Object.freeze(Jsuser)                 // object will be freezed no value can be changed
Jsuser.email = "Rohanbssss@email.com" 
// console.log(Jsuser);



Jsuser.greeting = function(){
    console.log("Hello js users");
    
}

Jsuser.greetingTwo = function(){
    console.log(`Hello js users, ${this.name}`);
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());
