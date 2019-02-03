const request = require('request');
const API_URL = 'https://api.football-data.org';

class FootballAPi {
    constructor(key, plan) {
        this.api = key,
        this.plan = plan
    }

    fetch(path) {
        return {
            url: `${API_URL}${path}`,
            headers: {
                'X-Auth-Token': this.api,
                'Access-Control-Allow-Methods': "GET",
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Headers': "x-auth-token, x-response-control",
                'Content-Length': 0
            },
            json: true
        }
    } 

    competitions(callback) {
        return request(this.fetch(`/v2/competitions/?plan=${this.plan}`), callback)
    }

    competition(id, callback) {
        return request(this.fetch(`/v2/competitions/${id}`), callback)
    }

    teams(id, season, callback) {
        return request(this.fetch(`/v2/competitions/${id}/teams/?season=${season}`), callback)
    }

    standings(id, callback) {
        return request(this.fetch(`/v2/competitions/${id}/standings`), callback)
    }

    matchCompetition(id, season, callback) {
        return request(this.fetch(`/v2/competitions/${id}/matches/?season=${season}`), callback)
    }

    scorersCompetition(id, limit, callback) {
        return request(this.fetch(`/v2/competitions/${id}/scorers/?limit=${limit}`), callback)
    }

    matchCompetitions(idCompetitions, callback) {
        const competitionsIds = idCompetitions.join(',')
        return request(this.fetch(`/v2/matches/?competitions=${competitionsIds}`), callback)
    }

    match(id, callback) {
        return request(this.fetch(`/v2/matches/${id}`), callback)
    }

    matchTeam(id, from, to, callback) {
        return request(this.fetch(`/v2/teams/${id}/matches/?dateFrom=${from}?dateTo=${to}`))
    }

    team(id, callback) {
        return request(this.fetch(`/v2/teams/${id}`), callback)
    }

    areas(callback) {
        return request(this.fetch(`/v2/areas/`), callback)
    }

    area(id, callback) {
        return request(this.fetch(`/v2/areas/${id}`), callback)
    }

    player(id, callback) {
        return request(this.fetch(`/v2/players/${id}`), callback)
    }

    playerMatches(id, from, to, idCompetitions, callback) {
        const competitionsIds = idCompetitions.join(',')
        return request(this.fetch(`/v2/players/${id}/matches/?dateFrom=${from}?dateTo=${to}?competitions=${competitionsIds}`), callback)
    }
}

module.exports = FootballAPi;