//conversion into number data type

let score= "33abc"
// console.log(score);
console.log(typeof score);

let valueInNumber=Number(score)

console.log(valueInNumber);
console.log(typeof valueInNumber);

//"33"==> 33
//"33abc"=> NaN
//null=> 0
// undefined=> NaN
//true=1 false=0

//2. conversion into Boolean data type

let isLoggedIn="Tanmay"
let booleanIsLoggedIn=Boolean(isLoggedIn);

console.log(typeof booleanIsLoggedIn);

console.log(booleanIsLoggedIn);

//1=>true  0=>false
//""=> false
//"Tanmay"=> true

//3. conversion into string

let someNumber=36;
let stringNumber=String(someNumber);

console.log(typeof stringNumber);
console.log(stringNumber);

  //some operations
  console.log("1"+2);
  console.log("1"+2+2 );   //so the conversion is done according to the first
                          // data type
  console.log(1+2+"2");

  //some tricky conversion
  console.log(+true); //1  so + is used in front to convert a data type into number data type
//   console.log(true+); //error


//study prefix and postfix operator from documentation