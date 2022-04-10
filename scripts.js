const sections = [
    {english: "Animals", russian: "Животные"}, 
    {english: "Insects", russian: "Насекомые"}, 
    {english: "Reptiles", russian: "Рептилии"}, 
    {english: "Birds", russian: "Птицы"}, 
    {english: "Fish", russian: "Рыбы"}, 
    {english: "Transport", russian: "Транспорт"}, 
    {english: "Furniture", russian: "Мебель"}, 
    {english: "Dishes", russian: "Посуда"}, 
    {english: "Fruit", russian: "Фрукты"}, 
    {english: "Vegetables", russian: "Овощи"}, 
    {english: "Berries", russian: "Ягоды"}
];
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
        {
            name: "fly",
            nameRussian: "муха",
            source: "./images/insects/fly.jpg"
        },
        {
            name: "butterfly",
            nameRussian: "бабочка",
            source: "./images/insects/butterfly.jpg"
        },
        {
            name: "ant",
            nameRussian: "муравей",
            source: "./images/insects/ant.jpg"
        },
        {
            name: "dragonfly",
            nameRussian: "стрекоза",
            source: "./images/insects/dragonfly.jpg"
        },
        {
            name: "bee",
            nameRussian: "пчела",
            source: "./images/insects/bee.jpg"
        },
        {
            name: "wasp",
            nameRussian: "оса",
            source: "./images/insects/wasp.jpg"
        },
        {
            name: "mosquito",
            nameRussian: "комар",
            source: "./images/insects/mosquito.jpg"
        },
        {
            name: "grasshoper",
            nameRussian: "кузнечик",
            source: "./images/insects/grasshoper.jpg"
        },
    ],
    reptiles: [
        {
            name: "crocodile",
            nameRussian: "крокодил",
            source: "./images/reptiles/crocodile.jpg"
        },
        {
            name: "lizzard",
            nameRussian: "ящерица",
            source: "./images/reptiles/lizzard.jpg"
        },
        {
            name: "snake",
            nameRussian: "змея",
            source: "./images/reptiles/snake.jpg"
        },
        {
            name: "turtle",
            nameRussian: "черепаха",
            source: "./images/reptiles/turtle.jpg"
        }
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
let chosenCategory = {}
let count = 0;
let stage = "";
let language = "English";


const showSections = (language) => {
    let content = ``;
    if (language == "english") {
        content = `<h2>Sections</h2>`;
    } else if (language == "russian") {
        content = `<h2>Разделы</h2>`;
    }

    for (let i = 0; i < sections.length; i++) {
        content += `<button class="sectionButton" value=${sections[i].english} name=${sections[i].russian}>${sections[i][language]}</button>`;
    }
    document.querySelector("#sections").innerHTML = content;
}


const showExercise = (event) => {
   if (event.target.className == "sectionButton") {
    stage = "question";
    chosenSection = images[event.target.value.toLowerCase()];
    chosenCategory.english = event.target.value;
    chosenCategory.russian = event.target.name;
    document.querySelector("#sections").style.display = "none";
    document.querySelector("#imageContainer").innerHTML = `<img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>`;

    if (language == "English") {
        document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
        document.querySelector("#category").textContent = `${chosenCategory.english.toUpperCase()}`;
    } else if (language == "Russian") {
        document.querySelector("#name").textContent = `${chosenSection[count].nameRussian.toUpperCase()}`; 
        document.querySelector("#category").textContent = `${chosenCategory.russian.toUpperCase()}`;
    }
    
    document.querySelector("#exercise").style.display = "block";
    document.querySelector("#imageNameInput").focus();
   }
}


const changeImage = () => {
    if (count < chosenSection.length-1) {
        count++;
        stage = "question";
        document.querySelector("#imageContainer").innerHTML = `<img class="objectImage" src=${chosenSection[count].source} alt=${chosenSection[count].name}>`;

        if (language == "English") {
            document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
        } else if (language == "Russian") {
            document.querySelector("#name").textContent = `${chosenSection[count].nameRussian.toUpperCase()}`; 
        }
    } else if (count == chosenSection.length-1)  {
        chosenSection = "";
        chosenCategory = {};
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
}


const checkExercise = () => {
    const userInput = document.querySelector("#imageNameInput").value.trim().toLowerCase().replace(/\s{2,}/g, " ");
    let answer = null;
    if (language == "English") {
        answer = chosenSection[count].name;
    } else if (language == "Russian") {
        answer = chosenSection[count].nameRussian;
    }
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
}


const changeExerciseWithKey = (event) => {
    if (event.key == "Enter" && stage == "question") {
        checkExercise();
    } else if (event.key == "Enter" && stage == "questionAccepted") {
        changeImage();
    }
}


const changeLanguage = () => {
    if (language == "English") {
        language = "Russian";
        document.querySelector("#language").textContent = "ENG";
        showSections("russian");
        
        if (stage == "question" || stage == "questionAccepted") {
            document.querySelector("#category").textContent = `${chosenCategory.russian.toUpperCase()}`;
            document.querySelector("#name").textContent = `${chosenSection[count].nameRussian.toUpperCase()}`; 
        }
    } else if (language == "Russian") {
        language = "English";
        document.querySelector("#language").textContent = "RUS";
        showSections("english");

        if (stage == "question" || stage == "questionAccepted") {
            document.querySelector("#category").textContent = `${chosenCategory.english.toUpperCase()}`;
            document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`; 
        }
    }
}


window.addEventListener("load", ()=> showSections("english"));
window.addEventListener("keypress", changeExerciseWithKey);
document.querySelector("#sections").addEventListener("click", showExercise);
document.querySelector("#checkButton").addEventListener("click", checkExercise);
document.querySelector("#nextButton").addEventListener("click", changeImage);
document.querySelector("#language").addEventListener("click", changeLanguage);

