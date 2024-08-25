import { useRef, useState, useEffect, useContext } from 'react'

import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

const SearchComponent = ({ lable, setLable }) => {
    const locationInout = useRef() 
    const [location, setLocation] = useState('')

    const { setWeatherForcast } = useContext(WeatherContext)
    const { setError, setIsFetching } = useContext(ErrorFetchingContext)
    
    const handleSearchClick = () => {
        setLocation(locationInout.current.value)
        locationInout.current.value = ''
        setLable('Weather Info')
    }

    useEffect(() => {
        setIsFetching(true)
        const sendLocation = async () => {
            const wait = (delay) => new Promise(resolve => setTimeout(resolve, delay))

            await wait(2000)
            try{
                // http://localhost:3000/weather?location=${location}

                const response = await fetch(`/dummy-data.json`)
                const data = await response.json()
                
                if(!response.ok){
                    throw new Error("Failed to fetch data.")
                }
    
                setWeatherForcast(data)
            }
            catch(error){
                setError({
                    message: error.message || "Could not fetch places, pleace try again latter."
                })
            }
            finally{
                setIsFetching(false)
            }
        }
        sendLocation()
    }, [location])

    return (
        <div className='search-con'>
            <div className='search'>
                <div className="search-input">
                    <input 
                        ref={locationInout}
                        type='text'
                        placeholder='Enter city name'
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </div>

                <div className="search-btns">
                    <button onClick={() => setLable('Fauvrite Locations')}>Fav</button>
                    <button onClick={() => setLable('Map')}>Map</button>
                </div>
            </div>
            <div className='lable'>{lable}</div>
        </div>
    )
}

export default SearchComponent
