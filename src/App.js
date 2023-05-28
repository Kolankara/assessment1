

import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Addblog from './Pages/Addblog';
import Nav1 from './Units/Nav1';

export default function App() {
  return (
    <div>
    <Nav1></Nav1>
            <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Addblog />} />
       </Routes>
    </div>
  )
}

