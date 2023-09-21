//const tinderUser=new Object();SINGLETON OBJECT 
//console.log(tinderUser);{}
//const tinderUser={};NON-SINGLETON OBJECT
//console.log(tinderUser);{} 

//giving the value in object
const tinderUser={}
tinderUser.id="123abc";
tinderUser.name="srishty";
//console.log(tinderUser);{ id: '123abc', name: 'srishty' }  
const regularUser={
    email:"shrishti45@yahoo.com",
    fullname:{
        userfullname:{
            firstname:"cute",
            lastname:"srishty"
        }
    }    
}  

//console.log(regularUser.fullname.userfullname.lastname);srishty  
//console.log(regularUser.firstname);Undefined
//console.log(regularUser.fullname.userfullname);
//{ firstname: 'cute', lastname: 'srishty' }

//if fullname doesnt exist then to check use ? operator otherwise we have to use if else statement
//console.log(regularUser.fullname?.userfullname.lastname);srishty 

//COMBINING OBJECT
// const obj1={
//     1:"a",
//     2:"b"
// }; 
// const obj2={
//     5:"s",
//     6:"h"
// }; 
//SAME ARRAY PROBLEM
//const obj3={obj1,obj2}
//console.log(obj3);{ obj1: { '1': 'a', '2': 'b' }, obj2: { '5': 's', '6': 'h' } }  
//To remove this problem use Object.assign
// const obj3=Object.assign(obj1,obj2);
//console.log(obj3);
//output---> { '1': 'a', '2': 'b', '5': 's', '6': 'h' }
//But sometime we use {} parameters in Object.assign for optional but its good pratice to use
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);
//Same output
//{ '1': 'a', '2': 'b', '5': 's', '6': 'h' }   

const obj1={
    1:"a",
    2:"b"
}; 
const obj2={
    5:"s",
    6:"h"
}; 
const obj3={
    11:"r",
    12:"i"
}; 
//But this method we use less 
//const obj4=Object.assign({},obj1,obj2,obj3);
//console.log(obj4);  
//{ '1': 'a', '2': 'b', '5': 's', '6': 'h', '11': 'r', '12': 'i' }

//Spread Operator is used more
//const obj4={...obj1,...obj2,...obj3};
//console.log(obj4); 
//output---> { '1': 'a', '2': 'b', '5': 's', '6': 'h', '11': 'r', '12': 'i' }  

//When the values comes through the database
const users=[
    {
        id:"12@gmail",
        name:"cute"
    },
    {
    

    },
    {

    }
    
]

//To access the values in Array
//users[0].email;
//console.log(users);
//[ { id: '12@gmail', name: 'cute' }, {}, {} ]  

console.log(tinderUser);
//{ id: '123abc', name: 'srishty' }
//console.log(Object.keys(tinderUser));[ 'id', 'name' ]
//console.log(Object.values(tinderUser));[ '123abc', 'srishty' ]
//console.log(Object.entries(tinderUser));[ [ 'id', '123abc' ], [ 'name', 'srishty' ] ]  
//console.log(Object.hasOwnProperty('name'));true  
//console.log(Object.hasOwnProperty('isLoggedin'));false