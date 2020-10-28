import {  Cart } from "./../types/types";
import { model, Schema } from "mongoose";

 const cart : Schema = new Schema({
    cartId: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
},
{ timestamps: true }
);

export default model< Cart>("cart", cart)