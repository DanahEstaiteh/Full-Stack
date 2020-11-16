type DataType = Category | Product | Item | Cart | User;

export interface Category {
    _id: string;
    id: string;
    categoryName: string;
    createdAt: Date;
}
export interface Errors {
    name: string;
    rawPrice: string;
    code: string;
    category: string;
    expirationDate: string;
    price: string;
    count: string;
}

export interface Product {
    _id: string;
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

export interface CategoryTitle {
    id: number;
    title: string;
}

export interface ProductItem {
    name: string;
    color: string;
    price: number;
    count: number;
    categoryName: string;
    img: string;
}

export interface Cart {
    _id: string;
    id: number;
    time: Date;
}

export interface Item {
    _id: string;
    id: number;
    cartId: number;
    name: string;
    price: number;
    count: number;
}

export type ApiDataType = {
    message: string;
    status: string;
    allData: DataType[];
    data?: DataType;
};

export type User = {
    _id: string;
    userName: string;
    password: string;
};
