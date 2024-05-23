const apiKey = "4158506c15e6ab18914ce7f019c083aa";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".searchBarMain input");
const searchButton = document.querySelector(".searchBarMain img");
const weatherIcon = document.querySelector(".weatherIcon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=4158506c15e6ab18914ce7f019c083aa');
    var data = await response.json();

    console.log(data);

    document.querySelector(".location").innerHTML = data.name;
    document.querySelector(".tempText").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidityText").innerHTML = data.main.humidity + "%";
    document.querySelector(".windSpeedText").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".descriptionText").innerHTML = data.weather[0].description;
    document.querySelector(".longitudeText").innerHTML = "Lon: " + data.coord.lon;
    document.querySelector(".latitudeText").innerHTML = "Lat " + data.coord.lat;

    // IMG
    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds-svgrepo-com.png"
    }
    else if(data.weather[0].main == "Clear") {
        weatherIcon.src = "img/sun-svgrepo-com.png"
    }
    else if(data.weather[0].main == "Rain") {
        weatherIcon.src = "img/cloud-waterdrops-svgrepo-com-2.png"
    }
    else if(data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/cloud-snowfall-minimalistic-svgrepo-com.png"
    }
    else if(data.weather[0].main == "Mist") {
        weatherIcon.src = "img/fog-svgrepo-com.png"
    }
}

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

checkWeather();