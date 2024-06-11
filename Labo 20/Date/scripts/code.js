const setup = () => {
    let start = new Date();
    console.log(start);
    console.log(start.getMonth() + 1);
    console.log(start.getFullYear());
    console.log(start.getDay());
    console.log(start.getDate() + "-" +
        (start.getMonth() + 1) + "-" + start.getFullYear() +
        " " + start.getHours() + ":" + start.getMinutes() + ":" + start.getSeconds());
    let datum = new Date(2024, 0, 1)

    console.log(datum)

    let event = new Date();

    console.log("ToString " + event.toString());

    console.log("ToIsoString " + datum.toISOString());

    console.log("ToDateString " + event.toDateString());

    console.log("ToTimeString " + event.toTimeString());


    let birthdate = new Date(2004, 7, 31);
    console.log(birthdate.getDay());


    let millisecondsDiff = start - birthdate.getTime();
    let daysDiff = millisecondsDiff / (1000 * 3600 * 24);
    console.log(daysDiff);


}
window.addEventListener("load", setup);