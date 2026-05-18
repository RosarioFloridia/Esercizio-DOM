
const lista = document.querySelector(".list-items");


function addProduct() {
    const valore = document.getElementById("testoToDo").value;
    const li = document.createElement("li");

    li.innerText = valore;
    lista.appendChild(li);
    document.getElementById("testoToDo").value = "";
}