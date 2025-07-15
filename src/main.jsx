


/*  Node Modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


/* Styles */
import './index.css';

/* Components */
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
