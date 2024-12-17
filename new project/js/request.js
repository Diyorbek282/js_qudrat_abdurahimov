// // api
// const API = "https://randomuser.me/api/?results=15";

// // for leader
// const overlay = document.getElementById("overlay");

// // loader

// const loaderToggle = (toggle) => {
//   if (toggle) {
//     overlay.classList.remove("hidden");
//   } else {
//     overlay.classList.add("hidden");
//   }
// };

// //request promise

// const getData = (resourse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState < 4) {
//         loaderToggle(true);
//       } else if (request.readyState == 4 && request.status == 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data.results);
//         loaderToggle(false);
//       } else if (request.readyState == 4) {
//         reject("Error");
//         loaderToggle(false);
//       }
//     });

//     request.open("GET", resourse);
//     request.send();
//   });
// };

// const reload = () => {
//   getData(API)
//     .then((data) => {
//       updateUI(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// document.addEventListener("DOMContentLoaded", reload);

const user = document.getElementById("user");

function getUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((response) => {
      user.innerHTML = "";
      response.forEach((element) => {
        user.innerHTML += `
           <li class="user__item">
              <div class="box">
                <h2>Name: ${element.name}</h2>
                <h3 onclick = "clickInfo(${element.id})">Info</h3>
                <h3 onclick = "clickPost(${element.id})">Post</h3>
                <h3 onclick = "clickAlbom(${element.id})">Albom</h3>
              </div>
            </li>
          `;
      });
    });
}

const clickInfo = (id) => {
  const request1 = `http://127.0.0.1:5500/new%20project/info.html?id=${id}`;
  window.location.href = request1;
};

const clickPost = (id) => {
  const request1 = `http://127.0.0.1:5500/new%20project/post.html?id=${id}`;
  window.location.href = request1;
};

const clickAlbom = (id) => {
  const request1 = `http://127.0.0.1:5500/new%20project/albom.html?id=${id}`;
  window.location.href = request1;
};
getUsers();
