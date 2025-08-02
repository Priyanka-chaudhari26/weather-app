import { useState } from 'react'
import "../styles/SearchBar.css"


function SearchBar({ onWeatherFetched,onForecastFetched, onError }) {
  const [city, setCity] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;

  const fetchWeather = async () => {
    if (city.trim() === "") {
      onError("Please enter a city name");
      onWeatherFetched(null);
      onForecastFetched([]);
      return;
    }

    try {
      const weatherResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }
      const weatherData  = await weatherResponse.json();
      console.log("weatherData",weatherData)

      const forecastResponse = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!forecastResponse.ok) {
        throw new Error("Forecast not available");
      }
      const forecastData = await forecastResponse.json();
      console.log("forecast",forecastData)

      onWeatherFetched(weatherData );   
      onForecastFetched(forecastData); 
      onError("");              
    } catch (err) {
      onError(err.message);     
      onWeatherFetched(null);   
      onForecastFetched([]);  
    }
  };

  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        
      />
      <button
      className="search-button"
        onClick={fetchWeather}
        
      >
        Get Weather
      </button>
    </div>
  );
}

export default SearchBar;
