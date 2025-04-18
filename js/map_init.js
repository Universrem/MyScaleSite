// map_init.js
import { objects } from '../backend/Data/univers_objects.py';  // якщо конвертуєш у JS-модуль
import { countries, cities } from '../backend/Data/geo_data.py';

// Створюємо карту Leaflet у #map-container
const map = L.map('map-container').setView([49.8419, 24.0315], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Приклад: додаємо мітки для міст
cities.forEach(city => {
  // тут city.data[city.data.length-1] — останній рік даних
  const coords = city.coords || [0, 0];  // потрібно додати координати у дані
  L.circle(coords, { radius: 50000 }).bindPopup(`${city.name_ua}: ${city.data.slice(-1)[0].population.value} осіб`)
    .addTo(map);
});
// Аналогічно можна виводити кола для об’єктів Всесвіту тощо
// приклад fetch даних у JS
async function loadData() {
  const [universe, countries, cities] = await Promise.all([
    fetch('data/univers_objects.json').then(r => r.json()),
    fetch('data/geo_countries.json').then(r => r.json()),
    fetch('data/geo_cities.json').then(r => r.json()),
  ]);
  console.log(universe, countries, cities);
  // далі – створюємо кола/мітки на карті
}

loadData();

