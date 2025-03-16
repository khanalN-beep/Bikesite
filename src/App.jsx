import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Unauthorized/mainpage';
import Contact from './components/Unauthorized/Pages/contact';
// import Navbar from './components/Unauthorized/navbar';
import Pricing from './components/Unauthorized/Pages/pricing';
import Aboutpage from './components/Unauthorized/Pages/aboutpage';
import Ourbikes from './components/Unauthorized/Pages/ourbikes';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/mainpage" element={<Mainpage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutpage" element={<Aboutpage />} />
        <Route path="/ourbikes" element={<Ourbikes />} />


      </Routes>
    </Router>
  );
}

export default App;
