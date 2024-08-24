import { useState, createContext } from "react";

export const ErrorFetchingContext = createContext()

export const ErrorAndFetching = ({ children }) => {
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    return (
        <ErrorFetchingContext.Provider 
            value={{ error, isFetching, setError, setIsFetching }}
        >
            {children}
        </ErrorFetchingContext.Provider>
    )
}
