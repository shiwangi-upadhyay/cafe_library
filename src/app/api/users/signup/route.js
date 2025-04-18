import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helpers/mailer";
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password, referralCode } = reqBody;
    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists" });
    }
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Handle referral code if provided
    if (referralCode) {
      const referrer = await User.findOne({ referralCode });
      if (!referrer) {
        return NextResponse.json({ error: "Invalid referral code" });
      }
      // Add the new user to the referrer's referrals
      referrer.referrals.push({
        referredUserId: newUser._id,
        membershipType: null, // Membership will be added later
        earnings: 0, // Initial earnings are 0
      });
      await referrer.save();
      // Set the referrer for the new user
      newUser.referredBy = referrer._id;
    }

    const savedUser = await newUser.save();
    // send verification mail
    await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });
    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
