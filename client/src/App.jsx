import React, { useState, useContext } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'
import { ErrorFetching } from './contexts/ErrorAndFetching.jsx'

import { INITIAL_WEATHER_DATA } from './helper.js'

const App = () => {
  const [weatherForcast, setWeatheForcast] = useState(INITIAL_WEATHER_DATA)
  const [sideState, setSideState] = useState('Weather Info')

  const { error, isFetching } = useContext(ErrorFetching)

  const handleWeatherForcast = (forcast) => {
    setWeatheForcast(forcast)
  }
  
  return (
    <>
      <Header />
      <main>
        <SearchComponent
          setForcast={handleWeatherForcast}
          lable={sideState}
          setLable={setSideState}
        />
        <div className='weather-con'>
          <Weather
            weatherForcast={weatherForcast}
          />
          <SideComponents 
            
          />
        </div>
      </main>
    </>
  )
}

export default App;
