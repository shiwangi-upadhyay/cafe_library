import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const { bookTitle, amount, userEmail, userName, franchiseName, duration } =
      await request.json();
    // Create unique reference ID
    const reference_id = `book_${bookTitle}_${Date.now()}`;
    // Payment link options
    const paymentLinkOptions = {
      amount: amount * 100, // amount in smallest currency unit (paise for INR)
      currency: "INR",
      accept_partial: false,
      description: `Payment for Book ID: ${bookTitle}`,
      customer: {
        email: userEmail,
      },
      notify: {
        email: true,
      },
      reminder_enable: true,
      notes: {
        userName,
        userEmail,
        bookTitle,
        franchiseName,
        duration,
      },
      callback_url: `${process.env.DOMAIN}paySuccess`,
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
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}
