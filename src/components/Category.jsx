import React from 'react'
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Link from 'next/link';

const Category = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      const fetchData = async () => {
         // Fetch unique categories
        const data = await client.fetch(`*[_type == "booksType"]{category}`);
        setCategories(data);
        console.log(data);
      };
      fetchData();
    }, []);
  
    
  return (
    <>

        <div className="p-8">
        <h2 className="text-2xl font-bold text-center mb-8">Our Menu</h2>
            {categories.map((category, index) =>{
                return(
                    <div 
                    key={index}
                    className="rounded-lg border shadow-sm bg-white border-slate-200 shadow-slate-950/5 relative flex h-[20rem] w-full max-w-[22rem] flex-col items-end justify-center overflow-hidden text-center">
                    <div className="p-2">
                        <div className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center">
                        <img className="absolute top-0  left-0 w-full h-full" src="/images/bgcontact.avif" />
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-slate-800/80 via-black/50 to-slate-700/10 dark:from-black/90 dark:via-black/60 dark:to-black/20">
                        </div>
                        </div>
                    </div>
                    <div className="w-full rounded relative bottom-0 flex h-full flex-col items-center justify-end px-6 py-14 md:px-12">
                        <h4 className="font-sans antialiased font-bold text-xl md:text-2xl lg:text-3xl text-white">
                        {category.category}
                        </h4>
                        
                        <Link href={`/category/${category.category}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
                                Explore
                            </button>
                        </Link>
                    </div>
                </div>
                );
            })}          
        </div>                
    </>
    )
}

export default Category