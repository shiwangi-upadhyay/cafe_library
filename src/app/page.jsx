"use client";
import React, { useEffect, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import SearchBar from "@/components/SearchBar";
import Menu from "@/components/Menu";
import { useDispatch } from "react-redux";
import { setFranchiseDetails } from "@/redux/slices/user";

export default function Home() {
  const [franchises, setFranchises] = useState([]);

  //Fetch franchises data from sanity
  const fetchFranchiseData = async () => {
    const res = await client.fetch(`*[_type == "franchiseType"]`);
    setFranchises(res);
  };

  // Fetch franchise data
  useEffect(() => {
    fetchFranchiseData();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className="min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] flex flex-col gap-5 items-center justify-center">
        <div className="container  mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-0">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start text-center  lg:text-left mt-8 lg:mt-0 gap-4">
            <p className="text-sm">Welcome here !</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black ">
              The
              <br />
              Perfect Library
            </h1>
            <button className="cursor-pointer group relative flex items-center gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ">
              Start Renting
              <FaArrowCircleRight className="text-xl" />
            </button>
          </div>
          {/* Right Section */}
          <div className="w-full  lg:w-1/2 flex items-center justify-center bg bg-gray-500 rounded-lg shadow-lg">
            <Image
              src="/images/bookwall.jpg"
              alt="Library"
              width={500}
              height={500}
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
        <div className="w-full h-[55px] flex justify-center items-center gap-2 mt-8 flex-col md:flex-row ">
          <SearchBar />
          <div className="w-50">
            <Select label="Select Location">
              {franchises.map((franchise) => {
                return (
                  <Option
                    key={franchise._id}
                    onClick={() => {
                      dispatch(setFranchiseDetails(franchise));
                    }}
                  >
                    {franchise.name}
                  </Option>
                );
              })}
            </Select>
          </div>
        </div>
      </div>
      <Menu />
    </>
  );
}
