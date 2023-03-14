import React from 'react'
import ReactDOM from 'react-dom/client'
import DiscussApp from './scripts/components/discuss-app'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import './styles/_main.scss'
import store from './scripts/states'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <DiscussApp />
      </BrowserRouter>
  </Provider>
)
