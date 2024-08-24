export const INITIAL_WEATHER_DATA = {
    locationData : {
      region : "",
      country : "",
      city : ""
    },
    currentData : {
        temperature : 0,
        descriptions :  "",
        code : 0,
        observationTime : "",
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
    const h = date.getHours()
    const m = date.getHours()
    const ampm = hours >= 12 ? 'PM' : 'AM'

    h %= 12
    h = h ? h : 12;
    const min = m < 10 ? '0' + m : m

    return `${h} : ${min} ${ampm}`
}
