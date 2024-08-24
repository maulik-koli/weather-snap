import React, { useContext } from 'react'

import LoadingBlock from './LoadingBlock.jsx'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'
import { formateTime } from '../helper.js'

export default function Weather() {
  const { weatherForcast } = useContext(WeatherContext)
  const { error, isFetching } = useContext(ErrorFetchingContext)

  const { locationData, currentData } = weatherForcast
  const time = formateTime(currentData.observationTime)

  return (
    <>
      {isFetching && <div className='for-loading' ><LoadingBlock /></div>}
      {!isFetching && 
        <div className='weather'>
          <div className="weather-data cn-1">{locationData.city}</div>
          <div className="weather-data te-2">{currentData.temperature}</div>
          <div className="weather-data de-3">{currentData.descriptions}</div>
          <div className="weather-data ti-4">{time}</div>
          <div className="weather-data lo-5">LOGO</div>
        </div>
      }
    </>
  )
}
