import React from 'react';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Creation from './conponent/Creation';
import Accueil from './conponent/Accueil';
import Nav from './conponent/Nav';

function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Routes>
        <Route path="/accueil"  element={<Accueil></Accueil>} />
        <Route path="/creation"  element={<Creation></Creation>} />
        <Route path="/#form"  element={<Accueil></Accueil>} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
