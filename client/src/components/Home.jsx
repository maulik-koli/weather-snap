import React, { useContext } from 'react'

import ErrorBlock from './ErrorBlock';
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching';
import LoadingBlock from './LoadingBlock';

const Home = () => {
  const { error } = useContext(ErrorFetchingContext)

  return (
    <div className="landing-container">
      {error ? <ErrorBlock /> : 
      (
        <>
          <div className="sun"></div>
          <h1>Welcome to WeatherSnap</h1>
          <p>Your go-to weather forecast.</p>
        </>
      )}
    </div>
  )
}

export default Home;
