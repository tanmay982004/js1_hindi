//data types 

// on the basis of how data is stored and accessed it is classified into two types
// 1. primitive data types
// 2. non-primitive data types

// //Primitive
// 7 types
// String,Number, Boolean, null(empty), undefined,symbol(to make any value unique),BigInt(for scientific value)
// all of these data types are call by 
// which means when it is copied the change happens in its copied 
// not to the original memory where it is located 

//number data type 
const score=5;
const anotherScore=5.8

//boolean data type

const isLoggedIn=false 
const outsideTemp=null;  //null data type
let userMail;  //undefined
//symbol data type
const id=Symbol('123')
const anotherId=Symbol('123')  //both of these are same but they are uniquely assigned

console.log(id==anotherId);
const  bigNumber=74343598896498n  //n represents bigInt

//Arrays, Objects ,Functions

const heros=["bheem", "mightyRaju", "shaktiman"]

//object
let myObj=
{
     name: "Tanmay",
     age: 22,
}

const myFunc=function(){
    console.log("Tanmay");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof userMail);
console.log(typeof heros);
console.log(typeof myFunc);  //it is said as object function data type
console.log(typeof myObj);

//read the data types in detail from ecmascript documentation
