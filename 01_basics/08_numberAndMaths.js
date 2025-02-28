const score=40000
console.log(score.toLocaleString());

const balance=new Number(100)  //defining in this way specifies that the variable is of Number data type
             //so it gives us the methods along with this variable which we can access by using a dot                              


 console.log(balance.toFixed(2)); //gives us the 2 number after decimal point

//  (method) Number.toFixed(fractionDigits?: number | undefined): string
// Returns a string representing a number in fixed-point notation.

// @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.

 console.log(balance.toString().length);

 const otherNumber=23.58879
console.log(otherNumber.toPrecision(4)); //gives us the precision upto that number inside paranthesis

const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'));  //it represents the number in comma form of USA inside the paranthesis i have written indian form

 //some other methods of Number
console.log(Number.MAX_VALUE); //similarily we can use MIN_ VALUE AND MAX_SAFE_INTEGER

     //  MATHS
     console.log(Math.abs(-5));
     console.log(Math.round(-9797.238));
     console.log(Math.ceil(-5.32098));
     console.log(Math.floor(-5.90182));
     console.log(Math.min(-5,34,-24,6,4,7345));
     console.log(Math.max(-5,309,30,40));
  
     //random method
     //it gives us value between 0 and 1
     //we will manipulate it to get value between desired range
      console.log(Math.random());
      console.log(Math.random()*10+1);
      console.log(Math.floor(Math.random()*10+1));

     const min=10
     const max=20
     console.log(Math.random()*(max-min+1)+min);
