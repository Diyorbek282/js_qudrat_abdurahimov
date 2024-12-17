const middleInfo = document.getElementById("middle__info");
const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");

const getComments = () => {
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((response) => {
      middleInfo.innerHTML = "";
      response.forEach((element) => {
        if (element.postId == getId) {
          middleInfo.innerHTML += `
           <div style="background-color: #f3f3f3; padding: 30px;">
              <h2><span style = "color:black;">PostId:</span> ${element.postId}</h2>
              <h2><span style = "color:black;">Id:</span> ${element.id}</h2>
              <h2><span style = "color:black;">Name:</span> ${element.name}</h2>
              <h2><span style = "color:black;">Email:</span> ${element.email}</h2>
              <h2><span style = "color:black;">Body:</span> ${element.body}</h2>
            </div>
            <br>
            `;
        }
      });
    });
};

getComments();
