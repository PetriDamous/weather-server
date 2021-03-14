const express = require('express');
const router = new express.Router();

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        "isAbout": true
    });
});

router.get('/about/*', (req, res) => {
    res.render('404', {
        title: 404,
        error: 'Page Not Found',
    });
});

module.exports = router;