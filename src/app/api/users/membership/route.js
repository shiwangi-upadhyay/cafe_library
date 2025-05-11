import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Membership from "@/models/membershipModel";


connect();
export async function GET(request) {
    try {
        const memberships = await Membership.find({});
        console.log("Memberships fetched successfully:", memberships); 
        return NextResponse.json({ memberships, success: true });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}