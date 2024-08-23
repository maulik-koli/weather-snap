import { useRef, useState } from 'react'

const SearchComponent = () => {
    const cityInout = useRef() 
    const [city, setCity] = useState('')

    return (
        <div className='search'>
            <input ref={cityInout} type='text' placeholder='Enter city name' onChange={() =>  setCity(cityInout.current.value)}/>
            <button>Fav</button>
            <button>Map</button>
        </div>
    )
}

export default SearchComponent
