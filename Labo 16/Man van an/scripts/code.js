const setup = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", countAn);
}

const countAn = () => {
    let text = "De man van An geeft geen hand aan ambetante verwanten";
    let currentindex = 0;
    let count = 0;
    while (currentindex > -1) {
        currentindex = text.indexOf("an");
        text = text.substring((currentindex + 2), text.length)
        if (currentindex > -1) {
            count++;
        }
    }
    console.log(count)

}


window.addEventListener("load", setup);