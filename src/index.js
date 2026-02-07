import { renderHome } from "./home.js";

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

renderHome();
