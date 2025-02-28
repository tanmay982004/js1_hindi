//instead of using old style + for concatenatin
//we will use placeholder denoted by ${} inside ` `
const name="Tanmay"
const repoCount=3

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`); //string interpolation by placing variable in placeholder

const gameName=new String(" Tanmay-Rome ")  //it guarantees that the variable is of string data type
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('m'));
console.log(gameName.trim());  //read trim from mdn documentation -starttrim() and endtrim()


const newString=gameName.substring(0,4)
console.log(newString); //substring ignores negative value

const anotherString=gameName.slice(-9,4) // here negative starts fromm last
console.log(anotherString);

const url="https://tanmay%30kumar"
console.log(url.replace('%30','-'));

console.log(url.includes('tanmay'));

//split
console.log(gameName.split('-'));  
//read split from mdn documentation

//read all the methods of string from documentation

