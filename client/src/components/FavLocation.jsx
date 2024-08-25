import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching'

const FavLocation = () => {
    const { favData, setFavData, setWeatherForcast } = useContext(WeatherContext)
    const { setIsFetching, setError  } = useContext(ErrorFetchingContext)

    const handleDelete = (id) => {
        const updatedFavData = favData.filter((data) => data.favLocID !== id);
        setFavData(updatedFavData);
        localStorage.setItem('locData', JSON.stringify(updatedFavData));
    };

    const getDataByFavLocation = async (location) => {
        try{
            // /dummy-data.json
            let loc = location ? location : "tokyo"
            // http://localhost:3000/weather?location=${loc}
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

    return (
        <div className='side-fav'>
            <ul>
                {favData.map((data) => (
                    <li key={data.favLocID} className="fav-list">
                        <div onClick={() => getDataByFavLocation(data.name)}>
                            <span>{data.name}</span>
                            <p>{data.descriptions}</p>
                        </div>
                        <button onClick={() => handleDelete(data.favLocID)}>Del</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FavLocation
