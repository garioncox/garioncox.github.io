let altStyles = false;
document.querySelector("#theme-toggle").addEventListener("click", function () {
    if (!altStyles) {
        document.querySelector("#theme").href = "/altstyles.css";
        altStyles = true;
    }

    else {
        document.querySelector("#theme").href = "/styles.css";
        altStyles = false;
    }
});