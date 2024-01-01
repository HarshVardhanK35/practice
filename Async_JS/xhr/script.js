const xhr = new XMLHttpRequest();
const ul = document.querySelector('#ul')

// File Path
// xhr.open('GET', './db.json');

// Takes URL- End Points - API Response
xhr.open('GET', 'https://api.github.com/users/HarshVardhanK35');

/*
readyState 5 passible states:

0 ---> Request not initialized
1 ---> Server connection established
2 ---> request received
3 ---> processing request
4 ---> request finished and response is ready
*/

// xhr.onreadystatechange = function(){

//   // --------------------------------- States
//   // console.log(this.readyState);
//   // --------------------------------- Status
//   // console.log(this.status);

//   // --------------------------------- Check the States and Status
//   if(this.readyState === 4 && this.status === 200){
//     const data = JSON.parse(this.responseText);


//     data.forEach((anime)=>{
//       const li = document.createElement('li');
//       li.innerHTML = `<strong>${anime.title}</strong> - ${anime.character}`;
//       console.log(li)
//       ul.appendChild(li)
//     });
//   };
// };

xhr.onreadystatechange = function(){
  if(this.readyState === 4 && this.status === 200){

    const data = JSON.parse(this.responseText);

    const li = document.createElement('li');
    li.innerHTML = `<strong>User Name</strong>- ${data.login} |
    <strong>Repos Created</strong> - ${data.public_repos}`;

    ul.appendChild(li)
  }
};

xhr.send()