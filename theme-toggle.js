let hasClicked = false;
document.querySelector(".container").addEventListener("click", function () {
    if (!hasClicked) {
        alert("You found my javascript!");
        hasClicked = true;
    }
});

let altStyles = false;
document.querySelector("#theme-toggle").addEventListener("click", function () {
    if (!altStyles) {
        document.querySelector("#theme").href = "altstyles.css";
        altStyles = true;
    }

    else {
        document.querySelector("#theme").href = "styles.css";
        altStyles = false;
    }
});