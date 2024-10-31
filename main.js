import './style.css'
const allDivs = document.querySelectorAll("div");

allDivs[0].className = "container";
allDivs[1].className = "search";
allDivs[2].className = "li-container";
allDivs[3].className = "empty";
allDivs[4].className = "task-count";

const addButton = document.querySelector("button");
addButton.className = "btn-add";