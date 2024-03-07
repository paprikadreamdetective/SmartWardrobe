import { returnUpBackOutline } from 'ionicons/icons';
import React, { useState } from 'react';

const api = {
    key: "de5592c2993d510b9e18d50fc4b37211",
    base: "https://api.openweathermap.org/data/2.5/",
    query: "Chicago"
  }

function Weather(){
  const [search, setSearch] = useState("");

  const [weather, setWeather] = useState({});

  // const searchPressed = () => {
  //   fetch(`${api.base}weather?q=${api.query}&units=metric&APPID=${api.key}`)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setWeather(result);
  //       console.log(result);
  //       console.log(result.name + "\n" + result.main.temp)
  //       if (result && result.weather) {
  //         // Acceder a la propiedad `weather` aquí
  //         const weatherData = result.weather;
  //         console.log("\nWeatherData = "+ weatherData[0].main)
  //         // Resto del código
  //       } else {
  //         console.error('La propiedad weather no está definida en la respuesta.');
  //       }
        
  //     })
  // }

  const searchPressed = async () => {
    try {
      const res = await fetch(`${api.base}weather?q=${api.query}&units=metric&APPID=${api.key}`);
      const result = await res.json();
  
      setWeather(result);
      console.log(result);
  
      if (result && result.weather) {
        const weatherData = result.weather;
        console.log("\nWeatherData = " + weatherData[0].main);
      } else {
        console.error('La propiedad weather no está definida en la respuesta.');
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }

  return(
    <div className="weather">
        <h3>Weather App</h3>
        
        <button onClick={searchPressed}>Search</button>

        <p>{weather.name}</p>

        <p>{weather.main && weather.main.temp} °C</p>

        <p>{weather.weather && weather.weather.length > 0 && weather.weather[0].main}</p>

        <p>({weather.weather && weather.weather.length > 0 && weather.weather[0].description})</p>

        <button onClick={searchPressed}>Search</button>

      </div>
  );
}

export default Weather;