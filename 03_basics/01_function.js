//function is a block of code which execute some operation

function sayMyName()
{
    console.log("Tanmay");
}
sayMyName()

//return in function
function add(number1,number2) //this is parameter
{
    // console.log(number1+number2);
    return number1+number2;
}
// add(5,6);  //this is argument

const result=add(5,6)
console.log("Result:",result);

function loginUserMessage(username="Ram") //we can provide username here in case user doesn't enter the name                                     //if he would enter the name then that name will override it
{  
    // if(!username)   
    //     {
    //         console.log("Please enter a username");   //this is the case if user has not given a username 
    //         return       
    //     }
    return  `${username} just logged in`
}

console.log(loginUserMessage()); //if we don't pass anything it wil give us undefined 
           