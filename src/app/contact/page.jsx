"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();
  return (
    <>
    <div className="w-full min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh]  flex flex-col justify-center items-center"> 

        <div className="w-full h-[10%] text-center rounded-b-lg bg-blue-gray-800 py-4">
          <h2 className="text-2xl font-semibold text-center mb-4 text-white">Contact Us</h2>
          <div>
          <Link className={`${pathname === "/" ? " text-white" : "text-blue-gray-500" }`} href="/">
              Home
            </Link>
            
            <span> | </span>
            <Link className={`${pathname === "/contact" ? " text-white" : "text-green-500" }`} href="/contact">
              Contact
            </Link>
          </div>
        </div>
      <div className="flex flex-col lg:flex-row items-center justify-around px-6 md:px-0 lg:px-10">
        
        {/* Left Section */}
        <div className="flex flex-col  w-full lg:w-1/2">
          <h1 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            LET'S MAKE US 
            <br />
            MORE BETTER!
          </h1>
            <p className="text-sm text-gray-700 mt-4 w-[75%]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur exercitationem voluptate delectus totam obcaecati rem laboriosam, quidem esse placeat? Voluptas, quisquam harum eligendi mollitia tempora nobis fuga modi perferendis rem.</p>
            <div className="flex flex-col sm:flex-row justify-start gap-8 lg:gap-10  mt-8 lg:mt-12 g">
              <div className="">
                <h3 className="text-lg font-bold">Address</h3>
                <p className="text-sm text-gray-700">LIG-78 A BLOCK, Shastripuram,
                  <br />
                  Agra, Uttar Pradesh, India
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Email</h3>
                <p className="text-sm text-gray-700">
                  conatct@technoparticles.com
                </p>
              </div>
            </div>
            <p className="mt-8 lg:mt-12 font-bold text-green-800 text-2xl underline">+91 909090909</p>
            <div className="flex gap-4 mt-8 lg:mt-12 cursor-pointer">
              <p>Facebook</p>
              <p>Instagram</p>
            </div>
        </div>
        
        {/* Right Section */}
        <section className="bg-white py-4 lg:py-8 px-4 lg:px-8 w-full lg:w-1/2 min-h-[50vh] rounded-lg shadow-lg">
          <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">
            Contact Us
          </h3>
          <p className="mb-4 lg:mb-8 font-light text-center text-gray-500 sm:text-lg">
            Got a technical issue? Want to send feedback about a beta feature?
            Let us know.
          </p>
          <form action="#" className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5"
                placeholder="name@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-gray-400 focus:border-gray-400"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-black sm:w-fit hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300"
            >
              Send message
            </button>
          </form>
        </section>
      </div>
      </div>
    </>
  );
};

export default page;
