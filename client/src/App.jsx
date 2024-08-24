import React, { useState } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'

const inisialWeatherData = {
  locationData : {
    region : "",
    country : "",
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

const App = () => {
  const [weatherForcast, setWeatheForcast] = useState(inisialWeatherData)
  const [error, setError] = useState(null)
  const [isFetchig, setIsFetching] = useState(false)

  const handleWeatherForcast = (forcast) => {
    setWeatheForcast(forcast)
  }
  
  return (
    <>
      <Header />
      <main>
        <SearchComponent
          setForcast={handleWeatherForcast}
        />
        <div className='weather-con'>
          <Weather
            weatherForcast={weatherForcast}
          />
          <SideComponents />
        </div>
      </main>
    </>
  )
}

export default App;
