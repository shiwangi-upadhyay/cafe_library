import {connect} from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/userModel";

connect();

export async function GET(request) {
    try {
        const userId= request.headers.get("userId");
        if(!userId) {
            return NextResponse.json({success:false,message:"User Id is required"});
        }
        const user = await User.findById(userId).select("username email referalCodet");
        if(!user) {
            return NextResponse.json({success:false,message:"User not found"});
        }
        return NextResponse.json({
            success: true,
            user,
            });
        } catch (error) {
            console.error("Error fetching user profile:", error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
    }