fetch('./db/anime.json')
.then((response)=>{
  console.log(`This is response object`);
  console.log(response)
  return response.json()
})
.then(data => console.log(data))