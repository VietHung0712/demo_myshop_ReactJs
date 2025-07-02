import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouterCustom from './router'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterCustom />
  </BrowserRouter>
)
