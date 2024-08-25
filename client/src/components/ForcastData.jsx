import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching'
import LoadingBlock from './LoadingBlock'

const ForcastData = () => {
    const { weatherForcast } = useContext(WeatherContext)
    const { currentData } = weatherForcast

    const { isFetching } = useContext(ErrorFetchingContext)

    return (
        <>
            {isFetching && <LoadingBlock />}
            {!isFetching && 
                <div className="side-data">
                    <div className="side-weather-data-m">
                        <div className="side-weather-data">{currentData.windSpeed}</div>
                        <div className="side-weather-data">{currentData.pressure}</div>
                        <div className="side-weather-data">{currentData.uv}</div>
                    </div>
                    <div className="side-weather-data-m">
                        <div className="side-weather-data">{currentData.humidity}</div>
                        <div className="side-weather-data">{currentData.feelsLike}</div>
                        <div className="side-weather-data">{currentData.visibility}</div>
                    </div>
                </div>
            }
        </>
    )
}

export default ForcastData;
