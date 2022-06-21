// console log to see if working
console.log('working');

// Create a map objest with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 4);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// // Add a marker for LA
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

// // Another circle
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: '#ffffa1'
// }).addTo(map);

// get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city
cityData.forEach(function(city) {
    console.log(city);
    L.circleMarker(city.location, {
        radius: city.population/100000
    }).bindPopup(
        '<h2>' + city.city + ', ' + city.state + '</h2><hr><h3>Population ' + city.population.toLocaleString() + "</h3>"
    ).addTo(map);
});