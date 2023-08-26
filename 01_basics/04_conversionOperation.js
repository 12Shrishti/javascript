let someNumber=33;
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
//*******************operation************* */
let value=3;
let negValue=-value;
console.log(negValue)
console.log(2**3);
let str1="hello";
let str2="  shrishti";
console.log(str1+str2);
console.log("1"+2);//12
console.log(1+"2");//12
console.log(1+"2"+2);//122
console.log("1"+2+2);//122 bad practise
console.log(1+2+"2");//32 bad practise
console.log(+true)//1 bad practise
//console.log(true++);//error
//console.log(+"");//0
//let num1,num2,num3;
//num1=num2=num3=2+2//bad practise
//console.log(num1)//4

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: x:4 y:3"
let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: x:4 y:4"
