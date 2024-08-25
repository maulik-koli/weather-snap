import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { WeaTherProvider } from './contexts/WeatherProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WeaTherProvider>
      <App />
    </WeaTherProvider>
  </StrictMode>,
)
