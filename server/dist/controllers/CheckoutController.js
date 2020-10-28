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
exports.CheckoutController = exports.CheckoutMongooseModel = void 0;
const mongoose = __importStar(require("mongoose"));
const Checkouts_1 = require("../models/Checkouts");
exports.CheckoutMongooseModel = mongoose.model('checkout', Checkouts_1.CheckoutsSchema);
class CheckoutController {
    addNewCheckout(req, res) {
        let newCategorie = new exports.CheckoutMongooseModel(req.body);
        newCategorie.save((err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getCheckouts(req, res) {
        exports.CheckoutMongooseModel.find({}, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    getCheckoutById(req, res) {
        exports.CheckoutMongooseModel.findById(req.params.checkoutId, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    updateCheckout(req, res) {
        exports.CheckoutMongooseModel.findOneAndUpdate({ _id: req.params.checkoutId }, req.body, { new: true }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json(data);
        });
    }
    deleteCheckout(req, res) {
        exports.CheckoutMongooseModel.findOneAndRemove({ _id: req.params.checkoutId }, (err, data) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted checkout!' });
        });
    }
    generateFirstData(req, res) {
        var data = [
            {
                "total": 100,
                "discount": 20,
                "paymentAmount": 80,
                "prodcuts": [{
                        id: "hkjhfdjksafjl",
                        quantity: 3,
                        unitPrice: 55
                    },
                    {
                        id: "fgsfdffdjksafjl",
                        quantity: 2,
                        unitPrice: 30
                    }]
            }, {
                "total": 75,
                "discount": 10,
                "paymentAmount": 66,
                "prodcuts": [{
                        id: "htyergl",
                        quantity: 4,
                        unitPrice: 68
                    },
                    {
                        id: "f8sdkksafjl",
                        quantity: 5,
                        unitPrice: 15
                    }]
            }
        ];
        exports.CheckoutMongooseModel.collection.insert(data, function (err, docs) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully generate fisrt checkout data ' });
        });
    }
}
exports.CheckoutController = CheckoutController;
//# sourceMappingURL=CheckoutController.js.map