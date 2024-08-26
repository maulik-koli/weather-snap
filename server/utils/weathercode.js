const request = require('request')

const weathercode = (longitude, latitude, place = "", callback) =>{

    const weatherURL = `http://api.weatherstack.com/current?access_key=4bad3f86f9c15babed29a30a88829525&query=${latitude},${longitude}`

    request({ url : weatherURL, json : true }, (error, { body } = {}) =>{
        if(error){
            callback({
                message : "Network error, please check your internet connection.",
                status : 404
            }, undefined)
        }
        else if(body.error){
            callback({
                message : "Unable to find location, please check entered location",
                status : 400
            }, undefined)
        }
        else{
            const weatherData = {
                locationData : {
                    name : body.location.name,
                    latitude,
                    longitude,
                    place,
                    country : body.location.country,
                    time : body.location.localtime,
                },
                currentData : {
                    temperature : body.current.temperature,
                    descriptions :  body.current.weather_descriptions,
                    code : body.current.weather_code,
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
