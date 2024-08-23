const request = require('request')

const weathercode = (longitude, latitude, callback) =>{

    const weatherURL = `http://api.weatherstack.com/current?access_key=4bad3f86f9c15babed29a30a88829525&query=${latitude},${longitude}`

    request({ url : weatherURL, json : true }, (error, { body } = {}) =>{
        if(error){
            callback("Internet connetion is not connected", undefined)
        }
        else if(body.error){
            callback("Uable to find location", undefined)
        }
        else{
            weatherData = {
                locationData : {
                    region : body.location.region,
                    country : body.location.country,
                },
                currentData : {
                    temperature : body.current.temperature,
                    descriptions :  body.current.weather_descriptions,
                    code : body.current.weather_code,
                    observationTime : body.current.observation_time,
                    icons : body.current.weather_icons,

                    windSpeed :  body.current.wind_speed,
                    windDir :  body.current.wind_dir,
                    humidity :  body.current.humidity,
                    feelsLike :  body.current.feelslike,
                    pressure :  body.current.pressure,
                    uv :  body.current.uv_index,
                    visibility :  body.current.visibility,
                }
            } 
            callback(undefined , weatherData)
        }
    })
}

module.exports = weathercode
