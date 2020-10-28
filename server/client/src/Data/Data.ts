import { Cart, Category, CategoryTitle, Item, Product } from '../Types';

export const categoryData: Category[] = [
  {
    _id: "",
    id: '1',
    categoryName: 'Drinks',

    createdAt: new Date()
  },
  {
    _id: "",
    id: '2',
    categoryName: 'Dinner',

    createdAt: new Date()
  },
  {
    _id: "",
    id: '3',
    categoryName: 'Sweet',

    createdAt: new Date()
  }
];


export const categoryTitle: { id: keyof Category; title: string }[] = [
  { id: 'categoryName', title: 'CategoryName' },
  { id: 'createdAt', title: 'Created At' }
];

export const productTitle: { id: keyof Product; label: string }[] = [
  { id: 'code', label: 'Code' },
  { id: 'name', label: 'Name' },
  { id: 'category', label: 'Category' },
  { id: 'productDescription', label: 'Product Description' },
  { id: 'tax', label: 'Tax(%)' },
  { id: 'price', label: 'Price' }
];

export const cartData: Cart[] = [{ id: 2, time: new Date() }];

export const itemData: Item[] = [
  { cartId: 3, id: 1, name: 'coffe', price: 10, count: 1 },
  { cartId: 2, id: 2, name: 'Milk', price: 5, count: 1 },
  { cartId: 2, id: 3, name: 'Hot Chocolate', price: 15.5, count: 1 },
  { cartId: 2, id: 4, name: 'Turkish Pide', price: 40.5, count: 1 },
  { cartId: 2, id: 5, name: 'Cokkie', price: 8.3, count: 1 }
];
