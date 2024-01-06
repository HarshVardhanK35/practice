// console.log('Hello')

/* Ways to handle errors:
                          1st way ---> Try...Catch Method
                          2nd way ---> .then() method
*/

// 1. try...catch with async & await (Using Url)
// ------------------------------------------------

// const getUsers = async() => {
//   try{
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await res.json();

//     console.log(data)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// getUsers()

// try...catch with async & await (Using Url with 404 error!)
// ------------------------------------------------
// const getUsers = async() => {
//   try{
//     const res = await fetch('https://httpstat.us/404')
//     if(!res.ok){
//       throw new Error('Bad Request !!!')
//     }
//     const data = await res.text();
//     console.log(data)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
// getUsers();

// (2) .then() with async & await (Using Url)
// ------------------------------------------------

// const getUsers = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();

//   console.log(data);
// };
// getUsers().catch((err)=>{console.log(err)})

