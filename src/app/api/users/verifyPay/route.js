import Rented from "@/models/rentedModel";
import { NextResponse } from "next/server";
export async function POST(request) {
  const body = await request.body();
  const rented= new Rented({username:"yash singh testing"})
  await rented.save();
  return NextResponse.json({ success: true });
}
