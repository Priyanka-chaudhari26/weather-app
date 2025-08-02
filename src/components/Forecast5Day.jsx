import "../styles/Forecast5day.css";

function Forecast5Day({ forecastData }) {
  if (!forecastData || !forecastData.list) return null;

  const dailyData = {};

  forecastData.list.forEach((reading) => {
    const date = reading.dt_txt.split(" ")[0];
    if (!dailyData[date]) {
      dailyData[date] = [];
    }
    dailyData[date].push(reading);
  });

  const dailyForecast = Object.entries(dailyData).map(([date, readings]) => {
    const temps = readings.map((r) => r.main.temp);
    const icons = readings.map((r) => r.weather[0].icon);

    return {
      date,
      temp_min: Math.min(...temps).toFixed(1),
      temp_max: Math.max(...temps).toFixed(1),
      icon: icons[Math.floor(icons.length / 2)],
    };
  });

  return (
    <div className="forecast-panel">
      <h2>5-Day Forecast</h2>
      <div className="forecast-list">
        {dailyForecast.map((day, index) => (
          <div key={index} className="forecast-item">
            <p>
              {new Date(day.date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>
            <img
              src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
              alt="Weather icon"
              className="forecast-icon"
            />
            <p>
              {day.temp_max}°C / {day.temp_min}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast5Day;
