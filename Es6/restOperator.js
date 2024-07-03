// Rest operator : allow a functions to accept an indefinte number of arguments in array

const abc = (...num) => {
  for (var i = 0; i < num.length; i++) {
    if (num[i] <= 10) {
      console.log(num[i]);
    }else if(num[i] >= 50){
        console.log(num[i]);
    }
  }
};

abc(5,7,9,10,34,54,60,78);


// use arrow function and rest operator

const Sum = (...num) => {
    var total = 0;
    for (var n of num) {
      total = total + n;
      console.log(total);
    }
    console.log(total);
  };
  
  Sum(1, 2, 3, 4, 5); // result 1+2+3+4+5 = 15
  
  
  const Sum1 = (...num) =>{
      return num.reduce((total,num)=> total + num,0)
   }
  
  const result = Sum1(1,2,3,4,5) // result 1+2+3+4+5 = 15 
  console.log(result);