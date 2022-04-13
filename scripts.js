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
    {english: "Bathroom", russian: "Ванная"},
    {english: "School", russian: "Школа"},
    {english: "Nature", russian: "Природа"},
    {english: "Containers", russian: "Контейнеры"},
    {english: "Tools", russian: "Инструменты"},
    {english: "House", russian: "Дом"},
    {english: "Body", russian: "Тело"},
    {english: "Yard", russian: "Двор"},
    {english: "Music", russian: "Музыка"},
    {english: "People", russian: "Люди"},
];
let completedSections = {};
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
        {
            name: "porcupine",
            nameRussian: "дикобраз",
            source: "./images/animals/porcupine.jpg"
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
            name: "wagtail",
            nameRussian: "трясогузка",
            source: "./images/birds/wagtail.jpg"
        },
        {
            name: "hoodedCrow",
            nameRussian: "ворона",
            source: "./images/birds/hoodedCrow.jpg"
        },
        {
            name: "magpie",
            nameRussian: "сорока",
            source: "./images/birds/magpie.jpg"
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
        },
        {
            name: "crane",
            nameRussian: "журавль",
            source: "./images/birds/crane.jpg"
        },
        {
            name: "ostrich",
            nameRussian: "страус",
            source: "./images/birds/ostrich.jpg"
        },
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
        {
            name: "vase",
            nameRussian: "ваза",
            source: "./images/dishes/vase.jpg"
        }
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
            name: "skirt",
            nameRussian: "юбка",
            source: "./images/clothes/skirt.jpg"
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
            name: "mower",
            nameRussian: "косилка",
            source: "./images/appliances/mower.jpg"
        },
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
        }
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
    ],
    bathroom: [
        {
            name: "towel",
            nameRussian: "полотенце",
            source: "./images/bathroom/towel.jpg"
        },
        {
            name: "sink",
            nameRussian: "раковина",
            source: "./images/bathroom/sink.jpg"
        },
        {
            name: "toilet",
            nameRussian: "туалет",
            source: "./images/bathroom/toilet.jpg"
        },
        {
            name: "toilet paper",
            nameRussian: "туалетная бумага",
            source: "./images/bathroom/toiletpaper.jpg"
        },
        {
            name: "soap",
            nameRussian: "мыло",
            source: "./images/bathroom/soap.jpg"
        },
        {
            name: "toothbrush",
            nameRussian: "зубная щётка",
            source: "./images/bathroom/toothbrush.jpg"
        },
        {
            name: "toothpaste",
            nameRussian: "зубная паста",
            source: "./images/bathroom/toothpaste.jpg"
        },
        {
            name: "razor",
            nameRussian: "бритва",
            source: "./images/bathroom/razor.jpg"
        },
    ],
    school: [
        {
            name: "ruler",
            nameRussian: "линейка",
            source: "./images/school/ruler.jpg"
        },
        {
            name: "pen",
            nameRussian: "ручка",
            source: "./images/school/pen.jpg"
        },
        {
            name: "pencil",
            nameRussian: "карандаш",
            source: "./images/school/pencil.jpg"
        },
        {
            name: "scissors",
            nameRussian: "ножницы",
            source: "./images/school/scissors.jpg"
        },
        {
            name: "eraser",
            nameRussian: "ластик",
            source: "./images/school/eraser.jpg"
        },
        {
            name: "pencil sharpener",
            nameRussian: "точилка",
            source: "./images/school/sharpener.jpg"
        },
        {
            name: "clip",
            nameRussian: "скрепка",
            source: "./images/school/clip.jpg"
        },
    ],
    nature: [
        {
            name: "cloud",
            nameRussian: "облако",
            source: "./images/nature/cloud.jpg"
        },
        {
            name: "snow",
            nameRussian: "снег",
            source: "./images/nature/snow.jpg"
        },
        {
            name: "grass",
            nameRussian: "трава",
            source: "./images/nature/grass.jpg"
        },
        {
            name: "mountain",
            nameRussian: "гора",
            source: "./images/nature/mountain.jpg"
        },
        {
            name: "lake",
            nameRussian: "озеро",
            source: "./images/nature/lake.jpg"
        },
        {
            name: "river",
            nameRussian: "река",
            source: "./images/nature/river.jpg"
        },
        {
            name: "sea",
            nameRussian: "море",
            source: "./images/nature/sea.jpg"
        },
        {
            name: "tree",
            nameRussian: "дерево",
            source: "./images/nature/tree.jpg"
        },
    ],
    containers: [
        {
            name: "purse",
            nameRussian: "сумка",
            source: "./images/containers/purse.jpg"
        },
        {
            name: "sack",
            nameRussian: "мешок",
            source: "./images/containers/sack.jpg"
        },
        {
            name: "box",
            nameRussian: "коробка",
            source: "./images/containers/box.jpg"
        },
        {
            name: "wooden box",
            nameRussian: "ящик",
            source: "./images/containers/woodenBox.jpg"
        },
        {
            name: "cart",
            nameRussian: "тележка",
            source: "./images/containers/cart.jpg"
        },
        {
            name: "plastic bag",
            nameRussian: "пакет",
            source: "./images/containers/plasticBag.jpg"
        },
        {
            name: "bucket",
            nameRussian: "ведро",
            source: "./images/containers/bucket.jpg"
        },
        {
            name: "backpack",
            nameRussian: "рюкзак",
            source: "./images/containers/backpack.jpg"
        },
    ],
    tools:[
        {
            name: "screwdriver",
            nameRussian: "отвёртка",
            source: "./images/tools/screwdriver.jpg"
        },
        {
            name: "axe",
            nameRussian: "топор",
            source: "./images/tools/axe.jpg"
        },
        {
            name: "hammer",
            nameRussian: "молоток",
            source: "./images/tools/hammer.jpg"
        },
        {
            name: "saw",
            nameRussian: "пила",
            source: "./images/tools/saw.jpg"
        },
        {
            name: "shovel",
            nameRussian: "лопата",
            source: "./images/tools/shovel.jpg"
        },
        {
            name: "nail",
            nameRussian: "гвоздь",
            source: "./images/tools/nail.jpg"
        },
        {
            name: "screw",
            nameRussian: "шуруп",
            source: "./images/tools/screw.jpg"
        },
    ],
    house: [
        {
            name: "clock",
            nameRussian: "часы",
            source: "./images/house/clock.jpg"
        },
        {
            name: "stairs",
            nameRussian: "лестница",
            source: "./images/house/stairs.jpg"
        },
        {
            name: "window",
            nameRussian: "окно",
            source: "./images/house/window.jpg"
        },
        {
            name: "door",
            nameRussian: "дверь",
            source: "./images/house/door.jpg"
        },
        {
            name: "carpet",
            nameRussian: "ковёр",
            source: "./images/house/carpet.jpg"
        },
        {
            name: "house",
            nameRussian: "дом",
            source: "./images/house/house.jpg"
        },
    ],
    body: [
        {
            name: "brows",
            nameRussian: "брови",
            source: "./images/body/brows2.jpg"
        },
        {
            name: "chest",
            nameRussian: "грудь",
            source: "./images/body/chest2.jpg"
        },
        {
            name: "abdomen",
            nameRussian: "живот",
            source: "./images/body/abdomen2.jpg"
        },
        {
            name: "back",
            nameRussian: "спина",
            source: "./images/body/back2.jpg"
        },
        {
            name: "arm",
            nameRussian: "рука",
            source: "./images/body/arm.jpg"
        },
        {
            name: "leg",
            nameRussian: "нога",
            source: "./images/body/leg.jpg"
        },
        {
            name: "eyes",
            nameRussian: "глаза",
            source: "./images/body/eyes2.jpg"
        },
        {
            name: "ear",
            nameRussian: "ухо",
            source: "./images/body/ear.jpg"
        },
        {
            name: "knee",
            nameRussian: "колено",
            source: "./images/body/knee2.jpg"
        },
        {
            name: "shoulder",
            nameRussian: "плечо",
            source: "./images/body/shoulder2.jpg"
        },
        {
            name: "teeth",
            nameRussian: "зубы",
            source: "./images/body/teeth2.jpg"
        },
        {
            name: "lips",
            nameRussian: "губы",
            source: "./images/body/lips.jpg"
        },
        {
            name: "mouth",
            nameRussian: "рот",
            source: "./images/body/mouth.jpg"
        },
        {
            name: "tongue",
            nameRussian: "язык",
            source: "./images/body/tongue2.jpg"
        },
        {
            name: "forehead",
            nameRussian: "лоб",
            source: "./images/body/forehead2.jpg"
        },
        {
            name: "nose",
            nameRussian: "нос",
            source: "./images/body/nose2.jpg"
        },
        {
            name: "finger",
            nameRussian: "палец",
            source: "./images/body/finger2.jpg"
        },
        {
            name: "neck",
            nameRussian: "шея",
            source: "./images/body/neck2.jpg"
        },
        {
            name: "foot",
            nameRussian: "ступня",
            source: "./images/body/foot.jpg"
        },
    ],
    yard: [
        {
            name: "ball",
            nameRussian: "мяч",
            source: "./images/yard/ball.jpg"
        },
        {
            name: "rope",
            nameRussian: "верёвка",
            source: "./images/yard/rope.jpg"
        },
        {
            name: "swing",
            nameRussian: "качели",
            source: "./images/yard/swing.jpg"
        },
        {
            name: "trampoline",
            nameRussian: "батут",
            source: "./images/yard/trampoline.jpg"
        },
    ],
    music: [
        {
            name: "guitar",
            nameRussian: "гитара",
            source: "./images/music/guitar.jpg"
        },
        {
            name: "piano",
            nameRussian: "пианино",
            source: "./images/music/piano.jpg"
        },
        {
            name: "drum",
            nameRussian: "барабан",
            source: "./images/music/drum.jpg"
        },
        {
            name: "trumpet",
            nameRussian: "труба",
            source: "./images/music/trumpet.jpg"
        },
        {
            name: "flute",
            nameRussian: "флейта",
            source: "./images/music/flute.jpg"
        },
        {
            name: "violin",
            nameRussian: "скрипка",
            source: "./images/music/violin.jpg"
        },
        {
            name: "harp",
            nameRussian: "арфа",
            source: "./images/music/harp.jpg"
        },
        {
            name: "synth",
            nameRussian: "синтезатор",
            source: "./images/music/synth.jpg"
        },
    ],
    people: [
        {
            name: "woman",
            nameRussian: "женщина",
            source: "./images/people/woman.jpg"
        },
        {
            name: "man",
            nameRussian: "мужчина",
            source: "./images/people/man.jpg"
        },
        {
            name: "girl",
            nameRussian: "девочка",
            source: "./images/people/girl.jpg"
        },
        {
            name: "boy",
            nameRussian: "мальчик",
            source: "./images/people/boy.jpg"
        },
        {
            name: "grandma",
            nameRussian: "бабушка",
            source: "./images/people/grandma.jpg"
        },
        {
            name: "grandpa",
            nameRussian: "дедушка",
            source: "./images/people/grandpa.jpg"
        },
    ]
};
let chosenSection = "";
let chosenCategory = {}
let count = 0;
let stage = "";
let language = "English";


const showSections = (language) => {
    completedSections = JSON.parse(localStorage.getItem('completedSections'));

    let content = ``;
    if (language == "english") {
        content = `<h2>Sections</h2>`;
    } else if (language == "russian") {
        content = `<h2>Разделы</h2>`;
    }

    for (let i = 0; i < sections.length; i++) {
        if (completedSections[sections[i].english.toLowerCase()]) {
            content += `<button class="sectionButton sectionButtonCompleted" value=${sections[i].english} name=${sections[i].russian}>${sections[i][language]}</button>`;
        } else {
            content += `<button class="sectionButton" value=${sections[i].english} name=${sections[i].russian}>${sections[i][language]}</button>`;
        }
    }
    document.querySelector("#sections").innerHTML = content;
}


const showExercise = (event) => {
   if (event.target.className == "sectionButton" || event.target.className == "sectionButton sectionButtonCompleted") {
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
    } else if (count == chosenSection.length-1) {
        closeExercise();
    }
    // reset
    document.querySelector("#imageNameInput").value = "";
    document.querySelector("#status").style.display = "none";
    document.querySelector("#hint").style.display = "none";
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
        // next exercise
        document.querySelector("#checkButton").style.display = "none";
        document.querySelector("#nextButton").style.display = "block";
        stage = "questionAccepted";
        changeImage();
    } else {
        document.querySelector("#status").style.display = "block";
        document.querySelector("#hint").style.display = "block";
        document.querySelector("#imageNameInput").value = "";
    }
}


const changeExerciseWithKey = (event) => {
    if (event.key == "Enter" && stage == "question") {
        checkExercise();
    } else if (event.key == "Enter" && stage == "questionAccepted") {
        changeImage(document.querySelector("#category").textContent);
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


const showHint = () => {
    document.querySelector("#name").style.visibility = "visible";
}


const closeExercise = () => {
    if (completedSections == null) {
        completedSections = {};
    }

    if (!completedSections[chosenCategory.english.toLowerCase()]) {
        completedSections[chosenCategory.english.toLowerCase()] = true;
    } else {
        delete completedSections[chosenCategory.english.toLowerCase()];
    }
    localStorage.setItem(`completedSections`, JSON.stringify(completedSections));
    showSections(language.toLowerCase());

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
document.querySelector("#hint").addEventListener("click", showHint);
