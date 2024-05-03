import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Inicio from './pages/Inicio'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/Menu';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' Component={Inicio}></Route>
        <Route path='/menu' Component={Menu}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
)
