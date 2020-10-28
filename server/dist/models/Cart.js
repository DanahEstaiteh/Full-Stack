"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cart = new mongoose_1.Schema({
    cartId: {
        type: Number,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
}, { timestamps: true });
exports.default = mongoose_1.model("cart", cart);
//# sourceMappingURL=Cart.js.map