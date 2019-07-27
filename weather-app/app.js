const request = require('request')

const url = 'https://api.darksky.net/forecast/72d02ad80c5e7fd33e40c2b50bc78c2a/37.8267,-122.4233'
request({ url: url, json: true }, (error, response) => {
    let temp = response.body.currently.temperature
    let precip = response.body.currently.precipProbability
    console.log(response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
})
