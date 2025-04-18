// Immediately Invoked function Expressoion (IIFE)

(function chai (){
    //named iffe
    console.log("DB CONNECTED")
})();


(  (name) => {
    //unnamed iffe
    console.log(`DB CONNECTED TWO ${name}`)
})('Rohan');