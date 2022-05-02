let url;
window.onload = init;


let app = Vue.createApp({
    data() {
        return {
            periods : null
        };

    },
    methods: {
        reset() {
            console.log("reset button activated");
            init();
        }
    }
}).mount("main");

function init() {
    if (navigator.geolocation) {
        console.log("fetching geoLocation");
        navigator.geolocation.getCurrentPosition(getGeolocation, reportError);
    }
    else {
        console.warn("geolocation not supported");
        alert("Geolocation not supported");
        return;
    }
}

function getGeolocation(position) {
    console.log("getting geolocation");
    let myLocation = position.coords.latitude + "," + position.coords.longitude;
    url = "https://api.weather.gov/points/" + myLocation;
    getWeather(url);
}

function getWeather(url) {
    console.log(`fetching weather from ${url}`);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.properties.forecastHourly);
            fetch(data.properties.forecastHourly)
                .then(response => response.json())
                .then(data => {
                    console.log(data.properties.periods.slice(0,12));
                    app.periods = data.properties.periods.slice(0,12);
                });
        });
}

// This is from an example: https://www.w3schools.com/html/html5_geolocation.asp
function reportError(error) {
    console.warn(error);
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Geolocation access denied");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred");
            break;
    }
}

