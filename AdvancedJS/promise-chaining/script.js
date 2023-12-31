const promise = new Promise((res, rej) => {
  setTimeout(() => {

    let err = false;
    if(!err){
      res({name: "John", age: 30});
    }
    else{
      rej("Something went wrong !!!")
    }
  }, 1000);
});

// Promise Chaining
promise
// Promise Consumption
.then((user)=>{
  console.log(user);
  return user.name;
})
.then((name)=>{
  console.log(name);
  return name.length;
})
.then((nameLength)=>{
  console.log(nameLength)
})
// Error Catching
.catch((err)=>{
  console.log(err)
})
// Runs either promise resolved or rejected
// .finally(()=>{
//   console.log("Runs whether promise resolved or rejected !!!")
// })