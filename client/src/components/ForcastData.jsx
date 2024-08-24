import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching'
import LoadingBlock from './LoadingBlock'

const ForcastData = () => {
    const { weatherForcast } = useContext(WeatherContext)
    const { currentData } = weatherForcast

    const { isFetching } = useContext(ErrorFetchingContext)

    return (
        <div className='side-main'>
            {isFetching && <LoadingBlock />}
            {!isFetching && 
                <div className="side-con">
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
        </div>
    )
}

export default ForcastData;
