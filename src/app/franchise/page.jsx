"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  Popover,
  PopoverHandler,
  PopoverContent,
  Avatar,
  List,
  ListItem,
  ListItemPrefix,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, ChevronRight, Phone } from "lucide-react";

import ReviewForm from '@/components/ReviewForm';
import ReviewList from '@/components/ReviewList';

const page = () => {
  const [reviews, setReviews] = useState([]);
  const [particles, setParticles] = useState([]);
  const [isClient, setIsClient] = useState(false);
  
  // Fix for hydration errors - only run animations client-side
  useEffect(() => {
    setIsClient(true);
    // Generate consistent random particles
    const newParticles = Array(6).fill(0).map(() => ({
      width: Math.random() * 100 + 50,
      height: Math.random() * 100 + 50,
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, []);
  
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
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };
  
  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // For sections visibility tracking
  const [servicesInView, setServicesInView] = useState(false);
  const [testimonialsInView, setTestimonialsInView] = useState(false);
  const [reviewsInView, setReviewsInView] = useState(false);
  const [contactInView, setContactInView] = useState(false);

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        </div>
        
        {/* User Info - UPDATED */}
        <div className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-xs text-white flex gap-4">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>2025-04-02 14:27:51</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            <span>shiwangi-upadhyay</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-8 md:px-20 lg:px-32 z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Services
              </span>
            </h1>
            
            <motion.div 
              className="w-24 h-1 bg-white mb-6"
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
            
            <motion.p 
              className="text-xl text-gray-100 max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore our comprehensive range of literary services designed to transform spaces with the beauty of books.
            </motion.p>
            
            {/* Breadcrumbs with Staggered Animation */}
            <motion.div 
              className="flex items-center space-x-4 font-light text-sm"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={staggerItem}>
                <Link href="/" className="text-white hover:text-blue-300 transition-colors flex items-center">
                  Home
                </Link>
              </motion.div>
              <motion.span variants={staggerItem} className="text-gray-400">•</motion.span>
              <motion.div variants={staggerItem}>
                <Link href="/franchise" className="text-blue-400 flex items-center">
                  Franchise
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Introduction */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <motion.div 
          className="container mx-auto px-6 lg:px-8"
          ref={(el) => el && (servicesInView || setServicesInView(true))}
          initial={{ opacity: 0 }}
          animate={servicesInView ? { opacity: 1 } : {}}
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
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative">
                <motion.div 
                  className="absolute -inset-2 bg-indigo-600/20 rounded-lg blur-lg"
                  animate={{
                    opacity: [0.5, 0.8, 0.5],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                ></motion.div>
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
          
          {/* Service Details with Scroll Animation */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16"
            variants={staggerContainer}
            initial="initial"
            animate={servicesInView ? "animate" : "initial"}
          >
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-row items-start gap-6">
                <motion.div 
                  className="p-4 rounded-full bg-indigo-100"
                  whileHover={{ rotate: 10 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </motion.div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">BookWall Creation</h2>
                  <motion.ul 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {["Customized book displays", "Professional installation", "Aesthetic arrangement", "Premium book selection"].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-3"
                        variants={staggerItem}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, color: "#4338ca" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle size={18} className="text-indigo-600" />
                        </motion.div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="flex flex-row items-start gap-6">
                <motion.div 
                  className="p-4 rounded-full bg-indigo-100"
                  whileHover={{ rotate: -10 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-indigo-600">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </motion.div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Library Design</h2>
                  <motion.ul 
                    className="space-y-3"
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    {["Space optimization", "Thematic arrangement", "Lighting solutions", "Ergonomic shelving"].map((item, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-center gap-3"
                        variants={staggerItem}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, color: "#4338ca" }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <CheckCircle size={18} className="text-indigo-600" />
                        </motion.div>
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Testimonials Section with Enhanced Animations */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        {/* Background animations - client-side only */}
        {isClient && (
          <>
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-10 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -30, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/3 w-36 h-36 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </>
        )}
      
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            ref={(el) => el && (testimonialsInView || setTestimonialsInView(true))}
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-indigo-400 font-medium uppercase tracking-wider text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Success Stories
            </motion.span>
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our Clients Achieve Their Goals
            </motion.h2>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              animate={testimonialsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              See what our clients have accomplished with our services
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    <div className="order-2 lg:order-1">
                      <div className="mb-6">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg 
                              key={i}
                              className="h-8 text-yellow-400"
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                            >
                              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      
                      <blockquote className="text-xl italic mb-8">
                        "{slide.quote}"
                      </blockquote>
                      
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
          </motion.div>
        </div>
      </section>

      {/* Review Section with Animation */}
      <section className="py-16 bg-gray-50">
        <div 
          className="container mx-auto px-6 lg:px-8"
          ref={(el) => el && (reviewsInView || setReviewsInView(true))}
        >
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="text-indigo-600 font-medium uppercase tracking-wider text-sm"
              initial={{ opacity: 0 }}
              animate={reviewsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Customer Feedback
            </motion.span>
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold mt-2 mb-4"
              initial={{ opacity: 0 }}
              animate={reviewsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Share Your Experience
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0 }}
              animate={reviewsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              We value your opinion and would love to hear about your experience with our services
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={reviewsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ReviewForm onReviewAdded={handleReviewAdded} />
            <motion.div 
              className="mt-12"
              initial={{ opacity: 0 }}
              animate={reviewsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <ReviewList reviews={reviews} />
            </motion.div>
          </motion.div>
        </div>
      </section>

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
    </>
  );
};

export default page;