import { useState, createContext } from "react";

export const ErrorFetching = createContext()

export const ErrorAndFetching = ({ children }) => {
    const [error, setError] = useState(null)
    const [isFetching, setIsFetching] = useState(false)

    const handleSetError = (error) => {
        setError(error)
    }

    const handleSetIsFetching = (bool) => {
        setIsFetching(bool)
    }

    return (
        <ErrorFetching.Provider 
            value={{ error, isFetching, handleSetError, handleSetIsFetching }}
        >
            {children}
        </ErrorFetching.Provider>
    )
}