import { connect } from "@/dbConfig/dbConfig";
import Rented from "@/models/rentedModel";
import { NextResponse } from "next/server";
connect();
export async function POST(request) {
  try {
    const body = await request.json();
    const rented = new Rented({ username: "yash singh testing" });
    await rented.save();
    return NextResponse.json({ status: "ok" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
