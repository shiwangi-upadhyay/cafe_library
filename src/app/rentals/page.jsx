"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLazyGetRentalsQuery } from "@/redux/services/userApi";
import { format } from "date-fns";
import Link from "next/link";

const Page = () => {
  const userData = useSelector((state) => state.user.userData);
  const [getRentals, { data: rentals, isLoading, isError }] =
    useLazyGetRentalsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (userData) {
      getRentals({ email: userData.email });
    }
  }, [userData]);

  // Format date to readable format
  const formatDate = (dateString) => {
    return format(new Date(dateString), "MMM dd, yyyy");
  };

  // Calculate rental status
  const getRentalStatus = (returnDate) => {
    const today = new Date();
    const returnDateObj = new Date(returnDate);

    if (today > returnDateObj) {
      return { status: "overdue", className: "bg-red-100 text-red-800" };
    } else {
      return { status: "active", className: "bg-green-100 text-green-800" };
    }
  };

  // Filter rentals based on search term
  const filteredRentals = rentals?.rentals?.filter(
    (rental) =>
      rental.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rental.franchiseName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">My Rentals</h1>
          <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">My Rentals</h1>
          <div className="bg-red-100 p-4 rounded-md">
            <p className="text-red-700">
              Error loading rental data. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">My Rentals</h1>
          <div className="mt-4 sm:mt-0">
            <input
              type="text"
              placeholder="Search by title or franchise..."
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {!rentals?.rentals || rentals.rentals.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-8 text-center">
            <p className="text-gray-500">No rental records found.</p>
            <Link href="/browse">
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                Browse Books
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {filteredRentals?.map((rental) => {
              const { status, className } = getRentalStatus(rental.returnDate);

              return (
                <div
                  key={rental._id}
                  className="bg-white shadow rounded-lg overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {rental.bookTitle}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Franchise: {rental.franchiseName}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0">
                        <span
                          className={`px-3 py-1 text-xs font-medium rounded-full ${className}`}
                        >
                          {status}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Rent Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {formatDate(rental.rentDate)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Return Date
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {formatDate(rental.returnDate)}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-medium text-gray-500">
                          Amount Paid
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          ₹{rental.amountPaid}
                        </dd>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {/* <Link href={`/receipt/${rental.paymentId}`}>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                          View Receipt
                        </button>
                      </Link> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
