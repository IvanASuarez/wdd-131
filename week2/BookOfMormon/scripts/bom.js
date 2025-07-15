const input =  document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");


button.addEventListener("click",  function () {
    if (input.value.trim() === "") {
        alert("Please enter a chapter.");
        input.focus();
        return;
    }


    const chapters = document.createElement("li");
    const deleteButton = document.createElement("button");


    chapters.textContent = input.value;
    deleteButton.textContent = "❌";

    deleteButton.addEventListener("click", function () {
    list.removeChild(chapters);
    input.focus();
    });


    chapters.append(deleteButton);
    list.append(chapters);

    input.value = "";
    input.focus();
});