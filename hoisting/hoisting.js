// hoisting 
// it  is a mechanism in javascript that moves the delcaration of variable and functions at the top 

// temporal dead zone 
// this occurs when we try to access a variable before it is initialized 



let x;
x = 20;
function bujji(){
    let z;
    z = "prabhus car"
    console.log(z);
}
bujji();