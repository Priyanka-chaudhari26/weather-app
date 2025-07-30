# Weather App
A Desktop friendly weather application that fetches and displays real-time weather data using the OpenWeatherMap API. Includes dynamic UI with location-based weather, 5-day forecast, hourly forecast and elegant animations for a better user experience.

## Live Link:
https://weatherapp-priyanka.netlify.app/

## Features
-  Search for current weather by city name
-  Displays temperature in Celsius
-  Shows weather description and an icon (e.g., Sunny, Rainy)
-  Error handling for invalid locations or network issues
-  No hourly or 5-day forecast

## Technologies Used
- HTML
- CSS
- JavaScript (Vite + React)
- OpenWeatherMap API

## How to Run the App Locally
### 1. Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
```
This will start the app on http://localhost:5173/ (or similar port shown in terminal).

### API Configuration
You need an API key from OpenWeatherMap.
Create a .env file in the root of your project and add:
```ini
VITE_API_KEY=your_api_key_here
```
## How It Works
- User enters a city name in the input field.
- JavaScript fetches real-time weather data from the OpenWeatherMap API.
- Weather details including temperature, description, and icon are displayed dynamically.
- Proper error messages are shown if the API call fails or the location is invalid.

## API Used
- **OpenWeatherMap API**  
  [https://openweathermap.org/](https://openweathermap.org/)





