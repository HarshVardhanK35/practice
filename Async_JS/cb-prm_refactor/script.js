// console.log('hello');

const posts =
[
  {title: 'Post One', body: 'This is Post - One'},
  {title: 'Post Two', body: 'This is Post - Two'}
];

const createPost = (post) => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      let err = false;
      if(!err){
        posts.push(post)
        res();
      }
      else{
        rej("Something went wrong !!!");
      }
    }, 2000)
  })
};

function getPosts(){
  setTimeout(()=>{
    posts.forEach((post)=>{
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`

      document.body.appendChild(div)
    })
  })
}

createPost(
  {
    title: 'Post Three',
    body: 'This is Post - Three'
  }
)
.then((getPosts));