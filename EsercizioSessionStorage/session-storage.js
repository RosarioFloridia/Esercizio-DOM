
const button = document.querySelector(".btn")

//Read the Session Storage
const savedData = JSON.parse(sessionStorage.getItem("data"))

//Render the title getting the name of the Object "user"
function renderTitle(user) {
    const title = document.getElementsByClassName("title-name")[0]
    title.innerHTML = user.firstName
}

//Render the datas of the Object "user"
function renderData(user){
    const printedForm = document.querySelector(".printedform")

    return printedForm.innerHTML = `
            </ul>
                <li>Email: ${user.email}</li>
                <li>First name: ${user.firstName}</li>
                <li>Last name: ${user.lastName}</li>
            </ul>`
}

//Get the data from the form and create a object called "user", and saves it inside the Session Storage
function getData() {
    const dataEmail = document.querySelector(".email").value;
    const dataFirstName = document.querySelector(".firstname").value;
    const dataLastName = document.querySelector(".lastname").value;

    const user = {
        email: dataEmail,
        firstName: dataFirstName,
        lastName: dataLastName
    };

    sessionStorage.setItem("data", JSON.stringify(user))

    renderTitle(user);
    renderData(user)
    console.log(user)
}

//listen the click of the button
button.addEventListener("click", () => {
    getData()
})

//check if datas are inside the Session Storage 
if (savedData){
    renderTitle(savedData)
    renderData(savedData)
}