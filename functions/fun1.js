// function details(fName, age = 22){
//     return ({
//         firstName: fName,
//         age: age
//     })
// }
// let person1 = details('John', 23);
// console.log(person1);

// let clone = function sample(){
//     console.log("This is clone function!")
// };
// clone();

// let filterArr = (arr, a, b)=>{
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= a && arr[i] <= b){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// };
// console.log(filterArr([5, 3, 8, 1, 0], 1, 4));

// function simpleCalci(operation, a, b){
//     let res = "";
//     switch(operation){
//         case "add":
//             res = a + b;
//             break;
//         case "subtract" || "sub":
//             if(a > b){
//                 res = a - b;
//             }else{
//                 res = b - a;
//             }
//             break;
//         case "multiply" || "product" || "mul":
//             res = a * b;
//             break;
//         case "div" || "division":
//     }
// }