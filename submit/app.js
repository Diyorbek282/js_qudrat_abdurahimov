const signupForm = document.querySelector("#singup-form");
// const useraname = document.querySelector("#username");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(signupForm.username.value);
});
