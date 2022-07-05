const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('Hello, Home API'));

router.get('/get_top_markets', (req, res) => {
    require("got")
        .get("https://data.messari.io/api/v1/markets")
        .json()
        .then(response => {
            console.log(response);
            res.json(response);
        });
});


module.exports = router;
