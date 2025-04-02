import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userName:{
      type:String,
      required: true,
    },
    userId: {
        type: String,
        required: true,
      },
      cafeName: {
        type: String,
        required: true,
      },
      review: {
        type: String,
        required: true,
        maxlength: 100,
      },
      /*image: {
        type: String,
        required: true,
      },*/
      createdAt: {
        type: Date,
        default: Date.now,
      }
    });

const Review = mongoose.models.review || mongoose.model('review', reviewSchema);
export default Review;