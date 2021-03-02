// Node modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Our modules
const getLocation  = require('./utilis/location');
const getWeather = require('./utilis/weather');

// Creates instance of express
const app = express();

const PORT = process.env.PORT || 3000;

// Define paths for Express config
const publicPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and vies location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

// Static assets directory
app.use(express.static(publicPath));

// Routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dimitri Williams',
        "isHome": true
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Dimitri Williams',
        "isAbout": true
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Dimitri Williams',
        helpTxt: 'Some helpful text.',
        "isHelp": true
    });
});

app.get('/weather', (req, res) => {
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

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Page Not Found',
    });
});

app.get('/weather/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Resource does not exist',
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Article Not Found',
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page Not Found',
    });
});

app.listen(PORT, () => {
    console.log('Server is running');
});