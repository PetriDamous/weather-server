const express = require('express');
const router = new express.Router();

router.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        helpTxt: 'Some helpful text.',
        "isHelp": true
    });
});

router.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        error: 'Article Not Found',
    });
});

module.exports = router;