//primitive data-type are 7 types..
// Number,String,Null,Symbol,BigInt,Undefined,Boolean
//Refernce(Non-primitive datatype)
//Array,Objects,Function
const score = 100
//console.log(typeof score);
const scoreValue = 100.3
//console.log(typeof scoreValue)//number

const isLoggedIn = false
//console.log(typeof isLoggedIn)//boolean
const outsideTemp = null 
//console.log(typeof outsideTemp)//object
let userEmail;
//console.log(typeof userEmail);
const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(typeof id) symbol
//console.log(id === anotherId); false

 const bigNumber = 3456543576654356754n

 console.log(typeof bigNumber);

const heroes = ["shaktiman", "naagraj", "doga"];
//console.log(typeof heroes) object
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myFunction);

