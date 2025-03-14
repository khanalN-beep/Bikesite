import React from "react";
import Blog from "./blog";

const about = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto overflow-hidden mt-8">
        {/* Left side - Image */}
        <div className="md:w-1/2">
          <img
            src="/placeholder"
            alt="Friends"
            className="w-full h-full object-cover text-black"
          />
        </div>

        {/* Right side - Content */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-orange-400 font-medium uppercase tracking-wider mb-2">
              ABOUT US
            </h3>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Choose A Perfect Car
            </h1>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <p className="leading-relaxed">
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn't take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>

          <button className="bg-yellow-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md w-fit mb-20 cursor-pointer">
            Search Vehicle
          </button>
        </div>
      </div>
      <div>
        <Blog/>
      </div>
    </>
  );
};

export default about;
