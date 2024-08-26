import React, { useContext, useState } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'
import Home from './components/Home.jsx'

import { WeatherContext } from './contexts/WeatherProvider.jsx'
import { ErrorAndFetching } from './contexts/ErrorAndFetching.jsx'

const App = () => {
  const { location } = useContext(WeatherContext)
  const [sideState, setSideState] = useState('Weather Info')

  return (
    <ErrorAndFetching>
      <Header />
        <main>
          <SearchComponent lable={sideState} setLable={setSideState} />
          {(location === 'A4$cZ9k*R1pQ8%w' || location === '') ? <Home />
            : (
              <div className='weather-con'>
                <Weather setLable={setSideState} />
                <SideComponents lable={sideState} />
              </div>
            )
          }
        </main>
    </ErrorAndFetching>
  )
}

export default App;
