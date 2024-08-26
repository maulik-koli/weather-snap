const express = require('express')
const cors = require('cors')
const geocode = require('./utils/geocode.js')
const weathercode = require('./utils/weathercode.js')

const app = express()

app.use(cors())
const port = 3000

app.get('/weather', async (req, res) => {
    if(!req.query.location){
        return res.status(400).send({
            error: "Please enter a location."
        })
    }

    const location = req.query.location
    
    geocode(location, (error, { longitude , latitude, place } = {}) => {
        if(error){
            return res.status(error.status).send({ error: error.message })
        }

        weathercode(longitude, latitude, place, (error, weatherData = {}) => {
            if(error){
                return res.status(error.status).send({ error: error.message })
            }
    
            res.status(200).send(weatherData)
        })
    })
})

app.get('/cords', (req, res) => {
    if(!req.query.lat || !req.query.lng){
        return res.status(400).send({
            error: "Please check cordinates you give."
        })
    }

    const lng = req.query.lng
    const lat = req.query.lat
    
    weathercode(lng, lat, "" , (error, weatherData = {}) => {
        if(error){
            return res.status(error.status).send({ error: error.message })
        }

        res.status(200).send(weatherData)
    })
})

app.get('*', (req, res) => {
    res.status(404).send({ error: "404 Page Not Found" })
})

app.listen(port, () => {
    console.log("runnig..." , port)
})