let students = ["John", "Henry"];

let res = students.map((item, index)=>{
    return (`${item} with ID ${index}`)
});
console.log(res);