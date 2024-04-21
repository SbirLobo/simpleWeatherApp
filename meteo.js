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
  fetch("conf.json")
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
  const container = document.getElementById("resultats");
  if (!container) {
    console.error(
      "L'élément avec l'identifiant 'resultats' n'a pas été trouvé."
    );
    return;
  }
  // effacer le contenu précédent après rechargment de la fonction callAPI
  container.innerHTML = "";

  // création du contenu html
  const texte = document.createElement("p");
  texte.textContent = `Ville : ${data.name}, Météo : ${data.weather[0].description}`;
  texte.classList.add("result-text");
  container.appendChild(texte);

  const image = document.createElement("img");
  image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  image.alt = "Icône météo";
  image.classList.add("weather-icon");
  container.appendChild(image);
}
