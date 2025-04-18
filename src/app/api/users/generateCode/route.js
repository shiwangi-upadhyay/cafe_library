import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const { userId } = await request.json();
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // Generate a unique referral code
    const referralCode = `${user._id.toString().slice(-5)}-${Math.random()
      .toString(36)
      .substring(2, 7)}`;
    // Check if the referral code already exists

    user.referralCode = referralCode;
    await user.save();

    return NextResponse.json({
      success: true,
      message: "Referral code generated successfully",
      referralCode,
    });
  } catch (error) {
      console.error("Error generating referral code:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}