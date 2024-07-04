// create a new array by applying a function to each element of the orginal array 

const numbers = [20,30,40,50];
const myfunction = (num) => {
     return num * 20;
}
const myfunction2 = (number) => {
     return number + 2;
}
const newNumbers = numbers.map(myfunction);
const newnumbers1 = newNumbers.map(myfunction2);


console.log(newNumbers);
console.log(newnumbers1);
console.log(numbers);