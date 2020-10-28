"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ProductController_1 = require("../controllers/ProductController");
const CategoryController_1 = require("../controllers/CategoryController");
const CheckoutController_1 = require("../controllers/CheckoutController");
const LoginController_1 = require("../controllers/LoginController");
const mongoose = __importStar(require("mongoose"));
const User_1 = require("../models/User");
const CartItemController_1 = require("../controllers/CartItemController");
const CartController_1 = require("../controllers/CartController");
class Routes {
    constructor() {
        this.checkoutController = new CheckoutController_1.CheckoutController();
        this.userController = new LoginController_1.UserController();
        this.UserMongooseModel = mongoose.model('user', User_1.UserSchema);
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.send("Login");
        });
        app.route('/')
            .post((req, res) => {
            const username = req.body.username;
            const pass = req.body.password;
            this.UserMongooseModel.find({ "username": { $eq: username }, "password": { $eq: pass } }, (err, data) => {
                if (data.length == 0) {
                    res.send("Sorry, you enter wrong username and password");
                }
                else {
                    res.send("welcome ...");
                }
            });
        });
        // Get all categories
        app.route('/api/categories')
            .get(CategoryController_1.getCategories);
        // Create a new categorie
        app.route('/api/category')
            .post(CategoryController_1.addCategory);
        // get a specific categorie
        app.route('/api/categories/:categoryId')
            .get(CategoryController_1.getCategoryById);
        // update a specific categorie
        app.route('/api/categories/:categoryId')
            .put(CategoryController_1.updateCategory);
        // delete a specific categorie
        app.route('/api/categories/:categoryId')
            .delete(CategoryController_1.deleteCategory);
        // generate categrie data
        app.route('/categorie/firstData')
            .get(CategoryController_1.generateFirstCategories);
        // Get all CartItem
        app.route('/api/cartItems')
            .get(CartItemController_1.getCartItems);
        // Create a new Item
        app.route('/api/item')
            .post(CartItemController_1.addItem);
        // get a specific Item
        app.route('/api/items/:itemIdId')
            .get(CartItemController_1.getItemById);
        // update a specific Item
        app.route('/api/items/:itemIdId')
            .put(CartItemController_1.updateItem);
        // delete a specific Item
        app.route('/api/items/:itemIdId')
            .delete(CartItemController_1.deleteItem);
        // Get all Cart
        app.route('/api/carts')
            .get(CartController_1.getCarts);
        // Create a new Cart
        app.route('/api/cart')
            .post(CartController_1.addCart);
        // get a specific Cart
        app.route('/api/carts/:cartId')
            .get(CartController_1.getCartById);
        // delete a specific Cart
        app.route('/api/carts/:cartId')
            .delete(CartController_1.deleteCart);
        // Get all products
        app.route('/api/product')
            .get(ProductController_1.getProducts);
        // Create a new product
        app.route('/api/products')
            .post(ProductController_1.addProduct);
        // get a specific product
        app.route('/api/product/:productId')
            .get(ProductController_1.getProductById);
        // update a specific product
        app.route('/api/products/:productId')
            .put(ProductController_1.updateProduct);
        // delete a specific product
        app.route('/api/products/:productId')
            .delete(ProductController_1.deleteProduct);
        // generate products data
        app.route('/Product/firstData')
            .get(ProductController_1.generateFirstProducts);
        // Get all checkouts
        app.route('/api/checkout')
            .get(this.checkoutController.getCheckouts);
        // Create a new checkout
        app.route('/api/checkouts')
            .post(this.checkoutController.addNewCheckout);
        // get a specific checkout
        app.route('/api/checkout/:checkoutId')
            .get(this.checkoutController.getCheckoutById);
        // update a specific checkout
        app.route('/api/checkouts/:checkoutId')
            .put(this.checkoutController.updateCheckout);
        // delete a specific checkout
        app.route('/api/checkouts/:checkoutId')
            .delete(this.checkoutController.updateCheckout);
        // generate checkout data
        app.route('/checkout/firstData')
            .get(this.checkoutController.generateFirstData);
        // generate admin user
        app.route('/user/firstData')
            .get(this.userController.generateadmin);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map