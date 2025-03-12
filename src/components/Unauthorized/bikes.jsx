import React from "react";
import Workflow from "./workflow";

const bikes = () => {
  const bike = [
    {
      id: 1,
      name: "Mercedes Grand Sedan",
      brand: "AUDI",
      image: "250",
      price: "$25",
      color: "red",
    },
    {
      id: 2,
      name: "Mercedes Grand Sedan",
      brand: "FROD",
      image: "250",
      price: "$25",
      color: "red",
    },
    {
      id: 3,
      name: "Mercedes Grand Sedan",
      brand: "Cheverolet",
      image: "/placeholder",
      price: "$25",
      color: "red",
    },

    {
      id: 4,
      name: "Mercedes Grand Sedan",
      brand: "Mercedes",
      image: "/api",
      price: "$25",
      color: "red",
    },
    {
      id: 4,
      name: "Mercedes Grand Sedan",
      brand: "Mercedes",
      image: "/api",
      price: "$25",
      color: "red",
    },
    {
      id: 4,
      name: "Mercedes Grand Sedan",
      brand: "Mercedes",
      image: "/api",
      price: "$25",
      color: "red",
    },
    {
      id: 4,
      name: "Mercedes Grand Sedan",
      brand: "Mercedes",
      image: "/api",
      price: "$25",
      color: "red",
    },
    {
      id: 4,
      name: "Mercedes Grand Sedan",
      brand: "Mercedes",
      image: "/api",
      price: "$25",
      color: "red",
    },
  ];

  return (
    <>
      <div className=" mx-auto px-4 py-16 mt-8 font-serif">
        <div className="text-center">
          <h3 className="text-yellow-500 font-medium uppercase tracking-wide mb-2">
            WHAT WE OFFER
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral">
            Choose Your Bike
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 bg-white p-6 mt-8 gap-6">
          {bike.map((car) => (
            <div
              key={car.id}
              className="card bg-white overflow-hidden border border-gray-200 gap-6"
            >
              <div className="relative">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-48 object-cover text-black "
                />
                <div className="absolute bottom-0 left-0 bg-white p-2 flex items-center text-black border">
                  <span className="text-xl font-bold ">{car.price}</span>
                  <span className="text-xs ml-1 ">/DAY</span>
                </div>
              </div>
              <div className="card-body p-4 text-black">
                <h2 className="card-title text-center w-full justify-center text-lg font-bold">
                  {car.name}
                </h2>
                <p className="text-center text-gray-500 text-sm tracking-widest uppercase">
                  {car.brand}
                </p>
                <div className="card-actions justify-between mt-4 text-red-700">
                  <button className="btn-block p-3 bg-yellow-500 text-white font-medium rounded hover:bg-orange-600 transition-colors cursor-pointer">
                    Book now
                  </button>
                  <button className="btn-block p-3 bg-yellow-500 text-white font-medium rounded hover:bg-orange-600 transition-colors cursor-pointer">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Workflow/>
      </div>
    </>
  );
};

export default bikes;
