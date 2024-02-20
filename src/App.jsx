import { useEffect, useState } from "react";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Input from "./Components/Input";
import bgImage from "./assets/bg.jpg";
// import "./App.css";
import { RiSearchLine } from "@remixicon/react";
import {
  getWeatherData,
  getWeatherDataForLocation,
} from "./api/getWeatherData";
function App() {
  const [searchCity, setSearchCity] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchCurrentUserLocationData = () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        try {
          const weatherData = await getWeatherDataForLocation(
            position.coords.latitude,
            position.coords.longitude
          );
          setData(weatherData);
          setSearchCity(data.location.name);
          console.log(position);
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      });
    };

    fetchCurrentUserLocationData();
  }, []);

  const handleSearch = async () => {
    try {
      setData(await getWeatherData(searchCity));
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="text-5xl p-10 m-4 text-center font-semibold flex flex-col items-center w-full text-white">
      <h1 className="mb-8">Weather Forecast</h1>

      <div className="mb-5 relative w-fit flex items-center justify-center ">
        <Input
          onChange={(e) => setSearchCity(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <Button
          value={
            <RiSearchLine className="absolute right-5 top-3  text-gray-400 cursor-pointer " />
          }
          onClick={handleSearch}
        />
      </div>
      {data && !data.error && <Card data={data} />}
      {!data && <p className="mt-52 text-white">...Loading data</p>}
    </div>
  );
}

export default App;
