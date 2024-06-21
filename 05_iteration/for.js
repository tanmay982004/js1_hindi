//for
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);   //ctrl +d is shortcut for selecting all the duplicate element   
}
//loop can be nested as well
//break and continue
for (let i = 0; i < 10; i++) {
    if(i==3)  continue; //one skip
    if(i==5) break;//  terminates the loop and control moves out of the loop
    console.log(i);
    
}