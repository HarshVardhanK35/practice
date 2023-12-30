const joke = document.getElementById("joke");
const btn = document.querySelector(".btn");

function generateJoke() {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {

    if (this.readyState === 4) {
      if (this.status === 200) {

        const data = JSON.parse(this.responseText);
        joke.innerText = data.value

        // console.log(data.value);
      } else {
        joke.innerHTML = 'Something Went Wrong (Smile!!!)'
      }
    }
  };
  xhr.send();
}

btn.addEventListener("click", generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke)