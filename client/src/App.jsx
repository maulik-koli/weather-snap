import React, { useState } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'
import { WeaTherProvider } from './contexts/WeatherProvider.jsx'

const App = () => {
  const [sideState, setSideState] = useState('Weather Info')

  return (
    <>
      <Header />
      <WeaTherProvider>
        <main>
          <SearchComponent lable={sideState} setLable={setSideState} />
          <div className='weather-con'>
            <Weather setLable={setSideState} />
            <SideComponents lable={sideState} />
          </div>
        </main>
      </WeaTherProvider>
    </>
  )
}

export default App;
