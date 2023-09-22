import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './pages/home'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import Home from './pages/home'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Home /> */}
    {/* <h1>hello</h1> */}
    <Router />
  </React.StrictMode>,
)
