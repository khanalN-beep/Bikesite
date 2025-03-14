import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Unauthorized/mainpage';
import Contact from './components/Unauthorized/Pages/contact';
// import Navbar from './components/Unauthorized/navbar';
import Pricing from './components/Unauthorized/Pages/pricing';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
