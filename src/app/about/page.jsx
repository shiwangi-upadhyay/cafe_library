"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

// Import Lucide React icons
import { 
  ChevronRight, 
  Phone, 
  Clock, 
  User, 
  Mail,
  Instagram, 
  Facebook, 
  Twitter, 
  Github, 
  Linkedin, 
  ArrowRight
} from "lucide-react";

// Import other icon libraries if needed
import { FaDribbble } from 'react-icons/fa';

const page = () => {
  const pathname = usePathname();
  const [currentDateTime, setCurrentDateTime] = useState("2025-04-02 07:50:05");
  const [username, setUsername] = useState("shiwangi-upadhyay");

  // For animation when elements come into view
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[60vh] overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bgcontact.avif" 
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-70"
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Us</span>
            </h1>
            <div className="w-24 h-1 bg-white mb-6"></div>
            <p className="text-xl text-gray-100 max-w-xl mb-8">
              We build bridges between your literary dreams and reality.
            </p>
            
            <div className="flex items-center space-x-4 font-light text-sm">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center">
                Home
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/about" className="text-blue-400 flex items-center">
                About
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Book Wall Section - Modernized */}
      <div className="w-full py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight">
                I <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400">REALLY</span> <br />
                LOVE TO <br />
                MAKE <span className="border-b-4 border-indigo-600 pb-2">BOOK</span> <br />
                WALLS
              </h2>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  width={750}
                  height={750}
                  src="/images/bookwall.jpg"
                  alt="Book Wall"
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <p className="text-white text-lg">Crafting beautiful book displays since 2015</p>
                </div>
              </div>
              
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
                <span className="rotate-12">Art</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* We Build Bridges Section */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-bold leading-tight">
                WE <span className="underline decoration-indigo-600 decoration-4 underline-offset-8">build bridges</span> <br /> 
                between <span className="text-gray-600 italic">your dreams <br /> and reality</span>
              </h2>
            </motion.div>

            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati veniam tempore beatae ratione ad nam unde impedit sunt? Sapiente, nisi? Our design philosophy combines aesthetics with functionality, creating spaces that inspire and endure.
              </p>
              
              <div className="mt-8 flex space-x-6">
                <div className="w-24 h-1 bg-indigo-600 self-center"></div>
                <p className="text-gray-500 italic">Est. 2015</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Full Width Image - Modernized */}
      <div className="relative h-[80vh] overflow-hidden">
        <Image
          src="/images/aboutbg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Our Vision"
          className="w-full"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm">
          <div className="h-full flex items-center justify-center">
            <div className="text-center p-8 max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  "Design is not just what it looks like. Design is how it works."
                </h2>
                <p className="text-xl text-gray-200">- Steve Jobs</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section - Modernized */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 max-w-xl"
          >
            <span className="text-indigo-600 font-semibold tracking-widest uppercase">Our Leadership</span>
            <h2 className="text-5xl font-bold mt-2 mb-6">
              Meet our <br /> <span className="text-gray-600">exceptional team</span>
            </h2>
            <div className="w-24 h-1 bg-indigo-600"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* 1st Team Member */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl">
                <CardHeader floated={false} className="h-80 overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="Claire Bennett" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </CardHeader>
                <CardBody className="text-center py-6">
                  <Typography variant="h4" color="blue-gray" className="mb-2 font-serif">
                    Claire Bennett
                  </Typography>
                  <div className="w-12 h-0.5 bg-indigo-600 mx-auto my-3"></div>
                  <Typography color="blue-gray" className="font-medium tracking-wider uppercase text-sm">
                    Creative Director
                  </Typography>
                  
                  <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* 2nd Team Member (CEO) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-xl border-b-4 border-indigo-600 transform -translate-y-4 bg-white rounded-xl">
                <CardHeader floated={false} className="h-96 overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="Natalie Paisley" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </CardHeader>
                <CardBody className="text-center py-8">
                  <Typography variant="h3" color="blue-gray" className="mb-2 font-serif">
                    Natalie Paisley
                  </Typography>
                  <div className="w-16 h-1 bg-indigo-600 mx-auto my-4"></div>
                  <Typography className="font-medium text-indigo-600 tracking-wider uppercase text-sm mb-4">
                    CEO & Founder
                  </Typography>
                  
                  <p className="text-gray-600 mt-4 px-6">
                    "Great design is about creating spaces that people want to spend time in."
                  </p>
                  
                  <div className="mt-6 flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <FaDribbble size={20} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            {/* 3rd Team Member */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white rounded-xl">
                <CardHeader floated={false} className="h-80 overflow-hidden">
                  <div className="h-full w-full overflow-hidden">
                    <img 
                      src="/images/aboutbg.jpg" 
                      alt="Michael Chen" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </CardHeader>
                <CardBody className="text-center py-6">
                  <Typography variant="h4" color="blue-gray" className="mb-2 font-serif">
                    Michael Chen
                  </Typography>
                  <div className="w-12 h-0.5 bg-indigo-600 mx-auto my-3"></div>
                  <Typography color="blue-gray" className="font-medium tracking-wider uppercase text-sm">
                    Technology Lead
                  </Typography>
                  
                  <div className="mt-4 flex justify-center space-x-4">
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Section - Modernized */}
      <div className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column */}
            <motion.div 
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-sm text-indigo-600 font-semibold tracking-widest uppercase mb-2 inline-block">Our Story</span>
              <h2 className="text-6xl font-bold leading-tight mb-8">
                BookWall Service & <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-400">Book Renting</span>
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fuga, saepe dolorem est esse numquam.
              </p>
              
              <div className="flex space-x-8">
                <a href="#" className="group flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors">
                  <span>Facebook</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://www.instagram.com/teaknowage/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <span>Instagram</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
            
            {/* Right Columns */}
            <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                className="animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="h-1.5 w-16 bg-indigo-600 mb-6"></div>
                <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  nec odio ipsum. Suspendisse cursus malesuada facilisis. Mauris in
                  mauris ut lacus consequat egestas a sed felis. Nullam nec tellus at
                  justo varius placerat.
                </p>
              </motion.div>
              
              <motion.div 
                className="animate-on-scroll"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="h-1.5 w-16 bg-indigo-600 mb-6"></div>
                <h3 className="text-xl font-bold mb-4">Our Commitment</h3>
                <p className="text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
                  nec odio ipsum. Suspendisse cursus malesuada facilisis. Mauris in
                  mauris ut lacus consequat egestas a sed felis. Nullam nec tellus at
                  justo varius placerat.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA - Modernized */}
      <div className="relative overflow-hidden bg-gradient-to-r from-indigo-700 to-indigo-900 py-24 px-6 md:px-12 lg:px-24 text-white rounded-t-3xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16">
          <svg className="opacity-10" width="400" height="400" viewBox="0 0 200 200">
            <path fill="currentColor" d="M45,-78.1C58.3,-71.3,69.4,-59.4,75.6,-45.3C81.7,-31.3,82.9,-15.6,83.2,0.2C83.4,16,82.7,31.9,76.1,45.3C69.6,58.7,57.2,69.5,43.4,76.3C29.7,83.2,14.9,86.1,0.2,85.8C-14.5,85.5,-28.9,82,-43,75.3C-57.2,68.7,-71,58.9,-77.3,45.3C-83.5,31.7,-82.2,14.2,-80.9,-2.2C-79.5,-18.6,-77.9,-35.3,-69.4,-48C-60.9,-60.7,-45.5,-69.3,-30.7,-75C-15.9,-80.7,-1.4,-83.4,13.8,-83.3C29,-83.1,58,-84.9,79.5,-75.6C101,-66.3,58.3,-71.3,45,-78.1Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-indigo-200 text-sm uppercase tracking-wider font-semibold">Need Help?</span>
                <h2 className="text-5xl font-bold mt-4 mb-6">
                  Have a question? <br /> 
                  Our team is happy <br /> 
                  to assist you
                </h2>
                <p className="text-indigo-100 text-lg mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non vero modi! Sint, quis eius?
                </p>

                <div className="flex flex-wrap gap-6 items-center">
                  <Link href="/contact">
                    <button className="group relative overflow-hidden px-8 py-4 bg-white text-indigo-800 rounded-full hover:bg-opacity-90 transition font-semibold shadow-lg flex items-center space-x-2">
                      <span className="relative z-10">Contact Us</span>
                      <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                      <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                    </button>
                  </Link>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-indigo-200 text-sm">Call us directly at</p>
                      <p className="font-semibold">+91-7078633060</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500">
                <Image
                  src="/images/aboutbg.jpg"
                  width={800}
                  height={600}
                  alt="Contact us"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;