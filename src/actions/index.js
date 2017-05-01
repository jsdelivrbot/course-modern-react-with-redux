import axios from 'axios';

const API_KEY = '5834dbb3197d5d03e4e560aef3556ca2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Use a constant to avoid isssues with copy pasting strings
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather( city ) {
  const url = `${ROOT_URL}&q=${city},us`;

  //Request is a promise that is processed by ReduxPromise middleware
  const request = axios.get( url );

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
