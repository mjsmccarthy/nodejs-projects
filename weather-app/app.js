const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const location = process.argv[2]

if (location) {
    geocode(location, (error, { latitude, longitude, location }) => {
        if (error) {
            return console.log('Error:', error)
        } 
        
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log('Error:', error)
            }

            console.log(location)
            console.log(forecastData)
        }) 
    })
} else {
    console.log('Please provide a location.')
}
