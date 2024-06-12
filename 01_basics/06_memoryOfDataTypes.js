//Stack(Primitive)  Heap (Non primitive data type)

let myName="Tanmay"
let anotherName=myName

anotherName="Ram"
console.log(myName);
console.log(anotherName);

let userOne=
{
    email:"a@gmail.com",
    upi:"agh"

}

let userTwo=userOne;
userTwo.email="b@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);