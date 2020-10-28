"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const category = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    categoryName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model("category", category);
//# sourceMappingURL=Category.js.map