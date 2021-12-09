const API_KEY = '81f87d70a371bff2fbfda6f286709d8f';

function geoOk(position) {
    console.log(position);
    console.log(position.coords.name);
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`

    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function geoError() {
    alert("Can't find you.")
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);