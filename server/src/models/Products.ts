import { Product } from "./../types/types";
import { model, Schema } from "mongoose";

 const product : Schema = new Schema({
    id: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
       
    },
    img: {
        type: String,
        
    },
    
    rawPrice: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    }
},
{ timestamps: true }
);

export default model<Product>("product", product)