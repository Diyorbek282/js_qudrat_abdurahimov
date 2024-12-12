// localStorage.setItem("name", JSON.stringify(names));

// const getNames = JSON.parse(localStorage.getItem("names"));
// console.log(getNames);

const names = JSON.parse(localStorage.getItem("name"))
  ? JSON.parse(localStorage.getItem("name"))
  : [];

if (names.length > 0) {
  names.forEach((name) => {
    console.log(name);
  });
} else {
  console.log("Hech qanday ism yo'q!!!");
}
