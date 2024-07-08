// const keyword is also same as let but here the value is cannot be override .

const x = 10;
// x = 30; cannot be override the value of the x ;

function constkeyword(){
  const y = 20;
  console.log(y);
}
constkeyword();
console.log(x)
 // console.log(y); // we cannot access the scoped variable 