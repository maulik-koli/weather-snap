import { createContext, useEffect, useState } from "react";

import { INITIAL_WEATHER_DATA } from "../helper";

export const WeatherContext = createContext()

export const WeaTherProvider = ({ children }) => {
    const [ location, setLocation ] = useState('')
    const [ weatherForcast, setWeatherForcast ] = useState(INITIAL_WEATHER_DATA)
    const [ favData, setFavData ] = useState([])

    useEffect(() => {
        const savedData = localStorage.getItem('locData')
        
        if(savedData){
            setFavData(JSON.parse(savedData))
        }
    }, [])

    return (
        <WeatherContext.Provider value={{ weatherForcast , setWeatherForcast, favData, setFavData, location, setLocation }}>
            {children}
        </WeatherContext.Provider>
    )
}
