const arr=[2,3,4,5];
const arr2=["shrishti","srishty","shristi"];
const arr3=new Array(2,6,8);
//console.log(arr3[2]);  
// PUSH()--->Add a new item to an array
//push() method adds new items to the end of an array. 
//push() method changes the length of the array.
//arr.push(8);
//console.log(arr);[ 2, 3, 4, 5, 8 ]
 

//pop()
//pop() method removes (pops) the last element of an array.
//pop() method changes the original array. 
//arr2.pop()
//console.log(arr2);[ 'shrishti', 'srishty' ]


//unshift()
//unshift() method adds new elements to the beginning of an array.
// unshift() method overwrites the original array.  
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.unshift("Lemon","Pineapple");
//console.log(fruits); [ 'Lemon', 'Pineapple', 'Banana', 'Orange', 'Apple', 'Mango' ]
//Shift() Method 
//shift() method removes the first item of an array.
//shift() method changes the original array.
//fruits.shift();
//console.log(fruits);[ 'Orange', 'Apple', 'Mango' ]  


//includes() method returns true if an array contains a specified value.
//includes() method returns false if the value is not found. 
//console.log(fruits.includes("Banana"));true
//console.log(fruits.includes("banana"));false  


//indexOf() method returns the first index (position) of a specified value.
//indexOf() method returns -1 if the value is not found.
//indexOf() method starts at a specified index and searches from left to right.
const fruit = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruit.indexOf("Apple"));2
//console.log(fruit.indexOf("guava"))-1
//console.log(fruit.indexOf("Mango"))3  
//console.log(fruits.indexOf("Mango", 1));3
//means Find mango and start with position 1   

//join() method returns an array as a string.
//The join() method does not change the original array.  
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits);[ 'Banana', 'Orange', 'Apple', 'Mango' ]
//console.log(fruits.join());Banana,Orange,Apple,Mango  
//console.log(fruits.join(" and "));//Banana and Orange and Apple and Mango  

//slice()---> 
//returns selected elements in an array, as a new array.The slice() method selects from a given start, up to a (not inclusive) given end.
//slice() method does not change the original array.
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//console.log(fruits.slice(1, 3));[ 'Orange', 'Lemon' ]  

//splice()----> method adds and/or removes array elements.
//splice() method overwrites the original array.
//syntax....Array.splice(index,remove_count,item_list)
const webdvlop=["html","css","js","bootstrap"];
//console.log(webdvlop);[ 'html', 'css', 'js', 'bootstrap' ]
//ADD REACT AND PHP after removing js
const removed=webdvlop.splice(2,1,'php','react');
//console.log(removed);[ 'js' ]
console.log(webdvlop);//[ 'html', 'css', 'php', 'react', 'bootstrap' ]
//No removing only insertion from 2nd index from the ending
webdvlop.splice(-2,0,'react-native');
console.log(webdvlop);[ 'html', 'css', 'php', 'react-native', 'react', 'bootstrap' ]