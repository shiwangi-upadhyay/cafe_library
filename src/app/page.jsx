"use client";
import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import SearchBar from "@/components/SearchBar";
import Contact from "@/components/Contact";
import Category from "@/components/Category";
import Link from "next/link";
import BookReadingCards from "@/components/BookReadingCards";

export default function Home() {
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
            <Link href="/franchise">
              <button className="cursor-pointer group relative flex items-center gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md ">
                Book a Service
                <FaArrowCircleRight className="text-xl" />
              </button>
            </Link>
            
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
          </div>
      </div>
      {/*<Menu />*/}
      <Category/>
      <BookReadingCards/>
      <Contact/>
    </>
  );
}
