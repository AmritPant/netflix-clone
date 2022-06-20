import React from 'react';
import LoggedOutHome from './pages/LoggedOutHome/LoggedOutHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoggedOutHome />} />
      </Routes>
    </Router>
  );
}

export default App;
