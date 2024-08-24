import React from 'react'

export default function Weather({ weatherForcast }) {
  return (
    <div className='weather'>
      {/* <p>{!weatherForcast.error && weatherForcast.locationData.country}</p> */}
      <div className="weather-data cn-1">CITY NAME</div>
      <div className="weather-data te-2">TEMP</div>
      <div className="weather-data de-3">DESCRIPTION</div>
      <div className="weather-data ti-4">TIME</div>
      <div className="weather-data lo-5">LOGO</div>
    </div>
  )
}
