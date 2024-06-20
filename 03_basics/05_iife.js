//IIFE immediately invoked functions
//it is used to remove the global scope pollution so in order to remove it we use it
//An IIFE encapsulates its variables and functions, preventing them from polluting the global scope. Variables defined within an IIFE are not accessible outside its scope, thus avoiding conflicts with global variables.
//upon immediate executin it helps its variables to avoid global scope pollution

(function one()
{
    console.log("DB CONNECTED");      //named IIFE
})( );        //first paranthesis is for function defintion
            // second function is for function call
            //semi colon is for stopping the function execution otherwise we wil get error
          
((name)=>            //unnamed IIFE
{
    console.log("db connected two ",name);
})("Tanmay");       

            

