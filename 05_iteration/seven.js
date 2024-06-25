const myNumbers=[1,2,3,4,5]
//map concept
// const newNums=myNumbers.map((num)=>num+10) //if we write curly braces then as we have open the scope so we will have to write the return statement
// console.log(newNums);

//chaining concept
const newNums=myNumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=25)
console.log(newNums);

//reduce  method in javascript
const myNums=[1,2,3]

// const myTotal=myNums.reduce((acc,currval)=>
// {   
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval;
// },0)

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)  //implicit return
console.log(myTotal);

const shoppingCart=[
    {
        itemName:'cpp course',
        price:1000
    },
    {
        itemName:'java course',
        price:2000
    },
    {
        itemName:'javascript course',
        price:3000
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(priceToPay);
