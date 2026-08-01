const accountId=12345;
let accountEmail="ankit@gmail.com"
var accountPassword="12345"
accountCity="Kolkata"
/*In JS if we just declare a variable and do not assign anything then it will be treated as undefined */
let accountState
/*prefer not to use var because of issue in block and functional scope */
//accountId=6 //not allowed
accountEmail="abc@gmail.com"
accountPassword="12945"
accountCity="Durgapur"

console.log(accountId); // To print one thing at a time
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
