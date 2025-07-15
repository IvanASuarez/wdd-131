const input =  document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("________________");

const chapters = document.createElement("li");
const deleteButton = document.createElement("button");
chapters.textContent = input.value;
deleteButton.textContent = "X";
chapters.append(deleteButton);
list.append(chapters);

let el = document.getElementById("close-button");
console.log(el.getAttribute("aria-label")); // "Close"
el.setAttribute("aria-label", "Close dialog");
console.log(el.getAttribute("aria-label")); // "Close dialog"