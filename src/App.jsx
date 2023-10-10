import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './Pages/Home/Navbar';
import Home from './Pages/Home/Homescreen';
import './App.css'


function App() {
 
  return (
      <Router>
    <div>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<div>404 Not Found</div>}></Route>
        </Routes>
    </div>
      </Router>
      
  )
}

export default App
