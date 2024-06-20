const user={
    username:"Tanmay",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username} , welcome to the website`);  //this refers to current context(it means values) 
        console.log(this);  //it gives us current context
    }
}

// user.welcomeMessage()
// user.username="Ram"
// user.welcomeMessage()

console.log(this);  //it gives here empty paranthesis
                    //in browser we get window which is a global object
 
 //this inside function
//  function chai()
//  {
//     let username="Tanmay"
//     // console.log(this);  //it also gives a lot of values
//     // console.log(this.username);  //undefined so this doesn't refer to current context inside a function
//  }
//  chai()




//arrow function concept
 const chai=function ()
 {
    let username="Tanmay"
    console.log(this);
 }

 const chai1=()=>
 {
    let username="Tanmay"
    console.log(this); //empty paranthesis
    console.log(this.username);  //undefined 
 }

//  chai()
// chai1()

/*
const addTwo=(num1,num2)=>{
    return num1+num2
}                                it is basic arrow function
console.log(addTwo(6,6));
*/

//implicit return 
//in this retrun statement is written in same line without curly braces 
//we can also write it in paranthesis but in same line in such case we don't need to write the return statement
//we can return object if we need to return object in function
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(4,6));

const addThree=(num1,num2,num3)=>({username:"Tanmay"})
console.log(addThree(5,6,7));

//arrow function can also help in loop for applying  a specific property
const myArray=[1,2,3,4]
myArray.forEach(()=>{})
