import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PropsProvider } from './context/props'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PropsProvider>
    <App />
  </PropsProvider>
)
