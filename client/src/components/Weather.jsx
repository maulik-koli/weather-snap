import React from 'react'

import { formateTime } from '../helper.js'

export default function Weather({ weatherForcast }) {
  const { locationData, currentData } = weatherForcast

  const time = formateTime(currentData.observationTime)

  return (
    <div className='weather'>
      {/* <p>{!weatherForcast.error && weatherForcast.locationData.country}</p> */}
      <div className="weather-data cn-1">{locationData.city}</div>
      <div className="weather-data te-2">{currentData.temperature}</div>
      <div className="weather-data de-3">{currentData.descriptions}</div>
      <div className="weather-data ti-4">{time}</div>
      <div className="weather-data lo-5">LOGO</div>
    </div>
  )
}
