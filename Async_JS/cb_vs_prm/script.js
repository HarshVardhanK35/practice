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

// Using Promises to prevent Callback-Hell...
getData('./db/anime.json')
.then((anime)=>{
  console.log(anime)
  return getData('./db/characters.json')
})
.then((characters)=>{
  console.log(characters)
  return getData('./db/writers.json')
})
.then((writers)=>{
  console.log(writers)
})