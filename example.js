const FootballApi = require('./index.js');
const fb = new FootballApi('API_KEY')

fb.getCompetitions('TIER_ONE', (err, response, body) => {
    console.log(body)
})