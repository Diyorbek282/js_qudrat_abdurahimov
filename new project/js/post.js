const middleInfo = document.getElementById("middle__info");

const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");

function setPost() {
  fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((response) => {
      middleInfo.innerHTML = "";
      response.forEach((element) => {
        if (element.userId == getId) {
          middleInfo.innerHTML += `
         <div style="background-color: #f3f3f3; padding: 30px;">
            <h2><span style = "color:black;">UserId:</span> ${element.userId}</h2>
            <h2><span style = "color:black;">Id:</span> ${element.id}</h2>
            <h2><span style = "color:black;">Title:</span> ${element.title}</h2>
            <h2><span style = "color:black;">Body:</span> ${element.body}</h2>
            <button
            onclick = "clickComment(${element.id})"
          style="
            font-size: 30px;
            color: black;
            padding: 10px;
            background-color: #f3f3f3;
            border: 1px solid;
          "
        >
          Comment
        </button>
          </div>
          <br>
          `;
        }
      });
    });
}

setPost();

function clickComment(id) {
  const request1 = `http://127.0.0.1:5500/new%20project/comments.html?id=${id}`;
  window.location.href = request1;
}
