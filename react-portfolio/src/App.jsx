import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/*" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
