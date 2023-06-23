const weatherCard = (data) => {
  const city = document.getElementById('card-city');
  const state = document.getElementById('card-state');
  const country = document.getElementById('card-country');
  const temp = document.getElementById('card-temp');
  const img = document.getElementById('card-image');
  city.textContent = data.location.name;
  state.textContent = data.location.region;
  country.textContent = data.location.country;
  temp.textContent = `Temp: ${data.current.temp_c}°`;
  img.src = data.current.condition.icon;
};
const forecastCard = (data) => {
  const forecastDiv = document.getElementById('forecast-div');
  forecastDiv.innerHTML = '';
  const forecast = data.forecast.forecastday;
  forecast.forEach((day) => {
    forecastDiv.innerHTML += `
      <div class='forecast-card'>
      <h1>${day.date}</h1>
      <h3>High ${day.day.maxtemp_f}°</h3>
      <h3>Low ${day.day.mintemp_f}°</h3>
      <img src="${day.day.condition.icon}"/>
      </div>
      `;
  });
};
export { weatherCard, forecastCard };
