// console.log('Hello');

// const head = document.querySelector("h1");
// const btn = document.getElementById("btn");

// Asynchronous Functions

// --------------------------------------------------- setTimeout
// const changeText = () => {
//   head.innerText = "Changed to Something!!!";
// };

// const timerID = setTimeout(changeText, 5000);

// btn.addEventListener('click', ()=>{
//   console.log(timerID);

//   // --------------------------------------------------- clearTimeout
//   clearTimeout(timerID);
//   console.log('Timer Cancelled')
// })

// console.log('Outside The ASYNC function!!!');

// --------------------------------------------------- setInterval and clearInterval

// const presentDate = (a) => {
//   console.log(a, Date.now());
// };
// const intervalID = setInterval(presentDate, 1000, 'hello');

// const btn1 = document.getElementById('start');
// console.log(btn1)

let intervalID;

const startChange = () => {
  if (!intervalID) {
    intervalID = setInterval(changeColor, 1000);
  }
};

const changeColor = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const stopChange = () => {
  console.log("Interval Stopped");
  clearInterval(intervalID);
};

document.getElementById("start").addEventListener("click", startChange);
document.getElementById("stop").addEventListener("click", stopChange);
