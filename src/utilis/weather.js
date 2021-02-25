const { convertPercent } = require('./utility_functions');
const request = require('postman-request');
const { weatherStack } = require('../secret');

// Weather API
const getWeather = ({location, long, lat}, callback) => {
    
    const weatherParams = {
        api: 'http://api.weatherstack.com/current',
        key: `access_key=${weatherStack}`,
        locationName: `query=${encodeURIComponent(location)}`,
        locationCords: `query=${encodeURIComponent(lat)},${encodeURIComponent(long)}`,
        metric: 'units=m',
        scientific: 'units=s',
        fahrenheit: 'units=f'
    };

    const url = `${weatherParams.api}?${weatherParams.key}&${weatherParams.locationCords}&${weatherParams.fahrenheit}`;

    request({url, json: true}, (err, { body: data }) => {
    
        if (err) {
            return callback('Unable to connect to weather service at this time.');        
        } 

        if (data.error) {
            const { error } = data;

            return callback(error.info);
        } else {
            const { current: currentWeather } = data;
    
            const { weather_descriptions: descriptions, temperature: temp,  feelslike,  precip } = currentWeather;
        
            let [des_1, des_2] = descriptions;
        
            let percipPercent = convertPercent(precip);

            const weather = {
                location,
                temp,
                feelslike,
                percipPercent,
                des_1,
                des_2
            };

            return callback(undefined, weather);        
        }       
    });
};

module.exports = getWeather;