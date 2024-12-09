const images = document.querySelectorAll("#images img");
const pult = document.querySelectorAll("#pult");
const lock_screen = document.getElementById("lock_screen");
const top1 = document.getElementById("top");
const bottom1 = document.getElementById("bottom");
let img_sum = images.length;
let counter = 0;

const TV = () => {
  lock_screen.addEventListener("click", (e) => {
    if (counter === 0) {
      images[counter    ].classList.remove("hidden");
      counter++;
      if (counter === 1) {
        top1.addEventListener("click", () => {
          images[0].classList.add("hidden");
          images[counter].classList.remove("visible");
          images[counter + 1].classList.add("visible");
          counter++;
        });
      }
      if (counter === 1) {
        bottom1.addEventListener("click", () => {
          images[counter].classList.remove("visible");
          images[counter - 1].classList.add("visible");
          counter--;
        });
      }
    } else {
      counter--;
      images.forEach((image) => {
        image.classList.remove("visible");
      });
    }
  });
};

TV();
