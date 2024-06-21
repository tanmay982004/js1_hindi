const userEmail="tanmay"
if(userEmail)  console.log("Got user email");
else  console.log("Don't have user email");


//falsy values
//false,0,-0, BigInt 0n,"",null, undefined, NaN

//truthy values
//"0",'false'," ",[],{},function() {}

const user=[]
 
//ways to check array
if (user.length==0) {
    console.log("Array is empty");
}

const emptyObj={}

if(Object.keys(emptyObj).length==0){   //Object.keys(emptyObj) converts it into array
    console.log("Object is empty");
}

//some points to note about
//false==0  true
//false=="" true
//0==''   true

// Nullish Coalescing Operator(??)  : null undefined

let val1;
// val1==5??10
// val1==null??10
val1==undefined??23??53
console.log(val1);

//so this operator basically used to check if undefined or null is not receicved as sometimes dadtabase may give it to us which may defect our code structure
//so only for this specific property this operator is used

//ternary operator
//syntax
//condition?true:false

const iceCreamPrice=10

iceCreamPrice<20?console.log("Give a ice cream"):console.log("Can't afford");