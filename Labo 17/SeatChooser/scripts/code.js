const setup = () => {
    let seatrows = [
        [0, 1, 0, 1, 1, 1, 0, 1, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 0],
        [1, 1, 1, 0, 1, 0, 0, 1, 0]
    ];
    let seatContainer = document.querySelector('#seatContainer');
    let seats = "";
    for (let i = 0; i < seatrows.length; i++) {
        let seatrow = seatrows[i];
        for (let j = 0; j < seatrow.length; j++) {
            seats += "<p>" + seatrow[j] + "</p>";
        }
        seats += "<br>";
    }
    seatContainer.innerHTML = seats;
}

window.addEventListener("load", setup);
