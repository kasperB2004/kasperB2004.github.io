const setup = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", toonTrigram);
}

const printTigrams = () => {
    let textInput = document.querySelector("#text").value;
    let result = "";
    let outputResult = "";
    for (let i = 0; i < (textInput.length - 2); i++) {
        result = textInput.slice(i, i + 3);
        console.log(result);
        outputResult += " ";
        outputResult += result
    }
    outputResult = outputResult.replaceAll(" ", "<br>")
    let p = document.querySelector('#output');
    p.innerHTML = outputResult;
}
window.addEventListener('load', setup);


const toonTrigram = () => {
    let textInput = document.querySelector("#text").value;
    let p = document.querySelector('#output');
    let output = "";
    let trigrams = getTrigames(textInput);
    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>" + trigrams[i] + "</li>"
    }
    p.innerHTML = output
}


const getTrigames = (tekst) => {
    let result = [];
    let trigram;
    for (let i = 0; i <= tekst.length - 3; i++) {
        trigram = tekst.slice(i, i + 3);
        result.push(trigram)
    }
    return result;
}