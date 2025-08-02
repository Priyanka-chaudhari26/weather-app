import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SearchBar from "./components/SearchBar";
import WeatherHub from "./components/WeatherHub";
import MainApp from "./components/MainApp";
import './App.css'
import Forecast5Day from './components/Forecast5Day';
import ForecastHourly from './components/ForecastHourly';

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]); 
  const [error, setError] = useState("");

 
  return (
    // <div style={{ textAlign: "center", marginTop: "50px" }}>
    //   <h1>🌤 Weather App</h1>
    //   {/* <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    //   {weatherData && <WeatherHub weatherData={weatherData} />} */}
    //   <SearchBar
    //     onWeatherFetched={setWeatherData}
    //     onError={setError}
    //   />
      
    //   {error && <p style={{ color: "red" }}>{error}</p>}
    //   {weatherData && <WeatherHub weatherData={weatherData} />}

    // </div>
    // <div className="app-container">
    //   {weatherData ? (
    //     <MainApp weatherData={weatherData} onSearch={fetchWeather}/>
    //   ) : (
    //     <div className="initial-screen">
    //       <h1>Weather App</h1>
    //       {/* <SearchBar
    //         onWeatherFetched={setWeatherData}
    //         onError={setError}
    //       /> */}
    //       {error && <p style={{ color: "red" }}>{error}</p>}
    //     </div>
    //   )}
    // </div>
    <div className="app-container">
      {weatherData && (
      <header className="navbar">
        <h1 className="app-title">Weather App</h1>
        <SearchBar
          onWeatherFetched={setWeatherData}
          onForecastFetched={setForecastData} 
          onError={setError}
        />
      </header>
       )}
      {/* If weather data is loaded, show MainApp */}
      {weatherData ? (
        <>        
          <MainApp
            weatherData={weatherData}
            onWeatherFetched={setWeatherData}
            onForecastFetched={setForecastData} 
            onError={setError}
          />
          {forecastData && forecastData.list && (
            <div className='forecast-wrapper'>
            <Forecast5Day forecastData={forecastData} />
            <ForecastHourly forecastData={forecastData} />
            </div>
          )}

        </>

      ) : (
        <div className="initial-screen">
          <h1>🌤 Weather App</h1>
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


