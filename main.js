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