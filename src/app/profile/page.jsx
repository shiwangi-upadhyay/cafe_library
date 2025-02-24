"use client"
import React from 'react';
import Image from "next/image";
import { Button } from "@material-tailwind/react";
const page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>

      {/* Profile Card */}
      <div className="flex flex-col items-center p-6 md:p-10 w-full max-w-xl bg-white shadow-lg rounded-2xl">
        
        {/* Profile & User Info Container */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Profile Image */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300">
            <Image
              src="/images/bookwall.jpg" // Replace with actual image URL
              alt="Profile Picture"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          {/* User Info */}
          <div className="ml-0 md:ml-6 text-center md:text-left mt-4 md:mt-0">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <Button className="mt-2">Edit Profile</Button>
          </div>
        </div>

        {/* User Info Section */}
        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold mb-3">User Info</h3>
          <p className="text-gray-600"><strong>Email:</strong> johndoe@example.com</p>
          <p className="mt-2 text-gray-600">
            <strong>Bio:</strong>  
            A passionate web developer with a deep love for crafting beautiful, functional, and efficient web applications.  
            Specializing in front-end development, I enjoy working with modern frameworks like React and Next.js.  
            Always eager to learn and collaborate, I believe in continuous growth and staying up-to-date with industry trends.
          </p>
          <p className="mt-2 text-gray-600"><strong>Membership:</strong> Pro Member</p>
        </div>
      </div>
    </div>
  );
};

export default page