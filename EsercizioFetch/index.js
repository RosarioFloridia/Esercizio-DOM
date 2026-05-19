// https://ringsdb.com/api/public/cards/

// fetch ("https://ringsdb.com/api/public/card/01001").then (response => 
//     { return response.json(); 
// }).then (data => {
//     console.log(data)
// })

const cardName = document.querySelector(".card-name-character")
const cardImage = document.querySelector(".card-image")


async function fetchData(params) {
    try {
        const response = await fetch("https://ringsdb.com/api/public/card/01001");
        const responseJSON = await response.json(); 
        const nameCharacter = responseJSON.name;
        const imageCharacter = `https://ringsdb.com${responseJSON.imagesrc}`;

        cardName.innerText = nameCharacter
        cardImage.setAttribute("src", imageCharacter)

        console.log(responseJSON)
        console.table(nameCharacter, imageCharacter)
    } catch (error) {
       console.log(error); 
    }
};

fetchData()