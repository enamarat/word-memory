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
    {english: "Yard", russian: "Двор"},
    {english: "Music", russian: "Музыка"},
    {english: "People", russian: "Люди"},
    {english: "Pocket", russian: "Карман"},
    {english: "Food", russian: "Еда"},
    {english: "Shapes", russian: "Формы"},
    {english: "Flowers", russian: "Цветы"},
    {english: "Body", russian: "Тело"},
    {english: "Poses", russian: "Позы"},
    {english: "Actions", russian: "Действия"},
];
let completedSections = {};
const images = {
    animals: [
        {
            name: "koala",
            nameRussian: "коала",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/koala.jpg"
        },
        {
            name: "wolf",
            nameRussian: "волк",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/wolf.jpg"
        },
        {
            name: "fox",
            nameRussian: "лиса",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/fox.jpg"
        },
        {
            name: "racoon",
            nameRussian: "енот",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/racoon.jpg"
        },
        {
            name: "pig",
            nameRussian: "свинья",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/pig.jpg"
        },
        {
            name: "panda",
            nameRussian: "панда",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/panda.jpg"
        },
        {
            name: "bull",
            nameRussian: "бык",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/bull.jpg"
        },
        {
            name: "rhino",
            nameRussian: "носорог",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/rhino.jpg"
        },
        {
            name: "zebra",
            nameRussian: "зебра",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/zebra.jpg"
        },
        {
            name: "camel",
            nameRussian: "верблюд",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/camel.jpg"
        },
        {
            name: "horse",
            nameRussian: "лошадь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/horse.jpg"
        },
        {
            name: "ape",
            nameRussian: "обезьяна",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/ape.jpg"
        },
        {
            name: "cat",
            nameRussian: "кот",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/cat.jpg"
        },
        {
            name: "kangaroo",
            nameRussian: "кенгуру",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/kangaroo.jpg"
        },
        {
            name: "dog",
            nameRussian: "собака",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/dog.jpg"
        },
        {
            name: "cow",
            nameRussian: "корова",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/cow.jpg"
        },
        {
            name: "hare",
            nameRussian: "заяц",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/hare.jpg"
        },
        {
            name: "mouse",
            nameRussian: "мышь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/mouse.jpg"
        },
        {
            name: "tiger",
            nameRussian: "тигр",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/tiger.jpg"
        },
        {
            name: "lion",
            nameRussian: "лев",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/lion.jpg"
        },
        {
            name: "elephant",
            nameRussian: "слон",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/elephant.jpg"
        },
        {
            name: "goat",
            nameRussian: "коза",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/goat.jpg"
        },
        {
            name: "boar",
            nameRussian: "кабан",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/boar.jpg"
        },
        {
            name: "hedgehog",
            nameRussian: "ёж",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/hedgehog.jpg"
        },
        {
            name: "deer",
            nameRussian: "олень",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/deer.jpg"
        },
        {
            name: "squirrel",
            nameRussian: "белка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/squirrel.jpg"
        },
        {
            name: "giraffe",
            nameRussian: "жираф",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/giraffe.jpg"
        },
        {
            name: "bear",
            nameRussian: "медведь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/bear.jpg"
        },
        {
            name: "white bear",
            nameRussian: "белый медведь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/whiteBear.jpg"
        },
        {
            name: "rat",
            nameRussian: "крыса",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/rat.jpg"
        },
        {
            name: "porcupine",
            nameRussian: "дикобраз",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/animals/porcupine.jpg"
        },
    ],
    insects: [
        {
            name: "colorado beetle",
            nameRussian: "колорадский жук",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/coloradobeetle.jpg"
        },
        {
            name: "fly",
            nameRussian: "муха",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/fly.jpg"
        },
        {
            name: "butterfly",
            nameRussian: "бабочка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/butterfly.jpg"
        },
        {
            name: "ant",
            nameRussian: "муравей",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/ant.jpg"
        },
        {
            name: "dragonfly",
            nameRussian: "стрекоза",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/dragonfly.jpg"
        },
        {
            name: "bee",
            nameRussian: "пчела",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/bee.jpg"
        },
        {
            name: "wasp",
            nameRussian: "оса",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/wasp.jpg"
        },
        {
            name: "mosquito",
            nameRussian: "комар",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/mosquito.jpg"
        },
        {
            name: "grasshoper",
            nameRussian: "кузнечик",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/grasshoper.jpg"
        },
        {
            name: "ladybug",
            nameRussian: "божья коровка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/ladybug.jpg"
        },
        {
            name: "cockroach",
            nameRussian: "таракан",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/insects/cockroach.jpg"
        },
    ],
    reptiles: [
        {
            name: "crocodile",
            nameRussian: "крокодил",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/reptiles/crocodile.jpg"
        },
        {
            name: "lizzard",
            nameRussian: "ящерица",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/reptiles/lizzard.jpg"
        },
        {
            name: "snake",
            nameRussian: "змея",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/reptiles/snake.jpg"
        },
        {
            name: "turtle",
            nameRussian: "черепаха",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/reptiles/turtle.jpg"
        }
    ],
    birds: [
        {
            name: "chicken",
            nameRussian: "курица",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/chicken.jpg"
        },
        {
            name: "rooster",
            nameRussian: "петух",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/rooster.jpg"
        },
        {
            name: "chick",
            nameRussian: "цыплёнок",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/chick.jpg"
        },
        {
            name: "sparrow",
            nameRussian: "воробей",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/sparrow.jpg"
        },
        {
            name: "wagtail",
            nameRussian: "трясогузка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/wagtail.jpg"
        },
        {
            name: "hoodedCrow",
            nameRussian: "ворона",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/hoodedCrow.jpg"
        },
        {
            name: "magpie",
            nameRussian: "сорока",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/magpie.jpg"
        },
        {
            name: "pigeon",
            nameRussian: "голубь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/pigeon.jpg"
        },
        {
            name: "duck",
            nameRussian: "утка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/duck.jpg"
        },
        {
            name: "swallow",
            nameRussian: "ласточка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/swallow.jpg"
        },
        {
            name: "gull",
            nameRussian: "чайка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/gull.jpg"
        },
        {
            name: "pelican",
            nameRussian: "пеликан",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/pelican.jpg"
        },
        {
            name: "penguin",
            nameRussian: "пингвин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/penguin.jpg"
        },
        {
            name: "peacock",
            nameRussian: "павлин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/peacock.jpg"
        },
        {
            name: "parrot",
            nameRussian: "попугай",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/parrot.jpg"
        },
        {
            name: "eagle",
            nameRussian: "орёл",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/eagle.jpg"
        },
        {
            name: "turkey",
            nameRussian: "индюк",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/turkey.jpg"
        },
        {
            name: "goose",
            nameRussian: "гусь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/goose.jpg"
        },
        {
            name: "swan",
            nameRussian: "лебедь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/swan.jpg"
        },
        {
            name: "flamingo",
            nameRussian: "фламинго",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/flamingo.jpg"
        },
        {
            name: "woodpecker",
            nameRussian: "дятел",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/woodpecker.jpg"
        },
        {
            name: "crane",
            nameRussian: "журавль",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/crane.jpg"
        },
        {
            name: "ostrich",
            nameRussian: "страус",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/birds/ostrich.jpg"
        },
    ],
    fish: [
        {
            name: "shark",
            nameRussian: "акула",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/shark.jpg"
        },
        {
            name: "whale",
            nameRussian: "кит",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/whale.jpg"
        },
        {
            name: "dolphin",
            nameRussian: "дельфин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/dolphin.jpg"
        },
        {
            name: "carp",
            nameRussian: "карп",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/carp.jpg"
        },
        {
            name: "pike",
            nameRussian: "щука",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/pike.jpg"
        },
        {
            name: "catfish",
            nameRussian: "сом",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/catfish.jpg"
        },
        {
            name: "herring",
            nameRussian: "сельдь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fish/herring.jpg"
        },
    ],
    transport: [
        {
            name: "boat",
            nameRussian: "лодка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/boat.jpg"
        },
        {
            name: "rocket",
            nameRussian: "ракета",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/rocket.jpg"
        },
        {
            name: "submarine",
            nameRussian: "подводная лодка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/submarine.jpg"
        },
        {
            name: "motorcycle",
            nameRussian: "мотоцикл",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/motorcycle.jpg"
        },
        {
            name: "ship",
            nameRussian: "корабль",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/ship.jpg"
        },
        {
            name: "bus",
            nameRussian: "автобус",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/bus.jpg"
        },
        {
            name: "truck",
            nameRussian: "грузовик",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/truck.jpg"
        },
        {
            name: "car",
            nameRussian: "машина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/car.jpg"
        },
        {
            name: "train",
            nameRussian: "поезд",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/train.jpg"
        },
        {
            name: "scooter",
            nameRussian: "самокат",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/scooter.jpg"
        },
        {
            name: "plane",
            nameRussian: "самолёт",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/plane.jpg"
        },
        {
            name: "bicycle",
            nameRussian: "велосипед",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/bicycle.jpg"
        },
        {
            name: "helicopter",
            nameRussian: "вертолёт",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/transport/helicopter.jpg"
        },
    ],
    furniture: [
        {
            name: "bed",
            nameRussian: "кровать",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/bed.jpg"
        },
        {
            name: "sofa",
            nameRussian: "диван",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/sofa.jpg"
        },
        {
            name: "cupboard",
            nameRussian: "шкаф",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/cupboard.jpg"
        },
        {
            name: "armchair",
            nameRussian: "кресло",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/armchair.jpg"
        },
        {
            name: "commode",
            nameRussian: "комод",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/commode.jpg"
        },
        {
            name: "table",
            nameRussian: "стол",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/table.jpg"
        },
        {
            name: "chair",
            nameRussian: "стул",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/furniture/chair.jpg"
        },
    ],
    dishes: [
        {
            name: "pot",
            nameRussian: "кастрюля",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/pot.jpg"
        },
        {
            name: "pan",
            nameRussian: "сковорода",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/pan.jpg"
        },
        {
            name: "cup",
            nameRussian: "чашка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/cup.jpg"
        },
        {
            name: "mug",
            nameRussian: "кружка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/mug.jpg"
        },
        {
            name: "jug",
            nameRussian: "кувшин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/jug.jpg"
        },
        {
            name: "bottle",
            nameRussian: "бутылка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/bottle.jpg"
        },
        {
            name: "glass",
            nameRussian: "стакан",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/glass.jpg"
        },
        {
            name: "plate",
            nameRussian: "тарелка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/plate.jpg"
        },
        {
            name: "bowl",
            nameRussian: "миска",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/bowl.jpg"
        },
        {
            name: "kettle",
            nameRussian: "чайник",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/kettle.jpg"
        },
        {
            name: "fork",
            nameRussian: "вилка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/fork.jpg"
        },
        {
            name: "knife",
            nameRussian: "нож",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/knife.jpg"
        },
        {
            name: "spoon",
            nameRussian: "ложка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/spoon.jpg"
        },
        {
            name: "container",
            nameRussian: "контейнер",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/dishes/container.jpg"
        },
    ],
    fruit: [
        {
            name: "pineapple",
            nameRussian: "ананас",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/pineapple.jpg"
        },
        {
            name: "grapefruit",
            nameRussian: "грейпфрут",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/grapefruit.jpg"
        },
        {
            name: "pear",
            nameRussian: "груша",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/pear.jpg"
        },
        {
            name: "peach",
            nameRussian: "персик",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/peach.jpg"
        },
        {
            name: "apricot",
            nameRussian: "абрикос",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/apricot.jpg"
        },
        {
            name: "plum",
            nameRussian: "слива",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/plum.jpg"
        },
        {
            name: "cherry",
            nameRussian: "вишня",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/cherry.jpg"
        },
        {
            name: "melon",
            nameRussian: "дыня",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/melon.jpg"
        },
        {
            name: "watermelon",
            nameRussian: "арбуз",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/watermelon.jpg"
        },
        {
            name: "banana",
            nameRussian: "банан",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/banana.jpg"
        },
        {
            name: "pomegranate",
            nameRussian: "гранат",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/pomegranate.jpg"
        },
        {
            name: "apple",
            nameRussian: "яблоко",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/apple.jpg"
        },
        {
            name: "lemon",
            nameRussian: "лимон",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/lemon.jpg"
        },
        {
            name: "orange",
            nameRussian: "апельсин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/orange.jpg"
        },
        {
            name: "mandarine",
            nameRussian: "мандарин",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/mandarine.jpg"
        },
        {
            name: "kiwi",
            nameRussian: "киви",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/kiwi.jpg"
        },
        {
            name: "grape",
            nameRussian: "виноград",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/grape.jpg"
        },
        {
            name: "strawberry",
            nameRussian: "клубника",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/fruit/strawberry.jpg"
        }
    ],
    vegetables: [
        {
            name: "pepper",
            nameRussian: "перец",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/pepper.jpg"
        },
        {
            name: "pumpkin",
            nameRussian: "тыква",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/pumpkin.jpg"
        },
        {
            name: "carrot",
            nameRussian: "морковь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/carrot.jpg"
        },
        {
            name: "potato",
            nameRussian: "картофель",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/potato.jpg"
        },
        {
            name: "cucumber",
            nameRussian: "огурец",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/cucumber.jpg"
        },
        {
            name: "tomato",
            nameRussian: "помидор",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/tomato.jpg"
        },
        {
            name: "cabbage",
            nameRussian: "капуста",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/cabbage.jpg"
        },
        {
            name: "onion",
            nameRussian: "лук",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/onion.jpg"
        },
        {
            name: "radish",
            nameRussian: "редиска",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/radish.jpg"
        },
        {
            name: "beet",
            nameRussian: "свекла",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/vegetables/beet.jpg"
        },
    ],
    berries: [
        {
            name: "redcurrant",
            nameRussian: "красная смородина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/redcurrant.jpg"
        },
        {
            name: "blackcurrant",
            nameRussian: "чёрная смородина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/blackcurrant.jpg"
        },
        {
            name: "blackberry",
            nameRussian: "ежевика",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/blackberry.jpg"
        },
        {
            name: "blueberry",
            nameRussian: "черника",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/blueberry.jpg"
        },
        {
            name: "raspberry",
            nameRussian: "малина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/raspberry.jpg"
        },
        {
            name: "gooseberry",
            nameRussian: "крыжовник",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/berries/gooseberry.jpg"
        },
    ],
    clothes: [
        {
            name: "panama hat",
            nameRussian: "шляпа",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/panamahat.jpg"
        },
        {
            name: "cap",
            nameRussian: "кепка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/cap.jpg"
        },
        {
            name: "trousers",
            nameRussian: "брюки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/trousers.jpg"
        },
        {
            name: "jeans",
            nameRussian: "джинсы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/jeans.jpg"
        },
        {
            name: "pants",
            nameRussian: "штаны",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/pants.jpg"
        },
        {
            name: "belt",
            nameRussian: "ремень",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/belt.jpg"
        },
        {
            name: "hat",
            nameRussian: "шапка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/hat.jpg"
        },
        {
            name: "robe",
            nameRussian: "халат",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/robe.jpg"
        },
        {
            name: "sweater",
            nameRussian: "свитер",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/sweater.jpg"
        },
        {
            name: "sweatshirt",
            nameRussian: "кофта",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/sweatshirt.jpg"
        },
        {
            name: "scarf",
            nameRussian: "шарф",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/scarf.jpg"
        },
        {
            name: "underwear",
            nameRussian: "трусы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/underwear.jpg"
        },
        {
            name: "shirt",
            nameRussian: "рубашка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/shirt.jpg"
        },
        {
            name: "dress",
            nameRussian: "платье",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/dress.jpg"
        },
        {
            name: "skirt",
            nameRussian: "юбка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/skirt.jpg"
        },
        {
            name: "gloves",
            nameRussian: "перчатки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/gloves.jpg"
        },
        {
            name: "socks",
            nameRussian: "носки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/socks.jpg"
        },
        {
            name: "t-shirt",
            nameRussian: "майка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/tshirt.jpg"
        },
        {
            name: "jacket",
            nameRussian: "куртка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/jacket.jpg"
        },
        {
            name: "shorts",
            nameRussian: "шорты",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/clothes/shorts.jpg"
        }
    ],
    shoes: [
        {
            name: "boots",
            nameRussian: "сапоги",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/boots.jpg"
        },
        {
            name: "sneakers",
            nameRussian: "кроссовки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/sneakers.jpg"
        },
        {
            name: "blucher",
            nameRussian: "туфли",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/blucher.jpg"
        },
        {
            name: "slippers",
            nameRussian: "тапочки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/slippers.jpg"
        },
        {
            name: "sandals",
            nameRussian: "сандалии",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/sandals.jpg"
        },
        {
            name: "winter boots",
            nameRussian: "ботинки",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/shoes/winterBoots.jpg"
        }
    ],
    appliances: [
        {
            name: "mower",
            nameRussian: "косилка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/mower.jpg"
        },
        {
            name: "lamp",
            nameRussian: "лампа",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/lamp.jpg"
        },
        {
            name: "phone",
            nameRussian: "телефон",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/phone.jpg"
        },
        {
            name: "vacuum cleaner",
            nameRussian: "пылесос",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/vacuumCleaner.jpg"
        },
        {
            name: "television",
            nameRussian: "телевизор",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/television.jpg"
        },
        {
            name: "fridge",
            nameRussian: "холодильник",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/fridge.jpg"
        },
        {
            name: "stove",
            nameRussian: "плита",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/stove.jpg"
        },
        {
            name: "laptop",
            nameRussian: "компьютер",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/laptop.jpg"
        },
        {
            name: "washing machine",
            nameRussian: "стиральная машина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/washingmachine.jpg"
        },
        {
            name: "kettle",
            nameRussian: "чайник",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/kettle.jpg"
        },
        {
            name: "iron",
            nameRussian: "утюг",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/iron.jpg"
        },
        {
            name: "fan",
            nameRussian: "вентилятор",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/fan.jpg"
        },
        {
            name: "remoteController",
            nameRussian: "пульт",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/remoteController.jpg"
        },
        {
            name: "battery",
            nameRussian: "батарейка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/battery.jpg"
        },
        {
            name: "microwave oven",
            nameRussian: "микроволновая печь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/microwaveOven.jpg"
        },
        {
            name: "scales",
            nameRussian: "весы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/scales.jpg"
        },
        {
            name: "electronic scales",
            nameRussian: "электронные весы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/scales2.jpg"
        },
        {
            name: "mixer",
            nameRussian: "смеситель",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/mixer.jpg"
        },
        {
            name: "hair dryer",
            nameRussian: "фен",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/hairdryer.jpg"
        },
        {
            name: "electric razor",
            nameRussian: "электрическая бритва",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/electricrazor.jpg"
        },
        {
            name: "grill",
            nameRussian: "гриль",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/appliances/grill.jpg"
        }
    ],
    colors: [
        {
            name: "green",
            nameRussian: "зелёный",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/green.jpg"
        },
        {
            name: "blue",
            nameRussian: "синий",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/blue.jpg"
        },
        {
            name: "red",
            nameRussian: "красный",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/red.jpg"
        },
        {
            name: "yellow",
            nameRussian: "жёлтый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/yellow.jpg"
        },
        {
            name: "orange",
            nameRussian: "оранжевый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/orange.jpg"
        },
        {
            name: "black",
            nameRussian: "чёрный",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/black.jpg"
        },
        {
            name: "brown",
            nameRussian: "коричневый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/brown.jpg"
        },
        {
            name: "pink",
            nameRussian: "розовый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/pink.jpg"
        },
        {
            name: "violet",
            nameRussian: "фиолетовый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/violet.jpg"
        },
        {
            name: "gray",
            nameRussian: "серый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/gray.jpg"
        },
        {
            name: "white",
            nameRussian: "белый",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/colors/white.jpg"
        },
    ],
    bathroom: [
        {
            name: "towel",
            nameRussian: "полотенце",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/towel.jpg"
        },
        {
            name: "sink",
            nameRussian: "раковина",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/sink.jpg"
        },
        {
            name: "toilet",
            nameRussian: "туалет",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/toilet.jpg"
        },
        {
            name: "toilet paper",
            nameRussian: "туалетная бумага",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/toiletpaper.jpg"
        },
        {
            name: "soap",
            nameRussian: "мыло",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/soap.jpg"
        },
        {
            name: "toothbrush",
            nameRussian: "зубная щётка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/toothbrush.jpg"
        },
        {
            name: "toothpaste",
            nameRussian: "зубная паста",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/toothpaste.jpg"
        },
        {
            name: "razor",
            nameRussian: "бритва",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/bathroom/razor.jpg"
        },
    ],
    school: [
        {
            name: "ruler",
            nameRussian: "линейка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/ruler.jpg"
        },
        {
            name: "pen",
            nameRussian: "ручка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/pen.jpg"
        },
        {
            name: "pencil",
            nameRussian: "карандаш",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/pencil.jpg"
        },
        {
            name: "scissors",
            nameRussian: "ножницы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/scissors.jpg"
        },
        {
            name: "eraser",
            nameRussian: "ластик",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/eraser.jpg"
        },
        {
            name: "pencil sharpener",
            nameRussian: "точилка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/sharpener.jpg"
        },
        {
            name: "clip",
            nameRussian: "скрепка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/clip.jpg"
        },
        {
            name: "book",
            nameRussian: "книга",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/school/book.jpg"
        },
    ],
    nature: [
        {
            name: "forest",
            nameRussian: "лес",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/forest.jpg"
        },
        {
            name: "stick",
            nameRussian: "палка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/stick.jpg"
        },
        {
            name: "cloud",
            nameRussian: "облако",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/cloud.jpg"
        },
        {
            name: "snow",
            nameRussian: "снег",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/snow.jpg"
        },
        {
            name: "grass",
            nameRussian: "трава",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/grass.jpg"
        },
        {
            name: "mountain",
            nameRussian: "гора",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/mountain.jpg"
        },
        {
            name: "lake",
            nameRussian: "озеро",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/lake.jpg"
        },
        {
            name: "river",
            nameRussian: "река",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/river.jpg"
        },
        {
            name: "sea",
            nameRussian: "море",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/sea.jpg"
        },
        {
            name: "tree",
            nameRussian: "дерево",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/tree.jpg"
        },
        {
            name: "leaf",
            nameRussian: "лист",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/leaf.jpg"
        },
        {
            name: "worm",
            nameRussian: "червяк",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/worm.jpg"
        },
        {
            name: "frog",
            nameRussian: "лягушка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/nature/frog.jpg"
        },
    ],
    containers: [
        {
            name: "purse",
            nameRussian: "сумка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/purse.jpg"
        },
        {
            name: "sack",
            nameRussian: "мешок",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/sack.jpg"
        },
        {
            name: "box",
            nameRussian: "коробка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/box.jpg"
        },
        {
            name: "wooden box",
            nameRussian: "ящик",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/woodenBox.jpg"
        },
        {
            name: "cart",
            nameRussian: "тележка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/cart.jpg"
        },
        {
            name: "plastic bag",
            nameRussian: "пакет",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/plasticBag.jpg"
        },
        {
            name: "bucket",
            nameRussian: "ведро",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/bucket.jpg"
        },
        {
            name: "backpack",
            nameRussian: "рюкзак",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/containers/backpack.jpg"
        },
    ],
    tools:[
        {
            name: "wrench",
            nameRussian: "гаечный ключ",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/wrench.jpg"
        },
        {
            name: "screw nut",
            nameRussian: "гайка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/screwnut.jpg"
        },
        {
            name: "bolt",
            nameRussian: "болт",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/bolt.jpg"
        },
        {
            name: "hoe",
            nameRussian: "тяпка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/hoe.jpg"
        },
        {
            name: "rake",
            nameRussian: "грабли",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/rake.jpg"
        },
        {
            name: "pitchfork",
            nameRussian: "вилы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/pitchfork.jpg"
        },
        {
            name: "screwdriver",
            nameRussian: "отвёртка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/screwdriver.jpg"
        },
        {
            name: "axe",
            nameRussian: "топор",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/axe.jpg"
        },
        {
            name: "hammer",
            nameRussian: "молоток",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/hammer.jpg"
        },
        {
            name: "saw",
            nameRussian: "пила",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/saw.jpg"
        },
        {
            name: "shovel",
            nameRussian: "лопата",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/shovel.jpg"
        },
        {
            name: "nail",
            nameRussian: "гвоздь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/nail.jpg"
        },
        {
            name: "screw",
            nameRussian: "шуруп",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/tools/screw.jpg"
        },
    ],
    house: [
        {
            name: "clock",
            nameRussian: "часы",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/clock.jpg"
        },
        {
            name: "light switch",
            nameRussian: "выключатель света",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/lightswitch.jpg"
        },
        {
            name: "chandelier",
            nameRussian: "люстра",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/chandelier.jpg"
        },
        {
            name: "stairs",
            nameRussian: "лестница",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/stairs.jpg"
        },
        {
            name: "window",
            nameRussian: "окно",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/window.jpg"
        },
        {
            name: "door",
            nameRussian: "дверь",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/door.jpg"
        },
        {
            name: "carpet",
            nameRussian: "ковёр",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/carpet.jpg"
        },
        {
            name: "vase",
            nameRussian: "ваза",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/vase.jpg"
        },
        {
            name: "blanket",
            nameRussian: "одеяло",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/blanket2.jpg"
        },
        {
            name: "pillow",
            nameRussian: "подушка",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/pillow.jpg"
        },
        {
            name: "mattress",
            nameRussian: "матрас",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/mattress2.jpg"
        },
        {
            name: "sheet",
            nameRussian: "простыня",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/sheet.jpg"
        },
        {
            name: "house",
            nameRussian: "дом",
            source: "https://raw.githubusercontent.com/enamarat/word-memory/main/images/house/house.jpg"
        }
    ],
    body: [
        {
            name: "hair",
            nameRussian: "волосы",
            source: "./images/body/hair2.jpg"
        },
        {
            name: "nails",
            nameRussian: "ногти",
            source: "./images/body/nails2.jpg"
        },
        {
            name: "elbow",
            nameRussian: "локоть",
            source: "./images/body/elbow2.jpg"
        },
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
            name: "chin",
            nameRussian: "подбородок",
            source: "./images/body/chin.jpg"
        },
        {
            name: "cheeks",
            nameRussian: "щёки",
            source: "./images/body/cheeks.jpg"
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
            name: "skipping rope",
            nameRussian: "скакалка",
            source: "./images/yard/skippingrope.jpg"
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
        {
            name: "gates",
            nameRussian: "ворота",
            source: "./images/yard/gates.jpg"
        },
        {
            name: "watering can",
            nameRussian: "лейка",
            source: "./images/yard/wateringcan.jpg"
        },
        {
            name: "barrel",
            nameRussian: "бочка",
            source: "./images/yard/barrel.jpg"
        },
        {
            name: "hose",
            nameRussian: "шланг",
            source: "./images/yard/hose.jpg"
        },
        {
            name: "greenhouse",
            nameRussian: "теплица",
            source: "./images/yard/greenhouse.jpg"
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
    ],
    pocket: [
        {
            name: "glasses",
            nameRussian: "очки",
            source: "./images/pocket/glasses.jpg"
        },
        {
            name: "comb",
            nameRussian: "расчёска",
            source: "./images/pocket/comb.jpg"
        },
        {
            name: "key",
            nameRussian: "ключ",
            source: "./images/pocket/key.jpg"
        },
        {
            name: "flashlight",
            nameRussian: "фонарик",
            source: "./images/pocket/flashlight.jpg"
        },
        {
            name: "napkin",
            nameRussian: "салфетка",
            source: "./images/pocket/napkin.jpg"
        },
        {
            name: "handkerchief",
            nameRussian: "платок",
            source: "./images/pocket/handkerchief.jpg"
        },
        {
            name: "coin",
            nameRussian: "монета",
            source: "./images/pocket/coin.jpg"
        },
        {
            name: "money",
            nameRussian: "деньги",
            source: "./images/pocket/money.jpg"
        },
        {
            name: "lighter",
            nameRussian: "зажигалка",
            source: "./images/pocket/lighter.jpg"
        },
        {
            name: "matches",
            nameRussian: "спички",
            source: "./images/pocket/matches.jpg"
        },
        {
            name: "wallet",
            nameRussian: "бумажник",
            source: "./images/pocket/wallet.jpg"
        },
        {
            name: "ticket",
            nameRussian: "билет",
            source: "./images/pocket/ticket.jpg"
        },
        {
            name: "umbrella",
            nameRussian: "зонтик",
            source: "./images/pocket/umbrella.jpg"
        },
    ],
    food: [
        {
            name: "cheese",
            nameRussian: "сыр",
            source: "./images/food/cheese.jpg"
        },
        {
            name: "salami",
            nameRussian: "колбаса",
            source: "./images/food/salami.jpg"
        },
        {
            name: "bread",
            nameRussian: "хлеб",
            source: "./images/food/bread.jpg"
        },
        {
            name: "egg",
            nameRussian: "яйцо",
            source: "./images/food/egg.jpg"
        },
        {
            name: "rice",
            nameRussian: "рис",
            source: "./images/food/rice.jpg"
        },
        {
            name: "pasta",
            nameRussian: "макароны",
            source: "./images/food/pasta.jpg"
        },
        {
            name: "water",
            nameRussian: "вода",
            source: "./images/food/water.jpg"
        },
        {
            name: "tea",
            nameRussian: "чай",
            source: "./images/food/tea.jpg"
        },
        {
            name: "milk",
            nameRussian: "молоко",
            source: "./images/food/milk.jpg"
        },
        {
            name: "cookie",
            nameRussian: "печенье",
            source: "./images/food/cookie.jpg"
        },
        {
            name: "pizza",
            nameRussian: "пицца",
            source: "./images/food/pizza.jpg"
        },
    ],
    shapes: [
        {
            name: "circle",
            nameRussian: "круг",
            source: "./images/shapes/circle.png"
        },
        {
            name: "square",
            nameRussian: "квадрат",
            source: "./images/shapes/square.png"
        },
        {
            name: "triangle",
            nameRussian: "треугольник",
            source: "./images/shapes/triangle.png"
        },
        {
            name: "rhombus",
            nameRussian: "ромб",
            source: "./images/shapes/rhombus.png"
        },
        {
            name: "rectangle",
            nameRussian: "прямоугольник",
            source: "./images/shapes/rectangle.png"
        },
        {
            name: "trapezoid",
            nameRussian: "трапеция",
            source: "./images/shapes/trapezoid.png"
        },
    ],
    flowers: [
        {
            name: "rose",
            nameRussian: "роза",
            source: "./images/flowers/rose.jpg"
        },
        {
            name: "tulip",
            nameRussian: "тюльпан",
            source: "./images/flowers/tulip.jpg"
        },
        {
            name: "chamomile",
            nameRussian: "ромашка",
            source: "./images/flowers/chamomile.jpg"
        },
        {
            name: "sunflower",
            nameRussian: "подсолнух",
            source: "./images/flowers/sunflower.jpg"
        },
        {
            name: "forget-me-not",
            nameRussian: "незабудка",
            source: "./images/flowers/forget-me-not.jpg"
        },
        {
            name: "dandelion",
            nameRussian: "одуванчик",
            source: "./images/flowers/dandelion.jpg"
        },
    ],
    poses: [
        {
            name: "sitting",
            nameRussian: "сидит",
            source: "./images/poses/sitting.jpg"
        },
        {
            name: "lying",
            nameRussian: "лежит",
            source: "./images/poses/lying.jpg"
        },
        {
            name: "standing",
            nameRussian: "стоит",
            source: "./images/poses/standing.jpg"
        }
    ],
    actions: [
        {
            name: "drinking",
            nameRussian: "пьёт",
            source: "./images/actions/drinking.gif"
        },
        {
            name: "eating",
            nameRussian: "ест",
            source: "./images/actions/eating.gif"
        },
        {
            name: "writing",
            nameRussian: "пишет",
            source: "./images/actions/writing.gif"
        },
        {
            name: "drawing",
            nameRussian: "рисует",
            source: "./images/actions/drawing.gif"
        },
        {
            name: "playing",
            nameRussian: "играет",
            source: "./images/actions/playing.gif"
        },
        {
            name: "cutting",
            nameRussian: "режет",
            source: "./images/actions/cutting.gif"
        },
        {
            name: "sawing",
            nameRussian: "пилит",
            source: "./images/actions/sawing.gif"
        },
        {
            name: "sitting down",
            nameRussian: "садится",
            source: "./images/actions/sittingdown.gif"
        },
        {
            name: "getting up",
            nameRussian: "встаёт",
            source: "./images/actions/gettingup.gif"
        },
        {
            name: "walking",
            nameRussian: "идёт",
            source: "./images/actions/walking.gif"
        },
        {
            name: "running",
            nameRussian: "бежит",
            source: "./images/actions/running.gif"
        },
        {
            name: "jumping",
            nameRussian: "прыгает",
            source: "./images/actions/jumping.gif"
        },
        {
            name: "throwing",
            nameRussian: "бросает",
            source: "./images/actions/throwing.gif"
        },
        {
            name: "reading",
            nameRussian: "читает",
            source: "./images/actions/reading.gif"
        },
        {
            name: "digging",
            nameRussian: "копает",
            source: "./images/actions/digging.gif"
        },
        {
            name: "giving",
            nameRussian: "отдаёт",
            source: "./images/actions/giving.gif"
        },
        {
            name: "putting on",
            nameRussian: "надевает",
            source: "./images/actions/puttingon.gif"
        },
        {
            name: "taking off",
            nameRussian: "снимает",
            source: "./images/actions/takingoff.gif"
        },
        {
            name: "putting on",
            nameRussian: "надевает",
            source: "./images/actions/puttingon2.gif"
        },
        {
            name: "taking off",
            nameRussian: "снимает",
            source: "./images/actions/takingoff2.gif"
        },
    ]
};
let chosenSection = "";
let chosenCategory = {}
let count = 0;
let stage = "";
let language = "";


const showSections = () => {
    //localStorage.clear();
    completedSections = JSON.parse(localStorage.getItem('completedSections'));
    const chosenLanguage = JSON.parse(localStorage.getItem('language'));
    if (chosenLanguage != null) {
        language = chosenLanguage;
    } else {
        language = "english"
    }
    
    let content = ``;
    if (language == "english") {
        content = `<h2>Sections</h2>`;
        document.querySelector("#language").textContent = "RUS";
        document.querySelector("#hint").textContent = "Hint";
    } else if (language == "russian") {
        content = `<h2>Разделы</h2>`;
        document.querySelector("#language").textContent = "ENG";
        document.querySelector("#hint").textContent = "Подсказка";
    }

    for (let i = 0; i < sections.length; i++) {
        if (completedSections != null) {
            if (completedSections[sections[i].english.toLowerCase()] != undefined) {
                content += `<button class="sectionButton sectionButtonCompleted" value=${sections[i].english} name=${sections[i].russian}>${sections[i][language]}</button>`;
            } else {
                content += `<button class="sectionButton" value=${sections[i].english} name=${sections[i].russian}>${sections[i][language]}</button>`;
            }
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

    if (language == "english") {
        if (chosenCategory.english.toLowerCase() == "actions" || chosenCategory.english.toLowerCase() == "poses") {
            document.querySelector("#clarification").textContent = "What is it/he/she doing?";
            document.querySelector("#clarification").style.display = "block";
        }
        document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
        document.querySelector("#category").textContent = `${chosenCategory.english.toUpperCase()}`;
    } else if (language == "russian") {
        if (chosenCategory.english.toLowerCase() == "actions" || chosenCategory.english.toLowerCase() == "poses") {
            document.querySelector("#clarification").textContent = "Что делает?";
            document.querySelector("#clarification").style.display = "block";
        }
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

        if (language == "english") {
            document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`;
        } else if (language == "russian") {
            document.querySelector("#name").textContent = `${chosenSection[count].nameRussian.toUpperCase()}`; 
        }
    } else if (count == chosenSection.length-1) {
        closeExercise(true);
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
    if (language == "english") {
        answer = chosenSection[count].name;
    } else if (language == "russian") {
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
    if (language == "english") {
        language = "russian";
        document.querySelector("#language").textContent = "ENG";
        localStorage.setItem(`language`, JSON.stringify(language));
        document.querySelector("#hint").textContent = "Подсказка"; 
        document.querySelector("#clarification").textContent = "Что делает?";
        
        if (stage == "question" || stage == "questionAccepted") {
            document.querySelector("#category").textContent = `${chosenCategory.russian.toUpperCase()}`;
            document.querySelector("#name").textContent = `${chosenSection[count].nameRussian.toUpperCase()}`; 
        }
    } else if (language == "russian") {
        language = "english";
        document.querySelector("#language").textContent = "RUS";
        localStorage.setItem(`language`, JSON.stringify(language));
        document.querySelector("#hint").textContent = "Hint";
        document.querySelector("#clarification").textContent = "What is it/he/she doing?";
        
        if (stage == "question" || stage == "questionAccepted") {
            document.querySelector("#category").textContent = `${chosenCategory.english.toUpperCase()}`;
            document.querySelector("#name").textContent = `${chosenSection[count].name.toUpperCase()}`; 
        }
    }
    showSections();
}


const showHint = () => {
    document.querySelector("#name").style.visibility = "visible";
}


const closeExercise = (lastImage=false) => {
    if (completedSections == null) {
        completedSections = {};
    }

    if (!completedSections[chosenCategory.english.toLowerCase()]) {
        completedSections[chosenCategory.english.toLowerCase()] = true;
    } else {
        delete completedSections[chosenCategory.english.toLowerCase()];
    }if (lastImage == true) {
        localStorage.setItem(`completedSections`, JSON.stringify(completedSections));
    }
    showSections();

    document.querySelector("#exercise").style.display = "none";
    document.querySelector("#sections").style.display = "flex";
    document.querySelector("#category").textContent = "";
    chosenSection = "";
    chosenCategory = {}
    count = 0;
    stage = "";
    document.querySelector("#clarification").textContent = "";
    document.querySelector("#clarification").style.display = "none";
}


window.addEventListener("load", showSections);
window.addEventListener("keypress", changeExerciseWithKey);
document.querySelector("#sections").addEventListener("click", showExercise);
document.querySelector("#checkButton").addEventListener("click", checkExercise);
document.querySelector("#nextButton").addEventListener("click", changeImage);
document.querySelector("#language").addEventListener("click", changeLanguage);
document.querySelector("#closeExerciseButton").addEventListener("click", closeExercise);
document.querySelector("#hint").addEventListener("click", showHint);
