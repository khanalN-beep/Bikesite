import React from "react";
import Search from "./search";
import Navbar from "./navbar";

const CarRentalInterface = () => {
  return (
    <>
      <div className="relative min-h-screen bg-blue-400 font-serif">
        {/* background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/"
            alt="Desert landscape with mountains"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nav */}
        <Navbar/>

        <main className="relative z-10 px-4 pt-20 pb-20 flex items-center justify-between max-w-6xl mt-8 mx-auto">
          <div className="w-full md:w-1/2">
            <h1 className="text-6xl font-light text-white leading-tight">
              Now
              <br />
              It's easy for you
              <br />
              rent a Bike
            </h1>

            <p className="mt-6 text-white text-lg max-w-md text-justify">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts
            </p>

            <div className="mt-10 flex items-center">
              <button className="btn btn-accent btn-outline flex items-center justify-center w-14 h-14 rounded-full bg-yellow-400 cursor-pointer text-white mr-4 hover:bg-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <span className="text-white">Easy steps for renting a car</span>
            </div>
          </div>

          {/* Booking form */}
          <div className="hidden md:block w-full md:w-2/5">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Make your trip
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PICK-UP LOCATION
                  </label>
                  <input
                    type="text"
                    placeholder="City, Airport, Station, etc"
                    className="w-full p-2 border border-gray-300 rounded text-black"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    DROP-OFF LOCATION
                  </label>
                  <input
                    type="text"
                    placeholder="City, Airport, Station, etc"
                    className="w-full p-2 border border-gray-300 rounded text-black"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      PICK-UP DATE
                    </label>
                    <input
                      type="date"
                      placeholder="Date"
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      DROP-OFF DATE
                    </label>
                    <input
                      type="date"
                      placeholder="Date"
                      className="w-full p-2 border border-gray-300 rounded "
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    PICK-UP TIME
                  </label>
                  <input
                    type="text"
                    placeholder="Time"
                    className="w-full p-2 border border-gray-300 rounded text-black"
                  />
                </div>

                <button className="w-full bg-yellow-500 text-white font-medium py-3 hover:bg-yellow-600 transition duration-200 cursor-pointer btn btn-accent btn-outline">
                  Search Vehicle
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div>
        <Search />
      </div>
    </>
  );
};

export default CarRentalInterface;
