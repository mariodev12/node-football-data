# Node football-data API

Node football-data is a wrapper to the API football-data.org for NodeJS. Create a FREE TIER API KEY from https://www.football-data.org and start playing around.

### Installation

```sh
$ npm i node-football-api --save
```

### Documentation

Initialize with API and TIER_API
```
const footballData = new FootballApi('API_KEY', 'TIER_API')
```

Get competitions:
```
footballData.competitions((err, response, body) => {
    console.log(body)
})
```

Get competition by id:
```
footballData.competition(2003, (err, response, body) => {
    console.log(body)
})
```

Get all teams by competitions id and season:
```
//id and season
footballData.teams(2003, 2018 (err, response, body) => {
    console.log(body)
})
```

Get a competition standing by competition id:
```
footballData.standings(2003, (err, response, body) => {
    console.log(body)
})
```

More...

### Todos

 - Write Tests

License
----

MIT