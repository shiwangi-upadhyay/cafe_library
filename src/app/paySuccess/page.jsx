"use client";
import React, { Suspense } from "react";
import PaymentSuccess from "@/components/paymentSuccess"; // Move logic to a separate component

const Page = () => {
  return (
    <Suspense fallback={<h1>Loading Payment Details...</h1>}>
      <PaymentSuccess />
    </Suspense>
  );
};

export default Page;

