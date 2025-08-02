import "../styles/WeatherHub.css";
import { SunHorizonIcon, CloudIcon, ThermometerSimpleIcon, SunDimIcon, DropHalfBottomIcon, WindIcon, CloudFogIcon} from "@phosphor-icons/react"

function WeatherHub({ weatherData }) {
  const { main, weather, sys, name, wind, clouds } = weatherData;

  // Convert sunrise/sunset from UNIX timestamp to local time
  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="weather-hub">
      <div className="circle-container">
        <div className="center-temp">
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
            className="weather-icon"
          />
          <h1>{main.temp}°C</h1>
          <h3>{name}</h3>
          <p>Feels like: {main.feels_like}°C</p>
        </div>
    </div>
    <div className="scatter-wrapper">
      <div className="scatter sunrise"><SunHorizonIcon size={28} color="#e2aa32" weight="fill" /> Sunrise <br /> <span align="center">{formatTime(sys.sunrise)}</span></div>
      <div className="scatter sunset"><SunHorizonIcon size={28} color="#eacb5d" weight="duotone" /> Sunset <br /> <span>{formatTime(sys.sunset)}</span></div>
      <div className="scatter humidity"><DropHalfBottomIcon size={28} color="#5d5dea" weight="fill" /> Humidity <br /> <span>{main.humidity}%</span></div>
      <div className="scatter clouds"><CloudIcon size={28} color="#ccc8c7" weight="fill" /> Clouds <br /><span> {clouds.all}%</span></div>
      <div className="scatter wind"><WindIcon size={28} color="#e1e0e0" weight="fill" />  Wind <br /> <span>{wind.speed} m/s</span></div>
      <div className="scatter pressure"><ThermometerSimpleIcon size={28} color="#c82f09" weight="fill" /> Pressure <br /> <span>{main.pressure} hPa</span></div>
      <div className="scatter uv"><SunDimIcon size={28} color="#e1b514" weight="fill" /> UV <br /><span>5</span></div>
      <div className="scatter smoke"><CloudFogIcon size={32} color="#a9a8a2" weight="fill" /> Smoke <br /><span>Moderate</span></div>
      </div>
    </div>
    
  );
}

export default WeatherHub;
