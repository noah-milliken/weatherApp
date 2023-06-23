import { getWeatherData } from './api';
import './style.css';

const form = document.getElementById('input-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('user-input');
  console.log(input.value);
  getWeatherData(input.value);
  input.value = '';
});
