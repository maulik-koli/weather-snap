import React, { useContext } from 'react'

import { ErrorFetchingContext } from '../contexts/ErrorAndFetching';
const ErrorBlock = () => {
  const { error } = useContext(ErrorFetchingContext)
  
  return (
    <div className='error'><h1>Error</h1><p>{error.message}</p></div>
  )
}

export default ErrorBlock;
