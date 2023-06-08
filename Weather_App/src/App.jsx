import { Search, CurrentWeather, Forecast } from "./components/Components";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState, useEffect } from "react";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage on component mount
    const storedCurrentWeather = localStorage.getItem("currentWeather");
    const storedForecast = localStorage.getItem("forecast");

    if (storedCurrentWeather && storedForecast) {
      setCurrentWeather(JSON.parse(storedCurrentWeather));
      setForecast(JSON.parse(storedForecast));
    }
  }, []);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value;

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();

        const currentWeatherData = { city: searchData.label, ...weatherResponse };
        const forecastData = { city: searchData.label, ...forecastResponse };

        // Store data in localStorage
        localStorage.setItem("currentWeather", JSON.stringify(currentWeatherData));
        localStorage.setItem("forecast", JSON.stringify(forecastData));

        setCurrentWeather(currentWeatherData);
        setForecast(forecastData);
      })
      .catch((err) => console.log(err));
  };

  console.log(currentWeather);
  console.log(forecast);

  return (
    <div className="max-w-full m-2 mt-5 mx-auto">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
