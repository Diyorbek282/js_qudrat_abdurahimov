const middleInfo = document.getElementById("middle__info");

const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");

const request1 = fetch(
  "https://jsonplaceholder.typicode.com/albums?userId=" + getId
).then((response) => response.json());

const request2 = fetch(
  "https://jsonplaceholder.typicode.com/users/" + getId
).then((response) => response.json());
function setPost() {
  Promise.all([request1, request2]).then(([data1, data2]) => {
    middleInfo.innerHTML = "";
    data1.forEach((element) => {
      if (element.userId == getId) {
        middleInfo.innerHTML += `
         <div style="background-color: #f3f3f3; width:100%; padding:30px;">
            <h2><span style = "color:black;">Name:</span> ${data2.name}</h2>
            <h2><span style = "color:black;">UserId:</span> ${element.userId}</h2>
            <h2><span style = "color:black;">Id:</span> ${element.id}</h2>
            <h2><span style = "color:black;">Title:</span> ${element.title}</h2>
            <button
            onclick = "clickPhoto(${element.id}, ${element.userId})"
          style="
            font-size: 30px;
            color: black;
            padding: 10px;
            background-color: #f3f3f3;
            border: 1px solid;
          "
        >
          Photos
        </button>
          </div>
          <br>
          `;
      }
    });
  });
}

setPost();

function clickPhoto(id, id2) {
  const request1 = `http://127.0.0.1:5500/new%20project/photo.html?id=${id}&&id2=${id2}`;
  window.location.href = request1;
}
