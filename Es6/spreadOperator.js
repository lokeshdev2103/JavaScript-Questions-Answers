// allows us to quick copy of array or object 

const x = [1,2,3,4,5];

console.log(...x, ...x, ...x);

const a = [1,2,3,4,5]
const b = [6,7,8,9,10]
const c = [11,12,13,14,15]

const d = [...a , ...b,...c]
console.log(d);