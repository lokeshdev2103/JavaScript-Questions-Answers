// it is deals with null or undefined values 

// if the userInput value is null

let userInput = null 
let defaultValue = "default";
let result = userInput ?? defaultValue;
console.log(result);

// if the  userInput value is undefined values
let userInput1; 
let result1 = userInput1 ?? defaultValue;
console.log(result1);

// if the userInput value is not null or filled with any number or string or object or array .... 

let userInput2 = "kalki"
let result2 = userInput2 ?? defaultValue;
console.log(result2);
