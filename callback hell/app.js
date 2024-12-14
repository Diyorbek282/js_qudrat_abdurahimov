const getTodos = (resurse, callback) => {
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
  request.open("GET", resurse);

  //send
  request.send();
};

getTodos("./todos/todos.json", (err, data) => {
  console.log(data);
  getTodos("./todos/todos2.json", (err, data) => {
    console.log(data);
    getTodos("./todos/todos3.json", (err, data) => {
      console.log(data);
    });
  });
});
