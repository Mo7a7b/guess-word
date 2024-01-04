let gameName = "Guess The Word"
let inputStr = ""
document.querySelector("footer").style.padding = '30px'
let started = false
document.querySelector(".game-area").style.visibility = 'hidden'
let sessionedStarted = sessionStorage.getItem("started")
if (sessionedStarted) started = sessionedStarted
let numbersOfHints = 2
document.getElementById("noh").innerHTML = numbersOfHints
const easy = [
    "apple", "banana", "cherry", "dog", "cat", "house", "tree", "sun", "moon", "star",
    "happy", "sad", "big", "small", "fast", "slow", "red", "blue", "green", "yellow",
    "water", "fire", "air", "earth", "flower", "bird", "book", "pen", "friend", "family",
    "good", "bad", "hot", "cold", "old", "new", "day", "night", "time", "work",
    "play", "eat", "drink", "jump", "run", "walk", "laugh", "cry", "smile", "frown",
    "love", "hate", "happy", "sad", "kind", "mean", "learn", "teach", "listen", "talk",
    "read", "write", "see", "hear", "touch", "taste", "smell", "city", "country", "ocean",
    "mountain", "river", "lake", "beach", "forest", "park", "road", "car", "bus",
    "train", "plane", "ship", "bike", "flower", "tree", "grass", "sky", "cloud",
    "rain", "snow", "wind", "weather", "summer", "winter", "spring", "autumn", "school",
    "teacher", "student", "class", "study", "test", "exam", "question", "answer", "problem",
    "solution", "math", "science", "history", "art", "music", "dance", "sport", "game",
    "play", "win", "lose", "victory", "defeat", "friendship", "family", "home", "house",
    "room", "bed", "sleep", "dream", "wake", "morning", "night", "day", "week",
    "month", "year", "century", "past", "present", "future", "country", "nation", "world",
    "peace", "war", "freedom", "justice", "equality", "human", "nature", "animal", "plant",
    "planet", "space", "universe", "science", "technology", "computer", "internet", "website", "software",
    "hardware", "program", "code", "language", "word", "sentence", "paragraph", "story", "poem",
    "song", "music", "art", "painting", "picture", "photo", "video", "movie", "film",
    "camera", "phone", "message", "call", "email", "letter", "note", "paper", "pen",
    "pencil", "color", "shape", "number", "letter", "alphabet", "word", "sentence", "paragraph",
    "book", "novel", "story", "poem", "fable", "legend", "myth", "history", "science",
    "math", "geography", "language", "art", "music", "dance", "sport", "game", "play",
    "learn", "teach", "study", "school", "class", "teacher", "student", "test", "exam",
    "question", "answer", "problem", "solution", "idea", "thought", "mind", "brain", "head",
    "face", "eye", "ear", "nose", "mouth", "tooth", "tongue", "lip", "neck",
    "shoulder", "arm", "elbow", "wrist", "hand", "finger", "thumb", "chest", "back",
    "stomach", "waist", "hip", "leg", "knee", "ankle", "foot", "toe", "heel",
    "skin", "hair", "nail", "blood", "bone", "muscle", "heart", "liver", "lung",
    "stomach", "brain", "organ", "system", "body", "health", "illness", "disease", "medicine",
    "doctor", "nurse", "hospital", "clinic", "healthcare", "treatment", "cure", "recovery", "pain",
    "pleasure", "joy", "happiness", "sadness", "anger", "fear", "surprise", "disgust", "emotion",
    "feeling", "mood", "expression", "face", "gesture", "body", "language", "communication", "talk",
    "speak", "say", "tell", "listen", "hear", "understand", "language", "words", "meaning",
    "pronunciation", "grammar", "vocabulary", "writing", "speaking", "reading", "listening", "learning", "teaching",
    "study", "book", "class", "teacher", "student", "test", "exam", "knowledge", "wisdom",
    "truth", "fact", "opinion", "belief", "idea", "philosophy", "religion", "science", "art",
    "music", "dance", "sport", "game", "play", "work", "job", "career", "employment",
    "business", "company", "industry", "factory", "product", "service", "market", "customer", "consumer",
    "money", "currency", "economy", "wealth", "poverty", "rich", "poor", "class", "society",
    "culture", "tradition", "custom", "norm", "value", "ethics", "morality", "law", "justice",
    "government", "politics", "democracy", "monarchy", "republic", "dictatorship", "authority", "power", "rule",
    "freedom", "rights", "duty", "responsibility", "obligation", "choice", "decision", "action", "behavior",
    "habit", "character", "personality", "individual", "society", "community", "family", "relationship", "friendship",
    "love", "hate", "conflict", "peace", "war", "struggle", "challenge", "success", "failure",
    "victory", "defeat", "achievement", "goal", "dream", "ambition", "desire", "hope", "fear",
    "risk", "chance", "luck", "fortune", "misfortune", "happiness", "sadness", "emotion", "feeling",
    "mood", "mind", "thought", "idea", "inspiration", "creativity", "imagination", "innovation", "invention",
    "science", "technology", "progress", "change", "development", "evolution", "revolution", "history", "future",
    "past", "present", "now", "time", "space", "universe", "cosmos", "nature", "environment",
    "planet", "earth", "air", "water", "fire", "wind", "weather", "climate", "season",
    "sun", "moon", "star", "galaxy", "solar", "system", "black", "white", "gray",
    "color", "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown",
    "black", "white", "gray", "color", "shape", "size", "height", "width", "length",
    "distance", "weight", "mass", "volume", "density", "temperature", "pressure", "speed", "velocity",
    "acceleration", "force", "energy", "power", "work", "heat", "light", "sound", "music",
    "noise", "silence", "movement", "motion", "position", "direction", "up", "down", "left",
    "right", "front", "back", "top", "bottom", "north", "south", "east", "west",
    "country", "nation", "state", "province", "city", "town", "village", "neighborhood", "street",
    "road", "highway", "bridge", "tunnel", "building", "house", "apartment", "room", "door",
    "window", "floor", "ceiling", "wall", "roof", "floor", "furniture", "bed", "table",
    "chair", "sofa", "desk", "lamp", "light", "clock", "watch", "mirror", "sink",
    "toilet", "bath", "shower", "kitchen", "oven", "fridge", "microwave", "sink", "dish",
    "plate", "cup", "glass", "fork", "knife", "spoon", "chopstick", "pan", "pot",
    "strainer", "spatula", "cutting", "board", "food", "meal", "breakfast", "lunch", "dinner",
    "snack", "dessert", "drink", "water", "tea", "coffee", "juice", "soda", "alcohol",
    "beer", "wine", "cocktail", "whiskey", "vodka", "rum", "gin", "brandy", "champagne",
    "vegetable", "fruit", "meat", "fish", "bread", "rice", "noodle", "pasta", "soup",
    "salad", "sauce", "spice", "salt", "pepper", "sugar", "oil", "butter", "cheese",
    "egg", "milk", "yogurt", "ice", "cream", "cake", "cookie", "candy", "chocolate",
    "snack", "chip", "nut", "seed", "honey", "jam", "jelly", "syrup", "ketchup",
    "mayonnaise", "mustard", "vinegar", "pickles", "salt", "pepper", "spice", "herb", "basil",
    "oregano", "thyme", "rosemary", "mint", "cilantro", "parsley", "garlic", "onion", "ginger",
    "chili", "pepper", "cinnamon", "nutmeg", "vanilla", "cocoa", "coffee", "tea", "sugar",
    "flour", "baking", "soda", "yeast", "butter", "oil", "salt", "pepper", "sauce",
    "kitchen", "appliance", "oven", "stove", "microwave", "dishwasher", "fridge", "freezer", "sink",
    "toilet", "shower", "bath", "towel", "soap", "shampoo", "toothbrush", "toothpaste", "razor",
    "makeup", "hair", "brush", "comb", "mirror", "perfume", "deodorant", "lotion", "medicine",
    "pill", "prescription", "doctor", "nurse", "hospital", "clinic", "healthcare", "insurance", "sick",
    "ill", "health", "wellness", "exercise", "fitness", "gym", "yoga", "meditation", "relaxation",
    "sleep", "dream", "wake", "morning", "night", "day", "week", "month", "year",
    "calendar", "date", "time", "clock", "watch", "alarm", "hour", "minute", "second",
    "morning", "afternoon", "evening", "night", "day", "week", "month", "year", "decade",
    "century", "past", "present", "future", "now", "today", "yesterday", "tomorrow", "soon",
    "late", "early", "beginning", "end", "start", "finish", "first", "last", "next",
    "previous", "before", "after", "nowadays", "current", "recent", "new", "old", "young",
    "age", "youth", "adult", "senior", "child", "kid", "baby", "boy", "girl",
    "man", "woman", "gentleman", "lady", "father", "mother", "parent", "grandfather", "grandmother",
    "uncle", "aunt", "cousin", "brother", "sister", "friend", "family", "relatives", "neighbor",
    "stranger", "guest", "host", "teacher", "student", "classmate", "colleague", "boss", "employee",
    "customer", "client", "patient", "doctor", "nurse", "police", "officer", "soldier", "citizen",
    "country", "nation", "government", "leader", "president", "king", "queen", "prince", "princess",
    "warrior", "hero", "villain", "artist", "musician", "dancer", "actor", "actress", "writer",
    "author", "poet", "scientist", "engineer", "doctor", "lawyer", "teacher", "professor", "student",
    "athlete", "player", "coach", "fan", "audience", "viewer", "reader", "listener", "spectator",
    "customer", "client", "shopper", "buyer", "seller", "merchant", "business", "company", "corporation",
    "industry", "factory", "market", "product", "service", "money", "currency", "economy", "wealth",
    "poverty", "rich", "poor", "class", "society"
]
const med = [
    "absurd", "accent", "accomplish", "accuse", "acknowledge", "adventure", "aggregate", "ambiguity", "annotate", "apprehensive",
    "aptitude", "arbitrary", "assimilate", "authentic", "benchmark", "benevolent", "brevity", "catalyst", "censure", "chaotic",
    "circumvent", "coalesce", "cognizant", "collaborate", "commemorate", "complacent", "comprehensive", "concede", "conformity", "conscientious",
    "consistent", "contemplate", "conventional", "convoluted", "credibility", "cumbersome", "deceptive", "deference", "delineate", "denounce",
    "deprecate", "desolate", "deteriorate", "deviate", "disparate", "disposition", "eccentric", "elaborate", "eloquent", "empathy",
    "enigma", "enumerate", "ephemeral", "equivocate", "erratic", "ethereal", "exacerbate", "exemplify", "expedite", "facetious",
    "fastidious", "feasible", "fortuitous", "furtive", "gregarious", "harangue", "hierarchy", "hypothesize", "immutable", "impetuous",
    "implausible", "incongruous", "indigenous", "indiscriminate", "indulgent", "inevitable", "infinitesimal", "innocuous", "insidious", "insinuate",
    "integrity", "intrepid", "introspective", "irresolute", "juxtapose", "lament", "languish", "laudable", "lethargic", "levity",
    "magnanimous", "malevolent", "manifest", "meticulous", "mitigate", "mollify", "mystify", "narrative", "nebulous", "nominal",
    "novel", "nuance", "obfuscate", "oblivion", "obscure", "ominous", "omniscient", "paradox", "perfunctory", "peripheral",
    "permeate", "pervasive", "philanthropy", "plausible", "polarize", "precarious", "preclude", "precocious", "procrastinate", "profound",
    "prolific", "propensity", "prosaic", "prudent", "quandary", "querulous", "quixotic", "rampant", "ravenous", "rebuke",
    "reciprocal", "reclusive", "reiterate", "relinquish", "reproach", "resilient", "resolute", "reticent", "reverence", "rhetoric",
    "salient", "sanguine", "scrutinize", "serendipity", "shrewd", "solicit", "solitude", "sophisticated", "sporadic", "stoic",
    "sublime", "succinct", "superfluous", "surreptitious", "susceptible", "sycophant", "taciturn", "tenacious", "terse", "ubiquitous",
    "unilateral", "unprecedented", "venerable", "vex", "viable", "vicarious", "vindicate", "vociferous", "volatile", "wane",
    "whimsical", "wistful", "zealous",
    // ... (add more words as needed)
];

const hard = [
    "aberration", "abstruse", "acquiesce", "admonish", "adumbrate", "alacrity", "anathema", "antediluvian", "apocryphal", "apoplectic",
    "archaic", "asperity", "assiduous", "astringent", "atavistic", "august", "aureate", "auspicious", "baleful", "belligerent",
    "bilious", "boorish", "cacophony", "cajole", "calumny", "canard", "capricious", "cavil", "chicanery", "circuitous",
    "circumlocution", "cogitate", "commensurate", "compendium", "concomitant", "conflagration", "contrite", "convivial", "corpulent", "coterie",
    "crepuscular", "cupidity", "deleterious", "demagogue", "denigrate", "depredation", "desultory", "diaphanous", "diffident", "dilatory",
    "disparate", "disquiet", "dissolute", "divisive", "ebullient", "effulgent", "egregious", "eleemosynary", "emollient", "enervate",
    "enervating", "ephemeral", "epistemology", "equanimity", "equivocal", "execrable", "exhort", "expatiate", "expedient", "expunge",
    "extirpate", "extricate", "factitious", "fatuous", "feckless", "felicitous", "ferrous", "flagitious", "fustian", "garrulous",
    "gloaming", "gossamer", "grandiloquent", "gustatory", "hagiography", "halcyon", "harridan", "hegemony", "heterogeneous", "hirsute",
    "iconoclast", "idiosyncrasy", "ignominious", "imbroglio", "impecunious", "impervious", "imprecation", "incendiary", "incipient", "inchoate",
    "inculcate", "indolent", "iniquity", "intransigent", "inveigh", "inveterate", "jejune", "juxtaposition", "lachrymose", "lambent",
    "languid", "legerdemain", "loquacious", "lugubrious", "machiavellian", "malediction", "mellifluous", "meretricious", "minatory", "misanthrope",
    "mnemonic", "mordant", "munificent", "nadir", "nefarious", "nepotism", "obfuscate", "obfuscation", "obstreperous", "obtuse",
    "officious", "oleaginous", "opprobrium", "oscillate", "palliate", "pariah", "parsimonious", "pellucid", "penurious", "percipient",
    "perfidious", "perfunctory", "perspicacious", "pervicacious", "petrichor", "pontificate", "precocious", "prevaricate", "profligate", "propinquity",
    "prosaic", "proscribe", "protean", "quiescent", "querulous", "quixotic", "quotidian", "raconteur", "rapacious", "recalcitrant",
    "recidivism", "redolent", "reproach", "reprobate", "resplendent", "ribald", "rubicund", "sagacious", "salubrious", "sardonic",
    "sartorial", "scurrilous", "seraphic", "serendipity", "sibilant", "solipsistic", "somnolent", "spurious", "stentorian", "strident",
    "subterfuge", "succor", "sycophant", "taciturn", "tantamount", "tenebrous", "threnody", "timorous", "trenchant", "truculent",
    "ubiquitous", "umbrage", "unctuous", "uxorious", "vacillate", "verdant", "vicissitude", "vituperate", "voracious", "wheedle",
    "winsome", "wraith", "writhe", "xenophobe", "yeoman", "zeitgeist", "zenith", "zephyr", "zeugma", "zymurgy",
    // ... (add more words as needed)
];

let cA = med
var timerElement = document.getElementById('timer');
var totalTime = 180 // 90 seconds
var timeRemaining = totalTime;
var timerInterval;


// Update every second

let randomIndex = Math.floor(Math.random() * cA.length)
let randomWord = cA[randomIndex]
let RandomWordArray = Array.from(randomWord)
document.title = gameName;
document.querySelector(".nav").innerHTML = gameName;
document.querySelector("footer").innerHTML = `${gameName} Game Created By <span><a target="balnk" href="https://myportfolio-71.web.app/">Mohab Ibrahim</a></span> &copy 2024`;
let numbersOfTries = 6
let numbersOfLetters = randomWord.length
let currentTry = 1
function generateInput() {

}

window.onload = function () {
    generateInput()

}
window.onchange = function () {
    let inp = null
    let allInputs = document.querySelectorAll(".play-inputs,.check-inputs")
    allInputs.forEach((input, index) => {
        let inputIndex = input.id.slice(-1)
        for (letter of randomWord) {
            if (input.value.toUpperCase() === letter.toUpperCase() && randomWord.slice(inputIndex - 1, inputIndex).toUpperCase() === letter.toUpperCase()) {
                inp = input
                inp.style.backgroundColor = '#f89e13'
                inp.classList.add("disabled-inputs")
                allInputs.length = index + 1
                break
            } else if (input.value.toUpperCase() === letter.toUpperCase() && randomWord.slice(inputIndex - 1, inputIndex).toUpperCase() !== letter.toUpperCase()) {
                inp = input
                inp.style.backgroundColor = '#18ba89'
                inp.classList.add("disabled-inputs")
                allInputs.length = index + 1
                break
            } else if (input.value === '') {
                inp = input
                inp.style.backgroundColor = 'white'
            }
            else if (input.value.toUpperCase() !== letter.toUpperCase()) {
                inp = input
                inp.style.backgroundColor = '#27303f'
                inp.classList.add("disabled-inputs")
                allInputs.length = index + 1
            }
        }
    })
    moveToNextTry()
    if (currentTry === 2 && inputStr.length !== randomWord.length) {
        let try2 = document.querySelector(".try-2")
        try2.classList.remove("disabled-inputs")
    }
    else if (currentTry === 3 && inputStr.length !== randomWord.length) {
        let try3 = document.querySelector(".try-3")
        try3.classList.remove("disabled-inputs")
    }
    else if (currentTry === 4 && inputStr.length !== randomWord.length) {
        let try4 = document.querySelector(".try-4")
        try4.classList.remove("disabled-inputs")
    }
    else if (currentTry === 5 && inputStr.length !== randomWord.length) {
        let try5 = document.querySelector(".try-5")
        try5.classList.remove("disabled-inputs")
    }
    else if (currentTry === 6 && inputStr.length !== randomWord.length) {
        let try6 = document.querySelector(".try-6")
        try6.classList.remove("disabled-inputs")
    }
}
let try1Array = []
let try2Array = []
let try3Array = []
let try4Array = []
let try5Array = []
let try6Array = []
function moveToNextTry() {
    numbersOfLetters = randomWord.length
    let try1 = document.querySelector(".try-1")
    let try2 = document.querySelector(".try-2")
    let try3 = document.querySelector(".try-3")
    let try4 = document.querySelector(".try-4")
    let try5 = document.querySelector(".try-5")
    let try6 = document.querySelector(".try-6")
    try1Array.push(try1.childNodes[1].value)
    try2Array.push(try2.childNodes[1].value)
    try3Array.push(try3.childNodes[1].value)
    try4Array.push(try4.childNodes[1].value)
    try5Array.push(try5.childNodes[1].value)
    try6Array.push(try6.childNodes[1].value)
    if (currentTry === 1) {
        if (try1Array.length === numbersOfLetters && inputStr.length !== randomWord.length) {
            currentTry++
            try1.classList.add("disabled-inputs")
        }
        try2Array.length = 0
        try3Array.length = 0
        try4Array.length = 0
        try5Array.length = 0
        try6Array.length = 0
    } else if (currentTry === 2) {
        if (try2Array.length === numbersOfLetters && inputStr.length !== randomWord.length) {
            currentTry++
            try2.classList.add("disabled-inputs")
        }
        try3Array.length = 0
        try4Array.length = 0
        try5Array.length = 0
        try6Array.length = 0
    } else if (currentTry === 3) {
        if (try3Array.length === numbersOfLetters && inputStr.length !== randomWord.length) {
            currentTry++
            try3.classList.add("disabled-inputs")
        }
        try4Array.length = 0
        try5Array.length = 0
        try6Array.length = 0
    }
    else if (currentTry === 4) {
        if (try4Array.length === numbersOfLetters && inputStr.length !== randomWord.length) {
            currentTry++
            try4.classList.add("disabled-inputs")
        }
        try5Array.length = 0
        try6Array.length = 0
    }
    else if (currentTry === 5) {
        if (try5Array.length === numbersOfLetters && inputStr.length !== randomWord.length) {
            currentTry++
            try5.classList.add("disabled-inputs")
        }
        try6Array.length = 0
    }

}
function checkWord() {
    numbersOfLetters = randomWord.length
    let checkDiv = document.createElement("div")
    checkDiv.classList.add("check-div")
    let icon = document.createElement("i")
    icon.classList.add("fa-solid")
    icon.classList.add("fa-xmark")
    icon.classList.add("ic")
    icon.onclick = () => {
        checkDiv.remove()
        inputStr = ""
    }
    checkDiv.appendChild(icon)
    for (let i = 1; i <= 1; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        if (i !== 1) tryDiv.classList.add("disabled-inputs");
        for (let j = 1; j <= numbersOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.setAttribute("maxlength", "1");
            input.classList.add("check-inputs")
            tryDiv.appendChild(input);

        }
        checkDiv.appendChild(tryDiv);
    }
    checkDiv.children[1].children[1].focus()
    document.body.appendChild(checkDiv)
    checkWin()
}

function checkWin() {
    let inputsArray = []
    let wordArray = Array.from(randomWord.toUpperCase())
    let checkInputs = document.querySelectorAll(".check-inputs")

    checkInputs.forEach((input, index) => {
        checkInputs[0].focus()
        if (index !== 0) {
            input.classList.add("disabled-inputs")
        }
        input.addEventListener("input", () => {
            const nextInput = checkInputs[index + 1]
            if (nextInput) {
                nextInput.focus()
                nextInput.classList.remove("disabled-inputs")
            }
        })
        input.onchange = () => {
            document.querySelector(".check").disabled = true
            let icon = document.querySelector(".ic")
            if (icon) icon.remove()

            inputsArray.push(input.value.toUpperCase())
            inputStr = ""
            for (inp of inputsArray) {
                inputStr += inp
            }
            // Win
            if (inputStr.toUpperCase() === randomWord.toUpperCase()) {
                
                clearInterval(timerInterval)
                let checkDiv = document.querySelector(".check-div")
                let inputs = document.querySelectorAll(".check-div input")
                inputs.forEach((inp) => (inp.classList.add("correct-answer")))
                let h1 = document.createElement("h1")
                let btn = document.createElement("button")
                btn.onclick = () => {
                    playAgain()
                }
                btn.textContent = 'Play Again'
                h1.classList.add("win")
                let winText = document.createTextNode("Congratulations! You Guessed The Word Successfully")
                h1.appendChild(winText)
                checkDiv.append(h1, btn)
                let soundEffect = new Audio("correct.mp3")
                soundEffect.play()
            }
            // Lose
            if (inputStr.toUpperCase() !== randomWord.toUpperCase() && inputStr.length === randomWord.length) {
                clearInterval(timerInterval)
                let checkDiv = document.querySelector(".check-div")
                let inputs = document.querySelectorAll(".check-div input")
                inputs.forEach((inp) => (inp.classList.add("incorrect-answer")))
                let h1 = document.createElement("h1")
                let btn = document.createElement("button")
                btn.onclick = () => {
                    playAgain()
                }
                btn.textContent = 'Play Again'
                h1.classList.add("lose")
                let winText = document.createTextNode(`Sorry! You Lost The Word Is (${randomWord})`)
                h1.appendChild(winText)
                checkDiv.append(h1, btn)
                let soundEffect = new Audio("incorrect.mp3")
                soundEffect.play()
            }


        }
    })
}
function playAgain() {
    location.reload()
}

function giveHint() {
    if (numbersOfHints === 0) {
        return
    } else {
        let hintDiv = document.createElement("div")
        let icon = document.createElement("i")
        icon.classList.add("fa-solid")
        icon.classList.add("fa-xmark")
        icon.classList.add("ic")
        icon.onclick = () => {
            hintDiv.remove()
            numbersOfHints -= 1
            document.getElementById("noh").innerHTML = numbersOfHints
        }

        let randomIndex = Math.floor(Math.random() * RandomWordArray.length)
        let ShuffledLetter = RandomWordArray[randomIndex]
        let content = `<h1>There is <span>(${ShuffledLetter})</span> in The Word</h1>`
        RandomWordArray = RandomWordArray.filter((l) => { return l !== ShuffledLetter })
        hintDiv.innerHTML += content
        hintDiv.classList.add("hint-div")
        hintDiv.append(icon)
        document.body.appendChild(hintDiv)
    }

}
if (started) {
    document.getElementById("startMenu").style.display = "none"
    document.querySelector(".game-area").style.visibility = 'visible'
    document.querySelector("footer").style.padding = '20px'
    let diff = sessionStorage.getItem("diff")
    if (diff == 'easy') {
        randomIndex = Math.floor(Math.random() * easy.length)
        randomWord = easy[randomIndex]
    } else if (diff == 'med') {
        randomIndex = Math.floor(Math.random() * med.length)
        randomWord = med[randomIndex]
    } else if (diff == 'hard') {
        randomIndex = Math.floor(Math.random() * hard.length)
        randomWord = hard[randomIndex]
    }
    let numbersOfLetters = randomWord.length
    RandomWordArray = Array.from(randomWord)
    totalTime = sessionStorage.getItem("time") ? sessionStorage.getItem("time") : 180
    if (totalTime == 90) {
        timerElement.innerHTML = '01:30'
    } else if (totalTime == 180) {
        timerElement.innerHTML = '03:00'
    } else if (totalTime == 300) {
        timerElement.innerHTML = '05:00'
    }
    console.log(randomWord)
    timeRemaining = totalTime;
    function updateTimer() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;

        // Add leading zeros if needed
        var minutesStr = minutes < 10 ? '0' + minutes : minutes;
        var secondsStr = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = minutesStr + ':' + secondsStr;
    }
    timerInterval = setInterval(function () {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            // If time Ended
            let timeDiv = document.createElement("div")
            timeDiv.classList.add("time-div")
            let h1 = document.createElement("h1")
            let content = document.createTextNode(`Time's Up! The word is (${randomWord})`)
            h1.appendChild(content)
            let btn = document.createElement("button")
            btn.onclick = () => {
                playAgain()
            }
            btn.textContent = 'Play Again'
            timeDiv.append(h1, btn)
            document.body.appendChild(timeDiv)
        }
    }, 1000);
    const inputsContainer = document.querySelector(".inputs");
    for (let i = 1; i <= numbersOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try${i}</span>`;
        if (i !== 1) tryDiv.classList.add("disabled-inputs");
        for (let j = 1; j <= numbersOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.classList.add("play-inputs")
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);

        }
        inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus()
    let inputs = document.querySelectorAll(".play-inputs,.check-inputs")
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            const nextInput = inputs[index + 1]
            if (nextInput) nextInput.focus()
        })
    })
}
function startGame() {
    console.log(totalTime)
    document.getElementById("startMenu").style.display = "none"
    document.querySelector(".game-area").style.visibility = 'visible'
    document.querySelector("footer").style.padding = '20px'
    let diff = sessionStorage.getItem("diff")
    if (diff == 'easy') {
        randomIndex = Math.floor(Math.random() * easy.length)
        randomWord = easy[randomIndex]
        cA = easy
    } else if (diff == 'med') {
        randomIndex = Math.floor(Math.random() * med.length)
        randomWord = med[randomIndex]
        cA = med
    } else if (diff == 'hard') {
        randomIndex = Math.floor(Math.random() * hard.length)
        randomWord = hard[randomIndex]
        cA = hard
    }
    let numbersOfLetters = randomWord.length
    RandomWordArray = Array.from(randomWord)
    console.log(randomWord)
    totalTime = sessionStorage.getItem("time") ? sessionStorage.getItem("time") : 180
    timeRemaining = totalTime;
    function updateTimer() {
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = timeRemaining % 60;

        // Add leading zeros if needed
        var minutesStr = minutes < 10 ? '0' + minutes : minutes;
        var secondsStr = seconds < 10 ? '0' + seconds : seconds;

        timerElement.textContent = minutesStr + ':' + secondsStr;
    }
    timerInterval = setInterval(function () {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            // If time Ended
            let timeDiv = document.createElement("div")
            timeDiv.classList.add("time-div")
            let h1 = document.createElement("h1")
            let content = document.createTextNode(`Time's Up! The word is (${randomWord})`)
            h1.appendChild(content)
            let btn = document.createElement("button")
            btn.onclick = () => {
                playAgain()
            }
            btn.textContent = 'Play Again'
            timeDiv.append(h1, btn)
            document.body.appendChild(timeDiv)
        }
    }, 1000);
    sessionStorage.setItem("started", true)
    const inputsContainer = document.querySelector(".inputs");
    for (let i = 1; i <= numbersOfTries; i++) {
        const tryDiv = document.createElement("div");
        tryDiv.classList.add(`try-${i}`);
        tryDiv.innerHTML = `<span>Try${i}</span>`;
        if (i !== 1) tryDiv.classList.add("disabled-inputs");
        for (let j = 1; j <= numbersOfLetters; j++) {
            const input = document.createElement("input");
            input.type = "text";
            input.id = `guess-${i}-letter-${j}`;
            input.classList.add("play-inputs")
            input.setAttribute("maxlength", "1");
            tryDiv.appendChild(input);

        }
        inputsContainer.appendChild(tryDiv);
    }
    inputsContainer.children[0].children[1].focus()
    let inputs = document.querySelectorAll(".play-inputs,.check-inputs")
    inputs.forEach((input, index) => {
        input.addEventListener("input", () => {
            const nextInput = inputs[index + 1]
            if (nextInput) nextInput.focus()
        })
    })
}

function openSettings() {
    document.getElementById('startMenu').style.display = 'none';
    document.getElementById('settingsMenu').style.display = 'flex';
}

function applySettings() {
    let timeSelect = document.getElementById('timeSelect')
    let diffSel = document.getElementById('difficultySelect')
    var time = timeSelect.value;
    var difficulty = diffSel.value;
    totalTime = time
    if (time == 90) {
        timerElement.innerHTML = '01:30'
        sessionStorage.setItem("time", 90)
    } else if (time == 180) {
        timerElement.innerHTML = '03:00'
        sessionStorage.setItem("time", 180)
    } else if (time == 300) {
        timerElement.innerHTML = '05:00'
        sessionStorage.setItem("time", 300)
    } else {
        timerElement.innerHTML = '03:00'
        sessionStorage.setItem("time", 180)
    }
    if (difficulty == "easy") {
        sessionStorage.setItem("diff", 'easy')
    } else if (difficulty == "medium") {
        sessionStorage.setItem("diff", 'med')
    } else if (difficulty == "hard") {
        sessionStorage.setItem("diff", 'hard')
    } else {
        sessionStorage.setItem("diff", 'med')
    }
    document.getElementById("apply").innerHTML = 'Applied'
    document.getElementById("apply").style.backgroundColor = 'green'
    document.getElementById("apply").classList.add("applied-ani")
    document.getElementById("apply").style.cursor = 'default'
    setTimeout(() => {
        document.getElementById("apply").innerHTML = 'Apply'
        document.getElementById("apply").style.backgroundColor = '#f44336'
        document.getElementById("apply").classList.remove("applied-ani")
        document.getElementById("apply").style.cursor = 'pointer'
    }, 2000)
    // Add code to apply settings to the game
}

function closeSettings() {
    document.getElementById('settingsMenu').style.display = 'none';
    document.getElementById('startMenu').style.display = 'flex';
}