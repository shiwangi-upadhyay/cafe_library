"use client"
import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {

    const[query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (onSearch) {
            onSearch(query); // Call the search function with the query
        }
    };

    const handleReset = () => {
        setQuery(""); // Reset the search query
        if (onSearch) {
            onSearch(""); // Clear the search results
        }
    };

    return (
    <form className="form relative min-w-[50vw]
    "
    onSubmit={handleSubmit}> 
    <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1 " type='submit'>
        <div className='p-2  bg-black rounded-full flex justify-center items-center'>
        <svg 
        width="17"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-labelledby="search"
        className="w-5 h-5 text-white"
        >
        <path
            d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
            stroke="currentColor"
            strokeWidth="1.333"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        </svg>
        </div>
        
    </button>
    <input
        className="input rounded-full px-8 py-3 pl-16 border-2 border-transparent focus:outline-none focus:border-gray-300 bg-gray-200 focus:bg-white  placeholder-gray-400 transition-all duration-300  min-w-[50vw]"
        placeholder="What are you looking for?"
        required=""
        type="text"
        value = {query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={(e) => e.target.placeholder = ""}
    />
    <button type="reset"
    onClick={handleReset}
    className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"

        >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
        ></path>
        </svg>
    </button>
    </form>
    )
}

export default SearchBar