const request = require('request')

const geocode = (location, callback) => {
    let reqLocation = encodeURIComponent(location)

    const mapURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${reqLocation}.json?access_token=pk.eyJ1IjoibWF1bGlrLWtvbGkiLCJhIjoiY20wNzFyOTd1MHF4NzJyczl3OWFtMWgwZCJ9.Cw3-kVqw-d0LqP_0JETRIw&limit=1&language=en`

    request({ url : mapURL, json : true }, (error, { body } = {}) => {
        if(error){
            callback("Internet connetion is not connected", undefined)
        }
        else if(body.features === 0){
            callback("Unable to find location", undefined)
        }
        else{
            const mapData = {
                longitude : body.features[0].center[0],
                latitude : body.features[0].center[1],
                place : body.features[0].place_name,
            }
            callback(undefined , mapData)
        }
    })
}

module.exports = geocode
