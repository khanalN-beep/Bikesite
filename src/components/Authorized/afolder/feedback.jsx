import React, { useState } from 'react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "WILL SMITH",
      text: "I had an amazing experience renting a bike from this company!! he process was smooth, the staff was friendly and helpful, and the bike was in excellent condition. The rental rates were reasonable, and the whole experience was hassle-free.I highly recommend them to anyone looking for a reliable and affordable bike rental service. Will definitely rent again!"
    },
    {
      id: 2,
      name: "NARENDRA MODI",
      text: "Great service and well-maintained bikes! The booking process was easy, and the staff was very professional and accommodating. The bike performed perfectly throughout my ride, making the experience enjoyable and stress-free. I highly recommend them to anyone looking for a reliable and affordable bike rental service. Will definitely rent from hereagain! "
    },
    {
      id: 3,
      name: "MICHAEL JACKSON",
      text: "Had a fantastic experience with [Company Name]! The bike was in excellent condition, and the rental process was quick and hassle-free. The team was super friendly and ensured I had everything I needed for a smooth ride.the bike was well-maintained and super comfortable to ride.  Definitely my go-to bike rental service—highly recommended! "
    },
    {
      id: 4,
      name: "EMMA WATSON",
      text: `Such a great bike rental service! The process was smooth, and the team was so kind and accommodating. The bike was easy to handle and perfect for my ride. the bike was well-maintained and stylish. I felt safe and comfortable throughout my ride. Highly recommend for a fun and hassle-free rental! I'll definitely be coming back! Enjoyyyyyyyyyyy`
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  // Display 3 testimonials at a time
  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length]
  ];

  return (
    <div className="bg-base-200 min-h-screen py-16 px-4" data-theme="dark">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary text-4xl font-bold text-center mb-2">TESTIMONIALS</h2>
        <div className="w-64 h-1 bg-base-content mx-auto mb-8"></div>
        <h3 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h3>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide} 
            className="cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-primary-focus focus:outline-none"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide} 
            className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center z-10 hover:bg-primary-focus focus:outline-none"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="relative">
                <div className="bg-base-100 rounded-lg shadow-lg pt-16 pb-6 px-6">
                  {/* Avatar Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 -top-12">
                    <div className="w-24 h-24 rounded-full bg-base-300 border-4 border-base-100 overflow-hidden flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Top Primary Section */}
                  <div className="bg-primary -mx-6 px-6 pt-10 pb-6 mb-4 text-white">
                    <span className="text-5xl font-serif leading-none absolute -left-2 top-12">"</span>
                    <p className="relative z-10 mb-0">{testimonial.text}</p>
                    <span className="text-5xl font-serif leading-none absolute right-4 bottom-0">"</span>
                  </div>
                  
                  {/* Name */}
                  <div className="text-center">
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <div className="w-12 h-1 bg-base-content mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;