const { convertPercent } = require("./utility_functions");
const request = require("postman-request");
require("dotenv").config();
// const { weatherStack } = require("../../secret");

console.log(process.env.OPEN_WEATHER_API);

// Weather API
const getWeather = ({ location, long, lat }, callback) => {
  const weatherParams = {
    api: "http://api.weatherstack.com/current",
    key: `access_key=${process.env.WEATHER_STACK_API}`,
    locationName: `query=${encodeURIComponent(location)}`,
    locationCords: `query=${encodeURIComponent(lat)},${encodeURIComponent(
      long
    )}`,
    metric: "units=m",
    scientific: "units=s",
    fahrenheit: "units=f",
  };

  const url = `${weatherParams.api}?${weatherParams.key}&${weatherParams.locationCords}&${weatherParams.fahrenheit}`;

  request({ url, json: true }, (err, { body: data }) => {
    if (err) {
      return callback("Unable to connect to weather service at this time.");
    }

    if (data.error) {
      const { error } = data;

      return callback(error.info);
    } else {
      const { current: currentWeather } = data;

      console.log(currentWeather);

      const {
        weather_descriptions: descriptions,
        temperature: temp,
        feelslike,
        precip,
        humidity,
        wind_speed,
      } = currentWeather;

      let [des_1, des_2] = descriptions;

      // let percipPercent = convertPercent(precip);

      const weather = {
        location,
        temp,
        feelslike,
        precip,
        des_1,
        des_2,
        humidity,
        wind_speed,
      };

      return callback(undefined, weather);
    }
  });
};

module.exports = getWeather;
