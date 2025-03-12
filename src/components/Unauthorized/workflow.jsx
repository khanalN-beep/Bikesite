import React from "react";
import Testimonial from "./testimonial";

const steps = [
  {
    id: 1,
    icon: "location",
    title: "Pick Destination",
    discription:
      "A small river named dudan flows by their place and supplies it with you",
  },
  {
    id: 2,
    icon: "select",
    title: "Select Term",
    discription:
      "A small river named dudan flows by their place and supplies it with you",
  },
  {
    id: 1,
    icon: "bike",
    title: "Choose A Bike",
    discription:
      "A small river named dudan flows by their place and supplies it with you",
  },
  {
    id: 1,
    icon: "person",
    title: "Enjoy The Ride",
    discription:
      "A small river named dudan flows by their place and supplies it with you",
  },
];

const workflow = () => {
  return (
    <>
      <div className="relative w-full bg-amber-400">
        {/* Backgroud Image */}
        <div className="absolute inset-0 bg-blue-500">
          <img
            src=",..............."
            alt="bike background"
            className="w-full h-full object-cover opacity-50 text-black"
          />
        </div>

        <div className="relative z-10 py-16 px-4 md:px-12 lg:px-24">
          {/* Heading */}
          <div className="text-center mt-16">
            <h3 className=" font-medium uppercase mb-2 text-white">WORKFLOW</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-8">
              How it works
            </h2>
          </div>
          <div className=" mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto cursor-pointer">
            {steps.map((step) => (
              <div
                key={step.id}
                className="flex flex-col items-center text-center"
              >
                {/* Icon*/}
                <div className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-yellow-300">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full text-white">
                    {step.icon === "location" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                        />
                      </svg>
                    )}
                    {step.icon === "select" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002"
                        />
                      </svg>
                    )}

                    {step.icon === "bike" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                        />
                      </svg>
                    )}
                    {step.icon === "person" && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-white text-xl font-bold mb-4 mt-8">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {step.discription}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
            <Testimonial/>
      </div>
    </>
  );
};

export default workflow;
