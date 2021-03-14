const express = require('express');
const router = new express.Router();

const getLocation  = require('../utilis/location');
const getWeather = require('../utilis/weather');

router.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        "isHome": true
    });
});

router.get('/weather', (req, res) => {
    const {address} = req.query;

    if (!address) {
        return res.send({
            error: 'Please enter an address'
        });
    }
    
    getLocation(address, (error, addressData=undefined) => {

        // console.log(locationData)
        if (error) {
            return res.send({error});
        }
    
        getWeather(addressData, (error, weatherData=undefined) => {
            if (error) {
                return res.send({error});
            }
    
            res.send({
            address,
            ...weatherData
            });
        }); 
    });
});

router.get('/weather/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Resource does not exist',
    });
});

module.exports = router;