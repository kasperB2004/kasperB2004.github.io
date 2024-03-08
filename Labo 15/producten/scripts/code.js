const setup = () => {

    document.getElementById("btnHerbereken").addEventListener("click", herbereken);
}

const herbereken = () => {

    let btws = document.getElementsByClassName("btw");
    let subtotalen = document.getElementsByClassName("subtotaal");
    let prijzen = document.getElementsByClassName("prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let totaal = 0;
    for (let i = 0; i < prijzen.length; i++) {


        let btw = parseInt(btws[i].innerHTML);
        let subtotaal = prijs * aantal + prijs * aantal * btw / 100;
        let prijs = parseInt(prijzen[i].innerHTML);
        let aantal = parseInt(aantallen[i].value);
        subtotalen[i].textContent = subtotaal.toFixed(2).replace(".", ",") + " Eur";
        totaal += subtotaal;
        document.getElementById("totaal").textContent = totaal.toLocaleString("nl-BE") + " Eur";
    }
}
window.addEventListener("load", setup);