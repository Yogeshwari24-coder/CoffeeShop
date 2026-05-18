import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Shop from './pages/Shop'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
        </Routes>
      </Router>
      <ToastContainer/>
    </div>
  )
}

export default App
