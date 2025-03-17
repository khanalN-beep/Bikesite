import React from "react";
import { useNavigate } from "react-router-dom";
import Mainpage from "./mainpage"; // Ensure this is the correct import for your mainpage component

const Navbar = () => {  // Capitalize the component name to follow React conventions
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/mainpage");  // This will navigate to the /mainpage route
  };
  const goToPricing = () => {
    navigate("/pricing");
  };
  const goToContact = () => {
    navigate("/contact");
  };
  const goToAbout = () => {
    navigate("/aboutpage");
  };
  const goToBikes = () => {
    navigate("/ourbikes");
  };
  const goToOurBlogs = () => {
    navigate("/ourblog");
  };
  const goToDashboard = () => {
    navigate("/dashboard");
  };



  return (
    <div>
      <header className="relative w-full  z-10 px-4 py-4 bg-white">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center cursor-pointer" onClick={goToDashboard}>
            <span className="text-2xl font-bold text-black">
              AUTO<span className="text-yellow-500">ROAD</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a onClick={goToHome} className="text-yellow-500 font-medium cursor-pointer">
              Home
            </a>
            <a
              onClick={goToAbout}
              className="text-black font-medium hover:text-yellow-500 cursor-pointer"
            >
              About
            </a>
            <button
              onClick={goToPricing}
              className="text-black cursor-pointer font-medium hover:text-yellow-500"
            >
              Pricing
            </button>
            <a
              onClick={goToBikes}
              className="text-black font-medium hover:text-yellow-500 cursor-pointer"
            >
              Our Bike
            </a>
            <a
              onClick={goToOurBlogs}
              className="text-black font-medium hover:text-yellow-500 cursor-pointer"
            >
              Blog
            </a>
            <a
              onClick={goToContact}
              className="text-black font-medium hover:text-yellow-500 cursor-pointer" 
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
