"use client";
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
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {

  const pathname = usePathname();

  const slides = [
    { id: 1, image: "/images/aboutbg.jpg", alt: "Surfer" },
    { id: 2, image: "/images/aboutbg.jpg", alt: "Cyclist" },
    { id: 3, image: "/images/aboutbg.jpg", alt: "Runner" },
  ];

  return (
    <div className=" min-h-[92vh] md:min-h-[94vh] lg:min-h-[91.5vh] flex flex-col gap-5 items-center justify-center relative">

        <div className="w-full min-h-[30vh] lg:min-h-[40vh] flex flex-col items-center justify-center rounded-b-lg bg-[url('/images/bgcontact.avif')] py-4">
          <h2 className="text-4xl font-semibold text-center mb-4 text-white">Our Services</h2>
          <div className="flex gap-4">
          <Link className={`${pathname === "/" ? " text-white" : "text-blue-gray-500" }`} href="/">
              Home
            </Link>
            
            <span> | </span>
            <Link className={`${pathname === "/Franchise" ? " text-white" : "text-white" }`} href="/franchise">
              Franchise
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-20 p-10 lg:px-32 mt-10 lg:mt-20">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-4">
              <p className="text-lg text-green-800">Our Services</p>
              <h1 className="text-6xl">
                <span className="font-bold">What We Can Do <br />
                For </span> Our Clients
              </h1>
            </div>
              <p className="w-full lg:w-[50%] mt-0 lg:mt-28 ml-0 lg:ml-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nisi numquam nemo alias! Aperiam modi, enim doloribus labore consectetur voluptas.</p>
          </div> 
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="w-full lg:w-1/2">
              <Image
              src="/images/aboutbg.jpg"
              width={400}
              height={300}
              alt="Descriptive Alt"
              className="w-full h-[20vh] lg:h-[40vh] object-fill rounded-lg"
              />
            </div>
          <div className="w-full lg:w-[50%] flex flex-col lg:flex-row gap-10 items-center justify-between ml-0 lg:ml-20 text-lg">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">BookWall Service</h2>
                <ul>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl">BookWall Service</h2>
                <ul>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                  <li>BookWall Creation</li>
                </ul>
            </div>
 
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white py-10 w-full h-full">
      <h2 className="text-3xl font-bold text-center mb-6">
        Tempo members achieve their goals.
      </h2>
      <div className="max-w-5xl mx-auto">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          loop={true}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="flex justify-center">
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={400}
                  height={500}
                  className="rounded-lg object-cover w-full h-[50vh]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-semibold">Heather</h3>
        <p className="text-sm text-gray-400">Mountain Biker</p>
        <p className="mt-2 max-w-xl mx-auto">
          “Tempo has helped me stay fit for my favorite activities without risk
          of injury. I'm feeling as strong as ever on my bike.”
        </p>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-full">
          Learn more
        </button>
      </div>
    </div>

      <div className="container mb-0 sm:mb-8  flex flex-col lg:flex-row items-center p-10 lg:px-32 mt-10 lg:mt-20">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-between lg:items-start text-center lg:text-left mt-8 lg:mt-0 gap-4 pb-5">
          <p className="text-md text-gray-600 font-bold">CLIENTS</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black ">
            What people say
            <br />
            about us?
          </h1>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-2 bg-[#d5d7d7] rounded-lg shadow-lg">
          <Carousel
            className="rounded-xl, min-h-[250px] "
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-4 lg:bottom-1 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 p-4 px-10 lg:px-16 h-96">
              <div className="w-full lg:w-1/2">
                <Typography
                  color="blue-gray"
                  className="mb-2 text-lg font-bold"
                >
                  Material Tailwind
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className=" mb-2 font-normal text-blue-gray-500"
                >
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design. It features multiple React
                  and HTML components, all written with Tailwind CSS classes and
                  Material Design guidelines.
                </Typography>
              </div>
              <div className="w-full lg:w-1/2 h-full object-cover">
                <Image
                  src="/images/bookwall.jpg"
                  alt="Library"
                  width={500}
                  height={800}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>

            {/*2nd  */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-4 p-4 px-10 lg:px-16  ">
              <div className="w-full lg:w-1/2">
                <Typography
                  color="blue-gray"
                  className="mb-2 text-lg font-bold"
                >
                  Material Tailwind
                </Typography>
                <Typography
                  variant="small"
                  color="gray"
                  className=" mb-2 font-normal text-blue-gray-500"
                >
                  Material Tailwind is an easy to use components library for
                  Tailwind CSS and Material Design. It features multiple React
                  and HTML components, all written with Tailwind CSS classes and
                  Material Design guidelines.
                </Typography>
              </div>
              <div className="w-full lg:w-1/2 h-[60%]">
                <Image
                  src="/images/bookwall.jpg"
                  alt="Library"
                  width={500}
                  height={800}
                  className="w-full h-full rounded-lg"
                />
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between p-10 lg:px-32 py-20 mt-10 lg:mt-20 rounded-t-xl text-white bg-blue-gray-300">
            <div className="flx flex-col w-full lg:w-1/2">
              <h1 className="text-5xl font-bold" >Have a question? <br /> Our team is happy <br /> to assist you </h1>
              <p className="text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia non vero modi! Sint, quis eius?</p>

              <div className="flex gap-5 mt-10 text-center" >
              <Link href="/contact">
                <Popover placement="bottom-start fixed bottom-5 right-5">
                  <PopoverHandler>
                    <Button className="p-6 rounded-3xl text-xl">Contact Us</Button>
                  </PopoverHandler>
                  <PopoverContent className="w-72">
                    <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
                      <Avatar src="/images/bookwall.jpg" alt="tania andrew" />
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
                      <a href="#" className="text-initial font-medium text-blue-gray-500">
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
                      <a href="#" className="text-initial font-medium text-blue-gray-500">
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
