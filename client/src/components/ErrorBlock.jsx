import React, { useContext } from 'react';
import { ErrorFetchingContext } from '../contexts/ErrorAndFetching.jsx';

const ErrorBlock = () => {
  const { error, setError } = useContext(ErrorFetchingContext);

  return (
    <div className='error-container'>
      <div className='error'>
        <div className='error-icon'></div>
        <div className='error-content'>
          <h1>Error</h1>
          <p>{error.error}</p>
          <button onClick={() => setError(null)}>Okay</button>
        </div>
      </div>
    </div>
  );
}

export default ErrorBlock;