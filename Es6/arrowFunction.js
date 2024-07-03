// arrow function 
// to provide a shortest declaring of an function .

//es4 
// function without parameter 
function kalki(){
    console.log("without","bujji");
}

// function with parameter
function bujji(num){
    console.log("withparameter", num*num);
} 

//Es6
// function without parameter
const kalki1 = () => {
    console.log("arrow without","bujji");
}


// function with parameter
const bujji1 =((num) => {
    console.log("arrow with", num*num);
})



kalki();
bujji(6);

kalki1();
bujji1(6);