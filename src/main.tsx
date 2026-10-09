import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { initSecurity } from './utils/security'

// ── Boot-time security ── must run before any component mounts
initSecurity();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
