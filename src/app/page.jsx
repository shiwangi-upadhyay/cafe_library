"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Book, Clock, User } from "lucide-react";
import Contact from "@/components/Contact";
import Category from "@/components/Category";
import BookReadingCards from "@/components/BookReadingCards";

export default function Home() {
  return (
    <>
      {/* Hero Section - Modernized */}
      <section className="relative min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        {/* Background Elements with Tailwind animation classes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite]"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_2s]"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-[blob_7s_infinite_4s]"></div>
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Redesigned Hero Content */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between py-8 lg:py-16">
            {/* Left Column */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 pt-10 lg:pt-0"
            >
              <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
                Welcome to BookWall
              </span>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                The
                <span className="relative">
                  <span className="inline-block relative z-10 mx-3 text-indigo-600">Perfect</span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-indigo-100 z-0"></span>
                </span>
                <br />
                Library Experience
              </h1>
              
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Discover a curated collection of literary treasures and create your own perfect book wall. Immerse yourself in the world of classic and contemporary literature.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/franchise">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 bg-indigo-600 text-white rounded-full font-medium flex items-center gap-2 shadow-lg shadow-indigo-200 transition-colors hover:bg-indigo-700"
                  >
                    Book a Service
                    <ArrowRight size={18} />
                  </motion.button>
                </Link>
                
                <Link href="/about">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3.5 bg-white border border-gray-300 text-gray-700 rounded-full font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
            
            {/* Right Column - Improved Image Display */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-indigo-600/30 rounded-lg blur-xl"></div>
                <div className="relative overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/bookwall.jpg"
                    alt="The Perfect Library"
                    width={600}
                    height={500}
                    className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />
                </div>
                
                {/* Stats Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white py-4 px-6 rounded-lg shadow-xl flex items-center gap-4 border-l-4 border-indigo-600"
                >
                  <div className="rounded-full bg-indigo-100 p-3">
                    <Book className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Books Available</p>
                    <p className="text-xl font-bold">2,500+</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section - Elevated */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Explore Our Categories</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-gray-600">Browse through our carefully curated collection of books across various genres</p>
          </div>
          
          <Category />
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-indigo-600 font-medium uppercase tracking-wider text-sm">Curated Selection</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Featured Books</h2>
            <p className="text-gray-600">Discover titles that are currently trending among our readers</p>
          </div>
          
          <BookReadingCards />
        </div>
      </section>

      {/* Contact Section - Kept at bottom */}
      <section className="bg-white">
        <Contact />
      </section>
    </>
  );
}