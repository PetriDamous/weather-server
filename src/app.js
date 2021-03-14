// Node modules
const path = require('path');
const express = require('express');
const hbs = require('hbs');

// Import routers
const weatherRouter = require('./routers/weather-router');
const aboutRouter = require('./routers/about-router');
const helpRouter = require('./routers/help-router');


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
app.use(weatherRouter);
app.use(aboutRouter);
app.use(helpRouter);


app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Page Not Found',
    });
});

app.listen(PORT, () => {
    console.log('Server is running');
});