const sections = ["Animals", "Insects", "Birds", "Fish", "Transport", "Furniture", "Dishes", "Fruit", "Vegetables", "Berries"];
const images = {
    animals: [
        {
         name: "wolf",
         nameRussian: "волк",
         source: "./images/animals/wolf.jpg"
        },
        {
         name: "fox",
         nameRussian: "лиса",
         source: "./images/animals/fox.jpg"
        }
    ],
    insects: [

    ],
    birds: [

    ],
    fish: [

    ],
    transport: [

    ],
    furniture: [

    ],
    dishes: [

    ],
    fruit: [

    ],
    vegetables: [

    ],
    berries: [

    ]
};
let chosenSection = "";
let chosenCategory = "";
let count = 0;


const showSections = () => {
    let content = ``;
    for (let i = 0; i < sections.length; i++) {
        content += `<button class="sectionButton">${sections[i]}</button>`;
    }
    document.querySelector("#sections").innerHTML += content;
}


const showExercise = (event) => {
   if (event.target.className == "sectionButton") {
    chosenSection = images[event.target.textContent.toLowerCase()];
    chosenCategory = event.target.textContent;
    document.querySelector("#sections").style.display = "none";

    document.querySelector("#category").textContent += `${chosenCategory.toUpperCase()}`;
    document.querySelector("#imageContainer").innerHTML = `
        <img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>
    `;
    document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
    document.querySelector("#exercise").style.display = "block";
   }
}


const changeImage = () => {
    if (count < chosenSection.length-1) {
        count++;
        document.querySelector("#imageContainer").innerHTML = `
        <img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>`;
        document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
    } else if (count == chosenSection.length-1)  {
        chosenSection = "";
        chosenCategory = "";
        count = 0;
        document.querySelector("#exercise").style.display = "none";
        document.querySelector("#sections").style.display = "flex";
    }
    // reset
    document.querySelector("#imageNameInput").value = "";
    document.querySelector("#status").textContent = "";
    document.querySelector("#status").className = "";
    document.querySelector("#checkButton").style.display = "block";
    document.querySelector("#nextButton").style.display = "none";
}


const checkExercise = () => {
    const userInput = document.querySelector("#imageNameInput").value.trim().toLowerCase().replace(/\s{2,}/g, " ");
    let answer = chosenSection[count].name;
    document.querySelector("#name").style.visibility = "visible";
    
    if (answer == userInput) {
        document.querySelector("#status").textContent = "CORRECT";
        document.querySelector("#status").className = "correct_answer";
        // next exercise
        document.querySelector("#checkButton").style.display = "none";
        document.querySelector("#nextButton").style.display = "block";
    } else {
        document.querySelector("#status").textContent = "WRONG";
        document.querySelector("#status").className = "wrong_answer";
    }
}


window.addEventListener("load", showSections);
document.querySelector("#sections").addEventListener("click", showExercise);
document.querySelector("#checkButton").addEventListener("click", checkExercise);
document.querySelector("#nextButton").addEventListener("click", changeImage);
