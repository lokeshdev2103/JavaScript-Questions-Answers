// extract data from object in separate variables 

let abc = ["java","javascript"];
let [men,women] = abc;
console.log(men);
console.log(women);

let x = [2,4,3,5,6,9]
const [a,b,...num] = x;
console.log(num);
console.log(...num,...num);