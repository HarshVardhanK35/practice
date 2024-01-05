// console.log('Hello')

// try...catch with async & await (Using Url)
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