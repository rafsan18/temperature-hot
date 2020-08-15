const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", function () {
  const searchBoxValue = searchBox.value;
  fetchApi(searchBoxValue);
});

searchBox.addEventListener("keypress", function (e) {
  if (e.keyCode == 13) {
    const searchBoxValue = searchBox.value;

    fetchApi(searchBoxValue);
  }
});

function submitOnEnter() {}

function fetchApi(searchBoxValue) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${searchBoxValue}&units=metric&APPID=6bcba459558e868122b46bc118eeaa8d`
  )
    .then((weather) => weather.json())
    .then(displayResult);
}

function displayResult(data) {
  let city = document.getElementById("city");
  city.innerText = `${data.name}, ${data.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerText = data.main.temp;

  let weatherType = document.getElementById("weather-type");
  weatherType.innerText = data.weather[0].main;

  let weatherTypeIcon = document.getElementById("type-icon");
  weatherTypeIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}
