const middleInfo = document.getElementById("middle__info");

const urlId = new URLSearchParams(window.location.search);
const getId = urlId.get("id");
const getId2 = urlId.get("id2");

const request1 = fetch(
  "https://jsonplaceholder.typicode.com/photos?albumId=" + getId
).then((response) => response.json());

const request2 = fetch(
  "https://jsonplaceholder.typicode.com/users/" + getId2
).then((response) => response.json());

function setPhoto() {
  Promise.all([request1, request2]).then(([data1, data2]) => {
    middleInfo.innerHTML = "";
    console.log(data1);
    console.log(data2);
    
    
    data1.forEach((element) => {
      middleInfo.innerHTML += `
         <div style="background-color: #f3f3f3; width:100%; padding:30px;">
            <h2><span style = "color:black;">Name:</span> ${data2.name}</h2>
            <h2><span style = "color:black;">Id:</span> ${element.id}</h2>
            <h2><span style = "color:black;">Title:</span> ${element.title}</h2>
            <img src="${element.url}" alt="" srcset="">
            <img src="${element.thumbnailUrl}" alt="" srcset="">
          </div>
          `;
    });
  });
}

setPhoto();
