// console.log('hello')

const getData = (endPoint, cb) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', endPoint);

  xhr.onreadystatechange = function () {
    if(this.readyState === 4){
      if(this.status === 200){
        cb(JSON.parse(this.responseText))
      }
      else{
        console.log("Something went wrong")
      }
    }
  }
  setTimeout(()=>{
    xhr.send()
  }, Math.floor(Math.random()*3000) + 1000)
};

// from here the callback starts...
getData('./db/anime.json', (data)=>{
  console.log(data)
  getData('./db/characters.json', (data)=>{
    console.log(data)
    getData('./db/writers.json', (data)=>{
      console.log(data)
    });
  });
});