// console.log(new Date());

// const now = new Date();
// console.log(now);

// console.log(now.getDate() < 10 ? "0" + now.getDate() : now.getDate());
// console.log(now.getDay());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMonth() + 1);
function getTime() {
  const fullDay = document.querySelector("#full-day");
  const hour = document.querySelector("#hour");
  const minute = document.querySelector("#minute");
  const second = document.querySelector("#second");
  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  fullDay.innerHTML = `
${now.getDate()}-${months[now.getMonth()]}, ${now.getFullYear()}`;

  hour.innerHTML = now.getHours() < 10 ? "0" + now.getHours() : now.getHours();
  minute.innerHTML =
    now.getMinutes() < 10 ? "0" + now.getMinutes() : now.getMinutes();
  second.innerHTML =
    now.getSeconds() < 10 ? "0" + now.getSeconds() : now.getSeconds();
}
getTime();

setInterval(getTime, 1000);
