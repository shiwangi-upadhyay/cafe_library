import mongoose from "mongoose";

const rentedSchema = new mongoose.Schema({
    username: {
        type: String
    },email:{
        type: String
    }
})

const Rented = mongoose.models.rented || mongoose.model("rented", rentedSchema);

export default Rented;