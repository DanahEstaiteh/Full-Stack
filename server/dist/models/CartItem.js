"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cartItem = new mongoose_1.Schema({
    id: {
        type: Number,
        required: true
    },
    cartId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
    },
}, { timestamps: true });
exports.default = mongoose_1.model("cartItem", cartItem);
//# sourceMappingURL=CartItem.js.map