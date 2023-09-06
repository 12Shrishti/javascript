const score=400;
//console.log(score);400
const obj=new Number(100);
//console.log(obj);[Number: 100]
//console.log(obj.toString());100
//console.log(obj.toString().length)3
//console.log(obj.toString().concat("hello"))100hello


//console.log(obj.toFixed(2));100.00
//console.log(obj.toFixed(1));100.0


//toPrecision() Format a number to a specified length:
//let num = 13.3714;
//console.log(num.toPrecision(2));13
//console.log(num.toPrecision(3));13.4
//console.log(num.toPrecision(4));13.37
//console.log(num.toPrecision(5));13.371


let num = 0.001658853;
//console.log(num.toPrecision(2));0.0017
//console.log(num.toPrecision(3));0.00166
//console.log(num.toPrecision(10));0.001658853000  

//const hundred=1000000000;
//console.log(hundred.toLocaleString());1,000,000,000   ___international number system commas  
//console.log(hundred.toLocaleString('en-IN'));1,00,00,00,000___indian counting system commas  

//*********MATHS******** */
//console.log(Math);Object [Math] {}
//console.log(Math.abs(-44));44
//abs makes any negative or positive values to positive 

//ROUND FUMCTION
//console.log(Math.round(88.6));89
//console.log(Math.round(55.3))55
//console.log(Math.round(77.5));78  

//Math.ceil() Function takes only top(big) values
//console.log(Math.ceil(1.4));2  
//console.log(Math.ceil(0.60));1
//console.log(Math.ceil(0.40));1
//console.log( Math.ceil(5));5
//console.log(Math.ceil(5.1));6
//console.log(Math.ceil(-5.1));-5
//console.log( Math.ceil(-5.9));-5  


//Math.floor() Function takes only small(lower) values
//console.log( Math.floor(1.6));1  
//console.log(Math.floor(0.60));0
//console.log(Math.floor(0.40));0
//console.log( Math.floor(5));5
//console.log(Math.floor(5.1));5
//console.log(Math.floor(-5.1));-6
//console.log(Math.floor(-5.9));-6  

//MIN AND MAX FUNCTION 
const arr=[44,65,23,77,89,35];
//console.log(Math.min(...arr));23
//console.log(Math.max(...arr))89  

//Math.random()Returns number btween 0 and 1
//console.log(Math.random())0.3564162983611254

//Getting a number between two values
//FORMULA IS Math.random() * (max - min) + min
//Returns a random integer from 0 to 9:
//console.log(Math.floor(Math.random() * 10));7
//Returns a random integer from 0 to 10:
//console.log(Math.floor(Math.random() * 11));10  
//Returns a random integer from 1 to 10:
//console.log(Math.floor(Math.random() * 10) + 1);10  

//JavaScript function always returns a random number between min and max (both included)  
//Math.floor(Math.random() * (max - min + 1) ) + min;
