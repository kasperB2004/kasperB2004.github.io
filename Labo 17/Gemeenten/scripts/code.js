const setup = () => {

    let gemeenten = []
    let gemeente
    let regex = /stop/i
    while (!regex.test(gemeente)) {
        gemeente = prompt("Gelieve gemeente in te vullen:", "");
        if (!regex.test(gemeente)) {
            gemeenten.push(gemeente)
        }
    }
    const compare = (a, b) => {
        return a.localeCompare(b);
    }
    gemeenten.sort(compare);

    let items = " ";
    for (let i = 0; i < gemeenten.length; i++) {
        items += "<option value= \"" + gemeenten[i] + "\">" + gemeenten[i] + "</option>";
    }
    let select = document.querySelector("#gemeenten");
    select.innerHTML = items;

}
window.addEventListener("load", setup);