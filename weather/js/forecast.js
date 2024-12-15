const KEY = "ce46d11730476f9be44c2d97d13c7b05";

// request get data

const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}`;
  loader(true);
  const request = await fetch(base + query);
  const data = await request.json();
  loader(false);
  return data;
};
