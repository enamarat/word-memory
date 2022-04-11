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
    {english: "Berries", russian: "Ягоды"},
    {english: "Clothes", russian: "Одежда"},
    {english: "Shoes", russian: "Обувь"},
    {english: "Appliances", russian: "Техника"},
    {english: "Colors", russian: "Цвета"},
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
        },
        {
            name: "rat",
            nameRussian: "крыса",
            source: "./images/animals/rat.jpg"
        },
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
        {
            name: "ladybug",
            nameRussian: "божья коровка",
            source: "./images/insects/ladybug.jpg"
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
        {
            name: "chicken",
            nameRussian: "курица",
            source: "./images/birds/chicken.jpg"
        },
        {
            name: "rooster",
            nameRussian: "петух",
            source: "./images/birds/rooster.jpg"
        },
        {
            name: "sparrow",
            nameRussian: "воробей",
            source: "./images/birds/sparrow.jpg"
        },
        {
            name: "hoodedCrow",
            nameRussian: "ворона",
            source: "./images/birds/hoodedCrow.jpg"
        },
        {
            name: "pigeon",
            nameRussian: "голубь",
            source: "./images/birds/pigeon.jpg"
        },
        {
            name: "duck",
            nameRussian: "утка",
            source: "./images/birds/duck.jpg"
        },
        {
            name: "swallow",
            nameRussian: "ласточка",
            source: "./images/birds/swallow.jpg"
        },
        {
            name: "gull",
            nameRussian: "чайка",
            source: "./images/birds/gull.jpg"
        },
        {
            name: "pelican",
            nameRussian: "пеликан",
            source: "./images/birds/pelican.jpg"
        },
        {
            name: "penguin",
            nameRussian: "пингвин",
            source: "./images/birds/penguin.jpg"
        },
        {
            name: "wagtail",
            nameRussian: "трясогузка",
            source: "./images/birds/wagtail.jpg"
        },
        {
            name: "peacock",
            nameRussian: "павлин",
            source: "./images/birds/peacock.jpg"
        },
        {
            name: "parrot",
            nameRussian: "попугай",
            source: "./images/birds/parrot.jpg"
        },
        {
            name: "eagle",
            nameRussian: "орёл",
            source: "./images/birds/eagle.jpg"
        },
        {
            name: "turkey",
            nameRussian: "индюк",
            source: "./images/birds/turkey.jpg"
        },
        {
            name: "goose",
            nameRussian: "гусь",
            source: "./images/birds/goose.jpg"
        },
        {
            name: "swan",
            nameRussian: "лебедь",
            source: "./images/birds/swan.jpg"
        },
        {
            name: "flamingo",
            nameRussian: "фламинго",
            source: "./images/birds/flamingo.jpg"
        },
        {
            name: "woodpecker",
            nameRussian: "дятел",
            source: "./images/birds/woodpecker.jpg"
        }
    ],
    fish: [
        {
            name: "shark",
            nameRussian: "акула",
            source: "./images/fish/shark.jpg"
        },
        {
            name: "whale",
            nameRussian: "кит",
            source: "./images/fish/whale.jpg"
        },
        {
            name: "dolphin",
            nameRussian: "дельфин",
            source: "./images/fish/dolphin.jpg"
        },
        {
            name: "carp",
            nameRussian: "карп",
            source: "./images/fish/carp.jpg"
        },
        {
            name: "pike",
            nameRussian: "щука",
            source: "./images/fish/pike.jpg"
        },
        {
            name: "catfish",
            nameRussian: "сом",
            source: "./images/fish/catfish.jpg"
        },
        {
            name: "herring",
            nameRussian: "сельдь",
            source: "./images/fish/herring.jpg"
        },
    ],
    transport: [
        {
            name: "boat",
            nameRussian: "лодка",
            source: "./images/transport/boat.jpg"
        },
        {
            name: "rocket",
            nameRussian: "ракета",
            source: "./images/transport/rocket.jpg"
        },
        {
            name: "submarine",
            nameRussian: "подводная лодка",
            source: "./images/transport/submarine.jpg"
        },
        {
            name: "motorcycle",
            nameRussian: "мотоцикл",
            source: "./images/transport/motorcycle.jpg"
        },
        {
            name: "ship",
            nameRussian: "корабль",
            source: "./images/transport/ship.jpg"
        },
        {
            name: "bus",
            nameRussian: "автобус",
            source: "./images/transport/bus.jpg"
        },
        {
            name: "truck",
            nameRussian: "грузовик",
            source: "./images/transport/truck.jpg"
        },
        {
            name: "car",
            nameRussian: "машина",
            source: "./images/transport/car.jpg"
        },
        {
            name: "train",
            nameRussian: "поезд",
            source: "./images/transport/train.jpg"
        },
        {
            name: "scooter",
            nameRussian: "самокат",
            source: "./images/transport/scooter.jpg"
        },
        {
            name: "plane",
            nameRussian: "самолёт",
            source: "./images/transport/plane.jpg"
        },
        {
            name: "bicycle",
            nameRussian: "велосипед",
            source: "./images/transport/bicycle.jpg"
        },
        {
            name: "helicopter",
            nameRussian: "вертолёт",
            source: "./images/transport/helicopter.jpg"
        },
    ],
    furniture: [
        {
            name: "bed",
            nameRussian: "кровать",
            source: "./images/furniture/bed.jpg"
        },
        {
            name: "sofa",
            nameRussian: "диван",
            source: "./images/furniture/sofa.jpg"
        },
        {
            name: "cupboard",
            nameRussian: "шкаф",
            source: "./images/furniture/cupboard.jpg"
        },
        {
            name: "armchair",
            nameRussian: "кресло",
            source: "./images/furniture/armchair.jpg"
        },
        {
            name: "commode",
            nameRussian: "комод",
            source: "./images/furniture/commode.jpg"
        },
        {
            name: "table",
            nameRussian: "стол",
            source: "./images/furniture/table.jpg"
        },
        {
            name: "chair",
            nameRussian: "стул",
            source: "./images/furniture/chair.jpg"
        },
    ],
    dishes: [
        {
            name: "pot",
            nameRussian: "кастрюля",
            source: "./images/dishes/pot.jpg"
        },
        {
            name: "pan",
            nameRussian: "сковорода",
            source: "./images/dishes/pan.jpg"
        },
        {
            name: "cup",
            nameRussian: "чашка",
            source: "./images/dishes/cup.jpg"
        },
        {
            name: "mug",
            nameRussian: "кружка",
            source: "./images/dishes/mug.jpg"
        },
        {
            name: "jug",
            nameRussian: "кувшин",
            source: "./images/dishes/jug.jpg"
        },
        {
            name: "bottle",
            nameRussian: "бутылка",
            source: "./images/dishes/bottle.jpg"
        },
        {
            name: "glass",
            nameRussian: "стакан",
            source: "./images/dishes/glass.jpg"
        },
        {
            name: "plate",
            nameRussian: "тарелка",
            source: "./images/dishes/plate.jpg"
        },
        {
            name: "bowl",
            nameRussian: "миска",
            source: "./images/dishes/bowl.jpg"
        },
        {
            name: "kettle",
            nameRussian: "чайник",
            source: "./images/dishes/kettle.jpg"
        },
        {
            name: "fork",
            nameRussian: "вилка",
            source: "./images/dishes/fork.jpg"
        },
        {
            name: "knife",
            nameRussian: "нож",
            source: "./images/dishes/knife.jpg"
        },
        {
            name: "spoon",
            nameRussian: "ложка",
            source: "./images/dishes/spoon.jpg"
        },
        {
            name: "container",
            nameRussian: "контейнер",
            source: "./images/dishes/container.jpg"
        },
    ],
    fruit: [
        {
            name: "pineapple",
            nameRussian: "ананас",
            source: "./images/fruit/pineapple.jpg"
        },
        {
            name: "grapefruit",
            nameRussian: "грейпфрут",
            source: "./images/fruit/grapefruit.jpg"
        },
        {
            name: "pear",
            nameRussian: "груша",
            source: "./images/fruit/pear.jpg"
        },
        {
            name: "peach",
            nameRussian: "персик",
            source: "./images/fruit/peach.jpg"
        },
        {
            name: "apricot",
            nameRussian: "абрикос",
            source: "./images/fruit/apricot.jpg"
        },
        {
            name: "plum",
            nameRussian: "слива",
            source: "./images/fruit/plum.jpg"
        },
        {
            name: "cherry",
            nameRussian: "вишня",
            source: "./images/fruit/cherry.jpg"
        },
        {
            name: "melon",
            nameRussian: "дыня",
            source: "./images/fruit/melon.jpg"
        },
        {
            name: "watermelon",
            nameRussian: "арбуз",
            source: "./images/fruit/watermelon.jpg"
        },
        {
            name: "banana",
            nameRussian: "банан",
            source: "./images/fruit/banana.jpg"
        },
        {
            name: "pomegranate",
            nameRussian: "гранат",
            source: "./images/fruit/pomegranate.jpg"
        },
        {
            name: "apple",
            nameRussian: "яблоко",
            source: "./images/fruit/apple.jpg"
        },
        {
            name: "lemon",
            nameRussian: "лимон",
            source: "./images/fruit/lemon.jpg"
        },
        {
            name: "orange",
            nameRussian: "апельсин",
            source: "./images/fruit/orange.jpg"
        },
        {
            name: "mandarine",
            nameRussian: "мандарин",
            source: "./images/fruit/mandarine.jpg"
        },
        {
            name: "kiwi",
            nameRussian: "киви",
            source: "./images/fruit/kiwi.jpg"
        },
        {
            name: "grape",
            nameRussian: "виноград",
            source: "./images/fruit/grape.jpg"
        },
        {
            name: "strawberry",
            nameRussian: "клубника",
            source: "./images/fruit/strawberry.jpg"
        }
    ],
    vegetables: [
        {
            name: "pepper",
            nameRussian: "перец",
            source: "./images/vegetables/pepper.jpg"
        },
        {
            name: "pumpkin",
            nameRussian: "тыква",
            source: "./images/vegetables/pumpkin.jpg"
        },
        {
            name: "carrot",
            nameRussian: "морковь",
            source: "./images/vegetables/carrot.jpg"
        },
        {
            name: "potato",
            nameRussian: "картофель",
            source: "./images/vegetables/potato.jpg"
        },
        {
            name: "cucumber",
            nameRussian: "огурец",
            source: "./images/vegetables/cucumber.jpg"
        },
        {
            name: "tomato",
            nameRussian: "помидор",
            source: "./images/vegetables/tomato.jpg"
        },
        {
            name: "cabbage",
            nameRussian: "капуста",
            source: "./images/vegetables/cabbage.jpg"
        },
        {
            name: "onion",
            nameRussian: "лук",
            source: "./images/vegetables/onion.jpg"
        },
        {
            name: "radish",
            nameRussian: "редиска",
            source: "./images/vegetables/radish.jpg"
        },
        {
            name: "beet",
            nameRussian: "свекла",
            source: "./images/vegetables/beet.jpg"
        },
    ],
    berries: [
        {
            name: "redcurrant",
            nameRussian: "красная смородина",
            source: "./images/berries/redcurrant.jpg"
        },
        {
            name: "blackcurrant",
            nameRussian: "чёрная смородина",
            source: "./images/berries/blackcurrant.jpg"
        },
        {
            name: "blackberry",
            nameRussian: "ежевика",
            source: "./images/berries/blackberry.jpg"
        },
        {
            name: "blueberry",
            nameRussian: "черника",
            source: "./images/berries/blueberry.jpg"
        },
        {
            name: "raspberry",
            nameRussian: "малина",
            source: "./images/berries/raspberry.jpg"
        },
        {
            name: "gooseberry",
            nameRussian: "крыжовник",
            source: "./images/berries/gooseberry.jpg"
        },
    ],
    clothes: [
        {
            name: "cap",
            nameRussian: "кепка",
            source: "./images/clothes/cap.jpg"
        },
        {
            name: "pants",
            nameRussian: "штаны",
            source: "./images/clothes/pants.jpg"
        },
        {
            name: "hat",
            nameRussian: "шапка",
            source: "./images/clothes/hat.jpg"
        },
        {
            name: "robe",
            nameRussian: "халат",
            source: "./images/clothes/robe.jpg"
        },
        {
            name: "sweater",
            nameRussian: "свитер",
            source: "./images/clothes/sweater.jpg"
        },
        {
            name: "sweatshirt",
            nameRussian: "кофта",
            source: "./images/clothes/sweatshirt.jpg"
        },
        {
            name: "scarf",
            nameRussian: "шарф",
            source: "./images/clothes/scarf.jpg"
        },
        {
            name: "underwear",
            nameRussian: "трусы",
            source: "./images/clothes/underwear.jpg"
        },
        {
            name: "shirt",
            nameRussian: "рубашка",
            source: "./images/clothes/shirt.jpg"
        },
        {
            name: "dress",
            nameRussian: "платье",
            source: "./images/clothes/dress.jpg"
        },
        {
            name: "gloves",
            nameRussian: "перчатки",
            source: "./images/clothes/gloves.jpg"
        },
        {
            name: "socks",
            nameRussian: "носки",
            source: "./images/clothes/socks.jpg"
        },
        {
            name: "t-shirt",
            nameRussian: "майка",
            source: "./images/clothes/tshirt.jpg"
        },
        {
            name: "jacket",
            nameRussian: "куртка",
            source: "./images/clothes/jacket.jpg"
        },
        {
            name: "shorts",
            nameRussian: "шорты",
            source: "./images/clothes/shorts.jpg"
        }
    ],
    shoes: [
        {
            name: "boots",
            nameRussian: "сапоги",
            source: "./images/shoes/boots.jpg"
        },
        {
            name: "sneakers",
            nameRussian: "кроссовки",
            source: "./images/shoes/sneakers.jpg"
        },
        {
            name: "blucher",
            nameRussian: "туфли",
            source: "./images/shoes/blucher.jpg"
        },
        {
            name: "slippers",
            nameRussian: "тапочки",
            source: "./images/shoes/slippers.jpg"
        },
        {
            name: "sandals",
            nameRussian: "сандалии",
            source: "./images/shoes/sandals.jpg"
        },
        {
            name: "winterBoots",
            nameRussian: "ботинки",
            source: "./images/shoes/winterBoots.jpg"
        }
    ],
    appliances: [
        {
            name: "lamp",
            nameRussian: "лампа",
            source: "./images/appliances/lamp.jpg"
        },
        {
            name: "phone",
            nameRussian: "телефон",
            source: "./images/appliances/phone.jpg"
        },
        {
            name: "vacuum cleaner",
            nameRussian: "пылесос",
            source: "./images/appliances/vacuumCleaner.jpg"
        },
        {
            name: "television",
            nameRussian: "телевизор",
            source: "./images/appliances/television.jpg"
        },
        {
            name: "fridge",
            nameRussian: "холодильник",
            source: "./images/appliances/fridge.jpg"
        },
        {
            name: "stove",
            nameRussian: "плита",
            source: "./images/appliances/stove.jpg"
        },
        {
            name: "laptop",
            nameRussian: "компьютер",
            source: "./images/appliances/laptop.jpg"
        },
        {
            name: "washing machine",
            nameRussian: "стиральная машина",
            source: "./images/appliances/washingmachine.jpg"
        },
        {
            name: "kettle",
            nameRussian: "электрический чайник",
            source: "./images/appliances/kettle.jpg"
        },
        {
            name: "iron",
            nameRussian: "утюг",
            source: "./images/appliances/iron.jpg"
        },
        {
            name: "fan",
            nameRussian: "вентилятор",
            source: "./images/appliances/fan.jpg"
        },
        {
            name: "remoteController",
            nameRussian: "пульт",
            source: "./images/appliances/remoteController.jpg"
        },
        {
            name: "battery",
            nameRussian: "батарейка",
            source: "./images/appliances/battery.jpg"
        },
        {
            name: "microwave oven",
            nameRussian: "микроволновая печь",
            source: "./images/appliances/microwaveOven.jpg"
        },
        {
            name: "scales",
            nameRussian: "весы",
            source: "./images/appliances/scales.jpg"
        },
        {
            name: "electronic scales",
            nameRussian: "электронные весы",
            source: "./images/appliances/scales2.jpg"
        },
        {
            name: "mixer",
            nameRussian: "смеситель",
            source: "./images/appliances/mixer.jpg"
        },
        {
            name: "hair dryer",
            nameRussian: "фен",
            source: "./images/appliances/hairdryer.jpg"
        },
        {
            name: "electric razor",
            nameRussian: "электрическая бритва",
            source: "./images/appliances/electricrazor.jpg"
        },
        {
            name: "grill",
            nameRussian: "гриль",
            source: "./images/appliances/grill.jpg"
        },
    ],
    colors: [
        {
            name: "green",
            nameRussian: "зелёный",
            source: "./images/colors/green.jpg"
        },
        {
            name: "blue",
            nameRussian: "синий",
            source: "./images/colors/blue.jpg"
        },
        {
            name: "red",
            nameRussian: "красный",
            source: "./images/colors/red.jpg"
        },
        {
            name: "yellow",
            nameRussian: "жёлтый",
            source: "./images/colors/yellow.jpg"
        },
        {
            name: "orange",
            nameRussian: "оранжевый",
            source: "./images/colors/orange.jpg"
        },
        {
            name: "black",
            nameRussian: "чёрный",
            source: "./images/colors/black.jpg"
        },
        {
            name: "brown",
            nameRussian: "коричневый",
            source: "./images/colors/brown.jpg"
        },
        {
            name: "pink",
            nameRussian: "розовый",
            source: "./images/colors/pink.jpg"
        },
        {
            name: "violet",
            nameRussian: "фиолетовый",
            source: "./images/colors/violet.jpg"
        },
        {
            name: "gray",
            nameRussian: "серый",
            source: "./images/colors/gray.jpg"
        },
        {
            name: "white",
            nameRussian: "белый",
            source: "./images/colors/white.jpg"
        },
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
        closeExercise();
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
    
    if (answer == userInput) {
        document.querySelector("#status").textContent = "CORRECT";
        document.querySelector("#status").className = "correct_answer";
        document.querySelector("#name").style.visibility = "visible";
        // next exercise
        document.querySelector("#checkButton").style.display = "none";
        document.querySelector("#nextButton").style.display = "block";
        stage = "questionAccepted";
        changeImage();
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


const closeExercise = () => {
    document.querySelector("#exercise").style.display = "none";
    document.querySelector("#sections").style.display = "flex";
    document.querySelector("#category").textContent = "";
    chosenSection = "";
    chosenCategory = {}
    count = 0;
    stage = "";
}


window.addEventListener("load", ()=> showSections("english"));
window.addEventListener("keypress", changeExerciseWithKey);
document.querySelector("#sections").addEventListener("click", showExercise);
document.querySelector("#checkButton").addEventListener("click", checkExercise);
document.querySelector("#nextButton").addEventListener("click", changeImage);
document.querySelector("#language").addEventListener("click", changeLanguage);
document.querySelector("#closeExerciseButton").addEventListener("click", closeExercise);
