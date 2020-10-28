"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.CategorieSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    auditFields: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    modifiedOn: {
        type: Date,
        required: true
    },
    modifiedBy: {
        type: String,
        required: true
    }
});
//# sourceMappingURL=Categorie.js.map