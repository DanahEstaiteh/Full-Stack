import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import {
  getProducts,
  updateProduct,
  deleteProduct,
  getProductById,
  generateFirstProducts,
  addProduct
} from '../controllers/ProductController';
import {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
  generateFirstCategories,
  getCategoryById
} from '../controllers/CategoryController';
import { generateUser, loginControl } from '../controllers/LoginController';
import jwt from 'jsonwebtoken';
import {
  getCartItems,
  addItem,
  getItemById,
  updateItem,
  deleteItem
} from '../controllers/CartItemController';
import {
  getCarts,
  addCart,
  getCartById,
  deleteCart
} from '../controllers/CartController';
import cookieParser from 'cookie-parser';
import { verifyToken } from '../controllers/AuthJWT';

export interface IGetUserAuthInfoRequest extends Request {
  user: string | object;
}
export class Routes {
  public routes(app: any): void {
    app.use(cookieParser());

    app.route('/').get((req: Request, res: Response) => {
      res.send('Login');
    });
    app.use(function (req: Request, res: Response, next: () => void) {
      res.header(
        'Access-Control-Allow-Headers',
        'x-access-token,Authorization, Origin, Content-Type, Accept'
      );
      next();
    });

    app.route('/login').post(loginControl);

    // app.use("/api/*",function(req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) {
    //     const token = req.header('token');
    //     if(!token) return res.status(401).send('Access Denied');
    //     try {
    //         const verified = jwt.verify(token,'5:A&:D[h)u{n[]&r');
    //         req.user = verified;
    //     } catch (err) {
    //         res.status(400).send('Invalid Token');
    //     }
    //     next();
    //   })

    // Get all categories
    app.route('/api/categories').get(getCategories);

    // Create a new categorie
    app.route('/api/category').post(addCategory);

    // get a specific categorie
    app.route('/api/categories/:categoryId').get(getCategoryById);

    // update a specific categorie
    app.route('/api/categories/:categoryId').put(updateCategory);

    // delete a specific categorie
    app.route('/api/categories/:categoryId').delete(deleteCategory);

    // generate categrie data
    app.route('/categorie/firstData').get(generateFirstCategories);

    // Get all CartItem
    app.route('/api/cartItems').get(getCartItems);

    // Create a new Item
    app.route('/api/item').post(addItem);

    // get a specific Item
    app.route('/api/items/:itemId').get(getItemById);

    // update a specific Item
    app.route('/api/items/:itemId').put(updateItem);

    // delete a specific Item
    app.route('/api/items/:itemId').delete(deleteItem);

    // Get all Cart
    app.route('/api/carts').get(getCarts);

    // Create a new Cart
    app.route('/api/cart').post(addCart);

    // get a specific Cart
    app.route('/api/carts/:cartId').get(getCartById);

    // delete a specific Cart
    app.route('/api/carts/:cartId').delete(deleteCart);
    // Get all products
    app.route('/api/product').get(getProducts);

    // Create a new product
    app.route('/api/products').post(addProduct);

    // get a specific product
    app.route('/api/product/:productId').get(getProductById);

    // update a specific product
    app.route('/api/products/:productId').put(updateProduct);

    // delete a specific product
    app.route('/api/products/:productId').delete(deleteProduct);

    // generate products data
    app.route('/Product/firstData').get(generateFirstProducts);

    // generate  user
    app.route('/user/firstUser').get(generateUser);
  }
}
