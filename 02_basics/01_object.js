//singleton object 
//only remember that whenever we make an object through constructor it is singleton object
//whenever we declare through literal singleton is not made
//Object.creatae()  in this way we can make singleton object

//object literals
const mySym=Symbol("key1") //param is a string and it returns a unique Symbol value

const JsUser={

    "name":"Tanmay",  //here key value is treated as string
     "full name":"Tanmay Kumar",
    [mySym]:"key1",

    age:18,
    location:"Patna",
    email:"ram@gmail.com",
    isLoggedIn:true
}

//ways to access keys 
console.log(JsUser.email);
console.log(JsUser["email"]);   //so by dot we can access it without using key as string
                              //but in case of array type we can access it only by using it as string
//but if we declare key as string then we can access it only as array we can't access it by using dot

console.log(JsUser.name);
console.log(JsUser["name"]);

// console.log(JsUser.full name);  so here we can't access this string type of key with dot as operator
console.log(JsUser["full name"]);

//symbol 
console.log(JsUser.mySym)
console.log(JsUser[mySym]);

//if we don't define mySym in key as [mySym] and define it as mySym
//even then we will get the same result
//but its data type is string

console.log(typeof JsUser[mySym]);
console.log(typeof JsUser.mySym);
console.log(typeof [mySym]);

//changing the object values
JsUser.email="ra@gmail.com"
console.log(JsUser);  


// Object.freeze(JsUser)    //syntax if we don't want to change the object anymore
JsUser.email="ta@gmail.com"

console.log(JsUser)    

//NOTE
// [Symbol(key1)]: 'key1'  this is what we get when we define symbol as [myKey] which is correct syntax otherwise we won't get [Symbol(key1)] instead we will get   mySym as normal key

JsUser.greeting=function()
{
    console.log("Hello JS user");
}

JsUser.greetingTwo=function()
{
    console.log(`Hello Js user ${this["full name"]}`);  //if the key is normal then we can access it using this.name like thsi
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());