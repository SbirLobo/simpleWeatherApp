# Application Météo pour les Transports en Commun

![Capture d'écran de l'application](screenshot.png)

## Description

Cette application météo a été développée dans le cadre d'un projet fictif : créer un affichage météo à destination des transports en commun. Elle permet d'afficher la météo actuelle pour une ville donnée, en utilisant les données fournies par l'API openweather.
L'application est conçue pour être intégrée aux écrans d'information dans les stations et dans les véhicules des transports en commun.

## Configuration

Avant d'utiliser l'application, veuillez configurer le fichier `conf.json` avec les informations de la ville souhaitée. Vous pouvez spécifier le nom de la ville pour obtenir les données météo précises. Toutes les villes ne pourront être desservies par le service. Si le nom de la ville ne rendait aucune information, vérifiez l'orthographe. Si le problème persiste, choisissez une ville proche.

Exemple de contenu du fichier `conf.json` :

\```json
{
"city": {
"name": "Paris"
}
}
\```

## Installation

1. Clonez ce dépôt Git sur votre machine locale.
2. Exécutez `npm i` pour installer les dépendances du projet.
3. Configurez le fichier `conf.json` avec les informations de la ville souhaitée.
4. Exécutez `npx vite` pour lancer l'application en mode développement.

## Fonctionnalités

- Affichage de la météo actuelle pour la ville configurée.
- Rafraîchissement automatique des données météo toutes les heures.
- Intégration facile dans les écrans d'information des transports en commun.

## Utilisation

Une fois l'application configurée et lancée dans votre navigateur, vous verrez s'afficher la météo actuelle pour la ville configurée dans le fichier `conf.json`. Les données météo seront automatiquement mises à jour toutes les heures pour afficher les prévisions les plus récentes.
