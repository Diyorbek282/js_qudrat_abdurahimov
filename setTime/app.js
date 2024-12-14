// // setTimeout(()=>{
// //     alert("Hello world")
// // }, 3000)

// let a = 0;
// const timerInterval = setInterval(() => {
//   a++;
//   console.log(a);
// }, 1000);

// setTimeout(() => {
//   clearInterval(timerInterval);
// }, 10000);

const start = document.getElementById("start");
const pause = document.getElementById("pause");
const numberP = document.querySelector(".number");
let count = 1;
let timerInterval;

const startFunksiya = () => {
  start.addEventListener("click", () => {
    timerInterval = setInterval(() => {
      numberP.innerHTML = count;
      count++;
    }, 1000);
    numberP.classList.add("green");
  });
};

const pauseFunksiya = () => {
  pause.addEventListener("click", () => {
    clearInterval(timerInterval);
    numberP.classList.remove("green");
    numberP.innerHTML = count;
  });
};

startFunksiya();
pauseFunksiya();
