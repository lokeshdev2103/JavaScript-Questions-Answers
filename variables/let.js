// let keyword allows us to declear a variable with in block scoped'
// it should declare before intalizes the variable 
// it create separeate memeory in javascript
// for let we can override the value


let x ;
x = 100;
x = 1000;
function letkeyword(){
    let y = 20;
    console.log(y)
}
// console.log(y);
console.log(x);