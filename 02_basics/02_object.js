// const tinderUser=new Object() //both of them have same meaning only difference is that it is singleton object or below one is not singleton
// console.log(tinderUser);

const tinderUser={}
tinderUser.name="Tanmay"
tinderUser.age=18
tinderUser.email="ram@gmail.com"

// console.log(tinderUser);

const regularUser={
    email:"tan@gmail.com",
    fullname:{
        firstname:"Tanmay",
        lastname:"Kumar"
    }
}
console.log(regularUser.fullname.firstname); //in this way we can access key in nested objects
                                              // suppose if fullname doesn't exist then we wil use fullname? in case of getting something from api we will discuss it later on
const obj1={1:"a",2:"b",3:"c"}
const obj2={3:"d",4:"e"}

// const obj3={obj1,obj2}  it will gives us object inside object
// const obj3=Object.assign({},obj1,obj2)  it treats first param as target and rest as source and assign it to first param so we take {} so that our target  will be assigned in a new target without modifying existing object

const obj3={...obj1,...obj2} //by spread operator
// console.log(obj3); 
                                  

//from users we generally get info in form of array of objects
const users=[
    {},
    {},{},{}
]
// users[1].email  in this way we can access value from the above data or loop it using map which we see later on

console.log(tinderUser);
console.log(Object.keys(tinderUser));  //important in all three methods that are here and below we get data in form of array which we can access in by using loop
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //here we get key and values in form of array which is in an array itself

//to check if a property exist or not
console.log(tinderUser.hasOwnProperty('name'));

//part 3
const course={
    courseName: "js in hindi",
    price:"9999",
    courseInstructor:"Hitesh choudhary"
}
//we can access key by dot operator but it can be annoying sometimes
// so we use object de-structure below is an example of it

const {courseInstructor:instructor}=course  //after = we write from where we want to extract
// console.log(courseInstructor);
// courseInstructor even this is a long key which we can replace inside curly braces
console.log(instructor);

//an example of how destructuring is used in react
const navbar=({company})=>{
         //here we destructure it using {} instead of writing props.
}
navbar(company="Google")

//values from the backend comes in the form of JSON
//example 1
{
    name:"Hitesh"    //so in json key is always in string form and values can be different types of data types
}
//example 2
//api can also come in form of array
[{},{}]
//for seeing api we can go to random user api generator and then use json formatter to simplify it