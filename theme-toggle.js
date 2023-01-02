let altStyles = false;
window.onload = init;

function init() {
    document.querySelector("#theme-toggle").addEventListener("click", function () {
        if (!altStyles) {
            document.querySelector("#theme").href = "/altdefault.css";
            altStyles = true;
        }

        else {
            document.querySelector("#theme").href = "/default.css";
            altStyles = false;
        }
    }); 
}