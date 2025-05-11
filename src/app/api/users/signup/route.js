import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helpers/mailer";
connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { username, email, password, referredCode } = reqBody;
    console.log("Request body:", reqBody);
    //check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ error: "User already exists" });
    }
    // Generate unique referral code of length 10 based on email
    const referralCode = (
      email.split("@")[0].substring(0, 4) +         // First 4 chars of email
      Math.random().toString(36).substring(2, 7) +  // 5 random characters
      Date.now().toString(36).slice(-6)             // 6 timestamp-based characters
    ).toUpperCase();                                // Final 15-char code in uppercase
    
    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      referralCode,
      referredBy: referredCode,
    });
    console.log("New user object:", newUser);
    // ! update needed
    const savedUser = await newUser.save();
    // Handle referral code if provided
    if (referredCode) {
      const referrer = await User.findOne({ referralCode:referredCode });
      if (!referrer) {
        return NextResponse.json({ error: "Invalid referral code" });
      }
      console.log("Referrer found:", referrer);
      // Add the new user to the referrer's referrals
      referrer.referrals.push({
        referredUserId: savedUser._id,
        membershipType: null, // Membership will be added later
        earnings: 0, // Initial earnings are 0
      });
      const saved=await referrer.save();
      console.log("Referrer updated with new referral:", saved);
    }
    await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });
    // send verification mail
    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
