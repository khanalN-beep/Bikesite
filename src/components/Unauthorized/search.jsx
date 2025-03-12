import React from "react";
import Services from "./services";

const Search = () => {
  const filters = [
    {
      id: "model",
      label: "Select Model",
      options: [
        "Model 1",
        "Model 2",
        "Model 3",
        "Model 4",
        "Model 5",
        "Model 6",
        "Model 7",
        "Model 8",
        "Model 9",
        "Model 10",
        "Model 11",
        "Model 12",
        "Model 13",
      ],
    },
    {
      id: "brand",
      label: "Select Brand",
      options: [
        "Brand 1",
        "Brand 2",
        "Brand 3",
        "Brand 4",
        "Brand 5",
        "Brand 6",
        "Brand 7",
        "Brand 8",
        "Brand 9",
        "Brand 10",
        "Brand 11",
        "Brand 12",
        "Brand 13",
      ],
    },
    {
      id: "year",
      label: "Year Model",
      options: ["2021", "2020", "2019", "2018", "2017", "2016"],
    },
    {
      id: "price",
      label: "Price Limit",
      options: [
        "$1",
        "$100",
        "$200",
        "$300",
        "$400",
        "$500",
        "$600",
        "$700",
        "$800",
        "$900",
        "$1000",
        "$2000",
      ],
    },
  ];

  return (
    <>
      <div className="p-6 mt-20 bg-white flex justify-around font-serif">
        <div className="flex flex-wrap gap-4">
          {filters.map((filter) => (
            <div key={filter.id} className="w-64">
              <div className="mb-2 text-gray-800 font-bold">
                {filter.label}
              </div>
              <div className="relative">
                <select className="w-full p-3 border border-gray-200 rounded appearance-none bg-white text-gray-500 focus:outline-none">
                  <option selected>{filter.label}</option>
                  {filter.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-orange-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-end">
            <button className="w-64 p-3 bg-yellow-500 text-white font-medium rounded hover:bg-orange-600 transition-colors cursor-pointer">
              Search
            </button>
          </div>
        </div>
      </div>
      <div>
        <Services/>
      </div>
    </>
  );
};

export default Search;
