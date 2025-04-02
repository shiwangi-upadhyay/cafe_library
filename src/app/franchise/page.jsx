"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight } from "lucide-react"; 

import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';

const page = () => {
  const [reviews, setReviews] = useState([]);
  
  const handleReviewAdded = (newReview) => {
    setReviews((prev) => [newReview, ...prev]);
  };
  
  // Testimonial slides
  const slides = [
    { 
      id: 1, 
      image: "/images/aboutbg.jpg", 
      name: "Heather Johnson",
      role: "Book Enthusiast",
      quote: "The BookWall service transformed my living room into a literary sanctuary. Their team was professional and the end result exceeded my expectations."
    },
    { 
      id: 2, 
      image: "/images/aboutbg.jpg", 
      name: "Michael Chen",
      role: "Library Owner",
      quote: "As a library owner, I needed custom book displays that would engage visitors. The team delivered exceptional quality and attention to detail." 
    },
    { 
      id: 3, 
      image: "/images/aboutbg.jpg", 
      name: "Sophia Rodriguez",
      role: "Interior Designer",
      quote: "I recommend BookWall to all my clients looking for sophisticated book displays. The service is unmatched in quality and design versatility."
    },
  ];

  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      {/* Hero Section with Parallax Effect - Manual Header */}
      <div className="relative h-[60vh] overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/bgcontact.avif" 
            fill
            sizes="100vw"
            className="object-cover opacity-70"
            quality={100}
            alt="Hero background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Services</span>
            </h1>
            <div className="w-24 h-1 bg-white mb-6"></div>
            <p className="text-xl text-gray-100 max-w-xl mb-8">
              Explore our comprehensive range of literary services designed to transform spaces with the beauty of books.
            </p>
            
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-4 font-light text-sm">
              <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center">
                Home
              </Link>
              <span className="text-gray-400">•</span>
              <Link href="/franchise" className="text-blue-400 flex items-center">
                Franchise
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Introduction */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          className="container mx-auto px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-16">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
              <motion.span 
                className="text-sm font-medium px-4 py-1 bg-indigo-100 text-indigo-800 rounded-full"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                Our Premier Services
              </motion.span>
              
              <motion.h1 
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.1 }}
              >
                What We Can Do <br />
                <span className="text-indigo-600">For Our Clients</span>
              </motion.h1>
              
              <motion.p 
                className="text-gray-600 mt-4 max-w-xl"
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
              >
                We specialize in creating stunning book displays that elevate spaces and showcase your literary collection. Our team of experts works with precision and creativity to bring your vision to life.
              </motion.p>
            </div>
            
            <motion.div 
              className="w-full lg:w-1/2"
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-indigo-600/20 rounded-lg blur-lg"></div>
                <Image
                  src="/images/aboutbg.jpg"
                  width={600}
                  height={400}
                  alt="Our Services"
                  className="w-full h-[40vh] object-cover rounded-lg relative z-10 shadow-xl"
                />
              </div>
            </motion.div>
          </div>
          
          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-row items-start gap-6">
                <div className="p-4 rounded-full bg-indigo-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">BookWall Creation</h2>
                  <ul className="space-y-3">
                    {["Customized book displays", "Professional installation", "Aesthetic arrangement", "Premium book selection"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-indigo-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-row items-start gap-6">
                <div className="p-4 rounded-full bg-indigo-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Library Design</h2>
                  <ul className="space-y-3">
                    {["Space optimization", "Thematic arrangement", "Lighting solutions", "Ergonomic shelving"].map((item, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle size={18} className="text-indigo-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Rest of the sections remain the same... */}
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
        {/* Content remains the same */}
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <span className="text-indigo-400 font-medium uppercase tracking-wider text-sm">Success Stories</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Our Clients Achieve Their Goals</h2>
            <p className="text-gray-400">See what our clients have accomplished with our services</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              effect="fade"
              modules={[Navigation, Pagination, EffectFade, Autoplay]}
              loop={true}
              className="testimonial-swiper rounded-xl overflow-hidden"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id} className="bg-gray-800 rounded-xl">
                  {/* Slide content remains the same */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    <div className="order-2 lg:order-1">
                      <div className="mb-6">
                        {/* Star rating SVGs */}
                        <svg className="h-8 text-yellow-400 inline-block" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Z" />
                        </svg>
                        {/* Repeat 4 more stars */}
                      </div>
                      
                      <blockquote className="text-xl italic mb-8">"{slide.quote}"</blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-700">
                          <Image 
                            src={slide.image} 
                            alt={slide.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{slide.name}</h3>
                          <p className="text-sm text-gray-400">{slide.role}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="order-1 lg:order-2 aspect-square">
                      <div className="relative h-full rounded-lg overflow-hidden shadow-2xl">
                        <Image
                          src={slide.image}
                          alt={`${slide.name}'s project`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-indigo-600 font-medium uppercase tracking-wider text-sm">Customer Feedback</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">Share Your Experience</h2>
            <p className="text-gray-600">We value your opinion and would love to hear about your experience with our services</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ReviewForm onReviewAdded={handleReviewAdded} />
            <div className="mt-12">
              <ReviewList reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA - Fixed Button with ChevronRight */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-blue-900 text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">Have a question?<br/>Our team is happy<br/>to assist you</h2>
              <p className="text-lg mb-8 text-gray-200">
                Get in touch with our expert team to discuss your vision for creating the perfect BookWall or library design. We're here to turn your literary dreams into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-8 py-4 bg-white text-indigo-800 rounded-full hover:bg-opacity-90 transition font-semibold shadow-lg flex items-center space-x-2">
                    <span className="relative z-10">Contact Us</span>
                    <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </button>
                </Link>
                
                <div className="flex items-center gap-3 text-white">
                  <span className="text-gray-300">Or call:</span>
                  <a href="tel:+917078633060" className="font-semibold hover:text-indigo-200 transition-colors">
                    +91-7078633060
                  </a>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-4 bg-indigo-500/30 rounded-lg blur-xl"></div>
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/aboutbg.jpg"
                    width={800}
                    height={500}
                    alt="Contact us"
                    className="w-full h-auto object-cover rounded-lg"
                  />
                  <div className="absolute top-4 right-4 bg-white text-indigo-900 px-4 py-2 rounded-full text-sm font-semibold">
                    Available 24/7
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;