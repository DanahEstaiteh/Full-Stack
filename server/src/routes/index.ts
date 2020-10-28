import bodyParser from 'body-parser';
import { Request, Response } from "express";
import { getProducts, updateProduct, deleteProduct, getProductById, generateFirstProducts, addProduct } from '../controllers/ProductController';
import { getCategories, addCategory, updateCategory, deleteCategory , generateFirstCategories , getCategoryById} from '../controllers/CategoryController';
import { CheckoutController } from '../controllers/CheckoutController';
import { UserController } from '../controllers/LoginController';
import * as mongoose from 'mongoose';
import { UserSchema } from '../models/User';
export class Routes {

    checkoutController: CheckoutController = new CheckoutController();
    userController: UserController = new UserController();
    UserMongooseModel = mongoose.model('user', UserSchema);
    public routes(app: any): void {
        app.route('/')
            .get((req: Request, res: Response) => {
                res.send("Login");
            });



        app.route('/')
            .post((req: Request, res: Response) => {
                const username = req.body.username;
                const pass = req.body.password;
                this.UserMongooseModel.find({ "username": { $eq: username }, "password": { $eq: pass } }, (err, data) => {
                    if (data.length == 0) {
                        res.send("Sorry, you enter wrong username and password");

                    } else {
                        res.send("welcome ...");
                    }
                });

            });
        // Get all categories
        app.route('/api/categories')
            .get(getCategories);

        // Create a new categorie
        app.route('/api/category')
            .post(addCategory);

        // get a specific categorie
        app.route('/api/categories/:categoryId')
            .get(getCategoryById);

        // update a specific categorie
        app.route('/api/categories/:categoryId')
            .put(updateCategory);

        // delete a specific categorie
        app.route('/api/categories/:categoryId')
            .delete(deleteCategory);

        // generate categrie data
        app.route('/categorie/firstData')
            .get(generateFirstCategories);

        // Get all products
        app.route('/api/product')
            .get(getProducts);

        // Create a new product
        app.route('/api/products')
            .post(addProduct);

        // get a specific product
        app.route('/api/product/:productId')
            .get(getProductById);

        // update a specific product
        app.route('/api/products/:productId')
            .put(updateProduct);

        // delete a specific product
        app.route('/api/products/:productId')
            .delete(deleteProduct);

        // generate products data
        app.route('/Product/firstData')
            .get(generateFirstProducts);

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