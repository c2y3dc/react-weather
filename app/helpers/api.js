var axios = require('axios');

var _baseURL = 'http://api.openweathermap.org/data/2.5/';
var _APIKEY = 'cfab7d23edcaa910754eacb819e92bf5';

// var param = ['weather?q=', '&type=accurate&APPID=', 'forecast/daily?q=', '&cnt=5'];

//http://api.openweathermap.org/data/2.5/weather?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY
//http://api.openweathermap.org/data/2.5/forecast/daily?q=CITY-NAME&type=accurate&APPID=YOUR-API-KEY&cnt=5
// function getWeather(city){
//  return axios.get('http://api.openweathermap.org/'+ param[0] + city + param[1] + id);
// }

function prepRouteParams(queryStringData) {
  return Object.keys(queryStringData)
    .map(function (key) {
      return key + '=' + encodeURIComponent(queryStringData[key]);
    }).join('&');
}

function prepUrl(type, queryStringData) {
  return _baseURL + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData(city) {
  return {
    q: city,
    type: 'accurate',
    APPID: _APIKEY,
    cnt: 5,
  };
}

export function getCurrentWeather(city) {
  //get current weather
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('weather', queryStringData);

  return axios.get(url)
    .then(function (currentWather) {
      return currentWather.data;
    })
  .catch(function (err) {
    console.warn(err);
  });
}

export function getForecast(city) {
  //get forecast
  var queryStringData = getQueryStringData(city);
  var url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url)
    .then(function (weatherForecast) {
      return weatherForecast.data;
    })
    .catch(function (err) {
       console.warn(err);
    });
}
