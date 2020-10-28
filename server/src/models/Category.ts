import { Category } from "../types/types";
import { model, Schema } from "mongoose";

 const category : Schema = new Schema({
    id: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
},
{ timestamps: true }
);

export default model<Category>("category", category)