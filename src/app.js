const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

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
        name: 'Dimitri Williams'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dimitri Williams'
    });
});

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Dimitri Williams',
        helpTxt: 'Some helpful text.'
    });
});

app.get('/weather', (req, res) => {
    res.send(
        {
            forecast: 'cloudy',
            location: 'Korea'
        }
    );
});

app.get('/about/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Page Not Found'
    });
});

app.get('/weather/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Resource does not exist'
    });
});

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Article Not Found'
    });
});

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page Not Found'
    });
});

app.listen(3000, () => {
    console.log('Server is running');
});