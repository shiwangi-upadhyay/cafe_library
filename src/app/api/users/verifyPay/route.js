import { connect } from "@/dbConfig/dbConfig";
import Rented from "@/models/rentedModel";
import { NextResponse } from "next/server";
export async function POST(request) {
  try {
    const body = await request.json();
    if (body.event === "payment.captured") {
      const payment = body.payload.payment.entity;
      if (payment.status === "captured" && payment.captured) {
        connect();
        const metadata = payment.notes;
        const newRented = new Rented({
          userName: metadata.userName,
          userEmail: metadata.userEmail,
          bookTitle: metadata.bookTitle,
          franchiseName: metadata.franchiseName,
          rentDate: new Date(),
          returnDate: new Date(
            Date.now() + metadata.duration * 24 * 60 * 60 * 1000
          ),
          paymentId: payment.id,
          amountPaid: payment.amount / 100,
        });
        await newRented.save();
      }
    }
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
