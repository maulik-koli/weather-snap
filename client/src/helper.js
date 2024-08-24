export const INITIAL_WEATHER_DATA = {
    locationData : {
        name : "",
        latitude : 0.0,
        longitude: 0.0,
        place : "",
        country : "",
        time : ""
    },
    currentData : {
        temperature : 0,
        descriptions :  "",
        code : 0,
        icons : "",
  
        windSpeed :  0,
        windDir :  0,
        humidity : 0,
        feelsLike : 0,
        pressure :  0,
        uv :  0,
        visibility :  0,
    }
}


export const formateTime = (time) => {
    const date = new Date(time * 1000)
    let h = date.getHours()
    let m = date.getHours()
    let ampm = h >= 12 ? 'PM' : 'AM'

    h %= 12
    h = h ? h : 12;
    let min = m < 10 ? '0' + m : m

    return `${h} : ${min} ${ampm}`
}
