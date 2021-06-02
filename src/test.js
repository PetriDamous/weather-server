const data = require("./onecall.json");

function jsonData(data) {
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

  const { description: currentDescrip, icon: currentIcon } = currentWeather[0];

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
}

// https://www.freecodecamp.org/news/how-to-create-a-react-app-with-a-node-backend-the-complete-guide/
jsonData(data);
