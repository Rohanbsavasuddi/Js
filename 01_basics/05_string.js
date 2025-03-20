const name = "rohan"
const repoCount = 3

console.log(name + repoCount + " value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rohan_savasuddi')

// console.log(gameName);
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-6, 4)

console.log(anotherString);

const newStringOne = "  Rohan  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://hithesh.com/hithesh%20choudhary"
console.log(url.replace("%20", "-"))
console.log(url.includes('hithesh'))
console.log(url.includes('no'))

console.log(gameName.split('_'))
