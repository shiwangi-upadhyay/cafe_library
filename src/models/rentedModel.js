import mongoose from "mongoose";

const rentedSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a username"]
    },
})

const Rented = mongoose.models.rented || mongoose.model("rented", rentedSchema);

export default Rented;