import "./styles.css";

import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

//check page has loaded
console.log("index has been loaded");

//access the main homepage div
let content = document.getElementById("content");

//assign variables to the page functions
let homeContent = loadHome();
let menuContent = loadMenu();
let aboutContent = loadAbout();

//function to change pages
const display = () => {
  content.appendChild(homeContent);

  //function to clear the content div
  const clearContent = () => {
    content.innerHTML = "";
  };
  //function to load the homepage
  let homeButton = document.getElementById("home-button");
  homeButton.addEventListener("click", () => {
    clearContent();
    content.appendChild(homeContent);
  });

  //function to load the menu
  let menuButton = document.getElementById("menu-button");
  menuButton.addEventListener("click", () => {
    clearContent();
    content.appendChild(menuContent);
  });

  //function to load the about page
  let aboutButton = document.getElementById("about-button");
  aboutButton.addEventListener("click", () => {
    clearContent();
    content.appendChild(aboutContent);
  });

  //call the loadhome function so that's the first page that loads
  loadHome();
};

display();
