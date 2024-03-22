const changeValues = () => {
    let photo = document.getElementById("imgPhoto");
    //photo.setAttribute("src", "Images/cat.jpg");
    //photo.setAttribute("alt", "cat");
    //photo.classList.add("sizePhoto");
    photo.src = "Images/cat.jpg";
    photo.alt = "cat";
    photo.className = "sizePhoto";
    document.getElementById("txtText").innerText = "School of cats";
}


const setup = () => {
    document.getElementById("imgPhoto").addEventListener("mouseover", changeValues);
}


window.addEventListener("load", setup);