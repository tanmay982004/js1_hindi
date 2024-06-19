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
