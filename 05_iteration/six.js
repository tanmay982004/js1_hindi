const coding=["js","java","javasript"]

//let us suppose we want to store the values of forEach loop 
//function in a const variables
//and get the return value

const values=coding.forEach((item)=>
{  
    console.log(item);
    return item
})
console.log(values);  //so it doesn't return anythin 
                //so we get undefined at last
const myNums=[1,2,3,4,5]

// let newNums=myNums.filter((num)=>num>3)  //in the paranthesis we write callback function

// console.log(newNums); //it will return [4,5]

const newNums=[]

myNums.forEach((num)=>{
    if(num>3){                
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks=books.filter((item)=>item.genre=='Science')
// console.log(userBooks);

 userBooks=books.filter((item)=>item.publish>=2005)
// console.log(userBooks);   //if wew use curly braces then we will have to write the return statement as well

userBooks=books.filter((item)=>item.genre=='Science' && item.publish>=2005)
console.log(userBooks);