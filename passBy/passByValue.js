// When a function is called, the value of the variable is directly passed as an argument.
// Therefore, any modifications made inside the function do not impact the original value

let a = 2;
var b = a; 
const temp = b;
console.log(temp)
function snv() {
    b = 3;
    console.log(b);
}
snv();