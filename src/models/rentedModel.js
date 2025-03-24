import mongoose from "mongoose";

const rentedSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  bookTitle: {
    type: String,
    required: true,
  },
  franchiseName: {
    type: String,
    required: true,
  },
  rentDate: {
    type: Date,
    default: Date.now,
  },
  returnDate: {
    type: Date,
    required: true,
  },
  paymentId: {
    type: String,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  // fields to track book return
  isReturned: {
    type: Boolean,
    default: false,
  },
  actualReturnDate: {
    type: Date,
    default: null,
  },
});

const Rented = mongoose.models.rented || mongoose.model("rented", rentedSchema);

export default Rented;
