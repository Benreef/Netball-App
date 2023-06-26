import React, { useEffect, useState } from "react";

const openCageApiKey = '68fcc56172d84d70a53f0ffdf5ca7125'
const openWeatherApiKey = '926218b6475b7ff9384bedaea74d0439'


const WeatherInfo = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleSearch = async () => {
    const searchCity = city || 'Adelaide'; // Default to Adelaide if city is empty
    try {
      const { lat, lng } = await getCoordinates(searchCity);
      const temperatureCelsius = await getTemperature(lat, lng);
      setTemperature(temperatureCelsius);
    } catch (error) {
      alert('No coordinates found for the city');
    }
  };

  async function getCoordinates(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${openCageApiKey}&language=en&pretty=1`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const { geometry, formatted } = data.results[0];
      const { lat, lng } = geometry;
      return { lat, lng, city: formatted };
    } else {
      throw new Error('No coordinates found for the city');
    }
  }

  async function getTemperature(lat, lng) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const temperatureKelvin = data.main.temp;
    const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2);
    return temperatureCelsius;
  }

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter Location"
      />
      <button onClick={handleSearch}>Search</button>
      {temperature && <p>{`${city || 'Adelaide'} is currently ${temperature} °C`}</p>}
    </div>
  );
};

export default WeatherInfo;

// const city = process.argv[2] || 'Adelaide'

// async function getUrl(url) {
//   const response = await fetch(url)
//   return await response.json()
// }

// async function getCoordinates(city) {
//   const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${openCageApiKey}& language=en&pretty=1openWeather`
//   const response = await getUrl(url)

//   const { geometry, formatted } = response.results[0]
//   const { lat, lng } = geometry
//   // console.log(geometry)
//   // console.log(formatted)
//   return { lat, lng, city: formatted }
// }

// async function getTemperature(lat, lng) {
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openWeatherApiKey}`
//   // console.log(url)
//   const response = await getUrl(url)
//   const temperature = response.main.temp
//   return temperature
// }
// // default response is Kelvin and it was easier just to convert to celsius than figure out how to amend the query string. 
// // used the .toFixed() function to ensure the response more readable (13.560000000000002 °C) to (13.56 °C)
// async function response() {
//   const {lat, lng, city: formattedCity} = await getCoordinates(city)
//   const temperatureKelvin = await getTemperature(lat, lng)
//   const temperatureCelsius = (temperatureKelvin - 273.15).toFixed(2)
//   console.log(`${formattedCity} is currently ${temperatureCelsius} °C`)
// }

// response()