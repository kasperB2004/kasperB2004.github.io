let global = {
    woorden: ['vives', 'stoel', 'tafel', 'hotel', 'olijf'],
    woord: [],

}

let beurt = {
    aantalGokken: 0,
    naam: '',
    date: null
}


const setup = () => {
    document.getElementById("btnNieuwSpel").addEventListener("click", startGame);
    document.getElementById("txtWoord").addEventListener("keydown", handleinput);
}

const handleinput = (event) => {
    if (event.key === 'Enter') {
        let input = document.getElementById("txtWoord");
        let inputLetters = input.value.toLowerCase().split('');

        let correct = true;

        const guessRow = document.createElement("div");
        guessRow.classList.add("guess-row");

        inputLetters.forEach((letter, index) => {
            let status;
            if (global.woord[index] === letter) {
                status = 'correct';
                console.log(`Letter ${letter} is in the word and in the correct position.`);
            } else if (global.woord.includes(letter)) {
                status = 'wrongplace';
                console.log(`Letter ${letter} is in the word but in the wrong position.`);
                correct = false;
            } else {
                status = 'wrong';
                console.log(`Letter ${letter} is not in the word.`);
                correct = false;
            }

            const letterBox = createCard(letter, status);
            guessRow.appendChild(letterBox);
        });

        document.getElementById("guesscontainer").appendChild(guessRow);

        if (correct && inputLetters.length === global.woord.length) {
            console.log("Congratulations! You've guessed the word correctly.");
            endGame()

        } else {
            beurt.aantalGokken++;
        }

        input.value = '';
        input.focus();
    }
}

const endGame = () => {
    document.getElementById("btnNieuwSpel").style.display = "";
}


const createCard = (letter, status) => {
    const letterBox = document.createElement("div");
    letterBox.classList.add("letter-box");
    letterBox.textContent = letter;

    switch (status) {
        case 'correct':
            letterBox.classList.add("correct");
            letterBox.addEventListener("click", () => showMessage(`Letter ${letter} is in the word and in the correct position.`));
            break;
        case 'wrongplace':
            letterBox.classList.add("wrongplace");
            letterBox.addEventListener("click", () => showMessage(`Letter ${letter} is in the word but in the wrong position.`));
            break;
        case 'wrong':
            letterBox.classList.add("wrong");
            letterBox.addEventListener("click", () => showMessage(`Letter ${letter} is not in the word.`));
            break;
    }

    return letterBox;

}
const showMessage = (message) => {
    const newDiv = document.createElement("div");
    newDiv.id = "message";
    newDiv.textContent = message;
    const messageDiv = document.getElementById("messageDiv");
    document.getElementById("guesscontainer").removeChild();
    messageDiv.appendChild(newDiv)

    setTimeout(() => {
        messageDiv.removeChild(newDiv);
    }, 3000);
}


const startGame = () => {
    document.getElementById("guesscontainer").innerHTML = "";
    let naam = '';
    while (naam === '') {
        naam = prompt("Gelieve uw naam in te vullen");
    }
    beurt.naam = naam;
    beurt.aantalGokken = 0;
    document.getElementById("btnNieuwSpel").style.display = "none";
    let input = document.getElementById("txtWoord");
    input.disabled = false;
    input.focus();
    kiesWoord();
}

const kiesWoord = () => {

    let i = Math.floor(Math.random() * (global.woorden.length));
    let gekozenWoord = global.woorden[i];
    global.woord = gekozenWoord.split('');
}

window.addEventListener("load", setup);