const fruits=['apple','mango','banana'];
const veg=['potato','raddish','chilli'];
//fruits.push(veg);
//console.log(fruits); 
//[ 'apple', 'mango', 'banana', [ 'potato', 'raddish', 'chilli' ] ]  
//console.log(fruits[3][2]);chilli
//console.log(fruits[3][1]);raddish

//concat
//const newveg=fruits.concat(veg);
//console.log(fruits);[ 'apple', 'mango', 'banana', [ 'potato', 'raddish', 'chilli' ] ]
// console.log(newveg);
// [
//     'apple',
//     'mango',
//     'banana',
//     [ 'potato', 'raddish', 'chilli' ],
//     'potato',
//     'raddish',
//     'chilli'
//   ]  

//SPREAD OPERATOR   
//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
 //const mix=[...fruits,...veg]
 //console.log(mix);[ 'apple', 'mango', 'banana', 'potato', 'raddish', 'chilli' ]


 //const aarray=[1,2,3,[3,5],[4],6,[1,[8,6,6]]];
 //const aarray2=aarray.flat(Infinity);
 //console.log(aarray2);[
    // 1, 2, 3, 3, 5,
    // 4, 6, 1, 8, 6,
    // 6
  //]  


 // console.log(Array.isArray("shrishti"));false  
//  console.log(Array.from("shrishti"));
//  convert in Array
//  [
//     's', 'h', 'r',
//     'i', 's', 'h',
//     't', 'i'
//   ]  

//interesting interview question
//console.log(Array.from({name:"shrishti"}));[]  

const a=100;
const b=200;
const c=300;
console.log(Array.of(a,b,c));
//[ 100, 200, 300 ]