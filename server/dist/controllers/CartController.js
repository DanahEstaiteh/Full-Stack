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
exports.getCartById = exports.deleteCart = exports.updateCart = exports.addCart = exports.getCarts = exports.CartMongooseModel = void 0;
const Cart_1 = __importDefault(require("../models/Cart"));
exports.CartMongooseModel = Cart_1.default;
const addCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const cart = new exports.CartMongooseModel({
            id: body.id,
            time: body.time,
        });
        const newCart = yield cart.save();
        const allCarts = yield exports.CartMongooseModel.find();
        res
            .status(201)
            .json({ message: "Cart added", data: newCart, allData: allCarts });
    }
    catch (error) {
        throw error;
    }
});
exports.addCart = addCart;
const getCarts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const carts = yield exports.CartMongooseModel.find();
        res.status(200).json({ carts });
    }
    catch (error) {
        throw error;
    }
});
exports.getCarts = getCarts;
const getCartById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    exports.CartMongooseModel.findById(req.params.cartId, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});
exports.getCartById = getCartById;
const updateCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { cartId }, body, } = req;
        const updatedCart = yield exports.CartMongooseModel.findByIdAndUpdate({ _id: cartId }, body);
        const allCarts = yield exports.CartMongooseModel.find();
        res.status(200).json({
            message: "Cart updated",
            data: updatedCart,
            allData: allCarts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCart = updateCart;
const deleteCart = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCart = yield exports.CartMongooseModel.findByIdAndRemove(req.params.cartId);
        const allCarts = yield exports.CartMongooseModel.find();
        res.status(200).json({
            message: "Cart deleted",
            data: deletedCart,
            allData: allCarts,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCart = deleteCart;
//# sourceMappingURL=CartController.js.map