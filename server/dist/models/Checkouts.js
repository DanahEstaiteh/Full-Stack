"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckoutsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.CheckoutsSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    paymentAmount: {
        type: Number,
        required: true
    },
});
//# sourceMappingURL=Checkouts.js.map