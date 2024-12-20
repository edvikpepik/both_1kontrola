const questions = [
    {
        numb: 1,
        question: "Jaký je váš preferovaný typ auta?",
        options: [
            "Sportovní",
            "Luxusní",
            "Rodinné",
            "SUV"
        ],
        car: "a-class"  // Každá otázka má přiřazený model Mercedes
    },
    {
        numb: 2,
        question: "Jaký je váš typ jízdy?",
        options: [
            "Rychlá a dynamická",
            "Pohodlná a klidná",
            "Na delší vzdálenosti",
            "V terénu"
        ],
        car: "s-class"
    },
    {
        numb: 3,
        question: "Kolik míst potřebujete v autě?",
        options: [
            "2-4 místa",
            "5 míst",
            "6-7 míst",
            "Více než 7"
        ],
        car: "e-class"
    },
    {
        numb: 4,
        question: "Jaký je váš rozpočet na auto?",
        options: [
            "Do 1 000 000 Kč",
            "1 000 000 Kč - 2 000 000 Kč",
            "2 000 000 Kč - 3 500 000 Kč",
            "Více než 3 500 000 Kč"
        ],
        car: "glc"
    },
    {
        numb: 5,
        question: "Jaké vybavení preferujete?",
        options: [
            "Vysoce luxusní interiér",
            "Sportovní a dynamické řízení",
            "Praktičnost a komfort",
            "Terénní schopnosti"
        ],
        car: "gle"
    },
    {
        numb: 6,
        question: "Jaký je váš preferovaný styl jízdy?",
        options: [
            "Sportovní jízda",
            "Pohodlí a elegance",
            "Úspornost a ekologičnost",
            "Terénní dobrodružství"
        ],
        car: "a-class"
    },
    {
        numb: 7,
        question: "Preferujete hybridní nebo elektrické auto?",
        options: [
            "Ano, hybridní",
            "Ano, elektrické",
            "Ne, chci benzínové nebo naftové",
            "Nemám preference"
        ],
        car: "eqc"  // Mercedes EQC pro elektrické preference
    },
    {
        numb: 8,
        question: "Jaký typ interiéru preferujete?",
        options: [
            "Minimalistický a moderní",
            "Tradiční a luxusní",
            "Prostor pro rodinu",
            "Odolný a praktický"
        ],
        car: "s-class"
    }
];

let selectedCar = ""; // Uložíme výběr auta na základě odpovědí

// Funkce pro zpracování odpovědí
function optionSelected(answer) {
    let userAnswer = answer.textContent;
    let selectedCarOption = questions[questionCount].car; // Získáme auto, které odpovídá odpovědi

    // Uložíme model auta, který byl vybrán
    selectedCar = selectedCarOption;

    // Zobrazíme správně vybraný model auta
    answer.classList.add('selected');

    // Zakážeme všechny možnosti po výběru
    const allOptions = document.querySelectorAll('.option');
    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.add('disabled');
    }

    // Umožníme přejít na další otázku
    nextBtn.classList.add('active');
}

// Funkce pro zobrazení výsledku po dokončení kvízu
function showResult() {
    // Skrýt otázky
    quizSection.classList.remove('active');

    // Zobrazit výsledek
    const resultBox = document.querySelector('.result-box');
    resultBox.classList.add('active');

    // Zobrazíme obrázek auta na základě výběru
    const carImage = document.querySelector('.car-image');
    carImage.innerHTML = `<img src="/img/${selectedCar}.jpg" alt="Výsledek">`;

    // Zobrazíme text o výběru modelu
    const resultText = document.querySelector('.result-text');
    resultText.textContent = "Nejlepší model pro tebe bude...";
}

// Volání funkce pro zobrazení výsledku na konci kvízu
nextBtn.onclick = () => {
    if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        questionNumb++;
        questionCounter(questionNumb);
    } else {
        showResult();
    }
};