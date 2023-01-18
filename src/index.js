import React from 'react'
import ReactDOM from 'react-dom/client'
import DiscussApp from './scripts/components/DiscussApp'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <DiscussApp />
      </BrowserRouter>
  </React.StrictMode>
)
