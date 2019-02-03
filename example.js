const FootballApi = require('./index.js');
const config = require('./config.js');

const footballData = new FootballApi(config.API_KEY, 'TIER_ONE')

footballData.competitions((err, response, body) => {
    console.log(body)
})