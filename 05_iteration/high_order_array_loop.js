//for of
["","",""]
[{},{},{}]

const arr=[1,2,3,4]
for (const num of arr) {
    console.log(num);
}

const greetings="Hello Tanmay"
for (const greet  of greetings) {
    console.log(`Each char is ${greet}`);
}

//Maps
//it holds the unique key value pair in map 
//each key is unique in the map
//updates the key if it is already existed
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set("FR","France")

// console.log(map);

//for of loop on map

for(const key of map)
    {
        console.log(key); //gives key value pair in the form array
    }

//by array destructure we can get the key and value pair separately
for(const [key,value] of map)
    {
        console.log(key,value); //in this way we can access key and value separately
    }

//for of loop on object
const myObj=
{
    'game1':'Batman',
    'game2':'Spiderman'
}
for(const [key,value] of myObj)
    {
        console.log(key,value); //so for of loop doesn't work in this way
    }