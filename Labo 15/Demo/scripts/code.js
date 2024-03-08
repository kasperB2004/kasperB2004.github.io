const setup = () => {
    let btnTry = document.getElementById("btnTry");

    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", MouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    document.getElementById("btnContent").addEventListener("click", changeContent);
}


//mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}
const onClick = () => {
    document.getElementById("event").innerHTML += "Clicked!<br>";
}
const MouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";
}
const withoutBullets = () => {
    console.o
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //eerstr
        // listItems[i].style.listStyle="none";
        // listItems[i].style.backgroundColor="red";
        // 2de manier
        //  listItems[i].className = "listItemsStyleNone colorRed"
        //3de
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.add("colorRed");
        listItems[i].classList.add("listItemsStyleNone");
        console.log("output " + listItems[i].className)
    }
}

const withBullets = () => {
    let listItems = document.getElementsByTagName("li");
    for (let i = 0; i < listItems.length; i++) {
        //  listItems[i].style.listStyle="";
        // listItems[i].style.backgroundColor="";
        // listItems[i].className = "listItemsStyleBullets colorWhite"

        listItems[i].classList.remove("colorRed");
        listItems[i].classList.remove("listItemsStyleNone");

        listItems[i].classList.add("colorWhite");
        listItems[i].classList.add("listItemsStyleDisc");

        console.log("output " + listItems[i].className)
    }
}

const changeContent = () => {
    document.getElementById("innerHTML").innerHTML = "<a href='https://www.formula1.com/'>f1<a/>"
    document.getElementById("textContent").textContent = "<a href='https://www.formula1.com/'>f1<a/>"
}


window.addEventListener("load", setup);
