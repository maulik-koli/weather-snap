import React, { useContext } from 'react'

import { WeatherContext } from '../contexts/WeatherProvider'

const FavLocation = () => {
    const { favData, setFavData } = useContext(WeatherContext)

    console.log('Favorite Data:', favData); // Add this line to debug

    const handleDelete = (id) => {
        const updatedFavData = favData.filter((data) => data.favLocID !== id);
        setFavData(updatedFavData);
        localStorage.setItem('locData', JSON.stringify(updatedFavData));
    };

    return (
        <div className='side-fav'>
            <ul>
                {favData.map((data) => (
                    <li key={data.favLocID} className="fav-list">
                        <div>
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
