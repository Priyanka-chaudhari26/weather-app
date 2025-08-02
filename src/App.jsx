import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import SearchBar from "./components/SearchBar";
import WeatherHub from "./components/WeatherHub";
import MainApp from "./components/MainApp";
import "./App.css";
import Forecast5Day from "./components/Forecast5Day";
import ForecastHourly from "./components/ForecastHourly";
import { CloudSunIcon } from "@phosphor-icons/react";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState("");

  return (
    <div className="app-container">
      {weatherData && (
        <header className="navbar">
          <h1 className="app-title">
            <CloudSunIcon size={42} color="#f2eded" weight="duotone" /> Weather
            App
          </h1>
          <SearchBar
            onWeatherFetched={setWeatherData}
            onForecastFetched={setForecastData}
            onError={setError}
          />
        </header>
      )}
      {/* If weather data is loaded, show MainApp */}
      {weatherData ? (
        <div className="weather-data">
          <MainApp
            weatherData={weatherData}
            onWeatherFetched={setWeatherData}
            onForecastFetched={setForecastData}
            onError={setError}
          />
          {forecastData && forecastData.list && (
            <div className="forecast-wrapper">
              <Forecast5Day forecastData={forecastData} />
              <ForecastHourly forecastData={forecastData} />
            </div>
          )}
        </div>
      ) : (
        <div className="initial-screen">
          <h1>
            <CloudSunIcon size={42} color="#f2eded" weight="fill" /> Weather App
          </h1>
          {/* Show SearchBar on initial screen */}
          <SearchBar
            onWeatherFetched={setWeatherData}
            onForecastFetched={setForecastData}
            onError={setError}
          />
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      )}
    </div>
  );
}

export default App;
