//for each loop in js

const coding=["js","cpp","java"]

coding.forEach( function (item){
    // console.log(item);   //forEach paranthesis is written by a function 
                       //this function is known as callback function
                        //callback function doesn't have name
})                       //inside paranthesis we can also write arrow function

coding.forEach((item)=>{     //arrow function in forEach loop
    // console.log(item);
})

function printMe(item)
{
    console.log(item);
}

// coding.forEach(printMe)  //here we give reference to the function 
                           //we won't execute the function

//forEach loop contains more params
//item,index,arr
coding.forEach((item,index,arr)=>
    {
       console.log(item,index,arr);
    } )  
    
//forEach on objects inside the array

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(`${item.languageName} syntax form is ${item.languageFileName}`);
})