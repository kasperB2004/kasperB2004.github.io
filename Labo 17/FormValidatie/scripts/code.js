const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    valideerVoornaam();
    valideerNaam();
    valideerGeboortedatum();
    valideerEmail();
    valideerKinderen();
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtNaam = document.getElementById("txtNaam");
    let txtBirth = document.getElementById("dateBirth");
    let txtEmail = document.getElementById("txtEmail");
    let nrKids = document.getElementById("nrKids");
    let p = document.querySelector('#output');
    if (txtVoornaam.className === "" && txtNaam.className === "" && txtBirth.className === "" &&
        txtEmail.className === "" && nrKids.className !== "invalid") {
        p.innerHTML = 'proficiat!';
    } else {
        p.innerHTML = '';
    }
};

const valideerVoornaam = () => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    let errVoornaam = document.getElementById("errVoornaam");
    let voornaam = txtVoornaam.value.trim();
    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid"; // invalid class instellen
        errVoornaam.innerHTML = "max. 30 karakters";
    } else {
        txtVoornaam.className = ""; // alle classes verwijderen
        errVoornaam.innerHTML = "";
    }
};

const valideerNaam = () => {
    let txtNaam = document.getElementById("txtNaam");
    let errNaam = document.getElementById("errNaam");
    let naam = txtNaam.value.trim();
    if (naam.length > 50) {
        txtNaam.className = "invalid";
        errNaam.innerHTML = "max. 50 karakters";
    } else if (naam === "") {
        txtNaam.className = "invalid";
        errNaam.innerHTML = "verplicht veld";
    } else {
        txtNaam.className = "";
        errNaam.innerHTML = "";
    }
};

const valideerGeboortedatum = () => {
    let txtBirth = document.getElementById("dateBirth");
    let errBirth = document.getElementById("errBirth");
    let date = txtBirth.value.trim();
    if (date.length > 0) {
        date = date.substring(4, 5) + date.substring(7, 8) + date.length;
        console.log(date);
    }
    if (date === "") {
        txtBirth.className = "invalid";
        errBirth.innerHTML = "verplicht veld";
    } else if (date !== "--10") {
        txtBirth.className = "invalid";
        errBirth.innerHTML = "formaat is niet jjjj-mm-dd";
    } else {
        txtBirth.className = "";
        errBirth.innerHTML = "";
    }
};

const valideerEmail = () => {
    let txtEmail = document.getElementById("txtEmail");
    let errEmail = document.getElementById("errEmail");
    let email = txtEmail.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "Verplicht veld";
    } else if (!emailRegex.test(email)) {
        txtEmail.classList.add("invalid");
        errEmail.innerHTML = "Geen geldig e-mailadres";
    } else {
        txtEmail.classList.remove("invalid");
        errEmail.innerHTML = "";
    }
};


const valideerKinderen = () => {
    let nrKids = document.getElementById("nrKids").value;
    let errKinderen = document.getElementById("errKinderen");
    if (nrKids < 0) {
        nrKids.className = "invalid";
        errKinderen.innerHTML = "is geen positief getal";
    } else if (nrKids >= 99) {
        nrKids.className = "invalid";
        errKinderen.innerHTML = "is te vruchtbaar";
    } else {
        nrKids.className = "";
        errKinderen.innerHTML = "";
    }
}

window.addEventListener("load", setup);