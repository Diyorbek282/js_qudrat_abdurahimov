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

// const link = document.querySelector("a");

// link.setAttribute("href", "https://www.yandex.ru");
// console.log(link.getAttribute("href"));
// link.textContent = "Go To Yandex Main Page";

// const text = document.querySelector("p");
// console.log(text.getAttribute("class"));
// text.setAttribute('class', 'success')

// text.setAttribute('style', 'color: red')

// const heading = document.querySelector("h1");

// heading.setAttribute("style", "margin:50px");

// console.log(heading.style);
// heading.style.margin = "50px";
// heading.style.color = "crimson";
// heading.style.fontSize = "100px";
// heading.style.margin = "";

// const content = document.querySelector("p");
// console.log(content.classList);
// content.classList.add("success");
// content.classList.add("error");

// const paragraph = document.querySelectorAll("p");
// paragraph.forEach((element) => {
//   const text_1 = element.textContent.split(" ");
//   text_1.forEach((element2) => {
//     if ("error" == element2) {
//       element.classList.add("error");
//     } else if ("success" == element2) {
//       element.classList.add("success");
//     }
//   });
// });

// includes('success') bu true yoki false qaytaradi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// .toggle(class nomi) bu bor bulsa olib tawlayddi klasni yoq bolsa klasni qowadi!!!!!!!!!!!!!!!!

// const article = document.querySelector('article')
// console.log(article.children);
// Array.from(article.children).forEach(child => {
//     console.log(child);

// });

// const title = document.querySelector('h2')
// console.log(title.parentElement)
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

// const button = document.querySelector('button')
// button.addEventListener('click', ()=> {
//     console.log('click');

// });

const ul = document.querySelector("ul");
// ul.remove()

const button = document.querySelector("button");
button.addEventListener("click", () => {
  //   ul.innerHTML += "<li>Something new next</li>";

  const li = document.createElement("li");
  li.textContent = "Something new text";
  ul.appendChild(li);
  //   ul.prepend(li);
});

const li = document.querySelectorAll("li");

// li.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     // console.log("Bosildi!!!");
//     // console.log(e);
//     // console.log(e.target);
//     // console.log(element);
//     // e.target.style.textDecoration = "line-through";
//     // e.target.style.opacity = "0.8";
//     // e.target.remove();
//     // e.stopPropagation()
//   });
// });

ul.addEventListener("click", (e) => {
  if(e.target.nodeName == 'LI')
    e.target.remove();
  
  
});
