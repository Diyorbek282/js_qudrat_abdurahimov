const images = document.querySelectorAll("#images img");
const pult = document.querySelectorAll("#pult");
const lock_screen = document.getElementById("lock_screen");
const top1 = document.getElementById("top");
let counter = 0;

const TV = () => {
  lock_screen.addEventListener("click", (e) => {
    if (counter === 0) {
      counter = 1;
      images[0].classList.remove("hidden");
    } else {
      counter = 0;
      images.forEach((image) => {
        image.classList.add("hidden");
      });
    }
  });
};

TV();
