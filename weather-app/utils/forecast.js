const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/72d02ad80c5e7fd33e40c2b50bc78c2a/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location.', undefined)
        } else {
            let temp = body.currently.temperature
            let precip = body.currently.precipProbability
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + temp + ' degrees out. There is a ' + precip + '% chance of rain.')
        }
    })
}

module.exports = forecast