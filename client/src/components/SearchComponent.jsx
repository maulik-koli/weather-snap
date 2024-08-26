import { useRef, useEffect, useContext } from 'react'

import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx'
import { WeatherContext } from '../contexts/WeatherProvider.jsx'

const SearchComponent = ({ lable, setLable }) => {
    const locationInput = useRef() 
    
    const { location, setLocation, setWeatherForcast  } = useContext(WeatherContext)
    const { error, setError, setIsFetching } = useContext(ErrorFetchingContext)
    
    const handleSearchClick = () => {
        const loc = (locationInput.current.value).toString()
        setLocation(loc)
        locationInput.current.value = ''
        setLable('Weather Info')
    }

    useEffect(() => {
        setIsFetching(true)
        const sendLocation = async () => {
            if(location === "A4$cZ9k*R1pQ8%w") return
            try{
                if(!location){
                    throw new Error("Please enter a location.")
                }

                // /dummy-data.json
                // http://localhost:3000/weather?location=${location}
                const response = await fetch(`/dummy-data.json`)
                const data = await response.json()

                if(!response.ok){
                    throw new Error(data.error)
                }
    
                setWeatherForcast(data)
                setError(null)
            }
            catch(error){
                setError({
                    error: error.message || "Something went wrong, please try again latter."
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

    console.log(error)

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
                    <button 
                        onClick={() => setLable('Fauvrite Locations')}
                        disabled={(location === 'A4$cZ9k*R1pQ8%w' || error) ? true : false }
                    >Fav</button>
                    <button
                        onClick={() => setLable('Map')}
                        disabled={(location === 'A4$cZ9k*R1pQ8%w' || error) ? true : false }
                    >Map</button>
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
