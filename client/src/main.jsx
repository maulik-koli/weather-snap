import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WeaTherProvider } from './contexts/WeatherProvider.jsx'
import { ErrorAndFetching } from './contexts/ErrorAndFetching.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeaTherProvider>
      <ErrorAndFetching>
        <App />
      </ErrorAndFetching>
    </WeaTherProvider>
  </StrictMode>,
)
