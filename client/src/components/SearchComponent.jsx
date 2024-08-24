import { useRef, useState, useEffect, useContext } from 'react'

import { ErrorFetching } from '../contexts/ErrorAndFetching'

const SearchComponent = ({ setForcast, lable, setLable }) => {
    const locationInout = useRef() 
    const [location, setLocation] = useState('')

    const { handleSetError, handleSetIsFetching } = useContext(ErrorFetching)
    
    const handleSearchClick = () => {
        setLocation(locationInout.current.value)
        locationInout.current.value = ''
        setLable('Weather Info')
    }

    useEffect(() => {
        handleSetIsFetching(true)
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
    
                setForcast(data)
            }
            catch(error){
                handleSetError({
                    message: error.message || "Could not fetch places, pleace try again latter."
                })
            }
            finally{
                handleSetIsFetching(false)
            }
        }
        sendLocation()
    }, [location])

    return (
        <div className='search-con'>
            <div className='search'>
                <div className="search-a">
                    <input 
                        ref={locationInout}
                        type='text'
                        placeholder='Enter city name'
                    />
                    <button onClick={handleSearchClick}>Search</button>
                </div>

                <div className="search-b">
                    <button onClick={() => setLable('Fauvrite Locations')}>Fav</button>
                    <button onClick={() => setLable('Map')}>Map</button>
                </div>
            </div>
            <div className='title'>{lable}</div>
        </div>
    )
}

export default SearchComponent
