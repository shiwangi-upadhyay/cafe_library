"use client";

import React from "react";
import { useSearchParams } from "next/navigation";

const PaymentSuccess = () => {
  const searchParams = useSearchParams();
  const razorpay_payment_id = searchParams.get("razorpay_payment_id");
  const razorpay_payment_link_id = searchParams.get("razorpay_payment_link_id");
  const razorpay_signature = searchParams.get("razorpay_signature");

  return (
    <div>
      <h1>Payment Successful</h1>
      <p><strong>Razorpay Payment ID:</strong> {razorpay_payment_id}</p>
      <p><strong>Payment Link ID:</strong> {razorpay_payment_link_id}</p>
      <p><strong>Signature:</strong> {razorpay_signature}</p>
    </div>
  );
};

export default PaymentSuccess;