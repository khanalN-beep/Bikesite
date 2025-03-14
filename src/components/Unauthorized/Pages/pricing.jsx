import React, { useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

const pricing = () => {
  const [hoveredCarId, setHoveredCarId] = useState(null);

  const carData = [
    {
      id: 1,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
    {
      id: 2,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
    {
      id: 3,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
    {
      id: 4,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
    {
      id: 5,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
    {
      id: 6,
      name: "Cheverolet SUV Car",
      rating: 4,
      image: "/api/placeholder/200/150",
      hourRate: 10.99,
      dayRate: 60.99,
      monthRate: 995.99,
      fuelSurcharge: 3,
    },
  ];

  return (
    <>
      <Navbar />
      <div className="h-screen bg-blue-400">
        <img src="/" alt="bike" className="w-full h-full " />
      </div>

      <div className="w-full mt-20 max-w-6xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
        <div className="grid grid-cols-4 w-full">
          {/* Empty header for car column */}
          <div className="p-4"></div>

          {/* Header for rates */}
          <div className="bg-orange-400 text-white p-6 text-center font-bold text-xl relative">
            <div className="pb-4">Per Hour Rate</div>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-orange-400 rounded-t-full"></div>
          </div>
          <div className="bg-gray-800 text-white p-6 text-center font-bold text-xl relative">
            <div className="pb-4">Per Day Rate</div>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gray-800 rounded-t-full"></div>
          </div>
          <div className="bg-black text-white p-6 text-center font-bold text-xl relative">
            <div className="pb-4">Leasing</div>
            <div className="absolute bottom-0 left-0 w-full h-6 bg-black rounded-t-full"></div>
          </div>
        </div>

        {/* Car rows */}
        {carData.map((car) => (
          <div
            key={car.id}
            className="grid grid-cols-4 border-b border-gray-200 cursor-pointer relative"
          >
            {/* Car info column */}
            <div className="p-4 flex flex-col items-start justify-center">
              <img
                src={car.image}
                alt={car.name}
                className="w-full max-w-xs rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg text-gray-800">
                {car.name}
              </h3>
              <div className="flex items-center">
                <span className="text-gray-600 mr-2">rated:</span>
                <div className="flex">{car.rating}</div>
              </div>
            </div>

            {/* Rate columns */}
            <div className="p-6 flex flex-col items-center justify-center bg-gray-100">
              <div className="flex items-baseline">
                <span className="text-orange-400 text-2xl font-bold">
                  ${car.hourRate}
                </span>
                <span className="text-gray-500 ml-1">/per hour</span>
              </div>
              <div className="text-gray-600 mt-2">
                ${car.fuelSurcharge}/hour fuel surcharges
              </div>
            </div>

            <div
              className="p-6 flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredCarId(car.id)}
              onMouseLeave={() => setHoveredCarId(null)}
            >
              <div className="flex items-baseline">
                <span className="text-orange-400 text-2xl font-bold">
                  ${car.dayRate}
                </span>
                <span className="text-gray-500 ml-1">/per day</span>
              </div>
              <div className="text-gray-600 mt-2">
                ${car.fuelSurcharge}/hour fuel surcharges
              </div>
            </div>

            <div className="p-6 flex flex-col items-center justify-center bg-gray-100">
              <div className="flex items-baseline">
                <span className="text-orange-400 text-2xl font-bold">
                  ${car.monthRate}
                </span>
                <span className="text-gray-500 ml-1">/per month</span>
              </div>
              <div className="text-gray-600 mt-2 mb-8 mb-20">
                ${car.fuelSurcharge}/hour fuel surcharges
              </div>
            </div>

            {/* Rent button shown when hovered */}
            {hoveredCarId === car.id && (
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 transition-opacity duration-300 opacity-100">
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md">
                  RENT A CAR
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-20">
        <Footer/>
      </div>
    </>
  );
};

export default pricing;
