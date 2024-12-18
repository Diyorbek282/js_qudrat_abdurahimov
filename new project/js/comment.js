const middleInfo = document.getElementById("middle__info");
const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");
const getId2 = urlId.get("id2");

const request1 = fetch(
  "https://jsonplaceholder.typicode.com/comments?postId=" + getId
).then((response) => response.json());

const request2 = fetch(
  "https://jsonplaceholder.typicode.com/users/" + getId2
).then((response) => response.json());

const getComments = () => {
  Promise.all([request1, request2]).then(([data1, data2]) => {
    middleInfo.innerHTML = "";

    data1.forEach((element) => {
      if (element.postId == getId) {
        middleInfo.innerHTML += `
           <div style="background-color: #f3f3f3; padding: 30px;">
              <h2><span style = "color:black;">Name:</span> ${data2.name}</h2>
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
