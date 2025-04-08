// const tinderUser = new Object()
const tinderUser = {}


tinderUser.id = "123abc" 
tinderUser.name = "sam" 
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "sam@google.com",
    fullName: {
        userFullName: {
            firstName: "Rohan",
            lastName: "Savassuddi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obejct1 = {1: "a", 2: "b"}
const obejct2 = {3: "a", 4: "b"}
const obejct4 = {4: "a", 6: "b"}

// const obejct3 ={obejct1, obejct2}
// const obejct3 = Object.assign({}, obejct1, obejct2, obejct4)

const obejct3 = {...obejct1,...obejct2,...obejct4}

// console.log(obejct3);

const users = [
    {
        id: 1,
        email: "r@email.com"
    },
    {
        id: 2,
        email: "rbb@email.com"
    },
    {
        id: 3,
        email: "rbbss@email.com"
    }
    
]

// console.log(users[1].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));


