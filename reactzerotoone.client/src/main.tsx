// React
import { StrictMode } from 'react'

// React browser DOM
import { createRoot } from 'react-dom/client'
// styles
import './index.css'
// App component
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
