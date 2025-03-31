import { connect } from "@/dbConfig/dbConfig";
import Review from "@/models/reviewModel";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req,res){
    await connect();

    if(req.method === "POST"){
        try{
            const {review, rating, userId, productId, image} = req.body;
            const uploadedResponse = await cloudinary.v2.uploader.upload(image, {
                folder: "reviews",
                width: 150,
                crop: "scale",
            });
            const newReview = new Review({
                review,
                rating,
                userId,
                productId,
                image: uploadedResponse.secure_url,
            });
            await newReview.save();
            res.status(201).json({success: true, review: newReview});
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
    else if(req.method === "GET"){
        try{
            const reviews = await Review.find({});
            res.status(200).json({success: true, reviews});
        }catch(error){
            res.status(500).json({error: error.message});
        }
    }
    else{
        res.status(405).json({error: "Method not allowed"});
    }
}