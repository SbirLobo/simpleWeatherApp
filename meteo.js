const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

document.addEventListener("DOMContentLoaded", () => {
  // lancer l'appel API
  callAPI();
  // relancer toutes les heures
  setInterval(() => {
    callAPI();
  }, 3600000);
});

// récupérer le nom de la ville depuis le conf.json
function callAPI() {
  fetch("./conf.json")
    .then((response) => response.json())
    .then((data) => {
      findApiData(data.city.name);
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors du chargement de la variable",
        error
      );
    });
}

// récupérer les données météao de la ville depuis l'API
function findApiData(city) {
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=fr&appid=${API_KEY}&units=metric`;
  fetch(API)
    .then((response) => response.json())
    .then((data) => {
      showResults(data);
    })
    .catch((error) => {
      console.error(
        "Une erreur s'est produite lors du chargement de l'API",
        error
      );
    });
}

// gestion du DOM
function showResults(data) {
  const city = document.getElementById("city");
  const temp = document.getElementById("temp");
  const tempMin = document.getElementById("tempMin");
  const tempMax = document.getElementById("tempMax");
  const humidity = document.getElementById("humidity");
  const description = document.getElementById("description");
  ;const weatherIcon = document.getElementById("weatherIcon")

  if (!city || !temp || !tempMin || !tempMax || !humidity || !description || !weatherIcon) {
    console.error(
      "Erreur de reconnaissance du DOM."
    );
    return;
  }
  // effacer le contenu précédent après rechargment de la fonction callAPI
  city.innerHTML = "";
  temp.innerHTML = "";
  tempMin.innerHTML = "";
  tempMax.innerHTML = "";
  humidity.innerHTML = "";
  description.innerHTML = "";
  weatherIcon.innerHTML = "";

  // création du contenu html
  const city_text = document.createElement("h1");
  city_text.textContent = `${data.name} Météo`;
  city.appendChild(city_text);

  temp.textContent = `${data.main.temp}°C`;
  tempMin.textContent = `${data.main.temp_min}`;
  tempMax.textContent = `${data.main.temp_max}`;
  humidity.textContent = `Humidité : ${data.main.humidity}%`;
  description.textContent = `${data.weather[0].description}`

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  weatherIcon.alt = "Icône météo";
}
