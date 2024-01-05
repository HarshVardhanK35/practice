// console.log('hello')

// Here the error was not caught --- it returns success message even there is 404 (bad req)
// ---------------------------------------------------
// fetch("https://httpstat.us/400")
//   .then((res) => {
//     return res;
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------------------------------------------------- Error Handling --- Using response object (res.status or res.ok)
// fetch("https://httpstat.us/400")
//   .then((res) => {
//     if(!res.ok){
//       throw new Error('Request Failed !!!')
//     }
//     return res;
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// --------------------------------------------------- Error Handling ---> Using Specific Code
// fetch("https://httpstat.us/500")
//   .then((res) => {
//     if(res.status === 400){
//       throw new Error('Bad Request')
//     }
//     else if(res.status === 401){
//       throw new Error('Unauthorized')
//     }
//     else if(res.status === 404){
//       throw new Error('Not Found')
//     }
//     else if(!res.status === 200){
//       throw new Error('Request Failed')
//     }
//     return res;
//   })
//   .then(() => {
//     console.log("Success");
//   })
//   .catch((err) => {
//     console.log(err);
//   });