import React from "react";
import Footer from "./footer";

const blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Lead Generation is Key for Business Growth",
      image: "/",
      date: "JULY. 24, 2019",
      author: "ADMIN",
      comments: 3,
      discription:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      imageAlt: "Off-road vehicle with people celebrating on top",
    },
    {
      id: 2,
      title: "Why Lead Generation is Key for Business Growth",
      image: "/",
      date: "JULY. 24, 2019",
      author: "ADMIN",
      comments: 3,
      discription:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      imageAlt: "Custom motorcycle on cobblestone street",
    },
    {
      id: 3,
      title: "Why Lead Generation is Key for Business Growth",
      image: "/",
      date: "JULY. 24, 2019",
      author: "ADMIN",
      comments: 3,
      discription:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      imageAlt: "Gray sports car with blue stripe",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="pt-4">
                <div className="px-4 pb-3 text-gray-500 text-sm flex items-center space-x-4">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                    {post.comments}
                  </span>
                </div>

                <div className="px-4 pb-6">
                  <h3 className="text-xl font-bold mb-3 text-black  hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600">{post.discription}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};  

export default blog;
