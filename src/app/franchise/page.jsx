"use client";
import React, { useState } from "react";
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
import { CheckCircle } from "lucide-react";

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
        
        {/* User Info */}
        <div className="absolute top-4 right-4 z-20 bg-black/20 backdrop-blur-sm rounded-lg p-3 text-xs text-white flex gap-4">
          <div className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            <span>2025-04-02 09:16:20</span>
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900 text-white">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                    <div className="order-2 lg:order-1">
                      <div className="mb-6">
                        <svg className="h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Zm4.638-3.168 3.578 1.872-.681-3.94a1.54 1.54 0 0 1 .443-1.362l2.897-2.784-4.003-.578a1.571 1.571 0 0 1-1.184-.858l-1.786-3.593-1.787 3.593a1.572 1.572 0 0 1-1.184.858l-4.003.578 2.896 2.784c.392.376.566.925.444 1.362l-.68 3.94 3.578-1.872c.217-.113.46-.173.707-.173.246 0 .49.06.707.173Z" />
                        </svg>
                        <svg className="h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Zm4.638-3.168 3.578 1.872-.681-3.94a1.54 1.54 0 0 1 .443-1.362l2.897-2.784-4.003-.578a1.571 1.571 0 0 1-1.184-.858l-1.786-3.593-1.787 3.593a1.572 1.572 0 0 1-1.184.858l-4.003.578 2.896 2.784c.392.376.566.925.444 1.362l-.68 3.94 3.578-1.872c.217-.113.46-.173.707-.173.246 0 .49.06.707.173Z" />
                        </svg>
                        <svg className="h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Zm4.638-3.168 3.578 1.872-.681-3.94a1.54 1.54 0 0 1 .443-1.362l2.897-2.784-4.003-.578a1.571 1.571 0 0 1-1.184-.858l-1.786-3.593-1.787 3.593a1.572 1.572 0 0 1-1.184.858l-4.003.578 2.896 2.784c.392.376.566.925.444 1.362l-.68 3.94 3.578-1.872c.217-.113.46-.173.707-.173.246 0 .49.06.707.173Z" />
                        </svg>
                        <svg className="h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Zm4.638-3.168 3.578 1.872-.681-3.94a1.54 1.54 0 0 1 .443-1.362l2.897-2.784-4.003-.578a1.571 1.571 0 0 1-1.184-.858l-1.786-3.593-1.787 3.593a1.572 1.572 0 0 1-1.184.858l-4.003.578 2.896 2.784c.392.376.566.925.444 1.362l-.68 3.94 3.578-1.872c.217-.113.46-.173.707-.173.246 0 .49.06.707.173Z" />
                        </svg>
                        <svg className="h-8 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35l4.325-.617 1.932-3.864c.137-.274.335-.499.579-.662a1.545 1.545 0 0 1 1.643 0c.243.163.44.388.578.662l1.932 3.864 4.326.617a1.535 1.535 0 0 1 1.25 1.049 1.514 1.514 0 0 1-.39 1.569l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662-.234.168-.522.258-.82.258-.298 0-.586-.09-.82-.258l-3.866-2.025-3.865 2.025a1.601 1.601 0 0 1-.82.258Zm4.638-3.168 3.578 1.872-.681-3.94a1.54 1.54 0 0 1 .443-1.362l2.897-2.784-4.003-.578a1.571 1.571 0 0 1-1.184-.858l-1.786-3.593-1.787 3.593a1.572 1.572 0 0 1-1.184.858l-4.003.578 2.896 2.784c.392.376.566.925.444 1.362l-.68 3.94 3.578-1.872c.217-.113.46-.173.707-.173.246 0 .49.06.707.173Z" />
                        </svg>
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

      {/* Testimonials Carousel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Section */}
            <div className="w-full lg:w-1/2">
              <span className="text-indigo-600 font-medium uppercase tracking-wider text-sm">Testimonials</span>
              <h2 className="text-3xl lg:text-5xl font-bold mt-2 mb-6">
                What people say<br />about our services
              </h2>
              <p className="text-gray-600 mb-6">
                Don't take our word for it. Hear what our clients have to say about their experiences working with our talented team to create stunning book displays.
              </p>
              <Link href="/testimonials">
                <Button className="bg-indigo-600 hover:bg-indigo-700 transition-colors">
                  View all testimonials
                </Button>
              </Link>
            </div>
            
            {/* Right Section - Carousel */}
            <div className="w-full lg:w-1/2">
              <Carousel
                className="rounded-xl shadow-xl"
                autoplay={true}
                loop={true}
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                          activeIndex === i ? "w-8 bg-indigo-600" : "w-4 bg-indigo-300"
                        }`}
                        onClick={() => setActiveIndex(i)}
                      />
                    ))}
                  </div>
                )}
              >
                {/* First Testimonial */}
                <div className="flex flex-col h-full p-8 bg-gray-50">
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <Typography className="font-normal text-gray-700">
                      "The BookWall team transformed our office space with a stunning collection of business and innovation books. Our clients are always impressed with the design and curation."
                    </Typography>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 border-t pt-4">
                      <Avatar
                        src="/images/bookwall.jpg"
                        alt="client"
                        className="rounded-full"
                        size="md"
                      />
                      <div>
                        <Typography variant="h6" color="blue-gray" className="mb-0.5">
                          Rebecca Moore
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                          CEO, TechSolutions
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Second Testimonial */}
                <div className="flex flex-col h-full p-8 bg-gray-50">
                  <div className="mb-6">
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <Typography className="font-normal text-gray-700">
                      "I couldn't be happier with my BookWall installation. The team was professional, friendly, and created a masterpiece that's now the centerpiece of my living room."
                    </Typography>
                  </div>
                  <div className="mt-auto">
                    <div className="flex items-center gap-4 border-t pt-4">
                      <Avatar
                        src="/images/bookwall.jpg"
                        alt="client"
                        className="rounded-full"
                        size="md"
                      />
                      <div>
                        <Typography variant="h6" color="blue-gray" className="mb-0.5">
                          James Wilson
                        </Typography>
                        <Typography variant="small" color="gray" className="font-normal">
                          Book Collector
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
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
                  <Popover placement="bottom">
                    <PopoverHandler>
                      <Button className="bg-white text-indigo-900 text-lg px-8 py-3 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Contact Us
                      </Button>
                    </PopoverHandler>
                    <PopoverContent className="w-80">
                      <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                        <Avatar src="/images/bookwall.jpg" alt="Amit Saxena" />
                        <div>
                          <Typography variant="h6" color="blue-gray">
                            Amit Saxena
                          </Typography>
                          <Typography
                            variant="small"
                            color="gray"
                            className="font-medium text-blue-gray-500"
                          >
                            Founder
                          </Typography>
                        </div>
                      </div>
                      <List className="p-0">
                        <a href="#" className="text-initial font-medium text-blue-gray-500">
                          <ListItem>
                            <ListItemPrefix>
                              <svg
                                width="14"
                                height="16"
                                viewBox="0 0 14 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M1 2C1 1.46957 1.21071 0.960859 1.58579 0.585786C1.96086 0.210714 2.46957 0 3 0H11C11.5304 0 12.0391 0.210714 12.4142 0.585786C12.7893 0.960859 13 1.46957 13 2V14C13.2652 14 13.5196 14.1054 13.7071 14.2929C13.8946 14.4804 14 14.7348 14 15C14 15.2652 13.8946 15.5196 13.7071 15.7071C13.5196 15.8946 13.2652 16 13 16H10C9.73478 16 9.48043 15.8946 9.29289 15.7071C9.10536 15.5196 9 15.2652 9 15V13C9 12.7348 8.89464 12.4804 8.70711 12.2929C8.51957 12.1054 8.26522 12 8 12H6C5.73478 12 5.48043 12.1054 5.29289 12.2929C5.10536 12.4804 5 12.7348 5 13V15C5 15.2652 4.89464 15.5196 4.70711 15.7071C4.51957 15.8946 4.26522 16 4 16H1C0.734784 16 0.48043 15.8946 0.292893 15.7071C0.105357 15.5196 0 15.2652 0 15C0 14.7348 0.105357 14.4804 0.292893 14.2929C0.48043 14.1054 0.734784 14 1 14V2ZM4 3H6V5H4V3ZM6 7H4V9H6V7ZM8 3H10V5H8V3ZM10 7H8V9H10V7Z"
                                  fill="#90A4AE"
                                />
                              </svg>
                            </ListItemPrefix>
                            Tea Know + Age
                          </ListItem>
                        </a>
                        <a href="tel:+917078633060" className="text-initial font-medium text-blue-gray-500">
                          <ListItem>
                            <ListItemPrefix>
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H3.153C3.38971 0.000108969 3.6187 0.0841807 3.79924 0.23726C3.97979 0.390339 4.10018 0.602499 4.139 0.836L4.879 5.271C4.91436 5.48222 4.88097 5.69921 4.78376 5.89003C4.68655 6.08085 4.53065 6.23543 4.339 6.331L2.791 7.104C3.34611 8.47965 4.17283 9.72928 5.22178 10.7782C6.27072 11.8272 7.52035 12.6539 8.896 13.209L9.67 11.661C9.76552 11.4695 9.91994 11.3138 10.1106 11.2166C10.3012 11.1194 10.5179 11.0859 10.729 11.121L15.164 11.861C15.3975 11.8998 15.6097 12.0202 15.7627 12.2008C15.9158 12.3813 15.9999 12.6103 16 12.847V15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H13C5.82 16 0 10.18 0 3V1Z"
                                  fill="#90A4AE"
                                />
                              </svg>
                            </ListItemPrefix>
                            +91-7078633060
                          </ListItem>
                        </a>
                        <a href="mailto:teaknowage@gmail.com" className="text-initial font-medium text-blue-gray-500">
                          <ListItem>
                            <ListItemPrefix>
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M2.00299 5.884L9.99999 9.882L17.997 5.884C17.9674 5.37444 17.7441 4.89549 17.3728 4.54523C17.0015 4.19497 16.5104 3.99991 16 4H3.99999C3.48958 3.99991 2.99844 4.19497 2.62717 4.54523C2.2559 4.89549 2.03259 5.37444 2.00299 5.884Z"
                                  fill="#90A4AE"
                                />
                                <path
                                  d="M18 8.11798L10 12.118L2 8.11798V14C2 14.5304 2.21071 15.0391 2.58579 15.4142C2.96086 15.7893 3.46957 16 4 16H16C16.5304 16 17.0391 15.7893 17.4142 15.4142C17.7893 15.0391 18 14.5304 18 14V8.11798Z"
                                  fill="#90A4AE"
                                />
                              </svg>
                            </ListItemPrefix>
                            teaknowage@gmail.com
                          </ListItem>
                        </a>
                      </List>
                    </PopoverContent>
                  </Popover>
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