const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Welcome to the Weather App');
});

// Weather API endpoint
app.post('/getWeather', async (req, res) => {
  const { cities } = req.body;

  try {
    const weatherData = await getWeatherData(cities);
    res.json({ weather: weatherData });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// fetch weather data for multiple cities
async function getWeatherData(cities) {
  const apiKey = '44ab7136e01fa932aaffb46016547be6';
  const promises = cities.map(city =>
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  );

  const responses = await Promise.all(promises);
  const weatherData = {};

  responses.forEach((response, index) => {
    const city = cities[index];
    const temperatureKelvin = response.data.main.temp;
    const temperatureCelsius = temperatureKelvin - 273.15;
    weatherData[city] = `${temperatureCelsius.toFixed(2)}°C`;
  });

  return weatherData;
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
