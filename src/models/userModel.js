import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  email: {
    type: String,
    required: [true, "Please provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
  membership: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Membership", // Links to the Membership collection
    default: null,
  },
  rentals: [
    {
      bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
      rentalDuration: String, // e.g., "3 days" or "2 hours"
      rentedAt: { type: Date, default: Date.now },
    },
  ],
  referralCode: {
    type: String,
    unique: true,
  },
  referredBy: {
    type: String,
  },
  referrals: [
    {
      referredUserId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
      membershipType: String,
      earnings: { type: Number, default: 0 },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
