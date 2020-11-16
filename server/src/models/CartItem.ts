import { CartItem } from './../types/types';
import { model, Schema } from 'mongoose';

const cartItem: Schema = new Schema(
  {
    id: {
      type: Number,
      required: true
    },
    cartId: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    count: {
      type: Number
    }
  },
  { timestamps: true }
);

export default model<CartItem>('cartItem', cartItem);
