const setup = () => {
    document.getElementById("slcKeuze").addEventListener("input", toonKip);
    document.getElementById("txtLetter").addEventListener("change", aantalLetters);

}

const toonKip = () => {
    let optie = document.getElementById("slcKeuze");
    let img = document.getElementById("img");
    let note = document.getElementById("note")

    if (optie.value === "0") {
        img.className = "hidden";
        img.alt = "Geen photo"
        note.innerText = ""
    } else if (optie.value === "1") {
        img.className = "with-egg";
        img.alt = "Een kip met een ei"
        note.innerText = "Hierboven, een kip met een ei"
    } else {
        img.className = "";
        img.alt = "Een Kip zonder een ei"
        note.innerText = "Hierboven, een kip zonder een ei"
    }

    aantalLetters();

}

const aantalLetters = () => {
    let letter = document.getElementById("txtLetter");
    let result = document.getElementById("aantal");
    let note = document.getElementById("note");
    let img = document.getElementById("img");
    let text = note.innerText.split("\n");
    if (letter.value !== "" && img.className !== "hidden") {
        let count = 0;
        let position = 0;
        while (position !== -1) {
            position = text[0].indexOf(letter.value, position)
            if (position !== -1) {
                count++;
                position++;
            }
        }
        note.innerText = text[0] + " \n de letter " + letter.value + " komt " + count + " keer voor.";
    } else {
        note.innerText = text[0];
    }

}


window.addEventListener("load", setup);