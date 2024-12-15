const API = "https://restcountries.com/v3.1/all";

const getData = async (resurse) => {
  const request = await fetch(resurse);
  const data = await request.json();
  return data;
};

getData(API)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
