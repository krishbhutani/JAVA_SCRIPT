/*  There are generally 4 types to declare Variables.
Const = Can not changable.
var = Not used in Scope --> if something is changed in one scope then it is changed in all 
other scope
*/

/*
Prefer Not to use var as it creates in block problem
*/

const accountId = 1445463
let accountEmail = "krish@nith.ac.in"
var accountPassword = "12345"
var dummy; // Its value output is undefined.
accountCity = "Roorkee"

// accountId = 123    -----> Error (Not Allowed)

accountEmail = "hello@nith.ac.in"
accountPassword = "98745"
accountCity = "Hamirpur"

console.table([accountId,accountEmail,accountPassword,accountCity])