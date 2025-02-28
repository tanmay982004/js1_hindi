//we can add any number of items in cart so we need say x number of param
//which we can do in this way
 

function calculateCarPrice(...num1){  //here ... is rest operator we can also use  val1,val2,...num
  return num1                      //val1=200, val2=300
}
console.log(calculateCarPrice(200,300,400,5000));   //function gives us array of these elements

//now we will pass object into the function
const user=
{
    username:"Tanmay",
    price: 999
}

function handleObject(anyobject)
{
    return `Username is ${anyobject.username} and price is ${anyobject.price}`
}

// console.log(handleObject(user));  

//here we need to make sure that we pass the object only and if we write prices in object instead of price it will give us undefined when we will print the
//function 

console.log(handleObject({
    username:"Tanmay",       
    price: 999    //so in this way we can pass object as well
}));                   //but we should be 

//passing array into the function
const myNewArray=[100,200,300]

function returnSecondValue(getArray)
{
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));  
// console.log(returnSecondValue([100,200,300]));    we can pass array in this way as well
