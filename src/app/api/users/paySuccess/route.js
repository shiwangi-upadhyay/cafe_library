import { connect } from "@/dbConfig/dbConfig";
import Rented from "@/models/rentedModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    connect();
    const { razorpay_payment_id } = await request.json();
    const RentedData = await Rented.findOne({ paymentId:razorpay_payment_id });
    if (!RentedData) {
      return NextResponse.json({ error: "No Rented found" }, { status: 404 });
    }
    return NextResponse.json(RentedData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
