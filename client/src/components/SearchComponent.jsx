import { useRef, useState, useEffect } from 'react'

const SearchComponent = ({ setForcast }) => {
    const locationInout = useRef() 
    const [location, setLocation] = useState('')
    
    
    
    const handleSearchClick = () => {
        setLocation(locationInout.current.value)
    }

    useEffect(() => {
        const sendLocation = async () => {
            try{
                const response = await fetch(`http://localhost:3000/weather?location=${location}`)
                const data = await response.json()
                
                if(!response.ok){
                    throw new Error("Failed to fetch data.")
                }
    
                setForcast(data)
            }
            catch(error){
                setForcast({
                    message: error.message || "Could not fetch places, pleace try again latter."
                })
            }
        }
        sendLocation()
    }, [location])

    return (
        <div className='search'>
            <input 
                ref={locationInout}
                type='text'
                placeholder='Enter city name'
            />
            <button id='search-btn' onClick={handleSearchClick}>Search</button>
            <button>Fav</button>
            <button>Map</button>
        </div>
    )
}

export default SearchComponent
