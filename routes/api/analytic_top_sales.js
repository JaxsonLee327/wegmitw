const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.send('Hello, Home API'));

router.get('/', (req, res) => {
    res.json({});
});


module.exports = router;
