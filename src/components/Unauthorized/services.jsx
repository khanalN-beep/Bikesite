import React from "react";
import Bikes from "./bikes";

const ServicesSection = () => {
  const services = [
    {
      icon: "wrench",
      title: "24/7 Car Support",
      description:
        "A small river named Duden flows by their place and supplies it with you",
    },
    {
      icon: "map-pin",
      title: "Lots of location",
      description:
        "A small river named Duden flows by their place and supplies it with you",
    },
    {
      icon: "calendar",
      title: "Reservation",
      description:
        "A small river named Duden flows by their place and supplies it with you",
    },
    {
      icon: "car",
      title: "Rental Bike",
      description:
        "A small river named Duden flows by their place and supplies it with you",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-16 mt-8  font-serif">
        <div className="text-center mb-16">
          <h3 className="text-yellow-500 font-medium uppercase tracking-wide mb-2">
            OUR SERVICES
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white card ">
              <div className="card-body items-start">
                <div className="mb-4">
                  <span className="text-yellow-400">
                    {service.icon === "wrench" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-12 h-12"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
                        />
                      </svg>
                    )}
                    {service.icon === "map-pin" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    )}
                    {service.icon === "calendar" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    )}
                    {service.icon === "car" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 4H5a2 2 0 00-2 2v4h18V6a2 2 0 00-2-2zM5 14a2 2 0 00-2 2v2a2 2 0 002 2h14a2 2 0 002-2v-2a2 2 0 00-2-2H5z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 16h12M6 8h12"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                <h2 className="card-title text-xl text-black font-bold mb-2">
                  {service.title}
                </h2>
                <p className=" text-black">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Bikes />
      </div>
    </>
  );
};

export default ServicesSection;
