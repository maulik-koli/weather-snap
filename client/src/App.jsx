import React, { useState, useContext } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'
import { ErrorFetching, ErrorAndFetching } from './contexts/ErrorAndFetching.jsx'

import { INITIAL_WEATHER_DATA } from './helper.js'

const App = () => {
  const [weatherForcast, setWeatheForcast] = useState(INITIAL_WEATHER_DATA)

  const { error, isFetchig } = useContext(ErrorFetching)

  const handleWeatherForcast = (forcast) => {
    if(forcast.error){
      setError(forcast.error)
    }

    setWeatheForcast(forcast)
  }
  
  return (
    <ErrorAndFetching>
      <Header />
      <main>
        <SearchComponent
          setForcast={handleWeatherForcast}
          error={error}
          isLoading={isFetchig}
        />
        <div className='weather-con'>
          <Weather
            weatherForcast={weatherForcast}
          />
          <SideComponents />
        </div>
      </main>
    </ErrorAndFetching>
  )
}

export default App;
