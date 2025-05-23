"use client";
import {
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  Button,
  Tooltip,
  ButtonGroup,
  Select,
  Option,
} from "@material-tailwind/react";

import React from "react";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { setFranchiseDetails } from "@/redux/slices/user";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import SearchBar from "@/components/SearchBar";

const page = () => {
  const { _id, name } = useSelector((state) => state.user.franchiseDetails);
  const userData = useSelector((state) => state.user.userData);
  const [duration, setDuration] = useState(null);
  const { category } = useParams(); // Fetching the category from the URL
  const [franchises, setFranchises] = useState([]);
  const [membershipPlans, setMembershipPlans] = useState([]);

  //Fetch franchises data from sanity
  const fetchFranchiseData = async () => {
    const res = await client.fetch(`*[_type == "franchiseType"]`);
    setFranchises(res);
  };

  // Fetch membership plans dynamically
  const fetchMembershipPlans = async () => {
    try {
      const response = await axios.get("/api/users/membership");
        setMembershipPlans(response.data.memberships);
    } catch (error) {
      console.error("Error fetching membership plans:", error);
    }
  };

  // Fetch franchise data
  useEffect(() => {
    fetchMembershipPlans();
    fetchFranchiseData();
  }, []);

  const dispatch = useDispatch();

  //   Testing the razorpay payment gateway
  const handleRentBook = async (
    amount,
    bookTitle,
    userEmail,
    userName,
    franchiseName,
    duration
  ) => {
    console.log(duration);
    const response = await axios.post("/api/users/razorpay", {
      amount,
      bookTitle,
      userEmail,
      userName,
      franchiseName,
      duration,
    });
    const order = response.data;
    window.location.href = order.data.payment_link_url;
  };

  // Fetching Products from sanity
  const [products, setProducts] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      const res = await client.fetch(
        `*[_type == "booksType" && category == $category]`,
        { category }
      );
      setProducts(res);
    };

    fetchProducts();
  }, [category]);
  return (
    <section className="p-8">
      <div className="w-full h-[55px] flex justify-center items-center gap-2 my-4 flex-col md:flex-row ">
        <SearchBar/>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
        <h2 className="text-2xl font-bold   text-center">Books {category}</h2>
        <div className="w-50 mb-5 lg:mb-0">
          <Select label="Select Location">
            {franchises.map((franchise) => {
              return (
                <Option
                  key={franchise._id}
                  onClick={() => {
                    dispatch(setFranchiseDetails(franchise));
                  }}
                >
                  {franchise.name}
                </Option>
              );
            })}
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
        {products.map((card) => {
          return (
            <Card
              key={card._id}
              className="w-full max-w-[48rem] flex-row flex-wrap lg:flex-nowrap"
            >
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-full lg:w-2/5 shrink-0 rounded-lg"
              >
                <Image
                  width={500}
                  height={500}
                  src={urlFor(card.coverImage).url()}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className=" flex flex-col justify-between p-4">
                <div className="mb-3 flex items-center justify-between pr-3 lg:pr-1">
                  <Typography
                    variant="h6"
                    color="gray"
                    className="text-sm lg:text-base uppercase"
                  >
                    {card.category}
                  </Typography>

                  <Typography
                    color="blue-gray"
                    className="flex items-center gap-1.5 font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="-mt-0.5 h-5 w-5 text-yellow-700"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {card.rating}
                  </Typography>
                </div>

                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 text-lg lg:text-2xl font-semibold line-clamp-2"
                >
                  {card.title}
                </Typography>
                <Typography
                  color="gray"
                  className="font-normal text-sm   lg:text-base line-clamp-3 mb-4"
                >
                  {card.description}
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-semibold mt-2"
                >
                  ₹{card.price}
                </Typography>
                {/* Borrow Count and Publish Year */}
                <div className="flex  justify-between flex-col lg:flex-row items-center mt-5">
                  <div className="inline-flex flex-col items-center gap-2">
                    {/*<Tooltip content={card.borrowCount}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                <path
                                fillRule="evenodd"
                                d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                                clipRule="evenodd"
                                />
                                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                            </svg>
                            </span>
                        </Tooltip>
                        <Tooltip content={card.publishedYear}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                fillRule="evenodd"
                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </span>
                        </Tooltip>
                        <Tooltip content={ 
                            card?.franchiseStock?.filter((item) => 
                                item.name._ref === franchiseId)[0]?.stock === undefined
                                ?"Please select your location first.": 
                                card?.franchiseStock?.filter((item) =>
                                item.name._ref === franchiseId)[0]?.stock}>
                            <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                fillRule="evenodd"
                                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </span>
                        </Tooltip>*/}
                    <ButtonGroup>
                      <Tooltip content={card.borrowCount}>
                        <Button>Count</Button>
                      </Tooltip>
                      <Tooltip content={card.publishedYear}>
                        <Button>Year</Button>
                      </Tooltip>
                      <Tooltip
                        content={
                          card?.franchiseStock?.filter(
                            (item) => item.name._ref === _id
                          )[0]?.stock === undefined
                            ? "Please select your location first."
                            : card?.franchiseStock?.filter(
                                (item) => item.name._ref === _id
                              )[0]?.stock
                        }
                      >
                        <Button>Stock</Button>
                      </Tooltip>
                    </ButtonGroup>
                  </div>
                  <Button
                    onClick={handleOpen}
                    variant="text"
                    className="flex items-center gap-2 pr-2 mt-4 lg:mt-0"
                  >
                    Rent Now
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                  <Dialog
                    size="sm"
                    open={open}
                    handler={handleOpen}
                    className="p-4"
                  >
                    <DialogHeader className="relative m-0 block">
                      <Typography variant="h4" color="blue-gray">
                        {card.title}
                      </Typography>
                      <Typography className="mt-1 font-normal text-gray-600">
                        {card.category}
                      </Typography>
                      <IconButton
                        size="sm"
                        variant="text"
                        className="!absolute right-3.5 top-3.5"
                        onClick={handleOpen}
                      >
                        <XMarkIcon className="h-4 w-4 stroke-2" />
                      </IconButton>
                    </DialogHeader>
                    <DialogBody>
                      <div className="space-y-4">
                        {membershipPlans.map((plan) => {
                          return (
                            <Card
                              key={plan._id}
                              className="w-full max-w-[48rem] flex-row flex-wrap lg:flex-nowrap"
                            >
                              <CardBody className="p-4">
                                <Typography
                                  variant="h5"
                                  color="blue-gray"
                                  className="text-lg lg:text-xl font-bold"
                                >
                                  {plan.name} Membership
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="font-normal text-sm lg:text-base my-2"
                                >
                                  Duration: {plan.duration} days
                                </Typography>
                                <Typography
                                  variant="h6"
                                  color="blue"
                                  className="font-semibold text-lg lg:text-xl"
                                >
                                  Price: ₹{plan.price}
                                </Typography>
                                <Button
                                  variant="outlined"
                                  color="blue-gray"
                                  onClick={() => setDuration(plan.duration)}
                                  className="mt-4"
                                >
                                  Select Plan
                                </Button>
                              </CardBody>
                            </Card>
                          );
                        })}
                        {/* Note Section (Updated) */}
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mt-4 rounded-md">
                          <Typography className="font-medium text-yellow-800">
                            Note:
                          </Typography>
                          <Typography className="text-gray-600">
                            You will be required to pay the full price of the
                            book as a security deposit. The full amount will be
                            refunded when you return the book, after deducting
                            the rent price.
                          </Typography>
                        </div>
                      </div>
                    </DialogBody>
                    
                    
                        <DialogFooter>
                            <Button
                            className="ml-auto"
                            onClick={() =>
                                handleRentBook(
                                card.price,
                                card.title,
                                userData.email,
                                userData.username,
                                name,
                                duration
                                )
                            }
                            >
                            Proceed To Pay
                            </Button>
                        </DialogFooter>
                        
                  </Dialog>
                </div>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default page;
