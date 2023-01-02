import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.scss'
import { getTotals } from './store/slices/cart'
import { getProducts } from './store/slices/products/thunks'
import { store } from './store/store'

store.dispatch(getTotals());
store.dispatch(getProducts());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
