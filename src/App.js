import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import './App.css';

const App = () => {
  return (
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
