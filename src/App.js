import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import KonniPage from './components/KonniPage';
import SelectorPage from './components/SelectorPage';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/konni" element={<KonniPage />} />
        <Route path="/selector" element={<SelectorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
