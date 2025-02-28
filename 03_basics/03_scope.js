// let a=10   let is block scoped like if else and loop
// const b=20
// var c=300  it can be redeclared so it is avoided

// we will discuss later on about scope in windows and in browser
let a=300;
if (true)
    {
        let a=10
const b=20
var c=30
console.log("INNER value of a is:",a);
    }
console.log("OUTER value of a is:",a);
// console.log(b);
// console.log(c);
//scope of windows and node are different


//lec 22
//nested scope
function one()
{
    const username="Tanmay"
    function two()
    {
        const website="youtube"
        console.log(username);  //child funcn can excute parent function properties this is also known as closure
    }
    // console.log(website);  website scope is only for funcn two
    two() //here two is excuted  so it runs if we comment it two won't be excuted
}
one()

//if else block
if(true)
    {
        const username="Tanmay"
        if(username=="Tanmay")
            {
            const website=" youtube"
            console.log(username + website);
            }
        // console.log(website); website scope is in if block only
    }
    // console.log(username); username scope is only on in if block

    //++++++ interesting
   addOne(5)
//Can be called before its definition due to hoisting.
    function addOne(num)  //in this kind of declaration we can access function before and after declaration as well
    {
        return num+1
    }

    addOne(5)
      
    // addTwo(5)  so if we declare function as function expression type then we can't access it before declaration
    const addTwo=function(num)  //function expression syntax
    {
        return num+2
    }

    //Not hoisted the same way as function declarations (can't be used before the line where it's defined).
    addTwo(5)