"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useGetRentedBookByPaymentIdMutation } from "@/redux/services/userApi";
import { client } from "@/sanity/lib/client";
import { RiStockFill } from "react-icons/ri";
const PaymentSuccess = () => {
  const [getData, { data }] = useGetRentedBookByPaymentIdMutation();
  const searchParams = useSearchParams();
  const razorpay_payment_id = searchParams.get("razorpay_payment_id");
  useEffect(() => {
    getData(razorpay_payment_id);
  }, []);
  return (
    <div>
      <div>
        <h1>Book: {data?.bookTitle}</h1>
        <p>Franchise: {data?.franchiseName}</p>
        <p>Rented By: {data?.userName}</p>
        <p>Email: {data?.userEmail}</p>
        <p>Rent Date: {new Date(data?.rentDate).toLocaleDateString()}</p>
        <p>Return Date: {new Date(data?.returnDate).toLocaleDateString()}</p>
        <p>Amount Paid: ₹{data?.amountPaid}</p>
      </div>
    </div>
  );
};

export default PaymentSuccess;
