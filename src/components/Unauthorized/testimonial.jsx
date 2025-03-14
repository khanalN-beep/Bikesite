import React from "react";
// import Footer from "./footer";
import About from "./about"

const Testimonial = () => {
  const clients = [
    {
      image: "placeholder.com",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      title: "Roger Scott",
      work: "UI Designer",
    },
    {
      image: "placeholder.com",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      title: "Roger Scott",
      work: "Web Developer",
    },
    {
      image: "placeholder.com",
      description:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      title: "Roger Scott",
      work: "System Analyst",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-16 mt-8 font-serif text-center">
        <h3 className="text-yellow-500 font-medium uppercase tracking-wide mb-2">
          Testimonial
        </h3>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Happy Clients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200"
            >
              <img
                src={client.image}
                alt={client.title}
                className="w-24 h-24 mx-auto rounded-full mb-4 text-black"
              />
              <p className="text-gray-600 mb-4 mt-36">{client.description}</p>
              <h4 className="text-lg font-bold text-orange-500 mt-6">
                {client.title}
              </h4>
              <p className="text-gray-400 text-sm mt-4">{client.work}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <About/>
      </div>
    </>
  );
};

export default Testimonial;
