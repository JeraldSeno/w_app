import Search from "./components/Search";
import CurrentWeather from "./components/Current-Weather";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import { useState } from "react";

function App() {
	const [currentWeather, setcurrentWeather] = useState(null);

	const [forecast, setforecast] = useState(null);

	const handleOnSearchChange = (searchData) => {
		const [lat, lon] = searchData.value.split();

		const currentWeatherFetch = fetch(
			`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		const forecastFetch = fetch(
			`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
		);

		Promise.all([currentWeatherFetch, forecastFetch]).then(async (response) => {
			const weatherResponse = await response[0].json();
			const forecastResponse = await response[1].json();

      setcurrentWeather({city: searchData.label, ...weatherResponse});
      setforecast({city: searchData.label, ...forecastResponse});
		})
      .catch((err) => console.log(err));
	};

  console.log(currentWeather);
  console.log(forecast);

	return (
		<>
			<div className="max-w-full m-2 mx-2-auto">
				<Search onSearchChange={handleOnSearchChange} />
				<CurrentWeather />
			</div>
		</>
	);
}

export default App;
