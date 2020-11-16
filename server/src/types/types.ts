import { Document } from 'mongoose';

export interface Product extends Document {
  id: number;
  code: string;
  name: string;
  category: string;
  productDescription: string;
  tax: number;
  price: number;
  img: string;
  rawPrice: number;
  count: number;
  expirationDate: Date;
  color: string;
}

export interface Category extends Document {
  id: string;
  categoryName: string;
  createdAt: Date;
}

export interface CartItem extends Document {
  cartId: number;
  id: number;
  name: string;
  price: number;
  count: number;
}

export interface Cart extends Document {
  cartId: number;
  time: Date;
}

export interface User extends Document {
  userName: string;
  password: string;
}
