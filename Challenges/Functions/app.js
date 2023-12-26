// Function that takes array as an argument to return a random item in that same array
// function getRandom(...arr){

//   const randIndex = Math.round(Math.random()*arr.length);
//   const item = arr[randIndex];
//   console.log(item);
// };

// getRandom(1, 2, 3);



// Challenge - 1
// Function that takes a temperature value in F and converts it into Celsius.
// const getCelsius = (fahren) => `The Fahrenheit is ${(((fahren - 32) * 5) / 9).toFixed(2)}\xB0C `;
// console.log(getCelsius(200));



// Challenge - 2
// MinMax() Takes an array and returns an object with min and max numbers in that array.

// Solution - 1
// const minMax1 = (arr) => ({
//   'Min Value': Math.min(...arr),
//   'Max Value': Math.max(...arr)
// });
// console.log(minMax1([1, 2, 3]));

// Solution - 2
// const minMax2 = (arr) => {
//   const minArr = Math.min(...arr);
//   const maxArr = Math.max(...arr);
//   return ({
//     'maximum value': maxArr,
//     'minimum value': minArr
//   })
// };
// console.log(minMax2([1, 2, 3]))



// Challenge - 3
// Write an IIFE to return - The area of rectangle with ${length} and ${width} is ${area}

// (func = (len, wid) => {
//   const area = len * wid;
//   const out = `The area of rectangle with ${len} and ${wid} is ${area}`;
//   console.log(out);
// })(10, 20);
// console.log(window);


// const add = (num1, num2) => {
//   var sum;
//   sum = num1 + num2;
//   return(sum)
// }
// var res = (add(1, 2))
// console.log(res)

// const multiply = (num3) => {
//   let prod = res * (num3);
//   return prod;
// }
// console.log(multiply(2))