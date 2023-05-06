import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Import React Router
import { BrowserRouter as Router } from 'react-router-dom'

// Import Bootstrap 5
// import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import 'bootstrap/dist/js/bootstrap.min.js'

// Custom CSS
import './styles/custom.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)
