const signupForm = document.querySelector("#singup-form");
// const useraname = document.querySelector("#username");
const message = document.querySelector(".message");
const regEX = /^[a-zA-Z0-9]{6,12}$/;
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = signupForm.username.value;

  if (regEX.test(inputVal)) {
    message.textContent = "Ma'lumot to'g'ri kiritiladi!!!";
  } else {
    message.textContent = "Ma'lumot xato kiritilgan!!!";
  }
});

signupForm.username.addEventListener("keyup", (e) => {
  if (regEX.test(e.target.value)) {
    signupForm.username.setAttribute("class", "success");
  } else {
    signupForm.username.setAttribute("class", "error");
  }
});
