// const getTodos = (resurse) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       // console.log(request, request.readyState);
//       if (request.readyState == 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState == 4) {
//         reject("Ma'lumotni olishni iloji yo'q!!!");
//       }
//     });

//     //open
//     request.open("GET", resurse);

//     //send
//     request.send();
//   });
// };

// getTodos("./todos/todos.json")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// getTodos("./todos/todos.json", (err, data) => {
//   console.log(data);
//   getTodos("./todos/todos2.json", (err, data) => {
//     console.log(data);
//     getTodos("./todos/todos3.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// const internet = true;

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     if (internet) {
//       resolve("Some data 111");
//     } else {
//       reject("Some error");
//     }
//   });
// };

// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((data) => {
//     console.log(data);
//   });

//promise chaining

const getTodos = (resurse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      // console.log(request, request.readyState);
      if (request.readyState == 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        reject("Ma'lumotni olishni iloji yo'q!!!");
      }
    });

    //open
    request.open("GET", resurse);

    //send
    request.send();
  });
};

getTodos("./todos/todos.json")
  .then((data) => {
    console.log(data);
    return getTodos("./todos/todos2.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("./todos/todos3.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
