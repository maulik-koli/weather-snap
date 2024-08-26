import React, { useContext, useEffect } from 'react'

import LoadingBlock from './LoadingBlock.jsx'
import ErrorBlock from './ErrorBlock.jsx'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

const Weather = ({ setLable }) => {
  const { weatherForcast, setFavData, favData } = useContext(WeatherContext)
  const { error, isFetching } = useContext(ErrorFetchingContext)

  const { locationData, currentData } = weatherForcast

  useEffect(() => {
    localStorage.setItem('locData', JSON.stringify(favData))
  }, [favData])

  const addFavLocation = (name) => {
    if(name === '') return
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
      {isFetching ? <LoadingBlock /> : 
        error ? <ErrorBlock /> :
          (
            <div className='weather'>
              <div className='fb-0'><button onClick={() => addFavLocation(locationData.name)}>#</button></div>
              <div className="weather-data cn-1"><p>{locationData.name}</p></div>
              <div className="weather-data te-2"><p>{currentData.temperature}</p></div>
              <div className="weather-data de-3"><p>{currentData.descriptions}</p></div>
              <div className="weather-data ti-4"><p>{locationData.time}</p></div>
              <div className="weather-data lo-5">LOGO</div>
            </div>
          )
      }
    </div>
  )
}

export default Weather
