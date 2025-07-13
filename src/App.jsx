import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Ai from './pages/Ai'
import FaqPage from './pages/QuestionAnswer'
function App() {
  return (
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/ai' element={<Ai />} />
      <Route path='/qa' element={<FaqPage />} />
    </Routes>
  )
}

export default App