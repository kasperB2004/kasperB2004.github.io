const setup = () => {
    for (let i = 1; i < 6; i++) {
        console.log("*".repeat(i));
    }
    tree(6)
}

const tree = (n) => {
    for (let i = 1; i < n; i++) {
        let branch = "*".repeat(i);
        console.log(padLeft(branch, n) + "*" + branch);
    }
}

const padLeft = (s, n) => {
    return s.padStart(n, ' ');
};


window.addEventListener("load", setup);