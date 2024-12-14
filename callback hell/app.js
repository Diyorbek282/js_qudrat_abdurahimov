const getTodos = (callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log(request, request.readyState);
    if (request.readyState == 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState == 4) {
      callback("Ma'lumotni olishni iloji yo'q!!!", undefined);
    }
  });

  //open
  request.open("GET", "todos.json");

  //send
  request.send();
};

getTodos((err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
