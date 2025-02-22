import React from 'react'

const page = () => {
  return (
    <div className="min-h-[80vh] flex flex-col gap-5 items-center justify-center  overflow-hidden ">
        <div className="container  mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-0">
              {/* Left Section */}
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start text-center  lg:text-left mt-8 lg:mt-0 gap-4">
                <p className="text-md text-gray-600 font-bold">CLIENTS</p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black ">
                    What people say 
                    <br />
                    about us?
                </h1>   
                </div>
                {/* Right Section */}
                <div className="w-full  lg:w-1/2 flex items-center justify-center bg bg-gray-500 rounded-lg shadow-lg">
                            
            </div>
        </div>
    </div>
  )
}

export default page