const arr=[1,2,3,4]
arr.push(5);
console.log(arr);
arr.pop()
console.log(arr);
arr.unshift(7)  //Elements to insert at the start of the array.
console.log(arr);
arr.shift()  //Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(arr);

console.log(arr.includes(9));
console.log(arr.indexOf(9));  //-1 if index doesn't exist

const newArr=arr.join() //converts arr into string with a comma and changes the data type from array to string
console.log(newArr);
console.log(typeof newArr);

//slice and splice methods 

//syntax arr.slice(start index,end index) end index not included
// it doesn't manipulate original array

console.log("A",arr);
const myn1=arr.slice(1,3)
console.log(`Array after slice is ${myn1}`);  //here it converts myn1 into string 
console.log("Array after slice is ",myn1);   //whereas it doesn't convert myn1 into string 
console.log(arr);

//splice
//syntax arr.splice(start index,end index) end index is included here as well
// it manipulates the original array as well
console.log(arr.splice(1,3));
console.log(arr);
