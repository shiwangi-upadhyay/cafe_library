"use client"
import React from 'react';
import Image from "next/image";
import { useSelector } from 'react-redux';
const page = () => {
  const userData = useSelector((state) => state.user.userData);
  return (
    <div className=" min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] flex flex-col justify-center items-center bg-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>
      {/* Profile Card */}
      
      <div className='bg-white p-6 rounded-2xl shadow-lg w-72 lg:w-96'>
        {/*Profile*/}
        <div className='flex flex-col items-center'>
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-300">
              <Image
                src="/images/bookwall.jpg" // Replace with actual image URL
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="text-xl font-semibold mt-3 flex items-center">
              {userData?.username}
            </h2>
          <p className='text-gray-500 text-sm'> 
            {userData?.email}
          </p>
        </div>

        {/*profile details}*/}
        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-500">Role: </p>
            <p className="text-gray-900">{userData?.isAdmin ? "Admin" : "User"}</p>
            <p className="text-gray-500">Verified: </p>
            <p className="text-gray-900">{userData?.isVerified ? "Verified" : "Not Verified"}</p>
            <p className="text-gray-500">Membership: </p>
            <p className="text-gray-900">{userData?.membership ? userData?.membership : "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page