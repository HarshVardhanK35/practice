// console.log("hello")

// Random function : Math.floor(Math.random)*3000 + 1000

// Used example where we used series of promises...
function getData(endpoint){
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest()
    xhr.open('GET', endpoint)

    xhr.onreadystatechange = function() {
      if(this.readyState === 4){
        if(this.status === 200){
          resolve(JSON.parse(this.responseText))
        }
        else{
          reject('Something went wrong !!!')
        }
      }
    }
    setTimeout(()=>{
      xhr.send()
    }, 1000)
  })
}



// Multiple Promise Chaining
// ------------------------------------------------------
getData('./db/anime.json')
.then((anime)=>{
  // console.log(anime)
  return getData(('./db/characters.json'))
})
.then((characters)=>{
  // console.log(characters)
  return getData('./db/writers.json')
})
.then((writers)=>{
  // console.log(writers)
})


// 1st - Method:
// Replacing the promise chaining with async and await
// ------------------------------------------------------
async function getAllData(){
  const anime = await getData('./db/anime.json')
  const writers = await getData('./db/writers.json')
  const characters = await getData('./db/characters.json')

  console.log(anime, writers, characters);
}
// getAllData();


// 2nd - Method:
// Replacing XMLHttpRequest with fetch to get data
// ------------------------------------------------------
const getDataWithFetch = async() => {
  const animeRes = await fetch('./db/anime.json')
  const anime = await animeRes.json()
  const charactersRes = await fetch('./db/characters.json')
  const characters = await charactersRes.json()
  const writersRes = await fetch('./db/writers.json')
  const writers = await writersRes.json()

  console.log(anime, characters, writers)
}
// getDataWithFetch()


// 3rd-Method:
// Replacing XMLHttpRequest with fetch and promise.all() to get data
// ------------------------------------------------------
async function getDataWithPromiseall(){
  const [animeRes, charactersRes, writersRes] = await Promise.all([
    fetch('./db/anime.json'),
    fetch('./db/characters.json'),
    fetch('./db/writers.json')
  ])
  const anime = await animeRes.json();
  const characters = await charactersRes.json();
  const writers = await writersRes.json();

  console.log(anime, characters, writers);
}
// getDataWithPromiseall();