// easy way  to create mutli line string and perform string interpolations 


const str1 = "girl"
const str2 = "boy"

const finalString = "A " + `${str2}`  + " " +  "has" + " " +`${str1}` +" " + "friend";
const finalString1  = `${str1} ${str2}`; 
console.log(finalString);
console.log(finalString1);