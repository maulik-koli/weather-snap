const express = require('express')
const cors = require('cors')
const geocode = require('./utils/geocode.js')
const weathercode = require('./utils/weathercode.js')

const app = express()

app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send("I am just aguy who is hero for fun")
})

app.get('/weather', (req, res) => {
    if(!req.query.location){
        return res.send({
            error: "Requested address don't match"
        })
    }

    // const location = req.query.location

    // geocode(location, (error, { longitude , latitude, place } = {}) => {
    //     if(error){
    //         return res.send({ error: error })
    //     }

    //     weathercode(longitude, latitude, (error, weatherData = {}) => {
    //         if(error){
    //             return res.send({ error: error })
    //         }
    
    //         res.status(200).send(weatherData)
    //     })
    // })
})

app.get('/test', (req, res) => {
    res.send({
        forcast : "boobs"
    })
})

app.listen(port, () => {
    console.log("runnig..." , port)
})