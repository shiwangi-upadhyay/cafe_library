import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Rented from "@/models/rentedModel";
connect();

export async function POST(request) {
  try {
    const { email } = await request.json();
    const rentals = await Rented.find({ userEmail: email });
    return NextResponse.json({ rentals, success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
