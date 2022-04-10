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
        },
        {
            name: "racoon",
            nameRussian: "енот",
            source: "./images/animals/racoon.jpg"
        },
        {
            name: "pig",
            nameRussian: "свинья",
            source: "./images/animals/pig.jpg"
        },
        {
            name: "panda",
            nameRussian: "панда",
            source: "./images/animals/panda.jpg"
        },
        {
            name: "bull",
            nameRussian: "бык",
            source: "./images/animals/bull.jpg"
        },
        {
            name: "rhino",
            nameRussian: "носорог",
            source: "./images/animals/rhino.jpg"
        },
        {
            name: "zebra",
            nameRussian: "зебра",
            source: "./images/animals/zebra.jpg"
        },
        {
            name: "camel",
            nameRussian: "верблюд",
            source: "./images/animals/camel.jpg"
        },
        {
            name: "horse",
            nameRussian: "лошадь",
            source: "./images/animals/horse.jpg"
        },
        {
            name: "ape",
            nameRussian: "обезьяна",
            source: "./images/animals/ape.jpg"
        },
        {
            name: "cat",
            nameRussian: "кот",
            source: "./images/animals/cat.jpg"
        },
        {
            name: "kangaroo",
            nameRussian: "кенгуру",
            source: "./images/animals/kangaroo.jpg"
        },
        {
            name: "dog",
            nameRussian: "собака",
            source: "./images/animals/dog.jpg"
        },
        {
            name: "cow",
            nameRussian: "корова",
            source: "./images/animals/cow.jpg"
        },
        {
            name: "hare",
            nameRussian: "заяц",
            source: "./images/animals/hare.jpg"
        },
        {
            name: "mouse",
            nameRussian: "мышь",
            source: "./images/animals/mouse.jpg"
        },
        {
            name: "tiger",
            nameRussian: "тигр",
            source: "./images/animals/tiger.jpg"
        },
        {
            name: "lion",
            nameRussian: "лев",
            source: "./images/animals/lion.jpg"
        },
        {
            name: "elephant",
            nameRussian: "слон",
            source: "./images/animals/elephant.jpg"
        },
        {
            name: "goat",
            nameRussian: "коза",
            source: "./images/animals/goat.jpg"
        },
        {
            name: "boar",
            nameRussian: "кабан",
            source: "./images/animals/boar.jpg"
        },
        {
            name: "hedgehog",
            nameRussian: "ёж",
            source: "./images/animals/hedgehog.jpg"
        },
        {
            name: "deer",
            nameRussian: "олень",
            source: "./images/animals/deer.jpg"
        },
        {
            name: "squirrel",
            nameRussian: "белка",
            source: "./images/animals/squirrel.jpg"
        },
        {
            name: "giraffe",
            nameRussian: "жираф",
            source: "./images/animals/giraffe.jpg"
        },
        {
            name: "bear",
            nameRussian: "медведь",
            source: "./images/animals/bear.jpg"
        },
        {
            name: "white bear",
            nameRussian: "белый медведь",
            source: "./images/animals/whiteBear.jpg"
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
let stage = "";


const showSections = () => {
    let content = ``;
    for (let i = 0; i < sections.length; i++) {
        content += `<button class="sectionButton">${sections[i]}</button>`;
    }
    document.querySelector("#sections").innerHTML += content;
}


const showExercise = (event) => {
   if (event.target.className == "sectionButton") {
    stage = "question";
    chosenSection = images[event.target.textContent.toLowerCase()];
    chosenCategory = event.target.textContent;
    document.querySelector("#sections").style.display = "none";

    document.querySelector("#category").textContent = `${chosenCategory.toUpperCase()}`;
    document.querySelector("#imageContainer").innerHTML = `
        <img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>
    `;
    document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
    document.querySelector("#exercise").style.display = "block";
    document.querySelector("#imageNameInput").focus();
   }
}


const changeImage = () => {
    if (count < chosenSection.length-1) {
        count++;
        document.querySelector("#imageContainer").innerHTML = `
        <img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>`;
        document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
        stage = "question";
    } else if (count == chosenSection.length-1)  {
        chosenSection = "";
        chosenCategory = "";
        count = 0;
        document.querySelector("#exercise").style.display = "none";
        document.querySelector("#sections").style.display = "flex";
        document.querySelector("#category").textContent = "";
        stage = "";
    }
    // reset
    document.querySelector("#imageNameInput").value = "";
    document.querySelector("#status").textContent = "";
    document.querySelector("#status").className = "";
    document.querySelector("#name").style.visibility = "hidden";
    document.querySelector("#checkButton").style.display = "block";
    document.querySelector("#nextButton").style.display = "none";
    //document.querySelector("#imageNameInput").focus();
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
        stage = "questionAccepted";
    } else {
        document.querySelector("#status").textContent = "WRONG";
        document.querySelector("#status").className = "wrong_answer";
        document.querySelector("#imageNameInput").value = "";
    }
   // document.querySelector("#imageNameInput").blur();
}


const changeExerciseWithKey = (event) => {
    if (event.key == "Enter" && stage == "question") {
        checkExercise();
    } else if (event.key == "Enter" && stage == "questionAccepted") {
        changeImage();
    }
}


window.addEventListener("load", showSections);
document.querySelector("#sections").addEventListener("click", showExercise);
document.querySelector("#checkButton").addEventListener("click", checkExercise);
document.querySelector("#nextButton").addEventListener("click", changeImage);
window.addEventListener("keypress", changeExerciseWithKey);
