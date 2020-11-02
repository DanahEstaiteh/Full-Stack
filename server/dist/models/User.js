"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const mongoose_1 = require("mongoose");
exports.user = new mongoose_1.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.default = mongoose_1.model("user", exports.user);
//# sourceMappingURL=User.js.map