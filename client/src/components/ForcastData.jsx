import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'

const ForcastData = () => {
    const { weatherForcast } = useContext(WeatherContext)
    const { currentData } = weatherForcast

    return (
        <div className="side-data">
            <div className="side-weather-data-m">
                <div className="side-weather-data"><span>Wind Speed</span><p>{currentData.windSpeed}</p></div>
                <div className="side-weather-data"><span>Pressure</span><p>{currentData.pressure}</p></div>
                <div className="side-weather-data"><span>UV</span><p>{currentData.uv}</p></div>
            </div>
            <div className="side-weather-data-m">
                <div className="side-weather-data"><span>Humidity</span><p>{currentData.humidity}</p></div>
                <div className="side-weather-data"><span>Feels Like</span><p>{currentData.feelsLike}</p></div>
                <div className="side-weather-data"><span>Visibility</span><p>{currentData.visibility}</p></div>
            </div>
        </div>
    )
}

export default ForcastData;
