//symbol 
const mysym=Symbol("symbol1")

//object literals
// const jsUser=
// {
//     name:"shrishti",
//     mysym:"Sym",
//     age:22,
//     "fruits":"mango",
//     location:"delhi",
//     email:"srishty@google.com",
//     isLogged:true,
//     daysLogged:['sunday','monday','saturday']
// }  
//HOW TO ACCESS THE OBJECT
//TWO WAYS TO ACCESS THE OBJECT
//1)objectName.propertyName
//2)objectName["propertyName"]
//console.log(jsUser.location);delhi
//console.log(jsUser["location"]);delhi  
//console.log(jsUser.fruits);//mango
//console.log(jsUser["fruits"]);mango  

//symbol 
//Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description, they are different values. 
// let id1 = Symbol("id");
// let id2 = Symbol("id");
// console.log(id1==id2);//false 
//console.log(jsUser.mysym);sym  
//console.log(typeof jsUser.mysym);string not symbol
//For used as a symbol write mysym in a square bracket 
const jsUser=
{
    name:"shrishti",
    [mysym]:"Sym",
    age:22,
    "fruits":"mango",
    location:"delhi",
    email:"srishty@google.com",
    isLogged:true,
    daysLogged:['sunday','monday','saturday']
}   
//console.log(jsUser[mysym]);sym  

//HOW TO CHANGE THE VALUE OF OBJECT
 jsUser.fruits="Strawberry";
// console.log(jsUser);  
//  output
//  {
//      name: 'shrishti',
//      age: 22,
//      fruits: 'Strawberry',
//     location: 'delhi',
//     email: 'srishty@google.com',
//      isLogged: true,
//      daysLogged: [ 'sunday', 'monday', 'saturday' ],
//      [Symbol(symbol1)]: 'Sym'
//    }  


//   The Object.freeze() method freezes an object i.e. it prevents the object from being modified. 
// Object.freeze(jsUser);
// jsUser.location="mumbai";
// output-->Not changed the location
// console.log(jsUser);  
// {
//     name: 'shrishti',
//     age: 22,
//     fruits: 'Strawberry',
//     location: 'delhi',
//     email: 'srishty@google.com',
//     isLogged: true,
//     daysLogged: [ 'sunday', 'monday', 'saturday' ],
//     [Symbol(symbol1)]: 'Sym'
//   }  

//FUNCTION IN JS  
// jsUser.greeting=function()
// {
//     console.log("hello there!");
// }  
//console.log(jsUser.greeting);[Function (anonymous)]
//console.log(jsUser.greeting());hello there!
//undefined    
jsUser.greeting=function()
{
    console.log(`hello shrishti,${this.name}`);//hello shrishti,shrishti
}
console.log(jsUser.greeting());//undefined