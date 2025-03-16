import React from 'react'
import Navbar from '../navbar'
import About from '../about'

const aboutpage = () => {
  return (
    <div>
        <Navbar/>
      <div className="h-screen bg-blue-400  z-0">
        <img src="/" alt="H weqee  ello" className="w-full h-full" />
        {/* <div className="top-0 left-0 right-0 "> */}
        {/* </div> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-yellow-500 text-5xl font-bold">About Us</h2>
        </div>
      </div>
      <About/>
    </div>
  )
}

export default aboutpage;
