import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ErrorAndFetching } from './contexts/ErrorAndFetching.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorAndFetching>
      <App />
    </ErrorAndFetching>
  </StrictMode>,
)
