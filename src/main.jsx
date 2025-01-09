import {BrowserRouter} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Context from './Utils/Context.jsx'

createRoot(document.getElementById('root')).render(
  <Context>
    
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Context>
)
