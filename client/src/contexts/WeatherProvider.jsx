import { createContext, useEffect, useState } from "react";

import { INITIAL_WEATHER_DATA } from "../helper";

export const WeatherContext = createContext()

export const WeaTherProvider = ({ children }) => {
    const [ weatherForcast, setWeatheForcast ] = useState(INITIAL_WEATHER_DATA)
    const [ favData, setFavData ] = useState([])

    useEffect(() => {
        const savedData = localStorage.getItem('locData')
        
        if(savedData){
            setFavData(JSON.parse(savedData))
        }
    }, [])

    return (
        <WeatherContext.Provider value={{ weatherForcast , setWeatheForcast, favData, setFavData }}>
            {children}
        </WeatherContext.Provider>
    )
}
