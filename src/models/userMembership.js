import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, // Membership names like "Monthly", "Quarterly", "Half-Yearly", "Yearly" should be unique
    },
    price: {
        type: Number,
        required: true, 
    },
    duration: {
        type: Number,
        required: true, 
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Membership = mongoose.models.Membership || mongoose.model("Membership", membershipSchema);

export default Membership;