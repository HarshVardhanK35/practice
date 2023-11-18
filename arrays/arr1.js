let students = ["John", "Henry", "John"];

// let res = students.map((item, index)=>{
//     return (`${item} with ID ${index}`)
// });
// console.log(res);

// let res = students.filter((item)=>{
//     if(item[0] == 'J'){
//         return item;
//     }
// })
// console.log(res);

// let num = [1, 2, 3, 4, 5];
// let res = num.slice(1, 3);
// console.log(res)

// function greet(){
//     return("Hello! This is JS Session");
// }
// let clone = greet();
// let clone1 = greet;

// function details(fName, age = 22){
//     return ({
//         firstName: fName,
//         age: age
//     })
// }
// let person1 = details('John', 23);
// console.log(person1);

let clone = function sample(){
    console.log("This is clone function!")
};
clone();