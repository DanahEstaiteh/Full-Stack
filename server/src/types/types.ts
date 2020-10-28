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