const posts = [
  {title: 'post one', body: 'This is post one'},
  {title: 'post two', body: 'This is post two'}
];
const postElem = document.querySelector('.post');
const headerElem = document.querySelector('h1');
const paraElem = document.querySelector('p');

/*
When we do not use callbacks here --
The third post will not be created and so this will not be rendered on the DOM
*/
function createPost(post, cb){
  setTimeout(()=>{
    posts.push(post)
    cb(); // --- So we have to use the callbacks here
  }, 2000)
};
function getPosts(){
  setTimeout(()=>{
    posts.forEach((post)=>{
      const para = document.createElement('p');
      para.innerHTML = `<strong>${post.title}</strong> - ${post.body}`

      postElem.appendChild(para);
    })
  }, 1000)
};
createPost({title: 'post three', body: 'This is post three'}, getPosts)