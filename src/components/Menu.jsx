"use client";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Tooltip,
    } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


export default function Menu() {
   // Fetching Products from sanity
    const [products, setProducts] = useState([]);
    const [isProFetched, setIsProFetched] = useState(false);
    const fetchProducts = async () => {
        const res = await client.fetch(`*[_type == "booksType"]`);
        setProducts(res);
        setIsProFetched(true);

        console.log(res);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <section className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 ">
            {products.map((card) => {
            return (
            <Card key={card._id} className="w-full max-w-[48rem] flex-row flex-wrap lg:flex-nowrap">
            <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-full lg:w-2/5 shrink-0 rounded-lg"
            >
            <img
                src={urlFor(card.coverImage).url()}
                alt="card-image"
                className="h-full w-full object-cover"
            />
            </CardHeader>
            <CardBody className=" flex flex-col justify-between p-4">
                <div className="mb-3 flex items-center justify-between">
                    <Typography variant="h6" color="gray" className="text-sm lg:text-base uppercase">
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
                        {card.rating }
                    </Typography>
                </div>
            
            <Typography variant="h4" color="blue-gray" className="mb-2 text-lg lg:text-2xl font-semibold line-clamp-2">
                {card.title}
            </Typography>
            <Typography color="gray" className="font-normal text-sm lg:text-base line-clamp-3 mb-4">
                {card.description}
            </Typography>
            {/* Borrow Count and Publish Year */}
            <div className="flex justify-between items-center mt-5">
                <div className="inline-flex flex-wrap items-center gap-3">
                    <Tooltip content={card.borrowCount}>
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
                    <Tooltip content={card.publishedYear
}>
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
                </div>
                <a href="#" className="inline-block">
                    <Button variant="text" className="flex items-center gap-2">
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
                </a>
            </div>
        </CardBody>
      </Card>
            );
            })}
        </div>
        </section>
    );
}
