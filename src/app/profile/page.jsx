"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Button } from "@material-tailwind/react";

const page = () => {
  const userData = useSelector((state) => state.user.userData); // Redux state to get user data
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/users/logout");
      const data = await response.json();
      if (data.success) {
        router.push("/");
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error Logging Out");
    }
  };

  return (
    <div className="min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] flex flex-col justify-center items-center bg-gray-100 p-6 relative">
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-center mb-4">Profile</h2>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-2xl shadow-lg w-72 lg:w-96">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
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
          <p className="text-gray-500 text-sm">{userData?.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4 text-sm text-gray-700">
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-500">Role: </p>
            <p className="text-gray-900">
              {userData?.isAdmin ? "Admin" : "User"}
            </p>
            <p className="text-gray-500">Verified: </p>
            <p className="text-gray-900">
              {userData?.isVerified ? "Verified" : "Not Verified"}
            </p>
            <p className="text-gray-500">Membership: </p>
            <p className="text-gray-900">
              {userData?.membership ? userData?.membership : "N/A"}
            </p>
            <p className="text-gray-500">Referral Code: </p>
            <p className="text-blue-600 font-bold">
              {userData?.referralCode ? userData?.referralCode : "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="absolute bottom-5 right-5">
        <Button onClick={handleLogout}>Logout</Button>
      </div>
    </div>
    
  );
};

export default page;