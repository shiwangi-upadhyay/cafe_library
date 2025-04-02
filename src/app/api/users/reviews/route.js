import { connect } from "@/dbConfig/dbConfig";
import Review from "@/models/reviewModel";
//import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

/*cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    });*/

    export async function GET() {
    await connect();
    try {
        const reviews = await Review.find({});
        return NextResponse.json({ success: true, reviews });
    } catch (error) {
        return NextResponse.json({ error: error.message });
    }
}
