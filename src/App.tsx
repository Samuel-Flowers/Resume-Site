import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import Projects from './views/Projects';


const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Home/>} />
    </Routes>
  </Router>
);

export default App;
