import { weatherCard, forecastCard } from './dom';

const getLocation = async () => {
  navigator.geolocation.getCurrentPosition(showPosition);
};
const showPosition = (position) => {
  // console.log(Number(position.coords.latitude).toFixed(4));
  // console.log(Number(position.coords.longitude).toFixed(4));
  const value = (String(`${Number(position.coords.latitude).toFixed(4)},${Number(position.coords.longitude).toFixed(4)}`));

  return value;
};

const getWeatherData = async (location) => {
  try {
    const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3eea159b0f314aec959165752232006&q=${location}&days=5&aqi=no&alerts=no`);
    const data = await res.json();
    const dataResponse = await data;
    weatherCard(dataResponse);
    forecastCard(dataResponse);
  } catch (err) {
    console.error(err);
  }
};

getWeatherData(getLocation());
getLocation();

export { getWeatherData };
