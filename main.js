import './style.css'
const allDivs = document.querySelectorAll("div");

allDivs[0].className = "container";
allDivs[1].className = "search";
allDivs[2].className = "li-container";
const divNoPendingTasks = allDivs[3]
divNoPendingTasks.className = "empty";
allDivs[4].className = "task-count";

const ulTasks = document.querySelector("ul");

const addButton = document.querySelector("button");
addButton.className = "btn-add";

const txtField = document.querySelector("input");

addButton.addEventListener("click", (e) => {
    e.preventDefault();
    anadirTarea(txtField.value);
    if (divNoPendingTasks.style.display = "block"){
        divNoPendingTasks.style.display = "none";
    }
})

function anadirTarea(txtTask){
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    const newSpan = document.createElement("span");
    newSpan.textContent = txtTask;
    const closeButton = document.createElement("button");
    closeButton.className = "btn-delete";
    closeButton.textContent = "X";

    newP.append(newSpan);
    newLi.append(newP, closeButton);
    ulTasks.append(newLi);
}