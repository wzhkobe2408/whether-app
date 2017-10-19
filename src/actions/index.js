const API_KEY = 'df427929d67da43778518dcccdf5f82d';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(query_city) {
  return (dispatch) => {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+ query_city + ',us&units=metric&appid=' + API_KEY)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        dispatch({
        type:FETCH_WEATHER,
        payload:json
      });
    });
  }
}
