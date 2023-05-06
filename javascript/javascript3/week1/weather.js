submitBtn = document.getElementById("submit");
const cityName = document.getElementById("cityName");
const currentDay = document.getElementById("day");
const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");
const cityTemperature = document.getElementById("temperature");
const windSpeed = document.getElementById("speed");
const cityHumidity = document.getElementById("humidity");
const cityPressure = document.getElementById("pressure");
const sunriseTime = document.getElementById("sunrise");
const sunsetTime = document.getElementById("sunset");
const weatherIcon = document.getElementById("icon");
const description = document.getElementById("sky");
const alertTag = document.getElementById("alert");
let response;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const d = new Date();
let day = weekday[d.getDay()];
currentDay.innerText = day;

let date = new Date().toString().split(" ").splice(1, 3).join(" ");
currentDate.innerText = date;

const time = new Date().toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
currentTime.innerText = time;

//make copenhagen as a default city when page loads
let city;
window.onload = function () {
  getWeather("copenhagen");
  cityName.innerText = "Copenhagen";
};

const getWeather = async (city) => {
  try {
    const weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=48a7f671ba9a3cfda31f987bdb0f84fd`
    );
    response = await weatherData.json();
    console.log(response);
    if (response.cod === 200 || city === "copenhagen") {
      const temperature = Math.round(response.main.temp - 273.15);
      cityTemperature.innerText = temperature;
      windSpeed.innerText = Math.round(response.wind.speed * 3.6);
      cityHumidity.innerText = response.main.humidity;
      cityPressure.innerText = response.main.pressure;
      const sunriseValue = response.sys.sunrise;
      sunriseTime.innerText = new Date(sunriseValue * 1000).toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      const sunsetValue = response.sys.sunset;
      sunsetTime.innerText = new Date(sunsetValue * 1000).toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      description.innerText = response.weather[0].description;
      const iconId = response.weather[0].icon;
      weatherIcon.src = `https://openweathermap.org/img/wn/${iconId}@2x.png`;

      lonValue = response.coord.lon;
      latValue = response.coord.lat;

      document.getElementById("city").value = "";
    } else {
      const intervalID = setInterval(() => {
        alertTag.innerText = response.message;
      }, 5);
      setTimeout(() => {
        clearInterval(intervalID);
        alertTag.innerText = "";
      }, 5000);
      cityName.innerText = "Copenhagen";
      document.getElementById("city").value = "";
    }

  } catch (error) {
    console.log(error);
  }

  //google map function
  const initMap = async () => {
    const position = { lat: latValue, lng: lonValue };
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });

    const marker = new AdvancedMarkerView({
      map: map,
      position: position,
      title: "Uluru",
    });
  };

  initMap();
};

const getCity = (event) => {
  event.preventDefault();
  city = document.getElementById("city").value;

  let lonValue;
  let latValue;
  let map;

  getWeather(city);
  
  if(city) {
    cityName.innerText = city[0].toUpperCase() + city.slice(1);
  }
};

submitBtn.addEventListener("click", getCity);



