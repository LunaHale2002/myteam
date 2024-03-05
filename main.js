import "./style.css";
import "./about.css";
import "./contact.css";

const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector("#close-btn");

burger.addEventListener("click", () => {
  menu.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("open");
});

const btn = document.querySelectorAll(".cross");
const verso = document.querySelectorAll(".verso");
const recto = document.querySelectorAll(".recto");
const rectoBtn = document.querySelectorAll(".close");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    recto[i].style.display = "block";
    verso[i].style.display = "none";
  })

  rectoBtn[i].addEventListener("click", () => {
    verso[i].style.display = "block";
    recto[i].style.display = "none";
  })
}