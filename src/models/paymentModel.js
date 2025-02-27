import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    data:{
        type: mongoose.Schema.Types.Mixed
    }
})

const Payment = mongoose.models.payment || mongoose.model("payment", paymentSchema);

export default Payment;