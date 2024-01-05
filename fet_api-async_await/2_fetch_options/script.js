// 1-Method:

function createPost(post){
  fetch('https://jsonplaceholder.typicode.com/posts1', {
    method: 'POST',
    body: JSON.stringify({
      title: post.title,
      body: post.body
    }),
    headers:{
      'Content-Type': 'application/json',
      token: 'abc123'
    }
  })
  .then((res)=>{
    if(!res.ok){
      const errorElem = document.querySelector('.error')
      errorElem.innerText = `Error ${res.status}: Not Found`
      throw new Error('Request Failed!')
    }
    return res.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

createPost({title: "My Post", body: "This is My-Post"})