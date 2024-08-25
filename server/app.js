const express = require('express')
const cors = require('cors')
const geocode = require('./utils/geocode.js')
const weathercode = require('./utils/weathercode.js')

const app = express()

app.use(cors())
const port = 3000

app.get('/weather', async (req, res) => {
    if(!req.query.location){
        return res.send({
            error: "Please enter a location and try again."
        })
    }

    const location = req.query.location
    
    geocode(location, (error, { longitude , latitude, place } = {}) => {
        if(error){
            return res.send({ error: error })
        }

        weathercode(longitude, latitude, place, (error, weatherData = {}) => {
            if(error){
                return res.send({ error: error })
            }
    
            res.status(200).send(weatherData)
        })
    })
})

app.get('/cords', (req, res) => {
    if(!req.query.lat || !req.query.lng){
        return res.send({
            error: "Requested address don't match"
        })
    }

    const lng = req.query.lng
    const lat = req.query.lat
    
    weathercode(lng, lat, "" , (error, weatherData = {}) => {
        if(error){
            return res.send({ error: error })
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