// console.log("Hello")

// ----------------- Using .then() method to consume a promise
const promise = new Promise ((res, rej) => {
  setTimeout(()=>{
    res({name: "John", age: 23})
  }, 1000);
})
promise
.then((data)=>{
  // console.log(data)
})

// ----------------------------------------------------------------------------------------------------

// ----------------- using async and await to consume the data from an api
// Method - 1:
// ----------------- Function Declaration

// async function getUsers(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data =  await res.json()
//   console.log(data)
// }

// Method - 2:
// ----------------- Arrow Functions

// const getUsers = async(url) => {
//   const res = await fetch(url)
//   const data =  await res.json()
//   console.log(data)
// }
// getUsers('https://jsonplaceholder.typicode.com/users');