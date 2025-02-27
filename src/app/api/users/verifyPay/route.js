import { connect } from "@/dbConfig/dbConfig";
import Payment from "@/models/paymentModel";
import { NextResponse } from "next/server";
connect();
export async function POST(request) {
  try {
    const body = await request.json();
    const newPayment = new Payment(body);
    await newPayment.save();
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
