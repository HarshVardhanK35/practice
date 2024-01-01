// console.log("Hello")
// console.log('hello')

function getData(endPoint){
  return new Promise((res, rej) => {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', endPoint);

    xhr.onreadystatechange = function () {
      if(this.readyState === 4){
        if(this.status === 200){
          res(JSON.parse(this.responseText))
        }
        else{
          rej(`Error: Something went wrong !!! ${this.status}`)
        }
      }
    }

    setTimeout(()=>{
      xhr.send()
    }, Math.floor(Math.random()*3000) + 1000)
  })
}

// Promises
const animePrm = getData('./db/anime.json');
const charactersPrm = getData('./db/characters.json');
const writersPrm = getData('./db/writers.json');

// Promise.all() --- takes all promises --- which is an array
Promise.all([animePrm, charactersPrm, writersPrm])
.then((data)=>{
  console.log(data)
})
.catch((err)=>{
  console.log(err)
})