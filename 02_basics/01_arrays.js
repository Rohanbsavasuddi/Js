// arrays

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shakthiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

// Array methods

// myArr.push(6)      // push is to add element
// myArr.push(7)
// myArr.pop()         // pop delets last element

// myArr.unshift(9)    // unshift adds element at first
// myArr.shift()       // shift removes first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr)
// console.log( newArr)


// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("B ", myArr);
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


