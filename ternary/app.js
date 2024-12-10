const age = prompt("Yoshingizni kiriting:", 18);

// age < 18
//   ? alert("Siz hali voyaga yetmagansiz!!!")
//   : alert("Siz voyaga yetgansiz!!!");

// if (age < 18) {
//   alert("Siz hali voyaga yetmagansiz!!!");
// } else {
//   alert("Siz voyaga yetgansiz!!!");
// }

age < 18
  ? alert("Siz armiya yoshiga emassiz!!!")
  : age < 28
  ? alert("Siz armiya yoshidasiz!!!")
  : alert("Siz armiya yoshidan kattasiz!!!");
