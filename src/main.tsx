import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import BurgerMenu from './/components/BurgerMenu.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BurgerMenu />
    <App title='Sign In'/>
    
  </React.StrictMode>,
)
