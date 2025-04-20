import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Reducing from './Components/Mycontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reducing>
      <App />
    </Reducing>
  </StrictMode>,
)
