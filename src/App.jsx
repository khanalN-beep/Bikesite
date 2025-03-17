import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Unauthorized/mainpage';
import Contact from './components/Unauthorized/Pages/contact';
// import Navbar from './components/Unauthorized/navbar';
import Pricing from './components/Unauthorized/Pages/pricing';
import Aboutpage from './components/Unauthorized/Pages/aboutpage';
import Ourbikes from './components/Unauthorized/Pages/ourbikes';
import OurBlog from './components/Unauthorized/Pages/ourblog';
import Dashboard from './components/Authorized/dashboard';
import Booking from './components/Authorized/afolder/booking';
import Feedback from './components/Authorized/afolder/feedback';



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
        <Route path="/ourblog" element={<OurBlog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/feedbackpage" element={<Feedback/>} />
      </Routes>
    </Router>
  );
}

export default App;
