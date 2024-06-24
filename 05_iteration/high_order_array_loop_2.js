const myObject=
{
    ta:"Tanmay",
    ra:"Ram"
}

//we can iterate object using for in loop

for (const key  in myObject)
     {
            // console.log(`${key} is shortcut for ${myObject[key]}`);             
    }

    //now let us try for in loop on an array

    const programming=["js","ruby","python","java","cpp"]

    for (const key in programming) {
            console.log(programming[key]);         //it prints value of key in array key is index
        }
    
        //for in on map is not possible
        const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set("FR","France")

for (const key in map) {
    // console.log(key);  //this loop is not possible
}

// Short Summary: loop preference
//for in loop on object 
//for of loop on array