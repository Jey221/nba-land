import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={''} />
        <Route path="/teams" element={''} />
        <Route path="/players" element={''} />
        <Route path="/game" element={''} />
        <Route path="/state" element={''} />
        <Route path="/erreur" element={''} />
      </Routes>
    </div>
  );
}

export default App;
