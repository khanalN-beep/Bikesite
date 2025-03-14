import React from "react";
import { useState } from "react";
import Footer from "../footer";
import Navbar from "../navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const filters = [
    {
      icon: "book",
      title: "Address:",
      about: "198 West 21th Street, Suite 721 New York NY 10016",
    },
    {
      icon: "phone",
      title: "Phone:",
      about: "+ 1234 567 890",
    },
    {
      icon: "mail",
      title: "Email:",
      about: "info@yoursite.com",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="h-screen bg-blue-400  z-0">
        <img src="/" alt="H weqee  ello" className="w-full h-full" />
        {/* <div className="top-0 left-0 right-0 "> */}
        {/* </div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-yellow-500 text-5xl font-bold">Contact Us</h2>
        </div>
      </div>
      <div className="h-full bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filters.map((post, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 border-r last:border-r-0"
            >
              {post.icon === "book" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 mb-3 text-gray-500"
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
              {post.icon === "phone" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mb-3 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              )}
              {post.icon === "mail" && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 mb-3 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )}
              <h3 className="font-bold text-lg mb-2 text-black">
                {post.title}
              </h3>
              <p className="text-gray-600">{post.about}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-gray-50 p-8 rounded-lg text-black">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 "
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300 resize-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 hover:bg-orange-600 text-white font-medium rounded-md transition-colors duration-300 cursor-pointer mb-8"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
