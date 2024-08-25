import React, { useContext, useEffect } from 'react'

import LoadingBlock from './LoadingBlock.jsx'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

export default function Weather({ setLable }) {
  const { weatherForcast, setFavData, favData } = useContext(WeatherContext)
  const { error, isFetching } = useContext(ErrorFetchingContext)

  const { locationData, currentData } = weatherForcast

  useEffect(() => {
    localStorage.setItem('locData', JSON.stringify(favData))
  }, [favData])

  const addFavLocation = (name) => {
    const exist = favData.some(data => data.name === name)

    if(!exist){
      const favLocID = Math.floor(1000 + Math.random() * 9000);
      const newFavLocation = {
        favLocID,
        name: locationData.name,
        lat: locationData.latitude,
        log: locationData.longitude,
        place: locationData.place,
        descriptions: currentData.descriptions,
      };

      const updatedFavData = [...favData, newFavLocation];
      setFavData(updatedFavData);
      localStorage.setItem('locData', JSON.stringify(updatedFavData));
      setLable('Fauvrite Locations')
    }
  };

  return (
    <div className='side-left'>
      {/* <LoadingBlock /> */}
      {isFetching && <LoadingBlock /> }
      {!isFetching && 
        <div className='weather'>
          <div className='fb-0'><button onClick={() => addFavLocation(locationData.name)}>#</button></div>
          <div className="weather-data cn-1">{locationData.name}</div>
          <div className="weather-data te-2">{currentData.temperature}</div>
          <div className="weather-data de-3">{currentData.descriptions}</div>
          <div className="weather-data ti-4">{locationData.time}</div>
          <div className="weather-data lo-5">LOGO</div>
        </div>
      }
    </div>
  )
}
