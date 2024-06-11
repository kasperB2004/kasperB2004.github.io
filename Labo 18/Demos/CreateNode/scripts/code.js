const setup = () => {
    let element = document.createElement("P");
    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar")

    console.log(element.className);

    let textNode = document.createTextNode("Hello world!");
    element.appendChild(textNode);
    document.querySelector("#myDIV").appendChild(element);
}
window.addEventListener("load", setup);