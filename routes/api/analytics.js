const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Hello, Analytics API'));

//Overview API
router.get('/ov/barometer', (req, res) => {
    res.json({});
})

router.get('/ov/mark_cap', (req, res) => {
    res.json({});
})

router.get('/ov/holder', (req, res) => {
    res.json({});
})

router.get('/ov/category', (req, res) => {
    res.json({});
})

router.get('/ov/coll_dist', (req, res) => {
    res.json({});
})

router.get('/ov/top_coll', (req, res) => {
    res.json({});
})

//Top collections Tab
router.get('/tc/get_all', (req, res) => {
    res.json({});
});


//Newly Added Tab
router.get('/new/get_all', (req, res) => {
    res.json({});
});


//Top Mints Tab
router.get('/top_mints/get_all', (req, res) => {
    res.json({});
});


//Top Sales Tab
router.get('/top_sales/get_all', (req, res) => {
    res.json({});
});

//Leaderboard Tab
router.get('/leaderboard/get_all', (req, res) => {
    res.json({});
});

//marketplace Tab
router.get('/marketplace/get_all', (req, res) => {
    res.json({});
});
module.exports = router;
