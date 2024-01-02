// 1-Method:

function createPost(post){
  fetch('https://jsonplaceholder.typicode.com/posts', {
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
  .then((res)=>{return res.json()})
  .then((data)=>{console.log(data)})
}

createPost({title: "My Post", body: "This is My-Post"})