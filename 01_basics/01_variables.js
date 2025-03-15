const accountId = 144553
let accountEmail = "rohan@google.com"
var accountPassword = "12345"
accountCity = "Karnataka"
let accountState

// accountId = 2 // not allowed

/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/

accountEmail ="hi@google.com"

accountPassword = "212121"

accountCity = "Mumbai"

console.log(accountId)
console.log(accountState)

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
