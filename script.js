const moreBtn = document.getElementById("more");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const hidenHeader = document.querySelector("header .hidenHeader");
const mainPic = document.querySelector(".main");

function hiden() {
  plus.classList.toggle("hider");
  minus.classList.toggle("hider");
  hidenHeader.classList.toggle("hider");
  mainPic.classList.toggle("margin");
}

moreBtn.addEventListener("click", hiden);
