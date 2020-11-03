"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProductById = exports.generateFirstProducts = exports.deleteProduct = exports.updateProduct = exports.addProduct = exports.getProducts = exports.ProductMongooseModel = void 0;
const Products_1 = __importDefault(require("../models/Products"));
exports.ProductMongooseModel = Products_1.default;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const product = new exports.ProductMongooseModel({
            id: body.id,
            code: body.code,
            name: body.name,
            category: body.category,
            productDescription: body.productDescription,
            tax: body.tax,
            price: body.price,
            img: body.img,
            rawPrice: body.rawPrice,
            count: body.count,
            expirationDate: body.expirationDate,
            color: body.color,
        });
        const newProduct = yield product.save();
        const allProducts = yield exports.ProductMongooseModel.find();
        res
            .status(201)
            .json({ message: "Product added", data: newProduct, allData: allProducts });
    }
    catch (error) {
        throw error;
    }
});
exports.addProduct = addProduct;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield exports.ProductMongooseModel.find();
        res.status(200).json({ products });
    }
    catch (error) {
        throw error;
    }
});
exports.getProducts = getProducts;
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    exports.ProductMongooseModel.findById(req.params.productId, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});
exports.getProductById = getProductById;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { productId }, body, } = req;
        console.log({ body, productId });
        const updateProduct = yield exports.ProductMongooseModel.findByIdAndUpdate({ _id: productId }, body);
        console.log({ updateProduct });
        const allProducts = yield exports.ProductMongooseModel.find();
        console.log({ allProducts });
        res.status(200).json({
            message: "Product Updated", data: updateProduct, allData: allProducts
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProduct = yield exports.ProductMongooseModel.findByIdAndRemove(req.params.productId);
        const allProducts = yield exports.ProductMongooseModel.find();
        res.status(200).json({
            message: "Product deleted",
            data: deletedProduct,
            allData: allProducts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteProduct = deleteProduct;
const generateFirstProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var data = [
        {
            id: 1,
            code: 'product1',
            name: 'Hot Chocolate',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 12,
            price: 15.5,
            img: '../images/hotChocolate.jpg',
            rawPrice: 12,
            count: 30,
            expirationDate: new Date('2021-01-16'),
            color: ''
        },
        {
            id: 2,
            code: 'product2',
            name: 'Tea',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 2,
            price: 3.5,
            img: '',
            rawPrice: 1.8,
            count: 18,
            expirationDate: new Date('2020-11-16'),
            color: '#aa2e25'
        },
        {
            id: 3,
            code: 'product3',
            name: 'Coffee',
            category: 'Drinks',
            productDescription: 'hot',
            tax: 8,
            price: 40,
            img: '../images/coffee.jpg',
            rawPrice: 32,
            count: 55,
            expirationDate: new Date('2022-03-16'),
            color: 'brown'
        },
        {
            id: 4,
            code: 'product4',
            name: 'Soda',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 6,
            price: 33.6,
            img: '',
            rawPrice: 28,
            count: 5,
            expirationDate: new Date('2020-12-16'),
            color: '#bbdefb'
        },
        {
            id: 5,
            code: 'product5',
            name: 'Milkshake',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: 'pink'
        },
        {
            id: 5,
            code: 'product6',
            name: 'Lemonada',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '../images/Lemonada.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-05'),
            color: ''
        },
        {
            id: 5,
            code: 'product7',
            name: 'Coca',
            category: 'Drinks',
            productDescription: 'cold',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product8',
            name: 'PanCake',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product9',
            name: 'Doughnuts',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product10',
            name: 'CheeseCake',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '.../images/Cheesecake.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product11',
            name: 'Brownies',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#3e2723'
        },
        {
            id: 5,
            code: 'product12',
            name: 'Cinnabon',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 40.5,
            img: '../images/cinnabon.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product13',
            name: 'Cokkie',
            category: 'Sweet',
            productDescription: 'yummy',
            tax: 10,
            price: 8.3,
            img: '../images/cookie.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product14',
            name: 'Hamburger',
            category: 'Dinner',
            productDescription: 'mmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/hamburger.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product15',
            name: 'Lasagna',
            category: 'Dinners',
            productDescription: 'mmmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/lasagna.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product16',
            name: 'Chinese Chicken',
            category: 'Dinner',
            productDescription: 'mmmm !',
            tax: 10,
            price: 40.5,
            img: '.../images/chineseChicken.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product17',
            name: 'Turkish Pide',
            category: 'Dinner',
            productDescription: 'mmmm!',
            tax: 10,
            price: 40.5,
            img: '../images/turkisPide.jpg',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#6d4c41'
        },
        {
            id: 5,
            code: 'product18',
            name: 'Steak',
            category: 'Dinners',
            productDescription: 'mmmm =)',
            tax: 10,
            price: 40.5,
            img: '',
            rawPrice: 36,
            count: 15,
            expirationDate: new Date('2020-11-25'),
            color: '#ef9a9a'
        }
    ];
    exports.ProductMongooseModel.collection.insert(data, function (err) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully generate first products data' });
    });
});
exports.generateFirstProducts = generateFirstProducts;
//# sourceMappingURL=ProductController.js.map