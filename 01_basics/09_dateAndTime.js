let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
console.log(myDate.toDateString()); // day MM DD YYYY 
console.log(myDate.toISOString()); //YYYY-MM-DDTHH:mm:ss.sssZ   Z indicates the time is in UTC
console.log(myDate.toJSON());  //YYYY-MM-DDTHH:mm:ss.sssZ   Z indicates the time is in UTC
console.log(myDate.toLocaleDateString());  //outputs mm dd yyyy
console.log(myDate.toLocaleString());   //outputs mm dd yyyy time