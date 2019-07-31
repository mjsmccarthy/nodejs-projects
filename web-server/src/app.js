const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Matthew McCarthy'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Matthew McCarthy'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        message: 'Test help message.',
        title: 'Help',
        name: 'Matthew McCarthy'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is hot',
        location: 'California'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found.',
        name: 'Matthew McCarthy'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found.',
        name: 'Matthew McCarthy'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})