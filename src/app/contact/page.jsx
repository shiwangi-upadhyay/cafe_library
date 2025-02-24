"use client";
import React from "react";

const page = () => {
  return (
    <>
      <div className="w-full min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] px-6 md:px-0 flex flex-col lg:flex-row items-center justify-around">
        {/* Left Section */}
        <h1 className="text-3xl hidden md:block sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
          Contact Us
        </h1>
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
    </>
  );
};

export default page;
