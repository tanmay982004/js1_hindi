const arr1=[1,2,3]
const arr2=[4,5,6]
// console.log(arr1.push(arr2));//adds elements to the end of existing array

// const arr3=arr1.concat(arr2)   //combines two or more arrays and and returns a new array without modifying existing array 
// console.log(arr3);

const arr4=[...arr1,...arr2]  //spread operator
console.log(arr4);

//flat method
const arr5=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const arr6=arr5.flat(Infinity)  //here we pass depth
console.log(arr6);

//another array methods
console.log(Array.isArray("Tanmay"));
console.log(Array.from("Tanmay")); //converts array to string
console.log(Array.from({name:"Tanmay"}));  //here we have to specifically mention that from object or key of which we want to make array
       //from methods returns an empty array if it is not possible to convert it into array

let score1=10;
let score2=20;
let score3=30;
console.log(Array.of(score1,score2,score3));//of methods return a new array from set of elements
