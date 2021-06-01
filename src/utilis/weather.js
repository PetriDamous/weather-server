const { convertPercent } = require("./utility_functions");
const request = require("postman-request");
const { weatherStack, openWeather } = require("../../secret");

// Weather API
const getWeather = ({ location, long, lat }, callback) => {
  //   const weatherParams = {
  //     api: "http://api.weatherstack.com/current",
  //     key: `access_key=${weatherStack}`,
  //     locationName: `query=${encodeURIComponent(location)}`,
  //     locationCords: `query=${encodeURIComponent(lat)},${encodeURIComponent(
  //       long
  //     )}`,
  //     metric: "units=m",
  //     scientific: "units=s",
  //     fahrenheit: "units=f",
  //   };

  const lon = long;
  const weatherParams = {
    url: "https://api.openweathermap.org/data/2.5/onecall",
    apiKey: "appid=0d72223d72dc0d1d6027f33894b1c773",
    coords: `lat=${lat}&lon=${lon}`,
    units: "units=imperial",
    exclude: "exclude=minutely,hourly,alerts",
  };

  const url = `${weatherParams.url}?${weatherParams.apiKey}&${weatherParams.coords}&${weatherParams.units}&${weatherParams.exclude}`;

  request({ url, json: true }, (err, { body: data }) => {
    // console.log("dog", data);
    // if (err) {
    //   return callback("Unable to connect to weather service at this time.");
    // }

    // if (data.error) {
    //   const { error } = data;

    //   return callback(error.info);
    // } else {
    //   const { current: currentWeather } = data;

    //   console.log(currentWeather);

    //   return callback(undefined, weather);
    // }

    const { current } = data;

    //   Current weather
    const {
      dt: currentTimeDate,
      temp: currentTemp,
      feels_like: currentFeels,
      humidity: currentHumidity,
      uvi: currentUvi,
      weather: currentWeather,
    } = current;

    const { description: currentDescrip, icon: currentIcon } =
      currentWeather[0];

    const currentData = {
      currentTimeDate,
      currentTemp,
      currentFeels,
      currentHumidity,
      currentUvi,
      currentDescrip,
      currentIcon,
    };

    //   5 day
    const { daily } = data;

    const daysArray = [];

    daily.forEach((day, idx) => {
      if (idx < 5) {
        const { dt, rain } = day;
        const { min: minTemp, max: maxTemp } = day.temp;
        const { icon } = day.weather[0];

        const dayData = {
          dt,
          minTemp,
          maxTemp,
          rain,
          icon,
        };

        daysArray.push(dayData);
      }
    });

    const returnData = {
      current: {
        ...currentData,
      },
      daily: daysArray,
    };

    console.log(returnData);
  });
};

module.exports = getWeather;
