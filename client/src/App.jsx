import { useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import SearchComponent from './components/SearchComponent.jsx'
import Weather from './components/Weather.jsx'
import SideComponents from './components/SideComponents.jsx'

const App = () => {
  const [weatherForcast, setWeatheForcast] = useState()
  const [error, setError] = useState(null)


  useEffect(() => {
    const fetchForcast = async () => {
      try{
        const response = await fetch('http://localhost:3000/test')
        const data = await response.json()

        if(!response.ok){
          throw new Error("Failed to fetch data.")
        }

        setWeatheForcast(data.forcast)
      }
      catch(error){
        setError({
          message: error.message || "Could not fetch places, pleace try again latter."
        })
      }
    }

    fetchForcast()
  }, [])

  return (
    <>
      <Header />
      <main>
        <SearchComponent />
        <div className='weather-con'>
          <Weather />
          <SideComponents />
        </div>
      </main>
    </>
  )
}

export default App;
