let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toString());
console.log(myDate.toDateString()); // day MM DD YYYY 
console.log(myDate.toISOString()); //YYYY-MM-DDTHH:mm:ss.sssZ   Z indicates the time is in UTC
console.log(myDate.toJSON());  //YYYY-MM-DDTHH:mm:ss.sssZ   Z indicates the time is in UTC
console.log(myDate.toLocaleDateString());  //outputs mm dd yyyy
console.log(myDate.toLocaleString());   //outputs mm dd yyyy time

console.log(typeof myDate);

//some of the formats to create the date are given below
let myCreatedDate=new Date(2023,0,23)  //in single digit month starts from 00
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date(2023,0,23,5,4)
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3=new Date("2023-01-13") // in this format month starts from 01
console.log(myCreatedDate3.toLocaleString());

//indian format mm dd yyyy
let myCreatedDate4=new Date("01-13-2024")
console.log(myCreatedDate4.toLocaleString());

//time stamp can be used in quizzes 
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));  //convert ms into seconds

//ways to get month and day from the Date object

let newDate=new Date()
console.log(newDate); // outputs date with time
console.log(newDate.getMonth()+1); // gives month starting from 0 so i have added 1 to avoid confusion
console.log(newDate.getDay());// gives day of week as it it saturday today so outputs 6
console.log(newDate.getDate());  //gives date of month

newDate.toLocaleString('default',  //default here represents interalnationalization 
    {                        
        weekday:"long",  //using ctrl+space we can get suggestiion of more properties as date is object so we have many properties

    }
)