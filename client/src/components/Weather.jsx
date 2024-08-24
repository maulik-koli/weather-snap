import React, { useContext, useEffect } from 'react'

import LoadingBlock from './LoadingBlock.jsx'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'
import { formateTime } from '../helper.js'

export default function Weather({ setLable }) {
  const { weatherForcast, setFavData, favData } = useContext(WeatherContext)
  const { error, isFetching } = useContext(ErrorFetchingContext)

  const { locationData, currentData } = weatherForcast
  const time = formateTime(locationData.time)

  useEffect(() => {
    localStorage.setItem('locData', JSON.stringify(favData))
  }, [favData])

  const addFavLocation = () => {
    const favLocID = Math.floor(1000 + Math.random() * 9000)
    const data = [
      { 
        favLocID: favLocID,
        name : locationData.name,
        latitude : locationData.latitude,
        longitude : locationData.longitude,
        place : locationData.place,
      }
    ]
    
    setFavData((prevData) => [...prevData, data])
    setLable('Fauvrite Locations')
  }

  return (
    <>
      {isFetching && <div className='for-loading' ><LoadingBlock /></div>}
      {!isFetching && 
        <div className='weather'>
          <div className='fb-0'><button onClick={addFavLocation}>#</button></div>
          <div className="weather-data cn-1">{locationData.name}</div>
          <div className="weather-data te-2">{currentData.temperature}</div>
          <div className="weather-data de-3">{currentData.descriptions}</div>
          <div className="weather-data ti-4">{time}</div>
          <div className="weather-data lo-5">LOGO</div>
        </div>
      }
    </>
  )
}
