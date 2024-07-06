// create a new array with all elements that pass the test or condition by provided fucntion 

const  arr = [1,2,3,4,5,6,7,8,9]

const myfuncton = (num) => {
  for(let i = 2; i < num; i++)
  {
    if(num % i === 0){
        return false;
    }
  }
  return true;
}
const newArr = arr.filter(myfuncton);
console.log(newArr);




