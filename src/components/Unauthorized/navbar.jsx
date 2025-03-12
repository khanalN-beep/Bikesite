import React from "react";

const navbar = () => {
  return (
    <div>
      <header className="relative z-10 px-4 py-4">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-black">
              AUTO<span className="text-yellow-500">ROAD</span>
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-yellow-500 font-medium">
              Home
            </a>
            <a
              href="#"
              className="text-black font-medium hover:text-yellow-500"
            >
              About
            </a>
            <a
              href="#"
              className="text-black font-medium hover:text-yellow-500"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-black font-medium hover:text-yellow-500"
            >
              Our Bike
            </a>
            <a
              href="#"
              className="text-black font-medium hover:text-yellow-500"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-black font-medium hover:text-yellow-500"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default navbar;
