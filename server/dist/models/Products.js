"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const product = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    img: {
        type: String,
    },
    rawPrice: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Date,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model("product", product);
//# sourceMappingURL=Products.js.map