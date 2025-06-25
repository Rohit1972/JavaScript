const accountId = 14432
let accountEmail = "rohit@gmail.com"
var accountPassword = 123234
accountCity = "Hamirpur"

let accountState; //undefined

//accountId=2 //not  allowed


/*Pefer not to use var
because of issue in block and functional scope  */


accountEmail = "rk@gmail.com"
accountPassword = 12333
accountCity = "Una"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])