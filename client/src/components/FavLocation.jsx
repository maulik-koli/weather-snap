import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'

const FavLocation = () => {
    const { favData } = useContext(WeatherContext)

    return (
        <ul>
            {favData.map((data, index) => (
                <li key={data.favLocID + `${index}`}>
                    <span>{data.name}</span>
                    <p>{data.place}</p>
                </li>
            ))}
        </ul>
    )
}

export default FavLocation
