// const listItem = document.getElementsByTagName("li");
// console.log(listItem[0]);

// getElementByclassName

// const listItem = document.getElementsByClassName("list-item");
// console.log(listItem[0]);

// getElementById

// const clickBtn = document.getElementById('click-btn');
// console.log(clickBtn);

// querySelector

// const listItem = document.querySelector("body");
// console.log(listItem);

// const listItem = document.querySelectorAll("li");
// listItem.forEach((element) => {
//   console.log(element);
// });

const link = document.querySelector("a");

link.setAttribute("href", "https://www.yandex.ru");
console.log(link.getAttribute("href"));
link.textContent = "Go To Yandex Main Page";

const text = document.querySelector("p");
console.log(text.getAttribute("class"));
text.setAttribute('class', 'success')

text.setAttribute('style', 'color: red')
