const express = require('express');

const app = express();

app.use('/home', require('./routes/api/home'));
app.use('/a_overview', require('./routes/api/analytic_overview'));
app.use('/a_leaderboard', require('./routes/api/analytic_leaderboard'));
app.use('/a_marketplace', require('./routes/api/analytic_marketplaces'));
app.use('/a_top_coll', require('./routes/api/analytic_top_collections'));
app.use('/a_top_mints', require('./routes/api/analytic_top_mints'));
app.use('/a_top_sales', require('./routes/api/analytic_top_sales'));
app.use('/a_newly_added', require('./routes/api/analytic_newly_added'));

app.get('/', (req, res) => {
    const sdk = require('api')('@reservoirprotocol/v1.0#m912sl4ukawmd');

    sdk.auth('demo-api-key');
    sdk.getCollectionsV4({ sortBy: '1DayVolume', includeTopBid: 'false', limit: '20', Accept: '*/*' })
        .then(res => console.log(res))
        .catch(err => console.error(err));
});

app.listen(5000, () => console.log('Server started on port 5000'));