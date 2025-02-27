import crypto from "crypto";
import { connect } from "@/dbConfig/dbConfig";
import Rented from "@/models/rentedModel";
import { NextResponse } from "next/server";
connect();
export async function POST(request) {
  try {
    const secret = process.env.RAZORPAY_SECRET;
    const webhookSignature = req.headers["x-razorpay-signature"];
    const payload = await request.json();
    // Verify the webhook signature
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    if (webhookSignature !== expectedSignature) {
      return res.status(400).json({ message: "Invalid webhook signature" });
    }

    // ✅ Signature verified! Process the event
    const event = await request.json();

    if (event.event === "payment.captured") {
      console.log("✅ Payment Captured:", event.payload.payment.entity);
      const rentedData= new Rented({
        username:"yash",
        email:"singhyash9009670@gmail.com"
      });
      await rentedData.save();
      // 👉 Store successful payment details in MongoDB
      // Example: Save event.payload.payment.entity in your database
    } else if (event.event === "payment.failed") {
      console.log("❌ Payment Failed:", event.payload.payment.entity);
      // 👉 Handle failed payment (e.g., notify user, retry, etc.)
    } else {
      console.log("ℹ️ Unhandled Event:", event.event);
    }

    return res
      .status(200)
      .json({ status: 200, message: "Webhook received successfully!" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { status: 500 },
      { message: "Internal Server Error" }
    );
  }
}
