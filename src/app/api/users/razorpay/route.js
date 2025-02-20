import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { bookTitle, amount, email } = await request.json();
    // Create unique reference ID
    const reference_id = `book_${bookTitle}_${Date.now()}`;
    // Payment link options
    const paymentLinkOptions = {
      amount: amount * 100, // amount in smallest currency unit (paise for INR)
      currency: "INR",
      accept_partial: false,
      description: `Payment for Book ID: ${bookTitle}`,
      customer: {
        email: email,
      },
      notify: {
        email: true,
      },
      reminder_enable: true,
      notes: {
        book_id: bookTitle,
        reference_id: reference_id,
      },
      callback_url: `http://localhost:3000/paySuccess/?reference_id=${reference_id}`,
      callback_method: "get",
    };

    // Create payment link
    const paymentLink = await razorpay.paymentLink.create(paymentLinkOptions);
    // Return payment link details
    return NextResponse.json({
      success: true,
      data: {
        payment_link_id: paymentLink.id,
        payment_link_url: paymentLink.short_url,
        reference_id: reference_id,
        amount: paymentLink.amount,
        currency: paymentLink.currency,
        status: paymentLink.status,
      },
    });
  } catch (error) {
    console.error("Error creating Razorpay payment link:", error);
    return {
      success: false,
      error: error.message,
    };
  }
}
