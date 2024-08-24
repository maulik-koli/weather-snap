import { createContext, useState } from "react";

import { INITIAL_WEATHER_DATA } from "../helper";

export const WeatherContext = createContext()

export const WeaTherProvider = ({ children }) => {
    const [ weatherForcast, setWeatheForcast ] = useState(INITIAL_WEATHER_DATA)

    return (
        <WeatherContext.Provider value={{ weatherForcast , setWeatheForcast }}>
            {children}
        </WeatherContext.Provider>
    )
}
