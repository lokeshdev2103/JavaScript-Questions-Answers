// promise -- 1 . resolve() --> completed successful 
//            2. reject()  --> some error  

// it used handle async operation 
// apiendpoint call

// pending --> fulfilled --> settled 
// pending --> fulfilled --> rejected 
// pending --> rejected 


let myPromise = new Promise(function(myResolve, myReject) {
    // "Producing Code" (May take some time)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    // "Consuming Code" (Must wait for a fulfilled Promise)
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );
    