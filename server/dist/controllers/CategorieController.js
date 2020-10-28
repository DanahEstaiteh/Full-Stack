"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorieController = exports.CategorieMongooseModel = void 0;
const mongoose = __importStar(require("mongoose"));
const Categorie_1 = require("../models/Categorie");
exports.CategorieMongooseModel = mongoose.model('categorie', Categorie_1.CategorieSchema);
class CategorieController {
    addNewCategorie(req, res) {
        let newCategorie = new exports.CategorieMongooseModel(req.body);
        newCategorie.save((err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getCategories(req, res) {
        exports.CategorieMongooseModel.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getCategorieById(req, res) {
        exports.CategorieMongooseModel.findById(req.params.categorieId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    updateCategorie(req, res) {
        exports.CategorieMongooseModel.findOneAndUpdate({ _id: req.params.categorieId }, req.body, { new: true }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    deleteCategorie(req, res) {
        exports.CategorieMongooseModel.findOneAndRemove({ _id: req.params.categorieId }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted categorie!' });
        });
    }
    generateFirstData(req, res) {
        var data = [
            {
                "id": "Sally",
                "Name": "Baker",
                "auditFields": "Mining",
                "createdOn": new Date("2017-10-16T17:32:00"),
                "createdBy": "Baker",
                "modifiedOn": new Date("2017-10-16T17:32:00"),
                "modifiedBy": "Mining"
            }, {
                "id": "Sally",
                "Name": "Baker",
                "auditFields": "Mining",
                "createdOn": new Date("2017-10-16T17:32:00"),
                "createdBy": "Baker",
                "modifiedOn": new Date("2017-10-16T17:32:00"),
                "modifiedBy": "Mining"
            }, {
                "id": "Sally",
                "Name": "Baker",
                "auditFields": "Mining",
                "createdOn": new Date("2017-10-16T17:32:00"),
                "createdBy": "Baker",
                "modifiedOn": new Date("2017-10-16T17:32:00"),
                "modifiedBy": "Mining"
            }, {
                "id": "Sally",
                "Name": "Baker",
                "auditFields": "Mining",
                "createdOn": new Date("2017-10-16T17:32:00"),
                "createdBy": "Baker",
                "modifiedOn": new Date("2017-10-16T17:32:00"),
                "modifiedBy": "Mining"
            }, {
                "id": "Sally",
                "Name": "Baker",
                "auditFields": "Mining",
                "createdOn": new Date("2017-10-16T17:32:00"),
                "createdBy": "Baker",
                "modifiedOn": new Date("2017-10-16T17:32:00"),
                "modifiedBy": "Mining"
            }
        ];
        exports.CategorieMongooseModel.collection.insert(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generate  first categorie data ' });
        });
    }
}
exports.CategorieController = CategorieController;
//# sourceMappingURL=CategorieController.js.map