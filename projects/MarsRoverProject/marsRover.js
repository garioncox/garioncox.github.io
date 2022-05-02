let id = "a745957a-af03-45d0-b48c-e7952e09d10f";
let key = "KkniDDjh0TpD0H6ucpTRLpiBHvp2GvidtMIFlWKV";
let urlStub = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000";

window.onload = init;

let app = Vue.createApp({
    data() {
        return {
            images : []
        };

    },
    methods: {
        reset() {
            for(let field of document.querySelectorAll(".form-check-input")) {
                field.checked = false;
            }

            this.images.length = 0;
        },

        getImages() {
            console.log("Retreiving Images...");
            this.images.length = 0;
            checkFields();
        }
    }
}).mount("main");

function init() {
}

function checkFields() {
    for(let field of document.querySelectorAll(".form-check-input")) {
        if (field.checked) {
           queryServer(field.id); 
        }
    }
}

function queryServer(id) {
    fetch(urlStub + "&camera=" + id + "&api_key=" + key)
        .then(response => response.json())
        .then(data => {
            app.images = app.images.concat(data.photos);
        });
}