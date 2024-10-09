import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './app/store.js'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/toaster.jsx'

createRoot(document.getElementById('root')).render(
  <Router >
    <Provider store={store}>
    <App />
    <Toaster/>

    </Provider>
  </Router>
)
