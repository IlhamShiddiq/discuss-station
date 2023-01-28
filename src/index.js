import React from 'react'
import ReactDOM from 'react-dom/client'
import DiscussApp from './scripts/components/discuss-app'
import { BrowserRouter } from 'react-router-dom'
import './styles/_main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <DiscussApp />
      </BrowserRouter>
  </React.StrictMode>
)
