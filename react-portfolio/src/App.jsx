import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {

  return (
    <>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
