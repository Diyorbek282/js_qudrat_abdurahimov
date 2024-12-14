const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const btnPlayer1 = document.getElementById("btnPlayer1");
const btnPlayer2 = document.getElementById("btnPlayer2");

const gameLavel = document.getElementById("gameLavel");
const reset = document.getElementById("reset");

let condition = false;
let num = 0;
gameLavel.addEventListener("change", () => {
  const chooseNumber = gameLavel.options[gameLavel.selectedIndex].text;
  num = chooseNumber;
  console.log(chooseNumber);
  checkChooseNumber();
});

btnPlayer1.addEventListener("click", () => {
  if (num < Number(player1.innerHTML) + 1) {
    return;
  }
  if (player1.className == "loser") {
    return;
  } else {
    player1.innerHTML = parseInt(player1.innerHTML) + 1;
    console.log(player1.innerHTML);
    checker1(player1.innerHTML);
  }
});

btnPlayer2.addEventListener("click", () => {
  if (num < Number(player2.innerHTML) + 1) {
    return;
  }
  if (player2.className == "loser") {
    return;
  } else {
    player2.innerHTML = parseInt(player2.innerHTML) + 1;
    console.log(player2.innerHTML);
    checker2(player2.innerHTML);
  }
});

function checker1(b) {
  if (num == Number(player1.innerHTML)) {
    console.log("yutdi1");
    player1.classList.add("winner");
    player2.classList.add("loser");
  }
}

function checker2(b) {
  if (num == Number(player2.innerHTML)) {
    console.log("yutdi2");
    player2.classList.add("winner");
    player1.classList.add("loser");
  }
}

function resetGame() {
  location.reload();
}

function checkChooseNumber() {
  if (condition) {
    resetGame();
  } else {
    condition = true;
    return;
  }
}

reset.addEventListener("click", resetGame);
