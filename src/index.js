import "./style.css";

import { renderHome } from "./home.js";
import { renderMenu } from "./menu.js";
import { renderAbout } from "./about.js";

const header = document.querySelector("header");
const nav = document.querySelector("nav");
const content = document.querySelector("#content");

const name = document.createElement("p");
name.textContent = "The Golden Spoon";
header.insertBefore(name, nav);

const rightNav = document.createElement("div");
header.appendChild(rightNav);

const homeBtn = document.createElement("button");
homeBtn.textContent = "Home";
const menuBtn = document.createElement("button");
menuBtn.textContent = "Menu";
const aboutBtn = document.createElement("button");
aboutBtn.textContent = "About";
nav.append(homeBtn, menuBtn, aboutBtn);

function editContent(className) {
  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.className = className;
}

homeBtn.addEventListener("click", () => {
  menuBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  homeBtn.classList.add("active");

  editContent("home-content");
  renderHome();
});

menuBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active");
  aboutBtn.classList.remove("active");
  menuBtn.classList.add("active");

  editContent("menu-content");
  renderMenu();
});

aboutBtn.addEventListener("click", () => {
  homeBtn.classList.remove("active");
  menuBtn.classList.remove("active");
  aboutBtn.classList.add("active");

  editContent("about-content");
  renderAbout();
});

homeBtn.click();
