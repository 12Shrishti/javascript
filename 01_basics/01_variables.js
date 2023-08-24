const accountId="abc";
// not allowed  
//accountId=123;
//Throw an error   console.log(accountId);
var accountEmail="shristi223@gmail.com";
var accountPassword="abc12";
let accountCity="hyderabad";
let accountState;
console.table([accountEmail,accountPassword,accountCity,accountState]);
accountPassword="999";
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.log(accountPassword);