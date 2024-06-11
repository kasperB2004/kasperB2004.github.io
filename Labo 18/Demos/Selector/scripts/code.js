const setup = () => {
    let lstPar = document.querySelectorAll(" #myDIV >.color");

    for (let i = 0; i < lstPar.length; i++) {


        lstPar[i].addEventListener("click", changeDiv)
    }

}


const change = (e) => {

    e.target.className = "colorPar";

}

const changeDiv = (event) => {

    event.target.className = "colorParDiv";

}


window.addEventListener("load", setup);