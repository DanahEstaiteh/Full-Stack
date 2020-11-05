"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const ProductController_1 = require("../controllers/ProductController");
const CategoryController_1 = require("../controllers/CategoryController");
const CheckoutController_1 = require("../controllers/CheckoutController");
const LoginController_1 = require("../controllers/LoginController");
const CartItemController_1 = require("../controllers/CartItemController");
const CartController_1 = require("../controllers/CartController");
class Routes {
    constructor() {
        this.checkoutController = new CheckoutController_1.CheckoutController();
    }
    routes(app) {
        //  app.all("*", (req: Request, res: Response, next: NextFunction) => {
        //      console.log(req)
        //    })
        // app.all("/api/*",function(req: Request, res: Response, next: NextFunction) {
        //     try {
        //         jwt.verify(req.cookies.token,'5:A&:D[h)u{n[]&r');
        //         console.log(req.cookies.token)
        //     } catch (err) {
        //         console.log("no token")
        //     }
        //     next();
        //   })
        app.route('/')
            .get((req, res) => {
            res.send("Login");
        });
        app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
            next();
        });
        app.route('/login')
            .post(LoginController_1.loginControl);
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
        app.route('/api/items/:itemId')
            .get(CartItemController_1.getItemById);
        // update a specific Item
        app.route('/api/items/:itemId')
            .put(CartItemController_1.updateItem);
        // delete a specific Item
        app.route('/api/items/:itemId')
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
        // generate  user
        app.route('/user/firsUser')
            .get(LoginController_1.generateUser);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=index.js.map