import { User } from "./../types/types";
import { model, Schema } from "mongoose";


export const user : Schema = new Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{ timestamps: true }
);

export default model<User>("user", user)