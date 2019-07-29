const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/72d02ad80c5e7fd33e40c2b50bc78c2a/' + latitude + ',' + longitude

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location.', undefined)
        } else {
            let temp = response.body.currently.temperature
            let precip = response.body.currently.precipProbability
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
        }
    })
}

module.exports = forecast