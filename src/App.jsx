import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import ShowCase from './components/ShowCase'
import About from './components/About'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Home/>
      <ShowCase/>
      <About/>
    </BrowserRouter>
  )
}

export default App
