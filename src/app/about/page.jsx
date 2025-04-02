"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";

const page = () => {

  const pathname = usePathname();

  const testimonials = [
    {
      name: "Emily Johnson",
      role: "Sales Manager",
      text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      rating: 5,
    },
    {
      name: "Ethan Miller",
      role: "Product Designer",
      text: "I've been using Pagedone for a year now and it's made managing my finances so much easier.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      name: "Olivia Carter",
      role: "Design Lead",
      text: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      rating: 5,
    }
  ];

  return (
    <div className="relative w-full min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] bg-gray-100 py">
      
        <div className="w-full min-h-[30vh] lg:min-h-[40vh] flex flex-col items-center justify-center rounded-b-lg bg-[url('/images/bgcontact.avif')] py-4">
          <h2 className="text-4xl font-semibold text-center mb-4 text-white">About Us</h2>
          <div className="flex gap-4">
          <Link className={`${pathname === "/" ? " text-white" : "text-blue-gray-500" }`} href="/">
              Home
            </Link>
            
            <span> | </span>
            <Link className={`${pathname === "/about" ? " text-white" : "text-green-500" }`} href="/about">
              About
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center mt-16">
          {/* Main Section (Image & Text) */}
          <div className="relative flex items-center justify-center w-full ">
            <div className="relative">
              {/* Image Section (Pushed Right) */}
              <Image
                width={300}
                height={300}
                src="/images/bookwall.jpg"
                alt="Descriptive Alt"
                className="w-[300px] sm:w-[400px] md:w-[750px] h-auto shadow-lg transform translate-x-5 md:translate-x-52"
              />

              {/* Overlapping Text */}
              <h1 className="absolute top-[30%] left-[-10%] sm:left-[-15%] md:left-[-20%] transform -translate-y-1/2 text-4xl sm:text-5xl md:text-8xl font-bold leading-tight text-gray-900 z-10 px-4">
                I REALLY
                <br />
                LOVE TO
                <br />
                MAKE BOOK
                <br />
                WALLS
              </h1>
            </div>
          </div>
        </div>

          <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:px-32 mt-10 lg:mt-20">
            <h1 className="text-5xl font-bold w-full lg:w-1/2">
              WE build bridges <br /> between <span className="text-gray-600">your dreams <br /> and reality</span>
            </h1>
            <p className="w-full lg:w-[40%] pr-32 mt-14 text-start text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veniam tempore beatae ratione ad nam unde impedit sunt? Sapiente, nisi?</p>
          </div>

          <div className="w-[90vw] min-h-[30vh] lg:min-h-[40vh] flex items-center justify-center text-center  p-10 lg:px-32 mx-auto mt-10"> 
            <Image
            src="/images/aboutbg.jpg"
            width={400}
            height={300}
            alt="Descriptive Alt"
            className="w-full h-[30vh] lg:h-[80vh] object-fill rounded-lg"
            />
          </div>

          {/* Team Section */}
          <div className="py-16 px-8 lg:px-32 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-5xl font-bold mb-16 ">
                Meet our <br /> <span className="text-gray-600">exceptional team</span>
              </h1>
              
              <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
                {/* 1st Card */}
                <Card className="w-full max-w-xs lg:max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader floated={false} className="h-72 overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="Team member" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>
                  <CardBody className="text-center py-6">
                    <Typography variant="h4" color="blue-gray" className="mb-2 font-serif">
                      Claire Bennett
                    </Typography>
                    <Typography color="blue-gray" className="font-medium tracking-wider" textGradient>
                      Creative Director
                    </Typography>
                  </CardBody>
                </Card>

                {/* 2nd Card (Larger) */}
                <Card className="w-full max-w-sm lg:max-w-md shadow-xl transform lg:-translate-y-4 border-b-4 border-indigo-500 z-10">
                  <CardHeader floated={false} className="h-80 overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="CEO profile" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>
                  <CardBody className="text-center py-8">
                    <Typography variant="h3" color="blue-gray" className="mb-3 font-serif">
                      Natalie Paisley
                    </Typography>
                    <Typography color="indigo" className="font-medium text-lg tracking-wider" textGradient>
                      CEO & Founder
                    </Typography>
                  </CardBody>
                </Card>

                {/* 3rd Card */}
                <Card className="w-full max-w-xs lg:max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader floated={false} className="h-72 overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="Team member" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </CardHeader>
                  <CardBody className="text-center py-6">
                    <Typography variant="h4" color="blue-gray" className="mb-2 font-serif">
                      Michael Chen
                    </Typography>
                    <Typography color="blue-gray" className="font-medium tracking-wider" textGradient>
                      Technology Lead
                    </Typography>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>

          {/* Thin underline */}
          <div className="border-t border-gray-600 w-full max-w-4xl mx-auto mt-20 "></div>

          {/* Three-Column Section */}
          <div className="flex flex-col gap-5 lg:flex-row justify-between items-center w-full mt-20 lg:mt-30 p-10 lg:px-32">
            {/* Left Column (Smaller) */}
            <div className=" w-full md:w-1/2">

              <h3 className="text-2xl font-bold underline">ABOUT COMPANY</h3>
              <p className="text-6xl font-bold mt-2">BookWall Service & <br /> Book Renting</p>
              <p className="mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga, saepe dolorem est esse numquam.
              </p>
              <div className="flex gap-5  cursor-pointer mt-2">
                <p>Facebook</p>
                <a 
                href="https://www.instagram.com/teaknowage/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-blue-gray-800"
                >
                    <p>Instagram</p>
                </a>
              </div>
            </div>

            <div className=" flex flex-col lg:flex-row items-center justify-around w-full md:w-1/2 gap-5 mt-10 lg:mt-0 ">
              {/* Middle Column (Equal Width) */}
              <div className="w-full">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  nec odio ipsum. Suspendisse cursus malesuada facilisis. Mauris in
                  mauris ut lacus consequat egestas a sed felis. Nullam nec tellus at
                  justo varius placerat. Etiam imperdiet dui a ante faucibus, id
                  molestie ex vehicula.
                </p>
              </div>

              {/* Right Column (Equal Width) */}
              <div className="w-full">
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  nec odio ipsum. Suspendisse cursus malesuada facilisis. Mauris in
                  mauris ut lacus consequat egestas a sed felis. Nullam nec tellus at
                  justo varius placerat. Etiam imperdiet dui a ante faucibus, id
                  molestie ex vehicula.
                </p>
              </div>
            </div>     
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:px-32 py-20 mt-10 lg:mt-20 rounded-t-xl text-white bg-blue-gray-300">
            <div className="flx flex-col w-full lg:w-1/2">
              <h1 className="text-5xl font-bold" >Have a question? <br /> Our team is happy <br /> to assist you </h1>
              <p className="text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non vero modi! Sint, quis eius?</p>

              <div className="flex gap-5 mt-10 text-center" >
              <Link href="/contact">
                <button className="cursor-pointer group relative flex items-center gap-1.5 px-8 py-4 bg-black bg-opacity-80 text-[#f1f1f1] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md  ">
                  Contact Us
                </button>
              </Link>
                <p className="flex justify-center items-center">Or call 
                  <span>+91-7078633060</span></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2  rounded-lg">
              <Image
              src="/images/aboutbg.jpg"
              width={800}
              height={600}
              alt="Descriptive Alt"
              className="w-full h-80 rounded-lg "
              />
            </div>
          </div>
    </div>
  );
};

export default page;
