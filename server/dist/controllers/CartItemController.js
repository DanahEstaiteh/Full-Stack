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
exports.getItemById = exports.deleteItem = exports.updateItem = exports.addItem = exports.getCartItems = exports.CartItemMongooseModel = void 0;
const CartItem_1 = __importDefault(require("../models/CartItem"));
exports.CartItemMongooseModel = CartItem_1.default;
const addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const item = new exports.CartItemMongooseModel({
            id: body.id,
            cartId: body.cartId,
            name: body.name,
            price: body.price,
            count: body.count,
        });
        const newItem = yield item.save();
        const allItems = yield exports.CartItemMongooseModel.find();
        res
            .status(201)
            .json({ message: "Item added", data: newItem, allData: allItems });
    }
    catch (error) {
        throw error;
    }
});
exports.addItem = addItem;
const getCartItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield exports.CartItemMongooseModel.find();
        res.status(200).json({ items });
    }
    catch (error) {
        throw error;
    }
});
exports.getCartItems = getCartItems;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    exports.CartItemMongooseModel.findById(req.params.itemId, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});
exports.getItemById = getItemById;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { itemId }, body, } = req;
        console.log({ body, itemId });
        const updatedItem = yield exports.CartItemMongooseModel.findByIdAndUpdate({ _id: itemId }, body);
        console.log({ updatedItem });
        const allItems = yield exports.CartItemMongooseModel.find();
        console.log({ allItems });
        res.status(200).json({
            message: "CartItem updated",
            data: updatedItem,
            allData: allItems,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedItem = yield exports.CartItemMongooseModel.findByIdAndRemove(req.params.itemId);
        const allItems = yield exports.CartItemMongooseModel.find();
        res.status(200).json({
            message: "Item deleted",
            data: deletedItem,
            allData: allItems,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteItem = deleteItem;
//# sourceMappingURL=CartItemController.js.map