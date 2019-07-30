const path = require('path')
const express = require('express')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup handlebars engine
app.set('view engine', 'hbs')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Matthew'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Matthew'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Test help message.'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It\'s hot',
        location: 'California'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})