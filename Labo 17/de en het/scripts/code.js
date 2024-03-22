const setup = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", toonZin);
}

const toonZin = () => {
    let textInput = document.querySelector("#text").value;
    let textOutput = textInput.split(" ")
    let regex = /de/gi

    for (let i = 0; i < textOutput.length; i++) {
        if (regex.test(textOutput.at(i))) {
            textOutput[i] = "het";
        }
    }
    textOutput = textOutput.join(" ")
    let p = document.querySelector('#output');
    p.innerHTML = textOutput;
}


window.addEventListener("load", setup);