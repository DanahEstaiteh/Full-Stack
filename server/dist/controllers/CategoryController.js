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
exports.getCategoryById = exports.generateFirstCategories = exports.deleteCategory = exports.updateCategory = exports.addCategory = exports.getCategories = exports.CategoryMongooseModel = void 0;
const Category_1 = __importDefault(require("../models/Category"));
exports.CategoryMongooseModel = Category_1.default;
const addCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const category = new exports.CategoryMongooseModel({
            id: body.id,
            categoryName: body.categoryName,
            createdAt: body.createdAt
        });
        const newCategory = yield category.save();
        const allCategories = yield exports.CategoryMongooseModel.find();
        res
            .status(201)
            .json({ message: "Category added", product: newCategory, Categories: allCategories });
    }
    catch (error) {
        throw error;
    }
});
exports.addCategory = addCategory;
const getCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield exports.CategoryMongooseModel.find();
        res.status(200).json({ categories });
    }
    catch (error) {
        throw error;
    }
});
exports.getCategories = getCategories;
const getCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    exports.CategoryMongooseModel.findById(req.params.categoryId, (err, data) => {
        if (err) {
            res.send(err);
        }
        res.json(data);
    });
});
exports.getCategoryById = getCategoryById;
const updateCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { categoryId }, body, } = req;
        console.log({ body, categoryId });
        const updateCategory = yield exports.CategoryMongooseModel.findByIdAndUpdate({ _id: categoryId }, body);
        console.log({ updateCategory });
        const allCategories = yield exports.CategoryMongooseModel.find();
        console.log({ allCategories });
        res.status(200).json({
            message: "Category updated",
            category: updateCategory,
            categories: allCategories,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCategory = updateCategory;
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCategory = yield exports.CategoryMongooseModel.findByIdAndRemove(req.params.categoryId);
        const allCategories = yield exports.CategoryMongooseModel.find();
        res.status(200).json({
            message: "Category deleted",
            category: deletedCategory,
            categories: allCategories,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCategory = deleteCategory;
const generateFirstCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var data = [
        {
            id: '1',
            categoryName: 'Drinks',
            createdAt: new Date()
        },
        {
            id: '2',
            categoryName: 'Dinner',
            createdAt: new Date()
        },
        {
            id: '3',
            categoryName: 'Sweet',
            createdAt: new Date()
        }
    ];
    exports.CategoryMongooseModel.collection.insert(data, function (err, docs) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully generate first categories data' });
    });
});
exports.generateFirstCategories = generateFirstCategories;
//# sourceMappingURL=CategoryController.js.map