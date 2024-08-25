import { useRef, useEffect, useContext } from 'react'

import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

const SearchComponent = ({ lable, setLable }) => {
    const locationInput = useRef() 
    
    const { location, setLocation, setWeatherForcast  } = useContext(WeatherContext)
    const { error, setError, setIsFetching } = useContext(ErrorFetchingContext)
    
    const handleSearchClick = () => {
        setLocation(locationInput.current.value)
        locationInput.current.value = ''
        setLable('Weather Info')
    }

    useEffect(() => {
        setIsFetching(true)
        const sendLocation = async () => {
            if(!location){
                setError({
                    error : "Please enter a location and try again."
                })
                return
            }

            try{
                // /dummy-data.json
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
                    error: error.message || "Could not fetch data, pleace try again latter."
                })
            }
            finally{
                setIsFetching(false)
            }
        }
        sendLocation()
    }, [location])

    const handleInfoButton = () => {
        setLable("Weather Info")
    }

    return (
        <div className='search-con'>
            <div className='search' >
                <div className="search-input">
                    <input 
                        ref={locationInput}
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
            {location ? (
                <div className='lable'>
                    <p>{lable}</p>
                    {lable !== "Weather Info" && <button onClick={handleInfoButton}>Info</button>}
                </div>
            ) : <div className='alt-div'></div>}
        </div>
    )
}

export default SearchComponent
