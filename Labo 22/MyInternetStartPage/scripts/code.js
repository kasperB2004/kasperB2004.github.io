const go = () => {

    let regexPattern2 = /([gyti])\s(.+)/;
    let regexPattern1 = /^\/.*/;

    let query = document.getElementById("txtQuery").value;
    if (!regexPattern1.test(query)) {
        window.alert("invalid command");
        return;
    }
    if (!regexPattern2.test(query)) {
        window.alert("unkown command prefix");
        return;
    }

    let question = query.split(regexPattern2);


    switch (question[1]) {
        case "y" :
            handle("Youtube", question[2], "https://www.youtube.com/results?search_query=" + encodeURIComponent(question[2]));
            break;
        case "g"  :
            handle("Google", question[2], "https://www.google.com/search?q=" + encodeURIComponent(question[2]));
            break;
        case "i":
            handle("Instagram", question[2], "https://www.instagram.com/explore/tags/" + encodeURIComponent(question[2]) + "/");
            break;
        case "t" :
            handle("Twitter", question[2], "https://twitter.com/hashtag/" + encodeURIComponent(question[2]));
            break;
        default :
            window.alert("unkown command prefix");
            break;
    }
}

const handle = (site, query, url) => {
    window.open(url, "_blank");
    createCard(site, query, url);
    store(site, query, url)
}

const store = (site, query, url) => {

    let searches = JSON.parse(localStorage.getItem("KasperB2004.github.io.homepage.searches")) || [];
    let newSearch = {
        site: site,
        query: query,
        url: url
    };
    searches.push(newSearch);
    localStorage.setItem("KasperB2004.github.io.homepage.searches", JSON.stringify(searches));
};

const createCard = (site, query, url) => {

    let cardDiv = document.createElement("div");
    cardDiv.classList.add("col-md-4");
    cardDiv.classList.add("pt-4");
    let card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(site);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.classList.add("h5");
    cardTitle.textContent = site;

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.textContent = query;

    let btn = document.createElement("a");
    btn.classList.add("btn", "btn-primary");
    btn.textContent = "Go!";
    btn.href = url;
    btn.target = "_blank";

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btn);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    let container = document.querySelector("#resultContainer > .row");
    let firstChild = container.firstChild;
    container.insertBefore(cardDiv, firstChild);

}

const clear = () => {
    localStorage.setItem("KasperB2004.github.io.homepage.searches", JSON.stringify([]));
    document.querySelector("#resultContainer > .row").innerHTML = "";

}

const restore = () => {
    let searches = JSON.parse(localStorage.getItem("KasperB2004.github.io.homepage.searches"));
    if (searches != null) {
        for (let i = 0; i < searches.length; i++) {
            createCard(searches[i].site, searches[i].query, searches[i].url);
        }
    }
}

const setup = () => {
    document.getElementById("btnGo").addEventListener("click", go);
    document.getElementById("btnClear").addEventListener("click", clear);
    restore()
}
window.addEventListener("load", setup);