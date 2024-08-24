import React, { useEffect, useState } from 'react'

const FavLocation = () => {
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('locData')
        return savedData ? JSON.parse(savedData) : ''
    })

    useEffect(() => {
        localStorage.setItem('locData', JSON.stringify(data))
    }, [data])

    return (
        <div>
            {data.map((data, index) => (
                <li key={index}>{data}</li>
            ))}
        </div>
    )
}

export default FavLocation
