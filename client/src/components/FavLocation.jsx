import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching'

const FavLocation = () => {
    const { favData, setFavData, setWeatherForcast } = useContext(WeatherContext)
    const { setError, setIsFetching } = useContext(ErrorFetchingContext)

    const handleDelete = (id) => {
        const updatedFavData = favData.filter((data) => data.favLocID !== id);
        setFavData(updatedFavData);
        localStorage.setItem('locData', JSON.stringify(updatedFavData));
    };

    const getDataByFavLocation = async (location) => {
        setIsFetching(true)
        let loc = location.toString()

        if(loc === "A4$cZ9k*R1pQ8%w") return
        try{
            if(!loc){
                throw new Error("Selected location is not working.")
            }

            // /dummy-data.json
            // http://localhost:3000/weather?location=${loc}
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
