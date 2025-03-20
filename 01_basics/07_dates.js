
let myuDate = new Date()
// console.log(myuDate.toString());
// console.log(myuDate.toDateString());
// console.log(myuDate.toISOString());
// console.log(myuDate.toLocaleDateString());
// console.log(myuDate.toLocaleString());
// console.log(typeof myuDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date("2023, 0, 23, 5, 3")
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate); //in msec
// console.log(myCreatedDate.toLocaleDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000)); // in sec


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleDateString('default', {
    weekday: "long",
    
})
