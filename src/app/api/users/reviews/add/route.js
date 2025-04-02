import { connect } from "@/dbConfig/dbConfig";
import Review from "@/models/reviewModel";
//import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

/*cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});*/

export async function POST(req) {
  await connect();
  try {
    const { userName, review, cafeName, userId, productId, } = req.body;
    /*const uploadedResponse = await cloudinary.v2.uploader.upload(image, {
      folder: "reviews",
      width: 150,
      crop: "scale",
    });*/
    const newReview = new Review({
      userName,
      review,
      cafeName,
      userId,
      productId,
      //image: uploadedResponse.secure_url,
    });
    await newReview.save();
    return NextResponse.json({ success: true, review: newReview });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
