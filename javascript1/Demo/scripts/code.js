const setup = () => {

    document.getElementById("lblCursus").addEventListener("mouseover", change);
    document.getElementById("btnSend").addEventListener("click", show);

}

const show = () => {
    let txtName = document.getElementById("txtName");
    if (txtName.value != "") {
        alert("jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);
        console.log(`jouw naam is ${txtName.value}`);
    } else {
        alert("gelieve jouw naam in te vullen");
    }

}

const change = () => {
    document.getElementById("lblCursus").className = "cursus";
}


window.addEventListener("load", setup);