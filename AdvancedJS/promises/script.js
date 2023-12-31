const promise = new Promise((res, rej) => {
  setTimeout(() => {

    let err = false;
    if(!err){
      res("Promises are Asynchronous!");
    }
    else{
      rej("Something went wrong !!!")
    }
  }, 1000);
});

promise
// Promise Consumption
.then((data)=>{
  console.log(data)
})

// Error Catching
.catch((err)=>{
  console.log(err)
})

// Runs either promise resolved or rejected
// .finally(()=>{
//   console.log("Runs whether promise resolved or rejected !!!")
// })