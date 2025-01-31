"use client"

import React from 'react'

const page = () => {
    return (
        <>
            <div className="min-h-[90vh] flex flex-col gap-5 items-center justify-center bg-brown-100 overflow-hidden ">
            <div className="container  mx-auto flex flex-col-reverse lg:flex-row items-center px-6 lg:px-0">
                {/* Left Section */}
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:items-start text-center  lg:text-left mt-8 lg:mt-0 gap-4">
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black ">
                    Contact Us
                </h1>
                <p className="text-sm">Welcome here !</p>
                
                </div>
                {/* Right Section */}
                <div className="w-full min-h-[85vh] lg:w-1/2 flex items-center justify-center  ">
                <section className="bg-white min-h-screen">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900">Contact Us</h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                        Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                        </p>
                        <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5"
                            placeholder="name@example.com"
                            required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input
                            type="text"
                            id="subject"
                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-gray-400 focus:border-gray-400"
                            placeholder="Let us know how we can help you"
                            required
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea
                            id="message"
                            rows="6"
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
                    </div>
                    </section>
                </div>
            </div>
            </div>
        </>
    )
}

export default page