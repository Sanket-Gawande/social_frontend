import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import {configureStore} from "@reduxjs/toolkit"
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import cakeReducers from './Slices/cakeSlice'
import postReducer from './Slices/postSlice'


const store = configureStore({
  reducer : {
    cake : cakeReducers,
    post : postReducer,
  }
})
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
)
