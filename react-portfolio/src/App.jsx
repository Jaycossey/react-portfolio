import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      <Router>
        <NavBar />
        <Routes>
          {/* <Route /> */}
        </Routes>
      </Router>
    </>
  )
}

export default App
