// console.log('Hello world')

// alert("Hello World");

// let email = "1203jumayev@gamil.com";
// console.log(email);

// let firstName = 'Diyorbek'
// let lastName = 'Jumayev'

// let fullName = firstName + ' ' + lastName
// console.log(fullName)

// console.log(fullName[2])

// console.log(fullName.length)

// console.log(fullName.toUpperCase())

// let result = fullName.toLocaleLowerCase()
// console.log(result)

// let index = email.indexOf("@")
// console.log(index)

// let last = email.lastIndexOf("a");
// console.log(last);

// let result = email.slice();
// console.log(result);

// let result = email.replace('a', 'e' )
// console.log(result)

// let result = email.charAt(9)
// console.log(result)

// let result = email.trim()
// console.log(result)

// let result = email.split("")
// console.log(result)

// let radius = 10;
// let pi = 3.14;

// let result = radius * pi;
// console.log(result, pi)
// console.log(result);
// console.log(radius / pi);
// console.log(102%100)

// let likes = 10;
// likes++
// likes--
// likes+=1
// likes-=5
// likes*=7
// likes/=6

// console.log(likes)

// let title = "Salom mening ismim Diyorbek";
// let yosh = "Mening yoshim 19da";
// console.log(title, yosh);

// let result =
//   `Hurmatli muxlislar ${title}, va ${yosh} sizlar bilan tanishganimdan xursandman!`;
// console.log(result);

// let result = mehmonlar[3]
// console.log(result)

// let result = mehmonlar.length
// console.log(result)

// let append = mehmonlar.pop('Nusrat')
// console.log(mehmonlar)
// console.log(append)
// let son = 23
//  let number = [1, 2, 5, 6, 99, 102, 11125]
// console.log(number)

// let result = number.concat(mehmonlar)
// console.log(result)

// let email = "1203jumayev@gmail.com";

// let result = email.includes('4')
// console.log(result)

// let age = 25;
// console.log(age == 5);
// console.log(age != 5);
// console.log(age > 20);
// console.log(age < 20);
// console.log(age <= 25);
// console.log(age >= 25);

// let ism = prompt("Ismingizni kiriting:");

// let firstName = ism.charAt().toUpperCase();

// let last = ism.slice(1).toLowerCase();

// let result = firstName.concat(last);

// console.log(result);
// alert(`Salom, ${result}`);

// const names = ["ahror", "sardor", "doniyor", "aziz", "bahrom"];
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i].toUpperCase);
// }

// for (let i = 1; i < 11; i = i + 2) {
//   console.log(i);
// }

// for (let i = 2; i < 11; i = i + 2) {
//   console.log(i);
// }

// let i = 0;
// while (i < names.length) {
//   console.log(names[i].toUpperCase());
//   i++;
// }

// let i = 0
// while (i<5){
//     console.log(i)
//     i++
// }

// let i = 5;
// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// const age = 25;
// if (age > 20) {
//   console.log("Siz 20 yoshdan katta siz!");
// }

// const mehmonlar = ["Azizbek", "Lazizbek", "Asror", "Behruz"];
// if (mehmonlar.length > 3) {
//   console.log("Yetarlicha mehmonlar mavjud!");
// }

// const parol = "password";
// if (parol.length >= 12) {
//   console.log("Sizning parolingiz juda uzun!");
// } else if (parol.length >= 8) {
//   console.log("Sizning parolingiz yetarlicha kuchli!");
// } else {
//   console.log("Sizing parolingiz yetarlicha kuchli emas!");
// }

// const parol = "password@";
// if (parol.length >= 12 && parol.includes("@")) {
//   console.log("Sizning parolingiz juda uzun!");
// } else if (parol.length >= 8 || (parol.includes("@") && parol.length >= 5)) {
//   console.log("Sizning parolingiz yetarlicha kuchli!");
// } else {
//   console.log("Sizing parolingiz yetarlicha kuchli emas!");
// }

// const results = [30, 43, 0, 65, 100, 20, 11];
// for (let i = 0; i < results.length; i++) {
//   if (results[i] === 0) {
//     continue;
//   }
//   console.log(`Sizning natijangiz: ${results[i]}`);

//   if (results[i] === 100) {
//     console.log("Siz neg yuqori natijadasiz!");
//     break;
//   }
// }

// let ism = prompt("Ismingizni kiriting:");
// let yosh = prompt("Yoshingizni kiriting:");

// let firstName = ism.charAt().toUpperCase();

// let last = ism.slice(1).toLowerCase();

// let result = firstName.concat(last);

// console.log(result);

// console.log(yosh);

// let yil = 2024 - yosh;
// console.log(`Siz ${yil}da tug'ilgansiz.`);
// let oy = yosh * 12;
// console.log(`${oy} oy`);
// let hafta = oy * 7;
// console.log(`${hafta} hafta`);
// let kun = oy * 30;
// console.log(`${kun} kun`);
// let soat = kun * 24;
// console.log(`${soat} soat`);
// let minut = soat * 60;
// console.log(`${minut} minut`);
// let sekund = minut * 60;
// console.log(`${sekund} sekund`);

// const names = ["Ahror", "Sardor", "Doniyor"];

// let search = prompt("Kim kerak: ");

// let firstName = search.charAt().toUpperCase();

// let last = search.slice(1).toLowerCase();

// let result = firstName.concat(last);
// if(names.includes(result)){
//     console.log(result)

// }else{
//     console.log("Yo'q")
// }

// const names = ["Ahror", "Sardor", "Doniyor", "Diyorbek"];
// for (let i = 0; i < names.length; i++) {
//   let lastThree = names[i].slice(-3);
//   if (lastThree !== "bek") {
//     let result = names[i] + "bek";
//     console.log(result);
//   } else console.log(names[i]);
// }

// let viloyatNomi = prompt("Qaysi viloyat aholisi kerak? ");

// if (viloyatNomi === "Buxoro") {
//   alert(
//     "Buxoro viloyatining doimiy aholisi soni 2 044 000 kishini tashkil etgan."
//   );
// } else if (viloyatNomi === "Toshkent") {
//   alert(
//     "Toshkent shahri aholisi soni 2023-yil 1-aprel holatiga ko‘ra 3 054 000 kishini tashkil etgan."
//   );
// } else if (viloyatNomi === "Navoi") {
//   alert(
//     "Navoiy viloyati aholisi soni 2020-yil 1-oktabr holatiga ko‘ra 1 004 500 kishini tashkil etgan."
//   );
// } else {
//   alert("Menda boshqa malumot yo'q");
// }

// let number = prompt("Nimadir kiriting:");

// let meyor = 20;
// let result = number.length;
// console.log(result);
// if (result === meyor) {
//   alert("Hammasi joyida!");
// } else if (result > meyor) {
//   alert(`Siz meyordan ${result - meyor}ta oshdingiz!`);
// } else {
//   alert(`Siz meyordan ${meyor - result}ta kamaytirdingiz`);
// }

// function decloration
// syaHello();
// syaHello();
// syaHello();

// function syaHello() {
//   console.log("Hello Function decloration");
// }

// function expression
// const sayByeBye = function () {
//   console.log("SayByeBye");
// };
// sayByeBye();
// sayByeBye();
// sayByeBye();

//  arrow function
// const nice = () => {
//   console.log("This is arraw function!");
// };

// nice();
// nice();
// nice();

// const sayHello = function(name, day='tun'){
//     console.log(`Hayrli ${day} ${name}`)
// }

// sayHello('Behruz', 'tong')

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

// const a = calcArea(5);

// const myFunc = (callbackFunc) => {
//   let number = 50;
//   callbackFunc(number);
// };

// myFunc((value) => {
//   console.log(value);
// });

// const ismlar = ["ahror", "sardor", "doniyor", "farxod"];
// const newIsmlar = [];
// ismlar.forEach(function (ism) {
//   const newIsm = ism.charAt().toUpperCase() + ism.slice(1) + "bek";
//   newIsmlar.push(newIsm);
// });
// console.log(newIsmlar);

// const user = {
//   name: "Diyor",
//   age: "19",
//   email: "1203jumayev@gmail.com",
//   location: "Buxoro",
//   lang: ["uzbek", "russian", "english"],
// };
// console.log(user);
// console.log(user.email);
// user.age = 20;
// console.log(user.age);
// console.log(user["location"]);
// console.log(typeof user);

// const user = {
//   name: "Diyor",
//   age: "19",
//   email: "1203jumayev@gmail.com",
//   location: "Buxoro",
//   langs: ["uzbek", "russian", "english"],
//   login: function () {
//     console.log("Siz sahifaga kirdingiz.");
//   },
//   logout: () => {
//     console.log("Siz sahifadan chiqtingiz.");
//   },
//   speak: function () {
//     console.log("I can speak:");
//     this.langs.forEach((lang) => {
//       console.log(lang);
//     });
//   },
// };

// user.speak();

// amaliyot-3

// 1-masala
// const myArray = [[false, true], [1, 2], 99, "yaxshi"];

// for (let i = 0; i < myArray.length; i++) {
//   if (typeof myArray[i] == "string") {
//     console.log("String index:", i);
//   }
// }

// myArray.forEach((element) => {
//   if (typeof element == "string") {
//     console.log("String index:", element);
//   }
// });

// 2-masala

// const data = [[1, 2, 3], "qizil", [4, 5, 6], true, false];
// const number = [];
// data.forEach((element) => {
//   const res = Array.isArray(element);
//   if (res) {
//     element.forEach((num) => {
//       number.push(num);
//     });
//   }
// });
// console.log(number);

// 3-masala

// const checkData = [null, "false", 0, 99, false, undefined, "", NaN, "0"];
// const falsey = [];
// checkData.forEach((item) => {
//   if (!item) {
//     falsey.push(item);
//   }
// });

// console.log(falsey);

// 4-masala

// const word = "samarqand";
// const splitWord = word.split("").reverse();
// let newWord = "";
// for (let i = 0; i < splitWord.length; i++) {
//   newWord += splitWord[i];
// }
// console.log(newWord);

// 5-masala
// const word = "AssALOmu AlEyKum YAxshimISIz";

// const splitWord = word.split(" ");
// let newWord = "";
// for (let i = 0; i < splitWord.length; i++) {
//   let big = splitWord[i].charAt().toUpperCase();
//   let small = splitWord[i].slice(1).toLowerCase();
//   let res = big + small;
//   newWord += res + " ";
// }

// console.log(newWord);

// const word = "AssALOmu AlEyKum YAxshimISIz";

// const splitWord = word.split(" ");
// let newWord = "";
// splitWord.forEach((element) => {
//   let big = element.charAt().toLowerCase();
//   let small = element.slice(1).toUpperCase();
//   let res = big + small;
//   newWord += res + " ";
// });

// console.log(newWord);

// 6-masala

// const numbers = [-1, 87, 4, 3.1, -5.5, Infinity, 0, 1, 2, 0.9];
// let sum = 0;
// numbers.forEach((number) => {
//   if (
//     number >= 0.0 &&
//     Math.floor(number) === number &&
//     number !== Infinity &&
//     number !== 0
//   ) {
//     sum = sum + number;
//   }
// });
// console.log(sum);

// 7-masala

// let words = prompt("So'z kiriting:");
// let splitWord = words.split("");
// console.log(words)
// let sum = 0;
// splitWord.forEach((element) => {
//   if (element === "a" || element === "A") {
//     sum++;
//   }
// });
// console.log(sum, "ta bor!");

// 8-masala

// let array = [21.1, "Roziya", "array", ["I am array"], null, true, 214];
// array.forEach((element) => {
//   newTypes = [];
//   newTypes.push(typeof element);
//   console.log(newTypes);
// });

// 9-masala

// let words = prompt("So'z kiriting:");
// let splitWord = words.split("");
// console.log(words);
// let sum = 0;
// splitWord.forEach((element) => {
//   sum++;
// });
// console.log(sum, "ta bor!");

// 10-masala

// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = [];
// numbers.forEach((number, i) => {
//   newNumbers.push(number + i);
// });
// console.log(newNumbers);

// 11-masala

// let number = Number(prompt("Son kiriting:"));
// let sum = 0;
// for (let i = number; i > 0; i--) {
//   sum = sum + i;
// }

// console.log(sum);

// 12-masala
// let number = Number(prompt("Son kiriting:"));

// for (let i = 1; i <= 10; i++) {
//   let res = number * i + 1;
//   console.log(res);
// }

// 13-masala

// let numbers = [1, -2, 3, -4, -5];

// let newNumbers = [];

// numbers.forEach((number) => {
//   newNumbers.push(number * -1);
// });

// console.log(newNumbers);

// 14-masala
// let result = [];

// const fizzBuzzFunc = function (num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 3 === 0 && i % 5 !== 0) {
//       result.push("Fizz");
//     } else if (i % 3 !== 0 && i % 5 === 0) {
//       result.push("Buzz");
//     } else if (i % 3 === 0 && i % 5 === 0) {
//       result.push("FizzBuzz");
//     } else {
//       result.push(i);
//     }
//   }
// };

// fizzBuzzFunc(25);

// console.log(result);

// 15-masala

// const diyorObj = {
//   name: "Diyorbek",
//   lastName: "Jumayev",
//   age: 19,
//   region: "Bukhara",
//   isMarried: false,
//   job: "Programmer",
//   haqida: function () {
//     return `Assalomu aleykum, Mening ismim ${this.name}, Familiyam ${
//       this.lastName
//     }, Yoshim ${this.age}daman. ${this.region}da yashayman. ${
//       this.job
//     } bo'lib ishlayman.${
//       this.isMarried ? " Uylanganman" : " Men hali uylanmaganman."
//     }  `;
//   },
// };

// console.log(diyorObj.haqida());
// includes('success') bu true yoki false qaytaradi!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// .toggle(class nomi) bu bor bulsa olib tawlayddi klasni yoq bolsa klasni qowadi!!!!!!!!!!!!!!!!
