const middleInfo = document.getElementById("middle__info");

const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");

function setInfo() {
  fetch("https://jsonplaceholder.typicode.com/users/" + getId)
    .then((response) => response.json())
    .then((response) => {

      middleInfo.innerHTML = "";

      middleInfo.innerHTML += `
        <div class="infos">
                <h2>Id: ${response.id}</h2>
                <h2>Name: ${response.name}</h2>
                <h2>Username: ${response.username}</h2>
                <h2>Email: ${response.email}</h2>
                <h2>Phone: ${response.phone}</h2>
                <h2>Website: ${response.website}</h2>
            </div>
        `;
    })
    .catch((err) => {
      console.log("error:", err);
    });
}

setInfo();
