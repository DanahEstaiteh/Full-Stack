import mongoose from 'mongoose';


const Schema = mongoose.Schema;


export const CheckoutsSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
    
});