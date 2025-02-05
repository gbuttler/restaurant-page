import "./styles.css";

import { loadHome } from "./home.js";

console.log("hello");

let content = document.getElementById("content");

let homeContent = loadHome();

content.appendChild(homeContent);

//function to change pages
