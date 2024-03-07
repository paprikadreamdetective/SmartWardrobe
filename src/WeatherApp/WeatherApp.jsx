import React, {useState} from "react";
import './WeatherApp.css'

import search_icon from '../assets/search.png'
import clear_icon from '../assets/clear.png'
import cloud_icon from '../assets/cloud.png'
import drizzle_icon from '../assets/drizzle.png'
import rain_icon from '../assets/rain.png'
import snow_icon from '../assets/snow.png'
import wind_icon from '../assets/wind.png'
import humidity_icon from '../assets/humidity.png'

const WeatherApp = () => {
    let api = {
        key: "de5592c2993d510b9e18d50fc4b37211",
        base: "https://api.openweathermap.org/data/2.5/",
        query: "Chicago"
    }
    const [search, setSearch] = useState("");

    const [weather, setWeather] = useState({});

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
      // searchPressed();
    return(
        
        <div className="container-weather" onClick={searchPressed}>
            <div className="weather-image">
                <img src={cloud_icon} alt="" />
            </div>
            <div className="info">
              <div className="weather-temp"> 
                  {weather.main && weather.main.temp} °C
              </div>
              <div className="weather-location">
                  {weather.name}
              </div>
            </div>
        </div>
    )
}

export default WeatherApp;