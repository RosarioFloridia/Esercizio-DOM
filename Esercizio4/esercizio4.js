

// Funzione che riceve i dati da un form e li converte in una stringa JSON
function getForm() {
    const dataName = document.getElementById("firstName").value;
    const dataSurname = document.getElementById("lastName").value;
    const dataAge = document.getElementById("age").value;
    const form = document.querySelector("form");

    const person = {
        nome: `${dataName}`,
        cognome: `${dataSurname}`,
        età: `${dataAge}`,
    }

    form.setAttribute("data-person", JSON.stringify(person))
}

getForm()

