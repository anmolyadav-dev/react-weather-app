const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=ca498de6b8314b64b1e92500240802";

export const getWeatherData = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);
  return await response.json();
};
export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
};
