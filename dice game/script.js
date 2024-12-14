// buttons
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector("#btn--new");
const btnHold = document.querySelector(".btn--hold");
const current0 = document.getElementById("current--0");
const current1 = document.getElementById("current--1");
const score0 = document.getElementById("score--0");
const score1 = document.getElementById("score--1");
const player0 = document.getElementById("player--0");
const player1 = document.getElementById("player--1");

//dice image
const diceImg = document.querySelector(".dice");
const img = document.querySelector("img");
let num1 = 0; //bu qiymat 1 ga uzgarmayapti
let num0 = 0;
let counterFor0 = 0;
let counterFor1 = 0;
let counter0 = 0;
let counter1 = 0;

btnRoll.addEventListener("click", () => {
  checkPlayer0();
  checkPlayer1();
});

function checkPlayer0(b) {
  b;
  player0.classList.add("player--active");
  player1.classList.remove("player--active");
  num1 = randomNumber();
  diceImg.classList.remove("hidden");
  if (num1 != 1 && player0.classList[2] == "player--active") {
    current1.innerHTML = 0;
    img.src = `http://127.0.0.1:5500/dice%20game/dice-${num1}.png`;
    counterFor0 = counterFor0 + num1;
    current0.innerHTML = counterFor0;
    holdNumber(counterFor0);
  } else {
    checkPlayer1((img.src = `http://127.0.0.1:5500/dice%20game/dice-${1}.png`));
  }
}

function checkPlayer1(b) {
  b;
  player0.classList.remove("player--active");
  player1.classList.add("player--active");
  num0 = randomNumber();
  if (num0 != 1 && player1.classList[2] == "player--active") {
    current0.innerHTML = 0;
    img.src = `http://127.0.0.1:5500/dice%20game/dice-${num0}.png`;
    counterFor1 = counterFor1 + num0;
    current1.innerHTML = counterFor1;
    holdNumber(counterFor1);
  } else {
    checkPlayer0((img.src = `http://127.0.0.1:5500/dice%20game/dice-${1}.png`));
  }
}
btnNew.addEventListener("click", () => {
  location.reload();
});

// random function
function randomNumber() {
  number = Math.trunc(Math.random() * 6) + 1;
  return number;
}
//add winner

function addWinner() {
  if (counter0 >= 100) {
    player0.classList.add("player--winner");
    return;
  }
  if (counter1 >= 100) {
    player1.classList.add("player--winner");
    return;
  }
}

// hold function

function holdNumber(a) {
  btnHold.addEventListener("click", () => {
    if (player0.classList[2] == "player--active") {
      counter0 = counter0 + a;
      score0.innerHTML = counter0;
      current0.innerHTML = 0;
      counterFor0 = 0;
    } else {
      counter1 = counter1 + a;
      score1.innerHTML = counter1;
      current1.innerHTML = 0;
      counterFor1 = 0;
    }
    addWinner();
  });
}
