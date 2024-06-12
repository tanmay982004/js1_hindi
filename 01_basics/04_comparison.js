console.log(2>1);  //true
                 //so comparison should be done between same data types

//comparison between different data types
console.log("2">1);  //here it automatically converts "2" into number data type 2
console.log("02">1);

console.log(null>0);   //equality and comparison operators work differently 
                      //comparison operator converts null into 0
                      // but for equality null means empty value it doesn't convert it into number data type.
console.log(null==0);
console.log(null>=0);

console.log(undefined==0);   
console.log(undefined>0);
console.log(undefined<0);
/*JavaScript treats undefined and null as loosely equal to each other, but not to any other value.*/
//so for equality js treats undefined as null
//but for comparisons it treats undefined as NaN
//so NaN comparison with any other data types always gives false except when comparing with itself


//strict comparison data type ===

console.log("2"===2); //false
   //it checks data type as well as value